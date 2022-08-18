import express from "express"
import "dotenv/config"
import path from "path"
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);

console.log("file name", __filename)

const __dirname = path.dirname(__filename);
console.log("dir name", __dirname)


const PORT = process.env.PORT || 4000


const app = express();
app.use(express.static(path.join(__dirname ,"build")))

app.use("/", (req, res) => {
    res.sendFile(path.join(__dirname , "build", "index.html"))
})

app.listen(PORT, ()=>console.log(`server running at port ${PORT}`))