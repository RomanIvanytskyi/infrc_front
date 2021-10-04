import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { addComment } from "../api/api";
import Container from "@material-ui/core/Container";

const Comment = (props) => {
  const [productID, setID] = useState("");

  useEffect(() => {
    setID(props.id);
  }, [props]);

  const formik = useFormik({
    initialValues: {
      comment: " ",
    },
    onSubmit: (values) => {
      if (values.comment.length < 300) {
        addComment(values, productID);
        formik.resetForm();
      }else{
        alert("Гори в пеклі")
        formik.resetForm();
      }
    },
  });
  return (
    <Container fixed>
      <Form onSubmit={formik.handleSubmit}>
        <FormGroup>
          <Label for="Comment">Leave a comment</Label>
          <Input
            onChange={formik.handleChange}
            value={formik.values.comment}
            type="textarea"
            name="comment"
            id="comment"
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </Container>
  );
};

export default Comment;
