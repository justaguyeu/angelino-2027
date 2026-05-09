
; /* Start:"a:4:{s:4:"full";s:69:"/local/templates/angelino.travel/assets/js/columns-js.js?1772441887532";s:6:"source";s:55:"/local/templates/angelino.travel/assets/js/columns-js.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4536],{365:function(e,s,t){t.r(s);t(2064),t(4439);var n,c=t(8674),o=document.querySelectorAll(".js-close-aside"),i=document.querySelector(".columns__sidebar");innerWidth<=1400&&o.forEach((function(e){e.addEventListener("click",(function(e){i.classList.contains("show")?(i.classList.remove("show"),n.destroy(),n=new c.A(i,{topSpacing:130,bottomSpacing:85})):(i.classList.add("show"),setTimeout((function(){n=new c.A(i,{topSpacing:130,bottomSpacing:85})}),200))}))}))}}]);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:76:"/local/templates/angelino.travel/assets/js/wrapper-slider-js.js?1772441887523";s:6:"source";s:62:"/local/templates/angelino.travel/assets/js/wrapper-slider-js.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7742],{7097:function(e,n,i){i.r(n);i(2064),i(4439);var r=i(2896),s=document.querySelectorAll(".wrapper-slider__inner.swiper"),t={breakpoints:{320:{slidesPerView:1,spaceBetween:16},640:{slidesPerView:2,spaceBetween:16}}},c=[],o=function(){innerWidth<=991&&0===c.length?s.forEach((function(e){c.push(slider(e,t))})):innerWidth>991&&c.length>0&&(c.forEach((function(e){e.destroy()})),c=[])};o(),window.addEventListener("resize",(0,r.A)((function(){o()}),150))}}]);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:97:"/local/templates/angelino.travel/components/sprint.editor/blocks/article/_script.js?17275138631048";s:6:"source";s:82:"/local/templates/angelino.travel/components/sprint.editor/blocks/article/_script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/* Общие скрипты для блоков */

/*accordion*/
document.addEventListener("DOMContentLoaded", function (e) {
    var acc = document.getElementsByClassName("sp-accordion");
    for (var accIndex = 0; accIndex < acc.length; accIndex++) {
        if (!acc[accIndex].classList.contains('sp-accordion__initialized')) {
            acc[accIndex].classList.add('sp-accordion__initialized');
            var titles = acc[accIndex].getElementsByClassName("sp-accordion-title");
            for (var titleIndex = 0; titleIndex < titles.length; titleIndex++) {
                titles[titleIndex].addEventListener("click", function () {
                    this.classList.toggle("sp-accordion-title__active");
                    var panel = this.nextElementSibling;
                    if (panel.style.display === "block") {
                        panel.style.display = "none";
                    } else {
                        panel.style.display = "block";
                    }
                });
            }
        }
    }
});


