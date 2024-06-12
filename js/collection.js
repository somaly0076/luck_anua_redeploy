const productList = document.querySelector('#collection-list');
const collectionList = [
// /*---------- start row1 ----------*/
{
    img: './assets/img/collection/anua-toner.jpg',
    name: 'ACNE'
},
{
    img: './assets/img/collection/anua-clear-pad.png',
    name: 'AHA BHA PHA LHA'
},
{
    img: './assets/img/collection/anua-toner.jpg',
    name: 'ALL'
},
// /*---------- end row1 ----------*/


// /*---------- start row2 ----------*/
{
    img: './assets/img/collection/anua-toner.jpg',
    name: 'AS SEEN ON TIKTOK'
},
{
    img: './assets/img/collection/anua-toner.jpg',
    name: 'AHA BHA PHA LHA'
},
{
    img: './assets/img/collection/anua-toner.jpg',
    name: 'BLACKHEAD'
},
// /*---------- end row2 ----------*/


// /*---------- start row3 ----------*/
{
    img: './assets/img/collection/anua-toner.jpg',
    name: 'BY INGREDIENTS'
},
{
    img: './assets/img/collection/anua-toner.jpg',
    name: 'BY SKIN CONCERN'
},
{
    img: './assets/img/collection/anua-toner.jpg',
    name: 'BY SKINCARE STEP'
},
// /*---------- end row3 ----------*/


// /*---------- start row4 ----------*/
{
    img: './assets/img/collection/anua-clear-pad.png',
    name: 'CENTELLA'
},
{
    img: './assets/img/collection/anua-toner.jpg',
    name: 'CLEANSER'
},
{
    img: './assets/img/collection/anua-ampoule-serum.png',
    name: 'DARK SPOT CARE'
},
// /*---------- end row4 ----------*/


// /*---------- start row5 ----------*/
{
    img: './assets/img/collection/anua-toner.jpg',
    name: 'DRYNES'
},
{
    img: './assets/img/collection/anua-toner.jpg',
    name: 'DULLNESS'
},
{
    img: './assets/img/collection/anua-cleanser.png',
    name: 'Glass Skin Regiman (Toner)'
},
// /*---------- end row5 ----------*/


// /*---------- start row6 ----------*/
{
    img: './assets/img/collection/anua-cleanser.png',
    name: 'GLASS SKIN REGIMEN'
},
{
    img: './assets/img/collection/anua-cleanser.png',
    name: 'GLASS SKIN REGIMAN (Lotion)'
},
{
    img: './assets/img/collection/anua-cleanser.png',
    name: 'GLASS SKIN REGIMAN (PAD)'
},
// /*---------- end row6 ----------*/

// /*---------- start row7 ----------*/
{
    img: './assets/img/collection/anua-toner.jpg',
    name: 'HEARTLEAF COLLECTION'
},
{
    img: './assets/img/collection/anua-toner.jpg',
    name: 'HEARTLEAF (HOUTTUYNIACORDATA)'
},
{
    img: './assets/img/collection/anua-ampule-serum.png',
    name: 'HYALURONIC'
},
// /*---------- end row7 ----------*/


// /*---------- start row8 ----------*/
{
    img: './assets/img/collection/anua-moisturizer.png',
    name: 'MOISTURIZER'
},
{
    img: './assets/img/collection/anua-ampule-serum.png',
    name: 'NEW ARRIVALS'
},
{
    img: './assets/img/collection/anua-ampule-serum.png',
    name: 'NIACINAMIDE'
},
// /*---------- end row8 ----------*/


// /*---------- start row9 ----------*/
{
    img: './assets/img/collection/anua-ampule-serum.png',
    name: 'PANTHENOL'
},
{
    img: './assets/img/collection/anua-toner.jpg',
    name: 'REELUP (DO NOT DELETE)'
},
{
    img: './assets/img/collection/anua-ampule-serum.png',
    name: 'SERUM'
},
// /*---------- end row9 ----------*/


// /*---------- start row10 ----------*/
{
    img: './assets/img/collection/anua-toner.jpg',
    name: 'SOOTHING & CALMING'
},
{
    img: './assets/img/collection/anua-toner.jpg',
    name: 'TONER'
},
{
    img: './assets/img/collection/anua-ampoule-serum-yellow.png',
    name: 'VITAMIN C'
},
// /*---------- end row10 ----------*/
]; 

collectionList.forEach(item =>{
    productList.innerHTML = productList.innerHTML + `
    <div class="col">
    <a href="newproduct.html">
<div class="float-img">
<img width="100%" height="100%" src="${item.img}" alt="product"/>
<h1 class="bottom-left h1-size">${item.name}</h1>
</div>
    </a>
</div>
    
    `
})