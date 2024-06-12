// // ------------- ACCORDION ----------- //
// window.document.querySelectorAll(".cus-accordion").forEach((accordion, i) => {
//   // create custom accordion element
//   const cusAccordion = window.document.createElement('div');
//   // copy class from accordion
//   cusAccordion.setAttribute('class', accordion.getAttribute('class'));

//   const accTitle = accordion.getAttribute('data-title');
//   const accBody = accordion.getAttribute('data-body');

//   // create accordion button
//   const accButtonElem = window.document.createElement('button');
//   accButtonElem.classList.add('accordion-button');
//   accButtonElem.innerHTML = accTitle;
//   accButtonElem.addEventListener('click', () => {
//     cusAccordion.classList.toggle("collapsed")
//   });

  // create accordion body
  const accBodyElem = window.document.createElement('div');
  accBodyElem.classList.add('accordion-body');
  accBodyElem.innerHTML = '<div class ="p-size">' + accBody + '</div>';

  // insert child into custom accordion
  cusAccordion.appendChild(accButtonElem);
  cusAccordion.appendChild(accBodyElem);

  // replace accordion with custom accordion
  accordion.replaceWith(cusAccordion);


// ------------- ACCORDION ----------- //

// ------------- CARD ---------------- //
window.document.querySelectorAll(".cus-card").forEach((card) => {
  // create custom card element
  const cusCard = window.document.createElement('div');

  // copy classlist from card
  cusCard.setAttribute('class', card.getAttribute('class'));

  // create badge element
  const badgeElem = window.document.createElement("div");
  badgeElem.classList.add("badge");

  // get label
  const labelText = card.getAttribute("data-label");

  // get available
  const isAvailable = card.getAttribute("data-available") === "true";

  // add content
  let badgeHTML = "";
  badgeHTML += labelText ? `<span class="label">${labelText}</span>` : "";
  badgeHTML += !isAvailable ? `<span class="available">sold out</span>` : "";
  badgeElem.innerHTML = badgeHTML;

  // insert badge element into custom card
  cusCard.appendChild(badgeElem);

  // create image wrapper element
  const image = window.document.createElement("div");
  image.classList.add("image");
  const source = card.getAttribute("data-imgSrc");
  const placeholder = card.getAttribute("data-imgPlaceholder");

  // add content
  image.innerHTML = `
  <img class="img-top" src=${source}>
  <img class="img-placeholder" src=${placeholder}>
  `;

  // insert image wrapper into custom card
  cusCard.appendChild(image);

  // create product info wrapper element
  const productInfoElem = window.document.createElement('div');
  productInfoElem.classList.add("product-info");
  const productNameText = card.getAttribute("data-name");
  const productTitle = card.getAttribute("data-title");
  const productPrice = card.getAttribute("data-price");
  const productRating = card.getAttribute("data-rating");
  
  // add content
  productInfoElem.innerHTML = `
  <strong class="title p-size"  >${productTitle}</strong>
  <div class="price" >
  <p class = "p-size">${productPrice}</p></div>
  <div class="rating">${productRating}</div>
  `
  // insert product info wrapper into custom card
  cusCard.appendChild(productInfoElem);

  // attach link to custom card
  const productUrl = card.getAttribute("data-url");
  cusCard.addEventListener("click", () => {
    window.location.href = productUrl;
  });

  // replace card with custom card
  card.replaceWith(cusCard);
});
// ------------- END CARD ---------------- //
