import React from "react";

const CheckBox = (props) => {
  console.log(props.category)
  return (
    <>
      {props.category.map((service, index) => (
        <div key={service.id} className="relative">
          
          <input
            className="peer hidden"
            id={`checkbox_${index + 1}`}
            type="checkbox"
            name="checkbox"
            value={service.name}
            checked={props.serviceCheck === service.name}
            onChange={(e) => props.checkfunc(e, service)}
          />
          <span
            className={`absolute bottom-3 right-3 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-teal-400 bg-white peer-checked:border-blue-950 peer-checked:bg-teal-400 transition-all ease-linear duration-500 `}
          ></span>
          <label
            className={`flex h-full cursor-pointer flex-col rounded-lg p-4 bg-white peer-checked:bg-teal-400 peer-checked:border peer-checked:border-blue-950 peer-checked:shadow-lg peer-checked:shadow-gray-400 peer-checked:text-blue-950 border border-teal-400 transition-all ease-linear duration-500`}
            htmlFor={`checkbox_${index + 1}`}
          >
            <span className="mt-2 font-bold text-blue-950 text-lg">
              {service.name}
            </span>
            <span className="text-xs uppercase">Tests</span>
          </label>
        </div>
      ))}
    </>
  );
};

export default CheckBox;
