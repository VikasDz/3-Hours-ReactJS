import React, { useEffect, useState } from "react";

function UseEffect() {
  // useEffect Use To Do Something After Rendering Your App...
  const initailData = 0;
  const [myNumber, setmyNumber] = useState(initailData);

  // useEffect(() => {
  //   first
  //   return () => {
  //     second
  //   }
  // }, [third]) -- Array Dependencies To Run First Time Only..

  useEffect(() => {
    document.title = `Project-2(${myNumber})`;
  });

  return (
    <>
      <div className="bg-red-200">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
            Using UseEffect Hooks :-)
          </h1>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
            {myNumber}
          </h1>
          <div className="flex justify-center">
            <button
              className="ml-4 inline-flex  text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-white rounded text-lg text-black"
              onClick={() =>
                myNumber > 0 ? setmyNumber(myNumber - 5) : setmyNumber(0)
              }
            >
              Decrement
            </button>
            <button
              className="ml-4 inline-flex  text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-white rounded text-lg text-black"
              onClick={() => setmyNumber(myNumber + 5)}
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

export default UseEffect;
