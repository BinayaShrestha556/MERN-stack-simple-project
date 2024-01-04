const express=require('express')
const Book =require("../bookModel.js")
const router=express.Router();

//post the books
router.post("/", async (request, response) => {
    try {
      if (
        !request.body.title ||
        !request.body.author ||
        !request.body.publishedYear
      ) {
        return response.status(400).send({
          message: "Send all required fields: title, author, publishYear",
        });
      }
      const newBook = {
        title: request.body.title,
        author: request.body.author,
        publishedYear: request.body.publishedYear,
      };
  
      const book = await Book.create(newBook);
  
      return response.status(201).send(book);
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });
  
  //get all books
  
  router.get("/", async (req, res) => {
    const books = await Book.find({});
    try {
      return res.status(200).json({
        count: books.length,
        data: books,
      });
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  });
  
  //get single book by id
  router.get("/:id", async (req, res) => {
    const books = await Book.findById(req.params.id);
    try {
      return res.status(200).json(books);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  });
  
  //update single book by id
  router.put('/:id', async (req,res)=>{
      
      try {
          if(
          !req.body.title ||
          !req.body.author ||
          !req.body.publishedYear
          ){
              return res.status(400).send({message: "send all required feild"})
          }else{
              const result = await Book.findByIdAndUpdate(req.params.id,req.body)
              if(!result){
                  return res.status(404).send({message: "book not found"})
              }
              return res.status(200).send({message: "updated"})
          }
  
      } catch (error) {
          console.log(error)
          res.status(500).send({error: error.message})
      }
  })
  //delete single by id
  router.delete('/:id',async (req,res)=>{
      try {
          const result= await Book.findByIdAndDelete(req.params.id);
          if(!result){
              return res.status(404).json({message: "book not found"})
          }
              return res.status(200).json({message: "successfully deleted"})
          
      } catch (error) {
          console.log(error.message)
          res.status(500).send({message: error.message})
      }
  })
  module.exports=router;