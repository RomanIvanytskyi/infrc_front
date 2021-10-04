import axios from "axios";

export const getProducts = () => {
  return axios.get("http://localhost:3000/product/getProducts");
};

export const newProduct = (data) => {
  console.log(data);
  return axios.post("http://localhost:3000/product/newProduct", {
    image: data.image,
    name: data.name,
    count: data.count,
    width: data.width,
    height: data.height,
    weight: data.weight,
  });
};

export const addComment = (data, productID) => {
  return axios.post("http://localhost:3000/product/newComment", {
    comment: data.comment,
    productID,
  });
};

export const deleteComments = (productID) => {
  return axios.post("http://localhost:3000/product/deleteComments", {
    productID,
  });
};

export const deleteComment = (id) => {
  console.log(id);
  return axios.post("http://localhost:3000/product/deleteComment", {
    id,
  });
};

export const getComments = (productID) => {
  return axios.post("http://localhost:3000/product/getComments", { productID });
};

export const Delete = (data) => {
  console.log(data);
  return axios.post("http://localhost:3000/product/deleteProduct", {
    id: data,
  });
};

export const editProduct = (data) => {
  console.log("data -> ", data);
  return axios.post("http://localhost:3000/product/editProduct", {
    image: data.imageUrl,
    name: data.name,
    count: data.count,
    width: data.width,
    height: data.height,
    weight: data.weight,
    id: data.id,
  });
};

export const getPage = (id) => {
  return axios.post("http://localhost:3000/product/getProduct", { id });
};
