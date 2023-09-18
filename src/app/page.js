// pages/index.js
import Link from 'next/link';

const Home = () => (
  <div className="bg-blue-500 min-h-screen flex flex-col justify-center items-center">
    <h1 className="text-4xl font-extrabold text-white mb-4">Welcome to PsycheWell</h1>
    <p className="text-lg text-white mb-8">Your Mental Health Companion</p>
    
    <Link href="/dashboard" className="bg-white text-blue-500 hover:bg-blue-400 text-lg py-2 px-6 rounded-full transition duration-300 ease-in-out">
        Start Assessment
    </Link>
  </div>
);

export default Home;
