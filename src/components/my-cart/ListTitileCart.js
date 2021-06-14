const ListTitileCart = () => {
  return (
    <div className="hidden sm:grid sm:grid-cols-5 bg-gray-200 p-2 rounded">
      <p className="font-roboto text-bluegray-500 text-center col-span-3 ">
        Product
      </p>
      <p className="font-roboto text-bluegray-500 text-center">Qty</p>
      <p className="font-roboto text-bluegray-500 text-center">Total price</p>
    </div>
  );
};

export default ListTitileCart;
