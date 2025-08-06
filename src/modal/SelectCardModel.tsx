'use client';

import { useState, useEffect } from 'react';
import { Modal, Select } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react';
import QRCodeImage from '@/../public/Group.png';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const SelectCardModel = () => {
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
      emblaApi.on('select', () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      });
      setSelectedIndex(emblaApi.selectedScrollSnap());
    }
  }, [emblaApi]);

  const payForCard = () => {
    if (!currency) return alert('Please select a currency');
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
    router.push('/dashboard/create-account');
  };

  const modalStyle = {
    background: `
      radial-gradient(135.33% 135.33% at 5.71% -44.13%, #303337 0%, rgba(26, 26, 26, 0.27) 100%),
      linear-gradient(0deg, #1E2229, #1E2229),
      linear-gradient(180deg, #1D1D1D 0%, #292929 100%),
      linear-gradient(180deg, #073E3A 0%, #052725 100%),
      linear-gradient(180deg, #1D1D1D 0%, #292929 100%)
    `,
    border: '2px solid #161616',
    boxShadow: '0px 0px 20px 0px #00000066',
  };

  return (
    <div>
      <button
        onClick={() => {
          open();
          setTimeout(() => api?.scrollTo(0), 10);
        }}
        className="px-8 py-[2px] text-xs text-white bg-[var(--theme-color)] hover:bg-[var(--theme-hover-color)] rounded-xs font-semibold cursor-pointer"
      >
        Select New Card
      </button>

      {/* Main Modal */}
      <Modal
        opened={opened}
        onClose={close}
        withCloseButton={false}
        overlayProps={{ backgroundOpacity: 0.55, blur: 3 }}
        transitionProps={{ transition: 'fade', duration: 300, timingFunction: 'linear' }}
        padding={0}
        radius="md"
        size="lg"
        centered
      >
        <div className="mx-auto text-white flex flex-col justify-center p-12 w-full min-h-[260px] overflow-hidden" style={modalStyle}>
          {paymentSuccess ? (
            // ✅ Success Content
            <div className="flex flex-col items-center space-y-6 text-center">
              <h2 className="text-sm text-green-400">Transaction Successful</h2>
              <p className="text-xs">
                Your card has been paid successfully using <strong>{currency?.toUpperCase()}</strong>.
              </p>
              <button onClick={handleDone} className="w-full px-6 py-2 text-[10px] text-white bg-blue-600 hover:bg-blue-700 rounded cursor-pointer">
                Close
              </button>
            </div>
          ) : (
            // ✅ Carousel Slides
            <>
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                  {/* Slide 1 */}
                  <div className="flex-[0_0_100%] flex flex-col items-center space-y-10">
                    <h2 className="text-sm">Select Payment Currency</h2>
                    <p className="text-xs text-center">Please select the crypto currency that you would like to pay with</p>

                    <Select
                      label="Crypto Currency"
                      placeholder="Select currency"
                      data={[
                        { value: 'usdt', label: 'USDT' },
                        { value: 'eth', label: 'Ethereum (ETH)' },
                        { value: 'btc', label: 'Bitcoin (BTC)' },
                      ]}
                      value={currency}
                      onChange={setCurrency}
                      classNames={{
                        label: 'text-white text-xs mb-2',
                        input: 'bg-[#1E2229] text-white border-[#303337]',
                        dropdown: 'bg-[#1E2229] text-white',
                      }}
                      styles={{ input: { fontSize: '12px' } }}
                    />

                    <button onClick={payForCard} className="w-full px-8 py-[4px] text-[10px] text-white bg-[var(--theme-color)] hover:bg-[var(--theme-hover-color)] rounded-xs cursor-pointer">
                      Pay For Card
                    </button>
                  </div>

                  {/* Slide 2 */}
                  <div className="flex-[0_0_100%] flex flex-col items-center space-y-6">
                    <h2 className="text-lg font-medium">Confirm Transaction</h2>
                    <p className="text-xs text-center text-gray-400 max-w-xs">Send only BTC to this address. Sending any other coin may result in permanent loss.</p>

                    <div className="flex items-center space-x-4">
                      <Image width={40} height={40} alt="QRCodeImage" src={QRCodeImage} />
                      <div className="text-xs space-y-1">
                        <p>
                          <span className="font-semibold">Network:</span> BTC
                        </p>
                        <p className="break-all">
                          <span className="font-semibold">Wallet Address:</span> 0x798789797687657576
                        </p>
                      </div>
                    </div>

                    <div className="flex w-full px-4">
                      <button onClick={handleConfirm} disabled={loading} className="w-full px-6 py-2 text-[10px] text-white bg-green-600 hover:bg-green-700 rounded cursor-pointer">
                        {loading ? 'Confirming...' : 'Confirm Payment'}
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
                    className={`w-2.5 h-2.5 cursor-pointer rounded-full transition-colors ${selectedIndex === index ? 'bg-yellow-600' : 'bg-gray-600'}`}
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

export default SelectCardModel;
