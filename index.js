// import 
const express = require('express')
const studentsRouter = require('./students');
const mongoose = require('mongoose')

// initialize
const app = express();
// middleware
app.use(express.json());
app.use("/", studentsRouter);

// for connecting w mongodb atlas 



mongoose.
connect("mongodb+srv://raul:acemmern@cluster0.pusyiun.mongodb.net/?retryWrites=true&w=majority", {
   useNewUrlParser: true,
   useUnifiedTopology: true
})

.then((res)=>{
    console.log("connected");
})

.catch ((err)=> console.log("err",err));
app.listen(3000,()=> {
    console.log("listening at port 3000");
});



// listen server at port 3000




