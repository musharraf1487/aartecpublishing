import React from "react";
import Logo from "./Logo";

interface HeaderProps {
  onBookingClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBookingClick }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Logo className="w-12 h-12" withText={true} />

        <nav className="hidden lg:flex items-center space-x-8 text-sm font-semibold text-slate-600">
          <a
            href="#solution"
            className="hover:text-aartec-teal transition-colors"
          >
            AARTEC Ecosystem
          </a>
          <a
            href="#packages"
            className="hover:text-aartec-teal transition-colors"
          >
            Packages
          </a>
          <a
            href="#testimonials"
            className="hover:text-aartec-teal transition-colors"
          >
            Books
          </a>
          <a
            href="#affiliate"
            className="hover:text-aartec-teal transition-colors text-slate-400"
          >
            About
          </a>
        </nav>

        <button
          onClick={onBookingClick}
          className="bg-aartec-teal text-white px-6 py-2.5 rounded font-bold text-sm hover:bg-aartec-teal/90 hover:shadow-lg transition-all duration-300"
        >
          Contact Us
        </button>
      </div>
    </header>
  );
};

export default Header;
