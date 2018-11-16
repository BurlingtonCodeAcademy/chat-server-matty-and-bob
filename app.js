const fs = require('fs');
const $path = require('path');
const express = require('express');
const Room = require('./lib/room.js');
const Message = require('./lib/message.js')
const app = express();
const port = process.env.PORT || 5000;
const publicDir = $path.resolve('./chat/public'); 

app.use(express.static('chat/public'));
app.listen(port, () => console.log(`Chat app listening on port ${port}!`));

app.get('/main', (request, response) => {
	mainRoom = new Room("main", [{name: "bod", body: "first post!1"}]);
	response.json(mainRoom);
});

app.post('/main', (request, response) => {
	
})

app.get('/boom-boom-room', (requst, response) => {
	boomBoomRoom = new Room('boomboom', [{name: 'mod', body: 'this room is for NSFW conversations'}]);
	response.json(boomBoomRoom)
})
