import { Table } from "react-bootstrap";
import { CartProduct, Product } from "../api-mock/products-api";

interface Props {
  cart: CartProduct[];
  products: Product[];
}

const CartTable = ({ cart, products }: Props) => {
  const cartProductDetails = cart.map((cartProduct) => {
    const product = products.find(
      (product) => product.id === cartProduct.productId
    );

    if (!product) {
      throw new Error(`Product with id ${cartProduct.productId} not found`);
    }

    let discount: number = cartProduct.quantity >= 3 ? 0.9 : 1;

    return {
      ...cartProduct,
      productName: product.name,
      productPrice: product.price,
      totalProductPrice: product.price * cartProduct.quantity * discount,
    };
  });

  const formatPrice = (price: number): string => {
    return price.toFixed(2);
  };

  // Calculate total price
  const totalPrice = cartProductDetails.reduce((total, currentItem) => {
    return total + currentItem.totalProductPrice;
  }, 0);

  return (
    <Table striped bordered>
      <thead>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {cartProductDetails.map((cartItem) => (
          <tr key={cartItem.productId}>
            <td>
              {cartItem.productName} (${cartItem.productPrice})
            </td>
            <td>{cartItem.quantity}</td>
            <td>${formatPrice(cartItem.totalProductPrice)}</td>
          </tr>
        ))}
        <tr>
          <td colSpan={3} className="fw-bold">
            Total Price: ${formatPrice(totalPrice)}
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default CartTable;
