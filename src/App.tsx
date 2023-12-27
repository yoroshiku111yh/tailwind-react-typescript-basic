import "./assets/css/App.css";
import AdvertSection from "./components/AdvertSection";
import Banner1 from "./components/banner/Banner1";
import FrequentlyQA from "./components/frequentlyQA/FrequentlyQA";
import HeroBanner from "./components/heroBanner/HeroBanner";
import ProductSection from "./components/productSection/ProductSection";
import SignUpBlock from "./components/signupBlock/SignupBlock";
import TestimoniesSection from "./components/testimoniesSection/TestimoniesSection";
import WhatWeDoSection from "./components/whatWeDoSection/WhatWeDoSection";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";

function App() {
  return (
    <>
      <Header />
      <HeroBanner />
      <AdvertSection />
      <ProductSection />
      <Banner1 />
      <WhatWeDoSection />
      <TestimoniesSection />
      <FrequentlyQA />
      <SignUpBlock />
      <Footer />
    </>
  );
}

export default App;
