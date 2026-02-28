import React from "react";

const ChandRaatCard = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-cover bg-center relative"
      style={{
        backgroundImage: "url(/colorCard.jpg)",
      }}
    >
      {/* Soft dark overlay for readability */}
      <div className="absolute inset-0  "></div>

      {/* Card */}
      <div className="relative z-10 bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl rounded-3xl p-10 max-w-xl w-full text-center text-white">

        {/* Small top text */}
        <p className="text-sm tracking-widest uppercase text-pink-200 mb-4">
          Chand Raat Feels 🌙
        </p>

        {/* Main Title */}
        <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
          Eid Mubarak
            <span className="block text-lg font-medium mt-2 text-[#3D1B19]/80">
           My Love ✨
          </span>
        </h2>

        {/* Romantic Line */}
        <p className="mt-8 text-xl italic text-pink-100">
          Another Eid without saying…
        </p>

        {/* Highlighted Dialogue */}
        <p className="mt-4 text-2xl font-semibold text-yellow-300">
          “Chalein mujhe churiyan dilayein?”
        </p>

        {/* Soft Ending */}
        <p className="mt-6 text-white/90 leading-relaxed">
          Maybe next Chand Raat,
          we won’t just walk past the bangles —
          maybe we’ll stop, smile,
          and finally say it.
        </p>

        {/* Bottom Accent */}
        <div className="mt-8 w-16 h-[2px] bg-pink-300 mx-auto"></div>

        <p className="mt-4 text-sm text-white/70">
          Until then… Eid Mubarak 💫
        </p>
      </div>
    </div>
  );
};

export default ChandRaatCard;