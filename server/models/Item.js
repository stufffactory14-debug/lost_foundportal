const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({

title:{
type:String,
required:true
},

description:{
type:String,
required:true
},

city:{
type:String,
required:true
},

type:{
type:String,
enum:["lost","found"],
required:true
},

reward:{
type:Number,
default:0
},

image:{
type:String
},

createdAt:{
type:Date,
default:Date.now
}

});

module.exports = mongoose.model("Item",ItemSchema);