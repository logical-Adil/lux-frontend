'use client';

import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { usePathname } from 'next/navigation';
import { Logo } from './logo';
import UserProfile from './UserProfile';

import profileImage from '../../public/profile.png';
import overviewImage from '../../public/Overview.png';
import cardImage from '../../public/Card.png';
import transactionsImage from '../../public/Transaction.png';

import { IoGridOutline } from 'react-icons/io5';
import { IoCardOutline } from 'react-icons/io5';
import { GrTransaction } from 'react-icons/gr';
import { IconType } from 'react-icons';

type NavLink = {
  href: string;
  label: string;
  icon?: IconType;
};

export default function Sidebar() {
  const pathname = usePathname();

  const links: NavLink[] = [
    { href: '/dashboard/overview', label: 'Overview', icon: IoGridOutline },
    { href: '/dashboard/card-info', label: 'Card Info', icon: IoCardOutline },
    { href: '/dashboard/transactions', label: 'Transactions', icon: GrTransaction },
    { href: '/dashboard/create-account', label: 'Create Account' },
  ];

  // Normalize pathname and fallback to first tab
  const activePath = links.find((link) => pathname === link.href)?.href || links[0].href;

  // Determine active image based on current tab or default
  const getActiveImage = (): StaticImageData | undefined => {
    if (activePath === '/dashboard/overview') return overviewImage;
    if (activePath === '/dashboard/card-info') return cardImage;
    if (activePath === '/dashboard/transactions') return transactionsImage;
  };

  const activeImage = getActiveImage();

  return (
    <aside className="w-60 h-screen bg-gradient-to-b from-[#0E0E0E] to-[#2C2C2C] text-white p-4 flex flex-col">
      {/* Logo */}
      <div className="py-9 px-[42px]">
        <Logo />
      </div>

      {/* Sidebar NavLinks */}
      <div className="flex flex-col justify-between flex-1">
        {/* Top Links with Icons */}
        <ul className="space-y-2 ">
          {links.slice(0, 3).map(({ href, label, icon: Icon }) => (
            <li key={href}>
              <Link href={href} className={`flex items-center gap-2 p-2  pl-5 rounded ${activePath === href ? 'bg-[#B48450] font-semibold' : 'hover:bg-[#9a6f3c]'}`}>
                {Icon && <Icon size={20} />}
                <span>{label}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Bottom Section */}
        <div className="space-y-2">
          {/* ✅ Image for active tab */}
          {activeImage && (
            <div className="px-2">
              <Image src={activeImage} alt="Active Tab Image" className="rounded" width={200} height={100} priority />
            </div>
          )}

          {/* Remaining link(s) without icons */}
          <ul className="space-y-2">
            {links.slice(3).map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className={`block p-2 text-center rounded bg-[#B48450] font-semibold hover:bg-[#9a6f3c]`}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* User Profile */}
          <UserProfile name="John Doe" avatarUrl={profileImage} />
        </div>
      </div>
    </aside>
  );
}
