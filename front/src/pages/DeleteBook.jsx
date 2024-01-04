import axios from 'axios';
import React,{useState} from 'react'
import { useParams,useNavigate } from 'react-router-dom'


export default function DeleteBook() {
  const [loading, setLoading] = useState(false);
  const{ id }=useParams()
  const navigate=useNavigate()
  const handleOnClick=()=>{
    setLoading(true)
    axios.delete(`http://localhost:3000/books/${id}`).then(()=>{
      setLoading(false);
      navigate('/')
    }).catch((err)=>{
      console.log(err)
    })
  }
  
  return (
    <div className='w-[40%] mx-auto my-20 bg-red-500 text-white flex flex-col justify-center items-center p-10 gap-5 text-xl shadow-4xl'>
      <p className='font-bold'>Are you sure to delete this book?</p>
      <div className=' flex gap-4'>
      <button onClick={()=>handleOnClick()}  className='py-3 w-40 text-lg bg-black text-white'>yes i am</button>
      <button onClick={()=>navigate("/")} className='py-3 w-40 text-lg bg-black text-white'>no, cancle the delete</button>
      </div>
      
    </div>
  )
}
