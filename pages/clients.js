import React from "react";

function clients() {
  return (
    <div id="About" className="flex-col justify-center items-center my-40">
      <p className="text-violet-500 uppercase text-center">About</p>
      <h2 className="text-5xl   text-center">
        Who is<span className="font-bold"> Brandan?</span><br/>
      </h2>
      <div className="flex justify-center items-center">
        <div className="flex-wrap justify-self-auto shrink md:text-left ">
          <p className="text-3xl px-8 py-8 ">
             I am a proud member of the Software Engineering team at Plato Alpha Designs specializing in web and web application development. I am skilled in various web technologies including HTML5, CSS, JavaScript and the Laravel framework. I love to work on a variety of projects and bring the ideas of individuals to life.
          </p>
        </div>
      </div>
    </div>
  );
}

export default clients;
