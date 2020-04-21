import React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import Button from "../Button";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';


const count = [
  {
    value: "1",
    label: "1 людина"
  },
  {
    value: "2",
    label: "2 людини"
  },
  {
    value: "3",
    label: "3 людини"
  },
  {
    value: "4",
    label: "4 людини"
  },
];

const useStyles = makeStyles(() => ({
  root: {
    "& .MuiDialog-paper": {
      width: "50vw",
      maxWidth: "none",
    },
  },
}));

export default function SendQuery(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  return (
    <>
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={open}
      onClose={handleClose}
      autoHideDuration={4000}
      message="Запит надіслано!"
      action={
        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
          <CloseIcon fontSize="small" />
        </IconButton>
      }

    >
    </Snackbar>

      <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className={classes.root}
    >
      <DialogTitle id="alert-dialog-title">Запит</DialogTitle>
      <DialogContent style={{marginBottom: "24px"}}>
        <Typography variant="subtitle1">
          Персоналізуйте повідомлення, щоб хост скоріше відповів на нього
        </Typography>
        <TextField required fullWidth label="Повідомленя" variant="outlined" multiline rows={4} style={{marginTop: "12px", marginBottom: "12px"}} />
        <TextField
          select
          label="Кількість людей"
          helperText="Будь ласка оберіть кількість людей"
          required
        >
          {count.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </DialogContent>
      <DialogActions style={{justifyContent: "center"}}>
        <Button onClick={() => {
          props.handleClose();
          handleClick();
        }} color="primary" autoFocus>
          НАДІСЛАТИ
        </Button>
      </DialogActions>
    </Dialog>
    </>
  );
}


SendQuery.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
};
