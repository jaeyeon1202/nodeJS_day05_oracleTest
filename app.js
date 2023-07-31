const express = require("express");
const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.urlencoded({extended:true}));
const router = require("./src/routers/router")(app); //불러올때는 함수 형식


app.use("/", router);


app.set("views", "./src/views");
app.set("view engine","ejs");


app.listen(3000, ()=>{console.log("3000 서버 실행")})