// components/Navbar.js
"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';

import '../styles/Navbar.css';

const Navbar = () => {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    setAnimationStarted(true);
  }, []);

  return (
    <nav className={`bg-blue-500 py-4 ${animationStarted ? 'navbar-enter-active' : 'navbar-enter'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">
        PsycheWell
        </Link>
        <div className="space-x-4 flex">
          <Link href="/about" className={`nav-link ${animationStarted ? 'nav-link-enter-active' : 'nav-link-enter'}`}>
            About
          </Link>
          <Link href="/contact" className={`nav-link ${animationStarted ? 'nav-link-enter-active' : 'nav-link-enter'}`}>
            Contact
          </Link>
          <Link href="/dashboard/register" className={`nav-link ${animationStarted ? 'nav-link-enter-active' : 'nav-link-enter'}`}>
            Register
          </Link>
          <Link href="/dashboard/login" className={`nav-link ${animationStarted ? 'nav-link-enter-active' : 'nav-link-enter'}`}>
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
