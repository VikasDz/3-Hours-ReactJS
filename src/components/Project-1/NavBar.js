import React from "react";

function NavBar({ filterItem, menuList }) {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 ">
            <img
              className="hover: cursor-pointer"
              src="https://img.icons8.com/office/40/undefined/gingerbread-house.png"
            />

            <span className="ml-3 text-xl">iFood</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            {menuList.map((curElem) => {
              return (
                <a
                  className="mr-5 hover:text-pink-900 cursor-pointer"
                  onClick={() => filterItem(curElem)}
                >
                 {curElem}
                </a>
              );
            })}
          </nav>
          <button
            className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-black rounded text-lg text-gray"
            onClick={() => window.location.reload()}
          >
            Refresh
          </button>
        </div>
      </header>
    </>
  );
}

export default NavBar;
