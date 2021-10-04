import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useFormik } from "formik";
import { newProduct } from "../api/api";
import Container from "@material-ui/core/Container";

const NewProduct = (props) => {
  const formik = useFormik({
    initialValues: {
      image: " ",
      name: " ",
      count: " ",
      width: " ",
      height: " ",
      weight: " ",
    },
    onSubmit: (values) => {
      newProduct(values);
      console.log(values);
      formik.resetForm();
    },
  });
  return (
    <Container fixed>
      <Form onSubmit={formik.handleSubmit}>
        <FormGroup>
          <Label for="name">Name of Product</Label>
          <Input
            onChange={formik.handleChange}
            value={formik.values.name}
            type="textarea"
            name="name"
            id="name"
            placeholder="Product name"
          />
        </FormGroup>
        <FormGroup>
          <Label for="category">count</Label>
          <Input
            onChange={formik.handleChange}
            value={formik.values.count}
            type="number"
            name="count"
            id="count"
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label for="Weight">Width</Label>
          <Input
            onChange={formik.handleChange}
            value={formik.values.width}
            type="number"
            name="width"
            id="width"
          />
        </FormGroup>
        <FormGroup>
          <Label for="Weight">Height</Label>
          <Input
            onChange={formik.handleChange}
            value={formik.values.height}
            type="number"
            name="height"
            id="height"
          />
        </FormGroup>
        <FormGroup>
          <Label for="Weight">Weigth</Label>
          <Input
            onChange={formik.handleChange}
            value={formik.values.weight}
            type="number"
            name="weight"
            id="weight"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">Photo link</Label>
          <Input
            onChange={formik.handleChange}
            value={formik.values.image}
            type="link"
            name="image"
            id="image"
          />
        </FormGroup>
        <Button>Submit</Button>
        <Button
          type="button"
          onClick={() => {
            props.close();
          }}
        >
          Close
        </Button>
      </Form>
    </Container>
  );
};

export default NewProduct;
