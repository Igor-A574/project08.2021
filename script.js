"use strict";

const personalMovieDB = {
    counts: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.counts = +prompt("Сколько фильмов вы уже посмотрели?", "");

        while (personalMovieDB.counts == '' || personalMovieDB.counts == null || personalMovieDB.counts == isNaN(personalMovieDB.counts)) {
            personalMovieDB.counts = +prompt("Сколько фильмов вы уже посмотрели?", "");
    
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.counts < 10) {
            console.log('Просмотренно довольно мало фильмов');
        } else if (personalMovieDB.counts >= 10 && personalMovieDB.counts <= 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.counts > 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 2; i++) {
            // let genre = prompt(`Ваш любимый жанр под номером ${i}`).toLowerCase();

            // if (genre === '' || genre == null) {
            //     console.log("Вы ввели некорректные данные или не ввели вовсе!");
            //     i--;
            // } else {
            //     personalMovieDB.genres[i - 1] = genre;
            // }
            let genres = prompt('Введите ваши любимые жанры через запятую').toLowerCase();
            if (genres === '' || genres == null) {
                console.log("Вы ввели некорректные данные или не ввели вовсе!");
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }, 
    

};


