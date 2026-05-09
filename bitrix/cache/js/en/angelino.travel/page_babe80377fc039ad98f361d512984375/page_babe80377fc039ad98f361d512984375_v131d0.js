
; /* Start:"a:4:{s:4:"full";s:70:"/local/templates/angelino.travel/assets/js/location-js.js?1772441887562";s:6:"source";s:56:"/local/templates/angelino.travel/assets/js/location-js.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[114],{5525:function(e,a,o){o.r(a);o(2064),o(4439),o(8589);var t=o(8767);if(document.querySelectorAll(".location").length){var l,n,r=document.querySelectorAll(".js-map");t.A.load().then((function(){r.forEach((function(e){var a=Number(e.dataset.lat),o=Number(e.dataset.lng),t=Number(e.dataset.zoom);n=e.dataset.marker,l=new google.maps.Map(e,{center:{lat:a,lng:o},zoom:t,disableDefaultUI:!0,zoomControl:!0,fullscreenControl:!0}),new google.maps.Marker({position:{lat:a,lng:o},map:l,icon:n})}))}))}}}]);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:75:"/local/templates/angelino.travel/assets/js/youtube-block-js.js?1772441887514";s:6:"source";s:61:"/local/templates/angelino.travel/assets/js/youtube-block-js.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1770],{4707:function(e,n,t){t.r(n);t(2064),t(4439);var i=t(2896),s=document.querySelectorAll(".youtube-block__list"),r={breakpoints:{320:{slidesPerView:1,spaceBetween:16},640:{slidesPerView:2,spaceBetween:16}}},c=[],o=function(){innerWidth<=991&&0===c.length?s.forEach((function(e){c.push(slider(e,r))})):innerWidth>991&&c.length>0&&(c.forEach((function(e){e.destroy()})),c=[])};o(),window.addEventListener("resize",(0,i.A)((function(){o()}),150))}}]);
/* End */
;; /* /local/templates/angelino.travel/assets/js/location-js.js?1772441887562*/
; /* /local/templates/angelino.travel/assets/js/youtube-block-js.js?1772441887514*/
