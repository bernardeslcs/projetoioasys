const {Model, DataTypes} = require('sequelize');

class Movie extends Model{
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            nameDirector: DataTypes.STRING,
            gender: DataTypes.STRING,
            duration: DataTypes.INTEGER,
            votes: DataTypes.FLOAT,
            details: DataTypes.STRING,
            paranoid: true,
        },{
            sequelize
        });
    }
}

module.exports = Movie;