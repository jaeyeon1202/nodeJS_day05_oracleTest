module.exports = (app) =>{ //함수화 해서 내보낼 수 있음
    
    const memberRouter = require("./member/member_router");
    app.use("/member", memberRouter);
    
    const router = require("express").Router();

    router.get("/", (req,res)=>{
        //res.send("기본 경로 연동11111");
        res.render("index");
    })
    return router;
}