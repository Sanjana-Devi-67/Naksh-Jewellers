const validateCart = (req,res,next)=>{

   const { id, name, price } = req.body;

   if(!id || !name || !price){
      return res.status(400).json({
         message:"Invalid cart data"
      });
   }

   next();
}

module.exports = validateCart;
