import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ShowBook from "./pages/ShowBook";
import DeleteBook from "./pages/DeleteBook";
import EditBook from "./pages/EditBook";
import Spinner from "./components/Spinner";
import Navbar from "./components/Navbar";
import CreateBooks from "./pages/CreateBooks";

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/show/:id" element={<ShowBook />} />
          <Route path="/delete/:id" element={<DeleteBook />} />
          <Route path="/edit/:id" element={<EditBook />} />
          <Route path="/create" element={<CreateBooks/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
