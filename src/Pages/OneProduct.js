import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPage, Delete } from "../api/api";
import { Card, CardImg, CardTitle, CardText } from "reactstrap";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import classes from "./Product.module.css";
import Comment from "./Comment";
import Commentlist from "./getComment";
import { deleteComments } from "../api/api";

const Product = (props) => {
  const location = useLocation();
  const [data, setData] = useState([]);
  let history = useHistory();

  const redirect = () => {
    history.push("/");
  };

  useEffect(() => {
    getLocation().then((response) => {
      getPage(response.pathname.split("/")[2]).then((res) => {
        setData(res.data);
      });
    });
    //eslint-disable-next-line
  }, []);

  const deleteItem = (id) => {
    deleteComments(id).then((res) => {
      console.log(res);
    });
    Delete(id).then((response) => {
      console.log(response);
    });
    redirect();
  };

  const getLocation = async () => {
    let loc = await location;
    return loc;
  };

  return (
    <div>
      {data ? (
        <div>
          <Card className={classes.card} body>
            <Button
              className={classes.backBtn}
              onClick={(e) => {
                redirect();
              }}
            >
               <Chip label="Back" className={classes.Chip}  />
            </Button>
            <div className={classes.carddetail}>
              <CardTitle tag="h5" className={classes.cardname}>
                {data.name}
              </CardTitle>
              <CardImg
                className={classes.cardImg}
                top
                width="100%"
                src={data.image}
                style={{ width: "128px" }}
                alt="Card image cap"
              />

              <CardText>
                {" "}
                <Chip label="weight " color="primary" /> {data.weight} kg
              </CardText>
              <CardText>
                <Chip label="count " color="primary" /> {data.count}
              </CardText>
              <CardText>
                <Chip label="size" color="primary" /> - {data.width} X{" "}
                {data.height}
              </CardText>
              <div>
                <Button
                  size="small"
                  color="primary"
                  type="submit"
                  onClick={(e) => deleteItem(data._id)}
                >
                  <Chip label="Delete" color="success" variant="outlined" />
                </Button>
              </div>
            </div>
          </Card>

          <Comment id={data._id} />
          <Commentlist id={data._id} />
        </div>
      ) : (
        <p>Not found </p>
      )}
    </div>
  );
};

export default Product;
