import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      {/* Header Section */}
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-3xl font-bold">OLORUNTOBI AJAYI</h1>
        <p className="mt-2">+234 703 266 8068 | tobiajayi60@gmail.com | Lagos, Nigeria</p>
        <nav className="mt-2">
          <ul className="flex space-x-4">
            <li><Link href="/about" className="hover:underline">About Me</Link></li>
            <li><Link href="/projects" className="hover:underline">Projects</Link></li>
            <li><Link href="/skills" className="hover:underline">Skills</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <div className="mt-4">
        <Image 
          src="/images/portfolio-picture.jpg" // Reference to the image inside the public/images folder
          alt="Oloruntobi Ajayi" 
          width={200} 
          height={200} 
        />
      </div>
      
      {/* Main Content */}
      <main className="p-6">
        <h2 className="text-2xl font-bold">Welcome to My Portfolio</h2>
        <p className="mt-2">Explore my work and experience.</p>
      </main>
    </div>
  );
}
