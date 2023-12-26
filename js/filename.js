const fileInput = document.getElementById("image");
const fileName = document.getElementById("file-name");

fileInput.addEventListener("change", (e) => {
  fileName.textContent = e.target.files[0].name;
});
