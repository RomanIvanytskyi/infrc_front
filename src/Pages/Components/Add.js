import React from "react";
import { Button } from "reactstrap";
import NewProduct from "../NewProduct";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 545,
    marginBottom: 15,
    align: "center",
  },
  media: {
    height: 240,
  },

  container: {
    marginTop: 20,
  },

  fone: {
    backgroundImage: "url(https://source.unsplash.com/random/)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    maxWidth: "auto",
  },
  paper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  },
}));

const AddProduct = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = (id) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button onClick={handleOpen}>AddProduct</Button>
      <ThisModal open={open} handleClose={handleClose} />
    </div>
  );
};

const ThisModal = (props) => {
  const classes = useStyles();

  const body = (
    <div
      className={classes.paper}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <h5 id="simple-modal-title">New Product</h5>
      <Button size="small" color="primary" type="submit" onClick={() => {}}>
        <NewProduct close={props.handleClose} />
      </Button>
    </div>
  );

  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {body}
    </Modal>
  );
};

export default AddProduct;
