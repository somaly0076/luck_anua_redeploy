export function createShopMenu() {
  const content = `
	<section class="shop-menu-section sub-offcanvas">
		<div
				class="sub-menu-component offcanvas offcanvas-start"
				data-bs-scroll="true"
				data-bs-backdrop="false"
				tabindex="-1"
				id="shop-offcanvas"
				aria-labelledby="offcanvasScrollingLabel"
			>
            <!--dynamic header-->
			<div class="offcanvas-header">
			</div>

            <!--dynamic offcanvas-->
			<div class="offcanvas-body">
				<div class="offcanvas-component border-bottom offcanvas-subheader"><div>
				<div
					class="accordion-item border-bottom mobile"
					id="shop-section-mobile"
				>
					<h2 class="accordion-header">
					<button
						id="shop-toggle-back"
						class="btn btn-primary"
						type="button"
					>
						<svg
						aria-hidden="true"
						focusable="false"
						fill="none"
						width="12"
						class="icon icon-chevron-left icon--direction-aware"
						viewBox="0 0 10 10"
						>
						<path
							d="M7 1 3 5l4 4"
							stroke="currentColor"
							stroke-linecap="square"
						></path>
						</svg>
						<span class="p-size">SHOP</span>
					</button>
					</h2>
				</div>
				<a href="collection.html"><div class="p-size pt-3">All</div></a>
				</div>
			</div>

			<div
				class="cus-accordion collapsed"
				data-title="BY Category"
				data-body=""
				>
				<ul>
				<li><a href='new-product.html'>Cleanser</a></li>
				<li><a href='new-product.html'>Toner</a></li>
				<li><a href='new-product.html'>Serum</a></li>
				<li><a href='new-product.html'>Moisturizer</a></li>
				<li><a href='new-product.html'>Sheet Mask</a></li>
				</ul>
			</div>

			<div
				class="cus-accordion collapsed"
				data-title=" By Skin Concern"
				data-body=""
				>
				<ul>
				<li><a href='new-product.html'>Acne</a></li>
				<li><a href='new-product.html'>Blackhead</a></li>
				<li><a href='new-product.html'>Dark Spot Care</a></li>
				<li><a href='new-product.html'>Dryness</a></li>
				<li><a href='new-product.html'>Dullness Mask</a></li>
				<li><a href='new-product.html'>Soothing & Calming</a></li>
				</ul>
			</div>

			<div
				class="cus-accordion collapsed"
				data-title="  By Ingredients"
				data-body=""
				>
				<ul>
				<li><a href='newproduct.html'>Heartleaf (Houttuynia Cordata)</a></li>
				<li><a href='newproduct.html'>Niacinamide</a></li>
				<li><a href='newproduct.html'>Hyaluronic</a></li>
				<li><a href='newproduct.html'>Panthenol</a></li>
				<li><a href='newproduct.html'>Vitamin C</a></li>
				<li><a href='newproduct.html'>Centella</a></li>
				<li><a href='newproduct.html'>AHA BHA PHA</a></li>
				</ul>
			</div>

			</div>
		</div>
	</section>
	`;

  document.querySelector("header").innerHTML += `
		${content}
	`;
}
