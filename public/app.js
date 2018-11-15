const fs = require('fs');
const $path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 5000;
const publicDir = $path.resolve('./public');

app.use(express.static('public'));
app.listen(port, () => console.log(`Chat app listening on port ${port}!`));

app.get('/chat/', (request, response) => {
	response.sendFile($path.join(publicDir, 'index.html'));
});

app.get('/articles/:articleId', (request, response) => {
	let filePath = articleFilePath(request.params.articleId);
	if (fs.existsSync(filePath)) {
		let htmlFile = $path.join(publicDir, 'article.html');
		response.sendFile(htmlFile);
	} else {
		response
			.status(404)
			.send(`Article ${request.params.articleId} not found`);
	}
});
