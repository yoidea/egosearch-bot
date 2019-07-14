// 謎にimportを使うとうまくいかない
const Twitter = require("twitter");
import "dotenv/config";

const client = new Twitter({
  "consumer_key": process.env.CONSUMER_KEY,
  "consumer_secret": process.env.CONSUMER_SECRET,
  "access_token_key": process.env.ACCESS_TOKEN_KEY,
  "access_token_secret": process.env.ACCESS_TOKEN_SECRET
})

client.get("statuses/home_timeline", (error, tweet) => {
  if(error) throw error;
  console.log(tweet[0].text);
});