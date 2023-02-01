import Product from "./Product";

const ProductsList = ({ products }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {products.map((product) => (
        <Product product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
