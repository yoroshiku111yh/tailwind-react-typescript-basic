import { dataWhatWeDo } from "../../dummyData/whatWeDo";
import decorBlock from "../../assets/images/decor-block.png";
import React from "react";
export default function WhatWeDoSection() {
  const listItem = dataWhatWeDo.map((item, index) => {
    return (
      <React.Fragment key={index}>
        <div className="flex items-start lg:gap-6 gap-3">
          <img className="lg:w-[90px] w-[70px] h-auto lg:mt-3" src={item.icon} />
          <div>
            <h4 className="font-semibold lg:text-[25px] text-xl mb-3">{item.title}</h4>
            <p className="lg:text-base text-sm text-gray-500">{item.context}</p>
          </div>
        </div>
        {(index + 1) % 2 === 0 && index < dataWhatWeDo.length - 1 && (
          <hr className="lg:block hidden col-[1/3] mx-[7%] my-10" />
        )}
      </React.Fragment>
    );
  });
  return (
    <section className="mt-24 pb-[11%] px-4 relative overflow-hidden">
      <img className="2xl:w-[521px] xl:w-[400px] w-[250px] aspect-[521/587] absolute z-0 bottom-0 left-[-3%]" src={decorBlock} />
      <img className="2xl:w-[521px] xl:w-[400px] w-[250px] aspect-[521/587] absolute z-0 top-[10%] right-[-3%]" src={decorBlock} />
      <h3 className="headline z-10 relative">What we do</h3>
      <div className="z-10 2xl:max-w-[1295px] container mx-auto rounded-2xl bg-white shadow-sm mt-14 2xl:px-11 2xl:py-16 px-5 py-7 lg:gap-x-32 gap-3 grid lg:grid-cols-2 grid-cols-1 relative">
        {listItem}
      </div>
    </section>
  );
}
