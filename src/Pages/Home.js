import React, { useEffect, useState } from "react";
import Spinner from "../Component/Spinner";
import Post from "../Component/Post";

const Home = () => {
  const API = "https://my-project-ihdl.onrender.com/api/v1/getallImages";
  const [loading, setLoading] = useState(false);
  const [Cards, setCards] = useState([]);

  const fetchApiData = async (url) => {
    setLoading(true);
    try {
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      console.log(data.fetch);
      setCards(data.fetch);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchApiData(API);
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : Cards.length > 0 ? (
        <div className="grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh] ">
          {Cards.map((card) => (
            <Post key={card.id} card={card} />
          ))}
        </div>
      ) : (
        <div className="flex  justify-center items-center">
          <p className=" text-slate-600 font-semibold text-lg ">
            No Data Found
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
