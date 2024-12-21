const express=require('express');
const mongoose=require('mongoose');
const cors= require('cors');
const bodyParser=require('bodyParse');
const crypto=require('crypto');


const app=require();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));


mongoose.connect(


{
 useNewUrlParser: true,
 useUnifiedTopology: true,
})
.then(()=> console.log('MongoDB connected'))
.catch(err=> console.error(err));


const userSchema= new mongoose.Schema({
name:{ type: string,required:true},
email:{type:string,required:true,unique:true},
password:{type:string,required:true},
upi_id:{type:string,unique:true},
balance:{type:Number}
})


