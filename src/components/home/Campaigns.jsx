import React, { useEffect, useState } from "react";
import { useReadContract } from "wagmi";
import { abi } from "../../abis/abi";
import { contractAddress } from "../../config/contractAddress";
import { FaEthereum } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const Campaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const navigate = useNavigate();
  const result = useReadContract({
    abi,
    address: contractAddress,
    functionName: "getCampaigns",
  });
  useEffect(() => {
    if (result.data) {
      // console.log(result.data);
      setCampaigns(result.data);
    }
  }, [result.data]);

  function weiToEth(wei) {
    const eth = Number(wei) / 10 ** 18;
    // console.log(eth);
    return eth;
  }

  function formatDate(date) {
    const options = { day: "numeric", month: "short", year: "numeric" };
    return new Date(date).toLocaleDateString("en-GB", options);
  }

  const handleDonate = (id) => {
    navigate(`/c/${id}`);
  };

  return (
    <section className="py-10 bg-[#F5EFE0]">
      <div className="px-4 text-center py-10">
        <h3 className="text-3xl md:text-6xl font-bold">Active Campaigns</h3>
      </div>

      <div className="mt-5 px-5 flex items-center flex-wrap ">
        {campaigns.length > 0 ? (
          campaigns.reverse().map((item, i) => (
            <div
              key={i}
              className="md:w-[500px] min-h-[250px] p-4 bg-white shadow-lg rounded-lg ml-2 mt-2"
            >
              <div>
                <h3 className="text-3xl font-bold mb-2">{item.title}</h3>
                <p className="text-lg">{item.description}</p>

                <p className="text-2xl mt-3 flex">
                  Raised{" "}
                  <span className=" font-bold text-[#6059C9] flex items-center">
                    <FaEthereum />
                    {item.amountRaised ? weiToEth(item.amountRaised) : "0"}
                  </span>
                  of{" "}
                  <span className=" font-bold flex items-center text-[#6059C9]">
                    <FaEthereum />
                    {weiToEth(item.goal)}
                  </span>
                </p>
                <p className="text-2xl mt-3">
                  Deadline:{" "}
                  <span className=" font-bold text-[#6059C9]">
                    {formatDate(new Date(Number(item.deadline)))}
                  </span>
                </p>

                <div className="mt-4">
                  <button
                    onClick={() => {
                      handleDonate(Number(item.id));
                    }}
                    className="bg-[#6059C9] px-4 py-2 rounded-lg text-white font-bold flex"
                  >
                    Donate
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-2xl w-full">
            <p>Connect your Wallet to see Active Campaigns</p>
          </div>
        )}
      </div>
    </section>
  );
};
