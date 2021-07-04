document.getElementById("menu").addEventListener("click", showSideMenu);
function showSideMenu() {
  let disply = document
    .querySelector("nav ul.flex")
    .classList.contains("appear");
  if (!disply) {
    document.querySelector("nav ul.flex").classList.add("appear");
  } else {
    document.querySelector("nav ul.flex").classList.remove("appear");
  }
}
document
  .getElementById("ourServices")
  .addEventListener("click", showServicesMenu);
function showServicesMenu() {
  let disply = document
    .querySelector("#servicesMenu")
    .classList.contains("appearDropMenu");
  if (!disply) {
    document.querySelector("#servicesMenu").classList.add("appearDropMenu");
  } else {
    document.querySelector("#servicesMenu").classList.remove("appearDropMenu");
  }
}
document
  .getElementById("ourProjects")
  .addEventListener("click", showProjectsMenu);
function showProjectsMenu() {
  let disply = document
    .querySelector("#projectsMenu")
    .classList.contains("appearDropMenu");
  if (!disply) {
    document.querySelector("#projectsMenu").classList.add("appearDropMenu");
  } else {
    document.querySelector("#projectsMenu").classList.remove("appearDropMenu");
  }
}
