import React, { useEffect, useState } from "react";
import { useWriteContract } from "wagmi";
import { abi } from "../../abis/abi";
import { contractAddress } from "../../config/contractAddress";

function CampaignForm() {
  const { writeContract, data, isSuccess, isPending } = useWriteContract();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    goal: "",
    deadline: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    setError("");
    e.preventDefault();
    const goalInWei = formData.goal
      ? BigInt(formData.goal * 10 ** 18).toString()
      : "";
    // console.log("Campaign Submitted:", formData);
    // console.log("Goal in wei: ", goalInWei);
    const deadline = new Date(formData.deadline).getTime();

    writeContract(
      {
        abi,
        address: contractAddress,
        functionName: "createCampaign",
        args: [formData.title, formData.description, goalInWei, deadline],
      },
      {
        onError: (e) => {
          // console.log(e.message);
          setError(e.shortMessage.split(":")[1]);
        },
      }
    );
    // Add your form submission logic here
  };

  useEffect(() => {
    if (isSuccess) {
      setFormData({
        title: "",
        description: "",
        goal: "",
        deadline: "",
      });
    }
  }, [isSuccess]);

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4">Submit Your Campaign</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <p className="text-red-600 text-lg">{error}</p>
          {isSuccess && (
            <div className="mb-5 pl-5 border-l-4 border--l-">
              <p className="text-green-600 text-lg">
                Campaign Submitted Succesfully
              </p>

              <a
                className="text-[#6059C9]"
                href={`https://sepolia.etherscan.io/tx/${data}`}
              >
                View Transaction on Etherscan
              </a>
            </div>
          )}
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Campaign Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="goal"
            className="block text-sm font-medium text-gray-700"
          >
            Funding Goal (ETH)
          </label>
          <input
            type="number"
            id="goal"
            name="goal"
            value={formData.goal}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="deadline"
            className="block text-sm font-medium text-gray-700"
          >
            Deadline
          </label>
          <input
            type="date"
            id="deadline"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          disabled={isPending}
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {isPending ? "Hold on .." : "Submit Campaign"}
        </button>
      </form>
    </div>
  );
}

export default CampaignForm;
