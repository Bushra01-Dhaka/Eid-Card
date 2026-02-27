const EidiCard = () => {
  return (
    <div
      className="min-h-[100vh] flex items-center justify-center px-6 py-20 bg-cover bg-center relative"
      style={{
        backgroundImage: "url(/greenCard1.jpg)",
      }}
    >
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 "></div>

      {/* Card Container */}
      <div className="relative z-10 backdrop-blur-md bg-white/10 shadow-yellow-300  shadow-xl rounded-3xl p-10 max-w-xl w-full text-center">

        <img
              src="/logo.png"
              alt="Moon"
              className=" lg:block absolute -right-[-5] top-0 w-16 lg:w-20 moon-float drop-shadow-[0_0_25px_rgba(255,215,0,0.6)]"
            />

        {/* Top Decorative Line */}
        <div className="w-16 h-1 bg-yellow-400 mx-auto mb-6 rounded-full"></div>

        <h2 className="text-4xl lg:text-5xl font-extrabold text-yellow-400 tracking-wide drop-shadow-lg">
          Eid Mubarak
        </h2>

        <p className="mt-6 text-xl text-white/90 font-medium">
          Dear Roshi,
        </p>

        <p className="mt-4 text-white/80 leading-relaxed">
          May this Eid bring peace, happiness, and endless blessings to your
          life. Wishing you joy, success, and beautiful moments with your loved
          ones.
        </p>

        {/* Bottom Decorative Line */}
        <div className="w-16 h-1 bg-yellow-400 mx-auto mt-8 rounded-full"></div>

         <img
              src="/logo.png"
              alt="Moon"
              className=" lg:block absolute -right-8 bottom-0 w-16 lg:w-20 moon-float drop-shadow-[0_0_25px_rgba(255,215,0,0.6)]"
            />

      </div>
    </div>
  );
};

export default EidiCard;