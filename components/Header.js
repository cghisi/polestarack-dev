import React from "react";
import NextLink from "next/link";
import { useEffect, useState } from "react";

import Navigation from "./Navigation";

const Header = ({ navigation }) => {
  
  const [clientWindowHeight, setClientWindowHeight] = useState("");

  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [textColor, setTextColor] = useState(0);
  const [boxShadow, setBoxShadow] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight / 600;
    if (backgroundTransparacyVar < 1) {
      let boxShadowVar = backgroundTransparacyVar * 0.1;
      setBackgroundTransparacy(backgroundTransparacyVar);
      setBoxShadow(boxShadowVar);
      setTextColor("#fff")
    }else{
      setTextColor("#000")
    }
  }, [clientWindowHeight]);


  return (
    <header>
      <div className="inset-x-0 mx-auto fixed z-30 text-white" style={{
        background: `rgba(255, 255, 255, ${backgroundTransparacy})`,
        boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
        color: `${textColor}`
      }}>
        <div className="container mx-auto px-5 flex justify-between items-center py-6" >
          <Navigation navigation={navigation} />
          <NextLink href={"/"} passHref className="w-1/3">
            <a className="text-3xl text-right">
              Polestar
            </a>
          </NextLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
