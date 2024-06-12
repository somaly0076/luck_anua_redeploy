export function createPromotionBanner(){
    const icons = {
        leftChevron     : {path:`./assets/icon/chevron-left.svg`   , alt:`left chevron`},
        rightChevron    : {path:`./assets/icon/chevron-right.svg`  , alt:`right chevron`}
    }

    const promotionBannerHTML = `
        <div class="promotion-banner text-bg-dark">
            <div class="container-wrapper">
                <h1 class="banner-label"><img src="${icons.leftChevron.path}" alt="${icons.leftChevron.alt}"></h1>
                <h1 class="banner-label">Free Shipping</h1>
                <h1 class="banner-label"><img src="${icons.rightChevron.path}" alt="${icons.rightChevron.alt}"></h1>
            </div>
        </div>
    `;

    document.querySelector("header").innerHTML += `${promotionBannerHTML}`;
}