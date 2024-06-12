/* //--------- initialize the object properties of elements  ---------*/
const buttonElements = {
  'four-box': {
      element: document.getElementById('four-box'),
      content: document.getElementsByClassName('first-order')[0],
      originalColor: document.getElementById('four-box').style.color
  },
  'six-box': {
      element: document.getElementById('six-box'),
      content: document.getElementsByClassName('second-order')[0],
      originalColor: document.getElementById('six-box').style.color
  },
  'burger': {
      element: document.getElementById('burger'),
      content: document.getElementsByClassName('third-order')[0],
      originalColor: document.getElementById('burger').style.color
  },
  'one-box': {
      element: document.getElementById('one-box'),
      content: document.getElementsByClassName('fourth-order')[0],
      originalColor: document.getElementById('one-box').style.color
  }
};


/* //--------- reset the colors and visibility of all buttons except the clicked one ---------*/
function resetColorsAndVisibility(clickedButtonId) {
  Object.values(buttonElements).forEach(button => {
      button.element.style.color = button.element.id !== clickedButtonId ? button.originalColor : "gray";
      button.content.classList.add('hidden');
  });



/* //--------- make the clicked button visible ---------*/
  buttonElements[clickedButtonId].content.classList.remove('hidden');
}

Object.keys(buttonElements).forEach(buttonId => {
  buttonElements[buttonId].element.addEventListener('click', () => {
      resetColorsAndVisibility(buttonId);
  });
});

const cards =[...document.getElementsByClassName("cus-card")];

cards.forEach((card, index) => {
    //create first div element for product status
    const divElementFirst = document.createElement('div');
    divElementFirst.classList.add ("badge")
    const span1 = document.createElement('span');
    const span2 = document.createElement('span');
    span1.classList.add('label');
    span1.textContent = cusCard[index].label;
    divElementFirst.append(span1);
    span2.classList.add('available');
    if (cusCard[index].available == true){
        span2.textContent = 'SOLD OUT';
        divElementFirst.append(span2);
    }

    //appending product status (sold out / best)
    card.appendChild(divElementFirst);

    //creating div element to contain images
    const divImg = document.createElement('div');
    divImg.classList.add("image");
    const imgTop = document.createElement('img');
    imgTop.setAttribute("src" , cusCard[index].topImgSrc);
    imgTop.classList.add("img-top");
    const imgBut = document.createElement('img');
    imgBut.setAttribute("src" , cusCard[index].butImgSrc);
    imgBut.classList.add("img-placeholder");

    //appending images to image container
    divImg.append(imgTop , imgBut);
    card.appendChild(divImg);

    //create element for product info
    const divElementInfo = document.createElement('div');
    divElementInfo.classList.add("product-info");
    const strongElement = document.createElement('strong');
    strongElement.classList.add('title');
    strongElement.classList.add("p-size");
    strongElement.textContent = cusCard[index].name

    // appending product info
    divElementInfo.appendChild(strongElement);


    //create div for price range
    const divElementPrice = document.createElement('div')
    divElementPrice.classList.add('price');
    const pElement = document.createElement('p');
    pElement.classList.add('p-size');
    pElement.textContent = cusCard[index].price;

    //appending price range 
    divElementPrice.appendChild(pElement);
    divElementInfo.appendChild(divElementPrice);
    card.appendChild(divElementInfo);

    //create div for rating
    const divElementRating = document.createElement('div');
    divElementRating.classList.add("rating")
    divElementRating.textContent = cusCard[index].rating

    //append rating
    divElementInfo.appendChild(divElementRating)
})
