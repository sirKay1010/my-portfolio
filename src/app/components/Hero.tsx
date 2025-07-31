"use client";

import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen w-full flex items-center justify-center px-6  text-white"
    >
      <div className="max-w-3xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Left: Text */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, my name is Kayode
          </h1>
          <p className="text-lg md:text-xl mb-6">
            I am a developer passionate about building elegant, modern web
            applications.
          </p>
          <a
            href="#projects"
            className="inline-block px-6 py-3 bg-white text-black font-medium rounded hover:bg-gray-200 transition"
          >
            View My Work
          </a>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/profile-icon.jpg"
            alt="image"
            width={300}
            height={300}
            className="rounded-full shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
