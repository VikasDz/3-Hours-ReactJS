import React, { useState } from "react";

function UseStat() {
  const initailData = 0;

  // useState Hooks Use To Change State of Variable Without Reloading Your Page..
  const [myNumber, setmyNumber] = useState(initailData);

  return (
    <>
    
      <div className="bg-black">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Using UseState Hooks :-)
          </h1>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            {myNumber}
          </h1>
          <div className="flex justify-center">
            <button
              className="ml-4 inline-flex  text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-white rounded text-lg text-black"
              onClick={() =>
                myNumber > 0 ? setmyNumber(myNumber - 1) : setmyNumber(0)
              }
            >
              Decrement
            </button>
            <button
              className="ml-4 inline-flex  text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-white rounded text-lg text-black"
              onClick={() => setmyNumber(myNumber + 1)}
            >
              Increment
            </button>
            <button
              className="ml-4 inline-flex  text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-white rounded text-lg text-black"
              onClick={() => window.location.reload()}
            >
              Referesh
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UseStat;
