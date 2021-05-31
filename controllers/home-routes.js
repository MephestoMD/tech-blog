const router = require('express').Router();

const { Post, User, Comment } = require('../models');

// Route to render homepage with all posts
router.get('/', async (req, res) => {
  try { 
    const allPosts = await Post.findAll({
      include: [{
        model: User,
        attributes: ['username']},
        {model: Comment,
        attributes: ['content', 'createdAt'],
        include: [{model: User, attributes:['username']}]
      }]
    });
   
    const posts = allPosts.map((i) => i.get({ plain: true }));
    console.log(posts[0].comments)
    res.render('home', {posts, logged_in: req.session.logged_in});
  } catch (err) {
    res.status(400).json(err);
  }
  
});

// Route to render dashboard with posts associated with the current user
router.get('/dashboard', async (req, res) => {
  try {
    if(!req.session.logged_in){
      res.redirect('/login')
    } 
    const myPosts = await Post.findAll({
      where: {user_id: req.session.user_id},
      include: [{
        model: User,
        attributes: ['username']},
        {model: Comment,
        attributes: ['content', 'createdAt'],
        include: [{model: User, attributes:['username']}]
      }]
    });

    const posts = myPosts.map((i) => i.get({ plain: true }));
    res.render('dashboard', {posts, logged_in: req.session.logged_in});
  } catch (err) {
    res.status(400).json(err);
  }
  
});

// Route to take user to the comment page for the selected comment
router.get('/edit/:id', async (req, res) => {
  try {
    if(!req.session.logged_in){
      res.redirect('/login')
    }
      const edPost = await Post.findAll({
      where: {id: req.params.id},
    });
    const post = edPost.map((i) => i.get({ plain: true }));
    // console.log(post)
    res.render('edit', {post, logged_in: req.session.logged_in});
  } catch (err) {
    res.status(400).json(err);
  }
  
});

router.get('/comment/:id', async (req, res) => {
  try {
    if(!req.session.logged_in){
      res.redirect('/login')
    }

      const comPost = await Post.findAll({
      where: {id: req.params.id},
      include: [{
        model: User,
        attributes: ['username']
      }]
    });

    const posts = comPost.map((i) => i.get({ plain: true }));
    res.render('comment', {posts, logged_in: req.session.logged_in});
  } catch (err) {
    res.status(400).json(err);
  }
  
});

// Route to the login page
router.get('/login', (req, res) => {

  if (req.session.logged_in) {
    console.log(req.session.logged_in);
    res.redirect('/');
    return;
  }
  res.render('login');
  })

router.get('/signup', (req, res) =>{
  res.render('signup');
  })

router.get('/post', (req, res) => {
  res.render('post', {logged_in: req.session.logged_in});
})
  




module.exports = router;