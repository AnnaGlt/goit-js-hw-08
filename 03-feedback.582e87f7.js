function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),d=Object.prototype.toString,s=Math.max,m=Math.min,v=function(){return l.Date.now()};function g(t,e,n){var o,r,i,f,a,u,c=0,l=!1,d=!1,g=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function y(e){var n=o,i=r;return o=r=void 0,c=e,f=t.apply(i,n)}function w(t){return c=t,a=setTimeout(h,e),l?y(t):f}function S(t){var n=t-u;return void 0===u||n>=e||n<0||d&&t-c>=i}function h(){var t=v();if(S(t))return j(t);a=setTimeout(h,function(t){var n=e-(t-u);return d?m(n,i-(t-c)):n}(t))}function j(t){return a=void 0,g&&o?y(t):(o=r=void 0,f)}function x(){var t=v(),n=S(t);if(o=arguments,r=this,u=t,n){if(void 0===a)return w(u);if(d)return a=setTimeout(h,e),y(u)}return void 0===a&&(a=setTimeout(h,e)),f}return e=b(e)||0,p(n)&&(l=!!n.leading,i=(d="maxWait"in n)?s(b(n.maxWait)||0,e):i,g="trailing"in n?!!n.trailing:g),x.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=u=r=a=void 0},x.flush=function(){return void 0===a?f:j(v())},x}function p(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(p(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=p(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=i.test(t);return n||f.test(t)?a(t.slice(2),n?2:8):r.test(t)?NaN:+t}e=function(t,e,n){var o=!0,r=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),g(t,e,{leading:o,maxWait:e,trailing:r})};const y={form:document.querySelector(".feedback-form"),textForm:document.querySelectorAll(".feedback-form__item")};y.form.addEventListener("submit",(function(t){t.preventDefault();for(const t of y.textForm)if(!t.value)return void window.alert("Please enter data in all fields of the form");S=w?JSON.parse(w):{};t.target.reset(),localStorage.removeItem("feedback-form-state")})),y.form.addEventListener("input",t(e)((function(t){const e=t.target.value;localStorage.setItem("feedback-form-state",e)})),500);const w=localStorage.getItem("feedback-form-state");let S;!function(t){const e=localStorage.getItem("feedback-form-state");e&&(y.textForm.value=e)}(),y.form.addEventListener("input",(t=>{S[t.target.name]=t.target.volue,localStorage.setItem("feedback-form-state",JSON.stringify(S))}));
//# sourceMappingURL=03-feedback.582e87f7.js.map
