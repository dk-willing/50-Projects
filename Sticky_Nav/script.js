const navElement = document.querySelector("nav");
const navLink = navElement.querySelectorAll("a");

const navPosition = navElement.getBoundingClientRect().top;

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  navElement.style.top = `${scrollPosition}px`;

  navLink.forEach((link) => {
    const sectionElement = document.querySelector(link.hash);
    const offset = 100;
    if (
      scrollPosition + offset > sectionElement.offsetTop &&
      scrollPosition + offset <
        sectionElement.offsetTop + sectionElement.offsetHeight
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
