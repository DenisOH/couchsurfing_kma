import React from 'react';
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import StarIcon from '@material-ui/icons/Star';
import Avatar from "@material-ui/core/Avatar";
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginBottom: theme.spacing(8),
    overflow: 'hidden',
    "&:hover": {
      boxShadow: '0px 6px 6px -3px rgba(0,0,0,0.2), 0px 10px 14px 1px rgba(0,0,0,0.14), 0px 4px 18px 3px rgba(0,0,0,0.12)',
    },
  },
  img: {
    maxWidth: '50%',
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  description: {
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  header: {
    width: "100%",
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rating: {
    display: "flex",
    alignItems: "center",
  },
  specs: {
    '& > span': {
      color: "#B9B6BB",
      marginRight: theme.spacing(2),
    },
  },
  descriptionText: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(2),
  },
  userSection: {
    display: "flex",
    alignItems: "center",
  },
  userPhoto: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginRight: theme.spacing(4),
  },
  userTitle: {
    fontWeight: "bold",
  },
  interests: {
    marginLeft: theme.spacing(4),
    "& > span": {
      padding: theme.spacing(0.75),
      backgroundColor: theme.palette.primary.main,
      borderRadius: "12px",
      color: "white",
      marginRight: theme.spacing(2),
    }
  }
}));


export default function Listing(props) {
  const classes = useStyles();

  return (
    <Paper square={false} className={classes.root}>
      <img src={props.photo_url} alt="Apartment" className={classes.img}/>
      <div className={classes.description}>
        <div>
          <div className={classes.header}>
            <Typography variant="h6">
              {props.title}
            </Typography>
            <div className={classes.rating}>
              <StarIcon color="primary" fontSize="small" />
              <Typography color="primary" variant="subtitle1">
                {props.user.rating}
              </Typography>
            </div>
          </div>
          <div className={classes.specs}>
            {props.specifics.map(spec => (
              <span key={spec}>{spec}</span>
            ))}
          </div>
        </div>
        <div className={classes.descriptionText}>
          <Typography variant="subtitle1">
            {props.description}
          </Typography>
        </div>
        <div className={classes.userSection}>
          <div className={classes.userPhoto}>
            <Avatar>
              <PersonIcon />
            </Avatar>
            <span>{props.user.name}</span>
          </div>
          <Typography color="primary" className={classes.userTitle} variant="subtitle1">
            {props.user.title}
          </Typography>
          <div className={classes.interests}>
            {props.user.interests.map(interest => (
              <span key={interest} className={classes.interest}>{interest}</span>
            ))}
          </div>
        </div>
      </div>
    </Paper>
  );
}

Listing.propTypes = {
  photo_url: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  user: PropTypes.object,
  specifics: PropTypes.array,
};
