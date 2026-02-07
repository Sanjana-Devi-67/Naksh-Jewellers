import { useNavigate } from "react-router-dom";
const ProductCard = ({ product, addToCart }) => {
  
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(product);
    navigate("/cart");   // ⭐ Redirect to cart
  };

  return (
    <div className="product-card">

      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="price">₹ {product.price}</p>

        
        <button onClick={handleAddToCart}>
          Add To Cart
        </button>
      </div>

    </div>
  );
};

export default ProductCard;
