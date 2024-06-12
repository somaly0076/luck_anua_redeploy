const carouselItems = [
  //primary
  {
    state: "active",

    desktopImg: "./assets/img/home/Anua-main-banner.webp",
    mobileImg: "./assets/img/home/Anua-main-banner-mobile.webp",

    callout: "NEW",
    notice: "CLEANSING OIL",
    slogan: "ELEVATE YOUR CLEANSE",
    btnText: "COMING SOON",
  },

  //secondary
  {
    state: "",

    desktopImg: "./assets/img/home/Anua-secondary-banner.webp",
    mobileImg: "./assets/img/home/Anua-secondary-banner-mobile.webp",

    callout: "",
    notice: "HEARTLEAF 77% SOOTHING TONER",
    slogan: "EXPERIENCE TONER PERFECTION",
    btnText: "BUY NOW",
  },
];

function createCarouselItem(item) {
  return `
  <div class="carousel-item  ${item.state}">
    <div class="container-wrapper">

      <!--insert images-->
      <img class='black-bottles larger' src="${item.desktopImg}"  data-interval="3000" data-pause="false" alt=""> 
      <img class='black-bottles mobile' src="${item.mobileImg}"   data-interval="3000" data-pause="false" alt="">

      <div class="container-inner  text-center">
        <div class="row  justify-content-start">
          <h2 class="display-notice  default-style  mx-6">
          
            <!--insert notice-->
            <em>${item.callout}</em>${item.notice}
          
          </h2>
        </div>

        <div class="row  justify-content-start">
          <h1 class="display-slogan  h1-size    mx-6">

            <!--insert slogan-->
            <strong>${item.slogan}</strong>

          </h1>
        </div>
        <div class="row  justify-content-start  mx-c">
          <button id="coming-soon" type="button" class="button-bg-fadeout top-button">

            <!--insert button text-->
            <span class="p-size">${item.btnText}</span>

          </button>
        </div>
      </div>
    </div>
  </div>
  `;
}

const carouselHTML = carouselItems.map((item) => `${createCarouselItem(item)}`).join("")

document.querySelector(".hero-section").innerHTML = `
  <div id="main-banner-carousel" class="carousel  slide" data-bs-ride="carousel"
    data-bs-pause="false">
    <div class="carousel-inner">
      ${carouselHTML}
    </div>
  </div>
`;
