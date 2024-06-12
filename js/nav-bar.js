//--------*--------sidebar--------*--------

const sidebarToggle = document.getElementById("sidebar-toggle");
const sidebarCloseBtn = document.getElementById("sidebar-close-btn");
const sidebarOffcanvas = document.getElementById("sidebar-offcanvas");
const mainMenuComponent = document.querySelector(".main-menu-component");

const allCanvas = document.querySelector("offcanvas");

sidebarToggle.addEventListener("click", () => {
  //ensures that the sidebar is visible
  if (!sidebarOffcanvas.classList.contains("show")) {
    sidebarOffcanvas.classList.add("show");
  }
  sidebarOffcanvas.classList.remove("hiding");
});

sidebarCloseBtn.addEventListener("click", () => {
  //closes the entire side-menu
  if (sidebarOffcanvas.classList.contains("active")) {
    sidebarOffcanvas.classList.remove("active");
  }
  sidebarOffcanvas.classList.add("hiding");
  sidebarOffcanvas.classList.remove("active");
  shopOffcanvas.classList.add("hiding");
  shopOffcanvas.classList.remove("active");
  aboutOffcanvas.classList.add("hiding");
  aboutOffcanvas.classList.remove("active");
});
//--------*--------sidebar--------*--------

//--------*--------shop--------*--------
const shopToggle = document.getElementById("shop-toggle");
//
const shopOffcanvas = document.getElementById("shop-offcanvas");

const shopBackToggle = document.getElementById("shop-toggle-back");

shopToggle.addEventListener("click", () => {
  if (!sidebarOffcanvas.classList.contains("active")) {
    sidebarOffcanvas.classList.add("active");
  }

  if (!shopOffcanvas.classList.contains("show")) {
    shopOffcanvas.classList.add("show");
  }

  shopOffcanvas.classList.remove("hiding");

  aboutOffcanvas.classList.add("hiding");
  aboutOffcanvas.classList.remove("active");

  // shopOffcanvas.classList.add("hiding");

  if (screenWidth <= 760) {
    shopOffcanvas.style.zIndex = "40";
    sidebarOffcanvas.style.zIndex = "10";
  } else {
    shopOffcanvas.style.zIndex = "10";
    sidebarOffcanvas.style.zIndex = "40";
  }
});

shopBackToggle.addEventListener("click", () => {
  if (!sidebarOffcanvas.classList.contains("active")) {
    sidebarOffcanvas.classList.add("active");
  }
  shopOffcanvas.style.zIndex = "10";
  sidebarOffcanvas.style.zIndex = "40";
});
//--------*--------shop--------*--------

//--------*--------about--------*--------
const aboutToggle = document.getElementById("about-toggle");
//
const aboutOffcanvas = document.getElementById("about-offcanvas");

const aboutBackToggle = document.getElementById("about-toggle-back");

aboutToggle.addEventListener("click", () => {
  if (!sidebarOffcanvas.classList.contains("active")) {
    sidebarOffcanvas.classList.add("active");
  }
  sidebarOffcanvas.classList.add("active");
  sidebarOffcanvas.classList.add("show");

  aboutOffcanvas.classList.toggle("active");
  aboutOffcanvas.classList.remove("hiding");

  shopOffcanvas.classList.add("hiding");

  if (screenWidth <= 760) {
    aboutOffcanvas.style.zIndex = "40";
    sidebarOffcanvas.style.zIndex = "10";
  } else {
    aboutOffcanvas.style.zIndex = "10";
    sidebarOffcanvas.style.zIndex = "40";
  }
});


aboutBackToggle.addEventListener("click", () => {
  if (!sidebarOffcanvas.classList.contains("active")) {
    sidebarOffcanvas.classList.add("active");
  }
  aboutOffcanvas.style.zIndex = "10";
  sidebarOffcanvas.style.zIndex = "40";
});
//--------*--------about--------*--------

//----resizing events-----
const screenWidth = window.innerWidth;
const newWidth = window.innerWidth;

window.addEventListener("resize", () => {
  sidebarOffcanvas.classList.add("hiding");
  shopOffcanvas.classList.add("hiding");
  aboutOffcanvas.classList.add("hiding");

  sidebarOffcanvas.classList.remove("show");
  shopOffcanvas.classList.remove("show");
  aboutOffcanvas.classList.remove("show");

  sidebarOffcanvas.classList.remove("active");
  shopOffcanvas.classList.remove("active");
  aboutOffcanvas.classList.remove("active");

  allCanvas.forEach(function (canvas) {
    canvas.classList.remove("active");
  });

  aboutOffcanvas.style.zIndex = "10";
  sidebarOffcanvas.style.zIndex = "40";
});
