!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return d.Date.now()};function y(e,t,n){var r,i,a,f,u,l,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(o);function y(t){var n=r,o=i;return r=i=void 0,c=t,f=e.apply(o,n)}function h(e){return c=e,u=setTimeout(w,t),s?y(e):f}function j(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function w(){var e=p();if(j(e))return S(e);u=setTimeout(w,function(e){var n=t-(e-l);return d?g(n,a-(e-c)):n}(e))}function S(e){return u=void 0,m&&r?y(e):(r=i=void 0,f)}function T(){var e=p(),n=j(e);if(r=arguments,i=this,l=e,n){if(void 0===u)return h(l);if(d)return u=setTimeout(w,t),y(l)}return void 0===u&&(u=setTimeout(w,t)),f}return t=O(t)||0,b(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(O(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),T.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=l=i=u=void 0},T.flush=function(){return void 0===u?f:S(p())},T}function b(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function O(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=f.test(t);return o||u.test(t)?l(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return b(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:r,maxWait:t,trailing:i})};var h={form:document.querySelector(".feedback-form")},j="feedback-form-state",w=localStorage.getItem(j),S=JSON.parse(w)||{};h.form.addEventListener("submit",(function(e){e.preventDefault(),e.target.reset(),console.log(S),localStorage.removeItem(j)})),h.form.addEventListener("input",e(t)((function(e){S[e.target.name]=e.target.value,localStorage.setItem(j,JSON.stringify(S))}),500)),function(){var e=JSON.parse(localStorage.getItem(j));e.hasOwnProperty("email")||(h.form.email=e.email);e.hasOwnProperty("message")&&(h.form.message=e.message)}()}();
//# sourceMappingURL=03-feedback.c79e80dc.js.map
