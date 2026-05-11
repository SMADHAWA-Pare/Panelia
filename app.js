const list = document.getElementById("list");

function render(data) {
  list.innerHTML = "";
  data.forEach(m => {
    list.innerHTML += `
      <div class="card" onclick="openManga('${m.id}')">
        <img src="${m.cover}">
        <h3>${m.title}</h3>
        <button onclick="bookmark(event,'${m.id}')">🔖</button>
      </div>
    `;
  });
}

function openManga(id) {
  window.location.href = "read.html?id=" + id;
}

function bookmark(e,id){
  e.stopPropagation();
  let b = JSON.parse(localStorage.getItem("bookmark") || "[]");
  if(!b.includes(id)) b.push(id);
  localStorage.setItem("bookmark", JSON.stringify(b));
  alert("Bookmarked!");
}

document.getElementById("search").addEventListener("input", e=>{
  render(mangaData.filter(m =>
    m.title.toLowerCase().includes(e.target.value.toLowerCase())
  ));
});

function toggleTheme(){
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
}

document.body.classList.add("dark");
render(mangaData);
