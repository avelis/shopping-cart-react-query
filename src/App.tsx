import { fetchProducts, Product, CartProduct } from "./api-mock/products-api";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductCatalog from "./components/ProductCatalog";
import ShoppingCart from "./components/ShoppingCart";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const App = () => {
  const [cart, setCart] = useState<CartProduct[]>([]);
  const { data, isLoading, error } = useQuery({
    queryKey: ["get-products"],
    queryFn: () => fetchProducts(),
  });

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return "An error has occurred: " + error.message;

  //fixes type assertion issue.
  const products: Product[] = data as Product[];

  const handleAddToCart = (product: Product) => {
    const isProductInCart = cart.some(
      (cartProduct) => cartProduct.productId === product.id
    );

    if (isProductInCart) {
      setCart(
        cart.map((cartProduct) => {
          if (cartProduct.productId === product.id) {
            cartProduct.quantity += 1;
          }
          return cartProduct;
        })
      );
    } else {
      let cartProduct: CartProduct = { productId: product.id, quantity: 1 };
      setCart([...cart, cartProduct]);
    }
  };

  return (
    <Container>
      <Row>
        <h1>Hello! Here are the available products:</h1>
      </Row>
      <Row>
        <Col md={8}>
          <ProductCatalog products={products} onAddToCart={handleAddToCart} />
        </Col>
        <Col md={4}>
          <ShoppingCart cart={cart} products={products} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
