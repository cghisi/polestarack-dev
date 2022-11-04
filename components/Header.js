import React from "react";
import NextLink from "next/link";
import Image from "next/image";

const Header = ({ navigation }) => {
  return (
    <header
      style={{
        backgroundColor: navigation.data.background,
      }}
    >
      <div className="flex container mx-auto">
        <div className="flex items-center py-6 sm:w-1/3 md:w-2/5">
          <NextLink href={"/"} passHref>
            <a>
              <Image src="/polestar.png" alt="Polestar" width={110} height={42} />
            </a>
          </NextLink>
        </div>
      </div>
    </header>
  );
};

export default Header;