import { useEffect, useContext } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

import Layout from "../src/components/Layout";
import Hero from "../src/home/Hero";
import Product from "../src/home/Product";
import Accordion from "../src/home/Accordion";

import { brands, accordions, categories } from "./product/dummyData";
import { minifyRecords, table } from "./api/utils/Airtable";
import { ProductContext } from "../src/context/ProductContext";

export default function Home({ initialProducts }) {
  const { products, setProducts } = useContext(ProductContext);

  useEffect(() => {
    setProducts(initialProducts);
  }, []);

  return (
    <Layout>
      <Hero />
      <div className="flex justify-between items-center pt-10 px-8 bg-white">
        <h4 className="text-xl font-bold text-gray-600">Category</h4>
        <div className="flex space-x-2">
          <button className="btn-chevron">
            <ChevronLeftIcon className="txt-chevron" />
          </button>
          <button className="btn-chevron">
            <ChevronRightIcon className="txt-chevron" />
          </button>
        </div>
      </div>
      <div className="flex-1 px-8 bg-white rounded-br-xl rounded-bl-xl">
        {/* <ul className="mt-6 flex justify-between"> */}
        <ul className="py-8 grid grid-cols-4 gap-4 sm:grid-cols-8 md:gap-6">
          {categories.map((item) => (
            <li key={item.id} className="box-category">
              <div className="">{item.icon}</div>
              <p className="txt-categories">{item.title}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-between items-center pt-10 px-5 sm:px-4">
        <h4 className="text-xl font-bold text-gray-600">Popular Product</h4>
        <button className="text-gray-100 bg-gray-500 rounded-lg px-3 py-1 hover:bg-gray-700 font-semibold lowercase duration-700">
          view all
        </button>
      </div>
      {/* <div className="mt-6 grid grid-cols-4 gap-6"> */}
      <div className="mt-6 container ml-auto mr-auto flex flex-wrap items-start px-2 md:px-0">
        {products &&
          products.map((item, i) => {
            return <Product key={i} item={item} />;
          })}
      </div>
      <div className="mt-16 px-12 bg-white rounded-tl-2xl rounded-tr-2xl">
        <div className="flex justify-center items-center py-10">
          <h1 className="text-2xl text-gray-700">Partner</h1>
        </div>
        <div className="flex flex-wrap justify-center items-center space-x-6 space-y-6 md:space-y-0 py-10">
          {brands.map((brand) => (
            <img key={brand.id} src={brand.url} className="h-10" />
          ))}
        </div>
      </div>
      <div className="py-14 px-12 bg-white rounded-tl-2xl rounded-tr-2xl">
        <div className="flex justify-center items-center py-10">
          <h1 className="text-2xl text-gray-700">FAQ</h1>
        </div>
        <div className="pt-4 flex justify-center items-center">
          <Accordion questionsAnswers={accordions} />
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const products = await table.select({}).firstPage();

  return {
    props: {
      initialProducts: minifyRecords(products),
    },
  };
};
