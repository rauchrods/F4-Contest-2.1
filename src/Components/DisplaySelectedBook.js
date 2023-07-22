

let DisplaySelectedBook = ({ selectedbook }) => {


    return (

        <div className="book-selected-container">
            {

                <div className="bookdetailselected">
                    <div className="img-cont">
                        <img src={selectedbook.volumeInfo.imageLinks.smallThumbnail} alt="" />
                    </div>
                    <div className="contents">
                        <h2>{selectedbook.volumeInfo.title}</h2>
                        <div className="auth_pub">
                            <div className="author">
                                {selectedbook.volumeInfo.authors.map((author) => {
                                    return <span>{author} /  </span>
                                })
                                }
                            </div>
                            <div className="publication">
                                <span>{selectedbook.volumeInfo.publisher}</span>
                                <span>{selectedbook.volumeInfo.publishedDate}</span>
                            </div>

                        </div>
                        <p>{selectedbook.volumeInfo.description}</p>
                        <div className="ratings">
                            <span>Avg Rating: {selectedbook.volumeInfo.averageRating} |</span>
                            <span>Rating Count: {selectedbook.volumeInfo.ratingsCount} |</span>
                            <span>Publisher: {selectedbook.volumeInfo.publisher} |</span>
                            <span>Language: {selectedbook.volumeInfo.language}</span>
                        </div>
                        <div className="button-grp">
                            <button onClick={() => { }}>Read Now!</button>
                            <button onClick={() => { }}>More Info!</button>
                        </div>

                    </div>

                </div>

            }
        </div>

    )

}

export default DisplaySelectedBook;
