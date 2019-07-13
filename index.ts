import fetch from "node-fetch";
import "dotenv/config";

interface Payload {
  username: string;
  text: string;
  icon_emoji: ":ghost:" | ":hankey:";
}
interface Headers {
  "Content-Type": "application/json";
}

const url: string = process.env.WEB_HOOK_URL;
const text: Payload = {
  "username": "egosearch-bot",
  "text": "Hello from egosearch-bot!",
  "icon_emoji": ":hankey:"
};
const headers: Headers = {"Content-Type": "application/json"};
fetch(url, {
  method: "POST",
  headers,
  body: JSON.stringify(text)
})
  .then(res => res.statusText)
  .then(console.log)
  .catch(console.error);