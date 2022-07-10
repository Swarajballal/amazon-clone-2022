import React from 'react';
import './Login.css';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { auth } from './firebase';
import {useNavigate} from 'react-router-dom';


function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signIn = e => {
    e.preventDefault();


    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        navigate("/")
      })
      .catch(error => alert(error.message));
  }

  const register = e =>{
    e.preventDefault();


    auth
      .createUserWithEmailAndPassword(email, password)
      .then(auth => {
        // successfully created a new user with email and password
        console.log(auth);
        if (auth) {
          navigate("/");    //forcing to redirect to home page
        };
      })
      .catch(error => alert(error.message));
  }

  return (
    <div className='login'>
      <Link to="/">
      <img className='login__logo' 
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1920px-Amazon_logo.svg.png?20220213013322' 
          alt=''
      />
     </Link>

      <div className='login__container'>

        <h1>Sign-in</h1>

         <form>

            <h5>Email</h5>
            <input type='text' value={email} onChange=
            {e => setEmail(e.target.value)}/>

            <h5>Password</h5>
            <input type='password' value={password} onChange=
            {e => setPassword(e.target.value)}/>

            <button type='submit' onClick={signIn}
              className='login__signInButton'>
                Sign-in
            </button>

         </form>

          <p>
              By signing-in you agree to AMAZON'S FAKE CLONE <a href='#'>Conditions of Use </a>
              & Sale. Please
              see our <a href='#'>Privacy Notice</a>, our Cookies Notice and our
              Interest-Based Ads 
              Notice.
         </p>


          <p className='new_to_amazon'> New to Amazon? </p>

         <button onClick={register}
          className='login__registerButton'>
            Create your Amazon account
         </button>

      </div>

    </div>
  )
}

export default Login