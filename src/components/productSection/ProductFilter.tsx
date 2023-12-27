import { useState } from "react";
import CheckBox, { TypeParamsCheckBox } from "../common/Checkbox";
import InputNumberCrease from "../common/InputNumberCrease";

const dataFilterGender: TypeParamsCheckBox[] = [
  {
    label: "Male",
    checked: true,
    classCheckBox: "checkbox-style mt-3",
    classLabel: "checkbox-label",
  },
  {
    label: "Female",
    checked: false,
    classCheckBox: "checkbox-style mt-3",
    classLabel: "checkbox-label",
  },
];

const dataFilterAge: TypeParamsCheckBox[] = [
  {
    label: "Adult",
    checked: true,
    classCheckBox: "checkbox-style mt-3",
    classLabel: "checkbox-label",
  },
  {
    label: "Children",
    checked: false,
    classCheckBox: "checkbox-style mt-3",
    classLabel: "checkbox-label",
  },
];

const dataFilterSize: TypeParamsCheckBox[] = [
  {
    label: "Small",
    checked: false,
    classCheckBox: "checkbox-style mt-3",
    classLabel: "checkbox-label",
  },
  {
    label: "Medium",
    checked: true,
    classCheckBox: "checkbox-style mt-3",
    classLabel: "checkbox-label",
  },
  {
    label: "Large",
    checked: false,
    classCheckBox: "checkbox-style mt-3",
    classLabel: "checkbox-label",
  },
];

export default function ProductFilter() {
  const listGender = dataFilterGender.map((item, index) => {
    return (
      <div className="flex items-center gap-2 mb-3" key={index}>
        <CheckBox {...item} />
      </div>
    );
  });
  const listAge = dataFilterAge.map((item, index) => {
    return (
      <div className="flex items-center gap-2 mb-3" key={index}>
        <CheckBox {...item} />
      </div>
    );
  });
  const listSize = dataFilterSize.map((item, index) => {
    return (
      <div className="flex items-center gap-2 mb-3" key={index}>
        <CheckBox {...item} />
      </div>
    );
  });
  const [toggleFilter, setToggleFilter] = useState<boolean>(false);
  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <h4 className="text-blue-1000 text-2xl font-bold">Filter</h4>
        {toggleFilter ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="3"
            className="w-6 h-6 stroke-blue-1000 lg:hidden block"
            onClick={() => setToggleFilter(false)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="3"
            className="w-6 h-6 stroke-blue-1000 lg:hidden block"
            onClick={() => setToggleFilter(true)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        )}
      </div>
      <div
        className={`lg:block ${
          !toggleFilter && "hidden"
        } lg:relative absolute z-10 lg:px-0 pb-4 px-4 bg-[#F6F6F6] left-0 right-0`}
      >
        <h4 className="text-base font-bold mb-4 ">Gender</h4>
        {listGender}
        <hr />
        <h4 className="text-base font-bold mb-4 mt-2 ">Age group</h4>
        {listAge}
        <hr />
        <h4 className="text-base font-bold mb-4 mt-2 ">Price</h4>
        <div className="grid xl:grid-cols-2 grid-cols-1 xl:gap-2 gap-4 mb-4">
          <div className="flex items-end">
            <p>Min</p>
            <div className="ml-2 xl:w-[60px] w-[100px] relative">
              <InputNumberCrease min={0} max={1000} defaultValue={10} />
              <hr className="border-dashed border-gray-700 w-[70%]" />
            </div>
          </div>
          <div className="flex items-end">
            <p>Max</p>
            <div className="ml-2 xl:w-[60px] w-[100px] relative">
              <InputNumberCrease min={0} max={1000} defaultValue={99.9} />
              <hr className="border-dashed border-gray-700 w-[70%]" />
            </div>
          </div>
        </div>
        <hr />
        <h4 className="text-base font-bold mb-4 mt-2 ">Size</h4>
        {listSize}
      </div>
    </>
  );
}

// "flex h-5 w-5 items-center justify-center rounded",
//               "radix-state-checked:bg-purple-600 radix-state-unchecked:bg-gray-100 dark:radix-state-unchecked:bg-gray-900",
//               "focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75"
