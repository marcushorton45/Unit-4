const { User } = require("../models/user");
const { Post } = require("../models/post");

module.exports = {
    addPost: async (req,res) => {
        try {
            let { title, content, status, userId } = req.body;
            await Post.create({ title, content, userId, privateStatus: status });
            res.status(200);
        } catch (error) {
            console.error(error);
            res.status(400).send(error);
        }
    },
    getAllPosts: async (req,res) => {
        try {
            const posts = await Post.findAll({
                where: {privateStatus: false},
                include: [{
                    model: User,
                    required: true,
                    attributes: [`username`]
                }]
            })
            res.status(200).send(posts)
        } catch (error) {
            console.log('ERROR IN getAllPosts')
            console.log(error)
            res.sendStatus(400)
        }
    },
    getCurrentUserPosts: async (req,res) => {
        try {
            const { userId } = req.parmas;
            const posts = await Post.findAll({
                where: { userId: userId },
                include: [
                    {
                        model: User,
                        required: true,
                        attributes: ['username'],
                    },
                ],
            });
            res.sendStatus(200)
        } catch (error) {
            console.log("ERROR IN getCurrentUserPosts");
            console.log(error);
            res.sendStatus(400);
        }
    },
    editPost: async (req,res) => {
        console.log(this.editPost)
        res.sendStatus(200)
    },
    deletePost: async (req,res) => {
        console.log(deletePost)
        res.sendStatus(200)
    },
}