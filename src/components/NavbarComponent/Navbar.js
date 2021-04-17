import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { Grid, Button } from '@material-ui/core';
import { AiOutlineAppstore } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import Logo from '../../assets/logo.png';

const Navbar = () => {
  return(
    <Grid className="navbarContainer" container>
      {/* Empty space at the left */}
      <Grid item md={1}></Grid>

      {/* Brand container */}
      <Grid item md={11}>
        <Grid className="topPanel" container>
          <Grid item md={1}>
            <Link className="formattedLink" to="/">
              <img className="logo" src={Logo} alt="loopy"></img>
            </Link>
          </Grid>
          <Grid item md={5}></Grid>
          <Grid className="buttonContainer" item md={5}>
            <Link className="formattedLink" to="/projects">
              <Button
                className="navbarButton" 
                variant="contained"
                color="primary"
                startIcon={<AiOutlineAppstore className="buttonIcon" />}
              >Projects</Button>
            </Link>
            <Link className="formattedLink" to="/">
              <Button 
                className="navbarButton" 
                variant="contained"
                color="secondary"
                startIcon={<FiLogOut className="buttonIcon" />}
              >Sign Out</Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Navbar;