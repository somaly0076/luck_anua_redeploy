import { createPromotionBanner } from "./layout/promotion-banner.js";
import { createNavigationBanner } from "./layout/navigation-banner.js";
import { createMainMenu } from "./layout/main-menu.js";
import { createShopMenu } from "./layout/shop-menu.js";
import { createAboutMenu } from "./layout/about-menu.js";

import { navbarPurpose } from "./navbar.js";

const mainMenuItems = [
  {
    btnId: `shop-toggle`,
    btnTarget: `#shop-offcanvas`,
    referal: ``,
    btnText: `SHOP`,
  },

  {
    btnId: ``,
    btnTarget: `#shop-offcanvas`,
    referal: `new-product.html`,
    btnText: `NEW`,
  },

  {
    btnId: ``,
    btnTarget: `#shop-offcanvas`,
    referal: `collection.html`,
    btnText: `BESTSELLERS`,
  },

  {
    btnId: `about-toggle`,
    btnTarget: `#about-offcanvas`,
    referal: ``,
    btnText: `ABOUT`,
  },

  //add more side-menus here
];


//generates the layout
createPromotionBanner();
createNavigationBanner();
createMainMenu(mainMenuItems);
createShopMenu();
createAboutMenu();

//adds functionality to navigation bar
navbarPurpose(document.querySelector(`header`))

