import SignoutModal from '@/modal/SignoutModal';

export default function Navbar() {
  return (
    <nav className="h-16 shadow flex items-center bg-black text-white px-6">
      <div className="w-full flex items-center justify-between">
        <h1 className="font-semibold text-lg">My Dashboard</h1>
        <SignoutModal />
      </div>
    </nav>
  );
}
