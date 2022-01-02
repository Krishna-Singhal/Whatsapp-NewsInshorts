# Whatsapp-NewsInshorts

---
Please see Sumanjay's [NewsInshorts Api](https://github.com/cyberboysumanjay/Inshorts-News-API "NewsInshorts Api") before seeing this repo.

> This Bot can be stopped anytime because this bot is using third party Api which can be stop working anytime.

---

**This is a Automated Whatsapp Bot which sends News of your category to specific chat.**

## Deploy on Heroku
 
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/Krishna-Singhal/Whatsapp-NewsInshorts/tree/master)

## Setup

This bot needs only 4 Environmental Variables:-

1. SESSION

    Get it from [here](https://github.com/tuhinpal/WhatsBot/wiki/Deploy-with-Heroku#1-you-have-to-create-a-whatsapp-session-that-whatsbot-can-start-you-can-do-it-by-cloning-this-repo-and-run-gentokenjs-you-can-follow-these-steps-also-). ([credits](https://github.com/tuhinpal/ "Tuhin Pal"))

2. CHAT_ID

    Run following code in terminal.

    ```shell
    git clone https://github.com/Krishna-Singhal/Whatsapp-NewsInshorts.git

    cd Whatsapp-NewsInshorts

    npm install
    ```

    Now get your session.json file and paste that file in root directory.
    Now run

    ```shell
    npm run getChatId
    ```
    Now send !getid in chat where you want to send automated News.

3. CATEGORY

    Categories can be found [here](https://github.com/cyberboysumanjay/Inshorts-News-API#news-categories). ([credits](https://github.com/cyberboysumanjy "Sumanjay"))

4. DELAY

    Delay in how much, bot will parse news from Api.
    This is not the delay of messages which bot will send. Defaults to 150 seconds.

---

### Credits :

- [Whatsapp Web JS](https://github.com/pedroslopez/whatsapp-web.js/ "Whatsapp Web JS") - This project is fully depended on this Library
- [NewsInshorts API](https://github.com/cyberboysumanjay/Inshorts-News-API "NewsInshorts API") - Thanks to [Sumanjay](https://github.com/cyberboysumanjay "Sumanjay") for his NewsInshorts API

:star: this repo and show some :heart: if you found this bot useful.

# © [Krishna Singhal](https://t.me/Ks_Projects)
