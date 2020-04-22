import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  containedButton: {
    boxShadow: 'none',
    backgroundColor: theme.palette.primary.main,
    color: '#ffffff',
    '&:hover': {
      boxShadow: 'none',
      backgroundColor: theme.palette.primary.main,
    },
  },
}));

export default function NavLinkButton(props) {
  const classes = useStyles();
  const {className, to, children, isContained} = props;

  return (
    <Button
      color="primary"
      type="button"
      component={NavLink}
      to={to}
      className={`${className} ${!!isContained && `MuiButton-contained ${classes.containedButton}`}`}
      activeClassName={`MuiButton-contained ${classes.containedButton}`}
    >
      <Typography color="inherit" style={{fontWeight: 600}}>{children}</Typography>
    </Button>
  );
}

NavLinkButton.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  children: PropTypes.node.isRequired,
  isContained: PropTypes.bool,
};
