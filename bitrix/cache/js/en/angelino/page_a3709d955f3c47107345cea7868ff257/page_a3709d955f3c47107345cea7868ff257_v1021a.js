
; /* Start:"a:4:{s:4:"full";s:60:"/local/templates/angelino/assets/js/intro-js.js?1772282680700";s:6:"source";s:46:"/local/templates/angelino/assets/js/intro-js.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9889],{3112:function(e,t,r){r.r(t);var n=r(2896);const o=document.querySelectorAll(".intro");if(innerWidth>=768)o.forEach(e=>{const t=e.querySelector(".intro__video");t&&t.play()});else{const e=o,t={loop:!0,effect:"fade",fadeEffect:{crossFade:!0},speed:1e3,autoplay:{disableOnInteraction:!1},breakpoints:{320:{slidesPerView:1}}};let r=[];const s=()=>{innerWidth<=768&&0===r.length?e.forEach(e=>{e.querySelector(".swiper")&&(t.autoplay.delay=e.querySelector(".swiper").dataset.autoplay),r.push(slider(e,t))}):innerWidth>768&&r.length>0&&(r.forEach(e=>{e.destroy()}),r=[])};s(),window.addEventListener("resize",(0,n.A)(()=>{s()},150))}}}]);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:69:"/local/templates/angelino/assets/js/card-advantage-js.js?1772282680409";s:6:"source";s:55:"/local/templates/angelino/assets/js/card-advantage-js.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(self.webpackChunk=self.webpackChunk||[]).push([[5547],{6040:function(){const e=document.querySelectorAll(".card-advantage");e.length&&innerWidth<=991&&e.forEach(t=>{t.addEventListener("click",()=>{e.forEach(e=>e.classList.remove("is-flipped")),t.classList.add("is-flipped")});document.addEventListener("click",e=>{e.stopPropagation(),e.target&&!t.contains(e.target)&&t.classList.remove("is-flipped")})})}}]);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:69:"/local/templates/angelino/assets/js/wrapper-slider-js.js?1772282680348";s:6:"source";s:55:"/local/templates/angelino/assets/js/wrapper-slider-js.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(self.webpackChunk=self.webpackChunk||[]).push([[7742],{7097:function(){const e=document.querySelectorAll(".wrapper-slider"),s={breakpoints:{320:{slidesPerView:1,spaceBetween:25},380:{slidesPerView:1.5,spaceBetween:25},580:{slidesPerView:2.5,spaceBetween:25},991:{slidesPerView:4,spaceBetween:38}}};let i=[];e.forEach(e=>{i.push(slider(e,s))})}}]);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:66:"/local/templates/angelino/assets/js/tabs-slider-js.js?1772282680329";s:6:"source";s:52:"/local/templates/angelino/assets/js/tabs-slider-js.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(self.webpackChunk=self.webpackChunk||[]).push([[8957],{8356:function(){const e=document.querySelectorAll(".tabs-slider");e.length&&e.forEach(e=>{const l=e.querySelectorAll(".tab"),t=e.querySelectorAll(".slider__slide");l.length<4&&e.querySelector(".tabs-slider__btns").classList.add("center"),window.handleTabs(l,t,"tab")})}}]);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:61:"/local/templates/angelino/assets/js/slider-js.js?1772282680935";s:6:"source";s:47:"/local/templates/angelino/assets/js/slider-js.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(self.webpackChunk=self.webpackChunk||[]).push([[4648],{8719:function(){const e=document.querySelectorAll(".slider");if(e.length){const s={direction:"horizontal",cssMode:!(innerWidth>=991),freeMode:{enabled:!0},mousewheel:{enabled:!0,forceToAxis:!0,releaseOnEdges:!0,sensitivity:6},speed:1e3,effect:"slide",scrollbar:{el:".swiper-scrollbar",draggable:!0},on:{scrollbarDragStart:e=>{e.scrollbar.dragEl.classList.add("focus")},scrollbarDragEnd:e=>{e.scrollbar.dragEl.classList.remove("focus")}},breakpoints:{320:{slidesPerView:1,spaceBetween:20},380:{slidesPerView:1.14,spaceBetween:20},580:{slidesPerView:1.7,spaceBetween:20},768:{slidesPerView:2.5,spaceBetween:20},991:{slidesPerView:3.5,spaceBetween:19}}};let r=[];e.forEach(e=>{const l=e.dataset.slidePrev;s.breakpoints[991].slidesPerView=l||3.5,s.breakpoints[380].slidesPerView=l?1.21:1.14,e.classList.contains("slider--tabs")&&(window.toursListSlider=r),r.push(slider(e,s))})}}}]);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:61:"/local/templates/angelino/assets/js/impact-js.js?1772282680292";s:6:"source";s:47:"/local/templates/angelino/assets/js/impact-js.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1127],{6924:function(e,c,t){t.r(c);var n=t(195);const a=document.querySelector(".impact");if(a){a.querySelectorAll(".impact__count span").forEach(e=>{new n.T(e,e.dataset.count,{enableScrollSpy:!0,scrollSpyOnce:!0}).start()})}}}]);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:62:"/local/templates/angelino/assets/js/reviews-js.js?1772282680447";s:6:"source";s:48:"/local/templates/angelino/assets/js/reviews-js.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4562],{8563:function(e,n,t){t.r(n);var s=t(2896);const r=document.querySelectorAll(".reviews:not(.not-slider)"),i={breakpoints:{320:{slidesPerView:1,spaceBetween:32}}};let o=[];const c=()=>{innerWidth<=768&&0===o.length?r.forEach(e=>{o.push(slider(e,i))}):innerWidth>768&&o.length>0&&(o.forEach(e=>{e.destroy()}),o=[])};c(),window.addEventListener("resize",(0,s.A)(()=>{c()},150))}}]);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:66:"/local/templates/angelino/assets/js/video-block-js.js?1772282680407";s:6:"source";s:52:"/local/templates/angelino/assets/js/video-block-js.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(self.webpackChunk=self.webpackChunk||[]).push([[6600],{2830:function(){const e=document.querySelectorAll(".js-iframe");let s=!1;e.forEach(e=>{e.addEventListener("click",function(){this.classList.contains("video-block__iframe--load")&&s||(this.closest(".video-block").classList.add("video-block--load"),this.closest(".video-block").querySelector("iframe").setAttribute("src",this.dataset.src),s=!0)})})}}]);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:68:"/local/templates/angelino/assets/js/youtube-block-js.js?1772282680474";s:6:"source";s:54:"/local/templates/angelino/assets/js/youtube-block-js.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1770],{4707:function(e,n,s){s.r(n);var t=s(2896);const r=document.querySelectorAll(".youtube-block"),i={breakpoints:{320:{slidesPerView:1,spaceBetween:16},640:{slidesPerView:2,spaceBetween:16}}};let c=[];const l=()=>{innerWidth<=768&&0===c.length?r.forEach(e=>{c.push(slider(e,i))}):innerWidth>768&&c.length>0&&(c.forEach(e=>{e.destroy()}),c=[])};l(),window.addEventListener("resize",(0,t.A)(()=>{l()},150))}}]);
/* End */
;; /* /local/templates/angelino/assets/js/intro-js.js?1772282680700*/
; /* /local/templates/angelino/assets/js/card-advantage-js.js?1772282680409*/
; /* /local/templates/angelino/assets/js/wrapper-slider-js.js?1772282680348*/
; /* /local/templates/angelino/assets/js/tabs-slider-js.js?1772282680329*/
; /* /local/templates/angelino/assets/js/slider-js.js?1772282680935*/
; /* /local/templates/angelino/assets/js/impact-js.js?1772282680292*/
; /* /local/templates/angelino/assets/js/reviews-js.js?1772282680447*/
; /* /local/templates/angelino/assets/js/video-block-js.js?1772282680407*/
; /* /local/templates/angelino/assets/js/youtube-block-js.js?1772282680474*/
