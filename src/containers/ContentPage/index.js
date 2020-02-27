import React from "react";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";

export default function ContentPage(props) {
  const {children} = props;
  return (
    <Box component="div" px={3} mt={10}>
      {children}
    </Box>
  )
}

ContentPage.propTypes = {
  children: PropTypes.node.isRequired,
};
