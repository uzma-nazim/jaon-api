const json1  = require("../data/json1.json")
const json2  = require("../data/json2.json")
const dataget = (req, res)=>{


    res.json({dropdown1 :json1,dropdown2:json2})

}
module.exports = dataget 