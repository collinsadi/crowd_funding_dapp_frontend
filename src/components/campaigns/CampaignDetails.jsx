import React, { useState, useEffect } from "react";
import { Header } from "../reuseable/Header";
import { contractAddress } from "../../config/contractAddress";
import { useReadContract, useWriteContract } from "wagmi";
import { abi } from "../../abis/abi";
import { parseEther } from "viem";

import { useParams } from "react-router-dom";

function CampaignDetails() {
  const { writeContract, data, isSuccess, isPending } = useWriteContract();
  const [campaign, setCampaign] = useState({});
  const [donationAmount, setDonationAmount] = useState("");
  const [error, setError] = useState("");

  const { id } = useParams();

  function weiToEth(wei) {
    const eth = Number(wei) / 10 ** 18;
    return eth;
  }

  function formatDate(date) {
    const options = { day: "numeric", month: "short", year: "numeric" };
    return new Date(date).toLocaleDateString("en-GB", options);
  }

  const result = useReadContract({
    abi,
    address: contractAddress,
    functionName: "getSingleCampaign",
    args: [id],
  });
  useEffect(() => {
    if (result.data) {
    //   console.log(result.data);
      setCampaign(result.data);
    }
  }, [result.data]);

  const donateToCampaign = () => {
    setError("");
    writeContract(
      {
        abi,
        address: contractAddress,
        functionName: "donateToCampaign",
        args: [id],
        value: parseEther(donationAmount),
      },
      {
        onError: (e) => {
        //   console.log(e.message);
          setError(e.shortMessage.split(":")[1]);
        },
      }
    );
  };

  return (
    <section>
      <Header />
      <div className="max-w-3xl mt-20 mx-auto p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          {campaign.title}
        </h1>
        <p className="text-gray-700 mb-6">
          <strong>Description:</strong> {campaign.description}
        </p>

        <div className="mb-4">
          <p className="text-lg text-gray-800">
            <strong>Goal:</strong> {weiToEth(campaign.goal)}
            ETH
          </p>
        </div>

        <div className="mb-4">
          <p className="text-lg text-gray-800">
            <strong>Deadline:</strong>{" "}
            {formatDate(new Date(Number(campaign.deadline)))}
          </p>
        </div>

        <h2 className="text-2xl font-semibold mb-2 text-gray-800">
          Donate to this Campaign
        </h2>

        <p className="my-4 text-red-600">{error}</p>

        {isSuccess && (
          <div className="mb-5 pl-5 border-l-4 border--l-">
            <p className="text-green-600 text-lg">
              Thank you for your generous contribution.
            </p>

            <a
              className="text-[#6059C9]"
              href={`https://sepolia.etherscan.io/tx/${data}`}
            >
              View Transaction on Etherscan
            </a>
          </div>
        )}

        <div className="flex items-center mb-4">
          <input
            type="number"
            placeholder="Enter amount in ETH"
            className="w-full p-2 border border-gray-300 rounded-md mr-4"
            value={donationAmount}
            onChange={(e) => setDonationAmount(e.target.value)}
          />
          <button
            onClick={donateToCampaign}
            disabled={isPending}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            {isPending ? "..." : "Donate"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default CampaignDetails;
