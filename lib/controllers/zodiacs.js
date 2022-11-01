const { Router } = require('express');
const { zodiacs } = require('../zodiac-data');

module.exports = Router()
  .get('/zodiacs', (req, res) => {
    console.log('we in the zodiacs now');
    res.json('replace later with zodiac info');
  })

  .get('/', (req, res) => {
    const data = [];
    for (const sign of zodiacs) {
      data.push({ id: sign.id, name: sign.name });
    }
    res.json(data);
  });


  
