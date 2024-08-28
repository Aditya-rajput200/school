import Navbar from '@/component/Navbar';
import React from 'react';
import HomeCarousel from '@/component/HomeCarousel';
import Hero from '@/component/Hero';
import Principalmsg from '@/component/Principalmsg';
import Testimonial from '@/component/Testimonial';
import PopUp from '@/component/PopUp';

function Home() {
  return (
    <>
      <PopUp imageUrl="assets/Popup.png" />

      {/* Hero Section */}
      <section className="HeroSection">
        <Hero />
      </section>

      {/* Carousel Section */}
      <section className="CourselSection">
        <div className="w-full h-[60vh] md:h-[80vh] lg:h-screen">
          <HomeCarousel />
        </div>
      </section>

      {/* Principal's Message Section */}
      <section className="mt-10">
        <Principalmsg />
      </section>

      {/* Testimonial Section */}
      <section className="mt-10">
        <Testimonial />
      </section>
    </>
  );
}

export default Home;
