const imgs = document.querySelectorAll('.gallery-img');

  imgs.forEach((img, index) => {
    img.src = `https://picsum.photos/400/300?random=${index + 1}`;
  });

  function toggleMenu() {
    const nav = document.getElementById("mobileNav");
    nav.classList.toggle("active");
  }