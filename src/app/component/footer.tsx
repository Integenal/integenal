import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <div className="bg-[#020F12] h-fit text-center py-2 text-white flex flex-row justify-center gap-4 items-center">
      <Image
        className="h-28"
        src="./assets/svg/Frame-8.svg"
        width={50}
        height={50}
        alt="logo"
      />
    </div>
  );
};
export default Footer;
