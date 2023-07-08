import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const {
    id,
    title,
    description,
    release_date,
    poster_url,
    age_rating,
    ticket_price,
  } = movie;
  console.log(movie);
  return (
    <Link to={`/Movie/${id}`}>
      <div className="">
        <div>
          <div
            className="
      mb-4 relative overflow-hidden group transistion"
          >
            <div>
              <img
                className="w-[250px] group-hover:scale-110 transition duration-300"
                src={poster_url}
                alt="Poster"
              />
            </div>
          </div>
          <div
            className="group-hover:right-5 
        p-2 flex flex-row gap-y-2 opacity-0 
        group-hover:opacity-100 transition-all duration-300"
          ></div>
        </div>
        <div className="flex flex-col">
          <div className="font-semibold mb-1 flex">{title}</div>
          <div className="text-sm capitalize text-gray-600 flex">
            {release_date.split("-")[0]}
          </div>
          <div className="font-bold text-black flex">Rp. {ticket_price}</div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
