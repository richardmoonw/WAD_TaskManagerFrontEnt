import React, { useState } from 'react';
import 'date-fns';
import './Tasks.css';
import { Dialog, DialogContent, Button, Grid, IconButton, TextField, DialogTitle } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { GrClose } from "react-icons/gr";
import { IoCreateOutline } from "react-icons/io5";
import DropMenu from './DropMenu';

const priorityItems = [
  {
    id: 1,
    name: 'High'
  },
  {
    id: 2,
    name: 'Medium'
  },
  {
    id: 3,
    name: 'Low'
  },
]

const statusItems = [
  {
    id: 1,
    name: 'Backlog'
  },
  {
    id: 2,
    name: 'Selected for development'
  },
  {
    id: 3,
    name: 'In progress'
  },
  {
    id: 4,
    name: 'Done'
  },
]

const CreateTicket = ({ open, setOpen }) => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState(priorityItems[0]);
  const [status, setStatus] = useState(statusItems[0]);
  const [date, setDate] = useState(new Date());

  const changePriority = (value) => {
    setPriority(value)
  }

  const changeStatus = (value) => {
    setStatus(value)
  }

  const close = () => {
    setOpen(false);
  }

  return (
    <Dialog open={open} onClose={close} maxWidth='sm'>
      {/* Header section */}
      <DialogTitle className="titleContainer">
        <Grid container>
          <Grid item xs={11} md={11}></Grid>
          <Grid className="centeredContainer" item xs={1} md={1}>
            <IconButton onClick={close}>
              <GrClose />
            </IconButton>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={12}>
            <IoCreateOutline className="title titleVariant1"/>
          </Grid>
          <Grid item xs={12} md={12}>
            <p className="title titleVariant1">Create Ticket</p>
          </Grid>
        </Grid>
      </DialogTitle>

      {/* Content section */}
      <DialogContent className="formattedDialogContent">
        <Grid container>
          <Grid item xs={12} md={12}>
            <p className="fieldInformation">TICKET INFORMATION</p>
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField className="formattedTextField"
              id="title"
              label="Nombre"
              variant="outlined"
              inputProps={{ maxLength: 120 }}
              value={title}
              onChange={e => setTitle(e.target.value)}  
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField className="formattedTextField"
              id="description"
              label="Descripción"
              variant="outlined"
              inputProps={{ maxLength: 120 }}
              multiline
              rows={2}
              value={description}
              onChange={e => setDescription(e.target.value)}  
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <DropMenu className="formattedDropdown" title="Priority" items={priorityItems} current={1} setValue={changePriority}/>
          </Grid>
          <Grid item xs={12} md={4}>
            <DropMenu className="formattedDropdown" title="Status" items={statusItems} current={0} setValue={changeStatus}/>
          </Grid>
          <Grid item xs={11} md={4}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                id="due_date"
                label="Fecha límite"
                value={date}
                onChange={setDate}
                className="formattedDatePicker"
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={1} md={2}></Grid>
          <Grid className="centeredContainer" item xs={5} md={4}>
            <Button className="optionButton" variant="contained" color="secondary">Create</Button>
          </Grid>
          <Grid className="centeredContainer" item xs={5} md={4}>
            <Button className="optionButton" onClick={close} variant="contained">Cancel</Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}

export default CreateTicket;