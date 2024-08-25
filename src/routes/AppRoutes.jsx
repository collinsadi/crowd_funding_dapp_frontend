import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "../pages/home/Home";
import { StartCampaign } from "../pages/campaigns/StartCampaign";
import { useAccount } from "wagmi";
import CampaignDetails from "../components/campaigns/CampaignDetails";
import ConnectWallet from "../components/reuseable/notLogged";
const AppRoutes = () => {
  const account = useAccount();
  useEffect(() => {
    // authenticate routes here
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/start_campaign"
          element={account.isConnected ? <StartCampaign /> : <ConnectWallet />}
        />
        <Route
          path="/c/:id"
          element={
            account.isConnected ? <CampaignDetails /> : <ConnectWallet />
          }
        />

        <Route path="*" element={"Not Found"} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
