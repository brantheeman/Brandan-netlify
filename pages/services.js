import React from "react";
import {
    AiOutlineConsoleSql,
} from "react-icons/ai";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiGit } from "react-icons/si";

function services() {
  return (
    <div className="flex-col justify-center items-center my-20">
      <p className="text-violet-500 uppercase text-center">Languages</p>
      <h2 className="text-5xl  text-center">
        My Programming<span className="font-bold">Languages</span>
      </h2>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-2 md:mx-0 mx-10 md:grid-cols-3 gap-5 my-20">
          <div className="group flex-col cursor-pointer justify-center items-center border hover:bg-violet-500 hover:shadow-lg  border-violet-100 rounded-md p-8 hover:border-violet-500">
            <SiHtml5 className="text-4xl text-gray-600 group-hover:text-white" />
            <h1 className="text-xl text-gray-800 font-semibold group-hover:text-white my-2">
              HTML5
            </h1>
          </div>
          <div className="group flex-col cursor-pointer justify-center items-center border hover:bg-violet-500 hover:shadow-lg  border-violet-100 rounded-md p-8 hover:border-violet-500">
            <SiCss3 className="text-4xl text-gray-600 group-hover:text-white" />
            <h1 className="text-xl text-gray-800 font-semibold group-hover:text-white my-2">
              CSS3
            </h1>
          </div>
          <div className="group flex-col cursor-pointer justify-center items-center border hover:bg-violet-500 hover:shadow-lg  border-violet-100 rounded-md p-8 hover:border-violet-500">
            <SiJavascript className="text-4xl text-gray-600 group-hover:text-white" />
            <h1 className="text-xl text-gray-800 font-semibold group-hover:text-white my-2">
              JavaScript
            </h1>
          </div>
          <div className="group flex-col cursor-pointer justify-center items-center border hover:bg-violet-500 hover:shadow-lg  border-violet-100 rounded-md p-8 hover:border-violet-500">
            <AiOutlineConsoleSql className="text-4xl text-gray-600 group-hover:text-white" />
            <h1 className="text-xl text-gray-800 font-semibold group-hover:text-white my-2">
              SQL
            </h1>
          </div>
          <div className="group flex-col cursor-pointer justify-center items-center border hover:bg-violet-500 hover:shadow-lg  border-violet-100 rounded-md p-8 hover:border-violet-500">
            <SiReact className="text-4xl text-gray-600 group-hover:text-white" />
            <h1 className="text-xl text-gray-800 font-semibold group-hover:text-white my-2">
              React
            </h1>
          </div>
          <div className="group flex-col cursor-pointer justify-center items-center border hover:bg-violet-500 hover:shadow-lg  border-violet-100 rounded-md p-8 hover:border-violet-500">
            <SiGit className="text-4xl text-gray-600 group-hover:text-white" />
            <h1 className="text-xl text-gray-800 font-semibold group-hover:text-white my-2">
              Git
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default services;