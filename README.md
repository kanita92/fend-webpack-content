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

Open the project folder and open two terminals.

1. In the first terminal,to produce the `dist` folder, run `npm run build`.
2. In the first terminal, run the server with `npm run start`.
3. In the second terminal, run `npm run build-prod`, this will open the web browser redirecting to this URL http://localhost:8080/.
4. To run the unit test, run `npm run test`.
5. In the app, enter the URL of the article/blog that you would like to analyze and then click Submit. The sentiment analysis consisting of Polarity, Subjectivity and Text will be displayed following that.

The `index.html` file is located inside `src/client/views`.
