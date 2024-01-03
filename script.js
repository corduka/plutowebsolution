

// GENERAL SETTING
window.sr = ScrollReveal({ reset: true });
//button reveal
sr.reveal('.btn-first', { 
  origin: 'bottom', 
  duration: 1000,
  delay: 500,
  distance: "5px",
});


//flip card back
sr.reveal('.back', { 
  origin: 'bottom', 
  duration: 2000,
  delay: 500,
  distance: "100px",
});




// Custom Settings

sr.reveal('.foo-1', { 
  origin: 'right', 
  duration: 2000,
});
sr.reveal('.foo-2', { 
    origin: 'bottom', 
    duration: 2000,
    distance: "200px",
  });

  //SCROLL TO TOP
  var scrolltotop = { setting: { startline: 100, scrollto: 0, scrollduration: 1e3, fadeduration: [500, 100] }, 
  controlHTML: '<img src="https://i1155.photobucket.com/albums/p559/scrolltotop/arrow7.png" />', 
  controlattrs: { offsetx: 5, offsety: 5 }, anchorkeyword: "#top", state: { isvisible: !1, shouldvisible: !1 }, 
  scrollup: function () { this.cssfixedsupport || this.$control.css({ opacity: 0 }); 
  var t = isNaN(this.setting.scrollto) ? this.setting.scrollto : parseInt(this.setting.scrollto); 
  t = "string" == typeof t && 1 == jQuery("#" + t).length ? jQuery("#" + t).offset().top : 0, 
  this.$body.animate({ scrollTop: t }, this.setting.scrollduration) }, 
  keepfixed: function () { var t = jQuery(window), o = t.scrollLeft() + t.width() - this.$control.width() - this.controlattrs.offsetx, 
    s = t.scrollTop() + t.height() - this.$control.height() - this.controlattrs.offsety; this.$control.css({ left: o + "px", top: s + "px" }) }, 
    togglecontrol: function () { var t = jQuery(window).scrollTop(); 
      this.cssfixedsupport || this.keepfixed(), this.state.shouldvisible = t >= this.setting.startline ? !0 : !1, 
      this.state.shouldvisible && !this.state.isvisible ? (this.$control.stop().animate({ opacity: 1 }, 
        this.setting.fadeduration[0]), this.state.isvisible = !0) : 0 == this.state.shouldvisible && this.state.isvisible && (this.$control.stop().animate({ opacity: 0 }, 
          this.setting.fadeduration[1]), this.state.isvisible = !1) }, init: function () { jQuery(document).ready(function (t) { var o = scrolltotop, s = document.all; 
            o.cssfixedsupport = !s || s && "CSS1Compat" == document.compatMode && window.XMLHttpRequest, o.$body = t(window.opera ? "CSS1Compat" == document.compatMode ? "html" : "body" : "html,body"), 
            o.$control = t('<div id="topcontrol">' + o.controlHTML + "</div>").css({ position: o.cssfixedsupport ? "fixed" : "absolute", 
            bottom: o.controlattrs.offsety, right: o.controlattrs.offsetx, opacity: 0, cursor: "pointer" }).attr({ title: "Scroll to Top" }).click(function () { return o.scrollup(), !1 }).appendTo("body"), 
            document.all && !window.XMLHttpRequest && "" != o.$control.text() && o.$control.css({ width: o.$control.width() }), 
            o.togglecontrol(), t('a[href="' + o.anchorkeyword + '"]').click(function () { return o.scrollup(), !1 }), 
            t(window).bind("scroll resize", function (t) { o.togglecontrol() }) }) } }; 
  scrolltotop.init();

  //HAMBURGER
  $(document).ready(function(){
    $('#nav-icon1').click(function(){
      $(this).toggleClass('open');
    });
  });

  // Add hover effect to menus
jQuery('ul.navbar-nav li.dropdown').hover(function() {
  jQuery(this).find('.dropdown-menu').stop(true, true).delay(10).fadeIn();
}, function() {
  jQuery(this).find('.dropdown-menu').stop(true, true).delay(10).fadeOut();
});


//TESTIMONIAL 
$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination:true,
        transitionStyle:"backSlide",
        autoPlay:10000
    });
});

// Smooth Scrolling
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

/*for the İLETİŞİM MESAJI box*/
$(document).ready(function () {
  $('#characterLeft').text('140 karakter kaldı');
  $('#message').keydown(function () {
      var max = 140;
      var len = $(this).val().length;
      if (len >= max) {
          $('#characterLeft').text('Karakter limitine ulaştınız');
          $('#characterLeft').addClass('red');
          $('#btnSubmit').addClass('disabled');
      }
      else {
          var ch = max - len;
          $('#characterLeft').text(ch + ' karakter kaldı');
          $('#btnSubmit').removeClass('disabled');
          $('#characterLeft').removeClass('red');
      }
  });
});	
