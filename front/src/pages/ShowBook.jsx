import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

export default function ShowBook() {
  const [loader, setLoader] = useState(false);
  const [book, setBook] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    setLoader(true);
    axios.get(`http://localhost:3000/books/${id}`).then((res) => {
      setBook(res.data);
      // console.log(res)
      // console.log(book)
      setLoader(false);
    });
  }, []);
  return (
    <div className="w-full">
      {loader ? (
        <Spinner />
      ) : (
        <div className="w-1/2 m-auto mt-3 flex gap-4 justify-center flex-col items-center p-10 bg-slate-100 border border-slate-300">
          <div className="flex items-center gap-1">
            <p className="text-lg font-semibold">title: </p>
            {book.title}
          </div>
          <div className="flex items-center gap-1">
            <p className="text-lg font-semibold">id: </p>
            {book._id}
          </div>
          <div className="flex items-center gap-1">
            <p className="text-lg font-semibold">author: </p>
            {book.author}
          </div>
          <div className="flex items-center gap-1">
            <p className="text-lg font-semibold">published year: </p>
            {book.publishedYear}
          </div>
          <div className="flex items-center gap-1">
            <p className="text-lg font-semibold">uploaded time: </p>
            {new Date(book.createdAt).toString()}
          </div>
          <div className="flex items-center gap-1">
            <p className="text-lg font-semibold">updated time: </p>
            {new Date(book.updatedAt).toString()}
          </div>
        </div>
      )}
    </div>
  );
}
