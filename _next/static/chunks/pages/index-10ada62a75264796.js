(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9361:function(e,t){"use strict";t.Z=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}},5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3678)}])},8045:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(9361).Z,r=n(4941).Z,o=n(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,a=e.unoptimized,f=void 0!==a&&a,p=e.priority,h=void 0!==p&&p,_=e.loading,O=e.lazyRoot,x=void 0===O?null:O,E=e.lazyBoundary,I=e.className,P=e.quality,R=e.width,L=e.height,M=e.style,C=e.objectFit,N=e.objectPosition,q=e.onLoadingComplete,H=e.placeholder,W=void 0===H?"empty":H,D=e.blurDataURL,B=m(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),T=c.useContext(d.ImageConfigContext),U=c.useMemo((function(){var e=y||T||u.imageConfigDefault,t=o(e.deviceSizes).concat(o(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return g({},e,{allSizes:t,deviceSizes:n})}),[T]),F=B,V=n?"responsive":"intrinsic";"layout"in F&&(F.layout&&(V=F.layout),delete F.layout);var Z=A;if("loader"in F){if(F.loader){var G=F.loader;Z=function(e){e.config;var t=m(e,["config"]);return G(t)}}delete F.loader}var Q="";if(function(e){return"object"===typeof e&&(z(e)||function(e){return void 0!==e.src}(e))}(t)){var J=z(t)?t.default:t;if(!J.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(D=D||J.blurDataURL,Q=J.src,(!V||"fill"!==V)&&(L=L||J.height,R=R||J.width,!J.height||!J.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)))}var X=!h&&("lazy"===_||"undefined"===typeof _);((t="string"===typeof t?t:Q).startsWith("data:")||t.startsWith("blob:"))&&(f=!0,X=!1);b.has(t)&&(X=!1);v&&(f=!0);var K,Y=r(c.useState(!1),2),$=Y[0],ee=Y[1],te=r(s.useIntersection({rootRef:x,rootMargin:E||"200px",disabled:!X}),3),ne=te[0],ie=te[1],re=te[2],oe=!X||ie,ae={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ce={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},le=!1,ue={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:C,objectPosition:N},se=j(R),de=j(L),fe=j(P);0;var ge=Object.assign({},M,ue),pe="blur"!==W||$?{}:{backgroundSize:C||"cover",backgroundPosition:N||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(D,'")')};if("fill"===V)ae.display="block",ae.position="absolute",ae.top=0,ae.left=0,ae.bottom=0,ae.right=0;else if("undefined"!==typeof se&&"undefined"!==typeof de){var me=de/se,he=isNaN(me)?"100%":"".concat(100*me,"%");"responsive"===V?(ae.display="block",ae.position="relative",le=!0,ce.paddingTop=he):"intrinsic"===V?(ae.display="inline-block",ae.position="relative",ae.maxWidth="100%",le=!0,ce.maxWidth="100%",K="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(se,"%27%20height=%27").concat(de,"%27/%3e")):"fixed"===V&&(ae.display="inline-block",ae.position="relative",ae.width=se,ae.height=de)}else 0;var ve={src:w,srcSet:void 0,sizes:void 0};oe&&(ve=S({config:U,src:t,unoptimized:f,layout:V,width:se,quality:fe,sizes:n,loader:Z}));var ye=t;0;var be,we="imagesrcset",_e="imagesizes";we="imageSrcSet",_e="imageSizes";var ze=(i(be={},we,ve.srcSet),i(be,_e,ve.sizes),be),Se=c.default.useLayoutEffect,je=c.useRef(q),Ae=c.useRef(t);c.useEffect((function(){je.current=q}),[q]),Se((function(){Ae.current!==t&&(re(),Ae.current=t)}),[re,t]);var Oe=g({isLazy:X,imgAttributes:ve,heightInt:de,widthInt:se,qualityInt:fe,layout:V,className:I,imgStyle:ge,blurStyle:pe,loading:_,config:U,unoptimized:f,placeholder:W,loader:Z,srcString:ye,onLoadingCompleteRef:je,setBlurComplete:ee,setIntersection:ne,isVisible:oe,noscriptSizes:n},F);return c.default.createElement(c.default.Fragment,null,c.default.createElement("span",{style:ae},le?c.default.createElement("span",{style:ce},K?c.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:K}):null):null,c.default.createElement(k,Object.assign({},Oe))),h?c.default.createElement(l.default,null,c.default.createElement("link",Object.assign({key:"__nimg-"+ve.src+ve.srcSet+ve.sizes,rel:"preload",as:"image",href:ve.srcSet?void 0:ve.src},ze))):null)};var a,c=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=p();if(t&&t.has(e))return t.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=i?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n(7294)),l=(a=n(5443))&&a.__esModule?a:{default:a},u=n(9309),s=n(7190),d=n(9977),f=(n(3794),n(2392));function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},g.apply(this,arguments)}function p(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return p=function(){return e},e}function m(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}var h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/",loader:"cloudinary"}||{},v=h.experimentalUnoptimized,y={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/",loader:"cloudinary"},b=new Set,w=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var _=new Map([["default",function(e){var t=e.config,n=e.src,i=e.width,r=e.quality;0;if(n.endsWith(".svg")&&!t.dangerouslyAllowSVG)return n;return"".concat(f.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(r||75)}],["imgix",function(e){var t=e.config,n=e.src,i=e.width,r=e.quality,o=new URL("".concat(t.path).concat(x(n))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||i.toString()),r&&a.set("q",r.toString());return o.href}],["cloudinary",function(e){var t=e.config,n=e.src,i=e.width,r=e.quality,o=["f_auto","c_limit","w_"+i,"q_"+(r||"auto")].join(",")+"/";return"".concat(t.path).concat(o).concat(x(n))}],["akamai",function(e){var t=e.config,n=e.src,i=e.width;return"".concat(t.path).concat(x(n),"?imwidth=").concat(i)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function z(e){return void 0!==e.default}function S(e){var t=e.config,n=e.src,i=e.unoptimized,r=e.layout,a=e.width,c=e.quality,l=e.sizes,u=e.loader;if(i)return{src:n,srcSet:void 0,sizes:void 0};var s=function(e,t,n,i){var r=e.deviceSizes,a=e.allSizes;if(i&&("fill"===n||"responsive"===n)){for(var c,l=/(^|\s)(1?\d?\d)vw/g,u=[];c=l.exec(i);c)u.push(parseInt(c[2]));if(u.length){var s,d=.01*(s=Math).min.apply(s,o(u));return{widths:a.filter((function(e){return e>=r[0]*d})),kind:"w"}}return{widths:a,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:r,kind:"w"}:{widths:o(new Set([t,2*t].map((function(e){return a.find((function(t){return t>=e}))||a[a.length-1]})))),kind:"x"}}(t,a,r,l),d=s.widths,f=s.kind,g=d.length-1;return{sizes:l||"w"!==f?l:"100vw",srcSet:d.map((function(e,i){return"".concat(u({config:t,src:n,quality:c,width:e})," ").concat("w"===f?e:i+1).concat(f)})).join(", "),src:u({config:t,src:n,quality:c,width:d[g]})}}function j(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function A(e){var t,n=(null==(t=e.config)?void 0:t.loader)||"default",i=_.get(n);if(i)return i(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(u.VALID_LOADERS.join(", "),". Received: ").concat(n))}function O(e,t,n,i,r,o){e&&e.src!==w&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(b.add(t),"blur"===i&&o(!0),null==r?void 0:r.current)){var n=e.naturalWidth,a=e.naturalHeight;r.current({naturalWidth:n,naturalHeight:a})}})))}var k=function(e){var t=e.imgAttributes,n=(e.heightInt,e.widthInt),i=e.qualityInt,r=e.layout,o=e.className,a=e.imgStyle,l=e.blurStyle,u=e.isLazy,s=e.placeholder,d=e.loading,f=e.srcString,p=e.config,h=e.unoptimized,v=e.loader,y=e.onLoadingCompleteRef,b=e.setBlurComplete,w=e.setIntersection,_=e.onLoad,z=e.onError,j=(e.isVisible,e.noscriptSizes),A=m(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return d=u?"lazy":d,c.default.createElement(c.default.Fragment,null,c.default.createElement("img",Object.assign({},A,t,{decoding:"async","data-nimg":r,className:o,style:g({},a,l),ref:c.useCallback((function(e){w(e),(null==e?void 0:e.complete)&&O(e,f,0,s,y,b)}),[w,f,r,s,y,b]),onLoad:function(e){O(e.currentTarget,f,0,s,y,b),_&&_(e)},onError:function(e){"blur"===s&&b(!0),z&&z(e)}})),(u||"blur"===s)&&c.default.createElement("noscript",null,c.default.createElement("img",Object.assign({},A,S({config:p,src:f,unoptimized:h,layout:r,width:n,quality:i,sizes:j,loader:v}),{decoding:"async","data-nimg":r,style:a,className:o,loading:d}))))};function x(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,u=e.disabled||!a,s=r.useRef(),d=i(r.useState(!1),2),f=d[0],g=d[1],p=i(r.useState(null),2),m=p[0],h=p[1];r.useEffect((function(){if(a){if(s.current&&(s.current(),s.current=void 0),u||f)return;return m&&m.tagName&&(s.current=function(e,t,n){var i=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},i=l.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(i&&(t=c.get(i)))return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:o,elements:r},l.push(n),c.set(n,t),t}(n),r=i.id,o=i.observer,a=i.elements;return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),c.delete(r);var t=l.findIndex((function(e){return e.root===r.root&&e.margin===r.margin}));t>-1&&l.splice(t,1)}}}(m,(function(e){return e&&g(e)}),{root:null==t?void 0:t.current,rootMargin:n})),function(){null==s.current||s.current(),s.current=void 0}}if(!f){var e=o.requestIdleCallback((function(){return g(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[m,u,n,t,f]);var v=r.useCallback((function(){g(!1)}),[]);return[h,f,v]};var r=n(7294),o=n(9311),a="function"===typeof IntersectionObserver;var c=new Map,l=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3678:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var i=n(5893),r=(n(9008),n(5675),n(214)),o=n.n(r);function a(){return(0,i.jsx)("div",{className:o().container,children:"Punjab Sindh"})}},214:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},9008:function(e,t,n){n(5443)},5675:function(e,t,n){n(8045)}},function(e){e.O(0,[774,888,179],(function(){return t=5557,e(e.s=t);var t}));var t=e.O();_N_E=t}]);