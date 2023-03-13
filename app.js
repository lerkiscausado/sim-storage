require("dotenv").config()
const express =require("express")
const cors =require("cors")
//const { dbConnectMySql } = require("./config/mysql");

//const ENGINE_DB=process.env.ENGINE_DB;
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static("storage"))

const port = process.env.PORT || 3000
/**
 * Rutas
 */
app.use("/api",require("./routes"))

app.listen(port, ()=>{
    console.log("Server Online http://localhost:"+port)
})
