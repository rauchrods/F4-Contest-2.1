

let DisplayBooks = ({ books, setSelectedBook }) => {


    return (

        <div className="book-display-container">
            {
                books.map((book, index) => {

                    return (
                        <div className="bookdetail" key={index}>
                            <div className="img-cont">
                                <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="" />
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