
import Link from "next/link";

const Banner = () => {
  return (
    <div className="flex justify-center min-h-screen items-center bg-linear-to-r from-[#043915] px-10 lg:p-20 py-30 lg:py-20">
      <div>
        <div className="text-center">
          <h3 className="lg:text-lg">Made With Love. Shared With One Link.</h3>

          {/* Title Wrapper */}
          <div className="relative inline-block">
            <h1 className="text-4xl lg:text-6xl text-yellow-400 font-extrabold py-2">
              Your Eid Wish, <br />
              But Make It Aesthetic.
            </h1>

            {/* Moon GIF */}
            {/* <img
              src="/logo.png"
              alt="Moon"
              className="hidden lg:block absolute -right-16 top-[-30] w-16 lg:w-20 moon-float drop-shadow-[0_0_25px_rgba(255,215,0,0.6)]"
            /> */}
             <img
              src="/logo.png"
              alt="Moon"
              className=" lg:block absolute -right-8 top-0 w-16 lg:w-20 moon-float drop-shadow-[0_0_25px_rgba(255,215,0,0.6)]"
            />
          </div>

          <p className="py-8 w-full lg:w-[600px] mx-auto">
            Customize your Eid message, choose a vibe, and turn it into a
            beautiful digital card. One click to create, one link to share.
            That’s it.
          </p>

          <div className="py-6 flex flex-col lg:flex-row justify-center items-center gap-4">
            <Link href={"/customEidCardForm"}>
              <button className="btn hover:shadow-2xl hover:shadow-yellow-400 border-yellow-400 text-yellow-400 btn-outline btn-md">
                ✨ Start Creating EidCard
              </button>
            </Link>
            <Link href={"/exploreCards"}>
              <button className="btn hover:shadow-2xl hover:shadow-yellow-400 border-0 bg-yellow-400 text-green-950 btn-md">
               Explore Customized Card
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
