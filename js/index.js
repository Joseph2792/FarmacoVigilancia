$(document).ready(function () {    
  $(window).on("load resize", function() {
    $('#navbarNav').removeClass("show")
  
    if (this.matchMedia("(min-width: 768px)").matches) {
    } else {
      //$dropdown.off("mouseenter mouseleave");
    }
  });
});
