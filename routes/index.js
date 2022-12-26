var express = require('express');
var router = express.Router();

const getDateAsString = () => {
  const date = new Date();

  return `${date.getUTCDate()}/${date.getMonth()}/${date.getFullYear()}`;
};

const messages = [
  {
    text: 'Hi there!',
    user: 'Armando',
    added: getDateAsString(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: getDateAsString(),
  },
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages });
});

module.exports = router;
