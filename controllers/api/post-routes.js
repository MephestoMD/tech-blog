const router = require('express').Router();
const { Post } = require('../../models');
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

// Route to update a particular post by ID
router.put('/update/:id', withAuth, async (req, res) => {
    try {
        const updPost = await Post.update({
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.user_id
        },
        {where: {id: req.params.id}},
        );
            res.status(200).json(updPost);
          } 
          catch (err) {
            res.status(400).json(err);
           
            }
});

// Route to delete a particular post by ID
router.delete('/delete/:id', withAuth, async (req, res) => {
    try {
        const delPost = await Post.destroy({where: {id: req.params.id}});
            res.status(200).json(delPost);
          } 
          catch (err) {
            res.status(400).json(err);
           
            }
});


module.exports = router;