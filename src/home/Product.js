import { useContext } from "react";
import Link from "next/link";
import { PlusIcon } from "@heroicons/react/solid";
import { ProductContext } from "../context/ProductContext";

const Product = ({ item }) => {
  const { onAddToCart } = useContext(ProductContext);

  return (
    <div className="w-1/2 md:w-4/12 lg:w-1/4 px-1 sm:px-2 mb-5">
      <div className="m-h-40 p-1 sm:p-2 bg-white rounded-lg shadow-xl transform hover:translate-y-2 hover:shadow-xl transition duration-300">
        {/* Image */}
        <figure className="mb-1 sm:mb-2">
          <img
            src={item.fields.images}
            className="h-44 sm:h-56 w-full ml-auto mr-auto rounded-lg"
          />
        </figure>
        <div className="rounded-lg p-3 sm:p-4 bg-gray-600 flex flex-col">
          <div>
            <Link
              href="/product/[slug]"
              as={`/product/${item.id}/${item.fields.slug}`}>
              <a>
                <h5 className="text-white sm:text-lg font-semibold leading-none truncate">
                  {item.fields.name}
                </h5>
              </a>
            </Link>
            <span className="text-xs text-gray-400 leading-none hidden sm:block">
              And then there was Pro.
            </span>
          </div>
          <div className="flex items-center mt-1">
            <div className="text-md sm:text-lg text-white font-light">
              Rp{item.fields.price}
            </div>
            <button className="btn-add-cart" onClick={() => onAddToCart(item)}>
              <PlusIcon className="h-5 sm:h-6 stroke-current m-auto" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
