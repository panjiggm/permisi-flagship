import Link from "next/link";

const OrderSummary = ({ totalQty, totalPrice }) => {
  const delivery = 10000;

  return (
    <div className="w-full p-4 bg-white border border-gray-300 rounded-md">
      <h3 className="font-roboto text-lg text-gray-700 font-medium">
        Order Summary
      </h3>

      {/* Details */}
      <div className="mt-3 flex flex-col">
        {/* Info */}
        <div className=" flex justify-between">
          <p className="text-sm font-roboto font-light text-gray-800 leading-6">
            Subtotal <span className="">({totalQty})</span>
          </p>

          <p className="text-sm font-roboto font-normal text-gray-800 leading-6">
            Rp{new Intl.NumberFormat("id-ID").format(totalPrice)}
          </p>
        </div>

        {/* Price */}
        <div className=" flex justify-between">
          <p className="text-sm font-roboto font-light text-gray-800 leading-6">
            Delivery
          </p>
          <p className="text-sm font-roboto font-normal text-gray-800 leading-6">
            Rp{new Intl.NumberFormat("id-ID").format(delivery)}
          </p>
        </div>

        {/* Price */}
        <div className=" flex justify-between">
          <p className="text-sm font-roboto font-light text-gray-800 leading-6">
            Discount (0%)
          </p>
          <p className="text-sm font-roboto font-normal text-gray-800 leading-6">
            Rp0
          </p>
        </div>
      </div>

      <div className="mt-4 mb-2">
        <hr />
      </div>

      <div className="mt-3 flex justify-between">
        {/* Info */}
        <div className="text-left">
          <p className="font-semibold font-roboto text-gray-600">Total</p>
        </div>

        {/* Price */}
        <div className="text-right">
          <p className="font-semibold font-roboto text-gray-600">
            Rp{new Intl.NumberFormat("id-ID").format(totalPrice + delivery)}
          </p>
        </div>
      </div>

      <div className="mt-4 mb-2">
        <hr />
      </div>

      <div className="mt-6">
        <Link href="/checkout">
          <button className="w-full bg-purple-600 py-2 text-white font-semibold font-roboto text-lg rounded-lg focus:outline-none hover:bg-purple-500">
            Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OrderSummary;
