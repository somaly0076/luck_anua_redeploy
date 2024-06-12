"use strict";
// ------------- ACCORDION ----------- //
const mainSectionFaq = [...document.getElementsByClassName("main-section-faq")];

mainSectionFaq.forEach((faq , i) => {
    const textContent = textHeaderArray[i];
    // div heading
    let divElement = document.createElement('div');
    divElement.classList.add('order');
    let imgElement = document.createElement('img');
    imgElement.setAttribute('src', '#');
    imgElement.setAttribute('height', 25);
    imgElement.classList.add('order-img');
    let pElement = document.createElement('p');
    // Create text node
    let textNode = document.createTextNode(textContent);
    pElement.appendChild(imgElement);
    pElement.appendChild(textNode);
    divElement.appendChild(pElement);

    faq.insertBefore(divElement, faq.firstChild);
}); 

// marking the end ..

// dynamically changing file src of each menu head
const imgElementArray = document.querySelectorAll('.order');

imgElementArray.forEach((img, i) => {
    img.firstElementChild.firstElementChild.setAttribute('src', srcArray[i]);
})

const cusAccordianArray = [...document.querySelectorAll('.cus-accordion')];

cusAccordianArray.forEach((cus, index) => {
    const cusAccordion = window.document.createElement('div');
    // copy class from accordion
    cusAccordion.setAttribute('class', cus.getAttribute('class'));
    // cus.setAttribute('data-title', cus.getAttribute('class'));

    // create the button element
    const accButtonElem = document.createElement('button');
    accButtonElem.classList.add('accordion-button');
    accButtonElem.innerHTML = cusTitleBodyArr[index][0];
    accButtonElem.addEventListener('click', () => {
        cusAccordion.classList.toggle("collapsed")
      });

    // create the body element
    const accBodyElem = window.document.createElement('div');
    accBodyElem.classList.add('accordion-body');

    // create the p element
    const pSize = document.createElement('div');
    pSize.classList.add('p-size');
    cusTitleBodyArr[index][1].forEach(answer => {
        const pElem = document.createElement('p');
        pElem.innerHTML = answer;
        pSize.appendChild(pElem);
    })
    accBodyElem.appendChild(accButtonElem);
    accBodyElem.appendChild(pSize);

      // insert child into custom accordion
    cusAccordion.appendChild(accButtonElem);
    cusAccordion.appendChild(accBodyElem);

    // replace accordion with custom accordion
    cus.replaceWith(cusAccordion);

    // cus.appendChild(accBodyElem);
});

// ------------- ACCORDION ----------- //
