const ListItemOrder = ({ item }) => {
  return (
    <div>
      <div className="flex justify-between">
        <p className="mb-5 text-sm font-roboto text-bluegray-600 w-48 leading-4">
          {item.fields.name} -{" "}
          <span className="text-red-600">x{item.fields.quantity}</span>
        </p>

        <p className="text-sm font-roboto text-gray-800 leading-6">
          Rp{new Intl.NumberFormat("id-ID").format(item.fields.totalPrice)}
        </p>
      </div>
    </div>
  );
};

export default ListItemOrder;
