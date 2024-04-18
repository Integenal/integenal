import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  id: string;
  name: string;
  position: string;
  link: string;
}

const Mem: React.FC<Props> = ({ id, name, link, position }) => {
  return (
    <div className="">
      <Link href={link}>
        <div className="w-full flex justify-center">
          <Image
            src={`./assets/svg/integenal-mem-${id}.png`}
            alt={name}
            width={155}
            height={155}
          />
        </div>
        <div className="text-3xl mt-5 text-center ">{name}</div>
        <div className="text-xl font-Popp3  text-gray-700 mt-5 text-center">
          {position}
        </div>
      </Link>
    </div>
  );
};
export default Mem;
