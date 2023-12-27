import Flickity from "react-flickity-component";
import "../../assets/css/flickity.css";

export default function TestimoniesSection() {
  const listItem = [];
  for (let i = 0; i < 10; i++) {
    listItem.push(
      <div className="card-review mr-9" key={i}>
        <div className="card-review__context ">
          Lorem ipsum dolor sit amet consectetur.
          <br /> Quam libero viverra faucibus condimentum.
        </div>
        <div className="card-review__line" />
        <div className="flex items-center gap-4">
          <div className="card-review__avatar">
            <img
              src="https://placehold.co/600x400"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="card-review__title">Name Surname</h4>
            <p className="card-review__desc">CEO of Google</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <section className="mt-16 mb-12">
      <h3 className="headline z-10 relative">
        What people<br className="lg:hidden"/> all over the world<br className="lg:hidden"/> are saying about us
      </h3>
      <div className="container mx-auto mt-16 carousel-slider">
        <Flickity options={{ groupCells: true, prevNextButtons: false, wrapAround : true }}>
          {listItem}
        </Flickity>
        <div className="flex justify-center mt-32">
          <a className="btn rounded-[10px] min-w-[275px] text-center">
            See all review
          </a>
        </div>
      </div>
    </section>
  );
}
