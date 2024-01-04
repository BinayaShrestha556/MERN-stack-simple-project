import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom'



export default function Navbar() {
 
  return (
    <div className='my-6 flex justify-between mx-auto w-[80%]'>
      <Link to='/'><button className='py-2 px-4 text-5xl rounded bg-slate-400 border border-slate-700'>home</button></Link>
      <Link to='/create'><button className='py-2 px-4 text-5xl rounded bg-slate-400 border border-slate-700'>create</button></Link>

    </div>
  )
}
