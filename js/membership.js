// card part
/*----------  for interaction between dots and the card section ----------*/

const allCard = document.getElementsByClassName('my-card');
const arrCard = Array.from(allCard);
const activeCard = document.getElementsByClassName('active')[0];
const navDots = document.getElementsByClassName('dot');
const arrDots = Array.from(navDots);

arrDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        arrDots.forEach(dot => dot.classList.remove('active'));
        // add active class to each clicked dot
        dot.classList.add('active');
        //hide card
        arrCard.forEach(card => card.classList.add('hidden'));
        //show each card based on index
        arrCard[index].classList.remove('hidden');
    })
});
/*----------  /check screen width and hide element if the screens width is smaller than 700xp ----------*/

const card1 = allCard[0];
const card3 = allCard[2];

function checkScreenWidth() {
    if (window.innerWidth < 700) {
        card1.classList.add('hidden');
        card3.classList.add('hidden');
    } else {
        card1.classList.remove('hidden');
        card3.classList.remove('hidden');
    }
};

checkScreenWidth();

window.addEventListener('resize', checkScreenWidth);
/*----------  marking the end of javascript for membership page
----------*/
