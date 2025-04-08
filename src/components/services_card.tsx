"use client";
import React from "react";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  body: string;
  icon?: string;
}
// Use icon if necessary
const ServiceCard: React.FC<ServiceCardProps> = ({ title, body, icon }) => {
  return (
    <div className="flex items-center flex-col justify-center sm:flex-row">
      <div className="bg-[#D9D9D999] text-center shadow-md max-w-[400px] rounded-[5px] m-5 p-4">
        <div>
          {icon && (
            <Image
              className="light:invert"
              src={icon}
              alt="Service icon"
              width={256}
              height={61}
            />
          )}
          <p className="text-lg font-bold mb-4">{title}</p>
          <h4 className="text-sm font-normal">{body}</h4>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
