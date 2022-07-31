import { Col, NavItem, Row } from 'react-bootstrap';
import { StoreItem } from '../components/StoreItem';
import storeItems from '../data/items.json';

export function Store() {
  return (
    <div>
      <h1>Store</h1>
      <Row xs={1} md={2} lg={3} className="g-3">
        {storeItems.map(item => (
          <Col key={item.id}>
            <StoreItem
              id={item.id}
              name={item.name}
              price={item.price}
              imgUrl={item.imgUrl}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}
