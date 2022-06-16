import React from "react";

function Card({ tempInfo }) {
  const { weathermood } = tempInfo;
  return (
    <>
      <div className="p-12 lg:w-1/3">
        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-10 pb-15 rounded-lg overflow-hidden text-center relative">
          <h2 className="title-font sm:text-2xl text-xl font-medium text-black mb-1">
            Weather Mood ✌
          </h2>
          <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
            {weathermood}
          </h1>
          <img
            className="text-indigo-500  mb-3 inline-block"
            src="https://img.icons8.com/plasticine/200/undefined/fog-night--v1.png"
          />
        </div>
      </div>
    </>
  );
}

export default Card;
