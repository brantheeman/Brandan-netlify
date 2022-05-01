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
              I am an experienced Software Engineer located in Nassau, Bahamas. I am pursuing my Associates Degree in Software Engineering.
              I have been a Software Developer for one year now, and I am open to working on projects of all sorts, mainly in Web Development.
              I am proficient with HTML5, CSS3, and JavaScript, and I am currently developing my skills with React and Vue. I am knowlegeable about database management, python, and java, but I mainly focus on web technologies.
              If you're interested in working with me, feel free to contact me to get in touch. I look forward to helping your project come to life.
          </p>
        </div>
      </div>
    </div>
  );
}

export default clients;