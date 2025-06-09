import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination ,  Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import BookCard from "../books/BookCard";
import { useFetchAllBooksQuery } from "../../redux/features/books/booksApi";

const Recommended = () => {
  
  const {data: books = []} = useFetchAllBooksQuery();
  
  // console.log(books)


  // useEffect(() => {
  //   fetch("books.json")
  //     .then((res) => res.json())
  //     .then((data) => setBooks(data))
  //     .catch(err => console.error(err));
  // }, []);

  // console.log(books);

  return (
    <div className="py-16 px-5 bg-white shadow-md inset-shadow-sm rounded-lg m-5">
      <h2 className="text-3xl font-semibold mb-6 dark:text-black">New Arrival Books</h2>
      
      <Swiper
          slidesPerView={1}
          spaceBetween={30}
          navigation={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            375: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            425: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            1180: {
              slidesPerView: 2,
              spaceBetween: 50,
            }
          }}
          modules={[Pagination , Navigation]}
          className="mySwiper"
        >
          {
            books.length > 0 && books.slice(5, 10).map((book, index) => (
              <SwiperSlide key={index}>            
                <BookCard book={book} />
              </SwiperSlide>
            ))
          }

        </Swiper>
    </div>
  );
};

export default Recommended;
