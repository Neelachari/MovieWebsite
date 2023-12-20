const express = require('express')
const MoviesRoute = express.Router()
const MoviesModal = require('../Model/Movies.model')
const {auth}=require("../Middleware/auth.middleware")

MoviesRoute.get('/movie', async (req, res) => {
    try {
        let Post= await MoviesModal.find()
        res.status(200).send(Post)
       
      } catch (error) {
          res.status(400).send({error:err.message})
      }
})


MoviesRoute.post('/movie', async (req, res) => {
    let postData =new MoviesModal (req.body)
    console.log(postData)
    await postData.save()
    res.status(200).send({ postData: postData, message: "Movie is added Successfully" })
})


MoviesRoute.patch('/movie/:id',auth, async (req, res) => {
    let UpdatePost = await MoviesModal.updateOne({ _id: req.params.id }, req.body)

    res.send({ message: "The Post has been updated Successfully", UpdatePost })
})


MoviesRoute.delete('/movie/:id',auth, async (req, res) => {
    let deletePost = await MoviesModal.deleteOne({ _id: req.params.id })
    
    res.send({ message: "The Post has been deleted Successfully", deletePost })
})



module.exports = MoviesRoute