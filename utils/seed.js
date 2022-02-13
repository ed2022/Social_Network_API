const connection = require('../config/connection');
const { Users, Thoughts} = require('../models');
const { getRandomName, getRandomAssignments } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing courses
  await Users.deleteMany({});

  // Drop existing students
  await Thoughts.deleteMany({});

  // Create empty array to hold the students
  const users = [];

  // Get some random assignment objects using a helper function that we imported from ./data
  const thoughts = getRandomAssignments(20);

  // Loop 20 times -- add students to the students array
  for (let i = 0; i < 20; i++) {
    const username = getRandomName();
    const email = fullName.split(' ')[0];
    const thoughts = `${first}${Math.floor(Math.random() * (99 - 18 + 1) + 18)}`;
    const friends = `${first}${Math.floor(Math.random() * (99 - 18 + 1) + 18)}`;

    users.push({
      username,
      email,
      friends,
      thoughts,
    });
  }

  // Add students to the collection and await the results
  await Student.collection.insertMany(students);

  // Add courses to the collection and await the results
  await Course.collection.insertOne({
    courseName: 'UCLA',
    inPerson: false,
    students: [...students],
  });

  // Log out the seed data to indicate what should appear in the database
  console.table(students);
  console.table(assignments);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
