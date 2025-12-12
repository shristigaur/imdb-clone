import './MovieCard.css'
function MovieCard({title, poster, year, rating}){
    return(
        <>
          <div className="movie-card">
            <img
               src={"/" + poster}
               alt={title}
               className="movie-poster"
            />
            <h1 className="movie-year">{year}</h1>
            <h1 className="movie-title">{title}</h1>
            <p className="movie-rating">
                ⭐ {rating}/10
            </p>
          </div>
        </>
    )
}
export default MovieCard;