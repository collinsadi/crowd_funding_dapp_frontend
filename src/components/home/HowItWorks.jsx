import React from "react";

export const HowItWorks = () => {
  return (
    <section className="p-10 bg-[#F5EFE0]">
      <div>
        <div>
          <h3 className="font-bold text-3xl">Why Choose us?</h3>
        </div>

        <div className="mt-5 flex justify-between flex-wrap py-10">
          <div className="w-[300px] h-[300px] bg-white rounded-lg p-4">
            <div className="h-[50px] w-[50px] bg-[#6059C9] flex items-center justify-center rounded-full">
              <span className="text-2xl text-white font-bold">1</span>
            </div>
            <div className="mt-5">
                <h3 className="text-2xl mb-4 font-bold">Create or Discover Projects</h3>
                <p className="text-lg">Browse a variety of projects or start your own campaign in minutes.</p>
            </div>
          </div>

          <div className="w-[300px] h-[300px] bg-white rounded-lg p-4">
            <div className="h-[50px] w-[50px] bg-[#6059C9] flex items-center justify-center rounded-full">
              <span className="text-2xl text-white font-bold">2</span>
            </div>
            <div className="mt-5">
                <h3 className="text-2xl mb-4 font-bold">Contribute or Earn Rewards</h3>
                <p className="text-lg">Back projects you believe in or offer rewards to your supporters.</p>
            </div>
          </div>

          <div className="w-[300px] h-[300px] bg-white rounded-lg p-4">
            <div className="h-[50px] w-[50px] bg-[#6059C9] flex items-center justify-center rounded-full">
              <span className="text-2xl text-white font-bold">3</span>
            </div>
            <div className="mt-5">
                <h3 className="text-2xl mb-4 font-bold">Achieve Success Together</h3>
                <p className="text-lg">Collaborate, share progress, and reach your funding goals with the support of a global network.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
