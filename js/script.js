// toogle side menu
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

// toogle services menu

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
// toogle projects menu

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
// close menus when clicked outside
window.addEventListener("click", function (e) {
  let side_menu = document.querySelector("nav ul.flex");
  if (
    !side_menu.contains(e.target) &&
    e.target != document.querySelector("#menu i")
  ) {
    document.querySelector("nav ul.flex").classList.remove("appear");
    document.querySelector("#servicesMenu").classList.remove("appearDropMenu");
    document.querySelector("#projectsMenu").classList.remove("appearDropMenu");
  }
});
window.addEventListener("click", function (e) {
  let services_menu = document.querySelector("#servicesMenu");
  console.log(services_menu);
  console.log(e.target);
  console.log(document.getElementById("ourServices"));
  if (
    !services_menu.contains(e.target) &&
    e.target != document.querySelector("#ourServices a") &&
    e.target != document.querySelector("#ourServices i")
  ) {
    document.querySelector("#servicesMenu").classList.remove("appearDropMenu");
  }
});
window.addEventListener("click", function (e) {
  let services_menu = document.querySelector("#projectsMenu");
  console.log(services_menu);
  console.log(e.target);
  console.log(document.getElementById("ourProjects"));
  if (
    !services_menu.contains(e.target) &&
    e.target != document.querySelector("#ourProjects a") &&
    e.target != document.querySelector("#ourProjects i")
  ) {
    document.querySelector("#projectsMenu").classList.remove("appearDropMenu");
  }
});
