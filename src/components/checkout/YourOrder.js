import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import ListItemOrder from "./ListItemOrder";

const YourOrder = () => {
  const { shopingCart } = useContext(ProductContext);

  const totalPrice =
    shopingCart.length > 0 &&
    shopingCart.reduce((acc, item) => {
      return acc + item.fields.totalPrice;
    }, 0);

  return (
    <div className="w-full p-4 bg-white border border-gray-300 rounded-md">
      <h3 className="font-roboto text-gray-700 font-medium mb-2">PRODUCT</h3>
      <hr />

      {/* =================== List Order Item =================== */}
      <div className="mt-4">
        {shopingCart.length > 0 &&
          shopingCart.map((item, i) => <ListItemOrder key={i} item={item} />)}
      </div>

      {/* =================== SUBTOTAL =================== */}
      <div className="flex justify-between mb-2">
        <p className="font-roboto font-medium text-bluegray-600 text-sm">
          SUBTOTAL
        </p>

        <p className="text-sm font-roboto font-medium text-gray-800 leading-6">
          Rp{new Intl.NumberFormat("id-ID").format(totalPrice)}
        </p>
      </div>

      <hr />

      {/* =================== Deivery Cost =================== */}
      <div className="flex justify-between my-2">
        <p className="font-roboto font-medium text-bluegray-600 text-sm">
          Shipping
        </p>

        <p className="text-sm font-roboto font-medium text-gray-800 leading-6">
          FREE
        </p>
      </div>

      <hr />

      {/* =================== TOTAL =================== */}
      <div className="flex justify-between my-4">
        <p className="font-roboto font-medium text-bluegray-600">TOTAL</p>

        <p className="font-roboto font-medium text-gray-800 leading-6">
          Rp{new Intl.NumberFormat("id-ID").format(totalPrice)}
        </p>
      </div>

      <div className="mt-6">
        <button className="w-full bg-purple-600 py-2 text-white font-semibold font-roboto text-lg rounded-lg focus:outline-none hover:bg-purple-500">
          Pay
        </button>
      </div>
    </div>
  );
};

export default YourOrder;
