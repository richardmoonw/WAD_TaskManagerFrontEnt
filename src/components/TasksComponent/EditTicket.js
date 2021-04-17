import React, { useState } from 'react';
import 'date-fns';
import './Tasks.css';
import { Dialog, DialogContent, Button, Grid, IconButton, TextField, DialogTitle } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { GrClose } from "react-icons/gr";
import { IoCloudUploadOutline } from "react-icons/io5";
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

const EditTicket = ({ open, setOpen, ticket }) => {

  const [title, setTitle] = useState(ticket.title);
  const [description, setDescription] = useState(ticket.description);
  const [priority, setPriority] = useState(priorityItems.find(x => x === ticket.priority));
  const [status, setStatus] = useState(statusItems.find(x => x === ticket.status));
  const [date, setDate] = useState(ticket.end_at);

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
          <Grid item md={11}></Grid>
          <Grid className="centeredContainer" item md={1}>
            <IconButton onClick={close}>
              <GrClose />
            </IconButton>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item md={12}>
            <IoCloudUploadOutline className="title titleVariant2"/>
          </Grid>
          <Grid item md={12}>
            <p className="title titleVariant2">Update Ticket</p>
          </Grid>
        </Grid>
      </DialogTitle>

      {/* Content section */}
      <DialogContent className="formattedDialogContent">
        <Grid container>
          <Grid item md={12}>
            <p className="fieldInformation">TICKET INFORMATION</p>
          </Grid>
          <Grid item md={12}>
            <TextField className="formattedTextField"
              id="title"
              label="Ingresa el nombre identificador del ticket"
              variant="outlined"
              inputProps={{ maxLength: 120 }}
              value={title}
              onChange={e => setTitle(e.target.value)}  
            />
          </Grid>
          <Grid item md={12}>
            <TextField className="formattedTextField"
              id="description"
              label="Ingresa una breve descripción para el ticket"
              variant="outlined"
              inputProps={{ maxLength: 120 }}
              multiline
              rows={2}
              value={description}
              onChange={e => setDescription(e.target.value)}  
            />
          </Grid>
          <Grid item md={4}>
            <DropMenu className="formattedDropdown" title="Priority" items={priorityItems} current={1} value={priority} setValue={changePriority}/>
          </Grid>
          <Grid item md={4}>
            <DropMenu className="formattedDropdown" title="Status" items={statusItems} current={0} value={status} setValue={changeStatus}/>
          </Grid>
          <Grid item md={4}>
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
          <Grid item xs={2}></Grid>
          <Grid className="centeredContainer" item xs={4}>
            <Button className="optionButton" variant="contained" color="primary">Update</Button>
          </Grid>
          <Grid className="centeredContainer" item xs={4}>
            <Button className="optionButton" variant="contained">Cancel</Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}

export default EditTicket;