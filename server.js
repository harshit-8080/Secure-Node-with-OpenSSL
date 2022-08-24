const fs = require("fs");
const https = require("https");
const express =require("express");
const helmet = require("helmet");


const app = express();

app.use(helmet());

app.get("/", (req, res)=>{

    return res.status(200).send({"msg":"secure project home page"})
})


https.createServer({
    key:fs.readFileSync('key.pem'),
    cert:fs.readFileSync('cert.pem')
},app).listen(3000,()=>{
    console.log("server started at 3000 for secure node js project");
})

