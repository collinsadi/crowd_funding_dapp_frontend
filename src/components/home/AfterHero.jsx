import React from "react";
import Image from "/assets/static/groupOfPeople.png";
import { Campaigns } from "./Campaigns";

export const AfterHero = () => {
  return (
    <section className="bg-white ">
      <div className="py-20 px-4 md:px-10">
        <h3
          className="text-3xl md:text-5xl font-bold text-center "
          style={{ lineHeight: 1.5 }}
        >
          Join a global community embracing decentralized funding. Whether
          you're an innovator or a supporter, CrowdFund connects you securely
          and transparently to fund groundbreaking projects.
        </h3>
      </div>

      <Campaigns />

      <div className="px-10 py-10">
        <img className="w-full" src={Image} alt="" />
      </div>

      <div className="px-10 pb-10 flex md:flex-row flex-col">
        <div className="w-[500px] max-w-full">
          <h3 className="text-3xl mb-5">
            We’ll walk you through every stage, from creating your project to
            achieving success with your backers.
          </h3>
          <button className="bg-[#6059C9] h-10 w-10 rounded-full flex items-center justify-center mt-4">
            <svg
              width="21"
              height="24"
              viewBox="0 0 21 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_204_10785)">
                <path
                  opacity="0.4"
                  d="M1.12511 10.0781H14.5501L16.5001 12L14.5506 13.9219H1.12511C0.501668 13.9219 0.000106021 13.4062 0.000106021 12.7673V11.2289C-0.00193749 11.0794 0.0255783 10.9309 0.0810731 10.7921C0.136568 10.6532 0.218948 10.5267 0.323483 10.4197C0.428018 10.3128 0.552647 10.2276 0.690214 10.169C0.827781 10.1103 0.975574 10.0795 1.12511 10.0781Z"
                  fill="#FFFCF7"
                />
                <path
                  d="M11.5459 1.80557C11.5571 1.81635 11.5684 1.8276 11.5792 1.83885L20.672 11.1824C20.8836 11.401 21.0019 11.6933 21.0019 11.9976C21.0019 12.3018 20.8836 12.5942 20.672 12.8127L11.5782 22.161C11.4786 22.2653 11.3594 22.3489 11.2274 22.407C11.0954 22.4651 10.9532 22.4966 10.809 22.4996C10.6648 22.5026 10.5215 22.4772 10.3871 22.4247C10.2528 22.3723 10.1301 22.2938 10.0262 22.1938C10.0149 22.1835 10.0042 22.1723 9.99337 22.161L8.95603 21.0937C8.7427 20.871 8.62518 20.5736 8.62869 20.2653C8.63219 19.957 8.75645 19.6624 8.97478 19.4446L16.509 11.9999L8.97478 4.55619C8.75432 4.33961 8.62859 4.04455 8.62508 3.73553C8.62156 3.42651 8.74055 3.12866 8.95603 2.90713L9.99431 1.83932C10.0939 1.73505 10.213 1.65146 10.3449 1.59332C10.4769 1.53518 10.619 1.50364 10.7631 1.5005C10.9072 1.49737 11.0506 1.5227 11.1849 1.57505C11.3192 1.6274 11.4419 1.70573 11.5459 1.80557Z"
                  fill="#FFFCF7"
                />
              </g>
              <defs>
                <clipPath id="clip0_204_10785">
                  <rect width="21" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
        <div className="w-[500px] mt-5 md:mt-0 max-w-full">
          <h3 className="text-3xl mb-5">
            We’ll guide you step by step from launching your campaign to
            reaching your funding goals.
          </h3>
          <button className="bg-[#6059C9] h-10 w-10 rounded-full flex items-center justify-center mt-4">
            <svg
              width="21"
              height="24"
              viewBox="0 0 21 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_204_10785)">
                <path
                  opacity="0.4"
                  d="M1.12511 10.0781H14.5501L16.5001 12L14.5506 13.9219H1.12511C0.501668 13.9219 0.000106021 13.4062 0.000106021 12.7673V11.2289C-0.00193749 11.0794 0.0255783 10.9309 0.0810731 10.7921C0.136568 10.6532 0.218948 10.5267 0.323483 10.4197C0.428018 10.3128 0.552647 10.2276 0.690214 10.169C0.827781 10.1103 0.975574 10.0795 1.12511 10.0781Z"
                  fill="#FFFCF7"
                />
                <path
                  d="M11.5459 1.80557C11.5571 1.81635 11.5684 1.8276 11.5792 1.83885L20.672 11.1824C20.8836 11.401 21.0019 11.6933 21.0019 11.9976C21.0019 12.3018 20.8836 12.5942 20.672 12.8127L11.5782 22.161C11.4786 22.2653 11.3594 22.3489 11.2274 22.407C11.0954 22.4651 10.9532 22.4966 10.809 22.4996C10.6648 22.5026 10.5215 22.4772 10.3871 22.4247C10.2528 22.3723 10.1301 22.2938 10.0262 22.1938C10.0149 22.1835 10.0042 22.1723 9.99337 22.161L8.95603 21.0937C8.7427 20.871 8.62518 20.5736 8.62869 20.2653C8.63219 19.957 8.75645 19.6624 8.97478 19.4446L16.509 11.9999L8.97478 4.55619C8.75432 4.33961 8.62859 4.04455 8.62508 3.73553C8.62156 3.42651 8.74055 3.12866 8.95603 2.90713L9.99431 1.83932C10.0939 1.73505 10.213 1.65146 10.3449 1.59332C10.4769 1.53518 10.619 1.50364 10.7631 1.5005C10.9072 1.49737 11.0506 1.5227 11.1849 1.57505C11.3192 1.6274 11.4419 1.70573 11.5459 1.80557Z"
                  fill="#FFFCF7"
                />
              </g>
              <defs>
                <clipPath id="clip0_204_10785">
                  <rect width="21" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
