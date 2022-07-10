import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom";
import LanguageIcon from '@mui/icons-material/Language';


function Footer() {
  const backTotop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth'});
  }
  return (
    <div className='footer'>
        <div onClick={backTotop} className='footer_backTotop'>Back to top</div>
        <div className='Box'>
            <div className='Container'>
            <div className='Row'>
              <div className='Column'>
                <h4>Get to Know Us</h4>
                  <a href="#">About Us</a>
                  <a href="#">Careers</a>
                  <a href="#">Press Releases</a>
                  <a href="#">Amazon Cares</a> 
                  <a href="#">Gift a Smile</a> 
                  <a href="#">Amazon Science</a> 
              </div>
              <div className='Column'>
                <h4>Connect with Us</h4>
                  <a href="#">
                      <span style={{ marginLeft: "10px" }}>
                        Facebook
                      </span>
                  </a>
                  <a href="#">
                    <span style={{ marginLeft: "10px" }}>
                      Twitter
                    </span>
                  </a>
                  <a href="#">
                      <span style={{ marginLeft: "10px" }}>
                        Instagram
                      </span>      
                  </a>
              </div>
              <div className='Column'>
                <h4>Make Money with Us</h4>
                  <a href="#">Sell on Amazon</a>
                  <a href="#">Sell under Amazon Accelerator</a>
                  <a href="#">Amazon Global Selling</a>
                  <a href="#">Become an Affiliate</a>
                  <a href="#">Fulfilment by Amazon</a>
                  <a href="#">Advertise Your Products</a>
                  <a href="#">Amazon Pay on Merchants</a>
              </div>
              <div className='Column'>
                <h4>Let Us Help You</h4>
                  <a href="#">COVID-19 and Amazon</a>
                  <a href="#">Your Account</a>
                  <a href="#">Returns Centre</a>
                  <a href="#">100% Purchase Protection</a>
                  <a href="#">Amazon App Download</a>
                  <a href="#">Amazon Assistant Download</a>
                  <a href="#">Help</a>
              </div>
            </div>
          </div>
        </div>

        <div className='Nav__footerLine__container'>
          <div className='Nav__footerLine__container__line'>
          <Link to='/'>
            <img className='footer__logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt=''/>
          </Link>
            <LanguageIcon className='footer__languageicon'/>
          </div>
          <div className='footer__countires'>
            <div className='footer_countires__text'>
              <a href=''>Australia</a>
              <a href=''>Brazil</a>
              <a href=''>Canada</a>
              <a href=''>China</a>
              <a href=''>France</a>
              <a href=''>Germany</a>
              <a href=''>Italy</a>
              <a href=''>Japan</a>
              <a href=''>Mexico</a>
              <a href=''>Netherlands</a>
              <a href=''>Poland</a>
              <a href=''>Singapore</a>
              <a href=''>Spain</a>
              <a href=''>Turkey</a>
              <a href=''>United Arab Emirates</a>
              <a href=''>United Kingdom</a>
              <a href=''>United States</a>                  
            </div>
          </div>
        </div>

        <div className='footer__services'>

        <div className='Box2'>
            <div className='Container2'>

            <div className='Row2'>
              <div className='Column2'>
                  <a href="#"> <h3>AbeBooks</h3>Books, art & collectiblest</a> 
              </div>
              <div className='Column2'>
                  <a href="#"> <h3>Amazon Web Services</h3>Scalable Cloud Computing Services</a> 
              </div>
              <div className='Column2'>
                  <a href="#"> <h3>Audible</h3>Download Audio Books</a>
              </div>
              <div className='Column2'>
                  <a href="#"> <h3>DPReview</h3>Digital Photography</a>
              </div>
              <div className='Column2'>
                  <a href="#"> <h3>IMDb</h3>Movies,TV & Celebrities</a>
              </div>
            </div>

            <div className='Row2'>
            <div className='Column2'>
                <a href="#"> <h3>Shopbop</h3>Designer Fashion Brands</a> 
            </div>
            <div className='Column2'>
                <a href="#"> <h3>Amazon Business</h3>Everything For Your Business</a> 
            </div>
            <div className='Column2'>
                <a href="#"> <h3>	Prime Now</h3>2-Hour Delivery on Everyday Items</a>
            </div>
            <div className='Column2'>
                <a href="#"> <h3>Amazon Prime Music</h3>90 million songs, ad-free Over 15 million podcast episodes</a>
            </div>

          </div>            

          </div>  {/* Container */}

        </div>   {/* Box */}

        <div className='footer__copyright'>
          <div className='footer__copyright__text'>
          <div className='Row3'>
          <div className='Column3'>
              <a href="#">Conditions of Use & Sale</a> 
          </div>
          <div className='Column3'>
              <a href="#">Privacy Notice</a> 
          </div>
          <div className='Column3'>
              <a href="#">Interest-Based Ads</a>
          </div>
          <div className='Column3'>
              <a href="#">© 1996-2022, Amazon.com, Inc. or its affiliates</a>
          </div>

        </div>   
          </div>  
        </div>

        </div>  {/* footer__services */}
   
    </div>   
  )
}

export default Footer