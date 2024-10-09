import { Calculator } from "./ui/Calculator/Calculator";
import { Contact } from "./ui/Contacts/Contact";
import { Hero } from "./ui/Hero/Hero";
import MapSection from "./ui/MapSection/MapSection";
import { Tracking } from "./ui/Tracking/Tracking";

export const Home = () => {
  return (
    <>
      <Hero />
      <Calculator />
      <Tracking />
      <Contact />
      <MapSection/>
    </>
  );

