import { Col, Row } from "react-bootstrap";
import { Product } from "../api-mock/products-api";
import ProductItem from "./ProductItem";

interface Props {
    products: Product[];
    onAddToCart: (product: Product) => void;
}

const ProductCatalog = ({ products, onAddToCart }: Props) => {
  return (
    <Row>
    {products.map((product: Product) => (
      <Col key={product.id}>
        <ProductItem product={product} onAddToCart={onAddToCart} />
      </Col>
    ))}
  </Row>
  )
}

export default ProductCatalog