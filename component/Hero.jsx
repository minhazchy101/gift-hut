import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="min-h-[70vh] md:min-h-[60vh] lg:min-h-[90vh] flex flex-col md:flex-row justify-center items-center bg-white px-4 md:px-12 text-black">
      <div className="max-w-2xl">
        <h1 className="text-5xl pt-6 md:pt-0 md:text-7xl leading-tight font-semibold">
          Find the Perfect Gift for Every Occasion
        </h1>
        <p className="text-[#495057] mt-4">
          Curated collections to make your loved ones smile — thoughtful, unique, and ready to surprise.
        </p>

        <Link href="#gift">
          <button className="mt-8  px-3 py-2 rounded-md cursor-pointer text-sm text-primary border border-primary  hover:bg-primary hover:text-white transition ">
            Gift the Collection
          </button>
        </Link>
      </div>

      <div>
        <Image src="/box.jpeg" alt="Gift Box" width={500} height={500} />
      </div>
    </div>
  );
};

export default Hero;
