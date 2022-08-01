import { Card, NavItem, Button } from 'react-bootstrap';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { formatCurrency } from '../utilities/formatCurrency';
type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};
export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  //get from the context
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: 'cover' }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-3">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button
              className="w-100  "
              variant="warning"
              onClick={() => increaseCartQuantity(id)}
            >
              + Add to Cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: '0.5rem' }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: '0.5rem' }}
              >
                <Button
                  onClick={() => decreaseCartQuantity(id)}
                  variant="warning"
                >
                  -
                </Button>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>

                <Button
                  onClick={() => increaseCartQuantity(id)}
                  variant="warning"
                >
                  +
                </Button>
              </div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => removeFromCart(id)}
                className="mt-2"
              >
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 24h-14c-1.104 0-2-.896-2-2v-17h-1v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2h-1v17c0 1.104-.896 2-2 2zm0-19h-14v16.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-16.5zm-7 7.586l3.293-3.293 1.414 1.414-3.293 3.293 3.293 3.293-1.414 1.414-3.293-3.293-3.293 3.293-1.414-1.414 3.293-3.293-3.293-3.293 1.414-1.414 3.293 3.293zm2-10.586h-4v1h4v-1z" />
                </svg>
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
