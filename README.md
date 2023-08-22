# Evaluate a News Article with Natural Language Processing Udacity Project

## Table of Contents

- [Project Description](#description)
- [Usage](#usage)
- [Instructions](#instructions)

## Project Description

This project builds a web tool using webpack that allows user to run Natural Language Processing (NLP) on articles or blogs found on websites. To analyze the article/blog, an external API call is made to MeaningCloud API and response such as Polarity,Subjectvity and Text are received based on the website URL the user provides in the front-end form. The build tool used in this project is Webpack, the external API used is MeaningCloud, the web application framework for routing is Express. The project also offers offline capabilites using Service worker. The Webserver is Node and unit tests are also available in the project that uses the Jest library. Dependencies that are installed in the package.json file are axios,body-parser,cors,dotenv,express,jest-fetch-mock,webpack and webpack-cli. These dependencies have been installed using 'npm install' command. Different plugins and loaders have also been installed in the project so that webpack can function correctly.Sass has been utilized in this project as well.

## Usage

This web tool can be used to run Natural Language Processing (NLP) on articles or blogs found on websites.

## Instructions

Open the project folder and open two terminals. In the first terminal, run the following command `npm build`, this will create the dist folder. Then run `npm run build-dev` which will build and start the webpack dev server at port 8080. In the second terminal, run the following command `npm run build-prod` This will open the web tool in port 8081. Then run `npm start` in terminal 2, which will run the Express server.

In the app running on http://localhost:8081/ , enter the URL of the article/blog that you would like to analyze and then click Submit. The sentiment analysis consisting of Polarity, Subjectivity and Text will be displayed following that.

The `index.html` file is located inside `src/client/views`.
