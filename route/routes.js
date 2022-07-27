const express = require("express")
const apiJsondata = require("../contorller/datafilter")
const dataget = require("../contorller/dataget")

const route = express.Router()




route.get("/api/dataget" ,dataget )
route.post("/api/filterjson" ,apiJsondata )

module.exports = route 
