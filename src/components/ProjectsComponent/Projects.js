import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Navbar from '../NavbarComponent/Navbar';
import { IoAddOutline } from "react-icons/io5";
import { FormControl, Container,Grid, IconButton, MenuItem, InputLabel, Select } from '@material-ui/core';
import './Projects.css';
import ProjectCard from './ProjectCard';
import AddProject from './AddProject';
import Logo from '../../assets/index_image.webp';

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
                        <Grid container>
                            <Grid item md={11}>
                                <p className="title">Projects</p>
                            </Grid>
                            <Grid className="centeredContainer" item md={1}>
                                <IconButton className="addButton" onClick={() => setOpen(true)}>
                                    <IoAddOutline />
                                </IconButton>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            
                                <ProjectCard  title="Project 1" avatar="P" description="This is the first project." date="04/10/2021" image={Logo}/>
                            
                                <ProjectCard className="card" title="Project 2" avatar="Q" description="This is the second project." date="04/11/2021" image={Logo}/>
                            
                                <ProjectCard className="card" title="Project 3" avatar="X" description="This is the third project." date="04/12/2021" image={Logo}/>
                            
                                <ProjectCard className="card" title="Project 4" avatar="A" description="This is the fourth project." date="04/15/2021" image={Logo}/>   
                            
                                <ProjectCard className="card" title="Project 5" avatar="p" description="This is the fifth project." date="04/16/2021" image={Logo}/>
                            
                                <ProjectCard className="card" title="Project 6" avatar="p" description="This is the sixth project." date="04/17/2021" image={Logo}/>
                            
                                <ProjectCard className="card" title="Project 7" avatar="Z" description="This is the seventh project." date="04/18/2021" image={Logo}/>
                            
                                <ProjectCard className="card" title="Project 8" avatar="D" description="This is the eighth project." date="04/21/2021" image={Logo}/>
                            
                                <ProjectCard className="card" title="Project 9" avatar="R" description="This is the ninth project." date="04/24/2021" image={Logo}/>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
        }
        {/* Mobile design */}
        { isTabletOrSmartphone && 
            <>
            <Navbar module="projects" />
            <div className="mobileBackgroundComponent">
                <div className="mobileProjectsComponent">
                    <Grid container>
                                <Grid item xs={11}>
                                    <p className="title">Projects</p>
                                </Grid>
                                <Grid className="centeredContainer" item xs={1}>
                                    <IconButton className="addButton" onClick={() => setOpen(true)}>
                                        <IoAddOutline />
                                    </IconButton>
                                </Grid>
                            
                            <Grid spacing={2} container>
                                    <ProjectCard className="card" title="Project 1" avatar="P" description="This is the first project." date="04/10/2021" image={Logo}/>
                                
                                    <ProjectCard className="card" title="Project 2" avatar="Q" description="This is the second project." date="04/11/2021" image={Logo}/>
                                
                                    <ProjectCard className="card" title="Project 3" avatar="X" description="This is the third project." date="04/12/2021" image={Logo}/>
                                
                                    <ProjectCard className="card" title="Project 4" avatar="A" description="This is the fourth project." date="04/15/2021" image={Logo}/>
                                
                                    <ProjectCard className="card" title="Project 5" avatar="p" description="This is the fifth project." date="04/16/2021" image={Logo}/>
                                
                                    <ProjectCard className="card" title="Project 6" avatar="p" description="This is the sixth project." date="04/17/2021" image={Logo}/>
                               
                                    <ProjectCard className="card" className="card" title="Project 7" avatar="Z" description="This is the seventh project." date="04/18/2021" image={Logo}/>
                                
                                    <ProjectCard className="card" title="Project 8" avatar="D" description="This is the eighth project." date="04/21/2021" image={Logo}/>
                                
                                    <ProjectCard className="card" title="Project 9" avatar="R" description="This is the ninth project." date="04/24/2021" image={Logo}/>
                                
                            </Grid>
                        
                    </Grid>
                </div>
            </div>
            </>
        }
        <AddProject
            open={open}
            setOpen={setOpen}>
        </AddProject>

        
        </>
    )
}
export default Projects;