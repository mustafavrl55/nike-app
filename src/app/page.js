/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Header from "./componenets/Header";
import Section from "./componenets/Section";
import Products from "./componenets/Products";
import Section2 from "./componenets/Section2";
import Section3 from "./componenets/Section3";
import Section4 from "./componenets/Section4";
import Section5 from "./componenets/Section5";
import Section6 from "./componenets/Section6";
import Footer from "./componenets/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <div className="px-6  ">
        <Section />
        <Products />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
      </div>
      <Footer />
    </>
  );
}
