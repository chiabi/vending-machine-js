!function(n){var e={};function r(t){if(e[t])return e[t].exports;var o=e[t]={i:t,l:!1,exports:{}};return n[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=n,r.c=e,r.d=function(n,e,t){r.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,e){if(1&e&&(n=r(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)r.d(t,o,function(e){return n[e]}.bind(null,o));return t},r.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.p="",r(r.s=0)}([function(n,e,r){"use strict";r(1);var t=["app","vendor"],o=t[0],a=t[1];console.log(o),console.log(a)},function(n,e,r){var t=r(2);"string"==typeof t&&(t=[[n.i,t,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(4)(t,o);t.locals&&(n.exports=t.locals)},function(n,e,r){(e=n.exports=r(3)(!1)).push([n.i,"@import url(https://fonts.googleapis.com/css?family=Poppins|Lobster);",""]),e.push([n.i,'*,\n*:before,\n*:after {\n  box-sizing: border-box; }\n\nbody {\n  background-color: #181818;\n  font-family: "Poppins", sans-serif; }\n\n.app {\n  display: flex; }\n\n.machine {\n  display: flex;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  width: 400px;\n  height: 600px;\n  padding: 20px;\n  border-radius: 5px;\n  border: 10px;\n  background-color: #F40311; }\n  .machine__display {\n    width: 100%;\n    background-color: #440105; }\n  .machine__ad {\n    overflow: hidden;\n    width: 60%;\n    height: 100px;\n    border: 2px solid #fff;\n    background-color: #8f020a;\n    background-image: radial-gradient(circle at 50% 80%, #641E16 60%, transparent 60%);\n    position: relative; }\n    .machine__ad:before {\n      content: \'\';\n      width: 80px;\n      height: 200px;\n      border-left: 5px solid rgba(255, 255, 255, 0.8);\n      border-right: 5px solid rgba(255, 255, 255, 0.8);\n      background-color: #641E16;\n      background-image: radial-gradient(circle at 51% 61%, #641E16 2px, transparent 2px), radial-gradient(circle at 50% 63%, transparent 1px, #100504 4px, transparent 5px), radial-gradient(circle at 29% 31%, #641E16 2px, transparent 2px), radial-gradient(circle at 28% 33%, transparent 1px, #100504 4px, transparent 5px), radial-gradient(circle at 25% 36%, #641E16 4px, transparent 4px), radial-gradient(circle at 25% 38%, transparent 3px, #100504 6px, transparent 7px), repeating-linear-gradient(90deg, transparent 0, transparent 30%, rgba(255, 255, 255, 0.2) 30%, rgba(255, 255, 255, 0.2) 35%, transparent 35%), linear-gradient(90deg, #100504 10%, #641E16 10%, #641E16 80%, #100504 80%, #100504 97%, #641E16 97%);\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%) rotate(-15deg); }\n    .machine__ad:after {\n      content: \'Coca-Cola\';\n      font-family: "Lobster", cursive;\n      color: #fff;\n      font-size: 2em;\n      white-space: nowrap;\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%) rotate(-15deg); }\n  .machine__ui {\n    width: 40%;\n    height: 50px;\n    background-color: gray; }\n  .machine__door {\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n    padding: 10px;\n    width: 60%;\n    height: 80px;\n    border-top: 5px solid #fd4751;\n    border-left: 5px solid #a8020c;\n    border-right: 5px solid #a8020c;\n    border-bottom: 20px solid #c2020d;\n    font-size: 0.85em;\n    color: rgba(255, 255, 255, 0.2);\n    background-color: #440105;\n    background-image: linear-gradient(13deg, transparent, rgba(128, 128, 128, 0.5) 50%); }\n\n.display-shelf {\n  display: flex;\n  justify-content: space-around;\n  padding-top: 1.5em;\n  border-bottom: 2.5em solid #8f020a; }\n\n.drink__item:before, .drink__item:after {\n  content: \'\';\n  width: 0.5em;\n  height: 0.3em;\n  border-radius: 50%;\n  position: absolute;\n  top: 0;\n  background-color: #440105; }\n\n.drink {\n  margin-bottom: 2.2;\n  position: relative; }\n  .drink__item {\n    width: 3em;\n    height: 5em;\n    border-top: 3px solid gray;\n    border-top-left-radius: 2px;\n    border-top-right-radius: 2px;\n    background-color: #fff;\n    position: relative;\n    overflow: hidden; }\n    .drink__item:before {\n      left: 0;\n      transform: translateX(-70%); }\n    .drink__item:after {\n      right: 0;\n      transform: translateX(70%); }\n    .drink__item span {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform-origin: 0 0 0;\n      transform-style: preserve-3d;\n      transform: translateY(-50%) translateX(-25%) translateZ(10px) rotateX(10deg) rotateZ(25deg) rotateY(-10deg);\n      font-family: "Lobster", cursive;\n      color: rgba(255, 255, 255, 0.5);\n      text-shadow: 1px 1px 0 rgba(24, 24, 24, 0.2), -1px 1px 0 rgba(24, 24, 24, 0.2), 1px -1px 0 rgba(24, 24, 24, 0.2), -1px -1px 0 rgba(24, 24, 24, 0.2); }\n  .drink.coca-cola .drink__item {\n    background-color: #CB4335;\n    background-image: linear-gradient(180deg, #7a2820 0.3em, #7a2820 0.3em, transparent 0.4em, transparent), linear-gradient(90deg, #7a2820 20%, #CB4335, rgba(255, 255, 255, 0.5), #7a2820); }\n  .drink.cider .drink__item {\n    background-color: #28B463;\n    background-image: linear-gradient(180deg, #156135 0.3em, #156135 0.3em, transparent 0.4em, transparent), linear-gradient(90deg, #156135 20%, #28B463, rgba(255, 255, 255, 0.5), #156135); }\n  .drink.fanta .drink__item {\n    background-color: #E67E22;\n    background-image: linear-gradient(180deg, #924d10 0.3em, #924d10 0.3em, transparent 0.4em, transparent), linear-gradient(90deg, #924d10 20%, #E67E22, rgba(255, 255, 255, 0.5), #924d10); }\n  .drink.water .drink__item {\n    background-color: #2E86C1;\n    background-image: linear-gradient(180deg, #1a4d6f 0.3em, #1a4d6f 0.3em, transparent 0.4em, transparent), linear-gradient(90deg, #1a4d6f 20%, #2E86C1, rgba(255, 255, 255, 0.5), #1a4d6f); }\n  .drink.dr-pepper .drink__item {\n    background-color: #A93226;\n    background-image: linear-gradient(180deg, #561913 0.3em, #561913 0.3em, transparent 0.4em, transparent), linear-gradient(90deg, #561913 20%, #A93226, rgba(255, 255, 255, 0.5), #561913); }\n  .drink.vitamin .drink__item {\n    background-color: #D4AC0D;\n    background-image: linear-gradient(180deg, #745e07 0.3em, #745e07 0.3em, transparent 0.4em, transparent), linear-gradient(90deg, #745e07 20%, #D4AC0D, rgba(255, 255, 255, 0.5), #745e07); }\n  .drink.grape-juice .drink__item {\n    background-color: #884EA0;\n    background-image: linear-gradient(180deg, #4e2d5b 0.3em, #4e2d5b 0.3em, transparent 0.4em, transparent), linear-gradient(90deg, #4e2d5b 20%, #884EA0, rgba(255, 255, 255, 0.5), #4e2d5b); }\n  .drink.orange-juice .drink__item {\n    background-color: #D68910;\n    background-image: linear-gradient(180deg, #774c09 0.3em, #774c09 0.3em, transparent 0.4em, transparent), linear-gradient(90deg, #774c09 20%, #D68910, rgba(255, 255, 255, 0.5), #774c09); }\n  .drink .btn-buy {\n    width: 6em;\n    margin-top: 0.3em;\n    margin-left: -3em;\n    border-radius: 1.5em;\n    border: 2px solid #323232;\n    background-color: #181818;\n    color: #fff;\n    padding: 0.3em 0;\n    font-family: "Poppins", sans-serif;\n    position: absolute;\n    top: 100%;\n    left: 50%; }\n    .drink .btn-buy:before {\n      content: \'\';\n      width: 0.5em;\n      height: 0.5em;\n      border-radius: 50%;\n      background-color: #4b4b4b;\n      position: absolute;\n      top: 50%;\n      left: 0.5em;\n      transform: translateY(-50%); }\n    .drink .btn-buy:disabled {\n      color: rgba(255, 255, 255, 0.4); }\n      .drink .btn-buy:disabled:before {\n        background-color: #F40311; }\n  .drink.is-can-buy .btn-buy {\n    border-color: #F1C40F;\n    box-shadow: 0 0 10px 2px #F1C40F; }\n\n.user {\n  flex-grow: 1;\n  padding: 20px; }\n\n.wallet {\n  width: 100%; }\n  .wallet > h2 {\n    display: inline-block;\n    margin: 0;\n    padding: 0.5em 0.8em;\n    font-size: 1.25em;\n    border-top-right-radius: 10px;\n    border-top-left-radius: 10px;\n    background-color: #236fa0;\n    color: #11354c; }\n  .wallet__coin {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100px;\n    background-color: #1A5276; }\n  .wallet .coin {\n    margin: 10px; }\n\n.coin {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n  height: 50px;\n  border-radius: 100%;\n  background-color: #f4d03f;\n  color: #c29d0b;\n  font-weight: bold;\n  font-family: "Poppins", sans-serif;\n  border-top: 5px solid #dab10d;\n  border-right: 5px solid #c29d0b;\n  border-left: 5px solid #aa8a0a;\n  border-bottom: 5px solid #aa8a0a;\n  position: relative; }\n  .coin:before {\n    width: 50px;\n    height: 50px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%); }\n  .coin:disabled {\n    opacity: 0.5; }\n',""])},function(n,e){n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var r=function(n,e){var r=n[1]||"",t=n[3];if(!t)return r;if(e&&"function"==typeof btoa){var o=function(n){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"}(t),a=t.sources.map(function(n){return"/*# sourceURL="+t.sourceRoot+n+" */"});return[r].concat(a).concat([o]).join("\n")}return[r].join("\n")}(e,n);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(n,r){"string"==typeof n&&(n=[[null,n,""]]);for(var t={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(t[a]=!0)}for(o=0;o<n.length;o++){var i=n[o];"number"==typeof i[0]&&t[i[0]]||(r&&!i[2]?i[2]=r:r&&(i[2]="("+i[2]+") and ("+r+")"),e.push(i))}},e}},function(n,e,r){var t={},o=function(n){var e;return function(){return void 0===e&&(e=n.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),a=function(n){var e={};return function(n,r){if("function"==typeof n)return n();if(void 0===e[n]){var t=function(n,e){return e?e.querySelector(n):document.querySelector(n)}.call(this,n,r);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}}(),i=null,d=0,s=[],l=r(5);function c(n,e){for(var r=0;r<n.length;r++){var o=n[r],a=t[o.id];if(a){a.refs++;for(var i=0;i<a.parts.length;i++)a.parts[i](o.parts[i]);for(;i<o.parts.length;i++)a.parts.push(m(o.parts[i],e))}else{var d=[];for(i=0;i<o.parts.length;i++)d.push(m(o.parts[i],e));t[o.id]={id:o.id,refs:1,parts:d}}}}function p(n,e){for(var r=[],t={},o=0;o<n.length;o++){var a=n[o],i=e.base?a[0]+e.base:a[0],d={css:a[1],media:a[2],sourceMap:a[3]};t[i]?t[i].parts.push(d):r.push(t[i]={id:i,parts:[d]})}return r}function f(n,e){var r=a(n.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var t=s[s.length-1];if("top"===n.insertAt)t?t.nextSibling?r.insertBefore(e,t.nextSibling):r.appendChild(e):r.insertBefore(e,r.firstChild),s.push(e);else if("bottom"===n.insertAt)r.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=a(n.insertAt.before,r);r.insertBefore(e,o)}}function u(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=s.indexOf(n);e>=0&&s.splice(e,1)}function g(n){var e=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var t=function(){0;return r.nc}();t&&(n.attrs.nonce=t)}return b(e,n.attrs),f(n,e),e}function b(n,e){Object.keys(e).forEach(function(r){n.setAttribute(r,e[r])})}function m(n,e){var r,t,o,a;if(e.transform&&n.css){if(!(a=e.transform(n.css)))return function(){};n.css=a}if(e.singleton){var s=d++;r=i||(i=g(e)),t=x.bind(null,r,s,!1),o=x.bind(null,r,s,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=function(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",b(e,n.attrs),f(n,e),e}(e),t=function(n,e,r){var t=r.css,o=r.sourceMap,a=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||a)&&(t=l(t));o&&(t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([t],{type:"text/css"}),d=n.href;n.href=URL.createObjectURL(i),d&&URL.revokeObjectURL(d)}.bind(null,r,e),o=function(){u(r),r.href&&URL.revokeObjectURL(r.href)}):(r=g(e),t=function(n,e){var r=e.css,t=e.media;t&&n.setAttribute("media",t);if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}.bind(null,r),o=function(){u(r)});return t(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t(n=e)}else o()}}n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=o()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var r=p(n,e);return c(r,e),function(n){for(var o=[],a=0;a<r.length;a++){var i=r[a];(d=t[i.id]).refs--,o.push(d)}n&&c(p(n,e),e);for(a=0;a<o.length;a++){var d;if(0===(d=o[a]).refs){for(var s=0;s<d.parts.length;s++)d.parts[s]();delete t[d.id]}}}};var h=function(){var n=[];return function(e,r){return n[e]=r,n.filter(Boolean).join("\n")}}();function x(n,e,r,t){var o=r?"":t.css;if(n.styleSheet)n.styleSheet.cssText=h(e,o);else{var a=document.createTextNode(o),i=n.childNodes;i[e]&&n.removeChild(i[e]),i.length?n.insertBefore(a,i[e]):n.appendChild(a)}}},function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var r=e.protocol+"//"+e.host,t=r+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var o,a=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?n:(o=0===a.indexOf("//")?a:0===a.indexOf("/")?r+a:t+a.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}]);
//# sourceMappingURL=bundle.js.map