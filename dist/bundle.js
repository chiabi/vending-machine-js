!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){"use strict";(function(e,r){var i,o=n(1);i="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:r;var a=Object(o.a)(i);t.a=a}).call(this,n(2),n(3)(e))},function(e,t,n){"use strict";function r(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}n.d(t,"a",function(){return r})},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t,n){"use strict";n.r(t);var r=n(0),i={INIT:"@@redux/INIT"+Math.random().toString(36).substring(7).split("").join("."),REPLACE:"@@redux/REPLACE"+Math.random().toString(36).substring(7).split("").join(".")},o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.assign;function a(e){if("object"!==(void 0===e?"undefined":o(e))||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function c(e,t){var n=t&&t.type;return"Given "+(n&&'action "'+String(n)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function u(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})}var s={drinks:[{id:1,name:"coca-cola",inventory:8,price:800},{id:2,name:"cider",inventory:1,price:800},{id:3,name:"fanta",inventory:3,price:750},{id:4,name:"water",inventory:10,price:1e3},{id:5,name:"vitamin",inventory:2,price:1200},{id:6,name:"dr-pepper",inventory:12,price:900},{id:7,name:"grape-juice",inventory:3,price:650},{id:8,name:"orange-juice",inventory:12,price:650}],outDrinks:[],myInventory:{},myWallet:12500,availableCoin:0,notAvailableCoint:0};var d=function(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var o=t[r];"function"==typeof e[o]&&(n[o]=e[o])}var a=Object.keys(n),u=void 0;try{!function(e){Object.keys(e).forEach(function(t){var n=e[t];if(void 0===n(void 0,{type:i.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===n(void 0,{type:"@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".")}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+i.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')})}(n)}catch(e){u=e}return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];if(u)throw u;for(var r=!1,i={},o=0;o<a.length;o++){var s=a[o],d=n[s],l=e[s],f=d(l,t);if(void 0===f){var p=c(s,t);throw new Error(p)}i[s]=f,r=r||f!==l}return r?i:e}}({myWallet:(e=0,t)=>{switch(t.type){case"INPUT_COIN":return e-t.coin;case"TAKE_COIN":return e+t.coin;default:return e}},availableCoin:(e=0,t)=>{switch(t.type){case"INPUT_COIN":return e+t.coin;case"RETURN_COIN":return e-t.coin;case"BUY_DRINK":return e-t.price;default:return e}},notAvailableCoin:(e=0,t)=>{switch(t.type){case"RETURN_COIN":return e+t.coin;case"TAKE_COIN":return e-t.coin;default:return e}},drinks:(e=[],t)=>{switch(t.type){case"BUY_DRINK":return e.map(e=>e.id!==t.id?e:Object.assign({},e,{inventory:e.inventory-1}));default:return e}},outDrinks:(e=[],t)=>{switch(t.type){case"BUY_DRINK":return[...e,t.name];case"TAKE_DRINKS":return[];default:return e}},myInventory:(e={},t)=>{switch(t.type){case"TAKE_DRINKS":return t.drinks.reduce((e,t)=>e[t]?Object.assign({},e,{[t]:e[t]+1}):Object.assign({},e,{[t]:1}),e);default:return e}}});n(5);const l=function e(t,n,c){var u;if("function"==typeof n&&void 0===c&&(c=n,n=void 0),void 0!==c){if("function"!=typeof c)throw new Error("Expected the enhancer to be a function.");return c(e)(t,n)}if("function"!=typeof t)throw new Error("Expected the reducer to be a function.");var s=t,d=n,l=[],f=l,p=!1;function y(){f===l&&(f=l.slice())}function v(){if(p)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return d}function b(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(p)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");var t=!0;return y(),f.push(e),function(){if(t){if(p)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");t=!1,y();var n=f.indexOf(e);f.splice(n,1)}}}function h(e){if(!a(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(p)throw new Error("Reducers may not dispatch actions.");try{p=!0,d=s(d,e)}finally{p=!1}for(var t=l=f,n=0;n<t.length;n++)(0,t[n])();return e}return h({type:i.INIT}),(u={dispatch:h,subscribe:b,getState:v,replaceReducer:function(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");s=e,h({type:i.REPLACE})}})[r.a]=function(){var e,t=b;return(e={subscribe:function(e){if("object"!==(void 0===e?"undefined":o(e))||null===e)throw new TypeError("Expected the observer to be an object.");function n(){e.next&&e.next(v())}return n(),{unsubscribe:t(n)}}})[r.a]=function(){return this},e},u}(d,s,(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u)()),f=document.querySelector(".machine"),p=f.querySelector(".machine__display"),y=document.querySelector(".wallet"),v=y.querySelector(".wallet__total"),b=y.querySelector(".wallet__coin"),h=y.querySelector(".wallet__plus"),m=h.querySelector(".plus"),w=f.querySelector(".machine__ui"),_=w.querySelector(".counter"),g=w.querySelector(".inlet"),E=w.querySelector(".switch_lever"),S=w.querySelector(".return_port"),O=f.querySelector(".machine__door"),x=O.querySelector(".outlet"),I=document.querySelector(".inventory__drinks"),C=e=>e.split("-").map(e=>e.replace(/[a-z]?/,e=>e.toUpperCase())).join(" "),j=(e,t)=>`\n  <div class="drink__item"><span>${C(e)}</span></div>\n  <div class="drink__inventory">x ${t}</div>\n`,N=(e,t,n)=>{let r;e.textContent="",t.forEach((t,i)=>{i%4==0&&(r=document.createElement("div")).classList.add("display-shelf");const o=document.createElement("div");o.innerHTML=((e,t)=>`\n  <div class="drink__item"><span>${C(e.name)}</span></div>\n  <button \n    class="btn-buy" \n    ${e.inventory>0?"":"disabled"}\n  >${e.price}원</button>\n`)(t),o.classList.add("drink",t.name),n>=t.price&&t.inventory&&(o.classList.add("is-can-buy"),o.querySelector(".btn-buy").addEventListener("click",()=>{(e=>{const{id:t,name:n,price:r}=e,i=document.createElement("div");i.classList.add("drink__item",e.name,"drink__item--down"),i.style.left=`${Math.floor(250*Math.random())}px`,x.appendChild(i),l.dispatch(((e,t,n)=>({type:"BUY_DRINK",id:e,name:t,price:n}))(t,n,r)),window.setTimeout(()=>{i.classList.remove("drink__item--down")},1500)})(t)})),r.appendChild(o),i%4==3&&e.appendChild(r)})},T=(e,t)=>{let n=(""+t).split(""),r=n.length;e.textContent="";let i=n.reduce((e,t,n)=>n%3==r%3&&0!==n?e+","+t:e+t,"");e.textContent=`${i}원`},k=()=>{const e=l.getState().availableCoin;E.classList.add("switch_lever--turned"),e&&S.classList.add("return_port--turned"),l.dispatch((e=>({type:"RETURN_COIN",coin:e}))(e)),window.setTimeout(()=>{E.classList.remove("switch_lever--turned"),e&&S.classList.remove("return_port--turned")},1e3)},L=()=>{const e=l.getState().notAvailableCoin;m.textContent=`+ ${e}`,h.classList.add("wallet__plus--show"),l.dispatch((e=>({type:"TAKE_COIN",coin:e}))(e)),window.setTimeout(()=>{h.classList.remove("wallet__plus--show"),m.textContent=""},1100)},R=()=>{const e=l.getState().outDrinks;l.dispatch((e=>({type:"TAKE_DRINKS",drinks:e}))(e)),x.textContent=""},P=e=>{const{drinks:t,myWallet:n,myInventory:r,availableCoin:i}=e;N(p,t,i),((e,t)=>{e.textContent="";const n=document.createDocumentFragment();for(const[e,r]of Object.entries(t)){const t=document.createElement("div");t.innerHTML=j(e,r),t.classList.add("drink",e),n.appendChild(t)}e.appendChild(n)})(I,r),(e=>T(v,e))(n),((e,t)=>{const n=document.createDocumentFragment();e.textContent="",[50,100,500,1e3].forEach(e=>{const r=document.createElement("button");r.classList.add("coin"),r.setAttribute("data-coin",""+e),r.textContent=""+e,t-e<0?r.setAttribute("disabled","true"):(r.setAttribute("draggable","true"),(e=>{e.addEventListener("dragstart",e=>{e.dataTransfer.setData("text/plain",e.target.dataset.coin),e.target.style.opacity=.5}),e.addEventListener("dragend",e=>{e.target.style.opacity=1})})(r)),n.appendChild(r)}),e.appendChild(n)})(b,n),(e=>T(_,e))(i)};l.subscribe(()=>P(l.getState())),(()=>{const e=l.getState();P(e),(e=>{e.addEventListener("dragover",e=>{e.preventDefault()}),e.addEventListener("drop",e=>{e.preventDefault();const t=Number(e.dataTransfer.getData("text/plain"));"number"!=typeof t||isNaN(t)||l.dispatch((e=>({type:"INPUT_COIN",coin:e}))(t))})})(g),E.addEventListener("click",k),S.addEventListener("click",L),O.addEventListener("click",R)})()},function(e,t){}]);
//# sourceMappingURL=bundle.js.map