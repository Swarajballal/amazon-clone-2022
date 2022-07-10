import React from 'react';
import './Home.css';
import Product from "./Product";
import Carousel from "./Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


function Home() {
  return ( 
    <div className='home'>
      <div className="home__container">
        <Carousel />
      <div className="home__row">
        <Product 
          id="12321341"
          title='The Lean Startup: How Todays Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses' 
          price ={350} 
          image = 'https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg'
          rating ={5}
         />
        <Product 
          id="77777777"
          title='Prestige Iris 750 Watt Mixer Grinder with 3 Stainless Steel Jar + 1 Juicer Jar (White and Blue)' 
          price ={3245} 
          image = 'https://m.media-amazon.com/images/I/81+M1QrVNIL._SX679_.jpg'
          rating ={4}
        />
        <Product 
          id="33333333"
          title='Samsung Galaxy Z Fold3 5G (Phantom Black, 12GB RAM, 256GB Storage) with No Cost EMI/Additional Exchange Offers' 
          price ={139999} 
          image = 'https://images-eu.ssl-images-amazon.com/images/I/41hmzsgHSjL._SX300_SY300_QL70_FMwebp_.jpg'
          rating ={4}
        />
      </div>

      <div className="home__row">
        <Product
          id ="99999999"
          title='2021 Apple iPad Pro with Apple M1 chip (12.9-inch/32.77 cm, Wi-Fi, 128GB) - Silver (5th Generation)' 
          price ={99900} 
          image = 'https://m.media-amazon.com/images/I/815KnP2wjDS._SX679_.jpg'
          rating ={4} 
        />
        <Product 
          id ="99999989"
          title='New Apple AirPods (3rd Generation)D Dual beamforming Inward-facing microphones, Skin-detect sensor' 
          price ={17900} 
          image = 'https://m.media-amazon.com/images/I/615ekapl+pL._SX679_.jpg'
          rating ={4} 
        />
        <Product 
          id ="66666666"
          title='Apple Watch Series 7 (GPS + Cellular, 41mm) - Gold Stainless Steel Case with Gold Milanese Loop' 
          price ={73900} 
          image = 'https://m.media-amazon.com/images/I/919SEgaAWYL._SX679_.jpg'
          rating ={5} 
        />
      </div>

      <div className="home__row">
        <Product
          id ="55555555"
          title='Echo Dot (3rd Gen) – New and improved smart speaker with Alexa (Black)' 
          price ={3499} 
          image = 'https://m.media-amazon.com/images/I/61EXU8BuGZL._AC_UY327_FMwebp_QL65_.jpg'
          rating ={4} 
        />
      </div>

    </div>

  </div>
  );
}

export default Home