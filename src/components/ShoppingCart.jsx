const ShoppingCart = ({ cart }) => {
  return (
    <div>
      <h3>Shopping cart</h3>
      <p>You have {cart.length} products in your cart.</p>
    </div>
  );
};

export default ShoppingCart;
