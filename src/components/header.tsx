// components/Header.tsx

import Link from "next/link";
import { Navigation } from "../constant/navigation/navigation";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/">MONOKROM</Link>
        <nav>
          <ul className="flex space-x-6">
            {Navigation.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
