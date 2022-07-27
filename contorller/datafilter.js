const json1 = require("../data/json1.json")
const json2 = require("../data/json2.json")

const apiJsondata = (req, res) => {

    let filterRowkey1 = json1.filter((e)=>{ return e.RowKey==req.body.RowKey}) 
    let filterIOkey1 = json2.filter((e)=>{ return e.IO==req.body.IOkey}) 

    let checkbothkey = filterRowkey1.filter((e)=>{return e.RowKey== filterIOkey1[0].IO})
    
    res.json({finaldata:checkbothkey})

    // let filter = json1.filter((obj1) => {
    //     return json2.find((obj2)=>{
    //         return obj1.RowKey == obj2.IO


    //     })
        
    // })
    // console.log(filter);


}
module.exports = apiJsondata 