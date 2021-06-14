const ProductType = ({ types, type, onType }) => {
  return (
    <div className="mt-4">
      <p className="font-roboto text-gray-400 text-sm">Type :</p>
      <div className="mt-1 flex">
        {types.map((item, i) => (
          <div
            key={i}
            className={`${
              type === item ? "bg-red-400" : "bg-red-200"
            } py-1 px-2 rounded mr-1 cursor-pointer`}>
            <label
              htmlFor={item}
              className={`text-sm font-roboto text-red-600 cursor-pointer`}>
              {item}
            </label>
            <input
              type="radio"
              id={item}
              value={type}
              name="type"
              onChange={() => onType(item)}
              className="hidden"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductType;
