$(document).ready(function() {
  $('.js--scroll-to-start').click(function () {
    $('html, body').animate({
      scrollTop: $('.js--section-gear').offset().top
    }, 750);
  });

  $("ul.gear-tabs li").click(function() {
    var tab_id = $(this).attr("data-tab");
    $(".tab-content").removeClass("current");
    $("ul.gear-tabs li").removeClass("current");
    $(this).addClass("current");
    $("#"+tab_id).addClass("current");
    $("#"+tab_id).addClass("animate fadeIn");
  });
});
