const request = require("request") 
const alldata = require("./alldata")
const alldata2= require ("./alldata2")
const Country = process.argv[2]
alldata2( Country , (error , data )=>{
    console.log("Error : " , error)
    console.log("Data : " , data)


    alldata(data.rdata , data.ldata , (error , data)=>{
        console.log("Error : ", error)
        console.log("Data : ", data)
    })
})
