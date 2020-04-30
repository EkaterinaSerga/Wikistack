const express = require('express');
const router = express.Router();
const layout = require('.././views');


router.get('/', (req, res) => {
  res.send(layout());
});

// router.post('/', (req, res) => {
//   // res.send(layout());
// });

router.get('/add', (req, res) => {
  res.send(layout());
});



module.export = router;
