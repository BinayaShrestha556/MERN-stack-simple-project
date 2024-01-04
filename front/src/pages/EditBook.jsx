import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

export default function CreateBooks() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishedYear, setPublishedYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate=useNavigate()
  const data = {
    title,
    author,
    publishedYear,
  };

  const { id }=useParams()
  useEffect(()=>{
    axios.get(`http://localhost:3000/books/${id}`).then((res)=>{
      setTitle(res.data.title)
      setAuthor(res.data.author)
      setPublishedYear(res.data.publishedYear)
    }).catch((err)=>{
      console.log(err)
    })
  },[])
  const handleOnClick = () => {
    setLoading(true);
    axios
      .put(`http://localhost:3000/books/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate("/");
        console.log("success");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    
    <div className="w-full">
            <div className=" text-5xl my-5 text-center mx-auto w-[80%]">Edit Book</div>

      {loading ? (
        <Spinner />
      ) : (
        <div className=" flex flex-col w-1/2 mx-auto my-10 py-4 px-8  bg-slate-100 border border-slate-300 gap-8 ">
          <div className="flex flex-col gap-1 justify-center">
            <label className="text-3xl font-bold px-2"> Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border border-black p-3 rounded flex-grow text-xl"
              placeholder="enter book title"
            />
          </div>
          <div className="flex flex-col gap-1 justify-center">
            <label className="text-3xl font-bold px-2"> Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="border border-black p-3 rounded flex-grow text-xl"
              placeholder="enter book title"
            />
          </div>
          <div className="flex  flex-col gap-1 justify-center">
            <label className="text-3xl font-bold px-2"> Published Year</label>
            <input
              type="text"
              value={publishedYear}
              onChange={(e) => setPublishedYear(e.target.value)}
              className="border border-black p-3 rounded flex-grow text-xl"
              placeholder="enter book title"
            />
          </div>
          <button
            className="border border-green-600 rounded bg-green-500 w-1/2 py-3 self-center"
            onClick={() => handleOnClick()}
          >
            
            Submit
          </button>
        </div>
      )}
    </div>
  );
}

