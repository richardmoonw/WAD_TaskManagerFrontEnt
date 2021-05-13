import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { AiFillGoogleCircle } from 'react-icons/ai';
import './Login.css'
import Logo from '../../assets/logo.webp';
import MobileImage from '../../assets/index_image.webp';
import DesktopImage from '../../assets/index_image_desktop.webp';
import axios from 'axios';
import { useMediaQuery } from 'react-responsive';
import {
  GoogleButton,
  IAuthorizationOptions,
  isLoggedIn,
  createOAuthHeaders,
  logOutOAuthUser,
  GoogleAuth,
  GoogleAuthConsumer
} from "react-google-oauth2";


const Login = () => {
  const [ logged, setLogged ] = useState(false);
  const isDesktopOrLaptop = useMediaQuery({
    minDeviceWidth: 1366
  });

  const isTabletOrSmartphone = useMediaQuery({
    maxDeviceWidth: 1365
  });

  const HandleLogin = () => {
    axios.get("https://accounts.google.com/o/oauth2/v2/auth")}
  
  // useEffect(() => {
  //   axios.get('http://localhost:3000/login')
  //   .then(response => setLogged(response.isLoggedIn))
  // });

  const options = {
    clientId: "868449691994-qs07uckaki4h1r630hphiliaua6ucuq0.apps.googleusercontent.com",
    redirectUri: "http://localhost:3000/auth/google_oauth2/callback",
    scopes: ["openid", "profile", "email"],
    includeGrantedScopes: true,
    accessType: "offline",
  };
  
  return (
    <>
      { isDesktopOrLaptop && 
      <div className="desktopContainerLogin">
      { logged && console.log("Se arma") }
        <Grid container spacing={3}>
          <Grid item md={2} lg={2} xl={2}>
            <img className="desktopLogo" src={Logo} alt="loopy"></img>
          </Grid>
        </Grid>
        <Grid className="desktopContentContainer" container spacing={3}>
          <Grid className="leftColumn" item md={7} lg={7} xl={7}>
            <img className="desktopImage" src={DesktopImage} alt="management"></img>
          </Grid>
          <Grid className="rightColumn" item md={4} lg={4} xl={4}>
            <p className="desktopTitle">Convierte tus proyectos en algo realmente mágico.</p> 
            <p className="desktopSubtitle">¿Por qué elegirnos?</p>
            <p className="desktopText">Somos una solución increíblemente fácil, flexible e intuitiva para administrar tus proyectos. 
              Haz que tu gestión sea una tarea mucho más fácil con loopy.
            </p>
            <button onClick={() => HandleLogin()} className="desktopLoginButton">
              <AiFillGoogleCircle className="mobileLoginButtonIcon" size="2em"/><span className="mobileLoginButtonText">SIGN IN WITH GOOGLE</span>
            </button>
            <GoogleButton
                      options={options}
                      apiUrl="http://localhost:3000/auth/google_oauth2/callback"
                      defaultStyle={true} // Optional
                    />
            {/* <GoogleAuth>
              <GoogleAuthConsumer>
                {({responseState, isAuthenticated}) => {
                  if (!isAuthenticated) {
                    
                  } else {
                    if (responseState.accessToken) { // You can also use isOAuthLoggedIn()
                      // Now send a request to your server using  createOAuthHeaders() function
                      fetch('http://localhost:3000', {
                          headers: createOAuthHeaders(),
                      })
                      .then(data => console.log("Horay We're logged in!"))
                      .catch(err => console.error("Just because you have a gmail account doesn't mean you have access!"))
                    }
                  }
                }}
              </GoogleAuthConsumer>
            </GoogleAuth> */}
            <p className="mobileContact">Síguenos en <span className="mobileUser">@loopy</span> para más información</p>  
          </Grid> 
        </Grid>
      </div>
      }

      {/* Mobile design */}
      { isTabletOrSmartphone &&
      <div>
        <div className="mobileContainer">
          <Grid container spacing={3}>
            <Grid item xs={6} sm={6}>
              <img className="mobileLogo" src={Logo} alt="loopy"></img>
            </Grid>
          </Grid>
          <p className="mobileTitle">Convierte tus proyectos en algo realmente mágico.</p> 
        </div>
        
        <img className="mobileImage" src={MobileImage} alt="management"></img>
          <div className="mobileContainer">
            <p className="mobileSubtitle">¿Por qué elegirnos?</p>
            <p className="mobileText">Somos una solución increíblemente fácil, flexible e intuitiva para administrar tus proyectos. 
              Haz que tu gestión sea una tarea mucho más fácil con loopy.
            </p>
            {/* <button onClick={() => HandleLogin()} className="mobileLoginButton">
              <AiFillGoogleCircle className="mobileLoginButtonIcon" size="2em"/><span className="mobileLoginButtonText">SIGN IN WITH GOOGLE</span>
            </button> */}
            <p className="mobileContact">Síguenos en <span className="mobileUser">@loopy</span> para más información</p>
        </div>
      </div>
      }
    </>
  );
}

export default Login;
