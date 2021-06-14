import { Fragment, useContext } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

import { ProductContext } from "../../context/ProductContext";

const SelectProvince = ({ selectedProvince, setSelectedProvince }) => {
  const { provinceList } = useContext(ProductContext);

  return (
    <Listbox value={selectedProvince} onChange={setSelectedProvince}>
      <Listbox.Label className="label-billing">Province</Listbox.Label>
      <div className="relative mt-1">
        <Listbox.Button className="input-billing1">
          <span className="block truncate h-5">
            {selectedProvince.province}
          </span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <SelectorIcon
              className="w-5 h-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10">
            {provinceList.length > 0 &&
              provinceList.map((item, i) => (
                <Listbox.Option
                  key={i}
                  className={({ active }) =>
                    `${active ? "text-amber-900 bg-amber-100" : "text-gray-900"}
                        cursor-default select-none relative py-2 pl-10 pr-4`
                  }
                  value={item}>
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`${
                          selected ? "font-medium" : "font-normal"
                        } block truncate`}>
                        {item.province}
                      </span>
                      {selected ? (
                        <span
                          className={`${
                            active ? "text-teal-600" : "text-teal-400"
                          }
                              absolute inset-y-0 left-0 flex items-center pl-3`}>
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default SelectProvince;
