const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CartSchema = new Schema({
    active: Bolean,
    modifiedOn: Date,
    productid: [
      {
        qunantity: String,
        name: String,
        price: number
      }
    ]
}, { timestamps : true});

// var Cart = mongoose.model("Cart", CartSchema);

// module.exports = Cart;
module.exports = mongoose.model("Cart", CartSchema);