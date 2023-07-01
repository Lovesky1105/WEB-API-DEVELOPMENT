const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const userModel = require('./models/userDetail')
const userFavModel = require('./models/userFav')

const app = express()
app.use(express.json())
app.use(cors())



const mongoUrl = "mongodb+srv://p20012535:Tengteng8132002@gettingstarted.6yl4h3h.mongodb.net/5014CEM";

mongoose.connect(mongoUrl);

app.post("/login", (req, res) =>{
    const {email, password} = req.body;
    userModel.findOne({email: email})
    .then(users => {
        if(users){
            if(users.password === password){
                res.json("Success")
            }else{
                res.json("the password is incorrect")
            }
        }else {
            res.json("no record existed")
        }
        
    })
})

app.post('/home',(req, res)=>{
    userFavModel.create(req.body)
    .then(web_apis => res.json(web_apis))
    .catch(err => res.json(err))
})

app.post('/register',(req, res)=>{
    userModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

//     mongoUrl, {
//     useNewUrlParser: true,
// }).then(() =>{
//     console.log("connected to database");
// }). catch((e) => console.log(e));

// require("./userDetail");

// const User = mongoose.model("users");

// app.post("/register", async (req, res) =>{
//     const {fname, lname, email, password} =req.body;

//     try {
//         await User.create({
//             fname,
//             lnam,
//             email,
//             password,
//         });
//         res.send({status:'ok'})
//     }catch(error){
//         res.send({status:'error'})
//     }
// });

app.listen(3001,()=> {
    console.log("server started");
})