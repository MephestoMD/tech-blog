const router = require('express').Router();
const { User, Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/new', withAuth, async (req, res) => {
    try {
        const newPost = await Post.create({
            title: req.body.title,
            content: req.body.content,
            username: req.session.username
        });
            res.status(200).json(newPost);
          } 
          catch (err) {
            res.status(400).json(err);
            }
});

module.exports = router;