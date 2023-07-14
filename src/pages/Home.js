import React, { useContext, useEffect, useState } from "react";
import { MovieContext } from "../context/movieContext";
import MovieCard from "../components/movieCard";
import Header from "../components/Header";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
function Home() {
  const { movie } = useContext(MovieContext);
  const filterProd = movie.filter((item) => {
    return item.id === 17 || item.id === 2 || item.id === 19;
  });
  const AwardWin = movie.filter((item) => {
    return item.ticket_price > 50000;
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible((prevVisible) => !prevVisible);
    }, 2000); // Toggle visibility every 3 seconds

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="container py-5 flex mx-auto scroll-smooth">
      <div className="flex flex-col">
        <div className="sticky z-10 top-0 border border-black px-12 rounded py-2 bg-neutral-50">
          <Header />
        </div>
        <div>
          <p className="font-bold text-6xl p-12">
            <div className="flex justify-start">
              <div
                className={`rounded-full blur-3xl w-20 h-20 z-0 bg-gradient-to-r from-red-400 to-red-700 bg-blur-sm transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"
                  } ease-in-out`}
              ></div>{" "}
            </div>
            Experience the{" "}
            <span className="bg-gradient-to-r from-red-500 to-red-800 text-transparent bg-clip-text">
              thrill{" "}
            </span>
            of the big screen by booking your cinema ticket today.
            <p className="text-xl font-normal pt-8">
              Be a part of the movie magic by reserving your seat in the cinema.
            </p>
            <div className="flex justify-end">
              <div className="flex justify-end absolute">
                <div
                  className={`rounded-full blur-3xl w-20 h-20 z-0 bg-gradient-to-r from-red-400 to-red-700 bg-blur-sm transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"
                    } ease-in-out`}
                ></div>{" "}
              </div>
            </div>
            <div className="bg-gradient-to-r from-red-500 to-red-800 "></div>
            {/* <div class="fixed top-0 left-0 w-screen h-screen z-0 bg-gradient-to-r from-red-500 to-red-800 bg-blur-sm"></div> */}
            <Link className="underline">
              <p className="text-2xl mt-2 mb-12 font-bold bg-gradient-to-r from-red-500 to-red-800 text-transparent underline bg-clip-text">
                Explore Trending Movies &#8594;
              </p>
            </Link>
            {/* <div class="rounded-full inset-0 blur-3xl w-20 h-20 z-0 bg-gradient-to-r from-red-500 to-red-800 bg-blur-sm"></div> */}
          </p>
        </div>
        <div className="flex my-4">
          <p className="text-3xl font-semibold">Upcoming Movies</p>
        </div>
        <div className="container flex">
          <div className="grid grid-cols-5 gap-6 mx-auto z-0">
            {/* <Link to={`/Movie/${id}`}> */}
            {filterProd.map((movieItem) => (
              <MovieCard movie={movieItem} key={movieItem.id} />
            ))}
            {/* </Link> */}
          </div>
        </div>
        <div className="flex my-4 mt-14">
          <p className="text-3xl font-semibold">Award-Winning Cinematic</p>
        </div>
        <div className="container max-w-7xl">
          <div className="">
            <Swiper
              spaceBetween={150}
              slidesPerView={5}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {AwardWin.map((movieItem) => (
                <SwiperSlide className="" key={movieItem.id}>
                  <div className="w-56">
                    <MovieCard movie={movieItem} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
