import { formatPrice } from "../utils/formatPrice";

const Product = ({ product }) => {
  return (
    <div
      style={{ border: "1px solid lightgray", padding: "5px", margin: "5px" }}
    >
      <p>
        {product.name} ( price: {formatPrice(product.price)})
      </p>
      <img src={`images/${product.image}`} width="200px" />
    </div>
  );
};

export default Product;
