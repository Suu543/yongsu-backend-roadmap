const btnAdd = document.getElementById("btnAdd");
const title = document.getElementById("title");
const content = document.getElementById("content");

btnAdd.addEventListener("click", (e) => {
  createPost({ title: title.value, content: content.value });
});

async function createPost(obj) {
  console.log("obj", obj);

  const res = await fetch("http://localhost:8080/posts", {
    method: "post",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      title: obj.title,
      content: obj.content,
    }),
  });

  const a = await res.json();
  alert(JSON.stringify(a));
}
