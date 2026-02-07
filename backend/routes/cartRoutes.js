const express = require("express");
const router = express.Router();

const validateCart = require("../middleware/validateCart");

let cart = [];

router.post("/cart", validateCart, (req,res)=>{
   cart.push(req.body);
   res.status(201).json(cart);
});

module.exports = router;
