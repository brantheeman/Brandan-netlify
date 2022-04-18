import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-3xl pb-6">
              Brandan<span className="text-indigo-600">Pratt</span>
            </p>
            <p className="text-gray-800 font-bold text-xl pb-3">
              Software<span className="text-indigo-600">Engineer</span>
            </p>
            <div className="flex gap-6 pb-5">
                <a>
              <FaGithub href="https://github.com/brantheeman" target="_blank" className="text-2xl cursor-pointer text-gray-500 hover:text-yellow-600" />
              </a>
              <a href="https://twitter.com/JCrimsxn" target="_blank">
              <FaTwitter className="text-2xl cursor-pointer text-gray-500 hover:text-violet-600" />
              </a>
              <a href='https://www.linkedin.com/in/brandan-p-267549114/' target="_blank">
              <FaLinkedin className="text-2xl cursor-pointer text-gray-500 hover:text-violet-600" />
              </a>
            </div>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
        <h1 className="text-sm text-gray-800 font-semibold">
          © 2019-2021 All rights reserved | Build with ❤ by{" "}
          <span className="hover:text-violet-600 font-semibold cursor-pointer">
            Streamline{" "}
          </span>
        </h1>
      </div>
    </>
  );
}

export default Footer;