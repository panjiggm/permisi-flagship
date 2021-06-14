import { useContext } from "react";
import Link from "next/link";
import { PlusIcon, HeartIcon } from "@heroicons/react/solid";
import { ProductContext } from "../../context/ProductContext";

const ProductList = ({ item }) => {
  const { onAddToCart, onLikedItems } = useContext(ProductContext);

  return (
    <div className="w-full px-1 sm:px-2 mb-3 sm:mb-5">
      <div className="w-full flex flex-row p-2 sm:p-3 bg-white rounded-lg shadow-xl transform hover:translate-y-2 hover:shadow-xl transition duration-300">
        {/* Image */}
        <figure className="">
          <img
            src={item.fields.images}
            className="w-44 sm:w-56 h-full ml-auto mr-auto rounded-lg" // w-full
          />
        </figure>
        <div className="w-full pl-2 sm:pl-3 flex flex-col justify-between">
          <div>
            <Link
              href="/product/[slug]"
              as={`/product/${item.id}/${item.fields.slug}`}>
              <a>
                <h5 className="text-gray-500 text-md sm:text-xl font-roboto font-medium leading-5">
                  {item.fields.name}
                </h5>
              </a>
            </Link>
            <span className="text-xs text-gray-400 leading-none">
              And then there was Pro.
            </span>
          </div>
          <div className="rounded-lg p-2 bg-gray-600 flex justify-between items-center">
            <div className="text-md sm:text-lg text-white font-light">
              Rp{item.fields.price}
            </div>
            <div className="flex gap-2">
              <button
                className="btn-add-cart"
                onClick={() => onLikedItems(item)}>
                <HeartIcon className="h-5 sm:h-6 stroke-current m-auto" />
              </button>
              <button
                className="btn-add-cart"
                onClick={() => onAddToCart(item)}>
                <PlusIcon className="h-5 sm:h-6 stroke-current m-auto" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
