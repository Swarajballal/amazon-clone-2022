import React from 'react';
import './Subheader.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Subheader() {
    
  const [{basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {   // if user is logged in

        auth.signOut(); // sign out user
    }
    
}
  
  return (

    <div className="subheader__nav">
        <div className='subheader'>
        <Link to= {!user && '/login'}>
            <div onClick={handleAuthentication}  className='subheader__option'>
                <span className='subheader_location'>
                    {user ? <h3>Hello, {user?.email}</h3> : <h3>Hello Guest</h3>}
                 </span>
                <span className = 'subheader_location'>
                    <LocationOnIcon className='location__icon' />
                    {user ? <h3>Navi Mumbai</h3> : <h3 className='sign_in_location'>Sign In</h3>}
                </span>
            </div>
        </Link>

            <div className='subheader__option'>
                <span className='subheader__optionLineOne'>
                    Best sellers
                </span>    
            </div>

            <div className='subheader__option'>
                <span className='subheader__optionLineOne'>
                    Mobiles
                </span>    
            </div>

            <div className='subheader__option'>
                <span className='subheader__optionLineOne'>
                    Customer Service
                </span>    
            </div>

            <div className='subheader__option'>
                <span className='subheader__optionLineOne'>
                    Todays's Deals
                </span>    
            </div>

            <div className='subheader__option'>
                <span className='subheader__optionLineOne'>
                    Fashion
                </span>    
            </div>

            <div className='subheader__option'>
                <span className='subheader__optionLineOne'>
                    Electronics
                </span>    
            </div>

            <div className='subheader__option'>
                <span className='subheader__optionLineOne'>
                    Prime
                </span>    
            </div>

            <div className='subheader__option'>
                <span className='subheader__optionLineOne'>
                    Books
                </span>    
            </div>

            <div className='subheader__option'>
                <span className='subheader__optionLineOne'>
                    Home & Kitchen
                </span>    
            </div>

            <div className='subheader__option'>
                <span className='subheader__optionLineOne'>
                    New Releases
                </span>
            </div>

            <div className='subheader__option'>
                <span className='subheader__optionLineOne'>
                    Amazon Pay
                </span>
            </div>

            <div className='subheader__option'>
                <img src='https://images-eu.ssl-images-amazon.com/images/G/31/prime/PD22/LU/IN-PD-22-GW-SWM_400x39._CB634187897_.jpg' alt=''
                />
            </div>

        </div>
    </div>
  );
}

export default Subheader