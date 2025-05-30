window.addEventListener("scroll", function() {
  const img = document.querySelector(".profile-img");
  const imgPos = img.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  if (imgPos < windowHeight - 100) {
    img.classList.add("show");
  }
});
