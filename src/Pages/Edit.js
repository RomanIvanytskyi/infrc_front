import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";
import { useFormik } from "formik";
import { editProduct, getPage } from "../api/api";
import "./modal.css"
const ProductEdit = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getPage(props.id).then((res) => {
      setData(res.data);
      formik.setValues({
        imageUrl: res.data.image,
        name: res.data.name,
        count: res.data.count,
        width: res.data.width,
        height: res.data.height,
        weight: res.data.weight,
      });
      console.log(res.data);
    });
    //eslint-disable-next-line
  }, []);

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
      editProduct({ ...values, id: props.id });
      formik.resetForm();
      props.close();
    },
  });

  return (
    <Form class="body" onSubmit={formik.handleSubmit}>
      <Container class="modal-btn">
        <Form onSubmit={formik.handleSubmit}>
          <FormGroup>
            <Label for="name">Name of Product</Label>
            <Input
              onChange={formik.handleChange}
              value={formik.values.name}
              defaultValue={data.name}
              type="textarea"
              name="name"
              id="name"
              placeholder="Product name"
            />
          </FormGroup>
          <FormGroup>
            <Label  for="count"> <b class="p" >count</b></Label>
            <Input
              onChange={formik.handleChange}
              value={formik.values.count}
              defaultValue={data.count}
              type="number"
              name="count"
              id="count"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="size">Width</Label>
            <Input
              onChange={formik.handleChange}
              value={formik.values.width}
              defaultValue={data.width}
              type="number"
              name="width"
              id="width"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="size">Height</Label>
            <Input
              onChange={formik.handleChange}
              value={formik.values.height}
              defaultValue={data.height}
              type="number"
              name="height"
              id="height"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="Weight">Weigth</Label>
            <Input
              onChange={formik.handleChange}
              defaultValue={data.weight}
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
              defaultValue={data.imageUrl}
              value={formik.values.imageUrl}
              type="link"
              name="imageUrl"
              id="imageUrl"
            />
          </FormGroup>
        </Form>
      </Container>

      <Button type="submit">Submit</Button>
      <Button
        type="button"
        onClick={() => {
          props.close();
        }}
      >
        Close
      </Button>
    </Form>
  );
};

export default ProductEdit;
