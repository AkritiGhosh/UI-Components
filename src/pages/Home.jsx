import React from "react";

const Home = () => {
  return (
    <main className="relative w-screen h-screen overflow-auto snap-y snap-mandatory bg-slate-200">
      <div className="w-full h-screen snap-always snap-start bg-[#09072d]">
        Home
      </div>
      <div
        style={{
          backgroundSize: "100% 25%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
        }}
        className="relative w-full h-screen snap-always snap-start py-10  bg-gradient-to-br from-[#09072d] from-[49%] to-50% to-slate-200"
      >
        <h1 className=" underline text-7xl text-center pt-5 bg-inherit bg-clip-text">
          Feature list
        </h1>
      </div>
    </main>
  );
};

export default Home;
