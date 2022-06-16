import React from "react";

function Card2({ tempInfo }) {
  const { temp, name, country } = tempInfo;
  return (
    <>
      <div className="p-12 lg:w-1/3 align-center">
        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-10 pb-15 rounded-lg overflow-hidden text-center relative">
          <h2 className="title-font sm:text-2xl text-xl font-medium text-black mb-1">
            Temperature : {temp}
          </h2>
          <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
            Your City :- {name} {country}
          </h1>
          <img
            className="text-indigo-500  mb-3 inline-block"
            src="https://img.icons8.com/officel/180/undefined/hot.png"
          />
        </div>
      </div>
    </>
  );
}

export default Card2;
