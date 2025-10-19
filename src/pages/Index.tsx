import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Market from "@/components/Market";
import BusinessModel from "@/components/BusinessModel";
import Competitors from "@/components/Competitors";
import Team from "@/components/Team";
import Timeline from "@/components/Timeline";
import CallToAction from "@/components/CallToAction";

import {
  useEffect,
  useState
} from 'react';

const Index = () => {
  const [hasScroll, setHasScroll] = useState(false);

  useEffect(() => {
    const handleWheel = () => {
      setHasScroll(true);
    };

    window.addEventListener("wheel", handleWheel, { once: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    let index = 1;
    let isScrolling = false;

    const handleWheel = (e: WheelEvent) => {
      if (index == 8 || !hasScroll) return;

      e.preventDefault();
      console.log("Scroll: ", index)
      if (isScrolling) return;
      isScrolling = true;

      if (e.deltaY > 0 && index < sections.length - 1) index++;
      else if (e.deltaY < 0 && index > 0) index--;

      sections[index].scrollIntoView({ behavior: "smooth" });

      setTimeout(() => (isScrolling = false), 500);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth scroll-slow">
      <Hero />
      <Problem />
      <Solution />
      <Market />
      <BusinessModel />
      <Competitors />
      <Team />
      <Timeline />
      <CallToAction />
    </div>
  );
};

export default Index;
