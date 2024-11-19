import React from "react";

function AboutPage() {
  return (<>
    <div></div>
    <div className="flex flex-col bg-gray-100 w-screen h-screen p-10 items-center pt-20">
      <h1 className="text-4xl font-bold text-gray-800 mb-5">About Us</h1>
      <div className="max-w-3xl text-lg text-gray-700 leading-relaxed">
        <p>
          Welcome to our platform! We are passionate about leveraging technology
          to provide innovative solutions that empower our users. Our mission is
          to create tools and experiences that enhance productivity, foster
          creativity, and simplify complex problems.
        </p>
        <br />
        <p>
          Our team is made up of skilled professionals who are dedicated to
          delivering high-quality services. With a focus on continuous learning
          and improvement, we aim to stay ahead of the curve in the ever-evolving
          tech landscape.
        </p>
        <br />
        <p>
          Thank you for being a part of our journey. If you'd like to know more
          or have any questions, feel free to reach out to us through our contact
          page.
        </p>
      </div>
    </div>
  </>
  );
}

export default AboutPage;
