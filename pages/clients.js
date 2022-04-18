import React from "react";
import {
  FaMicrosoft,
  FaDiscord,
  FaApple,
  FaAmazon,
  FaUber,
} from "react-icons/fa";

function clients() {
  return (
    <div className="flex-col justify-center items-center my-40">
      <p className="text-violet-500 uppercase text-center">About</p>
      <h2 className="text-5xl   text-center">
        Who is<span className="font-bold"> Brandan?</span>
      </h2>
      <div className="flex justify-center items-center">
        <div className="justify-self-auto ">
          <p className="text-4xl text-center w-auto h-auto">
              I am a problem solver, a builder, I am a Software Engineer.{'\n'}
              I chose Programming because I had a love for videogames.
          </p>
        </div>
      </div>
    </div>
  );
}

export default clients;