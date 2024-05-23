import React, { Component } from 'react';
import './Caroussel.css';
import "react-multi-carousel/lib/styles.css";
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';
import image4 from './image4.jpg';
import image5 from './image5.jpg';
import image6 from './image6.jpg';
import image7 from './image7.jpg';
import image8 from './image8.jpg';
import image9 from './image9.jpg';
import image10 from './image10.jpg';



const AppCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
    return (
     
   <div className="container"> 
    <div className="card">
    <img className="product--image" src={image1} alt="image1"/>
    <h2>Chaussures de sport</h2>
    <p className="prix">150$</p>
    <p>Description du produit</p>
    <p>
      <button>Ajouter au panier</button>
    </p>

    </div>
    <div className="card">
    <img className="product--image" src={image2} alt="image2"/>
    <h2>Chaussures de villes</h2>
    <p className="prix">150$</p>
    <p>Description du produit</p>
    <p>
      <button>Ajouter au panier</button>
    </p>

    </div>

    <div className="card">
    <img className="product--image" src={image3} alt="image3"/>
    <h2>Chaussures de sport</h2>
    <p className="prix">150$</p>
    <p>Description du produit</p>
    <p>
      <button>Ajouter au panier</button>
    </p>

    </div>

    <div className="card">
    <img className="product--image" src={image4} alt="image1"/>
    <h2>Chaussures d'hivers</h2>
    <p className="prix">150$</p>
    <p>Description du produit</p>
    <p>
      <button>Ajouter au panier</button>
    </p>

    </div>
    <div className="card">
    <img className="product--image" src={image5} alt="image1"/>
    <h2>Chaussures de course</h2>
    <p className="prix">150$</p>
    <p>Description du produit</p>
    <p>
      <button>Ajouter au panier</button>
    </p>

    </div>
    <div className="card">
    <img className="product--image" src={image6} alt="image1"/>
    <h2>Chaussures de champ</h2>
    <p className="prix">150$</p>
    <p>Description du produit</p>
    <p>
      <button>Ajouter au panier</button>
    </p>

    </div>
    <div className="card">
    <img className="product--image" src={image7} alt="image1"/>
    <h2>Chaussures de nettoyage</h2>
    <p className="prix">150$</p>
    <p>Description du produit</p>
    <p>
      <button>Ajouter au panier</button>
    </p>

    </div>
    <div className="card">
    <img className="product--image" src={image8} alt="image1"/>
    <h2>Chaussures de villes</h2>
    <p className="prix">150$</p>
    <p>Description du produit</p>
    <p>
      <button>Ajouter au panier</button>
    </p>

    </div>
    <div className="card">
    <img className="product--image" src={image9} alt="image1"/>
    <h2>Chaussures de travail</h2>
    <p className="prix">150$</p>
    <p>Description du produit</p>
    <p>
      <button>Ajouter au panier</button>
    </p>

    </div>
    <div className="card">
    <img className="product--image" src={image10} alt="image1"/>
    <h2>Chaussures d'ete</h2>
    <p className="prix">150$</p>
    <p>Description du produit</p>
    <p>
      <button>Ajouter au panier</button>
    </p>

    </div>
    </div>


    )
}

export default AppCarousel


