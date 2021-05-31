const router = require('express').Router();
const { User, Post } = require('../../models');
const withAuth = require('../../utils/auth');

// Route to create a new post
router.post('/new', withAuth, async (req, res) => {
    try {
        const newPost = await Post.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.user_id
        });
            res.status(200).json(newPost);
          } 
          catch (err) {
            res.status(400).json(err);
           
            }
});

module.exports = router;