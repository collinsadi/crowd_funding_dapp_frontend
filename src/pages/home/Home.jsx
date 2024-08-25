import React from "react";
import { Header } from "../../components/reuseable/Header";
import { Hero } from "../../components/home/Hero";
import { AfterHero } from "../../components/home/AfterHero";
import { HowItWorks } from "../../components/home/HowItWorks";
import { BeforeFooter } from "../../components/home/BeforeFooter";
import { Footer } from "../../components/home/Footer";
import { Campaigns } from "../../components/home/Campaigns";

export const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <AfterHero />
      <HowItWorks />
      <BeforeFooter />
      <Footer />
    </>
  );
};
