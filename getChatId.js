const fs = require("fs");
const { Client } = require("whatsapp-web.js");

const client = new Client({
  puppeteer: { headless: true, args: ["--no-sandbox"] },
  session: JSON.parse(fs.readFileSync(__dirname + "/session.json", { encoding: "utf8" })),
});

client.initialize();

client.on("ready", () => {
  console.log("To get CHAT_ID, send !getid in chat where you want to send news.")
});

client.on("message_create", async (msg) => {
    if (msg.fromMe && msg.body.startsWith("!getid")) {
        msg.reply("Below is the chat id of this chat.");
        msg.reply(msg.to);
      console.log("CHAT_ID generated successfully");
      return;
    }
});
