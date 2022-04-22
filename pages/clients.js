import React from "react";

function clients() {
  return (
    <div id="About" className="flex-col justify-center items-center my-40">
      <p className="text-violet-500 uppercase text-center">About</p>
      <h2 className="text-5xl   text-center">
        Who is<span className="font-bold"> Brandan?</span><br/>
      </h2>
      <div className="flex justify-center items-center">
        <div className="flex-wrap justify-self-auto shrink md:text-center ">
          <p className="text-3xl px-8 py-8 ">
              I am a problem solver, a builder, I am a Software Engineer.<br/>
              I chose Programming because I had a love for videogames.<br/> I started by taking a course in
              Software Developement Fundamentals from Synergy Bahamas.<br/> From the moment I passed the course with an "A"
              I knew that I wanted to continue being a Developer.<br/> I proceeded to enroll in the Bahamas Technical and Vocational Institute, <br/>
              where I got my foundation in understanding the principles of Programming.
          </p>
        </div>
      </div>
    </div>
  );
}

export default clients;