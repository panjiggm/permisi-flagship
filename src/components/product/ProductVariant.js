const ProductVariant = ({ onVaiant, variants, variant }) => {
  return (
    <div className="mt-4">
      <p className="font-roboto text-gray-400 text-sm">Variant :</p>
      <div className="mt-1 flex">
        {variants.map((item, i) => (
          <div
            key={i}
            className={`${
              variant === item ? "bg-green-400" : "bg-green-200"
            } py-1 px-2 rounded mr-1 cursor-pointer`}>
            <label
              htmlFor={item}
              className={`text-sm font-roboto text-green-600 cursor-pointer`}>
              {item}
            </label>
            <input
              type="radio"
              id={item}
              value={variant}
              name="type"
              onChange={() => onVaiant(item)}
              className="hidden"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductVariant;
