"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { Modal, Select } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";
import QRCodeImage from "@/../public/Group.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Copy } from "lucide-react";
import { CloseIcon } from "@/icons";

const SelectCardModal = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [currency, setCurrency] = useState<string | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [api, setApi] = useState<EmblaCarouselType | null>(null);
  const [loading, setLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false); // ✅ new success state
  const router = useRouter();

  useEffect(() => {
    if (emblaApi) {
      setApi(emblaApi);
      emblaApi.on("select", () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      });
      setSelectedIndex(emblaApi.selectedScrollSnap());
    }
  }, [emblaApi]);

  const payForCard = () => {
    if (!currency) return alert("Please select a currency");
    api?.scrollTo(1);
  };

  const handleConfirm = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setPaymentSuccess(true); // ✅ trigger success message
    }, 1500);
  };

  const handleDone = () => {
    setPaymentSuccess(false);
    close();
    api?.scrollTo(0);
    setCurrency(null);
    router.push("/dashboard/create-account");
  };
  const handleClose = () => {
    close();
  };

  const modalStyle = {
    background: `
      radial-gradient(135.33% 135.33% at 5.71% -44.13%, #303337 0%, rgba(26, 26, 26, 0.27) 100%),
      linear-gradient(0deg, #1E2229, #1E2229),
      linear-gradient(180deg, #1D1D1D 0%, #292929 100%),
      linear-gradient(180deg, #073E3A 0%, #052725 100%),
      linear-gradient(180deg, #1D1D1D 0%, #292929 100%)
    `,
    border: "2px solid #161616",
    boxShadow: "0px 0px 20px 0px #00000066",
  };

  return (
    <div>
      <button
        onClick={() => {
          open();
          setTimeout(() => api?.scrollTo(0), 10);
        }}
        className="px-8 py-[2px] text-xs text-white bg-[var(--theme-color)] hover:bg-[var(--theme-hover-color)] rounded-[5px] font-semibold cursor-pointer"
      >
        Select New Card
      </button>

      {/* Main Modal */}
      <Modal
        opened={opened}
        onClose={close}
        withCloseButton={false}
        overlayProps={{ backgroundOpacity: 0.55, blur: 3 }}
        transitionProps={{
          transition: "fade",
          duration: 300,
          timingFunction: "linear",
        }}
        padding={0}
        radius="md"
        size="lg"
        centered
      >
        <div
          className="text-white flex flex-col justify-center p-12 w-full  min-h-[260px] overflow-hidden"
          style={modalStyle}
        >
          {paymentSuccess ? (
            // ✅ Success Content
            <div className="flex flex-col items-center space-y-10 text-center">
              <h2 className="text-[22px] text-center font-semibold leading-[100%] tracking-[0%]">
                Transaction Successful
              </h2>
              <p className="text-base font-normal text-center leading-[27px] tracking-[0%]">
                Your payment for Card A has been successful. Now please <br />{" "}
                complete KYC to complete the order
                <strong>{currency?.toUpperCase()}</strong>.
              </p>
              <p className="text-base font-normal text-center leading-[27px] tracking-[0%]">
                Thank you
              </p>
              <button
                onClick={handleDone}
                className="w-full py-[6px] text-[10px] text-white bg-[var(--theme-color)] hover:bg-[var(--theme-hover-color)] rounded-[5px] cursor-pointer"
              >
                Return to card accounts
              </button>
            </div>
          ) : (
            // ✅ Carousel Slides
            <>
              <div className="flex justify-end mb-2">
                <button
                  onClick={handleClose}
                  className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white p-1 transition-colors duration-200 focus:outline-none "
                  aria-label="Close"
                >
                  <CloseIcon />
                </button>
              </div>
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                  {/* Slide 1 */}
                  <div className="flex-[0_0_100%] flex flex-col space-y-10">
                    <h2 className="text-[22px] text-center font-semibold leading-[100%] tracking-[0%]">
                      Select Payment Currency
                    </h2>
                    <p className="text-base font-normal text-center leading-[27px] tracking-[0%]">
                      Please select the crypto currency that you would <br />{" "}
                      like to pay with
                    </p>

                    <Select
                      // label="Crypto Currency"
                      placeholder="Please Select a crypto asset"
                      data={[
                        { value: "usdt", label: "USDT" },
                        { value: "eth", label: "Ethereum (ETH)" },
                        { value: "btc", label: "Bitcoin (BTC)" },
                      ]}
                      value={currency}
                      onChange={setCurrency}
                      mx={"lg"}
                      maxDropdownHeight={200}
                      comboboxProps={{
                        transitionProps: { transition: "pop", duration: 200 },
                        dropdownPadding: 5,
                        size: "sm",
                      }}
                      variant="default"
                      size="md"
                      checkIconPosition="right"
                      clearable
                      // classNames={{
                      //   label: "text-white text-xs mb-2",
                      //   input: "bg-[#1E2229] text-white border-[#303337]",
                      //   dropdown: "bg-[#1E2229] text-white",
                      // }}
                      // styles={{ input: { fontSize: "12px" } }}
                    />

                    <button
                      onClick={payForCard}
                      className="w-full max-w-[92%] mx-auto py-[6px] text-[10px] text-white bg-[var(--theme-color)] hover:bg-[var(--theme-hover-color)] rounded-[5px] cursor-pointer"
                    >
                      Pay For Card
                    </button>
                  </div>

                  {/* Slide 2 */}
                  <div className="flex-[0_0_100%] flex flex-col items-center space-y-10">
                    <h2 className="text-[22px] text-center font-semibold leading-[100%] tracking-[0%]">
                      Confirm Transaction
                    </h2>
                    <p className="text-base font-normal text-center leading-[27px] tracking-[0%]">
                      Send only BTC to this address. Sending any other <br />{" "}
                      coin may result in permanent loss.
                    </p>

                    <div className="flex items-center space-x-6">
                      <Image
                        width={83}
                        height={83}
                        alt="QRCodeImage"
                        src={QRCodeImage}
                      />
                      <div className="">
                        <div className="flex justify-between items-center gap-4">
                          <div className="space-y-4 text-base font-normal leading-[100%] tracking-[-0.7%]">
                            <p>
                              <span className="font-semibold">Network:</span>{" "}
                              BTC
                            </p>
                            <p className="break-all">
                              <span className="font-semibold">
                                Wallet Address:
                              </span>{" "}
                              0x798789797687657576
                            </p>
                          </div>

                          <button className="cursor-pointer self-end">
                            <Copy />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="flex w-full px-4">
                      <button
                        onClick={handleConfirm}
                        disabled={loading}
                        className="w-full mx-auto py-[6px] text-[10px] text-white bg-[var(--theme-color)] hover:bg-[var(--theme-hover-color)] rounded-[5px] cursor-pointer"
                      >
                        {loading ? "Confirming..." : "Confirm Payment"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Clickable dots */}
              <div className="mt-6 flex justify-center gap-2">
                {[0, 1].map((index) => (
                  <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    className={`w-2.5 h-2.5 cursor-pointer rounded-full transition-colors ${
                      selectedIndex === index
                        ? "bg-[var(--theme-color)]"
                        : "bg-gray-600"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default SelectCardModal;
