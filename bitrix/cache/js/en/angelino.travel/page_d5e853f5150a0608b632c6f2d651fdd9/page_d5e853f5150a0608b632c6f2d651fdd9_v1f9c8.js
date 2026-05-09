
; /* Start:"a:4:{s:4:"full";s:70:"/local/templates/angelino.travel/assets/js/location-js.js?1772441887562";s:6:"source";s:56:"/local/templates/angelino.travel/assets/js/location-js.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[114],{5525:function(e,a,o){o.r(a);o(2064),o(4439),o(8589);var t=o(8767);if(document.querySelectorAll(".location").length){var l,n,r=document.querySelectorAll(".js-map");t.A.load().then((function(){r.forEach((function(e){var a=Number(e.dataset.lat),o=Number(e.dataset.lng),t=Number(e.dataset.zoom);n=e.dataset.marker,l=new google.maps.Map(e,{center:{lat:a,lng:o},zoom:t,disableDefaultUI:!0,zoomControl:!0,fullscreenControl:!0}),new google.maps.Marker({position:{lat:a,lng:o},map:l,icon:n})}))}))}}}]);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:76:"/local/templates/angelino.travel/assets/js/wrapper-slider-js.js?1772441887523";s:6:"source";s:62:"/local/templates/angelino.travel/assets/js/wrapper-slider-js.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7742],{7097:function(e,n,i){i.r(n);i(2064),i(4439);var r=i(2896),s=document.querySelectorAll(".wrapper-slider__inner.swiper"),t={breakpoints:{320:{slidesPerView:1,spaceBetween:16},640:{slidesPerView:2,spaceBetween:16}}},c=[],o=function(){innerWidth<=991&&0===c.length?s.forEach((function(e){c.push(slider(e,t))})):innerWidth>991&&c.length>0&&(c.forEach((function(e){e.destroy()})),c=[])};o(),window.addEventListener("resize",(0,r.A)((function(){o()}),150))}}]);
/* End */
;; /* /local/templates/angelino.travel/assets/js/location-js.js?1772441887562*/
; /* /local/templates/angelino.travel/assets/js/wrapper-slider-js.js?1772441887523*/
