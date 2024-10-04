/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Stats = ({ className }) => {
  return (
    <div
      className={`flex flex-wrap w-[1200px] items-center justify-center gap-[32px_24px] p-16 relative bg-white ${className}`}
    >
      <div className="flex flex-wrap items-center justify-center gap-[24px_24px] relative flex-1 grow">
        <div className="flex flex-col min-w-[250px] items-center gap-3 relative flex-1 grow">
          <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-black text-4xl text-center tracking-[0] leading-[52px]">
            5.5M
          </div>
          <div className="relative self-stretch [font-family:'Inter',Helvetica] font-medium text-[#0c0c0cb2] text-lg text-center tracking-[0] leading-7">
            Millions in Properties Sold
          </div>
        </div>
        <div className="flex flex-col min-w-[250px] items-center gap-3 relative flex-1 grow">
          <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-black text-4xl text-center tracking-[0] leading-[52px]">
            24.5B
          </div>
          <div className="relative self-stretch [font-family:'Inter',Helvetica] font-medium text-[#0c0c0cb2] text-lg text-center tracking-[0] leading-7">
            Billions in Property Auctions
          </div>
        </div>
        <div className="flex flex-col min-w-[250px] items-center gap-3 relative flex-1 grow">
          <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-black text-4xl text-center tracking-[0] leading-[52px]">
            99%
          </div>
          <div className="relative self-stretch [font-family:'Inter',Helvetica] font-medium text-[#0c0c0cb2] text-lg text-center tracking-[0] leading-7">
            95% Customer Satisfaction Rate
          </div>
        </div>
        <div className="flex flex-col min-w-[250px] items-center gap-3 relative flex-1 grow">
          <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-black text-4xl text-center tracking-[0] leading-[52px]">
            3K
          </div>
          <div className="relative self-stretch [font-family:'Inter',Helvetica] font-medium text-[#0c0c0cb2] text-lg text-center tracking-[0] leading-7">
            Thousands of Properties Listed
          </div>
        </div>
      </div>
    </div>
  );
};
