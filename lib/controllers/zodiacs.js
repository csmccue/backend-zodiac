const { Router } = require('express');
const { zodiacs } = require('../zodiac-data');

module.exports = Router()
  .get('/:id', (req, res) => {
    let match = '';
    for (const sign of zodiacs) {
      if (sign.id === req.params.id) {
        match = sign;
      }
    }
    res.json(match);
  })

  .get('/', (req, res) => {
    const data = [];
    for (const sign of zodiacs) {
      data.push({ id: sign.id, name: sign.name });
    }
    res.json(data);
  });


  
