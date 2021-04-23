import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Navbar from '../NavbarComponent/Navbar';
import { FormControl, Container,Grid, IconButton, MenuItem, InputLabel, Select } from '@material-ui/core';
import './Projects.css';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const[status, setStatus] = useState("backlog")
    const[open, setOpen] = useState(false);

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1366px)'
    });

    const isTabletOrSmartphone = useMediaQuery({
        query: '(max-width: 1355px)'
    });

    return(
        <>
        { isDesktopOrLaptop && 
        <div className="desktopContainer">
            <Navbar module="projects" />
            <div className="columnsContainer">
                <Grid container>
                    <Grid item md={1}></Grid>
                    <Grid item md={10}>
                        <Grid className="projectsRow" container>
                            <Grid item md={4}>
                                <ProjectCard className="card" />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <ProjectCard/>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <ProjectCard/>
                            </Grid>
                        </Grid>
                        <Grid className="projectsRow" container>
                            <Grid item md={4}>
                                <ProjectCard className="card" />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <ProjectCard/>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <ProjectCard/>
                            </Grid>
                        </Grid>
                        <Grid className="projectsRow" container>
                            <Grid item md={4}>
                                <ProjectCard className="card" />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <ProjectCard/>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <ProjectCard/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
        }
        

        
        </>
    )
}
export default Projects;