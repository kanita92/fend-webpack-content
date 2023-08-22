const dotenv = require("dotenv");
dotenv.config();

const axios = require("axios");

var path = require("path");
const express = require("express");

const mockAPIResponse = require("./mockAPI.js");

// API credentials
const apiUrl = "https://api.meaningcloud.com/sentiment-2.1";
const apiKey = process.env.API_KEY;
console.log(`Your API key is ${process.env.API_KEY}`);

const app = express();

app.use(express.static("dist"));
app.use(express.static("styles"));

console.log(__dirname);

app.get("/", function (req, res) {
  res.sendFile(path.resolve(__dirname, "../client/views/index.html"));
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log("Example app listening on port 8081!");
});

app.get("/test", function (req, res) {
  console.log("Received request at /test");
  const url = req.query.url;
  console.log("URL received:", url);

  // Check if the API key is present
  if (!apiKey) {
    res.status(500).send("API key is missing");
    return;
  }

  // Make the API call to https://api.meaningcloud.com/sentiment-2.1
  axios
    .get(apiUrl, {
      params: {
        key: process.env.API_KEY,
        lang: "auto",
        txt: url,
      },
    })
    .then((response) => {
      // Handle the API response here
      console.log("Response data:", response.data);
      console.log("Message:", response.data.msg);
      res.send(response.data);
    })
    .catch((error) => {
      // Handle any errors that occur during the API call
      console.error(error);
      res.status(500).send("Error occurred during API call");
    });
});
