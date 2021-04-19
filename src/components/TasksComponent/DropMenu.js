import React, { useState } from 'react';
import { Grid, MenuItem, InputLabel, FormControl, Select } from '@material-ui/core';

const DropMenu = ({title, items}) => {
  return(
    <FormControl style={{width: "90%", marginBottom: "1rem"}}>
      <InputLabel shrink id={title}>{title}</InputLabel>
      <Select 
        labelId={title}
        displayEmpty
      >
        { items.map(item => {
          return(
            <MenuItem key={item.id} value={item.name}>{item.name}</MenuItem>
          );
        })}

      </Select>
    </FormControl>
  );
}

export default DropMenu;