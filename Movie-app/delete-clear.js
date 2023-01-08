function Delcel() { }

Delcel.prototype.deletemovie=function(e) {
  const elm = e.target;
  if (elm.className === "fa fa-remove") {
    elm.parentElement.parentElement.parentElement.remove();
    storage.deleteMovInStorage(
      elm.parentElement.parentElement.parentElement.childNodes[1].textContent
    );
    ui.showAlert("warning", "Film Başarıyla Silindi...");
  }
}

Delcel.prototype.clearAllTodos=function() {
  while (movielist.firstChild != null) {
    movielist.removeChild(movielist.firstChild);
  }
  localStorage.removeItem("movies");
}

Delcel.prototype.clearInputs=function() {
  movieName.value = "";
  moviePic.value = "";
  movieType.value = "";
  movieVisionDate.value = "";
  previewPoster.setAttribute(
    "src",
    "https://semantic-ui.com/images/wireframe/square-image.png"
  );
}