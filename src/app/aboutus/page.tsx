"use client";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "../../constant/navigation/navigation";
import Header from "../../components/header";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Include the Header Component Here */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center p-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold">About Us</h1>
          <p className="mt-4 text-gray-600">
            This is the About page. Here you can tell visitors about your
            website or business.
          </p>
          <Link
            href="/"
            className="mt-6 inline-block text-blue-500 hover:underline"
          >
            Go back to Home
          </Link>
        </div>
      </main>

      {/* Optional Footer */}
      <footer className="py-4 text-center">
        <p className="text-gray-500">
          © 2024 Your Company Name. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
