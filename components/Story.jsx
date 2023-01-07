import React from "react";

function Story({ img, username }) {
  return (
    <div>
      <img
        src={img}
        alt=""
        className="w-14 h-14 rounded-full 
                  p-[1.5px] border-red-500 border-2 cursor-pointer
                  object-contain hover:scale-110 transition-all 
                  transform duration-200 ease-outI"
      />
      <p className=" text-sm w-14 truncate text-center">{username}</p>
    </div>
  );
}

export default Story;
