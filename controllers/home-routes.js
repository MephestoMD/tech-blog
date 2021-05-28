const router = require('express').Router();


const withAuth = require('../utils/auth');

router.get('/', (req, res) =>{
    res.render('home', {logged_in: req.session.logged_in});
  })

router.get('/login', (req, res) =>{

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
  




module.exports = router;