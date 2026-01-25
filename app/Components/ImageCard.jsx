import Image from "next/image";
import React from "react";

const ImageCard = ({ src, title, alt }) => {
  return (
    <div className="group m-5 mx-auto relative w-fit overflow-hidden rounded-lg">
      <Image
        src={src}
        width={500}
        height={500}
        alt={alt}
        className="h-52 w-52 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex items-end bg-linear-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h1 className="p-4 text-xl font-bold text-white">{title}</h1>
      </div>
    </div>
  );
};

export default ImageCard;
