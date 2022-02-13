const connection = require('../config/connection');
const { Users, Thoughts} = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing courses
  await Users.deleteMany({});

  // Drop existing students
  await Thoughts.deleteMany({});

  // Create empty array to hold the students
  const users = [
    {
      "username": "lernantino",
      "email": "lernantino@gmail.com"
    }, 
    {
      "username": "michael33",
      "email": "michael33@gmail.com"
    }, 
    {
      "username": "genaSchool",
      "email": "genaschool@gmail.com"
    }, 
    {
      "username": "naruto",
      "email": "naruto@gmail.com"
    }
  ];

  // Get some random assignment objects using a helper function that we imported from ./data
  const thoughts = [
    {
      "thoughtText": "Here's a cool thought...",
      "username": "lernantino",
    },   
    {
      "thoughtText": "I am s great instructor",
      "username": "michael33",
    }, 
    {
      "thoughtText": "Graduating is though",
      "username": "genaSchool",
    }, 
    { 
      "thoughtText": "I love Sasugay!",
      "username": "naruto",
    }
  ];

  // Add users to the collection and await the results
  await Users.collection.insertMany(users);

  // Add thoughts to the collection and await the results
  await Thoughts.collection.insertMany(thoughts);

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
