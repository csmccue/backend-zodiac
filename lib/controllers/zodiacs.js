const { Router } = require('express');

module.exports = Router()
  .get('zodiacs', (req, res) => {
    console.log('we in the zodiacs now');
    res.json('replace later with zodiac info');
  })
  .get('/', (req, res) => {
    console.log('we out in the /slash space now');
    res.json('SLASH');
  });


  
