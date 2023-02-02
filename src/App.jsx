import { useState } from "react";
import { fetchProducts } from "./api-mock/products-api";
import ProductsList from "./components/ProductsList";
import ShoppingCart from "./components/ShoppingCart";
import { useQuery } from "react-query";

const App = () => {
  const {
    data: products,
    isFetching,
    error,
  } = useQuery("get-products", () => fetchProducts());
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    const isProductInCart = Boolean(
      cart.find((item) => item.productId === product.id)
    );
    if (isProductInCart) {
      // If product is already in the cart, increase its quantity
      setCart(
        cart.map((item) => {
          if (item.productId === product.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        })
      );
    } else {
      // If product is not already in the cart, add it
      setCart([...cart, { productId: product.id, quantity: 1 }]);
    }
  };

  if (error) {
    return (
      <div>
        There was an error fetching the products. Please try again later.
      </div>
    );
  }

  return (
    <div>
      <h1>Coffee shop</h1>
      <div style={{ display: "flex" }}>
        <div style={{ width: "70%", padding: "10px" }}>
          {isFetching ? (
            <div>Fetching products ... </div>
          ) : (
            <ProductsList products={products} onAddToCart={handleAddToCart} />
          )}
        </div>
        <div
          style={{
            width: "30%",
            backgroundColor: "lightskyblue",
            padding: "10px",
            height: "fit-content",
          }}
        >
          <ShoppingCart cart={cart} products={products} />
        </div>
      </div>
    </div>
  );
};

export default App;
