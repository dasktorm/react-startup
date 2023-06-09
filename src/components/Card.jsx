import Button from 'react-bootstrap/Button';
import BSCard from 'react-bootstrap/Card';

function Card({img, title, text}) {
  return (
    <BSCard style={{ width: '18rem' }}>
      <BSCard.Img variant="top" src={img} />
      <BSCard.Body>
        <BSCard.Title>{title}</BSCard.Title>
        <BSCard.Text>
          {text}
        </BSCard.Text>
        <Button variant="primary">Go somewhere</Button>
      </BSCard.Body>
    </BSCard>
  );
}

export default Card;