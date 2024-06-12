export function createNavigationBanner(){
    const icons = {
      toggler   : { path: `./assets/icon/toggler.svg`        , alt: `side menu toggler` },
      logo      : { path: `./assets/icon/logo.svg`           , alt: `anua logo` },
      person    : { path: `./assets/icon/person-icon.svg`    , alt: `sign in`    , referal : `sign-in.html`},
      search    : { path: `./assets/icon/search-icon.svg`    , alt: `search`},
      bag       : { path: `./assets/icon/bag-icon.svg`       , alt: `cart page` , referal : `cartpage.html`},

    };


    const iconMenuLeft = `
        <div class="col-sm icon-menu-left">
            <div class="banner-label sidebar-menu-label">

                <button 
                        class="btn btn-primary sidebar-toggler" 
                        id="sidebar-toggle" 
                        type="button"
                        data-bs-toggle="offcanvas" 
                        data-bs-target="#sidebar-offcanvas" 
                        aria-controls="offcanvasDarkNavbar"
                        aria-controls="offcanvasScrolling"
                    >
                    <span class="navbar-toggler-icon"><img src="${icons.toggler.path}" alt="${icons.toggler.alt}"></span>
                </button>

            </div>
        </div>
    `;

    const iconMenuMid = `
        <div class="col-sm">
            <div class="banner-label">
                <a href="./index.html"><img src="${icons.logo.path}" alt="${icons.logo.alt}"></a>
            </div>
        </div>
    `;

    const iconMenuRight = `
        <div class="col-sm icon-menu-right">
            <div class="navigation-label">
                <ul class="navigation-list">

                    <li class="person-icon" >   <a href="${icons.person.referal}"   >   <img src="${icons.person.path}"    alt="${icons.person.alt}"></a> </li>
                    <li class="search-icon" >   <img src="${icons.search.path}" alt="${icons.search.alt}">                                    </li>
                    <li class="bag-icon"    >   <a href="${icons.bag.referal}" >   <img src="${icons.bag.path}"       alt="${icons.bag.alt}"></a> </li>

                </ul>
            </div>
        </div>
    `;

    const navigationBannerHTML = `
        <div class="navigation-banner">
            <div class="container-wrapper  mx-md-5">
                <div class="container">
                    <div class="row">
                        ${iconMenuLeft}
                        ${iconMenuMid}
                        ${iconMenuRight}
                    </div>
                </div>
            </div>
        </div>
    `;
    document.querySelector("header").innerHTML += `${navigationBannerHTML}`;
}