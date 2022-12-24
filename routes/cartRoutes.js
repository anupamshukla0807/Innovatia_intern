const express=require("express");
const cart_route=express();
const bodyParser=require("body-parser");

cart_route.use(bodyParser.json());
cart_route.use(bodyParser.urlencoded({extended:true}));

const auth=require("../middleware/auth");

const cart_Controller=require("../Controller/cartController");

const cart_route= cart_route.post('/add_to_cart',auth,cart_Controller.add_to_cart);


module.exports = cart_route;