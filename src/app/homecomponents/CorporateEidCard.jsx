import React from "react";

const CorporateEidCard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8F5EF] px-6 py-20"
    style={{
        backgroundImage: "url(/whiteCard1.jpg)",
      }}
    >
      
      {/* Card Container */}
      <div className="relative bg-[#FBF9F4] border border-[#E8DFCF] shadow-2xl rounded-2xl p-12 max-w-2xl w-full text-center">

        {/* Top Gold Accent Line */}
        <div className="w-24 h-[2px] bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 mx-auto mb-8"></div>

        {/* Bismillah */}
        <p className="text-sm tracking-[0.3em] text-yellow-700 uppercase mb-6">
          بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
        </p>

        {/* Main Heading */}
        <h2 className="text-4xl lg:text-5xl font-serif text-yellow-700 tracking-wide">
          Eid Mubarak
        </h2>

        {/* Subtitle */}
        <p className="mt-6 text-lg text-gray-700 leading-relaxed">
          On the blessed occasion of Eid,  
          we extend our sincere wishes for peace, prosperity,  
          and continued success.
        </p>

        <p className="mt-4 text-gray-600">
          May this joyous celebration strengthen bonds,  
          inspire gratitude, and bring renewed purpose.
        </p>

        {/* Signature Area */}
        <div className="mt-10">
          <div className="w-20 h-[1px] bg-yellow-600 mx-auto mb-4"></div>
          <p className="text-sm uppercase tracking-widest text-gray-500">
            With Warm Regards
          </p>
          <p className="mt-2 text-yellow-700 font-semibold">
            Your Company Name
          </p>
        </div>

        {/* Bottom Gold Accent Line */}
        <div className="w-24 h-[2px] bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 mx-auto mt-10"></div>
      </div>
    </div>
  );
};

export default CorporateEidCard;