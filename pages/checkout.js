import BillingDetails from "../src/components/checkout/BillingDetails";
import YourOrder from "../src/components/checkout/YourOrder";
import Layout from "../src/components/Layout";

const Checkout = () => {
  return (
    <Layout>
      <div className="pt-14 pb-6 px-8 bg-white">
        <h4 className="text-xl font-extrabold font-roboto text-gray-600">
          Checkout
        </h4>
        <p className="mt-4 text-sm text-bluegray-400">
          Home / product / checkout
        </p>
      </div>

      <div className="mt-10 mb-10 px-4 lg:px-0 md:grid md:grid-cols-3 gap-0 md:gap-5">
        {/* ================================================
                Form Section
            ================================================ */}
        <section className="md:col-span-2">
          <div className=" bg-gray-200 p-2 rounded mb-4">
            <p className="font-roboto text-bluegray-500 ml-2">
              Billing Details
            </p>
          </div>

          <BillingDetails />
        </section>

        {/* ================================================
            Your Order
        ================================================ */}
        <section className="">
          <div className=" bg-gray-200 p-2 rounded mb-4">
            <p className="font-roboto text-bluegray-500 ml-2">Your Order</p>
          </div>

          <YourOrder />
        </section>
      </div>
    </Layout>
  );
};

export default Checkout;
