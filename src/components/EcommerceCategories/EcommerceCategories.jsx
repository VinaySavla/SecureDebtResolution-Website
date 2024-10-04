/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const EcommerceCategories = ({ className }) => {
  return (
    <div className={`flex flex-col w-[1200px] items-center gap-16 p-16 relative bg-white ${className}`}>
      <div className="flex flex-col items-start justify-end gap-4 relative self-stretch w-full flex-[0_0_auto]">
        <p className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-black text-lg tracking-[0] leading-7">
          Discover Your Dream Property Today!
        </p>
        <p className="relative self-stretch [font-family:'Inter',Helvetica] font-bold text-black text-3xl tracking-[0] leading-[42px]">
          Exciting Auction Properties Await You
        </p>
      </div>
      <div className="flex flex-wrap items-start justify-center gap-[24px_24px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="w-[707px] flex flex-col h-[406px] items-start justify-center gap-4 relative">
          <img
            className="relative flex-1 self-stretch w-full grow"
            alt="M"
            src="https://c.animaapp.com/aXNesVcd/img/m-image01-2.svg"
          />
          <div className="flex-[0_0_auto] flex flex-col items-start justify-center gap-3 relative self-stretch w-full">
            <div className="relative self-stretch h-7 mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-black text-xl tracking-[0] leading-8 whitespace-nowrap">
              Residential Homes
            </div>
            <div className="relative self-stretch [font-family:'Inter',Helvetica] font-medium text-[#0c0c0cb2] text-lg tracking-[0] leading-7">
              Family-friendly and Cozy
            </div>
          </div>
        </div>
        <div className="min-w-[244px] flex-1 grow flex flex-col h-[406px] items-start justify-center gap-4 relative">
          <img
            className="relative flex-1 self-stretch w-full grow"
            alt="M"
            src="https://c.animaapp.com/aXNesVcd/img/m-image02-2.svg"
          />
          <div className="flex-[0_0_auto] flex flex-col items-start justify-center gap-3 relative self-stretch w-full">
            <div className="relative self-stretch h-7 mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-black text-xl tracking-[0] leading-8 whitespace-nowrap">
              Commercial Spaces
            </div>
            <div className="relative self-stretch [font-family:'Inter',Helvetica] font-medium text-[#0c0c0cb2] text-lg tracking-[0] leading-7">
              Thriving Business Locations
            </div>
          </div>
        </div>
        <div className="min-w-[244px] flex-1 grow flex flex-col h-[406px] items-start justify-center gap-4 relative">
          <img
            className="relative flex-1 self-stretch w-full grow"
            alt="M"
            src="https://c.animaapp.com/aXNesVcd/img/m-image03-2.svg"
          />
          <div className="flex-[0_0_auto] flex flex-col items-start justify-center gap-3 relative self-stretch w-full">
            <div className="relative self-stretch h-7 mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-black text-xl tracking-[0] leading-8 whitespace-nowrap">
              Luxury Estates
            </div>
            <div className="relative self-stretch [font-family:'Inter',Helvetica] font-medium text-[#0c0c0cb2] text-lg tracking-[0] leading-7">
              Opulent Living Experiences
            </div>
          </div>
        </div>
        <div className="min-w-[244px] flex-1 grow flex flex-col h-[406px] items-start justify-center gap-4 relative">
          <img
            className="relative flex-1 self-stretch w-full grow"
            alt="M"
            src="https://c.animaapp.com/aXNesVcd/img/m-image04-1.svg"
          />
          <div className="h-16 flex flex-col items-start justify-center gap-3 relative self-stretch w-full">
            <div className="relative flex-1 self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-black text-xl tracking-[0] leading-8 whitespace-nowrap">
              Land Auctions
            </div>
            <div className="relative self-stretch [font-family:'Inter',Helvetica] font-bold text-[#0c0c0cb2] text-lg tracking-[0] leading-7">
              Prime Development Opportunities
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
