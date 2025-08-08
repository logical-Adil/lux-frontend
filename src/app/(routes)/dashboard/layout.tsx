import Navbar from '@/components/navbar';
import Sidebar from '@/components/sidebar';
import type { ReactNode } from 'react';
import BalanceBar from '../login/_components/BalanceBar';
import Link from 'next/link';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="flex flex-col">
        {/* Sidebar + Main */}
        <div className="flex h-screen overflow-hidden">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          {/* <main className="flex-1 overflow-y-auto bg-gray-50">
            <Navbar />
            <BalanceBar />
            {children}
          </main> */}
          <main className="flex-1 overflow-y-auto bg-gray-50 h-screen">
            <div className="sticky top-0 z-50 bg-gray-50">
              <Navbar />
            </div>
            <div className="sticky top-[56px] z-40 bg-gray-50">
              <BalanceBar />
            </div>
            {/* Code Is temporary please un-comment it
            <div className="w-[400px] flex justify-center gap-1">
              <Link
                href={''}
                className={`flex items-center gap-2 p-2  pl-5 text-[var(--text-color)] hover:text-white rounded ${'bg-[var(--theme-color)] hover:bg-[var(--theme-hover-color)] text-white font-semibold'}`}
              >
                Overview
              </Link>
              <Link
                href={''}
                className={`flex items-center gap-2 p-2  pl-5 text-[var(--text-color)] hover:text-white rounded ${'bg-[var(--theme-color)] hover:bg-[var(--theme-hover-color)] text-white font-semibold'}`}
              >
                Card Info
              </Link>
              <Link
                href={''}
                className={`flex items-center gap-2 p-2  pl-5 text-[var(--text-color)] hover:text-white rounded ${'bg-[var(--theme-color)] hover:bg-[var(--theme-hover-color)] text-white font-semibold'}`}
              >
                Transactions
              </Link>
            </div> */}
            <div className="p-4">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
}
