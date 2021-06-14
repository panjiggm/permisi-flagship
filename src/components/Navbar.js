// Navbar goes here
import { useState, useContext } from "react";
import Link from "next/link";
import { MenuIcon, ShoppingCartIcon, HeartIcon } from "@heroicons/react/solid";
import Drawer from "./Drawer";
import { ProductContext } from "../context/ProductContext";

const Navbar = () => {
  const { shopingCart, likedItems } = useContext(ProductContext);
  const [drawer, setDrawer] = useState(false);

  const handleDrawer = () => setDrawer((prev) => !prev);

  return (
    <div className="bg-gray-50 h-20 fixed top-0 inset-x-0 z-10">
      <div className="max-w-5xl mx-auto px-8 bg-white py-6">
        <div className="flex items-center justify-between bg-gray-50 rounded-2xl py-2 px-5">
          {/* Humburger Mobie Buton */}
          <div className="md:hidden flex items-center">
            <button className="mobile-menu-button" onClick={handleDrawer}>
              <MenuIcon className="h-6 w-6 text-blue-500" />
            </button>
          </div>

          <div className="flex space-x-4">
            {/* LOGO */}
            <div>
              <Link href="/">
                <a className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                  <svg
                    className="h-6 w-6 mr-1 text-blue-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                  <span className="font-bold">Logo</span>
                </a>
              </Link>
            </div>
          </div>
          {/* Secondary Nav */}

          <input
            type="text"
            placeholder="Search..."
            className="input-search hidden md:block w-6/12"
          />

          {/* Primary Nav */}
          <div className="flex space-x-4">
            <div className="hidden md:flex items-center space-x-1">
              <Link href="/product">
                <a className="txt-nav">Shop</a>
              </Link>
              <a href="#" className="txt-nav">
                Packages
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <div>
                <button className="btn-icon-like">
                  <HeartIcon className="h-5 w-5 text-red-500 hover:text-red-400" />
                </button>
                {likedItems.length > 0 && (
                  <span className="px-1 rounded-full bg-red-600 text-white text-xs relative overflow-visible right-2 bottom-4">
                    {likedItems.length}
                  </span>
                )}
              </div>
              <Link href="/my-cart">
                <a>
                  <button className="btn-icon-cart">
                    <ShoppingCartIcon className="h-5 w-5 text-blue-500 hover:text-blue-400" />
                  </button>
                  {shopingCart.length > 0 && (
                    <span className="px-1 rounded-full bg-red-600 text-white text-xs relative overflow-visible right-2 bottom-4">
                      {shopingCart.length}
                    </span>
                  )}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Drawer drawer={drawer} onDrawer={handleDrawer} />
    </div>
  );
};

export default Navbar;
