"use client";
import Image from "next/image";
import { Twitter, Mail, Instagram } from "lucide-react";
import Link from "next/link";
import Header from "../../src/components/header";
import ServiceCard from "@/components/services_card";
import { Card } from "../../src/components/card";
// import Logo from "../../public/images/36.jpg";

const socials = [
  {
    icon: <Instagram size={20} />,
    href: "https://twitter.com/chronark_",
    label: "Twitter",
    handle: "@chronark_",
  },
  {
    icon: <Twitter size={20} />,
    href: "mailto:dev@chronark.com",
    label: "Email",
    handle: "dev@chronark.com",
  },
  {
    icon: <Mail size={20} />,
    href: "https://github.com/chronark",
    label: "Github",
    handle: "chronark",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col font-jost">
      <Header />
      <div className="grid grid-flow-col grid-cols-3 bg-cyan-200 md:grid-cols-5">
        <div className="col-span-2 col-start-1 bg-cyan-950 m-2"> satu </div>
        <div className="bg-cyan-600 gap-2 m-2"> satu </div>
        <div className="grid grid-cols-subgrid col-span-1 col-start-2 md:col-span-3 md:col-start-2 lg">
          <div className="col-span-2 col-start-1 bg-cyan-950 m-2"> satu </div>
          <div className="bg-cyan-600 gap-2 m-2"> satu </div>
          <div className="bg-cyan-600 gap-2 m-2"> dua </div>
          <div className="bg-cyan-600 gap-2 m-2"> tiga </div>
          <div className="bg-cyan-600 gap-2 m-2"> empat </div>
          <div className="bg-cyan-600 gap-2 m-2"> enam </div>
        </div>
        <div className="bg-cyan-600 gap-2 col-start-2 col-span-1 m-2 md:col-span-3 md:col-start-2 md:grid md:grid-cols-3">
          HALOHALOHALOHALOHALOHALOHALOHALOHALOHALOHALOHALOHALOHALOHALOHALOHALOHALOHALOHALOHALOHALOHALOHALOHALOHALOHALOHALOHALOHALO
          <div className="bg-cyan-800 gap-2 m-2"> lima satu </div>
          <div className="bg-cyan-800 gap-2 m-2"> lima dua </div>
          <div className="bg-cyan-800 gap-2 m-2"> lima tiga </div>
        </div>
        <div className="bg-cyan-600 gap-2 col-start-2 col-span-1 m-2 md:col-span-3 md:col-start-2 md:grid md:grid-cols-3">
          <div className="bg-cyan-100 gap-2 m-2 md:col-start-3">enam tiga</div>
          <div className="bg-cyan-800 gap-2 m-2 md:col-start-1 md:row-start-1">
            enam satu
          </div>
          <div className="bg-cyan-800 gap-2 m-2 md:col-start-2 md:row-start-1">
            enam dua
          </div>
        </div>
        <div className="relative col-start-2 col-span-1 m-2 md:col-span-3 md:col-start-2 md:grid md:grid-cols-3">
          {/* Background Image Div */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('../../public/images/36.jpg')`, // Assuming Logo is a valid URL or path
            }}
          ></div>

          {/* Content over the Background Image */}
          <div className="relative z-10 flex flex-col p-2">
            <div className="bg-cyan-100 gap-2 m-2 md:col-start-3">
              tujuh tiga
            </div>
            <div className="bg-cyan-800 gap-2 m-2 md:col-start-1 md:row-start-1">
              tujuh satu
            </div>
            <div className="bg-cyan-800 gap-2 m-2 md:col-start-2 md:row-start-1">
              tujuh dua
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex grid-cols-3 m-5">
        <div className="justify-center text-left m-5">
          <h1 className="font-normal text-4xl font-jost">Our</h1>
          <h1 className="font-bold text-4xl mb-4 font-jost">Services</h1>
          <p className="font-normal text-sm">
            Let us know which one suits you best!
          </p>
        </div>
        <div className="justify-center text-left m-5">
          <h1 className="font-normal text-4xl font-jost">Our</h1>
          <h1 className="font-bold text-4xl mb-4 font-jost">Services</h1>
          <p className="font-normal text-sm">
            Let us know which one suits you best!
          </p>
        </div>
        <div className="justify-center text-left m-5">
          <h1 className="font-normal text-4xl font-jost">Our</h1>
          <h1 className="font-bold text-4xl mb-4 font-jost">Services</h1>
          <p className="font-normal text-sm">
            Let us know which one suits you best!
          </p>
        </div>
                <div className="justify-center text-left m-5">
          <h1 className="font-normal text-4xl font-jost">Our</h1>
          <h1 className="font-bold text-4xl mb-4 font-jost">Services</h1>
          <p className="font-normal text-sm">
            Let us know which one suits you best!
          </p>
        </div>
      </div>
      {socials.map((s) => (
        <Card>
          <Link
            href={s.href}
            target="_blank"
            className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
          >
            <span
              className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
              aria-hidden="true"
            />
            <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
              {s.icon}
            </span>{" "}
            <div className="z-10 flex flex-col items-center">
              <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                {s.handle}
              </span>
              <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                {s.label}
              </span>
            </div>
          </Link>
        </Card>
      ))} */}
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
