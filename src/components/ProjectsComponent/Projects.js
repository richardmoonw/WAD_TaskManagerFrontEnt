import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { FormControl, Grid, IconButton, MenuItem, InputLabel, Select } from '@material-ui/core';
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
        
            <div className="desktopContainer columnsContainer">
                <div className="gridContainer">
                    <h1>Text</h1>
                    <h1>Text</h1>
                    <h1>Text</h1>
                    <h1>Text</h1>
                    <h1>Text</h1>
                    <h1>Text</h1>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                </div>
            </div>

        
        </>
    )
}
export default Projects;