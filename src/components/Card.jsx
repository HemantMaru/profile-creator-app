import React from "react";

const Card = (props) => {
  console.log(props);
  return (
    <div className="min-h-96">
      <div className="bg-[#27272A] rounded-xl mb-6 hover:scale-102 transition duration-300 h-96 w-full lg:w-80 p-0.5">
        <img
          className="rounded-[50%] h-27 w-27 object-cover object-center text-center m-auto mt-5 "
          src={props.title.ImgUrl}
          alt="Profile Image"
        />
        <h2 className="text-2xl mt-2 font-bold text-center">
          {props.title.Text}
        </h2>
        <h2 className="text-2xl mt-2 text-blue-300 font-bold text-center">
          {props.title.Role}
        </h2>
        <p className="text-lg px-3  font-light text-center mt-4 h-20">
          {props.title.Decription}
        </p>
        <button
          onClick={function () {
            props.handledelete(props.idx);
          }}
          className="w-full px-2 mt-7 mb-1 active:scale-97 cursor-pointer bg-red-400"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Card;
