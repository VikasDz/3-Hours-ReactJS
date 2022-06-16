import React, { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";
import Card2 from "./Card2";
import Nature2 from "./Nature2";

function Nature() {
  const [searchValue, setsearchValue] = useState("Patna");
  const [tempInfo, settempInfo] = useState({});
  const getReport = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=50055021c11ecdc06ec22e19698d3963`;

      const res = await fetch(url);
      const data = await res.json();

      const { temp, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunrise, sunset } = data.sys;

      const myNewArray = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunrise,
        sunset,
      };

      settempInfo(myNewArray);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getReport();
  }, []);

  useEffect(() => {
    document.title = `Weather-Report`;
  });

  return (
    <>
      <div className="container bg-red-500">
        <div className="text-gray-600 body-font ">
          <div className="container px-5 py-5 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Weather Report 🌡
              </h1>
              <section className="text-gray-600 body-font ">
                <div className="container px-2 py-2 ">
                  <div className="flex flex-wrap -m-2">
                    <Card2 tempInfo={tempInfo} />
                    <div className="p-12  lg:w-1/3">
                      <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                        <img
                          className="text-indigo-500 w-12 h-12 mb-1 inline-block"
                          src="https://img.icons8.com/office/48/undefined/chance-of-storm.png"
                        />
                        <div className="lg:w-1/2 md:w-2/3 mx-auto">
                          <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-full">
                              <div className="relative">
                                <label
                                  htmlFor="name"
                                  className="leading-7 text-sm text-gray-600"
                                >
                                  Enter City :)
                                </label>
                                <input
                                  type="text"
                                  id="name"
                                  name="name"
                                  value={searchValue}
                                  onChange={(e) =>
                                    setsearchValue(e.target.value)
                                  }
                                  className="w-full bg-gray-100 bg-opacity-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                              </div>
                              <button
                                onClick={getReport}
                                className="mt-4  inline-flex  text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-white rounded text-lg text-black"
                              >
                                Search
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Card tempInfo={tempInfo} />
                  </div>
                </div>
              </section>
            </div>
            <Nature2 tempInfo={tempInfo} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Nature;
