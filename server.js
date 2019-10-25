const express = require('express')
const app = express()
const port = 8080
const path =  __dirname +'/public/';

app.get('/', (req,res) =>
	res.sendFile(path+"index.html")
);

app.get('/log_in', (req,res) =>
	res.send("LOGIN PAGE")
);

app.get('/catalog', (req,res) =>
	res.sendFile(path+"resto.html")
);

app.get('/resto', (req,res) =>
	res.sendFile(path+"resprofile.html")
);







app.use(express.static('public'))

app.listen(port, () => {
	console.log(`Example app listening on port ${port}!`)
});
