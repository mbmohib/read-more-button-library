!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist",n(n.s=3)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ReadMoreBtn=function(t){this.articles=t.selectors,this.text=t.readMoreBtnText||"Read More",this.length=t.length||300,this.sliceLength=t.sliceLength||100,this.expandContent=function(t,e){t.textContent=e},this.createBtn=function(){var t=document.createElement("span");return t.setAttribute("class","read-more"),t.innerHTML=this.text,t},this.excerpt=function(t){return t.textContent.slice(0,this.sliceLength)+".... "},this.init=function(){var t=this,e=this.articles;e.length||(e=Array.from(e)).push(this.articles),e.forEach(function(e){if(e.textContent.length>t.length){var n=e.textContent,r=t.createBtn();e.textContent=t.excerpt(e),e.appendChild(r),r.onclick=function(){return t.expandContent(e,n)}}})},this.init()},e.ReadMoreOverlay=function(t){this.articles=t.selectors,this.text=t.readMoreBtnText||"Read More",this.length=t.length||300,this.sliceLength=t.sliceLength||100,this.maxHeightValue=t.maxHeight||1e3,this.overlayDefaultStyle=void 0==t.overlayStyle,this.overlayStyle="\n        position: absolute; \n        bottom: 0;\n        width: 100%;\n        height: 15px;\n        background: linear-gradient(rgba(255, 255, 255, .6), #fff);\n    ",this.expandContent=function(t,e,n){t.style.maxHeight=this.maxHeightValue+"px",e.style.display="none",n.style.display="none"},this.createDiv=function(t){var e=document.createElement("div");return e.setAttribute("class",t),e},this.init=function(){var t=this,e=this.articles;e.length||(e=Array.from(e)).push(this.articles),e.forEach(function(e){if(e.textContent.length>t.length){e.setAttribute("class","article");var n=t.createDiv("article__content--wrapper"),r=t.createDiv("article__content"),i=t.createDiv("article__overlay"),o=t.createDiv("article__btn");r.innerHTML=e.innerHTML,e.innerHTML="",o.innerHTML=t.text,r.style.maxHeight=t.sliceLength+"px",r.style.overflow="hidden",n.style.position="relative",t.overlayDefaultStyle&&(i.style.cssText=t.overlayStyle),n.appendChild(r),n.appendChild(i),e.appendChild(n),e.appendChild(o),o.onclick=function(){return t.expandContent(r,i,o)}}})},this.init()}},function(t,e,n){"use strict";var r=n(0),i=document.querySelectorAll(".one article"),o=document.querySelectorAll(".two article");new r.ReadMoreOverlay({selectors:i,readMoreBtnText:"Read Full Content",length:400,sliceLength:200}),new r.ReadMoreBtn({selectors:o,readMoreBtnText:"Read More",length:500,sliceLength:300})},function(t,e,n){"use strict";var r,i,o,a;window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(t,e){e=e||window;for(var n=0;n<this.length;n++)t.call(e,this[n],n,this)}),Array.from||(Array.from=(r=Object.prototype.toString,i=function(t){return"function"==typeof t||"[object Function]"===r.call(t)},o=Math.pow(2,53)-1,a=function(t){var e=function(t){var e=Number(t);return isNaN(e)?0:0!==e&&isFinite(e)?(e>0?1:-1)*Math.floor(Math.abs(e)):e}(t);return Math.min(Math.max(e,0),o)},function(t){var e=Object(t);if(null==t)throw new TypeError("Array.from requires an array-like object - not null or undefined");var n,r=arguments.length>1?arguments[1]:void 0;if(void 0!==r){if(!i(r))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(n=arguments[2])}for(var o,l=a(e.length),c=i(this)?Object(new this(l)):new Array(l),s=0;s<l;)o=e[s],c[s]=r?void 0===n?r(o,s):r.call(n,o,s):o,s+=1;return c.length=l,c}))},function(t,e,n){"use strict";n(11),n(4),n(2),n(1)},function(t,e){},,,,,,,function(t,e){}]);
//# sourceMappingURL=read-more.js.map