const fs = require('fs');
const $path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 5000;
const publicDir = $path.resolve('./public');
const libDir = $path.resolve('./lib')
import Message from 'message'

app.use(express.static('public'));
app.listen(port, () => console.log(`Chat app listening on port ${port}!`));

app.get('/chat', (request, response) => {
  const allMessages = getAllMessages()
  response.sendFile(allMessages)
})