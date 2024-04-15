import Image from "next/image";
import React from "react";

export default function UserAvatar({ image }: { image?: string }) {
  return (
    <div>
      {image ? (
        <Image src={image} width={40} height={40} alt="avatar" />
      ) : (
        <Image src="/avatar.png" width={40} height={40} alt="avatar" />
      )}
    </div>
  );
}
