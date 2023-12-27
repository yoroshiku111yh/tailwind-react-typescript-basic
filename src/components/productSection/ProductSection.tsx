import ProductContain from "./ProductContain";
import ProductFilter from "./ProductFilter";

export default function ProductSection() {
  return (
    <section className="mt-8 lg:px-0 px-4">
      <h3 className="headline">Our featured store</h3>
      <div className="container grid lg:grid-cols-5 grid-cols-1 relative mx-auto mt-12">
        <div className="lg:col-[1/2]">
          <ProductFilter />
        </div>
        <div className="lg:col-[2/6]">
          <ProductContain />
        </div>
      </div>
    </section>
  );
}
