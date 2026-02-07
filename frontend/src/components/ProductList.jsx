import ProductCard from "../components/ProductCard";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import axios from "axios";

const ProductList = () => {

  const { addToCart } = useContext(CartContext);

  /* ⭐ products now come from backend */
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");

  /* ⭐ Fetch Products From API */
  useEffect(() => {
    axios.get("http://backend:5000/api/products")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  const filteredProducts = products.filter((item) => {
    if (category === "all") return true;
    return item.name.toLowerCase().includes(category);
  });

  return (
    <div>

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-content-wrapper">

          <div className="hero-text">
            <h1>Timeless Gold Collections</h1>
            <p>Handcrafted elegance for every celebration</p>
          </div>

          <button className="hero-btn">Explore Collection</button>

        </div>
      </section>

      {/* CATEGORY TABS */}
      <div className="category-tabs">

        <button onClick={() => setCategory("all")}>All</button>
        <button onClick={() => setCategory("necklace")}>Necklaces</button>
        <button onClick={() => setCategory("ring")}>Rings</button>
        <button onClick={() => setCategory("bangles")}>Bangles</button>

      </div>

      {/* PRODUCT GRID */}
      <div className="product-grid">

        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}

      </div>

      {/* BRAND STORY */}
      <section className="brand-section">
        <h2>Crafted With Heritage</h2>
        <p>
          Naksh Gold blends traditional artistry with modern luxury.
          Each ornament is designed to celebrate timeless elegance.
        </p>
      </section>

      {/* ABOUT US */}
      <section className="about-us-section">
        <h2>About Naksh Gold</h2>
        <p>
          At Naksh Gold, we honour heritage and craftsmanship.
          Each piece is expertly designed with precision and
          passion to celebrate life’s precious moments. From
          timeless classics to modern masterpieces, our gold
          jewellery blends tradition with elegance.
        </p>
      </section>

    </div>
  );
};

export default ProductList;
