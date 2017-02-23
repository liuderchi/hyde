$(document).ready(function() {
  // generate id for header
  $('#toc').toc();

  // apply scrollspy for TOC
  $('body').scrollspy({
    target: '.bs-docs-sidebar',
    offset: 60
  });
  $("#toc-sidebar").affix({
    offset: { top: 60 }
  });

  // smooth scrolling on all links of TOC
  $("#toc-sidebar a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        window.location.hash = hash;
      });
    }
  });

});
