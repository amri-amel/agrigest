var express = require('express');
var router = express.Router();
const UserService=require('../services/users.services')

/* GET users listing. */
router.get('/', async function(req, res, next) {
  let users=await UserService.getAllUsers();
  res.json(users);
});

module.exports = router;
