'use client'
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import { usePathname } from 'next/navigation';

const navigation = [
    { name: 'HOME', href: '/', current: true },
    { name: 'ABOUT', href: '/pages/about', current: false },
    { name: 'EVENTS', href: '/pages/events', current: false },
    { name: 'EXECUTIVE COMMITTEE', href: '/pages/execom', current: false },
    // { name: 'CHAPTERS', href: '/pages/chapters', current: false },
    { name: 'MEMBERSHIP', href: '/pages/membership', current: false },
    { name: 'CONTACT', href: '/pages/contact', current: false },
    { name: 'AAROHAN', href: '/pages/aarohan', current: false },
    { name: 'LOGIN', href: '/pages/login', current: false },
];

function classNames(...classes:string[]) {
    return classes.filter(Boolean).join(' ');
}

export default function Navbar() {

    const currentPath=usePathname()
    console.log(currentPath)
  
    const [isOpen, setIsOpen] = useState(false);
    return (
      <nav className="bg-gray-800 shadow-lg backdrop-blur-md fixed w-dvw z-50">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-200 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                {isOpen ? (
                  <AiOutlineClose className="h-6 w-6" />
                ) : (
                  <AiOutlineMenu className="h-6 w-6" />
                )}
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-between">
              <div className="flex flex-shrink-0 items-center">
                <img
                  alt="Your Company"
                  src="/images/Logo/logo.png"
                  className="h-12 mr-2 w-auto"
                />
                <img
                  alt="Your Company"
                  src="/images/Logo/logo50.png"
                  className="h-12 w-auto"
                />
              </div>
              <div className="hidden sm:ml-6 md:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className={classNames(
                        item.href === currentPath
                          ? "bg-gray-900 text-white"
                          : item.name === "LOGIN"
                          ? "bg-blue-500 text-white font-semibold px-4 py-2 rounded-full shadow-lg hover:bg-blue-600 hover:scale-105 transition-transform duration-300"
                          : item.name === "AAROHAN"
                          ? "bg-orange-600 text-white hover:bg-opacity-75 hover:scale-105"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.href == currentPath
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    );
}
