import { createContext, useState } from "react";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  // ~~~~~~~ PRODUCT STATE ~~~~~~~
  const [products, setProducts] = useState([]);
  const [shopingCart, setShopingCart] = useState([]);
  const [likedItems, setLikedItems] = useState([]);
  const [triggerCart, setTriggerCart] = useState(null);

  // ~~~~~~~ SHIPMENT STATE ~~~~~~~
  const [provinceList, setProvinceList] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [costList, setCostList] = useState([]);

  // ========== Handle Add To Cart ==========
  const onAddToCart = (data) => {
    setShopingCart((prv) => {
      const isExsist = prv.length > 0 && prv.some((el) => el.id === data.id);
      if (!isExsist) {
        return prv.concat(data);
      }

      return prv;
    });
  };

  // ========== Handle Liked Items ==========
  const onLikedItems = (data) => {
    setLikedItems((prv) => {
      const isExsist = prv.some((el) => el.id === data.id);
      if (!isExsist) {
        return prv.concat(data);
      }

      return prv;
    });
  };

  // ========== Handle Romove Item From Cart ==========
  const onRemoveCart = (id) => {
    setShopingCart((prv) => prv.filter((el) => el.id !== id));
  };

  // ========== |GET| All Province ==========
  const onGetProvince = async () => {
    try {
      const res = await fetch("/api/getProvince");
      const dataProvince = await res.json();

      setProvinceList(dataProvince.results);
    } catch (error) {
      console.log(error);
    }
  };

  // ========== |GET| All City Based On Province ==========
  const onGetCity = async (id) => {
    try {
      const res = await fetch(`/api/getCity?id=${id}`);
      const dataCity = await res.json();

      setCityList(dataCity.results);
    } catch (error) {
      console.log(error);
    }
  };

  // ========== |GET| All City Based On Province ==========
  const onGetCost = async (cost) => {
    try {
      const config = {
        method: "POST",
        body: cost,
      };

      const res = await fetch(`/api/getCost`, config);
      const dataCost = await res.json();

      setCostList(dataCost.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        shopingCart,
        likedItems,
        onAddToCart,
        onLikedItems,
        onRemoveCart,
        triggerCart,
        setTriggerCart,
        onGetProvince,
        onGetCity,
        onGetCost,
        provinceList,
        setProvinceList,
        cityList,
        setCityList,
        costList,
        setCostList,
      }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
