'use client';

import React, { useLayoutEffect, useRef } from 'react'
const Hero = () => {
  const background = useRef(null);
  return (
    <>
      <section>
        <div ref={background} className={` w-full min-h-screen flex justify-between gap-2`}
        style={{ background : "url('/mesh.png')", backgroundRepeat : "no-repeat",backgroundPosition : "100% 100%", backgroundSize : "cover"}}>
            <div className=" w-1/2 flex flex-col gap-4 p-5">
          <h1 data-scroll data-scroll-speed="0.3" className=" mt-20 text-4xl font-playfair">Connecting Brands with Creativity</h1>
          <p data-scroll data-scroll-speed="0.7" className=" text-2xl font-poppins">Welcome to Mediater - Your Gateway to Digital Collaboration!</p>
          <p data-scroll data-scroll-speed="0.7" className=" text-white text-xl font-sans">At Mediater , we redefine collaboration by seamlessly connecting content creators with businesses, fostering a dynamic ecosystem of innovation and creativity. Our platform serves as the catalyst for strategic alliances, unlocking endless possibilities in the digital landscape. Join the revolution, where every collaboration is an opportunity to elevate and innovate.</p>
        </div>
        <div className=" w-3/5 rounded-tl-full clip-path">
          <div className=' w-full h-full flex items-center justify-center bg-white'>
            <img src="/service_2.jpg" className=' w-3/4 mix-blend-multiply'/>
          </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
