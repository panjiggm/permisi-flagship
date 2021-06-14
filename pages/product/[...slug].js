import { useEffect, useState } from "react";
import { table } from "../api/utils/Airtable";
import { HomeIcon } from "@heroicons/react/outline";
import Layout from "../../src/components/Layout";
import ImageGallery from "react-image-gallery";

import { images } from "./dummyData";
import ProductCounter from "../../src/components/product/ProductCounter";
import ProductType from "../../src/components/product/ProductType";
import ProductVariant from "../../src/components/product/ProductVariant";

const Product = ({ product }) => {
  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState(product.fields.price);
  const [type, setType] = useState("");
  const [variant, setVariant] = useState("");

  console.log("Product", product);

  useEffect(() => {
    setPrice(product.fields.price * qty);
  }, [qty]);

  const fields = product.fields;
  const types = fields?.type && fields?.type.split(","); // This is [], if not exist then undefined
  const variants = fields?.variant && fields?.variant.split(","); // This is [], if not exist then undefined

  const increment = () => setQty((prv) => prv + 1);
  const decrement = () => setQty((prv) => prv - 1);
  const handleQty = (val) => setQty(Number(val));
  const handleType = (val) => setType(val);
  const handleVariant = (val) => setVariant(val);

  return (
    <Layout>
      <div className="flex md:items-center pt-14 px-8 bg-white">
        {/* Breadcrumb */}
        <HomeIcon className="w-4 h-4 text-gray-400 mr-1" />
        <p className="text-gray-400 text-sm">
          {" "}
          / product / {product.fields.name}
        </p>
      </div>
      {/* Product */}
      <div className="flex flex-wrap pt-8 px-8 bg-white">
        {/* IMG Preview Product */}
        <div className="w-full md:w-1/2 px-1 sm:px-2 mb-5">
          <ImageGallery
            items={images}
            showBullets={false}
            showFullscreenButton={false}
            showPlayButton={false}
            showNav={false}
          />
        </div>
        {/* Details Product */}
        <div className="w-full md:w-1/2 px-1 sm:px-2 mb-5">
          <h1 className="text-gray-600 text-2xl leading-7 font-roboto font-bold capitalize">
            {product.fields.name}
          </h1>
          <h3 className="mt-1 text-3xl font-mono text-red-500 font-semibold">
            <span className="text-2xl">Rp</span>
            {Intl.NumberFormat("id-ID").format(price)}
          </h3>
          <div className="mt-4">
            <p className="font-roboto text-gray-400 text-sm">Quantity :</p>
            <ProductCounter
              decrement={decrement}
              increment={increment}
              onQty={handleQty}
              qty={qty}
            />
          </div>
          {/* Types Product */}
          {types !== undefined && (
            <ProductType types={types} type={type} onType={handleType} />
          )}
          {/* Variant Product */}
          {variants !== undefined && (
            <ProductVariant
              variants={variants}
              variant={variant}
              onVaiant={handleVariant}
            />
          )}
          {/* Send From */}
          <div className="mt-4 flex">
            <p className="font-roboto text-gray-400 text-sm">Send from :</p>
            <p className="font-roboto text-gray-500 text-sm ml-2">
              {product.fields.city}
            </p>
          </div>
          {/* Product Description */}
          <div className="mt-4">
            <p className="font-roboto text-gray-400 text-sm">Description :</p>
            <p className="font-roboto text-gray-500 text-sm mt-1">
              {product.fields.description}
            </p>
          </div>

          {/* Button Checkout & Cart */}
          <div className="mt-8 flex items-center gap-3">
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded font-roboto focus:outline-none">
              Add to cart
            </button>
            <button className="bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded font-roboto focus:outline-none">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Product;

export const getStaticPaths = async () => {
  const products = await table.select({}).firstPage();
  const paths = products.map((product) => {
    return {
      params: { slug: [product.id, product.fields.slug] },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const id = params.slug[0];
  const product = await table.find(id);
  const record = { id: product.id, fields: product.fields };

  return {
    props: {
      product: record,
    },
  };
};
