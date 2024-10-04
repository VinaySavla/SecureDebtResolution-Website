/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const FeaturesWrapper = ({ className, buttonClassName }) => {
  return (
    <div className={`flex flex-col w-[1200px] items-center justify-center gap-16 p-16 relative bg-white ${className}`}>
      <div className="flex flex-col items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
        <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-[#4c4c4c] text-lg text-center tracking-[0] leading-7">
          Bid Smart, Buy Smart
        </div>
        <div className="relative self-stretch [font-family:'Inter',Helvetica] font-bold text-black text-3xl text-center tracking-[0] leading-[42px]">
          Auction Property Insights
        </div>
      </div>
      <div className="relative self-stretch w-full h-[538px] bg-[url(https://c.animaapp.com/aXNesVcd/img/m-image-6.svg)] bg-cover bg-[50%_50%]">
        <div className="absolute w-[1071px] h-10 top-[458px] left-[-1071px] -rotate-180 [background:linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.2)_100%)]" />
        <img
          className="absolute w-[132px] h-5 top-[502px] left-[470px]"
          alt="Items"
          src="https://c.animaapp.com/aXNesVcd/img/items-1.svg"
        />
        <img
          className="absolute w-[58px] h-[58px] top-60 -left-7"
          alt="Button l"
          src="https://c.animaapp.com/aXNesVcd/img/button-l-1.svg"
        />
        <img
          className="absolute w-[58px] h-[58px] top-60 left-[1042px]"
          alt="Button r"
          src="https://c.animaapp.com/aXNesVcd/img/button-r-1.svg"
        />
      </div>
      <div className="flex-wrap justify-center gap-[64px_24px] self-stretch w-full flex-[0_0_auto] flex items-start relative">
        <div className="w-[250px] gap-4 flex items-start relative">
          <img
            className="relative w-11 h-11"
            alt="Container md"
            src="https://c.animaapp.com/aXNesVcd/img/container-md-16.svg"
          />
          <div className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-black text-lg tracking-[0] leading-7">
            Dynamic Listings
          </div>
        </div>
        <div className="w-[250px] gap-4 flex items-start relative">
          <img
            className="relative w-11 h-11"
            alt="Container md"
            src="https://c.animaapp.com/aXNesVcd/img/container-md-17.svg"
          />
          <div className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-black text-lg tracking-[0] leading-7">
            Expert Valuations
          </div>
        </div>
        <div className="w-[250px] gap-4 flex items-start relative">
          <img
            className="relative w-11 h-11"
            alt="Container md"
            src="https://c.animaapp.com/aXNesVcd/img/container-md-18.svg"
          />
          <div className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-black text-lg tracking-[0] leading-7">
            Auction Alerts
          </div>
        </div>
        <div className="w-[250px] gap-4 flex items-start relative">
          <img
            className="relative w-11 h-11"
            alt="Container md"
            src="https://c.animaapp.com/aXNesVcd/img/container-md-19.svg"
          />
          <div className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-black text-lg tracking-[0] leading-7">
            Instant Notifications
          </div>
        </div>
        <div className="w-[250px] gap-4 flex items-start relative">
          <img
            className="relative w-11 h-11"
            alt="Container md"
            src="https://c.animaapp.com/aXNesVcd/img/container-md-20.svg"
          />
          <div className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-black text-lg tracking-[0] leading-7">
            Full Transparency
          </div>
        </div>
        <div className="w-[250px] gap-4 flex items-start relative">
          <img
            className="relative w-11 h-11"
            alt="Container md"
            src="https://c.animaapp.com/aXNesVcd/img/container-md-21.svg"
          />
          <div className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-black text-lg tracking-[0] leading-7">
            Secure Transactions
          </div>
        </div>
        <div className="w-[250px] gap-4 flex items-start relative">
          <img
            className="relative w-11 h-11"
            alt="Container md"
            src="https://c.animaapp.com/aXNesVcd/img/container-md-22.svg"
          />
          <div className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-black text-lg tracking-[0] leading-7">
            Bidding History
          </div>
        </div>
        <div className="w-[250px] gap-4 flex items-start relative">
          <img
            className="relative w-11 h-11"
            alt="Container md"
            src="https://c.animaapp.com/aXNesVcd/img/container-md-23.svg"
          />
          <div className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-black text-lg tracking-[0] leading-7">
            Expert Support
          </div>
        </div>
      </div>
      <div className="flex items-start justify-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
        <button
          className={`all-[unset] box-border bg-[#2463eb] border-[#2463eb] inline-flex h-11 items-center justify-center gap-3 px-4 py-0 relative flex-[0_0_auto] rounded-xl overflow-hidden border border-solid ${buttonClassName}`}
        >
          <div className="relative w-fit [font-family:'Inter',Helvetica] font-semibold text-white text-lg text-center tracking-[0] leading-7 whitespace-nowrap">
            Join the Auction Now
          </div>
        </button>
        <button className="all-[unset] box-border bg-[#fcfcfc] border-[#b3b3b3] inline-flex h-11 items-center justify-center gap-3 px-4 py-0 relative flex-[0_0_auto] rounded-xl overflow-hidden border border-solid">
          <div className="relative w-fit [font-family:'Inter',Helvetica] font-semibold text-black text-lg text-center tracking-[0] leading-7 whitespace-nowrap">
            Learn About Our Features
          </div>
        </button>
      </div>
    </div>
  );
};
