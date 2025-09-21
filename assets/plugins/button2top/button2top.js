let mybutton = document.getElementById("go2top");

function handleGo2TopButton() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

window.addEventListener("scroll", handleGo2TopButton);

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}