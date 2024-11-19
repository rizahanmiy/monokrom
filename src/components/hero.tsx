"use client";
const Hero: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-4xl font-bold mb-4">Your Business, Digitalized.</h1>
      <p className="text-gray-600 text-lg mb-8">
        The best place to begin the digital existence of your business.
      </p>
      <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-300">
        Get Started
      </button>
    </div>
  );
};

export default Hero;
