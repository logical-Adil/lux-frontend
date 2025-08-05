import Image, { StaticImageData } from 'next/image';

interface UserProfileProps {
  name: string;
  avatarUrl: StaticImageData;
}

export default function UserProfile({ name, avatarUrl }: UserProfileProps) {
  return (
    <div className="flex items-center space-x-3">
      <Image src={avatarUrl} alt={name} width={40} height={40} className="rounded-full object-cover" />
      <span className="font-medium text-white">{name}</span>
    </div>
  );
}
