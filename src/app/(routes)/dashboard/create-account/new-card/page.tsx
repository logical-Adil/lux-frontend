import React from "react";
import Image from "next/image";
import creditCardImage from "@/../public/creditcard-image.png";
import checkImage from "@/../public/check-image.png";
import arrowImage from "@/../public/arrow-image.png";

const featureList = [
  { id: 1, text: "Set up cost 5000USDT", image: checkImage },
  { id: 2, text: "Unlimited upload limit per month", image: checkImage },
  { id: 3, text: "4% upload fee", image: checkImage },
  { id: 4, text: "0.75% ATM withdrawal fee", image: checkImage },
  { id: 5, text: "Limited availability", image: arrowImage },
];

const NewCard = () => {
  return (
    <div className="p-12 min-h-full">
      <div
        className="rounded-sm p-10"
        style={{
          background: `
        radial-gradient(135.33% 135.33% at 5.71% -44.13%, #303337 0%, rgba(26, 26, 26, 0.27) 100%),
        linear-gradient(0deg, #1E2229, #1E2229),
        linear-gradient(180deg, #1D1D1D 0%, #292929 100%),
        linear-gradient(180deg, #073E3A 0%, #052725 100%),
        linear-gradient(180deg, #1D1D1D 0%, #292929 100%)`,
          boxShadow: "0px 0px 20px 0px #00000066",
        }}
      >
        <div className="flex flex-col md:flex-row justify-between gap-6 text-white">
          {/* Left Column - Card Image */}
          {/* <div className="flex-1 border border-red-500  flex flex-col items-center justify-center gap-10"> */}
          <div className="flex-1">
            <div className=" mx-auto flex flex-col gap-25 max-w-[520px]">
              <h2 className="text-[35px] font-light leading-[100%] tracking-[-2.5%] z-10">
                Your New{" "}
                <span className="font-semibold">Lux Metallic Card</span>
              </h2>

              {/* Image Container with aspect ratio */}
              <div className="w-full h-[80%] overflow-hidden">
                <Image src={creditCardImage} alt="card-image" className="" />
              </div>
            </div>
          </div>

          {/* Right Column - Specifications */}
          <div className=" lg:w-[30%] flex flex-col justify-center gap-6">
            <h3 className="text-xl font-semibold mb-6">Card Specifications</h3>

            <ul className="space-y-4 text-right w-full max-w-[300px]">
              {featureList.map((item, index) => (
                <li
                  key={item.id}
                  className={`flex items-center gap-3 justify-start ${
                    featureList.length - 1 === index && "mt-8"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt="check-icon"
                    className="w-4 h-4"
                  />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12">
              <button className="px-8 py-[2px] text-xs text-white bg-[var(--theme-color)] hover:bg-[var(--theme-hover-color)] rounded-xs font-semibold cursor-pointer">
                Select Card
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCard;
