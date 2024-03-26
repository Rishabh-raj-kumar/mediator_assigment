const Handshake = () => {
  return (
    <>
      <section className=" bg-pink-100 mt-20">
        <div className="container flex">
          <div className=" p-5 mt-10">
            <img src="/handshake.jpg" className=" w-4/5 rounded-md"/>
          </div>
          <div className=" flex flex-col gap-4 p-1 mt-10 justify-center">
            <h1 className=" text-4xl font-playfair">Our Mission</h1>
            <p data-scroll data-scroll-speed="0.6" className=" text-xl font-sans px-3">
              Empowering collaboration and innovation, our mission is to
              seamlessly connect content creators with businesses, fostering
              meaningful partnerships in the digital landscape. By providing a
              dynamic platform that facilitates efficient communication, secure
              transactions, and insightful analytics, we aim to be the catalyst
              for creativity, growth, and success in the online content creation
              ecosystem. Our commitment lies in building a vibrant community
              where creators thrive, businesses prosper, and authentic
              collaborations flourish.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Handshake;
