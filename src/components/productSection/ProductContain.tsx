import DropdownDefault from "../common/DropdownDefault";
import cartIco from "../../assets/images/ico-cart-white.png";
import { data } from "../../dummyData/products";
import Pagination from "./Pagination";

export default function ProductContain() {
  const listItem = data.map((item, index) => {
    const listTags = item.tags.map((tag, indexTag) => {
      return (
        <div className="flex gap-1 items-center xl:mt-0 mt-1" key={indexTag}>
          {indexTag > 0 ? <span className="mr-1 xl:block hidden">&#x2022;</span> : <></>}
          <i className="text-xs ">{tag.tagText}:</i>
          <b className="text-xs">{tag.tagValue}</b>
        </div>
      );
    });
    return (
      <div className="relative card-product mb-3 " key={index}>
        <div className="card-product__thumbnail ">
          <img src={item.img} className="w-full h-full object-cover" />
        </div>
        <h3 className="card-product__headline ">{item.title}</h3>
        <div className="xl:inline-flex mt-1 gap-2 items-center">{listTags}</div>
        <div className=" card-product__price ">{item.price}</div>
        <div className="card-product__stick ">
          <img src={cartIco} className="card-product__ico" />
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="lg:flex justify-between">
        <div className="flex items-end gap-3 lg:mb-0 mb-4">
          <h4 className="text-blue-1000 font-bold text-2xl">Ankara styles</h4>
          <p className="text-gray-600 text-sm mb-1">Male & Female</p>
        </div>
        <DropdownDefault
          ar={["Popular", "Prices", "Alphabet"]}
          defaultValue="Popular"
        />
      </div>
      <div className="relative grid gap-4 xl:grid-cols-4 md:grid-cols-3 grid-cols-2 items-start lg:mt-10 mt-4">
        {listItem}
      </div>
      <div className="flex items-center justify-center mt-[72px]">
        <Pagination />
      </div>
    </>
  );
}
