'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import { useSession, signIn, signOut } from 'next-auth/react';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const { data: session } = useSession();
  console.log("session---> ", session)

  const NavLinks = (
    <>
      <Link
        href="/"
        className="hover:text-primary hover:font-semibold transition-all duration-300"
      >
        Home
      </Link>
      <Link
        href="/all-products"
        className="hover:text-primary hover:font-semibold transition-all duration-300"
      >
        Shop
      </Link>
      <Link
        href="/add-gift"
        className="hover:text-primary hover:font-semibold transition-all duration-300"
      >
        Add
      </Link>
    </>
  );

  return (
    <nav className="bg-light border-b px-6 md:px-16 mb-10 lg:px-32 py-4 fixed top-0 left-0 right-0 z-50 shadow-md border-primary">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-primary">
          <Link href="/">
            <span className="text-black font-medium">Gift</span>Hut
          </Link>
        </h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">{NavLinks}</div>

        {/* Desktop Auth Button */}
        <div className="hidden md:flex">
          {session ? (
            <button
              onClick={() => signOut()}
              className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg transition-all duration-300"
            >
              Logout
            </button>
          ) : (
            <button
             onClick={() => signIn('google')} 
              className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg transition-all duration-300"
            >
             Signin
            </button>
          )}
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
        <div className="md:hidden bg-light border-t border-gray-200 py-4 mt-2 flex flex-col gap-4">
          {NavLinks}
          {session ? (
            <button
              onClick={() => signOut()}
              className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg transition-all duration-300"
            >
              Logout
            </button>
          ) : (
            // <GoogleButton onClick={() => signIn('google')} />
            <button
             onClick={() => signIn('google')} 
              className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg transition-all duration-300"
            >
             Signin
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
