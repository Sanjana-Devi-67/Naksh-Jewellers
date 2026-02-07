import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartPage = () => {
  const { cart, removeItem, updateQty } = useContext(CartContext);

  const total = cart.reduce((sum, item) =>
    sum + item.price * item.quantity, 0);

  return (
    <div className="cart-root">

      <h2>Your Cart</h2>

      <div className="cart-list">

        {cart.length === 0 && (
          <p>Your cart is empty. Add something beautiful 💛</p>
        )}

        {cart.map(item => (
          <div key={item.id} className="cart-item-box">

            <div className="cart-image">
              <img src={item.image} alt={item.name} />
            </div>

            <div className="cart-details">

              <h4>{item.name}</h4>
              <p>₹ {item.price}</p>

              <div>
                <label>Qty: </label>

                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(e) =>
                    updateQty(item.id, Number(e.target.value))}
                />
              </div>

              <button
                className="remove-btn"
                onClick={() => removeItem(item.id)}>
                Remove
              </button>

            </div>

          </div>
        ))}

      </div>

      <div className="cart-total">
        <h3>Total Amount:</h3>
        <p>₹ {total}</p>
      </div>

    </div>
  );
};

export default CartPage;
