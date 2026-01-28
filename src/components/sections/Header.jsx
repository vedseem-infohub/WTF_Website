"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    // { label: "Locations", href: "#locations" },
    { label: "Menu", href: "/menu" },
    { label: "Who We Are", href: "/about" },
    // { label: "Instagram", href: "https://instagram.com" },
    { label: "Services", href: "/services" },
    { label: "Catering", href: "/services/catering" },
  ];

  // Check if user is logged in
  useEffect(() => {
    const userData = localStorage.getItem('wtf_user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  // Hide / show header on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('wtf_token');
    localStorage.removeItem('wtf_user');
    setUser(null);
    setShowProfileMenu(false);
    window.location.href = '/';
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500`}
      >

        {/* Mobile & Tablet Header */}
        <div className="lg:hidden w-full px-4 md:px-10 py-2 flex justify-between items-center bg-transparent backdrop-blur-sm">
          <Link href="/" className="transition-transform active:scale-95">
            <div className="flex items-center gap-3">
              <Image src="/Logo.png" alt="logo" width={80} height={40} className="w-auto h-12" />
            </div>
          </Link>

          <div className="flex items-center gap-4 ">
            {/* Mobile Social Icons */}
            <div className="flex gap-2 mr-2 absolute right-4 top-24">
              <Link href="#" className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white active:scale-90 shadow-lg">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </Link>
              <Link href="#" className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white active:scale-90 shadow-lg">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.134l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </Link>
              <Link href="#" className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white active:scale-90 shadow-lg">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
                </svg>
              </Link>
            </div>

            <button
              className="w-10 h-10 flex flex-col items-center justify-center p-2 gap-1.5 border border-gray-500 rounded-full transition-all text"
              onClick={() => setIsOpen(true)}
            >
              <span className="w-5 h-0.5 bg-gray-500" />
              <span className="w-5 h-0.5 bg-gray-500" />
            </button>
          </div>
        </div>

        {/* Desktop Header Content (Logo & Socials) */}
        <div className="hidden lg:flex justify-between items-start px-12 py-6 pointer-events-none">
          {/* Logo */}
          <Link href="/" className="pointer-events-auto transition-transform active:scale-95">
             <Image src="/Logo.png" alt="logo" width={100} height={60} className="w-auto h-16" />
          </Link>

          {/* Social Icons */}
          <div className="flex gap-4 pointer-events-auto">
             <Link href="#" className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white hover:bg-red-600 transition-all hover:scale-110 shadow-lg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
             </Link>
             <Link href="#" className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white hover:bg-red-600 transition-all hover:scale-110 shadow-lg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.134l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
             </Link>
             <Link href="#" className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white hover:bg-red-600 transition-all hover:scale-110 shadow-lg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
                </svg>
             </Link>
          </div>
        </div>

        {/* Side Navigation Buttons (Desktop Only) */}
        <div className="hidden lg:flex flex-col gap-3 absolute left-12 mt-14 top-48 pointer-events-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link href={item.href} key={item.label}>
                <div
                  className={`px-5 py-2 rounded-sm transition-all duration-300 group cursor-pointer
                    ${isActive 
                      ? "bg-red-600 text-white shadow-xl shadow-red-600/30 scale-105" 
                      : "bg-white text-red-700 border border-red-100 hover:bg-red-600 hover:text-white"
                    }`}
                >
                  <p className="text-2xl font-bold font-mono tracking-tighter">
                    {item.label}
                  </p>
                </div>
              </Link>
            );
          })}
          
          {/* Be a Partner Button as a specialized side button */}
          <Link href="https://wtf-foods.vercel.app/" className="mt-4">
            <div className="px-8 py-3 rounded bg-gradient-to-r from-yellow-400 to-red-600 text-white shadow-2xl hover:scale-105 transition-all group">
              <p className="text-2xl font-bold font-mono tracking-tighter uppercase text-center">
                Be a Partner ?
              </p>
            </div>
          </Link>
        </div>
      </div>

      {/* MINIMAL MOBILE & TABLET DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Cinematic Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-[60]"
              onClick={() => setIsOpen(false)}
            />

            {/* Professional Minimal Top Drawer */}
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "tween", duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="fixed top-0 left-0 right-0 w-full bg-zinc-950/95 backdrop-blur-3xl z-[70] flex flex-col overflow-hidden border-b border-white/5 md:h-fit md:rounded-b-[4rem] md:shadow-[0_50px_100px_rgba(0,0,0,0.8)]"
            >
              <div className="max-w-7xl mx-auto w-full flex flex-col">
                {/* Header inside Drawer */}
                <div className="px-6 md:px-12 py-2 flex items-center justify-between border-b border-white/5">
                  <Image src="/Logo.png" alt="logo" width={60} height={35} className="w-auto h-10 md:h-12" />
                  <button
                    className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full text-white/50 hover:text-white transition-all active:scale-95"
                    onClick={() => setIsOpen(false)}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="md:w-8 md:h-8">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Minimal Navigation List */}
                <div className="flex flex-col px-6 md:px-12 py-6 md:py-8">
                  {navItems
                    .filter(item => !["Home", "Menu", "Catering", "Reels"].includes(item.label))
                    .map((item, index) => {
                      const isActive = pathname === item.href;
                    return (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 + 0.1 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center justify-between py-2 md:py-4 border-b border-white/[0.03] group"
                        >
                          <span className={`text-3xl md:text-4xl dongle-regular tracking-tight transition-colors ${isActive ? "text-red-600" : "text-white/60 group-hover:text-white"
                            }`}>
                            {item.label}
                          </span>
                          {isActive && (
                            <div className="w-1.5 md:w-2.5 h-1.5 md:h-2.5 bg-red-600 rounded-full" />
                          )}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Primary Actions Footer */}
                <div className="p-6 md:px-12 md:pt-4 md:pb-8 pt-2 pb-4 flex flex-col gap-6">
                  <div className="grid grid-cols-2 gap-4">
                    <Link className="bg-gradient-to-r from-yellow-400 to-red-500 text-center text-white py-2 md:py-3 rounded-xl text-2xl md:text-3xl dongle-regular uppercase tracking-[0.1em] border border-white/5 active:scale-95 transition-all" href="/partner">
                      Partner
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
