const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", function () {
    const target = this.dataset.target;

    navLinks.forEach((link) => {
      link.classList.remove("text-white");
      link.classList.remove("font-bold");
    });

    this.classList.add("text-white");
    this.classList.add("font-bold");

    console.log("Clicked on", target);
  });
});

function Menu(e) {
  let list = document.querySelector("ul");

  e.name === "menu"
    ? ((e.name = "close"),
      list.classList.add("top-[80px]"),
      list.classList.add("opacity-100"))
    : ((e.name = "menu"),
      list.classList.remove("top-[80px]"),
      list.classList.remove("opacity-100"));
}
