const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav .nav-links ul li');
const header = document.getElementById('faux-sticky')
const stickyHeader = document.getElementById('sticky')

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// modal

let modal = document.getElementById("my-modal");

function openModal() {
  modal.style.display = "block";
}
function closeModal() {
  modal.style.display = "none";
}

// enviroMapModal
let mapModal = document.getElementById("map-modal");

function openMapModal() {
  mapModal.style.display = "block";
}
function closeMapModal() {
  mapModal.style.display = "none";
}

// Close modal when the user clicks outside the modal
window.onclick = function (event) {
  if (event.target == mapModal) {
    mapModal.style.display = "none";
  }
  if (event.target == modal) {
    modal.style.display = "none";
  }
}