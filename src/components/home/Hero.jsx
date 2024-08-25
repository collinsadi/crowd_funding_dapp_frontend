import React from "react";
import heroImage from "/assets/static/Frame.png";

export const Hero = () => {
  return (
    <section className="w-full md:h-[800px] bg-[#F5EFE0] overflow-hidden">
      <div className="w-full text-center py-20">
        <h1 className="md:text-6xl text-3xl  font-bold">
          welcome to <span>CrowdFund</span>
        </h1>
        <p className="mt-4 text-lg">
          Empowering Innovation Through Decentralization
        </p>
      </div>
      <div className="flex items-center justify-center">
        <div className="md:w-[800px] w-full">
          <img className="w-full" src={heroImage} alt="" />
        </div>
      </div>

    </section>
  );
};
