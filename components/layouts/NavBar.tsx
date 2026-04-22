import Image from "next/image";
import Link from "next/link";
import { LuChevronDown, LuUser } from "react-icons/lu";

const navItems = [
  { label: "About", href: "/", hasDropdown: true },
  { label: "What We Do", href: "/", hasDropdown: true },
  { label: "Jobs", href: "/", hasDropdown: true },
  { label: "Projects", href: "/", hasDropdown: false },
  { label: "TG Academy", href: "/", hasDropdown: false },
  { label: "Strategic Partnership", href: "/", hasDropdown: false },
  { label: "Pricing", href: "/", hasDropdown: false },
  { label: "Book a Consultation", href: "/", hasDropdown: false },
];

const NavBar = () => {
  return (
    <nav>
      <div className="flex justify-between px-16 py-6 items-center">
        <div>
          <Image
            alt="tobams_logo"
            src="/images/tobams.png"
            width={50}
            height={50}
            className="h-16 w-[167.65px]"
          />
        </div>

        <div className="flex gap-4 items-center">
          <div>
            <Link href="/" className="">
              <button className="cursor-pointer flex items-center bg-primary py-2.5 px-5 text-white rounded-sm">
                <span className="bg-[#ddd0da] p-1 rounded-full mr-2">
                  {/* <LuUser className="inline mr-2 p-3" /> */}
                  <LuUser className="text-primary" />
                </span>
                Account
                <LuChevronDown className="inline ml-2" />
              </button>
            </Link>
          </div>

          <div>
            <Link href="/" className="">
              <button className="cursor-pointer bg-secondary px-5 py-2.5 text-white rounded-sm">
                Take Assessment
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t opacity-100 border-gray-300 px-16 py-6 hidden lg:block md:block sm:hidden">
        <ul className="flex items-center justify-center gap-8 py-4">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="text-[#151515] font-normal text-lg hover:text-primary"
              >
                {item.label}
                {item.hasDropdown && <LuChevronDown className="inline ml-1" />}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
