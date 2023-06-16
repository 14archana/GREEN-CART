import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './card.css';

export default function App() {
  const [counter, setCounter] = useState(0);

  var districts = [
    {
      "id":1,
      "image": "images/things-fall-apart.jpg",
      "descrption": "\n",
      "type": "Climber plant",
      "title": "Five best indoor",
      "price": 1158
    },
    {
      "id": 2,
      "image": "images/fairy-tales.jpg",
      "descrption": "\n",
      "type": "Shrub",
      "title": "Plant pack for healthy Home-Office",
      "price": 1236
    },
    {
      "id":3,
      "image": "https://api.zamia.in/static/images/profile_image/DSC04508.jpg",
      "descrption": "\n",
      "type": "climber",
      "title": "Bougainvillea Dwarf (Pink) - Plant",
      "price": 353
    }
    ,
    {
      "id":4,
      "image": "https://nurserynisarga.in/wp-content/uploads/2020/06/Aparajita-3.jpg",
      "descrption": "\n",
      "type": "climber plant",
      "title": "Clitoria Ternatea, Gokarna",
      "price": 1958
    },
    {
      "id":5,
      "image": "https://ii2.pepperfry.com/media/catalog/product/k/r/800x880/krishna-kamal--passion-flower--passiflora-incarnata-natural-plant-by-nurserylive-krishna-kamal--pass-p7n859.jpg",
      "descrption": "\n",
      "type": "climber plant",
      "title": "Krishna Kamal, Passion flower, Passiflora incarnata",
      "price": 1958
    },
    {
      "id":6,
      "image": "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-g-ranjai-plant-clematis-heynei-plant_464x464.jpg?v=1634227351",
      "descrption": "\n",
      "type": "climber plant",
      "title": "Ranjai Plant, Clematis heynei - Plant",
      "price": 300
    },
    {
      "id":7,
      "image": "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-thunbergia-laurifolia-plant-16969379774604_464x464.jpg?v=1634230049",
      "descrption": "\n",
      "type": "climber plant",
      "title": "Thunbergia Laurifolia",
      "price": 258
    },
    {
      "id":8,
      "image": "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-lotus-nelumbo-nucifera-pink-plant-16969009234060_464x464.jpg?v=1634223391",
      "descrption": "\n",
      "type": "Aquatic Plants",
      "title": "Lotus, Nelumbo Nucifera",
      "price": 810
    },
    {
      "id":9,
      "image": "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-thalia-dealbata-plant_464x464.jpg?v=1634202723",
      "descrption": "\n",
      "type": "Aquatic Plants",
      "title": "Water Canna, Thalia Dealbata - Plant",
      "price": 500
    },
    {
      "id":10,
      "image": "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-yellow-lily-hybrid-lotus-yellow-plant_464x464.jpg?v=1634230962",
      "descrption": "\n",
      "type": "Aquatic Plants",
      "title": "Water Lily ( Yellow ) - Plant",
      "price": 1958
    },
    {
      "id":11,
      "image": "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-ficus-microcarpa-bonsai-plant-16968856797324_464x464.jpg?v=1634219519",
      "descrption": "\n",
      "type": "Bonsai Plants",
      "title": "Ficus microcarpa Bonsai- Plant",
      "price": 2958
    },
    {
      "id":12,
      "image": "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-g-plants-ficus-bonsai-plant_464x464.jpg?v=1635575503",
      "descrption": "\n",
      "type": "Bonsai Plants",
      "title": "Ficus Bonsai - Plant",
      "price": 1958
    },
    {
      "id":13,
      "image": "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-g-chinese-pepper-bonsai-plant_464x464.jpg?v=1634216045",
      "descrption": "\n",
      "type": "Bonsai Plants",
      "title": "Chinese pepper Bonsai - Plant",
      "price": 1958
    },
   
  
  
];

  return (
    <div className="bg">
      <Container>
        <h1 style={{ color: 'black', textAlign: 'center' }}>
          <br />
           Products
          <br />
        </h1>
        <Row>
          {districts.map((district, index) => {
            return (
              <Col sm={3} key={index}>
                <Card className="mt-3" style={{ background: 'white', height: '30rem' }}>
                  <Card.Img style={{ height: '20rem' }} variant="top" src={district.image} />

                  <Card.Body style={{ height: '1rem', width: '18rem', textAlign: 'center' }}>
                    <Card.Title>{district.title}</Card.Title>
                    <Card.Text style={{ textAlign: 'center' }}>{district.descrption}</Card.Text>
                    <div className="text-center">
                      <Button
                        variant="outline-success"
                        size="1g"
                        className="mt-2"
                        onClick={() => setCounter(counter + 1)}
                      >
                        Add To Cart 
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
        <h2 style={{ color: 'white', textAlign: 'center' }} className='hi'>
          <br />
           Total No. Of Items - {counter}
          <br />
        </h2>
      </Container>
    </div>
    
  );
}