import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import EditProject from './EditProject';
import { useMediaQuery } from 'react-responsive';
import { FormControl, Container,Grid, IconButton, MenuItem, InputLabel, Select } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const ProjectCard = (props) => {
  const {avatar, title, date, description, image} = props;
  const classes = useStyles();
  const[open, setOpen] = useState(false);

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1366px)'
  });

  const isTabletOrSmartphone = useMediaQuery({
      query: '(max-width: 1355px)'
  });

  return (
    <>
    {isDesktopOrLaptop &&
      <Grid item md={4}>
      <Card className={classes.root} className="card">
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {avatar}
          </Avatar>
        }
        title={title}
        subheader={date}
      />
      <CardMedia
        className={classes.media}
        image={image}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <button className="ticketButton" onClick={() => setOpen(true)}>EDIT</button>
      <button className="ticketButton">DELETE</button>
    </Card>
    </Grid>
    }
    {isTabletOrSmartphone &&
      <Grid item md={6} xs={12}>
        <Card className={classes.root} className="card">
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {avatar}
            </Avatar>
          }
          title={title}
          subheader={date}
        />
        <CardMedia
          className={classes.media}
          image={image}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
        <button className="ticketButton" onClick={() => setOpen(true)}>EDIT</button>
        <button className="ticketButton">DELETE</button>
      </Card>
      </Grid>
    }
    <EditProject
      open={open}
      setOpen={setOpen}
      project={props}
    />
    </>
    
  );
}
export default ProjectCard;