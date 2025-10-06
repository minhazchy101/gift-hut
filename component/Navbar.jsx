'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import GoogleButton from 'react-google-button'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const NavLinks = (
    <>
      <Link href="/" className="hover:text-primary transition">Home</Link>
      <Link href="/products" className="hover:text-primary transition">Shop</Link>
      <Link href="/add" className="hover:text-primary transition">Add</Link>
    </>
  );

  return (
    <nav className="bg-secondary border-b border-gray-300 px-6 md:px-16 lg:px-32 py-4 relative">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-primary">Gift Hut</h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {NavLinks}
        </div>

        {/* Desktop Account Button */}
        <div className="hidden md:flex rounded-2xl">
          {/* <button className="hover:text-primary transition">Account</button> */}
          <GoogleButton/>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-primary text-2xl">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-secondary border-t border-gray-200 py-4 mt-2 flex flex-col gap-4">
          {NavLinks}
          {/* <button className="hover:text-primary transition">Account</button> */}
          <GoogleButton/>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
