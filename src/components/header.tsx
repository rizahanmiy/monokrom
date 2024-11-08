"use client";
import Link from "next/link";
import Image from "next/image"; // Import the Image component
import { Navigation } from "../domain/services/navigation";
import Logo from "/public/images/monokrom.png";

const Header: React.FC = () => {
  return (
    <header className="text-black py-10">
      <div className="container mx-auto flex justify-between items-center px-4 sm:flex-row flex-col gap-6">
        {/* Make the logo clickable */}
        <Link href="/" className="flex items-center">
          <Image
            className="light:invert"
            src={Logo}
            alt="MONOKROM logo"
            width={256}
            height={61}
          />
        </Link>
        <nav>
          <ul className="flex space-x-6">
            {Navigation.items.map((item) => (
              <li key={item.href}>
                {" "}
                {/* Wrap link in a list item */}
                <Link
                  href={item.href}
                  className={` size-20 text-neutral-700 hover:text-neutral-900 transition duration-300`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
