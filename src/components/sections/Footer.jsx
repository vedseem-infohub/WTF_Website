'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
    <footer className="w-full bg-white pt-10 px-2 md:px-12">
      <div className="max-w-full mx-auto">
        {/* Desktop Layout: Original 5-column grid */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-8 md:gap-12">
          {/* Logo and About/Contact Section */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center mb-6">
             <Image src="/Logo.png" alt="logo" width={120} height={50} />
            </div>

            {/* About Us */}
            <div className="mb-6">
              <h3 className="text-red-800 text-3xl font-bold mb-2">About Us</h3>
              <p className="text-black text-2xl">we deliver the food where flavor come first</p>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-red-800 text-3xl font-bold mb-3">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-center text-black text-2xl">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mr-2">
                    <path d="M3.5 1C2.67 1 2 1.67 2 2.5V13.5C2 14.33 2.67 15 3.5 15H6.5L8 13.5H10L11.5 15H14.5C15.33 15 16 14.33 16 13.5V2.5C16 1.67 15.33 1 14.5 1H3.5Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    <path d="M6 4H10M6 8H10M6 12H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <span>+91 9818981438</span>
                </div>
                <div className="flex items-center text-black text-2xl">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mr-2">
                    <path d="M3 2C2.45 2 2 2.45 2 3V13C2 13.55 2.45 14 3 14H13C13.55 14 14 13.55 14 13V3C14 2.45 13.55 2 13 2H3Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    <path d="M2 4L8 9L14 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>sileenafoods@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Information Links */}
          <div>
            <h3 className="text-red-800 text-3xl font-bold mb-4">Information</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-black text-2xl hover:text-red-800">About Us</Link></li>
              <li><Link href="/search" className="text-black text-2xl hover:text-red-800">More Search</Link></li>
              <li><Link href="/blogs" className="text-black text-2xl hover:text-red-800">Blogs</Link></li>
              <li><Link href="/testimonials" className="text-black text-2xl hover:text-red-800">Testimonials</Link></li>
              <li><Link href="/events" className="text-black text-2xl hover:text-red-800">Events</Link></li>
            </ul>
          </div>

          {/* Helpful Links */}
          <div>
            <h3 className="text-red-800 text-3xl font-bold mb-4">Helpful Links</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-black text-2xl hover:text-red-800">Services</Link></li>
              <li><Link href="/support" className="text-black text-2xl hover:text-red-800">Supports</Link></li>
              <li><Link href="/terms" className="text-black text-2xl hover:text-red-800">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="text-black text-2xl hover:text-red-800">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-red-800 text-3xl font-bold mb-4">Social links</h3>
            <div className="flex gap-4">
              {/* Instagram */}
              <Link href="https://instagram.com" className="text-black hover:text-red-800">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
                </svg>
              </Link>
              {/* Twitter */}
              <Link href="https://twitter.com" className="text-black hover:text-red-800">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </Link>
              {/* Facebook */}
              <Link href="https://facebook.com" className="text-black hover:text-red-800">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Layout: Custom 2-row structure */}
        <div className="lg:hidden space-y-8">
          {/* Logo and About */}
          <div>
            <div className="flex items-center mb-6">
              <Image src="/Logo.png" alt="logo" width={120} height={50} />
            </div>
            <div className="mb-6">
              <h3 className="text-red-800 text-3xl font-bold mb-2">About Us</h3>
              <p className="text-black text-2xl">we deliver the food where flavor come first</p>
            </div>
          </div>

          {/* Row 1: Contact Us + Social Links */}
          <div className="grid grid-cols-2 gap-8">
            {/* Contact Us */}
            <div>
              <h3 className="text-red-800 text-3xl font-bold mb-3">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-center text-black text-md md:text-2xl">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mr-2">
                    <path d="M3.5 1C2.67 1 2 1.67 2 2.5V13.5C2 14.33 2.67 15 3.5 15H6.5L8 13.5H10L11.5 15H14.5C15.33 15 16 14.33 16 13.5V2.5C16 1.67 15.33 1 14.5 1H3.5Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    <path d="M6 4H10M6 8H10M6 12H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <span>+91 9818981438</span>
                </div>
                <div className="flex items-center text-black text-xl md:text-2xl">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mr-2">
                    <path d="M3 2C2.45 2 2 2.45 2 3V13C2 13.55 2.45 14 3 14H13C13.55 14 14 13.55 14 13V3C14 2.45 13.55 2 13 2H3Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    <path d="M2 4L8 9L14 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>sileenafoods@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-red-800 text-3xl font-bold mb-4">Social links</h3>
              <div className="flex gap-4">
                {/* Instagram */}
                <Link href="https://instagram.com" className="text-black hover:text-red-800">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
                  </svg>
                </Link>
                {/* Twitter */}
                <Link href="https://twitter.com" className="text-black hover:text-red-800">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                  </svg>
                </Link>
                {/* Facebook */}
                <Link href="https://facebook.com" className="text-black hover:text-red-800">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Row 2: Information + Helpful Links */}
          <div className="grid grid-cols-2 gap-8">
            {/* Information Links */}
            <div>
              <h3 className="text-red-800 text-3xl font-bold mb-4">Information</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-black text-2xl hover:text-red-800">About Us</Link></li>
                <li><Link href="/search" className="text-black text-2xl hover:text-red-800">More Search</Link></li>
                <li><Link href="/blogs" className="text-black text-2xl hover:text-red-800">Blogs</Link></li>
                <li><Link href="/testimonials" className="text-black text-2xl hover:text-red-800">Testimonials</Link></li>
                <li><Link href="/events" className="text-black text-2xl hover:text-red-800">Events</Link></li>
              </ul>
            </div>

            {/* Helpful Links */}
            <div>
              <h3 className="text-red-800 text-3xl font-bold mb-4">Helpful Links</h3>
              <ul className="space-y-2">
                <li><Link href="/services" className="text-black text-2xl hover:text-red-800">Services</Link></li>
                <li><Link href="/support" className="text-black text-2xl hover:text-red-800">Supports</Link></li>
                <li><Link href="/terms" className="text-black text-2xl hover:text-red-800">Terms & Conditions</Link></li>
                <li><Link href="/privacy" className="text-black text-2xl hover:text-red-800">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Section - Centered at bottom */}
        <div className="border-t border-gray-300 mt-8 pt-6 pb-4">
          <p className="text-center text-gray-600 text-xl md:text-2xl">
            © 2026 WTF. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
