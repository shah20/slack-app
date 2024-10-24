const { App } = require("@slack/bolt");
require("dotenv").config();

const app = new App({
  token: process.env.BOT_TOKEN,
  signingSecret: process.env.SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.APP_TOKEN,
});

app.message("hello", async ({ message, say }) => {
    try {
      say(`Hello <@${message.user}>!`);
    } catch (error) {
        console.log("err")
      console.error(error);
    }
});

app.message(/hi/, async ({ message , say }) => {
    try {
      say(`Hello <@${message.user}>!`);
    } catch (error) {
        console.log("err")
      console.error(error);
    }
});

(async () => {
  const port = 3000;
  await app.start(process.env.PORT || port);
  console.log("Bolt app started!!");
})();