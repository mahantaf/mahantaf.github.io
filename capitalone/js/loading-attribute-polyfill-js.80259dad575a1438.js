!function(i,c){"object"==typeof exports&&typeof module<"u"?module.exports=c():"function"==typeof define&&define.amd?define(c):(i||self).loadingAttributePolyfill=c()}(this,function(){var i,c="loading"in HTMLImageElement.prototype,s="loading"in HTMLIFrameElement.prototype,l="onscroll"in window;function u(e){var r,t,a=[];"picture"===e.parentNode.tagName.toLowerCase()&&((t=(r=e.parentNode).querySelector("source[data-lazy-remove]"))&&r.removeChild(t),a=Array.prototype.slice.call(e.parentNode.querySelectorAll("source"))),a.push(e),a.forEach(function(n){n.hasAttribute("data-lazy-srcset")&&(n.setAttribute("srcset",n.getAttribute("data-lazy-srcset")),n.removeAttribute("data-lazy-srcset"))}),e.setAttribute("src",e.getAttribute("data-lazy-src")),e.removeAttribute("data-lazy-src")}function m(e){var n,o,p,r=document.createElement("div");for(r.innerHTML=(o=void 0,void 0,p="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 "+(((o=(n=e).textContent||n.innerHTML).match(/width=['"](\d+)['"]/)||!1)[1]||1)+" "+((o.match(/height=['"](\d+)['"]/)||!1)[1]||1)+"%27%3E%3C/svg%3E",(/<img/gim.test(o)&&!c||/<iframe/gim.test(o)&&!s)&&l&&(o=void 0===i?o.replace(/(?:\r\n|\r|\n|\t| )src=/g,' lazyload="1" src='):(o=o.replace("<source",'<source srcset="'+p+'" data-lazy-remove="true"></source>\n<source')).replace(/(?:\r\n|\r|\n|\t| )srcset=/g," data-lazy-srcset=").replace(/(?:\r\n|\r|\n|\t| )src=/g,' src="'+p+'" data-lazy-src=')),o);r.firstChild;){var t=r.firstChild;if(l&&void 0!==i&&t.tagName&&(("img"===t.tagName.toLowerCase()||"picture"===t.tagName.toLowerCase())&&!c||"iframe"===t.tagName.toLowerCase()&&!s)){var a="picture"===t.tagName.toLowerCase()?r.querySelector("img"):t;i.observe(a)}e.parentNode.insertBefore(t,e)}e.parentNode.removeChild(e)}window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach),"IntersectionObserver"in window&&(i=new IntersectionObserver(function(e,r){e.forEach(function(t){if(0!==t.intersectionRatio){var a=t.target;r.unobserve(a),u(a)}})},{rootMargin:"0px 0px 256px 0px",threshold:.01}));var d=function(){document.querySelectorAll("noscript.loading-lazy").forEach(function(e){return m(e)}),void 0!==window.matchMedia&&window.matchMedia("print").addListener(function(e){e.matches&&document.querySelectorAll('img[loading="lazy"][data-lazy-src],iframe[loading="lazy"][data-lazy-src]').forEach(function(r){u(r)})})};return/comp|inter/.test(document.readyState)?d():"addEventListener"in document?document.addEventListener("DOMContentLoaded",function(){d()}):document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&d()}),{prepareElement:m}});