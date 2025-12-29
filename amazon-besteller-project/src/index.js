import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {books} from './books.js'
import Books from './Book.js'


const BookList = () => {
    const getBooks = (id) => {
        const book =   books.find((book) => book.id === id);
        console.log(book);
    };
    //getBooks(2);

    return (
        <>
        <section className='pageTitle'>
            <h1>Amazon Best Sellers</h1>
        </section>

        <section className='booklist'>

            {books.map((book, index)=>{
             return  <Books book={book} key={book.id} number={`#${index+1}`}/>
            })}

        </section>
            </>

            /*
        <section className='booklist'>
            <Books author ={firstBook.author} title = {firstBook.title} img = {firstBook.img}/>
            <Books author ={secondBook.author} title = {secondBook.title} img = {secondBook.img}/>
            <Books/>
            <Books/>
        </section>

         */
    );
};



        //An alternative way of doing the one above
        /*const Author =() => {
            const inLineHeadingStyles = {
                color:'#617d98',
                fontSize:'0.75rem',
                marginTop:'0.5rem'
            };
            return <h4 style={inLineHeadingStyles}>Dav Pilkey</h4>
        }
         */

        const root= ReactDOM.createRoot(document.getElementById('root'))
        root.render(<BookList/>)

        //export default Books
