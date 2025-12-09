"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/about", label: "団体概要" },
    { href: "/activities", label: "活動内容" },
    { href: "/news", label: "ニュース" },
    { href: "/sponsorship", label: "ご支援" },
    { href: "/#contact", label: "お問い合わせ" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="z-50 relative">
            <h1 className={`text-lg md:text-xl font-bold tracking-tight transition-colors duration-300 ${
              isScrolled || isMenuOpen || pathname !== '/' ? 'text-gray-900' : 'text-white'
            }`}>
              長岡技科大ロボコンプロジェクト
            </h1>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className={`text-sm font-medium transition-colors hover:text-orange-500 ${
                  isScrolled || pathname !== '/' ? 'text-gray-700' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="/#contact" 
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                isScrolled || pathname !== '/' 
                  ? 'bg-orange-500 text-white hover:bg-orange-600' 
                  : 'bg-white text-orange-600 hover:bg-orange-50'
              }`}
            >
              Join Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden z-50 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 rounded-full transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2 bg-gray-900' : (isScrolled || pathname !== '/' ? 'bg-gray-900' : 'bg-white')
              }`} />
              <span className={`w-full h-0.5 rounded-full transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : (isScrolled || pathname !== '/' ? 'bg-gray-900' : 'bg-white')
              }`} />
              <span className={`w-full h-0.5 rounded-full transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2.5 bg-gray-900' : (isScrolled || pathname !== '/' ? 'bg-gray-900' : 'bg-white')
              }`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-40 transition-all duration-300 flex items-center justify-center md:hidden ${
        isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <nav className="flex flex-col items-center gap-8 p-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="text-2xl font-bold text-gray-800 hover:text-orange-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="/#contact" 
            className="mt-4 px-8 py-3 bg-orange-500 text-white rounded-full text-lg font-bold hover:bg-orange-600 transition-all"
            onClick={() => setIsMenuOpen(false)}
          >
            Join Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
