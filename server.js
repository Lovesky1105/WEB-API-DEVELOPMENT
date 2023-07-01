const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

// MongoDB connection string
const mongoUri = 'mongodb+srv://p20012535:Tengteng8132002@gettingstarted.6yl4h3h.mongodb.net/5014CEM';

// Connect to MongoDB
MongoClient.connect(mongoUri, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to MongoDB');

    const db = client.db();
    const collection = db.collection('web_apis');

    // Route for fetching and displaying data
    app.get('/data', async (req, res) => {
      try {
        // Fetch data from the collection
        const data = await collection.find().toArray();

        // Send the data as the response
        res.json(data);
      } catch (error) {
        console.error('Failed to fetch data:', error);
        res.status(500).send('Failed to fetch data');
      }
    });

    // Root route handler
    app.get('/', (req, res) => {
      res.send('Hello, World!');
    });

    // Start the server
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch(error => {
    console.error('Failed to connect to MongoDB:', error);
  });
