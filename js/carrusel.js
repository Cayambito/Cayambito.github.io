document.addEventListener("DOMContentLoaded", function() {
    var carousels = document.querySelectorAll(".carousel");
  
    carousels.forEach(function(carousel) {
      var carouselId = carousel.getAttribute("id");
      var carouselInstance = new bootstrap.Carousel("#" + carouselId, {
        interval: 3000
      });
  
      var carouselItems = carousel.querySelectorAll(".carousel-item");
  
      carouselItems.forEach(function(item) {
        var img = item.querySelector("img");
        img.style.maxHeight = carousel.clientHeight + "px";
      });
  
      carousel.addEventListener("slid.bs.carousel", function() {
        var activeItem = carousel.querySelector(".carousel-item.active");
        var img = activeItem.querySelector("img");
        img.style.maxHeight = carousel.clientHeight + "px";
      });
    });
  });
  