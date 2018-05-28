! function (a) {
  "use strict";
  "function" == typeof define && define.amd ? define(["slick"], a) : "undefined" != typeof exports ? module.exports = a(require("slick")) : a(Slick)
}(function (a){
var testimonialsSlider = $("#testimonials-slider", "#testimonials");
testimonialsSlider.slick({
    dots: !1,
    arrows: !0,
    infinite: !1,
    slidesToShow: 1,
    slidesToScroll: 1
});
var miniTestimonialsSlider = $(".mini-testimonials-slider", "#form-section");
miniTestimonialsSlider.slick({
    dots: !0,
    arrows: !1,
    infinite: !1,
    autoplay: !0,
    speed: 200
});
var infoSlider = $(".info-slider", "#page-head");
infoSlider.slick({
    dots: !0,
    arrows: !1,
    infinite: !1,
    autoplay: !0,
    speed: 200
});

    var e = $("#c-plan");
    e.slider({
        tooltip: "always"
    }), e.on("slide", function (e) {
        $(".slider .tooltip-up", "#custom-plan").text(e.value / 20)
    }), e.value = e.data("slider-value"), $(".slider .tooltip", "#custom-plan").append('<div class="tooltip-up"></div>'), $(".slider .tooltip-up", "#custom-plan").text(e.value / 20), $(".slider .tooltip-inner", "#custom-plan").attr("data-unit", e.data("unit")), $(".slider .tooltip-up", "#custom-plan").attr("data-currency", e.data("currency"));
    var s = $(".feature-icon-holder", "#features-links-holder");
    s.on("click", function () {
        s.removeClass("opened"), $(this).addClass("opened"), $(".show-details", "#features-holder").removeClass("show-details"), $(".feature-d" + $(this).data("id"), "#features-holder").addClass("show-details")
    });
    var i = $("#features-holder"),
        a = $("#features-links-holder"),
        t = $(".show-details", "#features-holder");
    i.css("height", t.height() + 120), a.css("height", t.height() + 120), $(window).on("resize", function () {
        return i.css("height", t.height() + 120), a.css("height", t.height() + 120), !1
    });
    var o = $(".app-icon-holder", "#apps");
    o.on("mouseover", function () {
        o.removeClass("opened"), $(this).addClass("opened"), $(".show-details", "#apps").removeClass("show-details"), $(".app-details" + $(this).data("id"), "#apps").addClass("show-details")
    });
    var l = $(".info-link", "#more-info");
    l.on("mouseover", function () {
        l.removeClass("opened"), $(this).addClass("opened"), $(".show-details", "#more-info").removeClass("show-details"), $(".info-d" + $(this).data("id"), "#more-info").addClass("show-details")
    })

});