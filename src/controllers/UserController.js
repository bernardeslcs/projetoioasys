const User = require('../models/User');

module.exports = {

    async index(req,res){
        const users = await User.findAll();

        return res.json(users);
    },


    async store(req,res){
        const {name,email,password,isAdmin} = req.body;

        const user = await User.create({name,email,password,isAdmin});


        return res.json(user);

    }
};