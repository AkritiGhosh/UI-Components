import React from "react";
import HeroSection from "../components/homepage/HeroSection";

const Home = () => {
  return (
    <main className="relative w-screen h-screen overflow-x-hidden overflow-y-auto snap-y snap-mandatory bg-app-200">
      <div className="w-full h-screen snap-always snap-start bg-black">
        <HeroSection/>
      </div>
      <div className="relative w-full h-screen snap-always snap-start bg-black">
        <h1 className=" underline text-7xl text-center pt-5 bg-inherit bg-clip-text">
          Feature list
        </h1>
      </div>
    </main>
  );
};

export default Home;
