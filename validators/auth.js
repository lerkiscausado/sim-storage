const { check } =require("express-validator")
const validateResults=require("../utils/handleValidator")

const validatorRegister=[
    check("nickName").exists().notEmpty().isLength({min:3, max:99}),
    check("nombres").exists().notEmpty(),
    check("apellidos").exists().notEmpty(),    
    check("password").exists().notEmpty(),
    check("email").exists().notEmpty().isEmail(),
    check("role").exists(),
    check("imagenId").exists(),
    (req, res, next)=> validateResults(req,res,next)
]

const validatorLogin=[
    check("password").exists().notEmpty(),
    check("email").exists().notEmpty().isEmail(),
    (req, res, next)=> validateResults(req,res,next)
]

module.exports ={ validatorRegister , validatorLogin };