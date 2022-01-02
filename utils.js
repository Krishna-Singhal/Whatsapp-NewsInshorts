const axios = require('axios');
const {MessageMedia} = require('whatsapp-web.js');
const config = require('./config');

var oldTime = null;

async function getRawNews(category) {
    let axiosConfig = {
        method: 'get',
        url: `https://inshortsapi.vercel.app/news?category=${category}`
    };
    return axios(axiosConfig)
        .then(async function (response) {
            var data = response.data.data;
            if (Object.keys(data).length > 0) {
                return data;
            } else {
                return new Object();
            }
        })
        .catch(function (error) {
            console.log(error);
            return new Object();
        });
}

async function getNews(category) {
    var news = await getRawNews(category);
    if (news.length > 0) {
        var newsData = [];
        for (var i = 0; i < news.length; i++) {
            var data = news[i];
            var date = data.date.split(",", 1)[0];
            newsData.push([
                getUnixTime(date, data.time),
                data.title,
                data.content,
                data.readMoreUrl,
                data.imageUrl,
                data.time + " " + data.date
            ]);
        }
        newsData.sort(function(a, b) {
            return a[0] - b[0];
        });
        var newsSorted = {}
        newsData.forEach(function(item){
            newsSorted[item[0]] = {
                title: item[1],
                content: item[2],
                url: item[3],
                imageUrl: item[4],
                datetime: item[5]
            }
        })
        return newsSorted;
    } else {
        return new Object();
    }
}

async function sendNews(client, category) {
    var news = await getNews(category);
    console.log(news);
    if (Object.keys(news).length > 0) {
        if (oldTime == null) {
            oldTime = (Object.keys(news)).at(-1);
        } else {
            keys = Object.keys(news);
            for (i=0; i<keys.length; i++) {
                if (oldTime < keys[i]) {
                    var text = `*${news[keys[i]].title}*\n\n${news[keys[i]].content}\n\n*Read More:* ${news[keys[i]].url}\n\n*${news[keys[i]].datetime}*`;
                    let respoimage = await axios.get(news[keys[i]].imageUrl, { responseType: 'arraybuffer' }).catch(function(error) {
                        return "error";
                    });
                    await client.sendMessage(config.chat_id, new MessageMedia("image/jpg", Buffer.from(respoimage.data).toString('base64'), "newsInshort"), { caption: text });
                    oldTime = keys[i];
                }
            }
        }
    }
}

function getUnixTime(date, time) {
    let timeString = date + " " + time;
    return (Date.parse(timeString))/1000;
}


module.exports = {sendNews};
