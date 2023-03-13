const ENGINE_DB=process.env.ENGINE_DB
const pathModels = ENGINE_DB === "nosql" ? "./nosql" : "./mysql";
const models={
    storageModel:require(`${pathModels}/storage`),    
}
module.exports=models