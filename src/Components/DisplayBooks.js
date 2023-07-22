

let DisplayBooks = ({ books, setSelectedBook }) => {


    return (

        <div className="book-display-container">
            {
                books.map((book, index) => {

                    return (
                        <div className="bookdetail" key={index} onClick={() => { setSelectedBook(book) }}>
                            <div className="img-cont">
                                {
                                    (book.volumeInfo.imageLinks.thumbnail!=null) ? <img src={book.volumeInfo.imageLinks.thumbnail} alt="" /> : <span>Img not available</span>
                                }

                            </div>
                            <div className="contents">
                                <h2>{book.volumeInfo.title}</h2>
                                <p>{book.volumeInfo.description}</p>
                                <button onClick={() => { setSelectedBook(book) }}>Read Now!</button>
                            </div>

                        </div>
                    );

                })
            }
        </div>




    )

}

export default DisplayBooks;