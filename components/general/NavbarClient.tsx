"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { buttonVariants } from "../ui/button";

interface Props {
  user: {
    given_name?: string | null;
    email?: string | null;
  } | null;
}

const NavbarClient = ({ user }: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex items-center justify-between relative">
      {/* Left: Logo + Nav */}
      <div className="flex items-center space-x-8">
        <Link href="/">
          <div className="text-3xl font-semibold">
            Blog <span className="text-blue-500">Marshal</span>
          </div>
        </Link>
        <ul className="hidden sm:flex items-center space-x-6">
          <li>
            <Link
              href="/"
              className="text-sm font-medium hover:text-blue-300 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard"
              className="text-sm font-medium hover:text-blue-300 transition-colors"
            >
              Dashboard
            </Link>
          </li>
        </ul>
      </div>

      {/* Hamburger Button */}
      <button
        className="sm:hidden flex flex-col justify-center items-center w-8 h-8"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        <span
          className={`block w-6 h-0.5 bg-white mb-1 transition-all ${
            menuOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-white mb-1 transition-all ${
            menuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-white transition-all ${
            menuOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        ></span>
      </button>

      {/* Right: Auth Buttons */}
      <ul className="hidden sm:flex items-center space-x-6">
        {user ? (
          <li>
            <div className="flex items-center space-x-3 bg-gray-700 px-3 py-1 rounded shadow">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold uppercase">
                {user.given_name ? user.given_name[0] : user.email?.[0]}
              </div>
              <span className="text-sm font-semibold">
                Hello, {user.given_name || user.email}
              </span>
              <LogoutLink
                className={buttonVariants({ variant: "destructive" }) + " ml-2"}
              >
                Log Out
              </LogoutLink>
            </div>
          </li>
        ) : (
          <>
            <li>
              <LoginLink className="text-sm font-medium hover:text-blue-300 transition-colors border border-blue-500 rounded px-3 py-1 ml-2">
                Login
              </LoginLink>
            </li>
            <li>
              <RegisterLink className="text-sm font-medium hover:text-blue-300 transition-colors border border-blue-500 rounded px-3 py-1 ml-2">
                Signup
              </RegisterLink>
            </li>
          </>
        )}
      </ul>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-full left-0 w-full bg-gray-800 flex flex-col items-center space-y-4 py-4 sm:hidden z-50">
          <li>
            <Link
              href="/"
              className="text-sm font-medium hover:text-blue-300 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard"
              className="text-sm font-medium hover:text-blue-300 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Dashboard
            </Link>
          </li>
          {user ? (
            <li>
              <div className="flex items-center space-x-3 bg-gray-700 px-3 py-1 rounded shadow">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold uppercase">
                  {user.given_name ? user.given_name[0] : user.email?.[0]}
                </div>
                <span className="text-sm font-semibold">
                  Hello, {user.given_name || user.email}
                </span>
                <LogoutLink
                  className={buttonVariants({ variant: "destructive" }) + " ml-2"}
                >
                  Log Out
                </LogoutLink>
              </div>
            </li>
          ) : (
            <>
              <li>
                <LoginLink className="text-sm font-medium hover:text-blue-300 transition-colors border border-blue-500 rounded px-3 py-1 ml-2">
                  Login
                </LoginLink>
              </li>
              <li>
                <RegisterLink className="text-sm font-medium hover:text-blue-300 transition-colors border border-blue-500 rounded px-3 py-1 ml-2">
                  Signup
                </RegisterLink>
              </li>
            </>
          )}
        </ul>
      )}
    </nav>
  );
};

export default NavbarClient;
