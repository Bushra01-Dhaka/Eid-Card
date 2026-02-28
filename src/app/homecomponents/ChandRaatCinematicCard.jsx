import React from "react";

const ChandRaatCinematicCard = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-cover bg-center relative"
      style={{
        backgroundImage: "url(/colorCard.jpg)",
      }}
    >
      {/* Deep cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>

      {/* Card */}
      <div className="relative z-10 max-w-2xl w-full text-center text-white px-6">

        {/* Title */}
        <h2 className="text-5xl lg:text-6xl font-serif tracking-wide text-yellow-300 drop-shadow-xl">
          Eid Mubarak
           <span className="block text-lg font-medium mt-2 text-yellow-400/80">
            Soul of my soul
          </span>
        </h2>

        {/* Monologue */}
        <div className="mt-10 space-y-6 text-lg animate-[fadeIn_2s_ease-in-out] leading-relaxed text-white/90">

          <p>
            Every Chand Raat, the markets glow the same way…
            lights everywhere, colors everywhere,
            laughter echoing between the stalls of churiyan.
          </p>

          <p>
            And every year,
            I walk past them pretending I don’t notice…
            pretending I don’t wish
            you were walking beside me.
          </p>

          <p className="italic text-pink-200">
            Another Eid…
            without hearing you say —
          </p>

          <p className="text-2xl font-semibold text-yellow-300 drop-shadow-lg">
            “Chalein… mujhe churiyan dilayein?”
          </p>

          <p>
            Maybe it’s silly.
            Maybe it’s just a line.
            But in my heart,
            it sounds like a promise.
          </p>

          <p>
            So this Eid,
            if we can’t stand under those lights together,
            just know…
            somewhere between the colors and the crowd,
            I’m still saving that moment for us.
          </p>

        </div>

        {/* Soft closing */}
        <div className="mt-12">
          <div className="w-20 h-[2px] bg-yellow-400 mx-auto mb-4"></div>
          <p className="text-white/70">
            Until our Chand Raat becomes ours ✨
          </p>
        </div>

      </div>
    </div>
  );
};

export default ChandRaatCinematicCard;