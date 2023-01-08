const form = document.querySelector("#movie-form");
const submitbutton = document.getElementById("submit");
const movieName = document.querySelector("#name");
const moviePic = document.querySelector("#pic");
const movieType = document.querySelector("#type");
const movieVisionDate = document.querySelector("#visiondate");
const movielist = document.querySelector(".movie-list");
const moviefilter = document.querySelector("#filter");
const movieClear = document.querySelector("#clear-movies");
const previewPoster = document.querySelector("#previewPoster");
const firstCardbody = document.querySelectorAll(".card-body")[0];
const secondCardbody = document.querySelectorAll(".card-body")[1];

const ui = new UI();
const storage = new Storage();
const add = new Add();
const delcel = new Delcel();


document.addEventListener("DOMContentLoaded", ui.loadDefaultFilmsToUI);

eventListeners();
function eventListeners() {
  form.addEventListener("submit", add.addMovie);
  moviePic.addEventListener("change", ui.preview);
  document.addEventListener("DOMContentLoaded", add.allMovieLoad);
  moviefilter.addEventListener("keyup", ui.movFilter);
  secondCardbody.addEventListener("click", delcel.deletemovie);
  secondCardbody.addEventListener("click", add.editMovie);
  movieClear.addEventListener("click", delcel.clearAllTodos);
};
