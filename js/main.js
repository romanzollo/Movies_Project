'use strict';

let numberOfFilms;

// START
function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	}
}
// start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};


function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const a = prompt('Один из последних просмотренных фильмов?', '').trim();
		const b = prompt('На сколько оцените его?', '').trim();

		if (a != null && b != null && a != '' && b != '' && a.length < 5) {
			personalMovieDB.movies[a] = b;
			console.log('Done!');
		} else {
			console.log('Error!');
			i--;
		}
	}
}
rememberMyFilms();

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		alert('Просмотрено довольно мало фильмов');
	} else if (personalMovieDB.count <= 30) {
		alert('Вы классический зритель');
	} else if (personalMovieDB.count > 30) {
		alert('Вы киноман');
	} else {
		alert('Произошла ошибка');
	}
}
// detectPersonalLevel();


function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
	for (let i = 0; i < 3; i++) {
		personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`);
	}
}
writeYourGenres();