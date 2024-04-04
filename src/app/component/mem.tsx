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
    <div>
      <Link href={link}>
        <Image
          src={`./assets/svg/integenal-mem-${id}.svg`}
          alt={name}
          width={155}
          height={155}
        />
        <div className="text-3xl mt-5 text-center ">{name}</div>
        <div className="text-xl font-Popp3 text-center text-gray-700 mt-5 ">
          {position}
        </div>
      </Link>
    </div>
  );
};
export default Mem;
