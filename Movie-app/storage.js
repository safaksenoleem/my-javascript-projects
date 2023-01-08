function Storage() { }

Storage.prototype.addMovieToStorage = function (name, poster, type, visiondate) {
    let movies = this._getMovieFromStorage();

    let movie = {
        name: name,
        poster: poster,
        type: type,
        visiondate: visiondate,
    };

    movies.push(movie);
    localStorage.setItem("movies", JSON.stringify(movies));
};

Storage.prototype._getMovieFromStorage = function () {
    let movies;
    if (localStorage.getItem("movies") === null) {
        movies = [];
    } else {
        movies = JSON.parse(localStorage.getItem("movies"));
    }
    return movies;
};

Storage.prototype.deleteMovInStorage = function (name) {
    let movies =this._getMovieFromStorage();

    movies.forEach(function (mov, index) {
        if (mov.name == name) {
            console.log(mov.name + " " + index);
            movies.splice(index, 1);
        }
    });

    localStorage.setItem("movies", JSON.stringify(movies));
};