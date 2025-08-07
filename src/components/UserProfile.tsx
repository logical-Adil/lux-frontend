import Image, { StaticImageData } from "next/image";

interface UserProfileProps {
  name: string;
  avatarUrl: StaticImageData;
}

export default function UserProfile({ name, avatarUrl }: UserProfileProps) {
  return (
    <div className="flex items-center space-x-3">
      <Image
        src={avatarUrl}
        alt={name}
        width={48}
        height={48}
        className="rounded-full object-cover"
      />
      <div className="flex flex-col gap-1">
        <span className="text-[22px] font-semibold leading-[100%] tracking-[0%]">
          {name}
        </span>
        <span className="text-lg font-normal leading-[100%] tracking-[0%] text-[var(--text-color)]">
          Total: 0.000
        </span>
      </div>
    </div>
  );
}
