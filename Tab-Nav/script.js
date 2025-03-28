const navElement = document.querySelector("nav");
const navbarLinks = navElement.querySelectorAll("a");

const sections = document.querySelectorAll("section");

const removeActiveLinks = () => {
  navbarLinks.forEach((link) => {
    link.parentElement.classList.remove("active");
  });
};

const hideSections = () => {
  sections.forEach((section) => {
    section.classList.add("hidden");
  });
};

navbarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    removeActiveLinks();
    hideSections();

    link.parentElement.classList.add("active");

    // Get the current active section
    const visibleSection = document.querySelector(link.hash);
    visibleSection.classList.remove("hidden");
  });
});
