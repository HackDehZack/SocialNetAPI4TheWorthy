const mongoose = require('mongoose');
const User = require('../models/User');
const Thought = require('../models/Thought');
const Reaction = require('../models/Reaction');
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Seed data
const userData = [
  { username: 'alice', email: 'alice@example.com' },
  { username: 'bob', email: 'bob@example.com' },
  // ... more users
];

const thoughtsData = [
  { thoughtText: 'Thinking about MongoDB', username: 'alice' },
  { thoughtText: 'I love Node.js', username: 'bob' },
  // ... more thoughts
];

const seedDB = async () => {
  try {
    await User.deleteMany({});
    await Thought.deleteMany({});

    // Insert users
    const createdUsers = await User.insertMany(userData);
    
    let usersMap = {};
    createdUsers.forEach(user => {
      usersMap[user.username] = user._id;
    });

    // Insert thoughts and link them to users
    const createdThoughts = await Promise.all(thoughtsData.map(async (thought) => {
      const newThought = new Thought({
        thoughtText: thought.thoughtText,
        username: thought.username,
        reactions: [], // Initially no reactions
      });

      const thoughtDoc = await newThought.save();
      await User.updateOne(
        { username: thought.username },
        { $push: { thoughts: thoughtDoc._id } }
      );

      return thoughtDoc;
    }));

    // Add friends (for simplicity, each user is friends with all others)
    for (const user of createdUsers) {
      const friendsIds = createdUsers
        .filter(u => u.username !== user.username)
        .map(u => u._id);
      
      await User.updateOne({ _id: user._id }, { $set: { friends: friendsIds } });
    }

    // Add reactions to the first thought
    if (createdThoughts.length > 0) {
      const thought = createdThoughts[0];
      await Thought.updateOne(
        { _id: thought._id },
        { $push: { reactions: { reactionBody: 'Great thought!', username: 'bob' } } }
      );
    }

    console.log('Database seeded!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    mongoose.connection.close();
  }
};

seedDB();