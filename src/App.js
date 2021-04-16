import { Grid, Container } from '@material-ui/core';
import { AiFillGoogleCircle } from 'react-icons/ai';
import './App.css'
import Logo from './assets/logo.png';
import MobileImage from './assets/index_image.png';
import React from 'react';
import { useMediaQuery } from 'react-responsive';


const App = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1024px)'
  });

  const isTabletOrSmartphone = useMediaQuery({
    query: '(max-device-width: 1024px'
  });

  return (
    <>
      { isDesktopOrLaptop && 
      <div>
        <Container>
          <p>Hello World</p>
        </Container>
      </div>
      }

      {/* Mobile design */}
      { isTabletOrSmartphone &&
      <div>
        <div className="mobileContainer">
          <Grid container spacing={3}>
            <Grid item xs={6} s={6}>
              <img className="mobileLogo" src={Logo} alt="LOOPY"></img>
            </Grid>
          </Grid>
          <p className="mobileTitle">Convierte tus proyectos en algo realmente mágico.</p> 
        </div>
        
        <img className="mobileImage" src={MobileImage}></img>
          <div className="mobileContainer">
            <p className="mobileSubtitle">¿Por qué elegirnos?</p>
            <hr className="mobileDivision"/>
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

export default App;
