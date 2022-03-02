
import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default function Carousell(){
return (
<Carousel>
  <Carousel.Item interval={5000}>
    <img
      className="d-block w-100"
      src="https://toraseminovos.com.br/wp-content/uploads/2020/07/Banner-Home-01-1.jpg"
      alt="First slide"
      
    />
    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={5000}>
    <img
      className="d-block w-100"
      src="https://toraseminovos.com.br/wp-content/uploads/2020/07/Banner-Home-05-1.jpg"
      alt="Second slide"
    

    />
    <Carousel.Caption>
   
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={5000}>
    <img
      className="d-block w-100"
      src="https://toraseminovos.com.br/wp-content/uploads/2020/07/Banner-Home-02.jpg"
      alt="Third slide"
  
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
);
}