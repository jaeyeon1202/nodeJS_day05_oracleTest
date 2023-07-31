const oracledb = require("oracledb");
const dbConfig = require("../../../config/database/db_config");
oracledb.autoCommit = true; //커밋 자동실행

const ser = require("../../service/member/member_service");

const list = async (req,res) =>{
    const list = await ser.getList();
    console.log("controller list: ",list);
    /*
    console.log(dbConfig);
    let con = await oracledb.getConnection(dbConfig); //연결시켜주는 객체
    console.log("con: ", con); 
    oracledb.outFormat = oracledb.dbObjectAsPojo;
    let result = await con.execute("select * from members02");
    console.log("result: ", result);*/
   // await con.close();
    res.render("member/member_index", {list});
}
const registerForm =  (req,res)=>{
    res.render("member/register_form");
} 
const register = async (req, res)=> {
    console.log("register: ", req.body );

    let msg = await ser.insert( req.body );

    res.send(msg);
}
const memberView = async (req,res) =>{
    console.log("memberView ctrl: ", req.params);
    const member = await ser.getMember(req.params);
    console.log("controller memberview: ", member);
    //res.send("memberView");
    res.render("member/member_view",{member});
}
const modifyForm = async(req,res) => {
    console.log("ctrl modify: ", req.query);
    console.log("ctrl modify: ", req.params);

    const member = await ser.getMember(req.query);
    console.log("ctrl modify: ", member);

    res.render("member/modify_form",{member});
}
const modify = async (req,res) =>{
    console.log("ctrl modify: ", req.body);
    const msg = await ser.modify(req.body);
    res.send(msg);
}
const deleteMember = async(req,res) =>{
    const msg = await ser.deleteMember(req.params);
    res.send(msg);
}
module.exports = {deleteMember, modify, list, registerForm, register, memberView, modifyForm};
/*
result: 2차원 배열로 출력
metaData: 컬럼명 저장하는 key값
rows:결과값 저장하는 key값
outFormat: { ID: 'bbb', PWD: 'bbb', NAME: '김개똥', ADDR: '개똥별' }값을 return해줌
*/ 