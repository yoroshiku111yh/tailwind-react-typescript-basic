import logoBlack from "../assets/images/logo-black.png";
import { links1, links2 } from "../dummyData/footer";
import icoInstar from "../assets/images/ico-instar.png";
import icoUtube from "../assets/images/ico-utube.png";
import iconFb from "../assets/images/ico-fb.png";
import bgFooter from '../assets/images/bg-footer.png'
export default function Footer() {
  const listLink1 = links1.map((item, index) => {
    return (
      <li
        key={index}
        className={`text-lg block text-[#7F848D] mb-3 ${item.className}`}
      >
        <a href={item.link}>{item.text}</a>
      </li>
    );
  });
  const listLink2 = links2.map((item, index) => {
    return (
      <li
        key={index}
        className={`text-lg block text-[#7F848D] mb-3 ${item.className}`}
      >
        <a href={item.link}>{item.text}</a>
      </li>
    );
  });
  return (
    <footer className="mt-20 pb-14 relative">
      <img src={bgFooter} className="absolute z-[-1] bottom-12 w-full object-contain" />
      <div className="container px-4 mx-auto relative z-10">
        <hr className="border-blue-1000 border-1"></hr>
        <div className="mt-20 flex lg:flex-row flex-col-reverse justify-between items-start lg:gap-5 gap-10">
          <div className="max-w-[430px]">
            <a href="/">
              <img src={logoBlack} className="w-[231px] h-auto" />
            </a>
            <p className="mt-6 text-lg leading-relaxed text-[#7F848D]">
              FashionForAll. Vestibulum non est nisl.
              <br />
              Donec eget sodales nisl. Donec ut velit erat.
            </p>
            <div className="text-lg mt-5 text-[#293241]">
              &#169;2022 All rights reserved.
            </div>
          </div>
          <div className="md:flex gap-[99px]">
            <ul>{listLink1}</ul>
            <ul>
              {listLink2}
              <li className="flex gap-3 mt-3">
                <a
                  href=""
                  className="flex w-[44px] aspect-square justify-center items-center bg-[#EAEBEC] rounded-lg"
                >
                  <img src={icoInstar} className="w-6" />
                </a>
                <a
                  href=""
                  className="flex w-[44px] aspect-square justify-center items-center bg-[#EAEBEC] rounded-lg"
                >
                  <img src={iconFb} className="w-6" />
                </a>
                <a
                  href=""
                  className="flex w-[44px] aspect-square justify-center items-center bg-[#EAEBEC] rounded-lg"
                >
                  <img src={icoUtube} className="w-6" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
