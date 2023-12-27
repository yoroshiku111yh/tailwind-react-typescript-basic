import brand1 from "../assets/images/logo-brand-1.png";
import brand2 from "../assets/images/logo-brand-2.png";
import brand3 from "../assets/images/logo-brand-3.png";
import brand4 from "../assets/images/logo-brand-4.png";
import brand5 from "../assets/images/logo-brand-5.png";

interface Brands {
  color: string;
  logoBrand: string;
  text: string;
}

const brands: Brands[] = [
  {
    color: "text-[#63866A]",
    logoBrand: brand1,
    text: "NextFashion",
  },
  {
    color: "text-[#3734A9]",
    logoBrand: brand2,
    text: "FashionForAll",
  },
  {
    color: "text-[#B71DBA]",
    logoBrand: brand3,
    text: "Queen clozet",
  },
  {
    color: "text-[#2C7B98]",
    logoBrand: brand5,
    text: "FashionForAll",
  },
  {
    color: "text-[#BAAA1D]",
    logoBrand: brand4,
    text: "Queen clozet",
  },
];

export default function AdvertSection() {
  const listBrand = brands.map((item, index) => {
    return (
      <div className="flex justify-center items-center" key={index}>
        <img className="w-[23px] h-auto" src={item.logoBrand} />
        <p className={`font-bold ${item.color} text-base ml-2`}>
          {item.text}
        </p>
      </div>
    );
  });
  return (
    <div className="bg-[#EBFAFF] container mx-auto lg:py-9 py-6 lg:px-0 px-5 lg:-translate-y-12 -translate-y-3 relative">
      <div className="text-center lg:text-[22px] text-[18px] lg:w-auto w-[80%] mx-auto">
        Over <b className="text-blue-1000 font-bold lg:text-4xl text-3xl">32k+</b> fashion
        gurus are growing their brands with FashionForAll.
      </div>
      <div className="lg:flex grid grid-cols-1 sm:grid-cols-3 justify-center items-center mt-6 gap-6 w-[80%] mx-auto lg:gap-2 ">{listBrand}</div>
    </div>
  );
}
