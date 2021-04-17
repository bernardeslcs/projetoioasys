const Movie = require('../models/Movie');
//const { moviesRepository } = require("../repositories/movie.repository");

module.exports = {
    async index(req,res){
        const movies = await Movie.findAll();

        return res.json(movies);
    },
    async store(req,res){
        const {name,email,password,isAdmin} = req.body;

        const movie = await Movie.create({name, nameDirector, gender, duration, votes, details});


        return res.json(movie);

    }
};