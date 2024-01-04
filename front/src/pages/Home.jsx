import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import axios from "axios";
import { Link } from "react-router-dom";


export default function Home() {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  // const [conform, setConform]=useState(false)
  
  const promp=(id)=>{
    const conform=confirm("are you sure you want to delete this file?")
    if(conform){
      handleOnClick(id)
    }

  }
 
 
  const load=()=>{
    setLoading(true);
    axios
      .get("http://localhost:3000/books")
      .then((res) => {
        setLoading(false);
        setBooks(res.data.data);
        // console.log(books);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3000/books")
      .then((res) => {
        setLoading(false);
        setBooks(res.data.data);
        // console.log(books);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  const handleOnClick=(id)=>{
    setLoading(true)
    axios.delete(`http://localhost:3000/books/${id}`).then(()=>{
      setLoading(false);
      load();
    }).catch((err)=>{
      console.log(err)
    })
  }
  return (
    <div>
      <div className=""></div>
      {loading ? (
        <Spinner />
      ) : (
        <table className="mx-auto w-[80%] my-10">
          <thead>
            <tr className="border">
              <th className="border-2 border-black">SN</th>

              <th className="border-2 border-black">title</th>
              <th className="border-2 border-black">author</th>
              <th className="border-2 border-black">published year</th>
              <th className="border-2 border-black">actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={book._id} className="border border-black p-4">
                <td className="border p-4 border-black">{index + 1}</td>

                <td className="border p-4 border-black">{book.title}</td>

                <td className="border p-4 border-black">{book.author}</td>
                <td className="border p-4 border-black">
                  {book.publishedYear}
                </td>
                <td className="border p-4 border-black">
                  <Link to={`/edit/${book._id}`}>
                    <p className="py-2 font-bold">edit</p>
                  </Link>
                  {/* <Link to={`/delete/${book._id}`}> */}
                    <p onClick={()=>promp(book._id)}className="py-2 font-bold text-red-500">delete this</p>
                  {/* </Link> */}
                  <Link to={`/show/${book._id}`}>
                   
                    <p className="py-2 font-bold">show details</p>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
