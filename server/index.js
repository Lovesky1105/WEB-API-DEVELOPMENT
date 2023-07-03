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

app.put('/update', async (req, res) => {
    const email = req.body.email; // Assuming email is provided in the request body
    const updatedData = req.body;
  
    try {
      // Update the data in your database based on the provided email
      await userFavModel.findOneAndUpdate({ email }, updatedData);
  
      res.json({ message: 'Data updated successfully' });
    } catch (error) {
      console.error('Failed to update data:', error);
      res.status(500).json({ error: 'Failed to update data' });
    }
  });

  app.delete('/delete', (req, res) => {
    userFavModel.deleteMany({})
      .then(() => {
        res.sendStatus(204); // Send a success response
      })
      .catch((err) => {
        res.status(500).json({ error: 'Error deleting rows', details: err });
      });
  });


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