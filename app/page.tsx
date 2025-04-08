"use client";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import Logo from "/public/images/monokrom.svg";
import Profile from "@/components/profile_card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Sections */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center relative bg-white px-4">
        {/* Background square design */}
        <div className="absolute right-[28%] top-[47%] translate-x-1/2 -translate-y-1/2 z-0">
          {/* Large Square */}
          <div className="w-[150px] h-[150px] bg-gray-200 relative">
            {/* Small Square */}
            <div className="absolute -top-4 -right-4 w-[40px] h-[40px] bg-gray-300"></div>
          </div>
        </div>

        {/* Text content */}
        <h1 className="text-3xl md:text-5xl font-semibold text-black z-10">
          Your Business, Digitalized.
        </h1>
        <p className="text-sm md:text-base text-gray-600 mt-2 z-10">
          The best place to begin the digital existence of your business.
        </p>

        {/* Button */}
        <button className="mt-8 px-6 py-2 bg-gray-200 rounded-full text-sm font-semibold hover:bg-gray-300 transition z-10">
          Get Started
        </button>
      </section>

      {/* Our Clients Sections */}
      <section className="flex flex-col items-center justify-center min-h-screen bg-white">
        <h1 className="text-4xl font-bold mb-4">Our Clients.</h1>
        <p className="text-gray-600 text-lg mb-8">
          The best place to begin the digital existence of your business.
        </p>
        <div className="flex items-center flex-col gap-6 justify-center sm:flex-row">
          <Image
            className="light:invert"
            src={Logo}
            alt="MONOKROM logo"
            width={256}
            height={61}
          />
          <Image
            className="light:invert"
            src={Logo}
            alt="MONOKROM logo"
            width={256}
            height={61}
          />
          <Image
            className="light:invert"
            src={Logo}
            alt="MONOKROM logo"
            width={256}
            height={61}
          />
        </div>
      </section>

      {/* Testimonials Sections */}
      <section className="flex flex-col items-center justify-center min-h-screen bg-white">
        <h1 className="text-4xl font-bold mb-4">Testimonials.</h1>
        <p className="text-gray-600 text-lg mb-8">
          Read what others have to say.
        </p>
        <div className="py-20 flex items-center flex-col gap-6 justify-center sm:flex-row">
          <Profile
            imageSrc="/images/36.jpg" // replace with your image URL
            quote="Fully committed! We take responsibility in mentoring and fulfilling our commitments."
            author="Mr. Abdurrahman"
          />
          <Profile
            imageSrc="/images/36.jpg" // replace with your image URL
            quote="Fully committed! We take responsibility in mentoring and fulfilling our commitments."
            author="Mr. Abdurrahman"
          />
          <Profile
            imageSrc="/images/36.jpg" // replace with your image URL
            quote="Fully committed! We take responsibility in mentoring and fulfilling our commitments."
            author="Mr. Abdurrahman"
          />
        </div>
      </section>
    </main>
  );
}
