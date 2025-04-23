import React from "react";
import { MyLinks } from "../Button";

const SCards = (props) => {
  return (
    <>
      <div className="border-2 border-teal-400 p-6 bg-teal-50 rounded-xl w-[475px] h-[225px] shadow-md hover:scale-105 transform transition-all ease-linear duration-300   ">
        <div className="w-auto  h-auto p-3 inline-flex items-center justify-center bg-teal-400 shadow-md rounded-full mb-4 ">
          {props.Svgs}
        </div>
        <h2 className="text-xl text-teal-400 font-bold title-font mb-2">
          {props.Title}
        </h2>
        <p className="leading-relaxed text-blue-950 text-base font-medium">
          {props.Para}
          

        </p>

      </div>
    </>
  );
};

const ACards = (props) => {
  return (
    <>
      <div className="bg-teal-50 p-6 rounded-2xl border-2 border-teal-400 shadow-lg">
        <img
          src="https://via.placeholder.com/150"
          alt="Team Member"
          class="w-32 h-32 mx-auto rounded-full mb-4"
        ></img>
        <h1 class="text-2xl font-bold text-center mb-2 text-blue-950">
            {props.Name}
        </h1>
        <p class=" text-center text-blue-950">{props.Desc}</p>
      </div>
    </>
  );
};

export default SCards;
export { ACards };
