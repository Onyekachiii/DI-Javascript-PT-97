const express = require('express');
const app = express();
//require the module
const bodyParser = require("body-parser")

app.use(express.static('client'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.sendFile(__dirname + '/client/index.html'));

// to get the from the registration form

app.post('/register', (req, res) => {
    const formdata = req.body;
    console.log(formdata)
    res.send('Welcome, ' + req.body.firstname)
})


app.listen(3000, () => console.log('Example app listening on port 3000!'));