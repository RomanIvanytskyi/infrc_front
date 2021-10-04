import React from "react";
import { useEffect, useState } from "react";
import { getComments, deleteComment } from "../api/api";
import { Avatar, Grid, Paper, Button } from "@material-ui/core";
import "./style.css";

const Commentlist = ({ id }) => {
  const [data, setData] = useState(null);
  const [lastUpdated, setLastUpdated] = useState("");

  useEffect(() => {
    getComments(id).then((res) => {
      setData(res.data);
    });
  }, [id]);

  useEffect(() => {
    getComments(id).then((res) => {
      setData(res.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastUpdated]);

  const DeleteComment = (id) => {
    console.log(id);
    deleteComment(id).then((response) => {
      console.log("done");
      setLastUpdated(response.data);
    });
  };

  return (
    <div>
      {data &&
        data.map((comment) => {
          return (
            <div>
              <Paper style={{ padding: "40px 20px", marginTop: 100 }}>
                <Grid container wrap="nowrap" spacing={2}>
                  <Grid item>
                    <Avatar sx={{ bgcolor: "deepOrange[500]" }}>^-^</Avatar>
                  </Grid>
                  <Grid justifyContent="flex-start" item xs zeroMinWidth>
                    <h4 style={{ margin: 0, textAlign: "left" }}>User</h4>
                    <p style={{ textAlign: "left" }}>{comment.comment} </p>
                    <p style={{ textAlign: "left", color: "gray" }}>
                      posted {comment.date.split("G")[0]}
                      <Button
                        size="small"
                        color="primary"
                        type="button"
                        onClick={(e) => DeleteComment(comment._id)}
                      >
                        Delete
                      </Button>
                    </p>
                  </Grid>
                </Grid>
              </Paper>
            </div>
          );
        })}
    </div>
  );
};

export default Commentlist;
