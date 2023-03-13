const { sequelize } = require("../../config/mysql")
const { DataTypes } = require("sequelize")

const Storage = sequelize.define(
    "storages",
    {
        url:{
            type: DataTypes.STRING,
            allowNull: false,
        },     
        filename:{
            type: DataTypes.STRING,
        }   
    },{
        timestamps:true,
    }
)
Storage.findAllData = async function(){
    return await Storage.findAll()
}
Storage.findOneData = async function(id){    
    return await Storage.findOne({ where: { id }})
}
Storage.findByIdAndUpdate =async function(id, body){
    return await Storage.update( body , {where: { id }});
}

module.exports = Storage;