"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");


const personalMovieDB = {
    counts: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов", ""),
          b = prompt("На сколько оцените его", "");
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }  
}

// 2 варианта написания цикла через while и do
// let i = 0;
// while (i < 2) {
//     const a = prompt("Один из последних просмотренных фильмов", ""),
//           b = prompt("На сколько оцените его", "");
//     i++;
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }  
// }


// do {
//     const a = prompt("Один из последних просмотренных фильмов", ""),
//           b = prompt("На сколько оцените его", "");
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }  
//     i++;
// }
// while (i < 2);

if (personalMovieDB.counts < 10) {
    console.log('Просмотренно довольно мало фильмов');
} else if (personalMovieDB.counts >= 10 && personalMovieDB.counts <= 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.counts > 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);

