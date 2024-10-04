/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Features = ({ className }) => {
  return (
    <div className={`flex flex-col w-[1200px] items-start gap-16 p-16 relative bg-white ${className}`}>
      <div className="items-center justify-center gap-3 flex flex-col relative self-stretch w-full flex-[0_0_auto]">
        <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-[#4c4c4c] text-lg tracking-[0] leading-7">
          Your Property, Our Priority
        </div>
        <div className="relative self-stretch [font-family:'Inter',Helvetica] font-bold text-black text-3xl tracking-[0] leading-[42px]">
          Explore Our Auction Features
        </div>
      </div>
      <div className="flex-wrap gap-[32px_24px] self-stretch w-full flex-[0_0_auto] flex items-start relative">
        <div className="flex-col min-w-[250px] gap-5 flex-1 grow flex items-start relative">
          <img
            className="relative w-11 h-11"
            alt="Container md"
            src="https://c.animaapp.com/aXNesVcd/img/container-md-16.svg"
          />
          <div className="items-start gap-2.5 flex flex-col relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-black text-lg tracking-[0] leading-7">
              Live Auctions
            </div>
            <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-black text-base tracking-[0] leading-6">
              Experience the thrill of live bidding on properties with real-time updates.
            </p>
          </div>
          <div className="relative self-stretch [font-family:'Inter',Helvetica] font-bold text-[#2463eb] text-lg tracking-[0] leading-7">
            Discover Live Auctions
          </div>
        </div>
        <div className="flex-col min-w-[250px] gap-5 flex-1 grow flex items-start relative">
          <img
            className="relative w-11 h-11"
            alt="Container md"
            src="https://c.animaapp.com/aXNesVcd/img/container-md-13.svg"
          />
          <div className="items-start gap-2.5 flex flex-col relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-black text-lg tracking-[0] leading-7">
              Transparent Bidding
            </div>
            <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-black text-base tracking-[0] leading-6">
              Bid with confidence knowing all offers are visible and fair.
            </p>
          </div>
          <div className="relative self-stretch [font-family:'Inter',Helvetica] font-bold text-[#2463eb] text-lg tracking-[0] leading-7">
            Understand Bidding Process
          </div>
        </div>
        <div className="flex-col min-w-[250px] gap-5 flex-1 grow flex items-start relative">
          <img
            className="relative w-11 h-11"
            alt="Container md"
            src="https://c.animaapp.com/aXNesVcd/img/container-md-17.svg"
          />
          <div className="items-start gap-2.5 flex flex-col relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-black text-lg tracking-[0] leading-7">
              Legal Guidance
            </div>
            <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-black text-base tracking-[0] leading-6">
              Receive integrated legal advice to navigate your property transactions smoothly.
            </p>
          </div>
          <div className="relative self-stretch [font-family:'Inter',Helvetica] font-bold text-[#2463eb] text-lg tracking-[0] leading-7">
            Get Legal Help
          </div>
        </div>
        <div className="flex-col min-w-[250px] gap-5 flex-1 grow flex items-start relative">
          <img
            className="relative w-11 h-11"
            alt="Container md"
            src="https://c.animaapp.com/aXNesVcd/img/container-md-23.svg"
          />
          <div className="items-start gap-2.5 flex flex-col relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-black text-lg tracking-[0] leading-7">
              User-Friendly Interface
            </div>
            <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-black text-base tracking-[0] leading-6">
              Navigate our platform effortlessly to find your dream property.
            </p>
          </div>
          <div className="relative self-stretch [font-family:'Inter',Helvetica] font-bold text-[#2463eb] text-lg tracking-[0] leading-7">
            Explore Our Platform
          </div>
        </div>
      </div>
    </div>
  );
};
