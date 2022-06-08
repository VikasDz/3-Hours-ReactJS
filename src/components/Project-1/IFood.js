import React, { useState } from "react";
import Menu from "./menuApi.js";
import Body from "./Body";
import Footer from "./Footer";
import NavBar from "./NavBar";

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  
];

function IFood() {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    const updateList = Menu.filter((curElem) => {
      return curElem.category === category;
    });

    setMenuData(updateList);
  };

  return (
    <>
      <NavBar filterItem={filterItem} menuList={menuList}/>
      <Body menuData={menuData} />
      <Footer />
    </>
  );
}

export default IFood;
