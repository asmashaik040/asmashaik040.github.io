import { useState } from "react";

const navigation = [
  { name: "About", href: "#about", current: true },
  { name: "Skills", href: "#skills", current: false },
  { name: "Experience", href: "#experience", current: false },
  { name: "Projects", href: "#projects", current: false },
  { name: "Contact", href: "#contact", current: false },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState("About");
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const showActiveTab = (id) => {
    setIsActive(id);
  };

  return (
    <div>
      <nav
        className="flex items-center justify-between p-6 lg:px-8 fixed w-full z-50 bg-black"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/#about" className="-m-1.5 p-1.5">
            <span className="text-yellow-400 uppercase font-bold">
              Asma Shaik
            </span>
          </a>
        </div>
        <div className="hidden md:block lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`${
                isActive === item.name ? "text-yellow-400" : "text-white"
              } hover:bg-gray-200 hover:text-black rounded-md px-3 py-2`}
              onClick={() => showActiveTab(item.name)}
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4">
            {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white hover:text-yellow-400 block py-2 px-4"
              onClick={closeMenu}
            >
              {item.name}
            </a>
          ))}
          </div>
        )}
      </nav>
    </div>
  );
}
