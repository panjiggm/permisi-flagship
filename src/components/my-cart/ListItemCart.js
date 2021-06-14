import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/ProductContext";
import ProductCounter from "../product/ProductCounter";
import { TrashIcon } from "@heroicons/react/outline";

const ListItemCart = ({ item }) => {
  const { setTriggerCart, onRemoveCart, onLikedItems } =
    useContext(ProductContext);

  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState(item.fields.price);

  /* ================================================
            Side Effect
    ================================================ */
  useEffect(() => {
    item.fields.totalPrice = item.fields.price * qty;
    item.fields.quantity = qty;
    setPrice(item.fields.price * qty);
    setTriggerCart(Math.floor(Math.random() * 1000 + 1));
  }, [qty]);

  /* ================================================
            Methods / Func
    ================================================ */
  const increment = () => setQty((prv) => prv + 1);
  const decrement = () => setQty((prv) => prv - 1);
  const handleQty = (val) => setQty(Number(val));
  const handleRemoveCart = (id) => {
    onRemoveCart(id);
    setTriggerCart(Math.floor(Math.random() * 1000 + 1));
  };
  const handleMoveToLiked = (data) => {
    onRemoveCart(data.id);
    onLikedItems(data);
    setTriggerCart(Math.floor(Math.random() * 1000 + 1));
  };

  return (
    <div
      key={item.id}
      className="flex flex-col bg-white p-4 pb-1 mb-4 rounded-lg shadow-lg">
      <section className="grid md:grid-cols-5">
        <div className="md:col-span-3 flex flex-col sm:flex-row">
          <img
            src={item.fields.images}
            className="self-center w-36 h-36 md:w-20 md:h-full rounded"
          />
          <div className="mt-6 text-center sm:text-left sm:ml-4 sm:mt-0">
            <p className="text-lg text-bluegray-500 font-roboto font-medium leading-5">
              {item.fields.name}
            </p>

            <h3 className="mt-1 text-lg font-roboto">
              <span className="text-lg">Rp</span>
              {new Intl.NumberFormat("id-ID").format(item.fields.price)}
            </h3>
          </div>
        </div>

        <div className="flex flex-col mt-4 md:mt-0 sm:flex-row items-center justify-start sm:justify-center">
          <ProductCounter
            decrement={decrement}
            increment={increment}
            onQty={handleQty}
            qty={qty}
          />
        </div>
        <div className="flex flex-col text-center mt-6 md:mt-0 sm:flex-row justify-start sm:justify-center sm:items-center">
          <h3 className="text-md lg:text-xl font-roboto text-red-500 font-semibold">
            <span className="text-lg md:text-md lg:text-lg">Rp</span>
            {Intl.NumberFormat("id-ID").format(price)}
          </h3>
        </div>
      </section>

      <section className="mt-4">
        <div>
          <hr />
        </div>

        <div className="pt-1 flex justify-end items-center">
          <button
            className="mr-2 py-1 px-2 text-bluegray-600 text-xs font-roboto rounded focus:outline-none hover:text-bluegray-400"
            onClick={() => handleMoveToLiked(item)}>
            Move to Wishlist
          </button>
          <div className="border border-gray-300 h-5" />
          <button
            className="ml-4 focus:outline-none"
            onClick={() => handleRemoveCart(item.id)}>
            <TrashIcon className="h-5 w-5 text-bluegray-600 hover:text-bluegray-400" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default ListItemCart;
