import React from "react";

const WineCard = () => {
  return (
    <div
      className="min-h-[100vh] flex items-center justify-center px-6 py-20 bg-cover bg-center relative"
      style={{
        backgroundImage: "url(/pinkCard.jpg)",
      }}
    >
      {/* Soft warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200/30 via-transparent to-blue-200/30"></div>

      {/* Card */}
      <div className="relative z-10 bg-white/40 backdrop-blur-xl  border-white/50 shadow-2xl rounded-[40px] p-10 max-w-xl w-full text-center">

        {/* Cute floating sticker */}
        <div className="absolute -top-5 -right-5 bg-[#3D1B19] text-white text-xs px-4 py-2 rounded-full shadow-lg rotate-12">
          bestie vibes 💅
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl lg:text-5xl font-black text-[#3D1B19] leading-tight">
          Eid Mubarak
          <span className="block text-lg font-medium mt-2 text-[#3D1B19]/80">
           my prettiest buddy ✨
          </span>
        </h2>

        {/* Name */}
        <p className="mt-8 text-2xl font-semibold text-[#3D1B19]">
          Onu 
        </p>

        {/* Message */}
        <p className="mt-5 text-[#3D1B19]/80 leading-relaxed text-lg">
          May your Eid be full of good food, better outfits,
          and zero awkward family questions.  
          May your wallet stay heavy and your selfies stay elite.
        </p>

        <p className="mt-4 text-[#3D1B19]/70 text-md">
          Stay blessed. Stay dramatic. Stay that main character. 🌙
        </p>

        {/* Bottom pill */}
        {/* <div className="mt-8 inline-block bg-white/60 text-[#3D1B19] px-6 py-2 rounded-full text-sm font-medium shadow">
          created with chaotic love 💌
        </div> */}
      </div>
    </div>
  );
};

export default WineCard;