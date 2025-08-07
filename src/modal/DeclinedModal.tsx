"use client";

import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import { useRouter } from "next/navigation"; // ✅ Import router
import { Textarea } from "@/components/ui/textarea";
import { CloseIcon } from "@/icons";

const DeclinedModal = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const router = useRouter(); // ✅ Initialize router

  const handleClose = () => {
    // You can add any logout logic here (e.g., clearing tokens/localStorage)

    // Redirect to login page
    router.push("/login");
  };

  return (
    <div>
      <button
        onClick={open}
        className="bg-[var(--theme-red)] text-white px-8 py-2 rounded text-xs font-medium"
      >
        Declined
      </button>

      <Modal
        opened={opened}
        onClose={close}
        withCloseButton={false}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
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
          className="text-white flex flex-col justify-center p-8 w-full min-h-[260px] overflow-hidden"
          style={{
            background: `
              radial-gradient(135.33% 135.33% at 5.71% -44.13%, #303337 0%, rgba(26, 26, 26, 0.27) 100%),
              linear-gradient(0deg, #1E2229, #1E2229),
              linear-gradient(180deg, #1D1D1D 0%, #292929 100%),
              linear-gradient(180deg, #073E3A 0%, #052725 100%),
              linear-gradient(180deg, #1D1D1D 0%, #292929 100%)
            `,
            border: "2px solid #161616",
            boxShadow: "0px 0px 20px 0px #00000066",
          }}
        >
          <div className="flex justify-end mb-2">
            <button
              onClick={() => close()}
              className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white  p-1 transition-colors duration-200 focus:outline-none "
              aria-label="Close"
            >
              <CloseIcon />
            </button>
          </div>
          <div className="space-y-8 w-full max-w-[500px] mx-auto">
            <h2 className="text-[22px] text-center font-semibold leading-[100%] tracking-[0%]">
              KYC Unsuccessful.
            </h2>
            <p className="text-base font-normal text-center leading-[27px] tracking-[0%]">
              Please reach out to us explaining the situation and we will <br />
              respond as soon as possible to resolve the issue
            </p>

            <Textarea placeholder="Message" />

            <button className="w-full px-8 py-[4px] text-[8px] text-white bg-[var(--theme-color)] hover:bg-[var(--theme-hover-color)] rounded-[5px] cursor-pointer">
              Submit
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DeclinedModal;
