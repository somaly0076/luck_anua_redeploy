export function createAboutMenu() {
    const content = `
        <section class="about-section sub-offcanvas">
            <div
                    class="sub-menu-component offcanvas offcanvas-start"
                    data-bs-scroll="true"
                    data-bs-backdrop="false"
                    tabindex="-1"
                    id="about-offcanvas"
                    aria-labelledby="offcanvasScrollingLabel"
                >

                <!--dynamic header-->


                <!--dynamic offcanvas-->
                <div class="offcanvas-body">
                    <div class="accordion">
                        <div class="accordion-item border-bottom mobile" id="about-section-mobile">
                            <h2 class="accordion-header">
                                <button
                                        id="about-toggle-back"
                                        class="btn btn-primary"
                                        type="button"
                                    >
                                    <img src="./icon/chevron-left.svg" alt="">
                                    <span class="p-size">ABOUT</span>
                                </button>
                            </h2>
                        </div>
                        <div class="accordion-item border-bottom">
                            <h2 class="accordion-header">
                                <button class="accordion-static-button">
                                    <a href="membership.html"><div class="p-size">ANUA story</div></a>
                                </button>
                            </h2>
                        </div>
                        <div class="accordion-item border-bottom">
                            <h2 class="accordion-header">
                                <button class="accordion-static-button">
                                    <a href="newproduct.html"><div class="p-size">Our Ingredients</div></a>
                                </button>
                            </h2>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
        `;

    document.querySelector("header").innerHTML += `
            ${content}
        `;
}
