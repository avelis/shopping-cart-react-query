import { formatPrice } from "../utils/formatPrice";

const ShoppingCart = ({ cart, products }) => {
  if (!products.length) {
    return;
  }

  const cartWithDetails = cart.map((item) => {
    const productDetails = products.find(
      (product) => product.id === item.productId
    );
    return {
      ...item,
      productName: productDetails.name,
      productPrice: productDetails.price,
      totalProductPrice: productDetails.price * item.quantity,
    };
  });

  const totalCartPrice = cartWithDetails.reduce((total, currentItem) => {
    return total + currentItem.totalProductPrice;
  }, 0);

  return (
    <div>
      <h3>Shopping cart</h3>
      <p>You have {cart.length} products in your cart.</p>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cartWithDetails.map((item) => (
            <tr key={item.productId}>
              <td style={{ paddingRight: "20px" }}>
                {item.productName} ({formatPrice(item.productPrice)})
              </td>
              <td>{item.quantity}</td>
              <td>{formatPrice(item.totalProductPrice)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th colSpan={3} style={{ textAlign: "right", paddingTop: "10px" }}>
              Total price: {formatPrice(totalCartPrice)}
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ShoppingCart;