/* End */
;
; /* Start:"a:4:{s:4:"full";s:72:"/local/templates/angelino.travel/assets/js/map-place-js.js?17724418871947";s:6:"source";s:57:"/local/templates/angelino.travel/assets/js/map-place-js.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4127],{1346:function(e,a,n){n.r(a);n(2064),n(4439),n(8589),n(5423),n(3145),n(6565),n(8837),n(5831),n(3343);var t,c,o=n(8767),r=document.querySelectorAll(".js-map-place"),s=document.querySelectorAll(".map-place__object");o.A.load().then((function(){r.forEach((function(e){var a,n=JSON.parse(e.dataset.objects),o=e.dataset.zoom?Number(e.dataset.zoom):9,r=e.dataset.center?JSON.parse(e.dataset.center):[-2.325165366,34.83333],i=e.id,l=e.dataset.view;t=new google.maps.Map(e,{center:{lat:r[0],lng:r[1]},zoomControl:!0,zoom:o,disableDefaultUI:!0,mapTypeId:void 0===l?"roadmap":l}),c=new google.maps.InfoWindow({content:""}),a=[],n.forEach((function(e){var o,r,l=e.id,p=e.properties,d=e.coordinates,m=e.icon,u=e.label,f=e.iconActive,v=new google.maps.LatLng(d[0],d[1]),h=m,g=f,b=new google.maps.Marker({position:v,map:t,icon:h,label:{className:"label-marker",text:u}});p&&(r='\n           <div class="modal-lpmap">\n            <div class="modal-lpmap__img">\n              <img src='.concat(p.srcImg,' alt="">\n            </div>\n            <div class="modal-lpmap__content">\n              <h3>').concat(p.name,"</h3>\n              <p>").concat(p.desc,"</p>\n              <a href=").concat(p.link.href,">").concat(p.link.text,"</p>\n            </div>\n          </div>"));var k=function(){c.setContent(r),c.open({anchor:b,map:t,shouldFocus:!1})};a.push(b),"map-place"===i&&(o=Array.from(s).filter((function(e){return Number(e.dataset.id)===Number(l)})));var w=function(){s.forEach((function(e){return e.classList.remove("active")}))},L=function(t){a.forEach((function(t,c){Number(e.id)===c+1?t.setIcon(g):a[c].setIcon(n[c].icon)})),w()};b.addListener("click",(function(e){k(),L(),"map-place"===i&&o[0].classList.add("active")})),"map-place"===i&&o[0].addEventListener("click",(function(e){e.preventDefault();var a=e.currentTarget;k(),L(),w(),a.classList.add("active")}))}))}))}))}}]);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:71:"/local/templates/angelino.travel/assets/js/comments-js.js?17724418871982";s:6:"source";s:56:"/local/templates/angelino.travel/assets/js/comments-js.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8967],{6003:function(e,t,n){n.r(t);n(8589),n(2064),n(4439);var a=n(1348),o=n(9415),r=n.n(o),c=n(2766);!function(){var e,t=document.querySelector(".comment-form"),n=t.querySelectorAll(".comment-form__input"),o=null===(e=document.querySelector(".lang"))||void 0===e?void 0:e.dataset.prefix,d=new(r().modal)({cssClass:["modal-custom","modal-info"],closeLabel:{en:"Close",ru:"Закрыть",de:"Schließen",es:"Сerrar"}[o||"en"]});(0,c.tI)(d);t.addEventListener("submit",(function(e){var o;e.preventDefault(),(o=new FormData(t)).append("action","addComment"),(0,a.A)({method:t.getAttribute("method"),url:t.getAttribute("action"),data:o}).then((function(e){n.forEach((function(e){e.value=""}));var t=document.querySelector(".tingle-content--comment");d.setContent(t),d.open()})).catch((function(e){var t=document.querySelector(".tingle-content--error");d.setContent(t),d.open()}))}))}(),document.querySelectorAll(".js-like").forEach((function(e){e.addEventListener("click",(function(t){t.preventDefault(),function(e){var t=e.dataset.action,n=new FormData;n.append("action",e.dataset.action),n.append("fields",e.dataset.fields),(0,a.A)({url:e.dataset.url,method:"POST",data:n}).then((function(n){n.status&&("addLike"===t?(e.classList.add("liked"),e.dataset.action="delLike"):(e.classList.remove("liked"),e.dataset.action="addLike"))})).catch((function(e){}))}(e)}))}));var d=document.querySelector(".js-load-comment"),i=document.querySelector(".comments__list");if(d){var u=d.dataset.url,l=d.dataset.page,s=d.dataset.maxPage;d.addEventListener("click",(function(e){var t,n=e.currentTarget;n.setAttribute("disabled","disabled"),t=n,(0,a.A)({url:u,method:"GET",dataType:"json",params:{page:l}}).then((function(e){i.innerHTML+=e.data.content_html,u=e.data.pager_url,t.removeAttribute("disabled"),++l===Number(s)&&document.querySelector(".comments__load").remove()})).catch((function(e){t.removeAttribute("disabled")}))}))}}}]);
/* End */
;; /* /local/templates/angelino.travel/assets/js/columns-js.js?1772441887532*/
; /* /local/templates/angelino.travel/assets/js/wrapper-slider-js.js?1772441887523*/
; /* /local/templates/angelino.travel/components/sprint.editor/blocks/article/_script.js?17275138631048*/
; /* /local/templates/angelino.travel/assets/js/map-place-js.js?17724418871947*/
; /* /local/templates/angelino.travel/assets/js/comments-js.js?17724418871982*/
