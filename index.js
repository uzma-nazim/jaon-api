const express = require("express")
const path = require("path")

const cors = require("cors")
const  route  = require("./route/routes")

const app  = express()


//BODY PAERSER
app.use(express.urlencoded({extended:true}))
app.use(express.json())
const staticpath = path.join(__dirname,"/veiws") 

app.use(express.static(staticpath))


const PORT = process.env.PORT || 5000



app.use(cors())
app.use(route)



app.listen(PORT , console.log("Server is Runing"))
