const Item = require("../models/Item");

exports.createItem = async (req,res)=>{

try{

const newItem = new Item({

title:req.body.title,
description:req.body.description,
city:req.body.city,
type:req.body.type,
reward:req.body.reward,
image:req.file ? req.file.filename : ""

});

await newItem.save();

res.json({
message:"Item uploaded successfully",
data:newItem
});

}
catch(err){

res.status(500).json({
error:err.message
});

}

};



exports.getItems = async (req,res)=>{

try{

const items = await Item.find();

res.json(items);

}
catch(err){

res.status(500).json({
error:err.message
});

}

};



exports.deleteItem = async (req,res)=>{

try{

const item = await Item.findByIdAndDelete(req.params.id);

if(!item){
return res.status(404).json({
message:"Item not found"
});
}

res.json({
message:"Item deleted successfully"
});

}
catch(err){

res.status(500).json({
error:err.message
});

}

};