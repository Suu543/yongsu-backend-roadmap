const hash = window.location.hash.slice(1);

if (hash) {
  console.log("hash: ", decodeURIComponent(hash));
  window.location.href = decodeURIComponent(hash);
}

window.addEventListener("hashchange", function () {
  console.log(decodeURIComponent(window.location.hash));
  window.location.href = decodeURIComponent(window.location.hash.slice(1));
});

// localhost:8080/#javascript:function a() { setTimeout(function () { alert("aaa"); }, 1000); } a()
