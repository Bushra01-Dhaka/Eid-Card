import Link from "next/link";

const Banner = () => {
  return (
    <div className="flex justify-center min-h-screen items-center bg-linear-to-r from-[#043915] px-10 lg:p-20 py-20">
      <div>
        <div className="text-center">
          <h3 className="text-lg">Made With Love. Shared With One Link.</h3>
          <h1 className="text-4xl lg:text-6xl text-yellow-400 font-extrabold py-2">
            Your Eid Wish, <br />
            But Make It Aesthetic.
          </h1>
          <p className="py-8 max-w-[600px] mx-auto">
            Customize your Eid message, choose a vibe, and turn it into a
            beautiful digital card. One click to create, one link to share.
            That’s it.
          </p>
          <div className="py-6 flex justify-center items-center gap-4">
            <Link href={"/"}>
              <button className="btn border-yellow-400 text-yellow-400  btn-outline btn-md">
                ✨ Start Creating EidCard
              </button>
            </Link>
            <Link href={"/"}>
              <button className="btn bg-yellow-400 text-green-950  btn-md">
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
