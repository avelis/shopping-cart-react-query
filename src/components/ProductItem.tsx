import { Button, Card } from "react-bootstrap"
import { Product } from "../api-mock/products-api"

interface Props {
    product: Product;
    onAddToCart: (product: Product) => void;
}

const ProductItem = ({product, onAddToCart} : Props) => {
  return (
      <Card  style={{ width: '18rem' }}>
          <Card.Img variant="top" src={`images/${product.image}`} width="200px" />
        <Card.Body>
            <Card.Text>
            {product.name} ( price: ${product.price})
            </Card.Text>
            <Button onClick={() => (onAddToCart(product))} variant="light">Add to cart</Button>
        </Card.Body>
        </Card>
)
}

export default ProductItem