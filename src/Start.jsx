import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div className="w-[384px] bg-[#191626] text-white py-9 rounded-3xl text-center flex flex-col gap-5 mt-64">
      <h2 className="font-[Roboto Mono] text-xl">Pokemon type guessing quiz</h2>
      <ul className="flex flex-col gap-5 items-center text-xl ">
        <li>you have 1 minute</li>
        <li>get as many correct as you can</li>
        <Link
          to="quiz"
          className="text-[#E7E4E4] bg-[#342e59] w-1/3 p-3 rounded-md"
        >
          Start Quiz
        </Link>
      </ul>
    </div>
  );
};

export default Start;
