import Carousel from 'react-bootstrap/Carousel';
import book_1 from '../../../images/book_1.png'
import book_2 from '../../../images/book_2.jpg'
import book_3 from '../../../images/book_3.png'
import './CarouSel.css'

function CarouSel() {
  return (
    <Carousel slide={false}>
      <Carousel.Item>
        <img className="book_size" src={book_1} />
       
      </Carousel.Item>
      <Carousel.Item>
        <img className="book_size" src={book_2} />
        
      </Carousel.Item>
      <Carousel.Item>
        <img className="book_size" src={book_3} />
       
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouSel;