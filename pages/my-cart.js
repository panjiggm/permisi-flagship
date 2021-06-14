import { useContext, useEffect, useState } from "react";
import Layout from "../src/components/Layout";
import ListItemCart from "../src/components/my-cart/ListItemCart";
import ListTitileCart from "../src/components/my-cart/ListTitileCart";
import OrderSummary from "../src/components/my-cart/OrderSummary";
import { ProductContext } from "../src/context/ProductContext";

const MycCrt = () => {
  const { shopingCart, triggerCart } = useContext(ProductContext);

  const [shopingList, setShopingList] = useState([]);
  const [totalQty, setTotalQty] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setShopingList(shopingCart);

    const reducedQty =
      shopingList.length > 0 &&
      shopingList.reduce((acc, item) => {
        return acc + item.fields.quantity;
      }, 0);

    setTotalQty(reducedQty);

    const reducedPrice =
      shopingList.length > 0 &&
      shopingList.reduce((acc, item) => {
        return acc + item.fields.totalPrice;
      }, 0);

    setTotalPrice(reducedPrice);
  }, [shopingList, triggerCart]);

  return (
    <Layout>
      <div className="pt-14 pb-6 px-8 bg-white">
        <h4 className="text-xl font-extrabold font-roboto text-gray-600">
          My Cart ({shopingCart.length})
        </h4>
        <p className="mt-4 text-sm text-bluegray-400">Home / My cart</p>
      </div>
      <div className="mt-10 mb-10 px-4 lg:px-0 md:grid md:grid-cols-4 gap-0 md:gap-5">
        {/* ================================================
            Cart List Section // pr-2
            ================================================ */}
        <section className="md:col-span-3">
          <ListTitileCart />

          <div className="mt-4">
            {shopingList.length > 0 ? (
              shopingList.map((item) => {
                return <ListItemCart key={item.id} item={item} />;
              })
            ) : (
              <p className="font-roboto font-medium text-gray-500">
                Product Not Found
              </p>
            )}
          </div>
        </section>

        {/* ================================================
            Cart Summary Section
            ================================================ */}
        <section className="">
          <OrderSummary totalQty={totalQty} totalPrice={totalPrice} />
        </section>
      </div>
    </Layout>
  );
};

export default MycCrt;
