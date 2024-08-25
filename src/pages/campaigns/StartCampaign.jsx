import React from "react";
import CampaignForm from "../../components/campaigns/CampaignForm";
import { Header } from "../../components/reuseable/Header";

export const StartCampaign = () => {
  return (
    <section>
      <Header />

      <section className="mt-20">
        <CampaignForm />
      </section>
    </section>
  );
};
