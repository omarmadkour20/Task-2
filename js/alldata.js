const request = require("request") 
const alldata = ( ldata , rdata , callback)=>{
  const url = "https://api.weatherapi.com/v1/current.json?key=7f97e74ef23b418c97a155211230503&q="+ ldata +" , "+ rdata
  
  request ({url , json : true  } , (error , response) => {
  
      if (error) {
         callback("ERROR HAS OCCURED" , undefined)
      } else if (response.body.error){
         callback(response.body.error.message , undefined)
      }else {
          callback(undefined , response.body.location.name +" and it is "+ response.body.current.condition.text + "and this temp : " + response.body.current.temp_c)
      }
  })
  }
  module.exports=alldata