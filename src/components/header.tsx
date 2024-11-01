// components/Header.tsx

import Link from "next/link";
import Image from "next/image"; // Import the Image component
import { Navigation } from "../constant/navigation/navigation";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Make the logo clickable */}
        <Link href="/" className="flex items-center">
          <Image
            className="dark:invert"
            src="../assets/monokrom_logo.svg"
            alt="MONOKROM logo"
            width={256}
            height={6}
            priority
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
                  className="text-sm text-zinc-500 hover:text-zinc-300 transition duration-300"
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
