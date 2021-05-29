const router = require('express').Router();
const { User } = require('../../models');

// Route to create user on signup
router.post('/signup', async (req, res) => {
    try {
    console.log('hello');
      const userData = await User.create(req.body);
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.username = userData.username;
        req.session.logged_in = true;
        res.status(200).json(userData);
      });

    } catch (err) {
        console.log('oops')
      res.status(400).json(err);
    }
  });

// Route to login along with data validation
  router.post('/login', async (req, res) => {
    try {
      const userData = await User.findOne({ where: { username: req.body.username } });
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      const validPassword = await userData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        
        res.json({ user: userData, message: 'You are now logged in!' });
      });
  
    } catch (err) {
      res.status(400).json(err);
    }
  });

  // Route to destroy user session upon logout
  router.post('/logout', (req, res) => {
  
      if (req.session.logged_in) {
        // console.log(flag)
        req.session.destroy();
        res.json(200);
    } else {
      res.status(400).json(err);
    }
  });

  module.exports = router;