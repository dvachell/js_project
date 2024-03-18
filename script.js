const numberOfFilms = +prompt("Сколько фильмов посмотрел?", "");
 
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Какой последний фильм?"),
      b = prompt("Оценка"),
      c = prompt("Какой последний фильм?"),
      d = prompt("Оценка");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);