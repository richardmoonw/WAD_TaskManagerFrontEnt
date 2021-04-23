import React, { useState } from 'react';
import Column from './Column';
import Navbar from '../NavbarComponent/Navbar';
import { FormControl, Grid, IconButton, MenuItem, InputLabel, Select } from '@material-ui/core';
import { IoAddOutline } from "react-icons/io5";
import './Tasks.css';
import { useMediaQuery } from 'react-responsive';
import CreateTicket from './CreateTicket';

const Tasks = () => {

  const[status, setStatus] = useState("backlog")
  const[open, setOpen] = useState(false);

  const isDesktopOrLaptop = useMediaQuery({
    minDeviceWidth: 1366
  });

  const isTabletOrSmartphone = useMediaQuery({
    maxDeviceWidth: 1365
  });

  const handleStatus = (event) => {
    setStatus(event.target.value);
  };

  return (
    <>
      { isDesktopOrLaptop &&
        <div className="desktopContainer">
          <Navbar module="tasks" />
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
                ></Column>

                {/* Dev column */}
                <Column
                  col_title='Selected for development'
                  color="#8c8eff"
                  tickets={[{ id: 2, title: "Hello", description: "Hello World", priority: "Medium", end_at: "04/16/2021" }]}
                  project_id={"1"}
                ></Column>

                {/* In progress column */}
                <Column
                  col_title='In progress'
                  color="#ff8c90"
                  tickets={[{ id: 4, title: "Hello", description: "Hello World", priority: "High", end_at: "04/16/2021" }]}
                  project_id={"1"}
                ></Column>

                {/* Done column */}
                <Column
                  col_title='Done'
                  color="#63db81"
                  tickets={[{ id: 5, title: "Hello", description: "Hello World", priority: "Medium", end_at: "04/16/2021" }]}
                  project_id={"1"}
                ></Column>
              </Grid>
            </Grid>
          </Grid>
        </div>
      }

      {/* Mobile design */}
      { isTabletOrSmartphone && 
        <>
          <Navbar module="tasks" />
          <div className="mobileBackgroundComponent">
            <div className="mobileTasksComponent">
              <Grid container>
                <Grid item xs={11}>
                  <p className="title">Title</p>
                </Grid>
                <Grid style={{textAlign: "right"}} item xs={1}>
                  <IconButton className="addButton" onClick={() => setOpen(true)}>
                    <IoAddOutline />
                  </IconButton>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={6}>
                  <FormControl className="statusPicker">
                    <InputLabel shrink id="status-label">Status</InputLabel>
                    <Select
                      labelId="status-label"
                      value={status}
                      onChange={handleStatus}
                    >
                      <MenuItem value="backlog">Backlog</MenuItem>
                      <MenuItem value="dev">Selected for dev</MenuItem>
                      <MenuItem value="doing">Doing</MenuItem>
                      <MenuItem value="done">Done</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>

              <Grid container>
                { status==="backlog" &&
                  <Column
                    col_title='Backlog'
                    color="#969696"
                    tickets={[{ id: 1, title: "Hello", description: "Hello World", priority: "Low", end_at: "04/16/2021" }, { id: 3, title: "Hello", description: "Hello World", priority: "Low", end_at: "04/16/2021" }]}
                    project_id={"1"}
                  />
                }
                { status==="dev" &&
                  <Column
                    col_title='Selected for development'
                    color="#8c8eff"
                    tickets={[{ id: 2, title: "Hello", description: "Hello World", priority: "Medium", end_at: "04/16/2021" }]}
                    project_id={"1"}
                  ></Column>
                }
                { status==="doing" &&
                  <Column
                    col_title='In progress'
                    color="#ff8c90"
                    tickets={[{ id: 4, title: "Hello", description: "Hello World", priority: "High", end_at: "04/16/2021" }]}
                    project_id={"1"}
                  ></Column>
                }
                { status==="done" &&
                  <Column
                    col_title='Done'
                    color="#63db81"
                    tickets={[{ id: 5, title: "Hello", description: "Hello World", priority: "Medium", end_at: "04/16/2021" }]}
                    project_id={"1"}
                  ></Column>
                }
              </Grid>
            </div>
          </div>   
        </>
      }
      <CreateTicket
        open={open}
        setOpen={setOpen}>
      </CreateTicket>
    </>
  );
}

export default Tasks;

