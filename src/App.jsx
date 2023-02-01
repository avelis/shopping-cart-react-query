import { useEffect, useState } from "react";
import { fetchProducts } from "./api-mock/products-api";
import ProductsList from "./components/ProductsList";
import ShoppingCart from "./components/ShoppingCart";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetchProducts().then((products) => {
      console.log("Fetched the products", products);
      setProducts(products);
    });
  });
  return (
    <div>
      <h1>Coffee shop</h1>
      <div style={{ display: "flex" }}>
        <div style={{ width: "70%", padding: "10px" }}>
          <ProductsList products={products} />
        </div>
        <div
          style={{
            width: "30%",
            backgroundColor: "lightskyblue",
            padding: "10px",
          }}
        >
          <ShoppingCart cart={cart} />
        </div>
      </div>
    </div>
  );
};

export default App;
