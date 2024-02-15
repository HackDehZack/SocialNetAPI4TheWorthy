const mongoose = require('mongoose');
const User = require('../models/User');
const Thought = require('../models/Thought');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Seed data
const userData = [
  { username: 'funnyguy123', email: 'funnyguy123@example.com' },
  { username: 'musiclover', email: 'musiclover@example.com' },
  { username: 'adventureseeker', email: 'adventureseeker@example.com' },
  { username: 'foodie', email: 'foodie@example.com' },
  // ... potentially more users
];

const thoughtsData = [
  { thoughtText: 'Why did the chicken cross the road? To get to the other side!', username: 'funnyguy123' },
  { thoughtText: 'Music is the soundtrack of our lives', username: 'musiclover' },
  { thoughtText: 'Life is either a daring adventure or nothing at all', username: 'adventureseeker' },
  { thoughtText: 'Food is love, food is life', username: 'foodie' },
  // ... potentially more thoughts
];

const reactionsData = [
  { reactionBody: 'Haha, that joke cracked me up!', username: 'musiclover' },
  { reactionBody: 'I totally agree, music is everything!', username: 'funnyguy123' },
  { reactionBody: 'So true, let\'s go on an adventure!', username: 'adventureseeker' },
  { reactionBody: 'Yum, that food looks delicious!', username: 'foodie' },
  // ... potentially more reactions
];

const seedDB = async () => {
  try {
    await User.deleteMany({});
    await Thought.deleteMany({});

    // Insert users
    const createdUsers = await User.insertMany(userData);
    
    // Create a mapping object for user lookup by username
    let usersMap = {};
    createdUsers.forEach(user => {
      usersMap[user.username] = user._id;
    });

    // Insert thoughts and link them to users
    const createdThoughts = await Promise.all(thoughtsData.map(async (thought) => {
      const newThought = new Thought({
        thoughtText: thought.thoughtText,
        username: thought.username,
        // Select random reactions from reactionsData
        reactions: reactionsData
          .filter(reaction => reaction.username !== thought.username)
          .slice(0, Math.floor(Math.random() * reactionsData.length))
      });

      const thoughtDoc = await newThought.save();
      await User.updateOne(
        { username: thought.username },
        { $push: { thoughts: thoughtDoc._id } }
      );

      return thoughtDoc;
    }));

    // Establish friendships in a more varied pattern
    for (const user of createdUsers) {
      // Select some random friends for each user, excluding self
      const friendUsernames = userData
        .map(u => u.username)
        .filter(username => username !== user.username);
      const friendsIds = friendUsernames
        .sort(() => 0.5 - Math.random()) // Shuffle array
        .slice(0, 2) // Take first two for friends
        .map(username => usersMap[username]);
      
      await User.updateOne({ _id: user._id }, { $set: { friends: friendsIds } });
    }

    console.log('Database seeded!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    mongoose.connection.close();
  }
};

seedDB();