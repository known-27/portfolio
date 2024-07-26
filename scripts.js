
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

  // JavaScript function to toggle full-screen profile display
function toggleFullScreenProfile() {
  var profilePhoto = document.querySelector('.profile-photo');
  var fullscreenBg = document.querySelector('.fullscreen-bg');

  // Toggle active class on profile photo and blurred background
  profilePhoto.classList.toggle('active');
  fullscreenBg.classList.toggle('active');

  // Disable scrolling of background content when profile photo is in full screen
  document.body.classList.toggle('no-scroll');
}



// script for the sketch page -------------------------------------------------------------------------------------->

const filterContainer = document.querySelector(".gallery-filter"),
galleryItems = document.querySelectorAll(".gallery-item");

filterContainer.addEventListener("click", (event) =>{
  if(event.target.classList.contains("filter-item")){
     // deactivate existing active 'filter-item'
     filterContainer.querySelector(".active").classList.remove("active");
     // activate new 'filter-item'
     event.target.classList.add("active");
     const filterValue = event.target.getAttribute("data-filter");
     galleryItems.forEach((item) =>{
      if(item.classList.contains(filterValue) || filterValue === 'all'){
        item.classList.remove("hide");
         item.classList.add("show");
      }
      else{
        item.classList.remove("show");
        item.classList.add("hide");
      }
     });
  }
});


document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('image-modal');
  const modalImg = document.getElementById('modal-image');
  const closeBtn = document.querySelector('.close');
  const thumbnails = document.querySelectorAll('.thumbnail');

  thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', function () {
          modal.style.display = 'block';
          modalImg.src = this.src;
      });
  });

  closeBtn.addEventListener('click', function () {
      modal.style.display = 'none';
  });

  modal.addEventListener('click', function (e) {
      if (e.target !== modalImg) {
          modal.style.display = 'none';
      }
  });
});

// window.addEventListener("load", () => {
//   const loader = document.querySelector(".loader");

//   eye.classList.add("loader-hidden");

//   loader.addEventListener("transitioned", () => {
//     document.body.removeChild("loader");
//   })
// });

// JavaScript to hide loader
// document.addEventListener("DOMContentLoaded", function() {
//   var loader = document.getElementById("loader");
//   loader.style.display = "none";
// });
