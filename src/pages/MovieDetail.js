import React, { useContext } from "react";
import { MovieContext } from "../context/movieContext";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const { movie } = useContext(MovieContext);
  const { id } = useParams();
  const detail = movie.find((item) => {
    return item.id === parseInt(id);
  });
  const {
    title,
    description,
    release_date,
    poster_url,
    age_rating,
    ticket_price,
  } = detail;
  function seats(){
    window.location.href = "/Book"
  }
  // console.log(detail);
  return (
    <div
      className="bg-contain bg-center w-screen h-screen bg-gradient-to-tr flex flex-row justify-center gap-24"
      style={{
        backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8)), url(${poster_url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundSize: "10%, 36%",
        width: "100%",
      }}
    >
      <div className="flex flex-col justify-center gap-10">
        <div>
          <p className="flex font-bold text-4xl pb-1 text-white ">
            {title} &nbsp;{" "}
            <span className="font-normal text-sm my-auto px-2 bg-neutral-500 text-white">
              {age_rating}
            </span>
          </p>
          <p className="text-white flex font-medium">
            {release_date.split("-")[0]}
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-white text-justify w-[40rem] mb-4">
            {description}
          </p>
          <div className="flex flex-col">
            <div className="border border-white rounded-full w-[120px] bg-white flex justify-center">
              <p className="text-red-400 text-justify font-bold">
                Rp. {ticket_price}
              </p>
            </div>
          </div>
        </div>

        <div className="flex">
          <button onClick={seats} className="border border-white py-2 px-6 hover:bg-red-700 text-white active:translate-y-1">
            Buy Ticket
          </button>
        </div>
      </div>
      <div className="my-32">
        <img
          className="w-[300px] justify-center items-center shadow-2xl shadow-neutral-900 "
          src={poster_url}
        ></img>
      </div>
    </div>
  );
};

export default MovieDetail;
