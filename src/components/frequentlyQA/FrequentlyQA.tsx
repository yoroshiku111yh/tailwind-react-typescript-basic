import decorSpiral from "../../assets/images/decor-spiral.png";
import iconQuestion from "../../assets/images/ico-question.png";
export default function FrequentlyQA() {
  const listItem = [];
  for (let i = 0; i < 3; i++) {
    listItem.push(
      <div
        key={i}
        className={`hs-accordion accordion-item shadow-xl mb-6 ${
          i === 2 && " hs-accordion active"
        }`}
        id={`hs-basic-heading-${i}`}
      >
        <button
          className="accordion-item__btn text-left hs-accordion-toggle hs-accordion-active:text-blue-600 w-full"
          aria-controls={`hs-basic-collapse-${i}`}
        >
          How can i become a vendor on the app?
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 hs-accordion-active hs-accordion-active:rotate-0 rotate-45 mt-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div
          id={`hs-basic-collapse-${i}`}
          className={`hs-accordion-content accordion-item__context ${
            i !== 2 && " hidden"
          }`}
          aria-labelledby={`hs-basic-heading-${i}`}
        >
          <div className="pt-3">
            <p>
              It is hidden by default, until the collapse plugin adds the
              appropriate classes that we use to style each element.
            </p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <section className="mt-20 relative z-10">
      <div className="container px-4 mx-auto relative pt-32">
        <img
          src={decorSpiral}
          className="absolute w-[59px] h-auto top-0 left-5 z-0"
        />
        <h3 className="headline">Frequently asked question</h3>
        <div className="mt-16 grid lg:grid-cols-3 grid-cols-1 gap-12">
          <div className="lg:col-[1/3] hs-accordion-group lg:pl-[5%]">{listItem}</div>
          <div className="lg:col-[3/4] lg:pr-[13%]">
            <div className="border-blue-1000 border-2 rounded-xl py-10 px-9 text-center">
              <img
                src={iconQuestion}
                className="w-[54px] aspect-square mb-6 mx-auto"
              />
              <b className="mb-3 text-[22px] font-extrabold block">
                Do you have more questions?
              </b>
              <p className="leading-normal block">
                Lorem ipsum dolor sit amet consectetur. Quam libero viverra
                faucibus condimentum.
              </p>
              <a href="/" className="btn rounded-xl inline-block mt-6">
                Shoot a direct mail
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
