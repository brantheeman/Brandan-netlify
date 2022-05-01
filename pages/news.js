import React from "react";
import { BsController, BsYoutube } from "react-icons/bs"
import { SiCrunchyroll } from "react-icons/si";

function news() {
  return (
    <div className="flex-col justify-center items-center my-20">
      <p className="text-violet-500 uppercase text-center">Extras</p>
      <h2 className="text-5xl text-center">
        My <span className="font-bold">Hobbies</span>
      </h2>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-20 mx-10">
          <div className="group flex-col cursor-pointer justify-center items-center border hover:border-violet-500  border-violet-100 rounded-md p-8 ">
            <BsController className="text-4xl text-gray-600 0" />
            <h1 className="text-xl text-gray-800 font-semibold group-hover:text-violet-500 my-2">
              I like to unwind every now and then with a story-enriched videogame.
            </h1>
          </div>
          <div className="group flex-col cursor-pointer justify-center items-center border   border-violet-100 rounded-md p-8 hover:border-violet-500">
            <SiCrunchyroll className="text-4xl text-gray-600 " />
            <h1 className="text-xl text-gray-800 font-semibold group-hover:text-violet-500 my-2">
              I'm a anime fan and love Japanese culture.
            </h1>
          </div>
          <div className="group flex-col cursor-pointer justify-center items-center border  border-violet-100 rounded-md p-8 hover:border-violet-500">
            <BsYoutube className="text-4xl text-gray-600 " />
            <h1 className="text-xl text-gray-800 font-semibold group-hover:text-violet-500 my-2">
              I try my best to keep up to date with tech news and listen to music.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default news;