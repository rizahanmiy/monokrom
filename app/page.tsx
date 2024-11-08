"use client";
import Image from "next/image";
import Link from "next/link";
import Header from "../src/components/header";
import Logo from "/public/images/monokrom.png";
import Profile from "../src/components/profile_card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        <h1 className="text-4xl font-bold mb-4">Your Business, Digitalized.</h1>
        <p className="text-gray-600 text-lg mb-8">
          The best place to begin the digital existence of your business.
        </p>
        <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-300">
          Get Started
        </button>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
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
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        <h1 className="text-4xl font-bold mb-4">Testimonials.</h1>
        <p className="text-gray-600 text-lg mb-8">
          Read what others have to say.
        </p>
        <div className="flex items-center flex-col gap-6 justify-center sm:flex-row">
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
      </div>
    </main>
  );
}
