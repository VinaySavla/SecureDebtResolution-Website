import React from "react";
import { Cta } from "../../components/Cta";
import { CtaWrapper } from "../../components/CtaWrapper";
import { EcommerceCategories } from "../../components/EcommerceCategories";
import { EcommerceCategoriesWrapper } from "../../components/EcommerceCategoriesWrapper";
import { Features } from "../../components/Features";
import { FeaturesWrapper } from "../../components/FeaturesWrapper";
import { Footer } from "../../components/Footer";
import { Hero } from "../../components/Hero";
import { SocialProofFaq } from "../../components/SocialProofFaq";
import { SocialProofReviews } from "../../components/SocialProofReviews";
import { Stats } from "../../components/Stats";

export const Desktop = () => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-[1200px] h-[9112px] relative">
        <Hero className="!absolute !left-0 !top-0" />
        <Stats className="!absolute !left-0 !top-[860px]" />
        <Cta buttonClassName="!border-[unset]" className="!absolute !left-0 !top-[1208px]" />
        <EcommerceCategories className="!absolute !left-0 !top-[1960px]" />
        <EcommerceCategoriesWrapper className="!absolute !left-0 !top-[3174px]" />
        <Features className="!absolute !left-0 !top-[4318px]" />
        <SocialProofReviews className="!absolute !left-0 !top-[4918px]" />
        <FeaturesWrapper buttonClassName="!border-[unset]" className="!absolute !left-0 !top-[5512px]" />
        <SocialProofFaq className="!absolute !left-0 !top-[6748px]" />
        <CtaWrapper buttonClassName="!border-[unset]" className="!absolute !left-0 !top-[7986px]" />
        <Footer className="!absolute !left-0 !top-[8738px]" />
      </div>
    </div>
  );
};
