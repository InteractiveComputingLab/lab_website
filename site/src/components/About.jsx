import React from "react";

const About = () => {
  return (
    <>
      <main className="w-full">
        <div className="w-full max-w-7xl mx-auto px-4 py-10">
          <header className="text-center">
            <h1>About Us</h1>
          </header>

          <section className="mt-6">
            <p className="sm:p-5 text-left text-black">
              <span className="text-2xl">T</span>he Interactive Computing Lab at
              Stevens Institute of Technology explores how people interact with
              technology and how technology can be designed to better support,
              engage, and empower them. Our research spans human-computer
              interaction (HCI), artificial intelligence, and interactive
              systems design, with applications ranging from accessibility to
              education, productivity, and creative expression.
            </p>

            <p className="sm:p-5 text-left text-black">
              We take a user-centered, interdisciplinary approach, combining
              methods from design, engineering, and social sciences to create
              systems that are both technically robust and meaningfully useful.
              Our work includes developing AI-powered interfaces, wearable and
              ubiquitous computing applications, and novel interaction
              techniques that enhance how people access information,
              collaborate, and perform everyday tasks.
            </p>

            <p className="sm:p-5 text-left text-black">
              We collaborate closely with end-users, industry partners, and
              interdisciplinary research teams to ensure our innovations address
              real-world needs and have lasting impact. Through design,
              prototyping, and rigorous evaluation, the Interactive Computing
              Lab seeks to push the boundaries of how humans and computers can
              work together.
            </p>
          </section>
        </div>
      </main>
    </>
  );
};

export default About;
