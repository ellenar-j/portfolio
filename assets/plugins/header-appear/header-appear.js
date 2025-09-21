var prevScrollpos = window.pageYOffset;
var headerDiv = document.querySelector(".nav-appear");
var threshold = 0; // Distance in pixels to scroll down before fixing

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  /* Reset all styles when scrolled to the top */
  if (currentScrollPos === 0) {
    headerDiv.classList.remove("fixedToTop");
    // You can remove other classes or reset styles here if needed
    return; // Exit the function early
  }

  /* If scrolling up, add the fixed class */
  if (prevScrollpos > currentScrollPos) {
    headerDiv.classList.add("fixedToTop");
    headerDiv.style.top ="80px";
  } 
  /* If scrolling down, remove the fixed class */
  else if (currentScrollPos && currentScrollPos > threshold) {
    headerDiv.classList.remove("fixedToTop");
    headerDiv.style.top = "-500px";
  }

  prevScrollpos = currentScrollPos;
}