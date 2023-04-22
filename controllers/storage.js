const fs = require("fs")
const { matchedData } = require("express-validator");
const { storageModel } =require("../models");
const { handleHttpError } = require("../utils/handleError");

const PUBLIC_URL=process.env.PUBLIC_URL;
const MEDIA_URL=`${__dirname}/../storage`;


/**
 * Obtener lista de base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getItems =async (req, res)=>{
    try {
        const data = await storageModel.findAllData({})
        res.send({ data })
    } catch (error) {
        handleHttpError(res,"ERROR_GET_ITEMS")
    }    
};

/**
 * Obtener un item de base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getItem =async (req, res)=>{
    try {
        const { id }= matchedData(req)
        const data = await storageModel.findOneData(id)
        res.send({ data })
    } catch (error) {
        handleHttpError(res,"ERROR_GET_ITEM")
    } 
};

/**
 * crear registro de base de datos
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res)=>{
    try {
        const {body, file} =req 
        console.log(file)       
        const fileData={
            filename: file.filename,
            url: `${PUBLIC_URL}/${file.filename}`
        }
        //const data =await storageModel.create(fileData)
        //res.send({data})
        console.log(fileData)
        res.send({message:"CREATE_ITEM"})
    } catch (error) {
        handleHttpError(res,"ERROR_CREATE_ITEM")
    }
    
};

/**
 * actualizar lista de base de datos
 * @param {*} req 
 * @param {*} res 
 */
const updateItem =async (req, res)=>{

};

/**
 * elimianr registro lista de base de datos
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem =async (req, res)=>{
    try {
        const { id }= matchedData(req)
        const dataFile = await storageModel.findById(id)
        await storageModel.deleteOne(id)
        const { filename } = dataFile
        const filePath= `${MEDIA_URL}/${filename}`;
        
        fs.unlinkSync(filePath)
        
        const data={
            filePath,
            delete: 1,
        }
        res.send({ data })
    } catch (error) {
        handleHttpError(res,"ERROR_DELETE_ITEM")
    } 
};

module.exports={ getItems, getItem, createItem,updateItem, deleteItem };