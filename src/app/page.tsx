import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/login');

  // Considering there will be a home page in future
  return null;
}
