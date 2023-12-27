import { useState } from "react";

interface Params{
    defaultValue?:string | number,
    min ?: number,
    max?:number,
    onChange ?: (value:number) => void
}

export default function InputNumberCrease({
  defaultValue = "",
  min = 0,
  max = Infinity,
  onChange = () => {}
}:Params) {
  const [value, setValue] = useState<string|number>(defaultValue);
  const increase = () => {
    if(Number(value) < max){
        setValue(Number(value) + 1);
    }
  };
  const decrease = () => {
    if(Number(value) > min){
        setValue(Number(value) - 1);
    }
  };
  return (
    <>
      <input
        className="input-number pr-5"
        type="number"
        value={value}
        min={min}
        max={max}
        onChange={(e) => {
            e.currentTarget.value.length === 0 && setValue("");
            if(Number(e.currentTarget.value) >= min && Number(e.currentTarget.value) <= max){
                setValue(e.currentTarget.value);
                onChange(Number(e.currentTarget.value))
            }
        }}
      />
      <div className="flex flex-col h-full justify-center items-center absolute top-0 bottom-0 right-0 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          className="w-3 h-3 stroke-black"
          onClick={increase}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 15.75l7.5-7.5 7.5 7.5"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          className="w-3 h-3 stroke-black"
          onClick={decrease}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </>
  );
}
