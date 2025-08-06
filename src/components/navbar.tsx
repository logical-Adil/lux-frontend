import SignoutModal from '@/modal/SignoutModal';
import styles from './component.module.css';

export default function Navbar() {
  return (
    <nav className={`${styles.gradientBackground} h-16 shadow  border-b border-[var(--border-one)] flex items-center text-white px-6`}>
      <div className="w-full flex items-center justify-between">
        <h1 className="font-semibold text-lg">My Dashboard</h1>
        <SignoutModal />
      </div>
    </nav>
  );
}
