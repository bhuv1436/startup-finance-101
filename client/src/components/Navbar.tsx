import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link, useLocation } from "wouter";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void;
}

const Navbar = ({ darkMode, setDarkMode }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const currentPath = location.replace(/^#/, ""); // normalize "#/learn" → "/learn"
  const isActive = (path: string) => currentPath === path;

  return (
    <header className="bg-gray-800 shadow-sm fixed top-0 w-full z-50">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="text-primary-500 text-3xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 3v18h18" />
              <path d="m19 9-5 5-4-4-3 3" />
            </svg>
          </div>
          <Link href="/" className="text-xl font-bold text-white">
            Startup Finance <span className="text-primary-500">101</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/learn"
            className={`font-medium hover:text-primary-500 transition-colors ${isActive("/learn") ? "text-primary-500" : "text-gray-300"
              }`}
          >
            Learn
          </Link>
          <Link
            href="/tools"
            className={`font-medium hover:text-primary-500 transition-colors ${isActive("/tools") ? "text-primary-500" : "text-gray-300"
              }`}
          >
            Tools
          </Link>
          <Link
            href="/glossary"
            className={`font-medium hover:text-primary-500 transition-colors ${isActive("/glossary") ? "text-primary-500" : "text-gray-300"
              }`}
          >
            Glossary
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center space-x-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-gray-300 hover:bg-gray-700 transition-colors"
          >
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden bg-gray-800 shadow-lg"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="py-2 px-4 space-y-1">
              <Link
                href="/learn"
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 px-3 rounded-md font-medium hover:bg-gray-700 transition-colors ${isActive("/learn")
                    ? "bg-gray-700 text-primary-500"
                    : "text-gray-300"
                  }`}
              >
                Learn
              </Link>
              <Link
                href="/tools"
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 px-3 rounded-md font-medium hover:bg-gray-700 transition-colors ${isActive("/tools")
                    ? "bg-gray-700 text-primary-500"
                    : "text-gray-300"
                  }`}
              >
                Tools
              </Link>
              <Link
                href="/glossary"
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 px-3 rounded-md font-medium hover:bg-gray-700 transition-colors ${isActive("/glossary")
                    ? "bg-gray-700 text-primary-500"
                    : "text-gray-300"
                  }`}
              >
                Glossary
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
