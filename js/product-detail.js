
/*----------   progress bar ----------*/
document.querySelectorAll(".progress").forEach((element) => {
  const value = parseInt(element.getAttribute('aria-valuenow'));
  const maxVal = parseInt(element.getAttribute('aria-valuemax'));

  // set progress bar content width
  element.querySelector('.progress-bar').style.width =  value / maxVal * 100 + "%";
});

// *********** timeline **************/
/*----------   select timeline navigator button container ----------*/

const timelineNav = document.querySelector(".timeline-navigation");
// loop for all navigator buttons
timelineNav.querySelectorAll(".navigator").forEach(element => {
  const target = element.getAttribute('data-target');
  element.addEventListener('click', () => {
    // deactivate all navigator buttons
    timelineNav.querySelectorAll(".navigator").forEach(element => {
      element.classList.remove("active");
    });
    // activate selected navigator button
    element.classList.add('active');
    // show tab according to target
    document.querySelectorAll(".timeline-item").forEach((element) => {
      // check timeline item correspone to each navigator button
      if (element.classList.contains(target)){
        // add class selected to this timeline item
        element.classList.add("selected");
      }else{
        // remove class selected from else timeline item
        element.classList.remove("selected");
      }
    });
  });
  
});
/*----------   review tab function ----------*/

// select review tab
const reviewTab = document.getElementById("review-tab");
// select quetion tab
const questionTab = document.getElementById("question-tab");
// select review button
const reviewButton = document.getElementById("review-button");
// select question button
const questionButton = document.getElementById("question-button");

reviewButton.addEventListener("click", () => {
  // activate review button
  reviewButton.classList.add("active");
  // deactivate quetion button
  questionButton.classList.remove("active");
  // hide question tab
  questionTab.classList.add("visually-hidden");
  // show review tab
  reviewTab.classList.remove("visually-hidden");
});

questionButton.addEventListener("click", () => {
  // activate question button
  questionButton.classList.add("active");
  // deactivate review button
  reviewButton.classList.remove("active");
  // hide review tab
  reviewTab.classList.add("visually-hidden");
  // show question tab
  questionTab.classList.remove("visually-hidden");
});
/*----------   end review tab function ----------*/

/*----------   show more function ----------*/

// select show more button
const showMoreButton = document.getElementById("show-more-button");
// add event click
showMoreButton.addEventListener("click", () => {
  // show loading in the button
  showMoreButton.classList.add("loading");
  // prevent click again
  showMoreButton.disabled = true;
  setTimeout(() => {
    // remove loading from button after a period
    showMoreButton.classList.remove("loading");
    // allow click again
    showMoreButton.disabled = false;
    // add a review in the review tab
    addOneItem();
  }, 1000);
});

// add one review
function addOneItem() {
  // select review container
  const reviewContainer = document.getElementById("review-container");
  // clone exist review item
  const item = reviewContainer.querySelectorAll("#item-01")[0];
  // add cloned review item
  reviewContainer.appendChild(item.cloneNode(true));
}

/*----------   end show more function ----------*/

/*----------   filter function ----------*/

const filterButton = document.getElementById("filter-button");
const filterOption = document.getElementById("filter-option");
filterButton.addEventListener("click", () => {
  // activate/deactivate filter button
  if(filterButton.classList.contains("active")){
    filterButton.classList.remove("active");
    // hide filter option
    filterOption.classList.remove("show");
  }else{
    filterButton.classList.add("active");
    // show filter option
    filterOption.classList.add("show");
  }
});
/*----------   end filter function ----------*/

