const express = require("express")
const dotenv = require("dotenv")
var path = require('path');

dotenv.config()
const PORT = process.env.PORT


const app = express();
app.use(express.static(path.join(__dirname ,"build")))

app.use("/", (req, res) => {
    res.sendFile(path.join(__dirname , "build", "index.html"))
})

app.listen(PORT, ()=>console.log(`server running at port ${PORT}`))