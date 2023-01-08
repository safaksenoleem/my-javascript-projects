function Add() { }

Add.prototype.addMovie=function(e) {
  const newName = movieName.value.trim();
  const newPic = moviePic.value.trim();
  const newType = movieType.value.trim();
  const newDate = movieVisionDate.value.trim();

  if (newName == "" || newPic == "" || newType == "" || newDate == "") {
    ui.showAlert("danger", "Lütfen tüm alanları doldurunuz!!!");
  } else {
    ui.addMovieToUI(newName, newPic, newType, newDate);
    storage.addMovieToStorage(newName, newPic, newType, newDate);
    delcel.clearInputs();
    ui.showAlert("success", "Favori filminiz başarıyla eklenmiştir");
  }
  submitbutton.innerHTML = "Film Ekle";
  e.preventDefault();
}

Add.prototype.editMovie=function(e) {
  const elm = e.target;
  if (elm.className === "fa fa-edit") {
    elm.parentElement.parentElement.parentElement.remove();
    let movies = storage._getMovieFromStorage();
    movies.forEach(function (movie) {
      if (movie.name === elm.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent) {
        movieName.value = movie.name;
        moviePic.value = movie.poster;
        movieType.value = movie.type;
        movieVisionDate.value = movie.visiondate;
        
        submitbutton.innerHTML = "Filmi Düzenle";
      }
      })
    storage.deleteMovInStorage(
      elm.parentElement.parentElement.parentElement.childNodes[1].textContent
    );

    ui.showAlert("dark", "Film düzenleme modu aktif!");
  }
}

Add.prototype.allMovieLoad=function() {
  let movies = storage._getMovieFromStorage();
  movies.forEach((mov) => {
    const name = mov.name;
    const poster = mov.poster;
    const type = mov.type;
    const visiondate = mov.visiondate;
    ui.addMovieToUI(name, poster, type, visiondate);
  });
}
