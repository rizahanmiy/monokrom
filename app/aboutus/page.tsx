"use client";
import Image from "next/image";
import Link from "next/link";
import Header from "../../src/components/header";
import ServiceCard from "@/components/services_card";

export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col font-jost">
      <Header />
      <div className="flex items-center flex-col gap-6 justify-center sm:flex-row min-h-96">
        <div className="col-span-2 justify-center text-left m-5">
          <h1 className="font-bold text-4xl mb-4 font-jost">About Us</h1>
          <p className="font-normal text-sm">
            We are a digital marketing specialist dedicated to providing
            tailored strategies to help you grow and scale your products. Our
            services range from social media marketing, website developing, to
            content creation. We understand the unique challenges faced by our
            clients and are committed to delivering personalized solutions. Our
            goal is to enhance your online presence, increase brand visibility,
            and ultimately boost your sales and revenue.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center min-h-96">
        <h1 className="text-4xl font-bold mt-4">Our Value</h1>
        <ServiceCard
          title="Vision"
          body="To be the foremost digital marketing specialist to help our client achieve remarkable growth and market success through our strategies."
        />
        <ServiceCard
          title="Mission"
          body="To accelerate the growth of our clients by delivering customized digital marketing solutions that enhance their online presence and drive sales."
        />
      </div>
    </div>
  );
}
