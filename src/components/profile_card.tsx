import Image from "next/image";
import React from "react";

interface QuoteCardProps {
  imageSrc: string;
  quote: string;
  author: string;
}

const ProfileCard: React.FC<QuoteCardProps> = ({ imageSrc, quote, author }) => {
  return (
    <div className="bg-gray-200 w-[260px] pt-12 pb-6 px-4 text-center relative">
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md bg-white">
          <Image src={imageSrc} alt={author} width={80} height={80} />
        </div>
      </div>
      <p className="text-sm italic mb-4">{quote}</p>
      <p className="font-semibold text-sm">{author}</p>
    </div>
  );
};

export default ProfileCard;
