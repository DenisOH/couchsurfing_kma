import React from 'react';
import ContentPage from "../ContentPage";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import WifiOffIcon from '@material-ui/icons/WifiOff';
import WifiIcon from '@material-ui/icons/Wifi';
import BlockOutlinedIcon from '@material-ui/icons/BlockOutlined';
import PetsOutlinedIcon from '@material-ui/icons/PetsOutlined';
import {useDropzone} from 'react-dropzone'
import RootRef from '@material-ui/core/RootRef'
import Paper from "@material-ui/core/Paper";
import {Map, Marker, TileLayer} from "react-leaflet";
import Button from "../../components/Button";

const beds = [
  {
    value: "1",
    label: "1 ліжко"
  },
  {
    value: "2",
    label: "2 ліжка"
  },
  {
    value: "3",
    label: "3 ліжка"
  },
  {
    value: "4",
    label: "4 ліжка"
  },
];

const shower = [
  {
    value: "1",
    label: "Так"
  },
  {
    value: "0",
    label: "Ні"
  },
];

const useStyles = makeStyles((theme) => ({
  inputs: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
  },
  left: {
    paddingRight: theme.spacing(4),
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      paddingRight: 0,
    },
  },
  right: {
    paddingLeft: theme.spacing(4),
    width: "30%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      paddingLeft: 0,
    },
  },
  dropSection: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "40px",
    borderWidth: "2px",
    borderRadius: "2px",
    borderStyle: "dashed",
    backgroundColor: "#fafafa",
    color: "#bdbdbd",
    outline: "none",
    transition: "border .24s ease-in-out",
  }
}));

export default function AddListing() {
  const classes = useStyles();

  const [selectedLocation, setSelectedLocation] = React.useState({});
  const {getRootProps, getInputProps, acceptedFiles} = useDropzone();
  const {ref, ...rootProps} = getRootProps();

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));


  const handleMapClick = (e) => {
    setSelectedLocation(e.latlng);
  };

  return (
    <ContentPage>
      <Container maxWidth="lg">
        <Typography variant="h5">
          Розкажіть про своє житло
        </Typography>
        <div className={classes.inputs}>
          <div className={classes.left}>
            <TextField required fullWidth label="Назва житла" variant="outlined" style={{marginTop: "12px", marginBottom: "12px"}} />
            <TextField required fullWidth label="Місто" variant="outlined" style={{marginTop: "12px", marginBottom: "12px"}} />
            <TextField required fullWidth label="Опис" variant="outlined" multiline rows={4} style={{marginTop: "12px", marginBottom: "12px"}} />
          </div>
          <div className={classes.right}>
            <TextField
              select
              fullWidth
              label="Кількість ліжок"
              helperText="Будь ласка оберіть кількість ліжок"
              required
            >
              {beds.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              select
              fullWidth
              label="Наявність душу/ванної"
              helperText="Будь ласка вкажіть наявність душу/ванної"
              style={{marginTop: "12px"}}
              required
            >
              {shower.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </div>
        <div>
          <FormControlLabel
            color="primary"
            control={<Checkbox color="primary" icon={<WifiOffIcon style={{fontSize: 32}} />} checkedIcon={<WifiIcon style={{fontSize: 32}} />} name="checkedH" />}
            label="Наявність Wi-Fi"
          />
          <br/>
          <FormControlLabel
            color="primary"
            control={<Checkbox color="primary" icon={<BlockOutlinedIcon style={{fontSize: 32}} />} checkedIcon={<PetsOutlinedIcon style={{fontSize: 32}} />} name="checkedH" />}
            label="Тварини дозволяються"
          />

          <Typography variant="h5" style={{marginTop: "48px", marginBottom: "12px"}}>
            Додайте фото
          </Typography>
          <RootRef rootRef={ref} multiple={true}>
            <Paper {...rootProps} className={classes.dropSection}>
              <input {...getInputProps()} />
              <span>Для додавання фото ви можете просто перетягнути їх сюди.</span>
            </Paper>
          </RootRef>
          {files}
          <Typography variant="h5" style={{marginTop: "48px", marginBottom: "12px"}}>
            Оберіть розташування на мапі
          </Typography>
          <Map center={[50.472548, 30.502451]} zoom={8} style={{height: "400px", marginBottom: "48px"}} onClick={handleMapClick}  >
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}.png"
            />
            { Object.keys(selectedLocation).length !== 0 && <Marker position={selectedLocation} /> }
          </Map>
          <Button onClick={() => {

          }} color="primary" autoFocus>
            ЗБЕРЕГТИ
          </Button>
        </div>
      </Container>
    </ContentPage>
  );
}
