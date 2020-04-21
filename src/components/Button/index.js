import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

export default function NavLinkButton(props) {
  const {className, children, onClick} = props;

  return (
    <Button
      color="primary"
      type="button"
      size="large"
      variant="contained"
      onClick={onClick}
      className={className}
    >
      <Typography color="inherit" style={{fontWeight: 600}}>{children}</Typography>
    </Button>
  );
}

NavLinkButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};
