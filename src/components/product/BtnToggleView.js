import { ViewListIcon, ViewGridIcon } from "@heroicons/react/solid";
import React from "react";

const BtnToggleView = ({ toggle, onView, origin }) => {
  return (
    <button
      className={`focus:outline-none border border-bluegray-200 rounded-lg p-1.5 cursor-pointer hover:bg-bluegray-200 ${
        toggle === origin ? "bg-teal-600" : "bg-white"
      }`}
      onClick={() => onView(origin)}>
      {origin === "list" && (
        <ViewListIcon
          className={`h-6 w-6 ${
            toggle === origin ? "text-white" : "text-teal-600"
          }`}
        />
      )}
      {origin === "grid" && (
        <ViewGridIcon
          className={`h-6 w-6 ${
            toggle === origin ? "text-white" : "text-teal-600"
          }`}
        />
      )}
    </button>
  );
};

export default BtnToggleView;
