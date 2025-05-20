import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

const Button = (props) => {
  const defaultClass =
    "bg-teal-300 px-5 py-2 text-2xl cfont-nunito w-fit text-blue-950 rounded-lg shadow-md border border-blue-950 hover:bg-blue-950 hover:border hover:border-teal-400 hover:text-teal-400  transition-all ease-linear duration-500";

  return (
    <button
      className={classNames(props.customClass, defaultClass)}
      onClick={props.bifunc}
    >
      {props.bname}
    </button>
  );
};

const MyLinks = (props) => {
  const defaultClass =
    " text-3xl  font-black  hover:text-blue-950 transition-all ease-linear duration-300  text-teal-400";
  return (
    <Link
      to={props.path}
      className={classNames(props.customClass, defaultClass)}
      onClick={props.LFunc}
    >
      {props.LIcon}
      <span>{props.LName}</span>
    </Link>
  );
};




export default Button;
export { MyLinks };
