"use strict";

let numberOfFilms;

function start() {
    while (numberOfFilms == '' || numberOfFilms == null || numberOfFilms == isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    }
}

start();

const personalMovieDB = {
    counts: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();

// function showMyDB() {
//     if (personalMovieDB.privat == false) {
//         console.log(personalMovieDB);
//     }
// }
function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function rememberMyFilms() {
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
}

rememberMyFilms();


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





function detectPersonalLevel() {
    if (personalMovieDB.counts < 10) {
        console.log('Просмотренно довольно мало фильмов');
    } else if (personalMovieDB.counts >= 10 && personalMovieDB.counts <= 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.counts > 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();

