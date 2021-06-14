import { useEffect, useContext } from "react";
import Layout from "../../src/components/Layout";
import { minifyRecords, table } from "../api/utils/Airtable";
import { ProductContext } from "../../src/context/ProductContext";
import ProductFilter from "../../src/components/product/ProductFilter";

const ProductIndex = ({ initialProducts }) => {
  const { products, setProducts } = useContext(ProductContext);

  useEffect(() => {
    setProducts(initialProducts);
  }, []);

  return (
    <Layout>
      <div className="mt-6 container ml-auto mr-auto flex flex-wrap items-start px-2 md:px-0">
        <div className="mt-10">
          <p>home</p>
        </div>
        <ProductFilter products={products && products} />
      </div>
    </Layout>
  );
};

export default ProductIndex;

export const getStaticProps = async () => {
  const products = await table.select({}).firstPage();

  return {
    props: {
      initialProducts: minifyRecords(products),
    },
  };
};
