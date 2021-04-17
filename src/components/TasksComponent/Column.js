import React from 'react';
import './Tasks.css'
import Ticket from './Ticket';
import { Grid } from "@material-ui/core";
import { VscDebugBreakpointLog } from "react-icons/vsc";

const Column = (props) => {
  return(
    <Grid item md={3}>
      <Grid className="columnContainer" container>
        <Grid className="columnHeader" item md={12}>
          <VscDebugBreakpointLog style={{ color: props.color }}></VscDebugBreakpointLog>
          <span className="columnTitle">{props.col_title}: {props.tickets.length}</span>
        </Grid>
      </Grid>

      {/* Tickets */}
      <Grid item md={12}>
        { props.tickets.map(ticket => {
          return(
            <Ticket
              key={ticket.id}
              ticket={ticket}
            />
          )
        })}
      </Grid>
    </Grid>
  );
}

export default Column;