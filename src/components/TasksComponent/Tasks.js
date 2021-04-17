import React, { useState } from 'react';
import Column from './Column';
import Navbar from '../NavbarComponent/Navbar';
import { Grid, IconButton } from '@material-ui/core';
import { IoAddOutline } from "react-icons/io5";
import './Tasks.css';
import { useMediaQuery } from 'react-responsive';
import CreateTicket from './CreateTicket';

const Tasks = () => {
  const[open, setOpen] = useState(false);

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1366px)'
  });

  const isTabletOrSmartphone = useMediaQuery({
    query: '(max-device-width: 1355px'
  });

  return (
    <>
      { isDesktopOrLaptop &&
        <div className="desktopContainer">
          <Navbar />
          <Grid className="columnsContainer" container>
            <Grid item md={1}></Grid>
            <Grid item md={10}>
              <Grid container>
                <Grid item md={11}>
                  <p className="title">Title</p>
                </Grid>
                <Grid className="centeredContainer" item md={1}>
                  <IconButton className="addButton" onClick={() => setOpen(true)}>
                    <IoAddOutline />
                  </IconButton>
                </Grid>
              </Grid>

              {/* Columns */}
              <Grid container spacing={3}>

                {/* Backlog column */}
                <Column
                  col_title='Backlog'
                  color="#969696"
                  tickets={[{ id: 1, title: "Hello", description: "Hello World", priority: "Low", end_at: "04/16/2021" }, { id: 3, title: "Hello", description: "Hello World", priority: "Low", end_at: "04/16/2021" }]}
                  project_id={"1"}
                  employee_id={"2"}
                ></Column>

                {/* Dev column */}
                <Column
                  col_title='Selected for development'
                  color="#8c8eff"
                  tickets={[{ id: 2, title: "Hello", description: "Hello World", priority: "Medium", end_at: "04/16/2021" }]}
                  project_id={"1"}
                  employee_id={"2"}
                ></Column>

                {/* In progress column */}
                <Column
                  col_title='In progress'
                  color="#ff8c90"
                  tickets={[{ id: 4, title: "Hello", description: "Hello World", priority: "High", end_at: "04/16/2021" }]}
                  project_id={"1"}
                  employee_id={"2"}
                ></Column>

                {/* Done column */}
                <Column
                  col_title='Done'
                  color="#63db81"
                  tickets={[{ id: 5, title: "Hello", description: "Hello World", priority: "Medium", end_at: "04/16/2021" }]}
                  project_id={"1"}
                  employee_id={"2"}
                ></Column>
              </Grid>
            </Grid>
          </Grid>
          <CreateTicket
            open={open}
            setOpen={setOpen}>
          </CreateTicket>
        </div>
      }

      {/* Mobile design */}
      { isTabletOrSmartphone && <p>Hello perro</p>
      }
    </>
  );
}

export default Tasks;

