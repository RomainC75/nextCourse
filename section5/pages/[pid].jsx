import React from "react";
import { promises as fs } from "fs";
import path from "path";

const ProductDetailPage = ({ product }) => {
  if (!product) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <h1>{product.title}</h1>
      <p>{product.descritption}</p>
    </>
  );
};

async function getData() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  return JSON.parse(jsonData);
}

export async function getStaticProps(context) {
  const { params } = context;
  const paramsId = params.pid;

  const data = await getData();
  const foundProduct = data.products.find((product) => product.id === paramsId);
  console.log("found : ", foundProduct);
  if (!foundProduct) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      product: foundProduct,
    },
  };
}

export async function getStaticPaths() {
  const data = await getData();
  const ids = data.products.map((product) => product.id);
  const pathsWithParams = ids.map((id) => ({ params: { pid: id } }));

  return {
    paths: pathsWithParams,
    fallback: true,
  };
}

export default ProductDetailPage;
