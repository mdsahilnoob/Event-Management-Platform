import React from "react";
import Image from "next/image";

interface NewsProps {
  name: string;
  title: string;
  content: string;
  image: string;
  className: string;
}

const NewsCards: React.FC<NewsProps> = ({
  name,
  title,
  content,
  image,
  className,
}) => {
  return (
    <div className="bg-light_tert dark:bg-light text-dark w-[85vw] md:w-3/4 overflow-hidden md:flex-col lg:flex-wrap h-full px-7 py-5 rounded-md">
      <hr />
      <h2 className="uppercase font-semibold text-center">{name}</h2>
      <hr />
      <div className={className}>
        <div className="grid grid-cols-1 gap-3">
          <h3 className="capitalize font-medium text-sm">{title}</h3>
          <p className="text-xs">{content}</p>
        </div>
        <Image
          src={image}
          alt="newscard-image"
          className="w-1/2 xl:w-32 h-32"
          width={48}
          height={48}
        />
      </div>
    </div>
  );
};

export default NewsCards;
