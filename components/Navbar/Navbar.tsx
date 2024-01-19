import Image from "next/image";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center p-7">
      <div className="md:ml-20 select-none cursor-pointer">
        <Link href="/">
          <Image
            src="/lc-logo.png"
            width={80}
            height={80}
            alt="logo"
            className="select-none"
          />
        </Link>
      </div>
      <div className="md:mr-20">
        <Link href="/contato">
          <span className="text-blue-500 font-medium border-2 border-blue-500 rounded-full p-3 hover:bg-blue-500 hover:text-white duration-200 hover:cursor-pointer select-none">
            Entre em Contato
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
