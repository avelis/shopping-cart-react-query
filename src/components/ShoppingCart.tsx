import { Product, CartProduct } from "../api-mock/products-api";
import CartTable from "./CartTable";

interface Props {
  cart: CartProduct[];
  products: Product[];
}

const ShoppingCart = ({ cart, products }: Props) => {
  return (
    <div className="border p-2">
      <h4>Shopping Cart</h4>
      {cart.length > 0 && (
        <>
          <section>You have (item.length) in your cart.</section>
          <CartTable cart={cart} products={products} />
        </>
      )}
      {cart.length === 0 && (
        <section>You haven't added anything to your shopping cart yet.</section>
      )}
    </div>
  );
};

export default ShoppingCart;
