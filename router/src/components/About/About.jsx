import React from "react";

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Suryanshu Coding Workspace"
              className="rounded-xl shadow-lg"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              Hi, I'm Suryanshu Saini
            </h2>
            <p className="mt-6 text-gray-600">
              I am a 21-year-old passionate web developer based in Amaravati,
              Andhra Pradesh. I specialize in building modern, responsive, and
              highly interactive web applications using the React ecosystem and
              Tailwind CSS.
            </p>
            <p className="mt-4 text-gray-600">
              My journey in tech is driven by a constant curiosity and a desire
              to solve real-world problems through clean, efficient code. When
              I'm not coding, I'm usually exploring new technologies or finding
              ways to optimize user experiences. Let's build something great
              together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
