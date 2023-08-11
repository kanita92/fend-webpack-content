const dotenv = require("dotenv");
dotenv.config();

var path = require("path");
const express = require("express");

const mockAPIResponse = require("./mockAPI.js");

const apiUrl = "https://api.meaningcloud.com/sentiment-2.1";
const apiKey = process.env.API_KEY;
console.log(`Your API key is ${process.env.API_KEY}`);

const app = express();

app.use(express.static("dist"));
app.use(express.static("styles"));

console.log(__dirname);

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
  console.log("Example app listening on port 8080!");
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

const getSentiment = async (text) => {
  const response = await axios.post(apiUrl, {
    key: apiKey,
    lang: "auto",
    txt: text,
  });
  return response.data;
};

const text = "This is a very happy news article.";
const sentiment = await getSentiment(text);
console.log(sentiment);
