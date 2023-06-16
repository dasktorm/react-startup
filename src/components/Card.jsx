import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import BSCard from 'react-bootstrap/Card';

function Card({img, title, text}) {
  const [isFavorite, setIsFavorite] = useState(false);
  function handleMarkAsFavorite(){
    setIsFavorite((prev) => !prev);
}
  console.log(isFavorite)
  return (
    <BSCard style={{ width: '18rem' }}>
      <BSCard.Img variant="top" src={img} />
      <BSCard.Body>
        <BSCard.Title>{title}</BSCard.Title>
        <BSCard.Text>
          {text}
        </BSCard.Text>
        <Button variant="primary">Go somewhere</Button>
        <Button onClick={handleMarkAsFavorite} variant={isFavorite ? "warning" : "light"}>Set Favorite</Button>
      </BSCard.Body>
    </BSCard>
  );
}

export default Card;