const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
    console.log('main page');
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router; 