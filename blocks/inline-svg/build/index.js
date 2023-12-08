(()=>{var e,t={423:(e,t,r)=>{"use strict";const n=window.wp.blocks,o=window.React,i=window.wp.i18n,a=window.wp.blockEditor,l=window.wp.element,s=window.wp.components;function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}function u(e,t){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},u(e,t)}function p(e,t,r){if(r||2===arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError;var f=r(811),d=new Map,h=function(e){return e.cloneNode(!0)},v=function(){return"file:"===window.location.protocol},m=function(e,t,r){var n=new XMLHttpRequest;n.onreadystatechange=function(){try{if(!/\.svg/i.test(e)&&2===n.readyState){var t=n.getResponseHeader("Content-Type");if(!t)throw new Error("Content type not found");var o=(0,f.Q)(t).type;if("image/svg+xml"!==o&&"text/plain"!==o)throw new Error("Invalid content type: ".concat(o))}if(4===n.readyState){if(404===n.status||null===n.responseXML)throw new Error(v()?"Note: SVG injection ajax calls do not work locally without adjusting security settings in your browser. Or consider using a local webserver.":"Unable to load SVG file: "+e);if(!(200===n.status||v()&&0===n.status))throw new Error("There was a problem injecting the SVG: "+n.status+" "+n.statusText);r(null,n)}}catch(e){if(n.abort(),!(e instanceof Error))throw e;r(e,n)}},n.open("GET",e),n.withCredentials=t,n.overrideMimeType&&n.overrideMimeType("text/xml"),n.send()},g={},b=function(e,t){g[e]=g[e]||[],g[e].push(t)},w=function(e,t,r){if(d.has(e)){var n=d.get(e);if(void 0===n)return void b(e,r);if(n instanceof SVGSVGElement)return void r(null,h(n))}d.set(e,void 0),b(e,r),m(e,t,(function(t,r){var n;t?d.set(e,t):(null===(n=r.responseXML)||void 0===n?void 0:n.documentElement)instanceof SVGSVGElement&&d.set(e,r.responseXML.documentElement),function(e){for(var t=function(t,r){setTimeout((function(){if(Array.isArray(g[e])){var r=d.get(e),n=g[e][t];r instanceof SVGSVGElement&&n(null,h(r)),r instanceof Error&&n(r),t===g[e].length-1&&delete g[e]}}),0)},r=0,n=g[e].length;r<n;r++)t(r)}(e)}))},y=function(e,t,r){m(e,t,(function(e,t){var n;e?r(e):(null===(n=t.responseXML)||void 0===n?void 0:n.documentElement)instanceof SVGSVGElement&&r(null,t.responseXML.documentElement)}))},E=0,S=[],A={},x="http://www.w3.org/1999/xlink",C=function(e,t,r,n,o,i,a){var l=e.getAttribute("data-src")||e.getAttribute("src");if(l){if(-1!==S.indexOf(e))return S.splice(S.indexOf(e),1),void(e=null);S.push(e),e.setAttribute("src",""),(n?w:y)(l,o,(function(n,o){if(!o)return S.splice(S.indexOf(e),1),e=null,void a(n);var s=e.getAttribute("id");s&&o.setAttribute("id",s);var c=e.getAttribute("title");c&&o.setAttribute("title",c);var u=e.getAttribute("width");u&&o.setAttribute("width",u);var f=e.getAttribute("height");f&&o.setAttribute("height",f);var d=Array.from(new Set(p(p(p([],(o.getAttribute("class")||"").split(" "),!0),["injected-svg"],!1),(e.getAttribute("class")||"").split(" "),!0))).join(" ").trim();o.setAttribute("class",d);var h=e.getAttribute("style");h&&o.setAttribute("style",h),o.setAttribute("data-src",l);var v=[].filter.call(e.attributes,(function(e){return/^data-\w[\w-]*$/.test(e.name)}));if(Array.prototype.forEach.call(v,(function(e){e.name&&e.value&&o.setAttribute(e.name,e.value)})),r){var m,g,b,w,y,C={clipPath:["clip-path"],"color-profile":["color-profile"],cursor:["cursor"],filter:["filter"],linearGradient:["fill","stroke"],marker:["marker","marker-start","marker-mid","marker-end"],mask:["mask"],path:[],pattern:["fill","stroke"],radialGradient:["fill","stroke"]};Object.keys(C).forEach((function(e){m=e,b=C[e];for(var t=function(e,t){var r;w=g[e].id,y=w+"-"+ ++E,Array.prototype.forEach.call(b,(function(e){for(var t=0,n=(r=o.querySelectorAll("["+e+'*="'+w+'"]')).length;t<n;t++){var i=r[t].getAttribute(e);i&&!i.match(new RegExp('url\\("?#'+w+'"?\\)'))||r[t].setAttribute(e,"url(#"+y+")")}}));for(var n=o.querySelectorAll("[*|href]"),i=[],a=0,l=n.length;a<l;a++){var s=n[a].getAttributeNS(x,"href");s&&s.toString()==="#"+g[e].id&&i.push(n[a])}for(var c=0,u=i.length;c<u;c++)i[c].setAttributeNS(x,"href","#"+y);g[e].id=y},r=0,n=(g=o.querySelectorAll(m+"[id]")).length;r<n;r++)t(r)}))}o.removeAttribute("xmlns:a");for(var k,O,T=o.querySelectorAll("script"),j=[],R=0,I=T.length;R<I;R++)(O=T[R].getAttribute("type"))&&"application/ecmascript"!==O&&"application/javascript"!==O&&"text/javascript"!==O||((k=T[R].innerText||T[R].textContent)&&j.push(k),o.removeChild(T[R]));if(j.length>0&&("always"===t||"once"===t&&!A[l])){for(var _=0,q=j.length;_<q;_++)new Function(j[_])(window);A[l]=!0}var G=o.querySelectorAll("style");if(Array.prototype.forEach.call(G,(function(e){e.textContent+=""})),o.setAttribute("xmlns","http://www.w3.org/2000/svg"),o.setAttribute("xmlns:xlink",x),i(o),!e.parentNode)return S.splice(S.indexOf(e),1),e=null,void a(new Error("Parent node is null"));e.parentNode.replaceChild(o,e),S.splice(S.indexOf(e),1),e=null,a(null,o)}))}else a(new Error("Invalid data-src or src attribute"))},k=r(697),O=["afterInjection","beforeInjection","desc","evalScripts","fallback","httpRequestWithCredentials","loading","renumerateIRIElements","src","title","useRequestCache","wrapper"],T="http://www.w3.org/2000/svg",j="http://www.w3.org/1999/xlink",R=function(e){var t,r;function n(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).initialState={hasError:!1,isLoading:!0},t.state=t.initialState,t._isMounted=!1,t.reactWrapper=void 0,t.nonReactWrapper=void 0,t.refCallback=function(e){t.reactWrapper=e},t}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,u(t,r);var i=n.prototype;return i.renderSVG=function(){var e,t=this;if(this.reactWrapper instanceof(e=this.reactWrapper,((null==e?void 0:e.ownerDocument)||document).defaultView||window).Node){var r,n,o=this.props,i=o.desc,a=o.evalScripts,l=o.httpRequestWithCredentials,s=o.renumerateIRIElements,c=o.src,u=o.title,p=o.useRequestCache,f=this.props.onError,d=this.props.beforeInjection,h=this.props.afterInjection,v=this.props.wrapper;"svg"===v?((r=document.createElementNS(T,v)).setAttribute("xmlns",T),r.setAttribute("xmlns:xlink",j),n=document.createElementNS(T,v)):(r=document.createElement(v),n=document.createElement(v)),r.appendChild(n),n.dataset.src=c,this.nonReactWrapper=this.reactWrapper.appendChild(r);var m=function(e){t.removeSVG(),t._isMounted?t.setState((function(){return{hasError:!0,isLoading:!1}}),(function(){f(e)})):f(e)};!function(e,t){var r=void 0===t?{}:t,n=r.afterAll,o=void 0===n?function(){}:n,i=r.afterEach,a=void 0===i?function(){}:i,l=r.beforeEach,s=void 0===l?function(){}:l,c=r.cacheRequests,u=void 0===c||c,p=r.evalScripts,f=void 0===p?"never":p,d=r.httpRequestWithCredentials,h=void 0!==d&&d,v=r.renumerateIRIElements,m=void 0===v||v;if(e&&"length"in e)for(var g=0,b=0,w=e.length;b<w;b++)C(e[b],f,m,u,h,s,(function(t,r){a(t,r),e&&"length"in e&&e.length===++g&&o(g)}));else e?C(e,f,m,u,h,s,(function(t,r){a(t,r),o(1),e=null})):o(0)}(n,{afterEach:function(e,r){e?m(e):t._isMounted&&t.setState((function(){return{isLoading:!1}}),(function(){try{h(r)}catch(e){m(e)}}))},beforeEach:function(e){if(e.setAttribute("role","img"),i){var t=e.querySelector(":scope > desc");t&&e.removeChild(t);var r=document.createElement("desc");r.innerHTML=i,e.prepend(r)}if(u){var n=e.querySelector(":scope > title");n&&e.removeChild(n);var o=document.createElement("title");o.innerHTML=u,e.prepend(o)}try{d(e)}catch(e){m(e)}},cacheRequests:p,evalScripts:a,httpRequestWithCredentials:l,renumerateIRIElements:s})}},i.removeSVG=function(){var e;null!=(e=this.nonReactWrapper)&&e.parentNode&&(this.nonReactWrapper.parentNode.removeChild(this.nonReactWrapper),this.nonReactWrapper=null)},i.componentDidMount=function(){this._isMounted=!0,this.renderSVG()},i.componentDidUpdate=function(e){var t=this;(function(e,t){for(var r in e)if(!(r in t))return!0;for(var n in t)if(e[n]!==t[n])return!0;return!1})(c({},e),this.props)&&this.setState((function(){return t.initialState}),(function(){t.removeSVG(),t.renderSVG()}))},i.componentWillUnmount=function(){this._isMounted=!1,this.removeSVG()},i.render=function(){var e=this.props;e.afterInjection,e.beforeInjection,e.desc,e.evalScripts;var t=e.fallback;e.httpRequestWithCredentials;var r=e.loading;e.renumerateIRIElements,e.src,e.title,e.useRequestCache;var n=e.wrapper,i=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,O),a=n;return o.createElement(a,c({},i,{ref:this.refCallback},"svg"===n?{xmlns:T,xmlnsXlink:j}:{}),this.state.isLoading&&r&&o.createElement(r,null),this.state.hasError&&t&&o.createElement(t,null))},n}(o.Component);R.defaultProps={afterInjection:function(){},beforeInjection:function(){},desc:"",evalScripts:"never",fallback:null,httpRequestWithCredentials:!1,loading:null,onError:function(){},renumerateIRIElements:!0,title:"",useRequestCache:!0,wrapper:"div"},R.propTypes={afterInjection:k.func,beforeInjection:k.func,desc:k.string,evalScripts:k.oneOf(["always","once","never"]),fallback:k.oneOfType([k.func,k.object,k.string]),httpRequestWithCredentials:k.bool,loading:k.oneOfType([k.func,k.object,k.string]),onError:k.func,renumerateIRIElements:k.bool,src:k.string.isRequired,title:k.string,useRequestCache:k.bool,wrapper:k.oneOf(["div","span","svg"])};const I=JSON.parse('{"u2":"lito/inline-svg"}');(0,n.registerBlockType)(I.u2,{edit:function({attributes:e,setAttributes:t}){console.log("attributes",e);const r=["image/svg+xml"],{textAlign:n,width:c,height:u,id:p,url:f,unit:d,linkToHome:h,openNewTab:v}=e,m=(0,a.useBlockProps)({style:{textAlign:n}}),[g,b]=(0,l.useState)("px"!==d?100:1e3),[w,y]=(0,l.useState)("px"!==d?.25:1),E=e=>{console.log("media",e),e.media_details&&(e.sizes=e.media_details.sizes),t({id:e.id,url:e.url})};return(0,o.createElement)("div",{...m},!f&&(0,o.createElement)(a.MediaPlaceholder,{onSelect:E,allowedTypes:r,accept:r,value:f,labels:{title:"SVG Site Logo",instructions:(0,i.__)("Upload an SVG or pick one from your media library.","lito-blocks")}}),f&&(0,o.createElement)(R,{src:f,beforeInjection:e=>{e.setAttribute("style",(()=>{const e=[];return c>0?e.push(`width:${c}${d};`):e.push("width: auto;"),u>0?e.push(`height:${u}${d};`):e.push("height: auto;"),e.join("")})())},wrapper:"span"}),(0,o.createElement)(a.BlockControls,null,(0,o.createElement)(a.AlignmentToolbar,{value:n,onChange:e=>t({textAlign:e})})),(0,o.createElement)(a.BlockControls,null,(0,o.createElement)(a.MediaReplaceFlow,{mediaId:p,mediaURL:p,allowedTypes:r,accept:r,onSelect:E,onError:e=>{console.log((0,i.__)(`Something went wrong, please try again. Message: ${e}`,"lito-blocks"))}})),(0,o.createElement)(a.InspectorControls,null,(0,o.createElement)(s.PanelBody,{title:"設定"},(0,o.createElement)(s.RangeControl,{label:"幅",value:c,onChange:e=>t({width:e}),min:0,max:g,step:w}),(0,o.createElement)(s.RangeControl,{label:"高さ",value:u,onChange:e=>t({height:e}),min:0,max:g,step:w}),(0,o.createElement)(s.SelectControl,{label:"単位",value:d,options:[{label:"px",value:"px"},{label:"em",value:"em"},{label:"rem",value:"rem"}],onChange:e=>{"px"!==e?(b(100),y(.25)):(b(1e3),y(1)),t({unit:e})}}),(0,o.createElement)(s.ToggleControl,{label:"ホームヘのリンクをつける",checked:h,onChange:e=>t({linkToHome:e})}),(0,o.createElement)(s.ToggleControl,{label:"新しいタブで開く",checked:v,onChange:e=>t({openNewTab:e})}),(0,o.createElement)(s.BaseControl,{label:""},(0,o.createElement)(s.Button,{style:{marginTop:"0.5rem"},className:"is-tertiary",onClick:()=>{t({id:0,url:""})}},"画像をクリア")))))}})},811:(e,t)=>{"use strict";var r=/; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g,n=/\\([\u000b\u0020-\u00ff])/g,o=/^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;function i(e){this.parameters=Object.create(null),this.type=e}t.Q=function(e){if(!e)throw new TypeError("argument string is required");var t="object"==typeof e?function(e){var t;if("function"==typeof e.getHeader?t=e.getHeader("content-type"):"object"==typeof e.headers&&(t=e.headers&&e.headers["content-type"]),"string"!=typeof t)throw new TypeError("content-type header is missing from object");return t}(e):e;if("string"!=typeof t)throw new TypeError("argument string is required to be a string");var a=t.indexOf(";"),l=-1!==a?t.slice(0,a).trim():t.trim();if(!o.test(l))throw new TypeError("invalid media type");var s=new i(l.toLowerCase());if(-1!==a){var c,u,p;for(r.lastIndex=a;u=r.exec(t);){if(u.index!==a)throw new TypeError("invalid parameter format");a+=u[0].length,c=u[1].toLowerCase(),34===(p=u[2]).charCodeAt(0)&&-1!==(p=p.slice(1,-1)).indexOf("\\")&&(p=p.replace(n,"$1")),s.parameters[c]=p}if(a!==t.length)throw new TypeError("invalid parameter format")}return s}},703:(e,t,r)=>{"use strict";var n=r(414);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,i,a){if(a!==n){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},697:(e,t,r)=>{e.exports=r(703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return t[e](i,i.exports,n),i.exports}n.m=t,e=[],n.O=(t,r,o,i)=>{if(!r){var a=1/0;for(u=0;u<e.length;u++){for(var[r,o,i]=e[u],l=!0,s=0;s<r.length;s++)(!1&i||a>=i)&&Object.keys(n.O).every((e=>n.O[e](r[s])))?r.splice(s--,1):(l=!1,i<a&&(a=i));if(l){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[r,o,i]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0,431:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,i,[a,l,s]=r,c=0;if(a.some((t=>0!==e[t]))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(s)var u=s(n)}for(t&&t(r);c<a.length;c++)i=a[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},r=globalThis.webpackChunksvg_site_logo=globalThis.webpackChunksvg_site_logo||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=n.O(void 0,[431],(()=>n(423)));o=n.O(o)})();