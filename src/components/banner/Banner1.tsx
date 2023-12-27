
import bgBanner from "../../assets/images/banner-bg.jpg";
import product5 from "../../assets/images/product-5.jpg";
import icoPlay from "../../assets/images/ico-play-orange.png";

export default function Banner1() {
  return (
    <div
      style={{ backgroundImage: `url(${bgBanner})` }}
      className={`lg:flex hidden justify-between items-center bg-cover lg:bg-[85%] mt-16 container mx-auto aspect-[1485/448]`}
    >
      <div className="capsule-block w-[264px] aspect-[264/388] ml-[18%] my-3 lg:block hidden">
        <img src={product5} className="object-cover w-full h-full" />
      </div>
      <div className="text-right mr-[7%] w-[35%]">
        <h3 className="2xl:text-[52px] text-5xl text-blue-1000 mb-2">Trendy Styles..</h3>
        <h4 className="text-blue-1000 font-bold 2xl:text-4xl text-2xl mb-2">
          Thousands styles More!
        </h4>
        <p className="text-sm leading-tight">
          Having a pet means you have more joy, a new friend, a happy person
          <br />
          who will always be with you to have fun.
          <br />
          We have 200+ different pets that can meet your needs!
        </p>
        <div className="flex gap-2 mt-6 justify-end items-center">
          <a
            href="/"
            className="btn rounded-[10px] flex justify-center gap-1 text-sm px-4"
          >
            <b>Shop collections</b>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 -rotate-[30deg] translate-y-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </a>
          <a href="/" className="flex items-center gap-1">
            <img src={icoPlay} />
            <p className="text-blue-1000 text-[12px] font-medium">
              See How It Works
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
