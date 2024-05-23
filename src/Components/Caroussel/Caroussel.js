import './Caroussel.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import AppCarousel from './AppCaroussel';



function App() {
  const responsive = {
    SuperLargeDesktop: {
      breakpoint: { max: 4000, min: 3000},
      items: 5
    },
    Desktop: {
      breakpoint: {max: 3000, min: 1024},
      items: 3
    },
    tablet: {
      breakpoint: {max: 1024, min: 464},
      items: 2
    },
    mobile: {
      breakpoint: {max: 464, min: 0},
      items: 1
    }
  }
  
  
    return (
      <div className="App">
        <h1>Ma ligne de chaussures</h1>
        <AppCarousel />
      </div>
    );
  }
  
  export default App;