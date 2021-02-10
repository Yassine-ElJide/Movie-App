const Movie = ({movie}) => {

    const IMGPATH = "https://image.tmdb.org/t/p/w1280";
    const{title, vote_average, overview, poster_path} = movie;
    return(
        <div className="movie">
            <img src={IMGPATH+poster_path} alt={title}/>
            <div className="movie-info">
                <h3>{title}</h3>
                <span>{vote_average}</span>
            </div>
            <div className="overview">
                <h3>Overview:</h3>
                <p>{overview}</p>
            </div>
        </div>
    );
};


export default Movie