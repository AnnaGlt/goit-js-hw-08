!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,v=c||d||Function("return this")(),s=Object.prototype.toString,m=Math.max,y=Math.min,g=function(){return v.Date.now()};function p(e,t,n){var r,i,a,f,u,l,c=0,d=!1,v=!1,s=!0;if("function"!=typeof e)throw new TypeError(o);function p(t){var n=r,o=i;return r=i=void 0,c=t,f=e.apply(o,n)}function h(e){return c=e,u=setTimeout(j,t),d?p(e):f}function w(e){var n=e-l;return void 0===l||n>=t||n<0||v&&e-c>=a}function j(){var e=g();if(w(e))return x(e);u=setTimeout(j,function(e){var n=t-(e-l);return v?y(n,a-(e-c)):n}(e))}function x(e){return u=void 0,s&&r?p(e):(r=i=void 0,f)}function O(){var e=g(),n=w(e);if(r=arguments,i=this,l=e,n){if(void 0===u)return h(l);if(v)return u=setTimeout(j,t),p(l)}return void 0===u&&(u=setTimeout(j,t)),f}return t=S(t)||0,b(n)&&(d=!!n.leading,a=(v="maxWait"in n)?m(S(n.maxWait)||0,t):a,s="trailing"in n?!!n.trailing:s),O.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=l=i=u=void 0},O.flush=function(){return void 0===u?f:x(g())},O}function b(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=f.test(t);return o||u.test(t)?l(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return b(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:r,maxWait:t,trailing:i})};var h={form:document.querySelector(".feedback-form"),textForm:document.querySelectorAll(".feedback-form__item")};h.form.addEventListener("submit",(function(e){e.preventDefault();var t=!0,n=!1,r=void 0;try{for(var o,i=h.textForm[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){if(!o.value.value)return void window.alert("Please enter data in all fields of the form")}}catch(e){n=!0,r=e}finally{try{t||null==i.return||i.return()}finally{if(n)throw r}}j=O?JSON.parse(O):{};e.target.reset(),localStorage.removeItem(x)})),h.form.addEventListener("input",e(t)((function(e){var t=e.target.value;localStorage.setItem(x,t)})),500);var w,j,x="feedback-form-state",O=localStorage.getItem(x);(w=localStorage.getItem(x))&&(h.textForm.value=w),h.form.addEventListener("input",(function(e){j[e.target.name]=e.target.volue,localStorage.setItem(x,JSON.stringify(j))}))}();
//# sourceMappingURL=03-feedback.c583df8f.js.map
