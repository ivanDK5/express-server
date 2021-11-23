var express = require('express');
var router = express.Router();
const db= require('../db')
const Users=db.models.Users

/* GET users listing. */
router.get('/', function(req, res, next) {
 const users=Users.findMany()
 res.send({users:users})
});


/* GET users listing. */
router.get('/:id', function(req, res, next) {
  const user=Users.findOne({id:req.params.id})
  res.status(200).send({users:user})
 });
 


/* POST users listing. */
router.post('/', function(req, res, next) {
  const user=Users.createOne(req.body)
  res.status(201).send({user:user})
 });



/* PUT users listing. */
router.put('/:id', function(req, res, next) {
  const user=Users.updateOne({id:req.params.id},req.body)
  res.status(200).send({user:user})
 });


/* Remove users listing. */
router.delete('/:id', function(req, res, next) {
  const user=Users.remove({id:req.params.id})
  res.status(200).send({user:user})
 });

module.exports = router;
