'use client'
import React, { useState } from 'react'
import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'
import Link from 'next/link'

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24 pb-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-red-800 mb-4">
              Search
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700">
              Find your favorite dishes and services
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for dishes, services, or events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 text-2xl border-2 border-red-800 rounded-full focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-red-800 text-white px-8 py-3 rounded-full hover:bg-red-700 transition-colors text-xl font-semibold">
                Search
              </button>
            </div>
          </div>

          {/* Search Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Link href="/menu">
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl hover:shadow-xl transition-all cursor-pointer border-2 border-red-200">
                <h3 className="text-3xl font-bold text-red-800 mb-3">Menu Items</h3>
                <p className="text-xl text-gray-700">Browse our extensive menu collection</p>
              </div>
            </Link>
            <Link href="/services">
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl hover:shadow-xl transition-all cursor-pointer border-2 border-red-200">
                <h3 className="text-3xl font-bold text-red-800 mb-3">Services</h3>
                <p className="text-xl text-gray-700">Explore catering and delivery options</p>
              </div>
            </Link>
            <Link href="/events">
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl hover:shadow-xl transition-all cursor-pointer border-2 border-red-200">
                <h3 className="text-3xl font-bold text-red-800 mb-3">Events</h3>
                <p className="text-xl text-gray-700">Discover upcoming food events</p>
              </div>
            </Link>
          </div>

          {/* Popular Searches */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-red-800 mb-6">Popular Searches</h2>
            <div className="flex flex-wrap gap-3">
              {['Biryani', 'Pizza', 'Burger', 'Pasta', 'Catering', 'Party Orders', 'Desserts', 'Beverages'].map((item) => (
                <button
                  key={item}
                  className="px-6 py-3 bg-white text-red-800 rounded-full border-2 border-red-200 hover:bg-red-800 hover:text-white transition-all text-xl font-semibold"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
