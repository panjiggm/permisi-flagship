import { useState, useContext, useEffect } from "react";
import SelectProvince from "./SelectProvince";
import { ProductContext } from "../../context/ProductContext";
import SelectCity from "./SelectCity";
import SelectCourier from "./SelectCourier";

const BillingDetails = () => {
  const { onGetProvince, onGetCity } = useContext(ProductContext);

  const [billing, setBilling] = useState({
    firstName: "",
    lastName: "",
    email: "",
    kecamatan: "",
    address: "",
    phone: "",
    zipCode: "",
  });
  const [selectedProvince, setSelectedProvince] = useState({
    province: "",
    province_id: "",
  });
  const [selectedCity, setSelectedCity] = useState({
    city_id: "",
    province_id: "",
    province: "",
    type: "",
    city_name: "",
    postal_code: "",
  });
  const [selectedCourier, setSelectedCourier] = useState({
    id: 0,
    name: "",
    code: "",
    logo: "",
  });

  useEffect(() => {
    onGetProvince();
    onGetCity(selectedProvince.province_id);
    setSelectedCity({
      city_id: "",
      province_id: "",
      province: "",
      type: "",
      city_name: "",
      postal_code: "",
    });
  }, [selectedProvince]);

  const handeChangeBilling = (name, value) => {
    setBilling({
      ...billing,
      [name]: value,
    });
  };

  return (
    <div className="">
      <div className="flex flex-wrap -mx-3 mb-3">
        <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
          <label className="label-billing" htmlFor="grid-first-name">
            First Name
          </label>
          <input
            className="input-billing1"
            name="firstName"
            id="grid-first-name"
            type="text"
            placeholder="John"
            value={billing.firstName}
            onChange={(e) => handeChangeBilling(e.target.name, e.target.value)}
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="label-billing" htmlFor="grid-last-name">
            Last Name
          </label>
          <input
            className="input-billing1"
            name="lastName"
            id="grid-last-name"
            type="text"
            placeholder="Doe"
            value={billing.lastName}
            onChange={(e) => handeChangeBilling(e.target.name, e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-3">
        <div className="w-full px-3">
          <label className="label-billing" htmlFor="grid-password">
            Email Address
          </label>
          <input
            className="input-billing1"
            name="email"
            id="grid-email"
            type="email"
            placeholder="********@*****.**"
            value={billing.email}
            onChange={(e) => handeChangeBilling(e.target.name, e.target.value)}
          />
        </div>
      </div>

      <div className="mb-3">
        <SelectProvince
          selectedProvince={selectedProvince}
          setSelectedProvince={setSelectedProvince}
        />
      </div>

      <div className="mb-3">
        <SelectCity
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
        />
      </div>

      <div className="flex flex-wrap -mx-3 mb-3">
        <div className="w-full px-3">
          <label className="label-billing" htmlFor="grid-kecamatan">
            Kecamatan
          </label>
          <input
            className="input-billing1"
            name="kecamatan"
            id="grid-kecamatan"
            type="text"
            value={billing.kecamatan}
            onChange={(e) => handeChangeBilling(e.target.name, e.target.value)}
          />
        </div>
      </div>

      <div className="w-full my-3">
        <label
          className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="grid-password">
          Address
        </label>
        <textarea
          rows="3"
          className="input-billing1"
          name="address"
          value={billing.address}
          onChange={(e) =>
            handeChangeBilling(e.target.name, e.target.value)
          }></textarea>
      </div>

      <div className="mb-3">
        <SelectCourier
          selectedCourier={selectedCourier}
          setSelectedCourier={setSelectedCourier}
        />
      </div>

      <div className="flex flex-wrap -mx-3 mb-3">
        <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
          <label className="label-billing" htmlFor="grid-phone">
            Phone Number
          </label>
          <input
            className="input-billing1"
            name="phone"
            id="grid-phone"
            type="text"
            placeholder="08..."
            value={billing.phone}
            onChange={(e) => handeChangeBilling(e.target.name, e.target.value)}
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="label-billing" htmlFor="grid-postal-code">
            Zip Code
          </label>
          <input
            className="input-billing1"
            name="zipCode"
            id="grid-postal-code"
            type="text"
            value={billing.zipCode}
            onChange={(e) => handeChangeBilling(e.target.name, e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default BillingDetails;
