import { Grid } from '@material-ui/core';
import { AiFillGoogleCircle } from 'react-icons/ai';
import './Login.css'
import Logo from '../../assets/logo.png';
import MobileImage from '../../assets/index_image.png';
import DesktopImage from '../../assets/index_image_desktop.jpg';
import React from 'react';
import { useMediaQuery } from 'react-responsive';


const Login = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1366px)'
  });

  const isTabletOrSmartphone = useMediaQuery({
    query: '(max-width: 1355px'
  });

  return (
    <>
      { isDesktopOrLaptop && 
      <div className="desktopContainerLogin">
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
            <p className="desktopSubtitle"><span className="underline">¿Por qué elegirnos?</span></p>
            <p className="desktopText">Somos una solución increíblemente fácil, flexible e intuitiva para administrar tus proyectos. 
              Haz que tu gestión sea una tarea mucho más fácil con loopy.
            </p>
            <button className="desktopLoginButton">
              <AiFillGoogleCircle className="mobileLoginButtonIcon" size="2em"/><a className="mobileLoginButtonText">SIGN IN WITH GOOGLE</a>
            </button>
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
            <p className="mobileSubtitle"><span className="underline">¿Por qué elegirnos?</span></p>
            <p className="mobileText">Somos una solución increíblemente fácil, flexible e intuitiva para administrar tus proyectos. 
              Haz que tu gestión sea una tarea mucho más fácil con loopy.
            </p>
            <button className="mobileLoginButton">
              <AiFillGoogleCircle className="mobileLoginButtonIcon" size="2em"/><a className="mobileLoginButtonText">SIGN IN WITH GOOGLE</a>
            </button>
            <p className="mobileContact">Síguenos en <span className="mobileUser">@loopy</span> para más información</p>
        </div>
      </div>
      }
    </>
  );
}

export default Login;
