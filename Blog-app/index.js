const container = document.querySelector(".blogs");
const searchForm = document.querySelector(".search");
const renderPosts = async (term) => {
  let uri = "http://localhost:3000/posts?_sort=likes&_order=desc";
  if (term) {
    uri += `&q=${term}`;
  }
  const res = await fetch(uri);
  const posts = await res.json();

  let template = "";
  posts.forEach((post) => {
    template += `
            <article class="postcard dark red">
          <a class="postcard__img_link" href="#">
            <img
              class="postcard__img"
              src="${post.url}"
              alt="Image Title"
            />
          </a>
          <div class="postcard__text">
            <h1 class="postcard__title red">
              <a href="#">${post.title}</a>
            </h1>
            <div class="postcard__bar"></div>
            <div class="postcard__preview-txt"> ${post.body.slice(
              0,
              200
            )} </div>
            <ul class="postcard__tagbox">
              <li class="tag__item">
                <i class="fas fa-clock mr-2"></i>${post.category}</li>
              <li class="tag__item">
                <i class="fas fa-tag mr-2"></i>${post.writer}</li>
              <li class="tag__item">
                <i class="fas fa-clock mr-2"></i>${post.date}</li>
              <li class="tag__item play red">
                <a href="details.html?id=${
                  post.id
                }"><i class="fas fa-play mr-2"></i>Devamını oku ...</a>
              </li>
              <li class="tag__item play green">
                <button type="button"  class="btn text-white" data-bs-toggle="modal" data-bs-target="#edit-dialog-${
                  post.id
                }">
Düzenle
</button>

<!-- Modal -->
<div class="modal fade" id="edit-dialog-${
      post.id
    }" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-header">
<h2 class="modal-title fs-5" id="ModalLabel">Blogu Düzenle</h2>
<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div class="modal-body ">
<form class="update_form">
<input type="hidden" value="${post.id}" name="id" />
<input type="text" value="${
      post.title
    }" name="title" required placeholder="Blog title" />
<input type="text" value="${
      post.writer
    }" name="writer" required placeholder="Blog writer" />
<input type="text" value="${
      post.url
    }" name="url" required placeholder="Blog image" />
<input type="date" value="${
      post.date
    }" name="date" required placeholder="Blog date" />
<input type="text" value="${
      post.category
    }" name="category" required placeholder="Blog category" />
<textarea  type="text" name="body" "required placeholder="Blog body">${
      post.body
    }</textarea>
<div class="modal-footer">

<button type="sumbit" class="btn btn-primary">Değişiklikleri Kaydet</button>
</div>

</form>
</div>

</div>
</div>
</div>
              </li>
            </ul>
          </div>
        </article>

        `;
  });

  container.innerHTML = template;
  const updateForms = container.querySelectorAll(".update_form");
  updateForms.forEach((item) => item.addEventListener("submit", updatePost));
};

const updatePost = async (e) => {
  e.preventDefault();
  const id = e.target[0].value;
  const updateForms = container.querySelectorAll(".update_form");

  const doc = {
    title: updateForms[id - 1].title.value,
    url: updateForms[id - 1].url.value,
    date: updateForms[id - 1].date.value,
    category: updateForms[id - 1].category.value,
    writer: updateForms[id - 1].writer.value,
    body: updateForms[id - 1].body.value,
  };
  await fetch(`http://localhost:3000/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify(doc),
    headers: { "Content-Type": "application/json" },
  });
};

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  renderPosts(searchForm.term.value.trim());
});

window.addEventListener("DOMContentLoaded", () => renderPosts());
