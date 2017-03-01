var Zepto=function(){function t(t){return null==t?String(t):X[_.call(t)]||"object"}function e(e){return"function"==t(e)}function n(t){return null!=t&&t==t.window}function r(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function i(e){return"object"==t(e)}function o(t){return i(t)&&!n(t)&&Object.getPrototypeOf(t)==Object.prototype}function s(t){return"number"==typeof t.length}function a(t){return P.call(t,function(t){return null!=t})}function u(t){return t.length>0?T.fn.concat.apply([],t):t}function c(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function l(t){return t in F?F[t]:F[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function f(t,e){return"number"!=typeof e||k[c(t)]?e:e+"px"}function h(t){var e,n;return L[t]||(e=$.createElement(t),$.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),L[t]=n),L[t]}function p(t){return"children" in t?Z.call(t.children):T.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function d(t,e){var n,r=t?t.length:0;for(n=0;r>n;n++){this[n]=t[n]}this.length=r,this.selector=e||""}function m(t,e,n){for(E in e){n&&(o(e[E])||Q(e[E]))?(o(e[E])&&!o(t[E])&&(t[E]={}),Q(e[E])&&!Q(t[E])&&(t[E]=[]),m(t[E],e[E],n)):e[E]!==j&&(t[E]=e[E])}}function g(t,e){return null==e?T(t):T(t).filter(e)}function v(t,n,r,i){return e(n)?n.call(t,r,i):n}function y(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function x(t,e){var n=t.className||"",r=n&&n.baseVal!==j;return e===j?r?n.baseVal:n:void (r?n.baseVal=e:t.className=e)}function b(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?T.parseJSON(t):t):t}catch(e){return t}}function w(t,e){e(t);for(var n=0,r=t.childNodes.length;r>n;n++){w(t.childNodes[n],e)}}var j,E,T,C,N,S,O=[],A=O.concat,P=O.filter,Z=O.slice,$=window.document,L={},F={},k={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},D=/^\s*<(\w+|!)[^>]*>/,M=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,R=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,q=/^(?:body|html)$/i,W=/([A-Z])/g,H=["val","css","html","text","data","width","height","offset"],z=["after","prepend","before","append"],B=$.createElement("table"),V=$.createElement("tr"),J={tr:$.createElement("tbody"),tbody:B,thead:B,tfoot:B,td:V,th:V,"*":$.createElement("div")},I=/complete|loaded|interactive/,U=/^[\w-]*$/,X={},_=X.toString,Y={},G=$.createElement("div"),K={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},Q=Array.isArray||function(t){return t instanceof Array};return Y.matches=function(t,e){if(!e||!t||1!==t.nodeType){return !1}var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n){return n.call(t,e)}var r,i=t.parentNode,o=!i;return o&&(i=G).appendChild(t),r=~Y.qsa(i,e).indexOf(t),o&&G.removeChild(t),r},N=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},S=function(t){return P.call(t,function(e,n){return t.indexOf(e)==n})},Y.fragment=function(t,e,n){var r,i,s;return M.test(t)&&(r=T($.createElement(RegExp.$1))),r||(t.replace&&(t=t.replace(R,"<$1></$2>")),e===j&&(e=D.test(t)&&RegExp.$1),e in J||(e="*"),s=J[e],s.innerHTML=""+t,r=T.each(Z.call(s.childNodes),function(){s.removeChild(this)})),o(n)&&(i=T(r),T.each(n,function(t,e){H.indexOf(t)>-1?i[t](e):i.attr(t,e)})),r},Y.Z=function(t,e){return new d(t,e)},Y.isZ=function(t){return t instanceof Y.Z},Y.init=function(t,n){var r;if(!t){return Y.Z()}if("string"==typeof t){if(t=t.trim(),"<"==t[0]&&D.test(t)){r=Y.fragment(t,RegExp.$1,n),t=null}else{if(n!==j){return T(n).find(t)}r=Y.qsa($,t)}}else{if(e(t)){return T($).ready(t)}if(Y.isZ(t)){return t}if(Q(t)){r=a(t)}else{if(i(t)){r=[t],t=null}else{if(D.test(t)){r=Y.fragment(t.trim(),RegExp.$1,n),t=null}else{if(n!==j){return T(n).find(t)}r=Y.qsa($,t)}}}}return Y.Z(r,t)},T=function(t,e){return Y.init(t,e)},T.extend=function(t){var e,n=Z.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){m(t,n,e)}),t},Y.qsa=function(t,e){var n,r="#"==e[0],i=!r&&"."==e[0],o=r||i?e.slice(1):e,s=U.test(o);return t.getElementById&&s&&r?(n=t.getElementById(o))?[n]:[]:1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType?[]:Z.call(s&&!r&&t.getElementsByClassName?i?t.getElementsByClassName(o):t.getElementsByTagName(e):t.querySelectorAll(e))},T.contains=$.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);){if(e===t){return !0}}return !1},T.type=t,T.isFunction=e,T.isWindow=n,T.isArray=Q,T.isPlainObject=o,T.isEmptyObject=function(t){var e;for(e in t){return !1}return !0},T.inArray=function(t,e,n){return O.indexOf.call(e,t,n)},T.camelCase=N,T.trim=function(t){return null==t?"":String.prototype.trim.call(t)
},T.uuid=0,T.support={},T.expr={},T.noop=function(){},T.map=function(t,e){var n,r,i,o=[];if(s(t)){for(r=0;r<t.length;r++){n=e(t[r],r),null!=n&&o.push(n)}}else{for(i in t){n=e(t[i],i),null!=n&&o.push(n)}}return u(o)},T.each=function(t,e){var n,r;if(s(t)){for(n=0;n<t.length;n++){if(e.call(t[n],n,t[n])===!1){return t}}}else{for(r in t){if(e.call(t[r],r,t[r])===!1){return t}}}return t},T.grep=function(t,e){return P.call(t,e)},window.JSON&&(T.parseJSON=JSON.parse),T.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){X["[object "+e+"]"]=e.toLowerCase()}),T.fn={constructor:Y.Z,length:0,forEach:O.forEach,reduce:O.reduce,push:O.push,sort:O.sort,splice:O.splice,indexOf:O.indexOf,concat:function(){var t,e,n=[];for(t=0;t<arguments.length;t++){e=arguments[t],n[t]=Y.isZ(e)?e.toArray():e}return A.apply(Y.isZ(this)?this.toArray():this,n)},map:function(t){return T(T.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return T(Z.apply(this,arguments))},ready:function(t){return I.test($.readyState)&&$.body?t(T):$.addEventListener("DOMContentLoaded",function(){t(T)},!1),this},get:function(t){return t===j?Z.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return O.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return e(t)?this.not(this.not(t)):T(P.call(this,function(e){return Y.matches(e,t)}))},add:function(t,e){return T(S(this.concat(T(t,e))))},is:function(t){return this.length>0&&Y.matches(this[0],t)},not:function(t){var n=[];if(e(t)&&t.call!==j){this.each(function(e){t.call(this,e)||n.push(this)})}else{var r="string"==typeof t?this.filter(t):s(t)&&e(t.item)?Z.call(t):T(t);this.forEach(function(t){r.indexOf(t)<0&&n.push(t)})}return T(n)},has:function(t){return this.filter(function(){return i(t)?T.contains(this,t):T(this).find(t).size()})},eq:function(t){return -1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!i(t)?t:T(t)},last:function(){var t=this[this.length-1];return t&&!i(t)?t:T(t)},find:function(t){var e,n=this;return e=t?"object"==typeof t?T(t).filter(function(){var t=this;return O.some.call(n,function(e){return T.contains(e,t)})}):1==this.length?T(Y.qsa(this[0],t)):this.map(function(){return Y.qsa(this,t)}):T()},closest:function(t,e){var n=this[0],i=!1;for("object"==typeof t&&(i=T(t));n&&!(i?i.indexOf(n)>=0:Y.matches(n,t));){n=n!==e&&!r(n)&&n.parentNode}return T(n)},parents:function(t){for(var e=[],n=this;n.length>0;){n=T.map(n,function(t){return(t=t.parentNode)&&!r(t)&&e.indexOf(t)<0?(e.push(t),t):void 0})}return g(e,t)},parent:function(t){return g(S(this.pluck("parentNode")),t)},children:function(t){return g(this.map(function(){return p(this)}),t)},contents:function(){return this.map(function(){return this.contentDocument||Z.call(this.childNodes)})},siblings:function(t){return g(this.map(function(t,e){return P.call(p(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return T.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=h(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var n=e(t);if(this[0]&&!n){var r=T(t).get(0),i=r.parentNode||this.length>1}return this.each(function(e){T(this).wrapAll(n?t.call(this,e):i?r.cloneNode(!0):r)})},wrapAll:function(t){if(this[0]){T(this[0]).before(t=T(t));for(var e;(e=t.children()).length;){t=e.first()}T(t).append(this)}return this},wrapInner:function(t){var n=e(t);return this.each(function(e){var r=T(this),i=r.contents(),o=n?t.call(this,e):t;i.length?i.wrapAll(o):r.append(o)})},unwrap:function(){return this.parent().each(function(){T(this).replaceWith(T(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=T(this);(t===j?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return T(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return T(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var n=this.innerHTML;T(this).empty().append(v(this,t,e,n))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=v(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(t,e){var n;return"string"!=typeof t||1 in arguments?this.each(function(n){if(1===this.nodeType){if(i(t)){for(E in t){y(this,E,t[E])}}else{y(this,t,v(this,e,n,this.getAttribute(t)))}}}):this.length&&1===this[0].nodeType?!(n=this[0].getAttribute(t))&&t in this[0]?this[0][t]:n:j
},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){y(this,t)},this)})},prop:function(t,e){return t=K[t]||t,1 in arguments?this.each(function(n){this[t]=v(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(t,e){var n="data-"+t.replace(W,"-$1").toLowerCase(),r=1 in arguments?this.attr(n,e):this.attr(n);return null!==r?b(r):j},val:function(t){return 0 in arguments?this.each(function(e){this.value=v(this,t,e,this.value)}):this[0]&&(this[0].multiple?T(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t){return this.each(function(e){var n=T(this),r=v(this,t,e,n.offset()),i=n.offsetParent().offset(),o={top:r.top-i.top,left:r.left-i.left};"static"==n.css("position")&&(o.position="relative"),n.css(o)})}if(!this.length){return null}if(!T.contains($.documentElement,this[0])){return{top:0,left:0}}var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(e,n){if(arguments.length<2){var r,i=this[0];if(!i){return}if(r=getComputedStyle(i,""),"string"==typeof e){return i.style[N(e)]||r.getPropertyValue(e)}if(Q(e)){var o={};return T.each(e,function(t,e){o[e]=i.style[N(e)]||r.getPropertyValue(e)}),o}}var s="";if("string"==t(e)){n||0===n?s=c(e)+":"+f(e,n):this.each(function(){this.style.removeProperty(c(e))})}else{for(E in e){e[E]||0===e[E]?s+=c(E)+":"+f(E,e[E])+";":this.each(function(){this.style.removeProperty(c(E))})}}return this.each(function(){this.style.cssText+=";"+s})},index:function(t){return t?this.indexOf(T(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?O.some.call(this,function(t){return this.test(x(t))},l(t)):!1},addClass:function(t){return t?this.each(function(e){if("className" in this){C=[];var n=x(this),r=v(this,t,e,n);r.split(/\s+/g).forEach(function(t){T(this).hasClass(t)||C.push(t)},this),C.length&&x(this,n+(n?" ":"")+C.join(" "))}}):this},removeClass:function(t){return this.each(function(e){if("className" in this){if(t===j){return x(this,"")}C=x(this),v(this,t,e,C).split(/\s+/g).forEach(function(t){C=C.replace(l(t)," ")}),x(this,C.trim())}})},toggleClass:function(t,e){return t?this.each(function(n){var r=T(this),i=v(this,t,n,x(this));i.split(/\s+/g).forEach(function(t){(e===j?!r.hasClass(t):e)?r.addClass(t):r.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var e="scrollTop" in this[0];return t===j?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var e="scrollLeft" in this[0];return t===j?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),r=q.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(T(t).css("margin-top"))||0,n.left-=parseFloat(T(t).css("margin-left"))||0,r.top+=parseFloat(T(e[0]).css("border-top-width"))||0,r.left+=parseFloat(T(e[0]).css("border-left-width"))||0,{top:n.top-r.top,left:n.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||$.body;t&&!q.test(t.nodeName)&&"static"==T(t).css("position");){t=t.offsetParent}return t})}},T.fn.detach=T.fn.remove,["width","height"].forEach(function(t){var e=t.replace(/./,function(t){return t[0].toUpperCase()});T.fn[t]=function(i){var o,s=this[0];return i===j?n(s)?s["inner"+e]:r(s)?s.documentElement["scroll"+e]:(o=this.offset())&&o[t]:this.each(function(e){s=T(this),s.css(t,v(this,i,e,s[t]()))})}}),z.forEach(function(e,n){var r=n%2;T.fn[e]=function(){var e,i,o=T.map(arguments,function(n){return e=t(n),"object"==e||"array"==e||null==n?n:Y.fragment(n)}),s=this.length>1;return o.length<1?this:this.each(function(t,e){i=r?e:e.parentNode,e=0==n?e.nextSibling:1==n?e.firstChild:2==n?e:null;var a=T.contains($.documentElement,i);o.forEach(function(t){if(s){t=t.cloneNode(!0)}else{if(!i){return T(t).remove()}}i.insertBefore(t,e),a&&w(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},T.fn[r?e+"To":"insert"+(n?"Before":"After")]=function(t){return T(t)[e](this),this}}),Y.Z.prototype=d.prototype=T.fn,Y.uniq=S,Y.deserializeValue=b,T.zepto=Y,T}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function e(e,n,r){var i=t.Event(n);return t(e).trigger(i,r),!i.isDefaultPrevented()}function n(t,n,r,i){return t.global?e(n||y,r,i):void 0}function r(e){e.global&&0===t.active++&&n(e,null,"ajaxStart")}function i(e){e.global&&!--t.active&&n(e,null,"ajaxStop")}function o(t,e){var r=e.context;return e.beforeSend.call(r,t,e)===!1||n(e,r,"ajaxBeforeSend",[t,e])===!1?!1:void n(e,r,"ajaxSend",[t,e])}function s(t,e,r,i){var o=r.context,s="success";r.success.call(o,t,s,e),i&&i.resolveWith(o,[t,s,e]),n(r,o,"ajaxSuccess",[e,r,t]),u(s,e,r)
}function a(t,e,r,i,o){var s=i.context;i.error.call(s,r,e,t),o&&o.rejectWith(s,[r,e,t]),n(i,s,"ajaxError",[r,i,t||e]),u(e,r,i)}function u(t,e,r){var o=r.context;r.complete.call(o,e,t),n(r,o,"ajaxComplete",[e,r]),i(r)}function c(){}function l(t){return t&&(t=t.split(";",2)[0]),t&&(t==E?"html":t==j?"json":b.test(t)?"script":w.test(t)&&"xml")||"text"}function f(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function h(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=f(e.url,e.data),e.data=void 0)}function p(e,n,r,i){return t.isFunction(n)&&(i=r,r=n,n=void 0),t.isFunction(r)||(i=r,r=void 0),{url:e,data:n,success:r,dataType:i}}function d(e,n,r,i){var o,s=t.isArray(n),a=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),i&&(n=r?i:i+"["+(a||"object"==o||"array"==o?n:"")+"]"),!i&&s?e.add(u.name,u.value):"array"==o||!r&&"object"==o?d(e,u,r,n):e.add(n,u)})}var m,g,v=0,y=window.document,x=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,b=/^(?:text|application)\/javascript/i,w=/^(?:text|application)\/xml/i,j="application/json",E="text/html",T=/^\s*$/,C=y.createElement("a");C.href=window.location.href,t.active=0,t.ajaxJSONP=function(e,n){if(!("type" in e)){return t.ajax(e)}var r,i,u=e.jsonpCallback,c=(t.isFunction(u)?u():u)||"jsonp"+ ++v,l=y.createElement("script"),f=window[c],h=function(e){t(l).triggerHandler("error",e||"abort")},p={abort:h};return n&&n.promise(p),t(l).on("load error",function(o,u){clearTimeout(i),t(l).off().remove(),"error"!=o.type&&r?s(r[0],p,e,n):a(null,u||"error",p,e,n),window[c]=f,r&&t.isFunction(f)&&f(r[0]),f=r=void 0}),o(p,e)===!1?(h("abort"),p):(window[c]=function(){r=arguments},l.src=e.url.replace(/\?(.+)=\?/,"?$1="+c),y.head.appendChild(l),e.timeout>0&&(i=setTimeout(function(){h("timeout")},e.timeout)),p)},t.ajaxSettings={type:"GET",beforeSend:c,success:c,error:c,complete:c,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:j,xml:"application/xml, text/xml",html:E,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n,i,u=t.extend({},e||{}),p=t.Deferred&&t.Deferred();for(m in t.ajaxSettings){void 0===u[m]&&(u[m]=t.ajaxSettings[m])}r(u),u.crossDomain||(n=y.createElement("a"),n.href=u.url,n.href=n.href,u.crossDomain=C.protocol+"//"+C.host!=n.protocol+"//"+n.host),u.url||(u.url=window.location.toString()),(i=u.url.indexOf("#"))>-1&&(u.url=u.url.slice(0,i)),h(u);var d=u.dataType,v=/\?.+=\?/.test(u.url);if(v&&(d="jsonp"),u.cache!==!1&&(e&&e.cache===!0||"script"!=d&&"jsonp"!=d)||(u.url=f(u.url,"_="+Date.now())),"jsonp"==d){return v||(u.url=f(u.url,u.jsonp?u.jsonp+"=?":u.jsonp===!1?"":"callback=?")),t.ajaxJSONP(u,p)}var x,b=u.accepts[d],w={},j=function(t,e){w[t.toLowerCase()]=[t,e]},E=/^([\w-]+:)\/\//.test(u.url)?RegExp.$1:window.location.protocol,N=u.xhr(),S=N.setRequestHeader;if(p&&p.promise(N),u.crossDomain||j("X-Requested-With","XMLHttpRequest"),j("Accept",b||"*/*"),(b=u.mimeType||b)&&(b.indexOf(",")>-1&&(b=b.split(",",2)[0]),N.overrideMimeType&&N.overrideMimeType(b)),(u.contentType||u.contentType!==!1&&u.data&&"GET"!=u.type.toUpperCase())&&j("Content-Type",u.contentType||"application/x-www-form-urlencoded"),u.headers){for(g in u.headers){j(g,u.headers[g])}}if(N.setRequestHeader=j,N.onreadystatechange=function(){if(4==N.readyState){N.onreadystatechange=c,clearTimeout(x);var e,n=!1;if(N.status>=200&&N.status<300||304==N.status||0==N.status&&"file:"==E){d=d||l(u.mimeType||N.getResponseHeader("content-type")),e=N.responseText;try{"script"==d?(1,eval)(e):"xml"==d?e=N.responseXML:"json"==d&&(e=T.test(e)?null:t.parseJSON(e))}catch(r){n=r}n?a(n,"parsererror",N,u,p):s(e,N,u,p)}else{a(N.statusText||null,N.status?"error":"abort",N,u,p)}}},o(N,u)===!1){return N.abort(),a(null,"abort",N,u,p),N}if(u.xhrFields){for(g in u.xhrFields){N[g]=u.xhrFields[g]}}var O="async" in u?u.async:!0;N.open(u.type,u.url,O,u.username,u.password);for(g in w){S.apply(N,w[g])}return u.timeout>0&&(x=setTimeout(function(){N.onreadystatechange=c,N.abort(),a(null,"timeout",N,u,p)},u.timeout)),N.send(u.data?u.data:null),N},t.get=function(){return t.ajax(p.apply(null,arguments))},t.post=function(){var e=p.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=p.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,r){if(!this.length){return this}var i,o=this,s=e.split(/\s/),a=p(e,n,r),u=a.success;return s.length>1&&(a.url=s[0],i=s[1]),a.success=function(e){o.html(i?t("<div>").html(e.replace(x,"")).find(i):e),u&&u.apply(o,arguments)},t.ajax(a),this};var N=encodeURIComponent;t.param=function(e,n){var r=[];return r.add=function(e,n){t.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(N(e)+"="+N(n))},d(r,e,n),r.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.Callbacks=function(e){e=t.extend({},e);var n,r,i,o,s,a,u=[],c=!e.once&&[],l=function(t){for(n=e.memory&&t,r=!0,a=o||0,o=0,s=u.length,i=!0;
u&&s>a;++a){if(u[a].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}}i=!1,u&&(c?c.length&&l(c.shift()):n?u.length=0:f.disable())},f={add:function(){if(u){var r=u.length,a=function(n){t.each(n,function(t,n){"function"==typeof n?e.unique&&f.has(n)||u.push(n):n&&n.length&&"string"!=typeof n&&a(n)})};a(arguments),i?s=u.length:n&&(o=r,l(n))}return this},remove:function(){return u&&t.each(arguments,function(e,n){for(var r;(r=t.inArray(n,u,r))>-1;){u.splice(r,1),i&&(s>=r&&--s,a>=r&&--a)}}),this},has:function(e){return !(!u||!(e?t.inArray(e,u)>-1:u.length))},empty:function(){return s=u.length=0,this},disable:function(){return u=c=n=void 0,this},disabled:function(){return !u},lock:function(){return c=void 0,n||f.disable(),this},locked:function(){return !c},fireWith:function(t,e){return !u||r&&!c||(e=e||[],e=[t,e.slice?e.slice():e],i?c.push(e):l(e)),this},fire:function(){return f.fireWith(this,arguments)},fired:function(){return !!r}};return f}}(Zepto),function(t){function e(n){var r=[["resolve","done",t.Callbacks({once:1,memory:1}),"resolved"],["reject","fail",t.Callbacks({once:1,memory:1}),"rejected"],["notify","progress",t.Callbacks({memory:1})]],i="pending",o={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},then:function(){var n=arguments;return e(function(e){t.each(r,function(r,i){var a=t.isFunction(n[r])&&n[r];s[i[1]](function(){var n=a&&a.apply(this,arguments);if(n&&t.isFunction(n.promise)){n.promise().done(e.resolve).fail(e.reject).progress(e.notify)}else{var r=this===o?e.promise():this,s=a?[n]:arguments;e[i[0]+"With"](r,s)}})}),n=null}).promise()},promise:function(e){return null!=e?t.extend(e,o):o}},s={};return t.each(r,function(t,e){var n=e[2],a=e[3];o[e[1]]=n.add,a&&n.add(function(){i=a},r[1^t][2].disable,r[2][2].lock),s[e[0]]=function(){return s[e[0]+"With"](this===s?o:this,arguments),this},s[e[0]+"With"]=n.fireWith}),o.promise(s),n&&n.call(s,s),s}var n=Array.prototype.slice;t.when=function(r){var i,o,s,a=n.call(arguments),u=a.length,c=0,l=1!==u||r&&t.isFunction(r.promise)?u:0,f=1===l?r:e(),h=function(t,e,r){return function(o){e[t]=this,r[t]=arguments.length>1?n.call(arguments):o,r===i?f.notifyWith(e,r):--l||f.resolveWith(e,r)}};if(u>1){for(i=new Array(u),o=new Array(u),s=new Array(u);u>c;++c){a[c]&&t.isFunction(a[c].promise)?a[c].promise().done(h(c,s,a)).fail(f.reject).progress(h(c,o,i)):--l}}return l||f.resolveWith(s,a),f.promise()},t.Deferred=e}(Zepto),function(t){function e(t){return t._zid||(t._zid=h++)}function n(t,n,o,s){if(n=r(n),n.ns){var a=i(n.ns)}return(g[e(t)]||[]).filter(function(t){return !(!t||n.e&&t.e!=n.e||n.ns&&!a.test(t.ns)||o&&e(t.fn)!==e(o)||s&&t.sel!=s)})}function r(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function i(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function o(t,e){return t.del&&!y&&t.e in x||!!e}function s(t){return b[t]||y&&x[t]||t}function a(n,i,a,u,l,h,p){var d=e(n),m=g[d]||(g[d]=[]);i.split(/\s/).forEach(function(e){if("ready"==e){return t(document).ready(a)}var i=r(e);i.fn=a,i.sel=l,i.e in b&&(a=function(e){var n=e.relatedTarget;return !n||n!==this&&!t.contains(this,n)?i.fn.apply(this,arguments):void 0}),i.del=h;var d=h||a;i.proxy=function(t){if(t=c(t),!t.isImmediatePropagationStopped()){t.data=u;var e=d.apply(n,t._args==f?[t]:[t].concat(t._args));return e===!1&&(t.preventDefault(),t.stopPropagation()),e}},i.i=m.length,m.push(i),"addEventListener" in n&&n.addEventListener(s(i.e),i.proxy,o(i,p))})}function u(t,r,i,a,u){var c=e(t);(r||"").split(/\s/).forEach(function(e){n(t,e,i,a).forEach(function(e){delete g[c][e.i],"removeEventListener" in t&&t.removeEventListener(s(e.e),e.proxy,o(e,u))})})}function c(e,n){return(n||!e.isDefaultPrevented)&&(n||(n=e),t.each(T,function(t,r){var i=n[t];e[t]=function(){return this[r]=w,i&&i.apply(n,arguments)},e[r]=j}),(n.defaultPrevented!==f?n.defaultPrevented:"returnValue" in n?n.returnValue===!1:n.getPreventDefault&&n.getPreventDefault())&&(e.isDefaultPrevented=w)),e}function l(t){var e,n={originalEvent:t};for(e in t){E.test(e)||t[e]===f||(n[e]=t[e])}return c(n,t)}var f,h=1,p=Array.prototype.slice,d=t.isFunction,m=function(t){return"string"==typeof t},g={},v={},y="onfocusin" in window,x={focus:"focusin",blur:"focusout"},b={mouseenter:"mouseover",mouseleave:"mouseout"};v.click=v.mousedown=v.mouseup=v.mousemove="MouseEvents",t.event={add:a,remove:u},t.proxy=function(n,r){var i=2 in arguments&&p.call(arguments,2);if(d(n)){var o=function(){return n.apply(r,i?i.concat(p.call(arguments)):arguments)};return o._zid=e(n),o}if(m(r)){return i?(i.unshift(n[r],n),t.proxy.apply(null,i)):t.proxy(n[r],n)}throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,r){return this.on(t,e,n,r,1)};var w=function(){return !0},j=function(){return !1},E=/^([A-Z]|returnValue$|layer[XY]$)/,T={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};
t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,n,r,i,o){var s,c,h=this;return e&&!m(e)?(t.each(e,function(t,e){h.on(t,n,r,e,o)}),h):(m(n)||d(i)||i===!1||(i=r,r=n,n=f),(i===f||r===!1)&&(i=r,r=f),i===!1&&(i=j),h.each(function(f,h){o&&(s=function(t){return u(h,t.type,i),i.apply(this,arguments)}),n&&(c=function(e){var r,o=t(e.target).closest(n,h).get(0);return o&&o!==h?(r=t.extend(l(e),{currentTarget:o,liveFired:h}),(s||i).apply(o,[r].concat(p.call(arguments,1)))):void 0}),a(h,e,i,r,n,c||s)}))},t.fn.off=function(e,n,r){var i=this;return e&&!m(e)?(t.each(e,function(t,e){i.off(t,n,e)}),i):(m(n)||d(r)||r===!1||(r=n,n=f),r===!1&&(r=j),i.each(function(){u(this,e,r,n)}))},t.fn.trigger=function(e,n){return e=m(e)||t.isPlainObject(e)?t.Event(e):c(e),e._args=n,this.each(function(){e.type in x&&"function"==typeof this[e.type]?this[e.type]():"dispatchEvent" in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,r){var i,o;return this.each(function(s,a){i=l(m(e)?t.Event(e):e),i._args=r,i.target=a,t.each(n(a,e.type||e),function(t,e){return o=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),o},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),t.Event=function(t,e){m(t)||(e=t,t=e.type);var n=document.createEvent(v[t]||"Events"),r=!0;if(e){for(var i in e){"bubbles"==i?r=!!e[i]:n[i]=e[i]}}return n.initEvent(t,r,!0),c(n)}}(Zepto),function(t){t.fn.serializeArray=function(){var e,n,r=[],i=function(t){return t.forEach?t.forEach(i):void r.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(r,o){n=o.type,e=o.name,e&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&i(t(o).val())}),r},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments){this.bind("submit",e)}else{if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}}return this}}(Zepto);(function($,undefined){var prefix="",eventPrefix,vendors={Webkit:"webkit",Moz:"",O:"o"},testEl=document.createElement("div"),supportedTransforms=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,transform,transitionProperty,transitionDuration,transitionTiming,transitionDelay,animationName,animationDuration,animationTiming,animationDelay,cssReset={};function dasherize(str){return str.replace(/([a-z])([A-Z])/,"$1-$2").toLowerCase()}function normalizeEvent(name){return eventPrefix?eventPrefix+name:name.toLowerCase()}$.each(vendors,function(vendor,event){if(testEl.style[vendor+"TransitionProperty"]!==undefined){prefix="-"+vendor.toLowerCase()+"-";eventPrefix=event;return false}});transform=prefix+"transform";cssReset[transitionProperty=prefix+"transition-property"]=cssReset[transitionDuration=prefix+"transition-duration"]=cssReset[transitionDelay=prefix+"transition-delay"]=cssReset[transitionTiming=prefix+"transition-timing-function"]=cssReset[animationName=prefix+"animation-name"]=cssReset[animationDuration=prefix+"animation-duration"]=cssReset[animationDelay=prefix+"animation-delay"]=cssReset[animationTiming=prefix+"animation-timing-function"]="";$.fx={off:(eventPrefix===undefined&&testEl.style.transitionProperty===undefined),speeds:{_default:400,fast:200,slow:600},cssPrefix:prefix,transitionEnd:normalizeEvent("TransitionEnd"),animationEnd:normalizeEvent("AnimationEnd")};$.fn.animate=function(properties,duration,ease,callback,delay){if($.isFunction(duration)){callback=duration,ease=undefined,duration=undefined}if($.isFunction(ease)){callback=ease,ease=undefined}if($.isPlainObject(duration)){ease=duration.easing,callback=duration.complete,delay=duration.delay,duration=duration.duration}if(duration){duration=(typeof duration=="number"?duration:($.fx.speeds[duration]||$.fx.speeds._default))/1000}if(delay){delay=parseFloat(delay)/1000}return this.anim(properties,duration,ease,callback,delay)};$.fn.anim=function(properties,duration,ease,callback,delay){var key,cssValues={},cssProperties,transforms="",that=this,wrappedCallback,endEvent=$.fx.transitionEnd,fired=false;if(duration===undefined){duration=$.fx.speeds._default/1000}if(delay===undefined){delay=0}if($.fx.off){duration=0}if(typeof properties=="string"){cssValues[animationName]=properties;cssValues[animationDuration]=duration+"s";cssValues[animationDelay]=delay+"s";cssValues[animationTiming]=(ease||"linear");
endEvent=$.fx.animationEnd}else{cssProperties=[];for(key in properties){if(supportedTransforms.test(key)){transforms+=key+"("+properties[key]+") "}else{cssValues[key]=properties[key],cssProperties.push(dasherize(key))}}if(transforms){cssValues[transform]=transforms,cssProperties.push(transform)}if(duration>0&&typeof properties==="object"){cssValues[transitionProperty]=cssProperties.join(", ");cssValues[transitionDuration]=duration+"s";cssValues[transitionDelay]=delay+"s";cssValues[transitionTiming]=(ease||"linear")}}wrappedCallback=function(event){if(typeof event!=="undefined"){if(event.target!==event.currentTarget){return}$(event.target).unbind(endEvent,wrappedCallback)}else{$(this).unbind(endEvent,wrappedCallback)}fired=true;$(this).css(cssReset);callback&&callback.call(this)};if(duration>0){this.bind(endEvent,wrappedCallback);setTimeout(function(){if(fired){return}wrappedCallback.call(that)},((duration+delay)*1000)+25)}this.size()&&this.get(0).clientLeft;this.css(cssValues);if(duration<=0){setTimeout(function(){that.each(function(){wrappedCallback.call(this)})},0)}return this};testEl=null})(Zepto);(function($,undefined){var document=window.document,docElem=document.documentElement,origShow=$.fn.show,origHide=$.fn.hide,origToggle=$.fn.toggle;function anim(el,speed,opacity,scale,callback){if(typeof speed=="function"&&!callback){callback=speed,speed=undefined}var props={opacity:opacity};if(scale){props.scale=scale;el.css($.fx.cssPrefix+"transform-origin","0 0")}return el.animate(props,speed,null,callback)}function hide(el,speed,scale,callback){return anim(el,speed,0,scale,function(){origHide.call($(this));callback&&callback.call(this)})}$.fn.show=function(speed,callback){origShow.call(this);if(speed===undefined){speed=0}else{this.css("opacity",0)}return anim(this,speed,1,"1,1",callback)};$.fn.hide=function(speed,callback){if(speed===undefined){return origHide.call(this)}else{return hide(this,speed,"0,0",callback)}};$.fn.toggle=function(speed,callback){if(speed===undefined||typeof speed=="boolean"){return origToggle.call(this,speed)}else{return this.each(function(){var el=$(this);el[el.css("display")=="none"?"show":"hide"](speed,callback)})}};$.fn.fadeTo=function(speed,opacity,callback){return anim(this,speed,opacity,null,callback)};$.fn.fadeIn=function(speed,callback){var target=this.css("opacity");if(target>0){this.css("opacity",0)}else{target=1}return origShow.call(this).fadeTo(speed,target,callback)};$.fn.fadeOut=function(speed,callback){return hide(this,speed,null,callback)};$.fn.fadeToggle=function(speed,callback){return this.each(function(){var el=$(this);el[(el.css("opacity")==0||el.css("display")=="none")?"fadeIn":"fadeOut"](speed,callback)})}})(Zepto);(function($){var touch={},touchTimeout,tapTimeout,swipeTimeout,longTapTimeout,longTapDelay=750,gesture;function swipeDirection(x1,x2,y1,y2){return Math.abs(x1-x2)>=Math.abs(y1-y2)?(x1-x2>0?"Left":"Right"):(y1-y2>0?"Up":"Down")}function longTap(){longTapTimeout=null;if(touch.last){touch.el.trigger("longTap");touch={}}}function cancelLongTap(){if(longTapTimeout){clearTimeout(longTapTimeout)}longTapTimeout=null}function cancelAll(){if(touchTimeout){clearTimeout(touchTimeout)}if(tapTimeout){clearTimeout(tapTimeout)}if(swipeTimeout){clearTimeout(swipeTimeout)}if(longTapTimeout){clearTimeout(longTapTimeout)}touchTimeout=tapTimeout=swipeTimeout=longTapTimeout=null;touch={}}function isPrimaryTouch(event){return(event.pointerType=="touch"||event.pointerType==event.MSPOINTER_TYPE_TOUCH)&&event.isPrimary}function isPointerEventType(e,type){return(e.type=="pointer"+type||e.type.toLowerCase()=="mspointer"+type)}$(document).ready(function(){var now,delta,deltaX=0,deltaY=0,firstTouch,_isPointerType;if("MSGesture" in window){gesture=new MSGesture();gesture.target=document.body}$(document).bind("MSGestureEnd",function(e){var swipeDirectionFromVelocity=e.velocityX>1?"Right":e.velocityX<-1?"Left":e.velocityY>1?"Down":e.velocityY<-1?"Up":null;if(swipeDirectionFromVelocity){touch.el.trigger("swipe");touch.el.trigger("swipe"+swipeDirectionFromVelocity)}}).on("touchstart MSPointerDown pointerdown",function(e){if((_isPointerType=isPointerEventType(e,"down"))&&!isPrimaryTouch(e)){return}firstTouch=_isPointerType?e:e.touches[0];if(e.touches&&e.touches.length===1&&touch.x2){touch.x2=undefined;touch.y2=undefined}now=Date.now();delta=now-(touch.last||now);touch.el=$("tagName" in firstTouch.target?firstTouch.target:firstTouch.target.parentNode);touchTimeout&&clearTimeout(touchTimeout);touch.x1=firstTouch.pageX;touch.y1=firstTouch.pageY;if(delta>0&&delta<=250){touch.isDoubleTap=true}touch.last=now;longTapTimeout=setTimeout(longTap,longTapDelay);if(gesture&&_isPointerType){gesture.addPointer(e.pointerId)}}).on("touchmove MSPointerMove pointermove",function(e){if((_isPointerType=isPointerEventType(e,"move"))&&!isPrimaryTouch(e)){return}firstTouch=_isPointerType?e:e.touches[0];cancelLongTap();touch.x2=firstTouch.pageX;touch.y2=firstTouch.pageY;deltaX+=Math.abs(touch.x1-touch.x2);deltaY+=Math.abs(touch.y1-touch.y2)
}).on("touchend MSPointerUp pointerup",function(e){if((_isPointerType=isPointerEventType(e,"up"))&&!isPrimaryTouch(e)){return}cancelLongTap();if((touch.x2&&Math.abs(touch.x1-touch.x2)>30)||(touch.y2&&Math.abs(touch.y1-touch.y2)>30)){swipeTimeout=setTimeout(function(){touch.el.trigger("swipe");touch.el.trigger("swipe"+(swipeDirection(touch.x1,touch.x2,touch.y1,touch.y2)));touch={}},0)}else{if("last" in touch){if(deltaX<30&&deltaY<30){tapTimeout=setTimeout(function(){var event=$.Event("tap");event.cancelTouch=cancelAll;touch.el.trigger(event);if(touch.isDoubleTap){if(touch.el){touch.el.trigger("doubleTap")}touch={}}else{touchTimeout=setTimeout(function(){touchTimeout=null;if(touch.el){touch.el.trigger("singleTap")}touch={}},250)}},0)}else{touch={}}}}deltaX=deltaY=0}).on("touchcancel MSPointerCancel pointercancel",cancelAll);$(window).on("scroll",cancelAll)});["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(eventName){$.fn[eventName]=function(callback){return this.on(eventName,callback)}})})(Zepto);

//     Zepto.js
//     (c) 2010-2015 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.

// The following code is heavily inspired by jQuery's $.fn.data()

;(function($){
  var data = {}, dataAttr = $.fn.data, camelize = $.camelCase,
    exp = $.expando = 'Zepto' + (+new Date()), emptyArray = []

  // Get value from node:
  // 1. first try key as given,
  // 2. then try camelized key,
  // 3. fall back to reading "data-*" attribute.
  function getData(node, name) {
    var id = node[exp], store = id && data[id]
    if (name === undefined) return store || setData(node)
    else {
      if (store) {
        if (name in store) return store[name]
        var camelName = camelize(name)
        if (camelName in store) return store[camelName]
      }
      return dataAttr.call($(node), name)
    }
  }

  // Store value under camelized key on node
  function setData(node, name, value) {
    var id = node[exp] || (node[exp] = ++$.uuid),
      store = data[id] || (data[id] = attributeData(node))
    if (name !== undefined) store[camelize(name)] = value
    return store
  }

  // Read all "data-*" attributes from a node
  function attributeData(node) {
    var store = {}
    $.each(node.attributes || emptyArray, function(i, attr){
      if (attr.name.indexOf('data-') == 0)
        store[camelize(attr.name.replace('data-', ''))] =
          $.zepto.deserializeValue(attr.value)
    })
    return store
  }

  $.fn.data = function(name, value) {
    return value === undefined ?
      // set multiple values via object
      $.isPlainObject(name) ?
        this.each(function(i, node){
          $.each(name, function(key, value){ setData(node, key, value) })
        }) :
        // get value from first element
        (0 in this ? getData(this[0], name) : undefined) :
      // set value on all elements
      this.each(function(){ setData(this, name, value) })
  }

  $.fn.removeData = function(names) {
    if (typeof names == 'string') names = names.split(/\s+/)
    return this.each(function(){
      var id = this[exp], store = id && data[id]
      if (store) $.each(names || store, function(key){
        delete store[names ? camelize(this) : key]
      })
    })
  }

  // Generate extended `remove` and `empty` functions
  ;['remove', 'empty'].forEach(function(methodName){
    var origFn = $.fn[methodName]
    $.fn[methodName] = function() {
      var elements = this.find('*')
      if (methodName === 'remove') elements = elements.add(this)
      elements.removeData()
      return origFn.call(this)
    }
  })
})(Zepto)