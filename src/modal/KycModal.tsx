import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import { CloseIcon } from "@/icons";
import { KycForm } from "@/form/KycForm";

const KycModal = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div>
      <button
        onClick={open}
        className="w-[123.83px] h-[40px] bg-[var(--theme-color)] hover:bg-[var(--theme-hover-color)] text-white px-10 py-2 rounded text-xs font-medium"
      >
        KYC
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
        size="xl"
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
          <div className="space-y-10">
            <h2 className="text-[22px] text-center font-semibold leading-[100%] tracking-[0%]">
              Please fill in the following KYC requirements
            </h2>

            <KycForm />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default KycModal;
