/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const EcommerceCategoriesWrapper = ({ className }) => {
  return (
    <div className={`flex flex-col w-[1200px] items-center gap-16 p-16 relative bg-white ${className}`}>
      <div className="flex flex-col items-start justify-end gap-4 relative self-stretch w-full flex-[0_0_auto]">
        <p className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-black text-lg tracking-[0] leading-7">
          Your Pathway to Property Ownership Starts Here!
        </p>
        <p className="relative self-stretch [font-family:'Inter',Helvetica] font-bold text-black text-3xl tracking-[0] leading-[42px]">
          Bid on Amazing Listed Properties
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-[24px_24px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col min-w-[524px] items-start justify-center gap-4 relative flex-1 grow rounded-xl overflow-hidden border border-solid border-[#b3b3b3]">
          <img
            className="relative self-stretch w-full h-[766px]"
            alt="M"
            src="https://c.animaapp.com/aXNesVcd/img/m-image01-3.svg"
          />
          <div className="flex flex-col w-6 items-start justify-center gap-3 px-6 py-5 absolute top-[120px] -left-6 bg-white rotate-180">
            <div className="relative w-[476px] h-[34px] mr-[-500.00px] [font-family:'Inter',Helvetica] font-semibold text-black text-xl tracking-[0] leading-8 whitespace-nowrap">
              Affordable Housing
            </div>
            <div className="relative self-stretch mt-[-1.00px] mr-[-25.00px] [font-family:'Inter',Helvetica] font-medium text-[#0c0c0cb2] text-lg tracking-[0] leading-7">
              Great Value and Comfort
            </div>
          </div>
        </div>
        <div className="flex flex-col min-w-[524px] items-center gap-6 relative flex-1 grow">
          <div className="flex flex-col h-[371px] items-start justify-center gap-4 relative self-stretch w-full rounded-xl overflow-hidden border border-solid border-[#b3b3b3]">
            <img
              className="relative flex-1 self-stretch w-full grow"
              alt="M"
              src="https://c.animaapp.com/aXNesVcd/img/m-image02-3.svg"
            />
            <div className="flex flex-col w-[524px] items-start justify-center gap-3 px-6 py-5 absolute top-[263px] left-0 bg-white">
              <div className="relative w-[476px] h-7 mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-black text-xl tracking-[0] leading-8 whitespace-nowrap">
                Investment Opportunities
              </div>
              <div className="relative self-stretch [font-family:'Inter',Helvetica] font-medium text-[#0c0c0cb2] text-lg tracking-[0] leading-7">
                Maximize Your Returns
              </div>
            </div>
          </div>
          <div className="flex flex-col h-[371px] items-start justify-center gap-4 relative self-stretch w-full rounded-xl overflow-hidden border border-solid border-[#b3b3b3]">
            <img
              className="relative flex-1 self-stretch w-full grow"
              alt="M"
              src="https://c.animaapp.com/aXNesVcd/img/m-image03-3.svg"
            />
            <div className="flex flex-col w-[524px] items-start justify-center gap-3 px-6 py-5 absolute top-[263px] left-0 bg-white">
              <div className="relative w-[476px] h-7 mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-black text-xl tracking-[0] leading-8 whitespace-nowrap">
                Unique Properties
              </div>
              <div className="relative self-stretch [font-family:'Inter',Helvetica] font-medium text-[#0c0c0cb2] text-lg tracking-[0] leading-7">
                Stand Out with Style
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
