import React from 'react';
// import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const LandingPage = () => {
//   const sliderSettings = {
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   const animalFaces = [
//     { src: 'https://picsum.photos/300/300?random=1', label: 'Happy Dog' },
//     { src: 'https://picsum.photos/300/300?random=2', label: 'Surprised Bear' },
//     { src: 'https://picsum.photos/300/300?random=3', label: 'Curious Fox' },
//     { src: 'https://picsum.photos/300/300?random=4', label: 'Playful Cat' },
//     { src: 'https://picsum.photos/300/300?random=5', label: 'Joyful Rabbit' },
//   ];

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen py-16 px-6 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600">
        <h1 className="text-4xl font-extrabold text-center text-white sm:text-5xl md:text-6xl">
          Animal Emotion Detection
        </h1>
        <p className="mt-4 text-lg text-center text-gray-200 sm:text-xl">
          Analyze and understand your animal's emotions through facial expressions.
        </p>
        <Link
          to="/choose"
          className="mt-8 px-8 py-3 bg-yellow-400 text-gray-900 font-semibold text-lg rounded-lg hover:bg-yellow-300 transition duration-300"
        >
          Explore Features
        </Link>
      </section>

      {/* Animal Faces Section */}
      {/* <section id="features" className="py-16 px-6 bg-gray-800">
        <h2 className="text-3xl font-semibold text-center text-white mb-12">Our Animal Faces</h2>
        <Slider {...sliderSettings} className="px-4">
          {animalFaces.map((animal, index) => (
            <div key={index} className="px-2">
              <div className="relative group">
                <img
                  src={animal.src}
                  alt={animal.label}
                  className="w-full h-64 object-cover rounded-lg transition duration-500 ease-in-out transform group-hover:scale-105"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out rounded-lg flex justify-center items-center">
                  <p className="text-white font-bold text-xl">{animal.label}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section> */}

      {/* Footer Section */}
    </div>
  );
};

export default LandingPage;
