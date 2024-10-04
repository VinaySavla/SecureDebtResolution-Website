/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const CtaWrapper = ({ className, buttonClassName }) => {
  return (
    <div className={`flex flex-wrap w-[1200px] items-center gap-[44px_64px] p-16 relative bg-white ${className}`}>
      <img
        className="relative flex-1 min-w-[504px] grow h-[524px]"
        alt="M image"
        src="https://c.animaapp.com/aXNesVcd/img/m-image-7.svg"
      />
      <div className="flex-col min-w-[484px] items-start gap-16 flex-1 grow flex relative">
        <div className="flex-col items-start gap-8 self-stretch w-full flex-[0_0_auto] flex relative">
          <div className="w-[486px] gap-4 flex-[0_0_auto] flex flex-col items-start relative">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-black text-3xl tracking-[0] leading-[42px]">
              Bid Smart, Live Smart!
            </div>
            <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-black text-lg tracking-[0] leading-7">
              Explore our unique auction feature, where you can place your bids confidently and with expert legal advice
              at your side.
            </p>
          </div>
          <div className="items-end gap-4 self-stretch w-full flex-[0_0_auto] flex relative">
            <button className="all-[unset] box-border bg-[#fcfcfc] border-[#b3b3b3] inline-flex h-11 items-center justify-center gap-3 px-4 py-0 relative flex-[0_0_auto] rounded-xl overflow-hidden border border-solid">
              <div className="relative w-fit [font-family:'Inter',Helvetica] font-semibold text-black text-lg text-center tracking-[0] leading-7 whitespace-nowrap">
                Discover More Now
              </div>
            </button>
            <button
              className={`all-[unset] box-border bg-[#2463eb] border-[#2463eb] inline-flex h-11 items-center justify-center gap-3 px-4 py-0 relative flex-[0_0_auto] rounded-xl overflow-hidden border border-solid ${buttonClassName}`}
            >
              <div className="relative w-fit [font-family:'Inter',Helvetica] font-semibold text-white text-lg text-center tracking-[0] leading-7 whitespace-nowrap">
                Join the Auction Today
              </div>
            </button>
          </div>
        </div>
        <div className="items-start justify-center gap-4 self-stretch w-full flex-[0_0_auto] flex relative">
          <div className="gap-2 flex-1 grow flex flex-col items-start relative">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-black text-4xl tracking-[0] leading-[52px]">
              2.5k+
            </div>
            <div className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-[#0c0c0cb2] text-lg tracking-[0] leading-7">
              Join 5,000+ Active Users
            </div>
          </div>
          <div className="flex flex-col items-start gap-2 relative flex-1 grow">
            <div className="inline-flex items-center justify-center gap-3 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-black text-4xl tracking-[0] leading-[52px] whitespace-nowrap">
                5.0
              </div>
              <img
                className="relative flex-[0_0_auto]"
                alt="Stars"
                src="https://c.animaapp.com/aXNesVcd/img/stars-1.svg"
              />
            </div>
            <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-[#0c0c0cb2] text-lg tracking-[0] leading-7">
              Rated 4.9/5 by Our Users
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
