"use client";
import React from "react";

interface ServiceCardProps {
  title: string;
  body: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, body }) => {
  return (
    <div className="flex items-center flex-col justify-center sm:flex-row">
      <div className="bg-[#D9D9D999] text-center shadow-md max-w-[400px] rounded-[5px] m-5 p-4">
        <div className="">
          <p className="text-lg font-bold mb-4">{title}</p>
          <h4 className="text-sm font-normal">{body}</h4>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
