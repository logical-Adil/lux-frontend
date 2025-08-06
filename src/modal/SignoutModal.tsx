'use client';

import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';
import { useRouter } from 'next/navigation'; // ✅ Import router

const SignoutModal = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const router = useRouter(); // ✅ Initialize router

  const handleSigout = () => {
    // You can add any logout logic here (e.g., clearing tokens/localStorage)

    // Redirect to login page
    router.push('/login');
  };

  return (
    <div>
      <button onClick={open} className="px-8 py-[2px] text-xs text-white bg-[var(--theme-color)] hover:bg-[var(--theme-hover-color)] rounded-xs font-semibold cursor-pointer">
        Sign out
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
          transition: 'fade',
          duration: 300,
          timingFunction: 'linear',
        }}
        padding={0}
        radius="md"
        size="sm"
        centered
      >
        <div
          className="mx-auto text-white flex flex-col justify-center p-12 w-full min-h-[180px]"
          style={{
            background: `
              radial-gradient(135.33% 135.33% at 5.71% -44.13%, #303337 0%, rgba(26, 26, 26, 0.27) 100%),
              linear-gradient(0deg, #1E2229, #1E2229),
              linear-gradient(180deg, #1D1D1D 0%, #292929 100%),
              linear-gradient(180deg, #073E3A 0%, #052725 100%),
              linear-gradient(180deg, #1D1D1D 0%, #292929 100%)
            `,
            border: '2px solid #161616',
            boxShadow: '0px 0px 20px 0px #00000066',
          }}
        >
          <div className="flex flex-col items-center space-y-10">
            <h2 className="text-sm">Are you sure you want to sign out?</h2>
            <button
              onClick={handleSigout} // ✅ Call handleSigout here
              className="w-full px-8 py-[4px] text-[8px] text-white bg-[var(--theme-color)] hover:bg-[var(--theme-hover-color)] rounded-xs cursor-pointer"
            >
              Sign out
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SignoutModal;
