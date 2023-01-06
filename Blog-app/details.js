const id = new URLSearchParams(window.location.search).get("id");
const container = document.querySelector(".details");
const deleteBtn = document.querySelector(".delete");

const renderDetails = async () => {
  const res = await fetch(`http://localhost:3000/posts/${id}`);
  const post = await res.json();

  const template = `
    <h1 class="h1 text-center" id="pageHeaderTitle">${post.title}</h1>
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
            <div class="postcard__preview-txt"> ${post.body} </div>
            <ul class="postcard__tagbox">
              <li class="tag__item">
                <i class="fas fa-clock mr-2"></i>${post.category}</li>
              <li class="tag__item">
                <i class="fas fa-tag mr-2"></i>${post.writer}</li>
              <li class="tag__item">
                <i class="fas fa-clock mr-2"></i>${post.date}</li>
              <li class="tag__item">
                <a href="index.html"><i class="fas fa-play mr-2"></i>Tüm bloglar</a>
            </ul>
          </div>
        </article>
        `;
  container.innerHTML = template;
};
deleteBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  await fetch(`http://localhost:3000/posts/${id}`, {
    method: "DELETE",
  });
  window.location.replace("index.html");
});

window.addEventListener("DOMContentLoaded", () => renderDetails());
