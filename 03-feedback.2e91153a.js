!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,a=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),m=Object.prototype.toString,v=Math.max,p=Math.min,g=function(){return s.Date.now()};function b(e,t,n){var r,i,u,f,a,l,c=0,d=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError(o);function b(t){var n=r,o=i;return r=i=void 0,c=t,f=e.apply(o,n)}function O(e){return c=e,a=setTimeout(h,t),d?b(e):f}function S(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=u}function h(){var e=g();if(S(e))return w(e);a=setTimeout(h,function(e){var n=t-(e-l);return s?p(n,u-(e-c)):n}(e))}function w(e){return a=void 0,m&&r?b(e):(r=i=void 0,f)}function x(){var e=g(),n=S(e);if(r=arguments,i=this,l=e,n){if(void 0===a)return O(l);if(s)return a=setTimeout(h,t),b(l)}return void 0===a&&(a=setTimeout(h,t)),f}return t=j(t)||0,y(n)&&(d=!!n.leading,u=(s="maxWait"in n)?v(j(n.maxWait)||0,t):u,m="trailing"in n?!!n.trailing:m),x.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=l=i=a=void 0},x.flush=function(){return void 0===a?f:w(g())},x}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=f.test(t);return o||a.test(t)?l(t.slice(2),o?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:r,maxWait:t,trailing:i})};var O,S={form:document.querySelector(".feedback-form"),textForm:document.querySelectorAll(".feedback-form__item")},h="feedback-form-state",w=localStorage.getItem(h),x=JSON.parse(w)||{};S.form.addEventListener("submit",(function(e){e.preventDefault(),e.target.reset(),console.log(x),localStorage.removeItem(h)})),S.form.addEventListener("input",e(t)((function(e){x[e.target.name]=e.target.value,localStorage.setItem(h,JSON.stringify(x))}),500)),(O=JSON.parse(w))&&(S.textForm.value=O.email||"",S.textForm.value=O.message||"")}();
//# sourceMappingURL=03-feedback.2e91153a.js.map
