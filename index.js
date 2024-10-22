'use client';

import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="bg-gray-900 text-white p-6 shadow-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-2">OLORUNTOBI AJAYI</h1>
          <p className="text-lg mb-4">
            +234 703 266 8068 |{' '}
            <a href="mailto:tobiajayi60@gmail.com" className="underline hover:text-blue-400">
              tobiajayi60@gmail.com
            </a>{' '}
            | Lagos, Nigeria
          </p>
          <nav>
            <ul className="flex justify-center space-x-6">
              <li>
                <Link href="/about" className="text-lg font-medium hover:text-blue-400 transition">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-lg font-medium hover:text-blue-400 transition">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/skills" className="text-lg font-medium hover:text-blue-400 transition">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-lg font-medium hover:text-blue-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto flex flex-col items-center">
          {/* Profile Image */}
          <div className="w-40 h-40 relative mb-6">
            <Image 
              src="/images/portfolio-picture.jpg" // Ensure this image exists in public/images
              alt="Oloruntobi Ajayi"
              layout="fill"
              className="object-cover rounded-full shadow-lg"
            />
          </div>
          {/* Main Content */}
          <main className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 animate-fadeInUp">
              Welcome to My Portfolio
            </h2>
            <p className="text-lg text-gray-600 mb-8 animate-fadeInUp delay-2">
              Explore my work, projects, and skills. I specialize in building scalable applications with Java and React.
            </p>
            <Link href="/projects" className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition transform hover:-translate-y-1">
              View My Projects
            </Link>
          </main>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 mt-10">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Oloruntobi Ajayi. All rights reserved.</p>
        </div>
      </footer>

      {/* Add some simple animation styles */}
      <style jsx>{`
        .animate-fadeInUp {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 1s forwards;
        }
        .animate-fadeInUp.delay-2 {
          animation-delay: 0.2s;
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
