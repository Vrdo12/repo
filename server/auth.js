const { json } = require('express');
const db = require('./db');
const bodyParser = require('body-parser')
const auth = require('express').Router();
const urlencodedParser = bodyParser.urlencoded({ extended: false })


auth.post('/log', urlencodedParser, (req, res) =>{
    const data = {
        login: req.body.login,
        password: req.body.password
    }
    db.register(data).then(
        res.send('Lol')
    )
})

module.exports = auth;