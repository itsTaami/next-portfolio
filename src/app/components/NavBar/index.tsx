import React from "react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});
// const inter = Inter({ subsets: ["latin"] });

const Navbar = () => {
  return (
    <>
      <div className="flex w-full py-5 px-3 ">
        <div className="w-[60%] ml-10">
          <h1
            className={`text-white text-3xl font-extrabold ${roboto.className}`}
          >
            TAAMI
          </h1>
        </div>
        <div className="w-[40%]">
          <ul className="flex justify-evenly">
            <li className={`text-white text-lg font-bold ${roboto.className}`}>
              Home
            </li>
            <li className={`text-white text-lg font-bold ${roboto.className}`}>
              About
            </li>
            <li className={`text-white text-lg font-bold ${roboto.className}`}>
              Projects
            </li>
            <li className={`text-white text-lg font-bold ${roboto.className}`}>
              Contact
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
