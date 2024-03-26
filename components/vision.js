const Vison = () => {
  return (
    <>
      <section>
        <section className=" bg-orange-100 mt-20">
          <div className="container flex">
            <div className=" w-1/2 flex flex-col gap-4 p-1 mt-10 justify-center">
              <h1 data-scroll data-scroll-speed="0.7" className=" text-4xl font-playfair underline">Vision</h1>
              <p data-scroll data-scroll-speed="0.7" className=" text-lg font-poppins">
              Envisioning a future where the boundaries between content creators and businesses dissolve, our app aspires to be the unparalleled hub for dynamic collaboration in the digital realm. We see a landscape where creativity knows no limits, and partnerships transcend traditional boundaries, resulting in a global network of thriving content ecosystems. By pioneering innovation, fostering inclusivity, and driving transformative connections, our vision is to shape the future of online collaboration, where every creator's voice is amplified, and every business finds its ideal collaborator effortlessly.
              </p>
            </div>
            <div className=" w-1/2 p-5 mt-10">
              <img src="/vision.jpg" className=" rounded-md" />
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Vison;
