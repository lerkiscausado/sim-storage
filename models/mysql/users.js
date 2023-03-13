const { sequelize } = require("../../config/mysql")
const { DataTypes } = require("sequelize")
const Storage = require("./storage")

const User = sequelize.define(
    "users",
    {
        nickName:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        nombres:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        apellidos:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        email:{
            type:DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password:{
            type:DataTypes.STRING
        },        
        role:{
            type:DataTypes.ENUM(["user","admin","ips","proveedor"])
        },
        imagenId:{
            type:DataTypes.NUMBER
        },

    },{
        timestamps:true,
    }
)
User.findOneData = async function(id){        
    return await User.findOne({ where: { id }, include:"imagen" })
}
User.findAllData = async function(){
    return await User.findAll()
}

User.belongsTo(Storage,{
    foreignKey:"imagenId",
    as: "imagen"
})
module.exports = User;