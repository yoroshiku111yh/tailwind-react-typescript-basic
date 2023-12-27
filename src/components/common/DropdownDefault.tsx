import { useState } from "react";

interface dropdownList {
    ar : string[],
    defaultValue : string
}

export default function DropdownDefault({ar = [], defaultValue = ""}:dropdownList) {
  const [selectedValue, setValue] = useState<string>(defaultValue);
  return (
    <div className="hs-dropdown relative inline-flex [--placement:bottom-right]">
      <button
        id="hs-dropdown-hover-event"
        type="button"
        className="dropdown-label hs-dropdown-toggle"
      >
        Sort by: {selectedValue}
        <svg
          className="hs-dropdown-open:rotate-180 w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      <div
        className="dropdown-list hs-dropdown-menu duration hs-dropdown-open:opacity-100"
        aria-labelledby="hs-dropdown-hover-event"
      >
        {ar.map((item, index) => {
          if (item !== selectedValue) {
            return (
              <div
                key={index}
                className="dropdown-text cursor-pointer"
                onClick={() => setValue(item)}
              >
                {item}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
