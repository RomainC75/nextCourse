import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { promises as fs } from 'fs'
import path from 'path'
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  console.log(props)
  const {products} = props
  return (
    <u>
     {products.map(product=><Link href={`/${product.id}`} ><li key={product.id}>{product.title}</li></Link>)}
    </u>
  );
}

// only in server side
// fetch data before sending executing the Home component
export async function getStaticProps() {
  // cwd => root
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json')
  const jsonData = await fs.readFile(filePath)
  const data = JSON.parse(jsonData)

  if(!data){
    return{
      redirect: '/no-data'
    }
  }

  if(data.products.length===0){
    return {notFound:true}
  }

  return {
    props: {
      products: data.products
    },
    revalidate: 10,
  };
}
