import products from "./products.json";

export interface CartProduct {
  productId: number;
  quantity: number;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

export const fetchProducts = () => {
  // Simulate an API call by returning the products with a delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};
