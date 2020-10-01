const express = require('express');
const router = express.Router();
// const addPage = require('../views/addPage.js');
const { Page } = require("../models");
const { addPage } = require("../views");

router.get('/', (req, res) => {
    res.send(req.body);
});

router.post('/', async (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
    
    try {
        function makeSlug(title) {
            return title.replace(/\s+/g, '_').replace(/\W/g, '');
        }

        const page = await Page.create({
            title,
            content,
            slug: makeSlug(title);
        });

        res.redirect('/');
    }
    catch (error) {next(error)}

    // res.json(req.body);
});

router.get('/add', (req, res) => {
    console.log();
    res.send(addPage());
});

module.exports = router;




// const name = req.body.name;
// const email = req.body.email;
// const title = req.body.title;
// const content = req.body.content;
// const status = req.body.status;