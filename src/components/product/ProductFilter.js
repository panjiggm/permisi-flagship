import { useState } from "react";
import ProductGrid from "./ProductGrid";
import ProductList from "./ProductList";
import BtnToggleView from "./BtnToggleView";

const ProductFilter = ({ products }) => {
  const [view, setView] = useState("grid");

  return (
    <div className="lg:grid lg:grid-cols-4 lg:gap-2">
      {/* ================================================
            Filter Section (Category, Price, etc)
            ================================================ */}
      <section className="hidden lg:block mt-4 container pr-2">
        <div className="w-full p-2 bg-white border border-gray-300 rounded-md">
          <h3 className="font-roboto text-lg text-gray-700 font-medium">
            Categories
          </h3>
        </div>
      </section>

      {/* ================================================
            Product List  (List View & Grid View)
            ================================================ */}
      <section className="mt-4 lg:col-span-3">
        <div className="px-2 flex justify-end sm:justify-between">
          <button className="hidden sm:block bg-bluegray-200 hover:bg-bluegray-100 text-bluegray-600 py-1 px-3 text-sm rounded font-roboto focus:outline-none">
            Filter by price
          </button>

          <div className="flex gap-2">
            <BtnToggleView origin="list" toggle={view} onView={setView} />
            <BtnToggleView origin="grid" toggle={view} onView={setView} />
          </div>
        </div>
        {view === "grid" ? (
          <div className="mt-4 container flex flex-wrap ml-auto mr-auto items-start px-2 md:px-0">
            {products.map((item) => (
              <ProductGrid key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="mt-4 px-2 md:px-0">
            {products.map((item) => (
              <ProductList key={item.id} item={item} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default ProductFilter;
