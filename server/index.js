const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const auth = require('./auth');
const setup = require('./start');
const cors = require('cors');



setup(app);
app.use(bodyParser.json());
app.use(cors());
app.use(auth);

app.get('/', (req,res) =>{
    res.send('Lol')
})