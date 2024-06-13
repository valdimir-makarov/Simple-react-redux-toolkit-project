const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
const mongoose = require('mongoose');

// Your MongoDB connection string
const dbURI = 'mongodb+srv://nurfarhanbubun2010049:WDJbp5IDCETGhVEr@cluster0.eltppzv.mongodb.net/';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Connection error', error));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
//mongodb+srv://nurfarhanbubun2010049:WDJbp5IDCETGhVEr@cluster0.eltppzv.mongodb.net/