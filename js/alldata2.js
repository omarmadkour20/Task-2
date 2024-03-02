const request =require("request")

const alldata2 = ( address , callback)=>{
    const geoUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+ address + ".json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw"
    
    request ({ url : geoUrl , json : true } , (error , response) =>{
        if (error){
            callback("Error" , undefined) 
        }else if(response.body.message){
            callback(response.body.message , undefined)
        }else if(!response.body.features[0]){
            callback("Invalid Country" , undefined)
        }else {
            callback(undefined ,{
                ldata : response.body.features[0].center[0],
                rdata :  response.body.features[0].center[1]
            } )
        }
    
    })
    }

    module.exports = alldata2