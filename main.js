const express = require("express");
const app = express();
const config = require("./config");
const utils = require ("./utils");
const { Client } = require("whatsapp-web.js");

const client = new Client({
  puppeteer: { headless: true, args: ["--no-sandbox"] },
  session: config.session,
});

client.initialize();

client.on("auth_failure", () => {
  console.error(
    "There is a problem in authentication, Kindly set the env var again and restart the app"
  );
});

client.on("ready", async () => {
  setInterval(async () => {
      await utils.sendNews(client, config.category);
  }, config.delay*1000);
});

client.on("disconnected", (reason) => {
  console.log("Client was logged out", reason);
});

app.get("/", (req, res) => {
  res.send(
    '<h1>Whatsapp-NewsInshort Bot is Up and Running<h1><br>' + 
    '<br>This Bot is a part of <a href="https://t.me/Ks_Projects">KS Projects</a>'
  );
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server listening at Port: ${process.env.PORT || 5000}`);
});
