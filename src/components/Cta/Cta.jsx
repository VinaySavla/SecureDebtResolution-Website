/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Cta = ({ className, buttonClassName }) => {
  return (
    <div className={`flex flex-wrap w-[1200px] items-center gap-[40px_64px] p-16 relative bg-white ${className}`}>
      <img
        className="relative flex-1 min-w-[504px] grow h-[524px]"
        alt="M image"
        src="https://c.animaapp.com/aXNesVcd/img/m-image-5.svg"
      />
      <div className="flex flex-col min-w-[504px] items-start justify-center gap-11 relative flex-1 grow">
        <div className="flex flex-col items-start gap-6 pl-0 pr-4 py-0 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
            <p className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-black text-3xl tracking-[0] leading-[42px]">
              Unlock Your Dream Property Today!
            </p>
            <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-black text-lg tracking-[0] leading-7">
              Join our exciting property auctions and listings to find the perfect home or investment opportunity.
            </p>
          </div>
          <button
            className={`all-[unset] box-border inline-flex min-h-11 items-center justify-center gap-3 px-4 py-0 relative flex-[0_0_auto] bg-[#2463eb] rounded-xl overflow-hidden border border-solid border-[#2463eb] ${buttonClassName}`}
          >
            <div className="relative w-fit [font-family:'Inter',Helvetica] font-semibold text-white text-lg text-center tracking-[0] leading-7 whitespace-nowrap">
              Start Your Journey Now
            </div>
          </button>
        </div>
        <div className="flex flex-col items-start gap-5 p-5 relative self-stretch w-full flex-[0_0_auto] bg-[#fcfcfc] rounded-lg border border-solid border-[#b3b3b3]">
          <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
            <img
              className="relative flex-[0_0_auto]"
              alt="Container"
              src="https://c.animaapp.com/aXNesVcd/img/container-1.svg"
            />
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-[#0c0c0cb2] text-lg text-right tracking-[0] leading-7 whitespace-nowrap">
              5.0
            </div>
          </div>
          <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-[#0c0c0cb2] text-lg tracking-[0] leading-7">
            &#34;This platform transformed my property buying experience!&#34;
          </p>
          <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
            <div className="relative w-[34px] h-[34px] mt-[-1.00px] mb-[-1.00px] ml-[-1.00px] rounded-[1000px] border border-solid border-[#b3b3b3] bg-[url(https://c.animaapp.com/aXNesVcd/img/a-user-avatar-1.svg)] bg-cover bg-[50%_50%]" />
            <div className="inline-flex flex-col items-start justify-center gap-1 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-black text-lg tracking-[0] leading-7 whitespace-nowrap">
                John Smith, Happy Homeowner
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
