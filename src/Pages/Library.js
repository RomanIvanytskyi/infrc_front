import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import { getProducts } from "../api/api";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { Container } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import Edit from "./Edit";
import "./modal.css";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import AddProduct from "./Components/Add";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

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
    backgroundImage:
      "url(https://png.pngtree.com/background/20210710/original/pngtree-commercial-new-product-listing-h5-background-material-picture-image_1002626.jpg)",
    backgroundRepeat: "no-repeat",

    backgroundSize: "cover",
    backgroundPosition: "center",
    maxWidth: "auto",
  },
  paper: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  },
  sort: {
    marginLeft: 120,
    marginTop: -37,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  margin: {
    position: "absolute",
    top: 50,
    left: 500,
    marginTop: -50,
    margiLeft: 400,
    width: 100,
    height: 100,
  },
}));

const Library = () => {
  const [data, setData] = useState([]);
  const classes = useStyles();
  const [sorting, setSorting] = useState("");
  const [open, setOpen] = React.useState(false);
  const [postID, setID] = useState("");

  // eslint-disable-next-line no-unused-vars
  const [absoluteUnimportnt, setabsoluteUnimportnt] = useState("seqw");
  const [dropdownOpen, setOpenn] = useState(false);

  const toggle = () => setOpenn(!dropdownOpen);

  const handleOpen = (id) => {
    setOpen(true);
  };

  const handleClose = () => {
    getProducts().then((res) => {
      setData(res.data);
    });
    setOpen(false);
  };

  useEffect(() => {
    getProducts().then((res) => {
      setData(res.data);
      setSorting("Name");
    });
  }, []);

  useEffect(() => {
    switch (sorting) {
      case "Name": {
        sortByName();
        break;
      }
      case "Count": {
        sortByCount();
        break;
      }
      default: {
        break;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sorting]);

  const sortByName = () => {
    function compare(a, b) {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      let comparison = 0;
      if (nameA > nameB) {
        comparison = 1;
      } else if (nameA < nameB) {
        comparison = -1;
      }
      return comparison;
    }
    setData(data.sort(compare));
    rerender();
  };

  const sortByCount = () => {
    setData(
      data.sort((a, b) => {
        return a.count - b.count;
      })
    );
    rerender();
    console.log("asddasd");
  };

  const rerender = () => {
    setabsoluteUnimportnt(new Date());
  };

  return (
    <div>
      <div className={classes.fone}>
        <div className={classes.margin}>
          <AddProduct />
          <ButtonDropdown
            className={classes.sort}
            isOpen={dropdownOpen}
            toggle={toggle}
          >
            <DropdownToggle caret>Sort</DropdownToggle>
            <DropdownMenu>
              <DropdownItem
                onClick={() => {
                  setSorting("Name");
                }}
              >
                Sort by name
              </DropdownItem>
              <DropdownItem
                onClick={() => {
                  setSorting("Count");
                }}
              >
                Sort by count
              </DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
        </div>
        <Row>
          {data.map((post) => {
            return (
              <Col key={post.id} sm="4">
                <Container key={post.id} fixed className={classes.container}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={post.image}
                      alt="Card image cap"
                    ></CardMedia>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {post.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {post.count}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Nav.Link as={Link} to={`/OneProduct/${post._id}`}>
                        More
                      </Nav.Link>

                      <Button
                        type="button"
                        onClick={() => {
                          handleOpen(post._id);
                          setID(post._id);
                        }}
                      >
                        Edit
                      </Button>
                    </CardActions>
                  </Card>
                </Container>
              </Col>
            );
          })}
          <ThisModal open={open} handleClose={handleClose} id={postID} />
        </Row>
      </div>
    </div>
  );
};

const ThisModal = (props) => {
  const body = (
    <div
      class="section full-height"
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <h5 id="simple-modal-title">Edit</h5>
      <Button size="small" color="primary" type="submit" onClick={() => {}}>
        <Edit class="modal-wrap" id={props.id} close={props.handleClose} />
      </Button>
    </div>
  );

  return (
    <Modal
      class="modal"
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {body}
    </Modal>
  );
};

export default Library;
