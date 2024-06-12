export function createMainMenu(offcanvasItems) {
  function createContainerSideMenu(item) { 
    const referalContent = item.referal ? `
        <a href="${item.referal}">
            <div class="p-size">${item.btnText}</div>
        </a>
    ` : `
        <div class="p-size">${item.btnText}</div>
    `;

    return `
            <div class="container-side-menu">
                <button type="button"  class="accordion btn btn-primary"  data-bs-toggle="offcanvas"  aria-controls="offcanvasScrolling"
                        id="${item.btnId}"
                        data-bs-target="${item.btnTarget}"
                    >
                    ${referalContent}
                </button>
            </div>
        `;
  }

  const offcanvasHeader = `
		<div accordion-button="offcanvas-header" class="offcanvas-header">
			<button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"
					id="sidebar-close-btn" 
				>
			</button>
		</div>
    `;

  const offcanvasHTML = offcanvasItems
    .map((item) => `${createContainerSideMenu(item)}`)
    .join("");

  const mainMenuComponent = `
    <section class="side-menu-section main-menu-component">
        <div data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" aria-labelledby="offcanvasScrollingLabel"
                class="sidebar-component offcanvas offcanvas-start" 
                id="sidebar-offcanvas" 
            >
            ${offcanvasHeader}

		    <div class="offcanvas-body">
                ${offcanvasHTML}
            </div>


            <ul class="login-logo">
                <li>
                    <a href="sing-in.html"><img src="./assets/icon/person.icon.svg" alt=""></a>
                    <p><a href="singin.html">LOGIN</a></p>
                </li>
            </ul>
        </div>
    </section>
    `;

  document.querySelector("header").innerHTML += `
        ${mainMenuComponent}
    `;
}
