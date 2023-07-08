import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import MovieCard from "../components/movieCard";
import { MovieContext } from "../context/movieContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.css";

const Children = () => {
  const { movie } = useContext(MovieContext);
  const filterProd = movie.filter((item) => {
    return item.age_rating <= 17;
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
    <div>
      <div className="container py-5 flex mx-auto">
        <div className="flex flex-col">
          <div className="sticky top-0 border border-black px-12 rounded py-2 bg-neutral-50">
            <Header />
          </div>
          <div>
            <p className="font-bold text-5xl p-12">
              <div className="flex justify-start">
                <div
                  className={`rounded-full inset-0 blur-3xl w-20 h-20 z-0 bg-gradient-to-r from-red-400 to-red-700 bg-blur-sm transition-opacity duration-1000 ${
                    isVisible ? "opacity-100" : "opacity-0"
                  } ease-in-out`}
                ></div>{" "}
              </div>
              Captivating journeys into realms of{" "}
              <span className="bg-gradient-to-r from-red-500 to-red-800 text-transparent bg-clip-text">
                imagination,{" "}
              </span>
              where laughter, learning, and cherished memories unfold.
              <p className="text-lg font-normal pt-8">
                Discover a world of enchantment and laughter with delightful
                movies crafted exclusively for young hearts.
              </p>
              <div className="flex justify-end">
                <div className="flex justify-end absolute">
                  <div
                    className={`rounded-full inset-0 blur-3xl w-20 h-20 z-0 bg-gradient-to-r from-red-400 to-red-700 bg-blur-sm transition-opacity duration-1000 ${
                      isVisible ? "opacity-100" : "opacity-0"
                    } ease-in-out`}
                  ></div>{" "}
                </div>
              </div>
              <div className="bg-gradient-to-r from-red-500 to-red-800 mb-10"></div>
            </p>
          </div>
          <div className="flex my-4">
            <p className="text-3xl font-semibold">Children's Favorite</p>
          </div>
          <div className="container max-w-7xl">
            <div className="">
              <Swiper
                spaceBetween={150}
                slidesPerView={5}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                {filterProd.map((movieItem) => (
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
    </div>
  );
};

export default Children;
