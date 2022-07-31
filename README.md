### SPOKES PEOPLE


## DESCRIPTION

To build a mapping website for a worldwide cycling station spots where the city, location, and exact longitude and latitude are deployed as a search engine.   People can search for bike stations and other related  data.  The exact points on a map using REACT leaflet and a directions leaflet from ESRI API online. Users can login to their profile and save their favorite or frequently used bike station. We gathered data using a fetch API called city bikes, using the companies' Rapid API. The live map feature shows real-time bikes rented from these stations with features pinging and number of bikes taken or returned.  We used REACT, JavaScript and graphQL to build these maps and authentication in our code with JavaScript. The application is mobile responsive - usable out-in-the-field. This was a collaborative project using pair programming and working together on the features and components in REACT. Uses a GitHub repository.

## PROJECT 3  - TEAM

- Shane Williams
- Brian Ward
- Andrew Young
- Ellen Furness


## TABLE OF CONTENTS

  - [Deployed To ](#deployed-to)
  - [Installation](#installation)
  - [Mapping Resources](#mapping-resources/Tools)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [License](#license)
  - [Git Info](#git-info)
  - [Contact](#contact-ua)


## DEPLOYED APPLICATION

- [Heroku](https://stormy-depths-27110.herokuapp.com/)
- [GITHUB Link](https://github.com/bward3/spokes-people.git)
- [GITHUB SSH](git@github.com:bward3/spokes-people.git)

 
## INSTALLATION

  CREATE-REACT-APP, REACT DOM, APOLLO SERVER, graphQL, BCRYPT, TYPESCRIPT, NPM/NODE, EXPRESS-SERVER.js, BACKEND - MONGOOSE/MONGO, Queries and Mutations, CRUD
  JWT - Authentification, API - Sensitive Key, PWA, Service-worker, VSCODE - Prettier, BULMA open source CSS framework, Component-level CSS, HEROKU.


# SCRIPTS:

# MAIN:

   "start": "node server/server.js --ignore client",
    "develop": "concurrently \"cd server && npm run watch\" \"cd client && npm start\"",
    "install": "cd server && npm i && cd ../client && npm i",
    "seed": "cd server && npm run seed",
    "build": "cd client && npm run build"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "concurrently": "^5.3.0"
  },
  "dependencies": {
    "bcrypt": "^5.0.1",
    "bulma": "^0.9.4",
    "jsonwebtoken": "^8.5.1",
    "jwt-decode": "^3.1.2"

# CLIENT:

  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "seed": "node seeds/seed.js",
    "watch": "nodemon server.js"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "apollo-server-express": "^3.6.2",
    "express": "^4.17.2",
    "graphql": "^16.3.0",
    "mongoose": "^6.1.8"
  },
  "devDependencies": {
    "nodemon": "^2.0.6"
  
# SERVER
  
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "seed": "node seeds/seed.js",
    "watch": "nodemon server.js"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "apollo-server-express": "^3.6.2",
    "express": "^4.17.2",
    "graphql": "^16.3.0",
    "mongoose": "^6.1.8"
  },
  "devDependencies": {
    "nodemon": "^2.0.6"

Deploying to Heroku:

[To install the Heroku CLI](https://coding-boot-camp.github.io/full-stack/heroku/how-to-install-the-heroku-cli)

[To deploy a project on Heroku](https://coding-boot-camp.github.io/full-stack/heroku/heroku-deployment-guide)

[Heroku documentation on creating a Heroku remote](https://devcenter.heroku.com/articles/git#creating-a-heroku-remote)


  
## MAPPING RESOURCES

[CITY BIKES API](http://api.citybik.es/v2/networks/)
[CITY BIKES INTERACTIVE MAP](https://citybik.es/)

[REACT LEAFLET](https://react-leaflet.js.org/)
[NPM LEAFLET GEOSEARCH](https://www.npmjs.com/package/leaflet-geosearch)
[LEAFLET](https://leafletjs.com/)
[ESRI Leaflet](https://developers.arcgis.com/esri-leaflet/)


[Open Steet Map](https://www.openstreetmap.org/)
[Nomination](https://nominatim.openstreetmap.org/ui/search.html?q=)
[MAPS PLATFORM](https://mapsplatform.google.com/pricing/)
[PLURAL](https://www.pluralsight.com/guides/how-to-use-geolocation-call-in-reactjs)

[ArcGIS API for JavaScript 3.41, Directions Widget](https://developers.arcgis.com/javascript/3/)
[YOUTUBE - Display JSON data on a Map using React Leaflet](https://www.youtube.com/watch?v=cK7zIoC4lEY)


## ADDITIONAL TOOLS:

[BULMA](https://bulma.io/)
[MOQUPS] (https://app.moqups.com)
[DISCORD](https://discord.gg/24vM696N)
[PAIR PROGRAMMING](https://www.codementor.io/pair-programming)


## USAGE

A BUILT APP TO LOCATE BIKE STATIONS THROUGOUT THE WORLD


# CONTRIBUTION

Open to any and all contributions!


# LICENSE

This application is covered under the ISC open source license.
![License](https://img.shields.io/badge/license-ISC-brightgreen)



# CONTACT US

For additional help or questions about collaboration, please reach out to [SPOKES PEOPLE](https://github.com/bward3/spokes-people)


