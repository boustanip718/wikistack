const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('root get');
});

router.post('/', (req, res) => {
    res.send('root post');
});

router.get('/:id', (req, res) => {
    res.send('root get');
});

router.put('/:id', (req, res) => {
    res.send();
});

router.delete('/:id', (req, res) => {
    res.send('root get');
});


module.exports = router;