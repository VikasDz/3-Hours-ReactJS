import React, { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "Increment") {
    state = state + 1;
  }
  if (state > 0 && action.type === "Decrement") {
    state = state - 1;
  }
  return state;
};

function UseReducer() {
  // dispatch is Use To Trigger Reducer Function..

  const initailData = 0;
  const [state, dispatch] = useReducer(reducer, initailData);

  return (
    <>
      <div className="bg-pink-500">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
            Using UseReducer Hooks :-)
          </h1>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
            {state}
          </h1>
          <div className="flex justify-center">
            <button
              className="ml-4 inline-flex  text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-white rounded text-lg text-black"
              onClick={() => dispatch({ type: "Decrement" })}
            >
              Decrement
            </button>
            <button
              className="ml-4 inline-flex  text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-white rounded text-lg text-black"
              onClick={() => dispatch({ type: "Increment" })}
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

export default UseReducer;
