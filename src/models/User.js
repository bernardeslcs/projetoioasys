const {Model, DataTypes} = require('sequelize');

class User extends Model{
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            email:DataTypes.STRING,
            password: DataTypes.STRING,
            isAdmin: DataTypes.BOOLEAN,
            paranoid: true,
        },{
            sequelize
        });
    }
}

module.exports = User;