# Social_Network_API

## Description 

This is an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. It use Express.js for routing, a MongoDB database, and the Mongoose ODM. In addition to using the Express.js and Mongo, it also uses Moment.  

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Other Criterias Provided by Client 

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Installation 

All that is required is to have the following in your terminal: 
- npm install
- npm run seed 
- npm start
- Then go to insomnia and follow stated below. 

## Navigation and Demo

This application won’t be deployed on the browser but rather you can make all the changes in insomnia as shown below by showing you the API routes being tested in Insomnia.

The following animation shows GET routes to return all users and all thoughts being tested in Insomnia:

![Demo of GET routes to return all users and all thoughts being tested in Insomnia.](./Assets/18-nosql-homework-demo-01.gif)

The following animation shows GET routes to return a single user and a single thought being tested in Insomnia:

![Demo that shows GET routes to return a single user and a single thought being tested in Insomnia.](./Assets/18-nosql-homework-demo-02.gif)

The following animation shows the POST, PUT, and DELETE routes for users being tested in Insomnia:

![Demo that shows the POST, PUT, and DELETE routes for users being tested in Insomnia.](./Assets/18-nosql-homework-demo-03.gif)

The following animation shows the POST and DELETE routes for a user’s friend list being tested in Insomnia:

![Demo that shows the POST and DELETE routes for a user’s friend list being tested in Insomnia.](./Assets/18-nosql-homework-demo-04.gif)

## Resources 
- [MongoDB installation guide on The Full-Stack Blog](https://coding-boot-camp.github.io/full-stack/mongodb/how-to-install-mongodb)
- [Express.js](https://www.npmjs.com/package/express)
- [Mongoose](https://www.npmjs.com/package/mongoose)
- Week 18 activities 
- General Questions on Stack Overflow

## Links 
- Video link:  https://drive.google.com/drive/folders/1FaOV0hey4BhIqbCYzsFm_kcK3BNLThtD?usp=sharing
- GitHub repositor: https://github.com/ed2022/Social_Network_API.git


