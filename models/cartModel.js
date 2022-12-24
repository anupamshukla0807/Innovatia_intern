const mongoose=require("mongoose");
// creat schema forproduct 
const cartSchema=mongoose.Schema({
product_id:{
    type:String,
    required:true
},
price:{
    type:String,
    required:true
},
vendor_id:{
    type:String,
    required:true
},
store_id:{
    type;String,
    required:true
}
});

module.export= mongoose.model("Cart",cartSchema);