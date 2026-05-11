const mangas = [
  {
    title: "One Piece",
    img: "https://via.placeholder.com/200x300",
    id: "onepiece"
  },
  {
    title: "Naruto",
    img: "https://via.placeholder.com/200x300",
    id: "naruto"
  },
  {
    title: "Attack on Titan",
    img: "https://via.placeholder.com/200x300",
    id: "aot"
  }
];

const list = document.getElementById("mangaList");

function render(data) {
  list.innerHTML = "";
  data.forEach(m => {
    list.innerHTML += `
      <div class="card" onclick="openManga('${m.id}')">
        <img src="${m.img}">
        <h3>${m.title}</h3>
      </div>
    `;
  });
}

function openManga(id) {
  window.location.href = "read.html?manga=" + id;
}

document.getElementById("search").addEventListener("input", (e) => {
  const filtered = mangas.filter(m =>
    m.title.toLowerCase().includes(e.target.value.toLowerCase())
  );
  render(filtered);
});

render(mangas);
