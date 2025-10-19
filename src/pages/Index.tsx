import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Market from "@/components/Market";
import BusinessModel from "@/components/BusinessModel";
import Competitors from "@/components/Competitors";
import Team from "@/components/Team";
import Timeline from "@/components/Timeline";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen">
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
