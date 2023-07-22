import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import DisplayBooks from './Components/DisplayBooks';
import DisplaySelectedBook from './Components/DisplaySelectedBook';

function App() {

 let [books, setbooks]= useState("");

 let [selectedbook, setSelectedBook] = useState("");

//  let [searchedbooks, setsearchedbooks] = useState("");

 useEffect(()=>{


    fetch("https://www.googleapis.com/books/v1/volumes?q=harry+potter", {
      method: 'GET'  
    })
    .then(response => response.json())
    .then(result => result.items)
    .then(data =>{
      setbooks(data);
  
      fetch("https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes", {
        method: 'GET'  
      })
      .then(response => response.json())
      .then(result => result.items)
      .then(data =>{
        let newarr = [...books];
        data.forEach((book) =>{
          newarr.push(book);
        })
        setbooks(newarr);
      })
  
    })
    .catch(error => console.log('error', error));




},[]); // eslint-disable-line react-hooks/exhaustive-deps

 console.log(books);

  return (
    <>
       <Navbar  setbooks={setbooks}/>

       {
        selectedbook!=="" &&

        <DisplaySelectedBook selectedbook={selectedbook}/>

       }

       {
        books!=="" &&

        <DisplayBooks books={books} setSelectedBook={setSelectedBook}/>
       }



    </>
  );
}

export default App;
