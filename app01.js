const express = require("express");
const app = express();
let con;
app.get("/", (req,res)=>{
    console.log("1.연동전");
    con = connect();
    con.then((msg)=>{ //비동기방식으로 가져온 결과값을 처리..? //con.then: 비동기방식 처리
        console.log("3. 연동 안료 후 특정기능 사용");
        res.send("con => "+msg); //resolve로 보낸 msg 받아옴.
    })
    
});
app.get("/async", async(req,res)=>{ //async:비동기입니다 라는 뜻, 이 함수 안에는 비동기방식으로 처리되는것이 있다.
    console.log("1.연동전");
    con = await connect(); //비동기방식으로 처리,await:이게 비동기방식으로 작동하는데 그때 까지 내가 기다려줄게
    console.log("3. 연동 안료 후 특정기능 사용.async");
    res.send("con => "+con); //resolve로 보낸 msg 받아옴.
       
});
const connect = () =>{
    let msg; 

    return new Promise((resolve => setTimeout(()=>{ //비동기방식
        msg = "DB연동 되었습니다!!!async";
        console.log("2. DB연동하는 중...async");
        resolve(msg); //msg라는 메세지 전달, 전달할게 있으면 resolve라는 객체를 통해서 전달
    },1000)));
    //return new Promise: 비동기방식으로 동기방식으로 가져오겠다는 약속
    //return msg;
    // [object Promise] :비동기방식으로 처리된 결과를 동기로 바꿔서 가져옴
}
app.listen(3000,()=>{console.log("3000 서버 실행");});
//동기방식: 우리가 생각하는 순서대로 위에서부터 실행하면서 읽고 내려 오는 것.
