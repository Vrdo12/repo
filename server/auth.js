const { json } = require('express');
const db = require('./db');
const auth = require('express').Router();


auth.post('/log', (req, res) =>{
    const data = {
        login: req.body.login,
        password: req.body.password
    }
    db.register(data).then(
        res.send('Lol')
    )
})

module.exports = auth;