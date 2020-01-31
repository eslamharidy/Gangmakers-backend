const {Router} = require('express')
const Post= require('./model')
const router = new Router()



//add Post
router.post('/user/:id/posts', async (req,res,next) => {

  const post = {
    owner: req.body.owner,
    content: req.body.content,
    userId: req.params.id
}

 const newpost = await  Post.create(post)
    res.send(newpost)
})


//get all posts
router.get('/user/:id/posts', (req, res, next) => {
  
    Post.findAll( {where: {userId: req.params.id}})
      .then(result => res.send(result))
      .catch(error => next(error))
  })




module.exports = router 