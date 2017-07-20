'use strict'

const express = require('express')
const app = express()
const router = express.Router()
var Sequelize = require('sequelize')
var model = require('../models')

router.get('/', function(req, res) {
  model.Movies.findAll()
  .then(data => {
    console.log(data);
    res.render('movies', {data: datas})
  })
})

// router.get('/addmovie', function(req, res) {
//   res.render('addmovie')
// })

// router.post('/', function(req, res) {
//   model.Movies.create(req.body)
//   .then(data => {
//     console.log(data);
//     res.redirect('/movies')
//   })
// })
//
// router.get('/update/:id', function(req, res) {
//   model.Movies.findById(req.params.id)
//   .then(dataMovie => {
//     console.log(dataMovie);
//     res.render('updatemovie', {data: dataMovie})
//   })
// })
//
// router.post('/update/:id', function(req, res) {
//   model.Movie.update(req.body, {
//     where: {
//       id : req.params.id
//     }
//   })
//   .then(data => {
//     console.log(data);
//     res.redirect('/movies')
//   })
// })
//
// router.get('/delete/:id', function(req, res) {
//   model.Movies.destroy({
//     where: {
//       id : req.params.id
//     }
//   })
//   .then(datas => {
//     console.log(datas);
//     res.redirect('/movies')
//   })
// })
//
// module.exports = router
