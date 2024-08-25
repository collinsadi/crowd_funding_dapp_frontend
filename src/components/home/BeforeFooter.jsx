import React from "react";
import Image from "/assets/static/hands.png";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { useNavigate } from "react-router-dom";

export const BeforeFooter = () => {
  const account = useAccount();
  const navigation = useNavigate();

  const handleStartCampaign = () => {
    navigation("/start_campaign");
  };
  return (
    <section className="bg-[#FFFCF7] py-20 px-10 md:px-0">
      <div className="w-full flex items-center justify-center">
        <div className="bg-[#F5EFE0] md:w-[800px] h-[200px] flex items-end justify-between overflow-hidden rounded-lg">
          <div className="w-[300px]">
            <img className="w-[200px]" src={Image} alt="" />
          </div>

          <div className="ml-10 pr-10">
            <h3 className="text-2xl font-bold mb-5">Start one today!</h3>
            <p className="text-lg">
              Ready to revolutionize the way the world funds ideas? Sign up now
              and become part of a decentralized future!
            </p>

            <div className="mt-5 pb-2">
              <div></div>
              {account.isConnected ? (
                <button
                  onClick={handleStartCampaign}
                  className="bg-[#6059C9] px-4 py-2 rounded-lg text-white font-bold flex"
                >
                  <svg
                    width="21"
                    height="18"
                    viewBox="0 0 21 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2"
                  >
                    <g clip-path="url(#clip0_2323_490)">
                      <path
                        opacity="0.4"
                        d="M19.8492 2.11641L18.1336 0.400789C17.8759 0.144113 17.527 0 17.1633 0C16.7996 0 16.4507 0.144113 16.193 0.400789L14.9484 1.64532C14.8843 1.70976 14.8483 1.79698 14.8483 1.8879C14.8483 1.97882 14.8843 2.06604 14.9484 2.13048L18.1195 5.30157C18.184 5.36572 18.2712 5.40173 18.3621 5.40173C18.453 5.40173 18.5403 5.36572 18.6047 5.30157L19.8492 4.05704C20.1059 3.79934 20.25 3.45044 20.25 3.08673C20.25 2.72301 20.1059 2.37411 19.8492 2.11641ZM15.0293 10.4625L13.623 11.8688C13.545 11.9487 13.5009 12.0558 13.5 12.1676V15.7465H2.25V4.49649H10.3289C10.4407 4.49564 10.5478 4.45154 10.6277 4.37344L12.034 2.96719C12.0932 2.90819 12.1335 2.83293 12.1499 2.75095C12.1663 2.66898 12.1579 2.584 12.1259 2.50678C12.0939 2.42957 12.0396 2.3636 11.9701 2.31726C11.9005 2.27092 11.8187 2.24629 11.7352 2.24649H1.6875C1.23995 2.24649 0.810725 2.42428 0.494257 2.74075C0.17779 3.05722 0 3.48644 0 3.93399L0 16.309C0 16.7565 0.17779 17.1858 0.494257 17.5022C0.810725 17.8187 1.23995 17.9965 1.6875 17.9965H14.0625C14.5101 17.9965 14.9393 17.8187 15.2557 17.5022C15.5722 17.1858 15.75 16.7565 15.75 16.309V10.7613C15.7502 10.6777 15.7256 10.596 15.6792 10.5264C15.6329 10.4568 15.5669 10.4026 15.4897 10.3706C15.4125 10.3386 15.3275 10.3302 15.2455 10.3466C15.1636 10.3629 15.0883 10.4033 15.0293 10.4625Z"
                        fill="#FFFCF7"
                      />
                      <path
                        d="M17.3248 6.09257C17.3889 6.15701 17.4249 6.24423 17.4249 6.33515C17.4249 6.42607 17.3889 6.5133 17.3248 6.57773L9.64666 14.2559L6.38416 14.618C6.28211 14.6294 6.17879 14.6178 6.08187 14.5838C5.98495 14.5499 5.89691 14.4946 5.8243 14.422C5.75169 14.3494 5.69636 14.2613 5.66243 14.1644C5.6285 14.0675 5.61683 13.9642 5.6283 13.8621L5.99041 10.5996L13.6685 2.92148C13.733 2.85733 13.8202 2.82132 13.9111 2.82132C14.002 2.82132 14.0893 2.85733 14.1537 2.92148L17.3248 6.09257Z"
                        fill="#FFFCF7"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2323_490">
                        <rect width="20.25" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Start a campaign
                </button>
              ) : (
                <ConnectButton />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
