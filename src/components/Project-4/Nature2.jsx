import React from "react";

function Nature2({ tempInfo }) {
  const {
    humidity,
    pressure,

    speed,

    sunset,
  } = tempInfo;

  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;

  return (
    <>
      <div className="flex flex-wrap -m-0 text-center">
        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
          <div className="border-2 border-gray-200 px-4 py-2 rounded-lg">
            <img
              className="text-indigo-500 w-12 h-12 mb-3 inline-block"
              src="https://img.icons8.com/color/48/undefined/nautical-twilight.png"
            />
            <h2 className="title-font font-medium text-3xl text-gray-900">
              {timeStr}
            </h2>
            <p className="leading-relaxed text-black">Sunset</p>
          </div>
        </div>
        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
          <div className="border-2 border-gray-200 px-4 py-2 rounded-lg">
            <img
              className="text-indigo-500 w-12 h-12 mb-3 inline-block"
              src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/undefined/external-humidity-weather-justicon-lineal-color-justicon-1.png"
            />
            <h2 className="title-font font-medium text-3xl text-gray-900">
              {humidity}
            </h2>
            <p className=" text-black leading-relaxed">Humidity</p>
          </div>
        </div>
        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
          <div className="border-2 border-gray-200 px-4 py-2 rounded-lg">
            <img
              className="text-indigo-500 w-12 h-12 mb-3 inline-block"
              src="https://img.icons8.com/emoji/48/undefined/wind-face.png"
            />
            <h2 className="title-font font-medium text-3xl text-gray-900">
              {speed}
            </h2>
            <p className=" text-black leading-relaxed">Wind</p>
          </div>
        </div>
        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
          <div className="border-2 border-gray-200 px-4 py-2 rounded-lg">
            <img
              className="text-indigo-500 w-12 h-12 mb-3 inline-block"
              src="https://img.icons8.com/color/48/undefined/atmospheric-pressure.png"
            />
            <h2 className="title-font font-medium text-3xl text-gray-900">
              {pressure}
            </h2>
            <p className="text-black leading-relaxed">Pressure</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nature2;
