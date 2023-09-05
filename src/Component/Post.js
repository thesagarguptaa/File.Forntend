import React from "react";

const Post = ({ key, card }) => {
  console.log(card);

  return (
    <div className="flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline ">
      <div>
        <p className=" text-gray-700 font-semibold text-lg  truncate w-40 mt-1 flex justify-center ">
          {card.imageName}
        </p>
      </div>
      <div>
        <p className=" text-gray-700 font-semibold text-lg  w-full mt-1 flex flex-col justify-center ">
          {card.imageDescription}
        </p>
      </div>

      <div className="h-[180px]">
        <img
          src={card.imageUrl}
          className="h-full w-full border-4 border-black "
        />
      </div>
    </div>
  );
};

export default Post;
