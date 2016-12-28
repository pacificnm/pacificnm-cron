
var ApiGen = ApiGen || {};
ApiGen.config = {"require":{"min":"2.8.0"},"resources":{"resources":"resources"},"templates":{"common":{"overview.latte":"index.html","combined.js.latte":"resources\/combined.js","elementlist.js.latte":"elementlist.js","404.latte":"404.html"},"optional":{"sitemap":{"filename":"sitemap.xml","template":"sitemap.xml.latte"},"opensearch":{"filename":"opensearch.xml","template":"opensearch.xml.latte"},"robots":{"filename":"robots.txt","template":"robots.txt.latte"}},"main":{"package":{"filename":"package-%s.html","template":"package.latte"},"namespace":{"filename":"namespace-%s.html","template":"namespace.latte"},"class":{"filename":"class-%s.html","template":"class.latte"},"constant":{"filename":"constant-%s.html","template":"constant.latte"},"function":{"filename":"function-%s.html","template":"function.latte"},"source":{"filename":"source-%s.html","template":"source.latte"},"tree":{"filename":"tree.html","template":"tree.latte"},"deprecated":{"filename":"deprecated.html","template":"deprecated.latte"},"todo":{"filename":"todo.html","template":"todo.latte"}}},"options":{"elementDetailsCollapsed":true,"elementsOrder":"natural"},"config":"\/usr\/share\/php\/data\/ApiGen\/templates\/default\/config.neon"};


/*! jQuery v1.7.2 jquery.com | jquery.org/license */
(function(e,t){function u(e){var t=o[e]={},n,r;e=e.split(/\s+/);for(n=0,r=e.length;n<r;n++)t[e[n]]=!0;return t}function c(e,n,r){if(r===t&&e.nodeType===1){var i="data-"+n.replace(l,"-$1").toLowerCase();r=e.getAttribute(i);if(typeof r=="string"){try{r=r==="true"?!0:r==="false"?!1:r==="null"?null:s.isNumeric(r)?+r:f.test(r)?s.parseJSON(r):r}catch(o){}s.data(e,n,r)}else r=t}return r}function h(e){for(var t in e){if(t==="data"&&s.isEmptyObject(e[t]))continue;if(t!=="toJSON")return!1}return!0}function p(e,t,n){var r=t+"defer",i=t+"queue",o=t+"mark",u=s._data(e,r);u&&(n==="queue"||!s._data(e,i))&&(n==="mark"||!s._data(e,o))&&setTimeout(function(){!s._data(e,i)&&!s._data(e,o)&&(s.removeData(e,r,!0),u.fire())},0)}function H(){return!1}function B(){return!0}function W(e){return!e||!e.parentNode||e.parentNode.nodeType===11}function X(e,t,n){t=t||0;if(s.isFunction(t))return s.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return s.grep(e,function(e,r){return e===t===n});if(typeof t=="string"){var r=s.grep(e,function(e){return e.nodeType===1});if(q.test(t))return s.filter(t,r,!n);t=s.filter(t,r)}return s.grep(e,function(e,r){return s.inArray(e,t)>=0===n})}function V(e){var t=$.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}function at(e,t){return s.nodeName(e,"table")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function ft(e,t){if(t.nodeType!==1||!s.hasData(e))return;var n,r,i,o=s._data(e),u=s._data(t,o),a=o.events;if(a){delete u.handle,u.events={};for(n in a)for(r=0,i=a[n].length;r<i;r++)s.event.add(t,n,a[n][r])}u.data&&(u.data=s.extend({},u.data))}function lt(e,t){var n;if(t.nodeType!==1)return;t.clearAttributes&&t.clearAttributes(),t.mergeAttributes&&t.mergeAttributes(e),n=t.nodeName.toLowerCase(),n==="object"?t.outerHTML=e.outerHTML:n!=="input"||e.type!=="checkbox"&&e.type!=="radio"?n==="option"?t.selected=e.defaultSelected:n==="input"||n==="textarea"?t.defaultValue=e.defaultValue:n==="script"&&t.text!==e.text&&(t.text=e.text):(e.checked&&(t.defaultChecked=t.checked=e.checked),t.value!==e.value&&(t.value=e.value)),t.removeAttribute(s.expando),t.removeAttribute("_submit_attached"),t.removeAttribute("_change_attached")}function ct(e){return typeof e.getElementsByTagName!="undefined"?e.getElementsByTagName("*"):typeof e.querySelectorAll!="undefined"?e.querySelectorAll("*"):[]}function ht(e){if(e.type==="checkbox"||e.type==="radio")e.defaultChecked=e.checked}function pt(e){var t=(e.nodeName||"").toLowerCase();t==="input"?ht(e):t!=="script"&&typeof e.getElementsByTagName!="undefined"&&s.grep(e.getElementsByTagName("input"),ht)}function dt(e){var t=n.createElement("div");return ut.appendChild(t),t.innerHTML=e.outerHTML,t.firstChild}function kt(e,t,n){var r=t==="width"?e.offsetWidth:e.offsetHeight,i=t==="width"?1:0,o=4;if(r>0){if(n!=="border")for(;i<o;i+=2)n||(r-=parseFloat(s.css(e,"padding"+xt[i]))||0),n==="margin"?r+=parseFloat(s.css(e,n+xt[i]))||0:r-=parseFloat(s.css(e,"border"+xt[i]+"Width"))||0;return r+"px"}r=Tt(e,t);if(r<0||r==null)r=e.style[t];if(bt.test(r))return r;r=parseFloat(r)||0;if(n)for(;i<o;i+=2)r+=parseFloat(s.css(e,"padding"+xt[i]))||0,n!=="padding"&&(r+=parseFloat(s.css(e,"border"+xt[i]+"Width"))||0),n==="margin"&&(r+=parseFloat(s.css(e,n+xt[i]))||0);return r+"px"}function Qt(e){return function(t,n){typeof t!="string"&&(n=t,t="*");if(s.isFunction(n)){var r=t.toLowerCase().split(qt),i=0,o=r.length,u,a,f;for(;i<o;i++)u=r[i],f=/^\+/.test(u),f&&(u=u.substr(1)||"*"),a=e[u]=e[u]||[],a[f?"unshift":"push"](n)}}}function Gt(e,n,r,i,s,o){s=s||n.dataTypes[0],o=o||{},o[s]=!0;var u=e[s],a=0,f=u?u.length:0,l=e===Wt,c;for(;a<f&&(l||!c);a++)c=u[a](n,r,i),typeof c=="string"&&(!l||o[c]?c=t:(n.dataTypes.unshift(c),c=Gt(e,n,r,i,c,o)));return(l||!c)&&!o["*"]&&(c=Gt(e,n,r,i,"*",o)),c}function Yt(e,n){var r,i,o=s.ajaxSettings.flatOptions||{};for(r in n)n[r]!==t&&((o[r]?e:i||(i={}))[r]=n[r]);i&&s.extend(!0,e,i)}function Zt(e,t,n,r){if(s.isArray(t))s.each(t,function(t,i){n||At.test(e)?r(e,i):Zt(e+"["+(typeof i=="object"?t:"")+"]",i,n,r)});else if(!n&&s.type(t)==="object")for(var i in t)Zt(e+"["+i+"]",t[i],n,r);else r(e,t)}function en(e,n,r){var i=e.contents,s=e.dataTypes,o=e.responseFields,u,a,f,l;for(a in o)a in r&&(n[o[a]]=r[a]);while(s[0]==="*")s.shift(),u===t&&(u=e.mimeType||n.getResponseHeader("content-type"));if(u)for(a in i)if(i[a]&&i[a].test(u)){s.unshift(a);break}if(s[0]in r)f=s[0];else{for(a in r){if(!s[0]||e.converters[a+" "+s[0]]){f=a;break}l||(l=a)}f=f||l}if(f)return f!==s[0]&&s.unshift(f),r[f]}function tn(e,n){e.dataFilter&&(n=e.dataFilter(n,e.dataType));var r=e.dataTypes,i={},o,u,a=r.length,f,l=r[0],c,h,p,d,v;for(o=1;o<a;o++){if(o===1)for(u in e.converters)typeof u=="string"&&(i[u.toLowerCase()]=e.converters[u]);c=l,l=r[o];if(l==="*")l=c;else if(c!=="*"&&c!==l){h=c+" "+l,p=i[h]||i["* "+l];if(!p){v=t;for(d in i){f=d.split(" ");if(f[0]===c||f[0]==="*"){v=i[f[1]+" "+l];if(v){d=i[d],d===!0?p=v:v===!0&&(p=d);break}}}}!p&&!v&&s.error("No conversion from "+h.replace(" "," to ")),p!==!0&&(n=p?p(n):v(d(n)))}}return n}function an(){try{return new e.XMLHttpRequest}catch(t){}}function fn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function yn(){return setTimeout(bn,0),gn=s.now()}function bn(){gn=t}function wn(e,t){var n={};return s.each(mn.concat.apply([],mn.slice(0,t)),function(){n[this]=e}),n}function En(e){if(!ln[e]){var t=n.body,r=s("<"+e+">").appendTo(t),i=r.css("display");r.remove();if(i==="none"||i===""){cn||(cn=n.createElement("iframe"),cn.frameBorder=cn.width=cn.height=0),t.appendChild(cn);if(!hn||!cn.createElement)hn=(cn.contentWindow||cn.contentDocument).document,hn.write((s.support.boxModel?"<!doctype html>":"")+"<html><body>"),hn.close();r=hn.createElement(e),hn.body.appendChild(r),i=s.css(r,"display"),t.removeChild(cn)}ln[e]=i}return ln[e]}function Nn(e){return s.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:!1}var n=e.document,r=e.navigator,i=e.location,s=function(){function H(){if(i.isReady)return;try{n.documentElement.doScroll("left")}catch(e){setTimeout(H,1);return}i.ready()}var i=function(e,t){return new i.fn.init(e,t,u)},s=e.jQuery,o=e.$,u,a=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,f=/\S/,l=/^\s+/,c=/\s+$/,h=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,p=/^[\],:{}\s]*$/,d=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,v=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,m=/(?:^|:|,)(?:\s*\[)+/g,g=/(webkit)[ \/]([\w.]+)/,y=/(opera)(?:.*version)?[ \/]([\w.]+)/,b=/(msie) ([\w.]+)/,w=/(mozilla)(?:.*? rv:([\w.]+))?/,E=/-([a-z]|[0-9])/ig,S=/^-ms-/,x=function(e,t){return(t+"").toUpperCase()},T=r.userAgent,N,C,k,L=Object.prototype.toString,A=Object.prototype.hasOwnProperty,O=Array.prototype.push,M=Array.prototype.slice,_=String.prototype.trim,D=Array.prototype.indexOf,P={};return i.fn=i.prototype={constructor:i,init:function(e,r,s){var o,u,f,l;if(!e)return this;if(e.nodeType)return this.context=this[0]=e,this.length=1,this;if(e==="body"&&!r&&n.body)return this.context=n,this[0]=n.body,this.selector=e,this.length=1,this;if(typeof e=="string"){e.charAt(0)!=="<"||e.charAt(e.length-1)!==">"||e.length<3?o=a.exec(e):o=[null,e,null];if(o&&(o[1]||!r)){if(o[1])return r=r instanceof i?r[0]:r,l=r?r.ownerDocument||r:n,f=h.exec(e),f?i.isPlainObject(r)?(e=[n.createElement(f[1])],i.fn.attr.call(e,r,!0)):e=[l.createElement(f[1])]:(f=i.buildFragment([o[1]],[l]),e=(f.cacheable?i.clone(f.fragment):f.fragment).childNodes),i.merge(this,e);u=n.getElementById(o[2]);if(u&&u.parentNode){if(u.id!==o[2])return s.find(e);this.length=1,this[0]=u}return this.context=n,this.selector=e,this}return!r||r.jquery?(r||s).find(e):this.constructor(r).find(e)}return i.isFunction(e)?s.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),i.makeArray(e,this))},selector:"",jquery:"1.7.2",length:0,size:function(){return this.length},toArray:function(){return M.call(this,0)},get:function(e){return e==null?this.toArray():e<0?this[this.length+e]:this[e]},pushStack:function(e,t,n){var r=this.constructor();return i.isArray(e)?O.apply(r,e):i.merge(r,e),r.prevObject=this,r.context=this.context,t==="find"?r.selector=this.selector+(this.selector?" ":"")+n:t&&(r.selector=this.selector+"."+t+"("+n+")"),r},each:function(e,t){return i.each(this,e,t)},ready:function(e){return i.bindReady(),C.add(e),this},eq:function(e){return e=+e,e===-1?this.slice(e):this.slice(e,e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(M.apply(this,arguments),"slice",M.call(arguments).join(","))},map:function(e){return this.pushStack(i.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:O,sort:[].sort,splice:[].splice},i.fn.init.prototype=i.fn,i.extend=i.fn.extend=function(){var e,n,r,s,o,u,a=arguments[0]||{},f=1,l=arguments.length,c=!1;typeof a=="boolean"&&(c=a,a=arguments[1]||{},f=2),typeof a!="object"&&!i.isFunction(a)&&(a={}),l===f&&(a=this,--f);for(;f<l;f++)if((e=arguments[f])!=null)for(n in e){r=a[n],s=e[n];if(a===s)continue;c&&s&&(i.isPlainObject(s)||(o=i.isArray(s)))?(o?(o=!1,u=r&&i.isArray(r)?r:[]):u=r&&i.isPlainObject(r)?r:{},a[n]=i.extend(c,u,s)):s!==t&&(a[n]=s)}return a},i.extend({noConflict:function(t){return e.$===i&&(e.$=o),t&&e.jQuery===i&&(e.jQuery=s),i},isReady:!1,readyWait:1,holdReady:function(e){e?i.readyWait++:i.ready(!0)},ready:function(e){if(e===!0&&!--i.readyWait||e!==!0&&!i.isReady){if(!n.body)return setTimeout(i.ready,1);i.isReady=!0;if(e!==!0&&--i.readyWait>0)return;C.fireWith(n,[i]),i.fn.trigger&&i(n).trigger("ready").off("ready")}},bindReady:function(){if(C)return;C=i.Callbacks("once memory");if(n.readyState==="complete")return setTimeout(i.ready,1);if(n.addEventListener)n.addEventListener("DOMContentLoaded",k,!1),e.addEventListener("load",i.ready,!1);else if(n.attachEvent){n.attachEvent("onreadystatechange",k),e.attachEvent("onload",i.ready);var t=!1;try{t=e.frameElement==null}catch(r){}n.documentElement.doScroll&&t&&H()}},isFunction:function(e){return i.type(e)==="function"},isArray:Array.isArray||function(e){return i.type(e)==="array"},isWindow:function(e){return e!=null&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return e==null?e+"":P[L.call(e)]||"object"},isPlainObject:function(e){if(!e||i.type(e)!=="object"||e.nodeType||i.isWindow(e))return!1;try{if(e.constructor&&!A.call(e,"constructor")&&!A.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||A.call(e,r)},isEmptyObject:function(e){for(var t in e)return!1;return!0},error:function(e){throw Error(e)},parseJSON:function(t){if(typeof t!="string"||!t)return null;t=i.trim(t);if(e.JSON&&e.JSON.parse)return e.JSON.parse(t);if(p.test(t.replace(d,"@").replace(v,"]").replace(m,"")))return Function("return "+t)();i.error("Invalid JSON: "+t)},parseXML:function(n){if(typeof n!="string"||!n)return null;var r,s;try{e.DOMParser?(s=new DOMParser,r=s.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return(!r||!r.documentElement||r.getElementsByTagName("parsererror").length)&&i.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&f.test(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(S,"ms-").replace(E,x)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toUpperCase()===t.toUpperCase()},each:function(e,n,r){var s,o=0,u=e.length,a=u===t||i.isFunction(e);if(r){if(a){for(s in e)if(n.apply(e[s],r)===!1)break}else for(;o<u;)if(n.apply(e[o++],r)===!1)break}else if(a){for(s in e)if(n.call(e[s],s,e[s])===!1)break}else for(;o<u;)if(n.call(e[o],o,e[o++])===!1)break;return e},trim:_?function(e){return e==null?"":_.call(e)}:function(e){return e==null?"":(e+"").replace(l,"").replace(c,"")},makeArray:function(e,t){var n=t||[];if(e!=null){var r=i.type(e);e.length==null||r==="string"||r==="function"||r==="regexp"||i.isWindow(e)?O.call(n,e):i.merge(n,e)}return n},inArray:function(e,t,n){var r;if(t){if(D)return D.call(t,e,n);r=t.length,n=n?n<0?Math.max(0,r+n):n:0;for(;n<r;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=e.length,i=0;if(typeof n.length=="number")for(var s=n.length;i<s;i++)e[r++]=n[i];else while(n[i]!==t)e[r++]=n[i++];return e.length=r,e},grep:function(e,t,n){var r=[],i;n=!!n;for(var s=0,o=e.length;s<o;s++)i=!!t(e[s],s),n!==i&&r.push(e[s]);return r},map:function(e,n,r){var s,o,u=[],a=0,f=e.length,l=e instanceof i||f!==t&&typeof f=="number"&&(f>0&&e[0]&&e[f-1]||f===0||i.isArray(e));if(l)for(;a<f;a++)s=n(e[a],a,r),s!=null&&(u[u.length]=s);else for(o in e)s=n(e[o],o,r),s!=null&&(u[u.length]=s);return u.concat.apply([],u)},guid:1,proxy:function(e,n){if(typeof n=="string"){var r=e[n];n=e,e=r}if(!i.isFunction(e))return t;var s=M.call(arguments,2),o=function(){return e.apply(n,s.concat(M.call(arguments)))};return o.guid=e.guid=e.guid||o.guid||i.guid++,o},access:function(e,n,r,s,o,u,a){var f,l=r==null,c=0,h=e.length;if(r&&typeof r=="object"){for(c in r)i.access(e,n,c,r[c],1,u,s);o=1}else if(s!==t){f=a===t&&i.isFunction(s),l&&(f?(f=n,n=function(e,t,n){return f.call(i(e),n)}):(n.call(e,s),n=null));if(n)for(;c<h;c++)n(e[c],r,f?s.call(e[c],c,n(e[c],r)):s,a);o=1}return o?e:l?n.call(e):h?n(e[0],r):u},now:function(){return(new Date).getTime()},uaMatch:function(e){e=e.toLowerCase();var t=g.exec(e)||y.exec(e)||b.exec(e)||e.indexOf("compatible")<0&&w.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},sub:function(){function e(t,n){return new e.fn.init(t,n)}i.extend(!0,e,this),e.superclass=this,e.fn=e.prototype=this(),e.fn.constructor=e,e.sub=this.sub,e.fn.init=function(r,s){return s&&s instanceof i&&!(s instanceof e)&&(s=e(s)),i.fn.init.call(this,r,s,t)},e.fn.init.prototype=e.fn;var t=e(n);return e},browser:{}}),i.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(e,t){P["[object "+t+"]"]=t.toLowerCase()}),N=i.uaMatch(T),N.browser&&(i.browser[N.browser]=!0,i.browser.version=N.version),i.browser.webkit&&(i.browser.safari=!0),f.test(" ")&&(l=/^[\s\xA0]+/,c=/[\s\xA0]+$/),u=i(n),n.addEventListener?k=function(){n.removeEventListener("DOMContentLoaded",k,!1),i.ready()}:n.attachEvent&&(k=function(){n.readyState==="complete"&&(n.detachEvent("onreadystatechange",k),i.ready())}),i}(),o={};s.Callbacks=function(e){e=e?o[e]||u(e):{};var n=[],r=[],i,a,f,l,c,h,p=function(t){var r,i,o,u,a;for(r=0,i=t.length;r<i;r++)o=t[r],u=s.type(o),u==="array"?p(o):u==="function"&&(!e.unique||!v.has(o))&&n.push(o)},d=function(t,s){s=s||[],i=!e.memory||[t,s],a=!0,f=!0,h=l||0,l=0,c=n.length;for(;n&&h<c;h++)if(n[h].apply(t,s)===!1&&e.stopOnFalse){i=!0;break}f=!1,n&&(e.once?i===!0?v.disable():n=[]:r&&r.length&&(i=r.shift(),v.fireWith(i[0],i[1])))},v={add:function(){if(n){var e=n.length;p(arguments),f?c=n.length:i&&i!==!0&&(l=e,d(i[0],i[1]))}return this},remove:function(){if(n){var t=arguments,r=0,i=t.length;for(;r<i;r++)for(var s=0;s<n.length;s++)if(t[r]===n[s]){f&&s<=c&&(c--,s<=h&&h--),n.splice(s--,1);if(e.unique)break}}return this},has:function(e){if(n){var t=0,r=n.length;for(;t<r;t++)if(e===n[t])return!0}return!1},empty:function(){return n=[],this},disable:function(){return n=r=i=t,this},disabled:function(){return!n},lock:function(){return r=t,(!i||i===!0)&&v.disable(),this},locked:function(){return!r},fireWith:function(t,n){return r&&(f?e.once||r.push([t,n]):(!e.once||!i)&&d(t,n)),this},fire:function(){return v.fireWith(this,arguments),this},fired:function(){return!!a}};return v};var a=[].slice;s.extend({Deferred:function(e){var t=s.Callbacks("once memory"),n=s.Callbacks("once memory"),r=s.Callbacks("memory"),i="pending",o={resolve:t,reject:n,notify:r},u={done:t.add,fail:n.add,progress:r.add,state:function(){return i},isResolved:t.fired,isRejected:n.fired,then:function(e,t,n){return a.done(e).fail(t).progress(n),this},always:function(){return a.done.apply(a,arguments).fail.apply(a,arguments),this},pipe:function(e,t,n){return s.Deferred(function(r){s.each({done:[e,"resolve"],fail:[t,"reject"],progress:[n,"notify"]},function(e,t){var n=t[0],i=t[1],o;s.isFunction(n)?a[e](function(){o=n.apply(this,arguments),o&&s.isFunction(o.promise)?o.promise().then(r.resolve,r.reject,r.notify):r[i+"With"](this===a?r:this,[o])}):a[e](r[i])})}).promise()},promise:function(e){if(e==null)e=u;else for(var t in u)e[t]=u[t];return e}},a=u.promise({}),f;for(f in o)a[f]=o[f].fire,a[f+"With"]=o[f].fireWith;return a.done(function(){i="resolved"},n.disable,r.lock).fail(function(){i="rejected"},t.disable,r.lock),e&&e.call(a,a),a},when:function(e){function c(e){return function(n){t[e]=arguments.length>1?a.call(arguments,0):n,--o||f.resolveWith(f,t)}}function h(e){return function(t){i[e]=arguments.length>1?a.call(arguments,0):t,f.notifyWith(l,i)}}var t=a.call(arguments,0),n=0,r=t.length,i=Array(r),o=r,u=r,f=r<=1&&e&&s.isFunction(e.promise)?e:s.Deferred(),l=f.promise();if(r>1){for(;n<r;n++)t[n]&&t[n].promise&&s.isFunction(t[n].promise)?t[n].promise().then(c(n),f.reject,h(n)):--o;o||f.resolveWith(f,t)}else f!==e&&f.resolveWith(f,r?[e]:[]);return l}}),s.support=function(){var t,r,i,o,u,a,f,l,c,h,p,d,v=n.createElement("div"),m=n.documentElement;v.setAttribute("className","t"),v.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",r=v.getElementsByTagName("*"),i=v.getElementsByTagName("a")[0];if(!r||!r.length||!i)return{};o=n.createElement("select"),u=o.appendChild(n.createElement("option")),a=v.getElementsByTagName("input")[0],t={leadingWhitespace:v.firstChild.nodeType===3,tbody:!v.getElementsByTagName("tbody").length,htmlSerialize:!!v.getElementsByTagName("link").length,style:/top/.test(i.getAttribute("style")),hrefNormalized:i.getAttribute("href")==="/a",opacity:/^0.55/.test(i.style.opacity),cssFloat:!!i.style.cssFloat,checkOn:a.value==="on",optSelected:u.selected,getSetAttribute:v.className!=="t",enctype:!!n.createElement("form").enctype,html5Clone:n.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,pixelMargin:!0},s.boxModel=t.boxModel=n.compatMode==="CSS1Compat",a.checked=!0,t.noCloneChecked=a.cloneNode(!0).checked,o.disabled=!0,t.optDisabled=!u.disabled;try{delete v.test}catch(g){t.deleteExpando=!1}!v.addEventListener&&v.attachEvent&&v.fireEvent&&(v.attachEvent("onclick",function(){t.noCloneEvent=!1}),v.cloneNode(!0).fireEvent("onclick")),a=n.createElement("input"),a.value="t",a.setAttribute("type","radio"),t.radioValue=a.value==="t",a.setAttribute("checked","checked"),a.setAttribute("name","t"),v.appendChild(a),f=n.createDocumentFragment(),f.appendChild(v.lastChild),t.checkClone=f.cloneNode(!0).cloneNode(!0).lastChild.checked,t.appendChecked=a.checked,f.removeChild(a),f.appendChild(v);if(v.attachEvent)for(p in{submit:1,change:1,focusin:1})h="on"+p,d=h in v,d||(v.setAttribute(h,"return;"),d=typeof v[h]=="function"),t[p+"Bubbles"]=d;return f.removeChild(v),f=o=u=v=a=null,s(function(){var r,i,o,u,a,f,c,h,p,m,g,y,b,w=n.getElementsByTagName("body")[0];if(!w)return;h=1,b="padding:0;margin:0;border:",g="position:absolute;top:0;left:0;width:1px;height:1px;",y=b+"0;visibility:hidden;",p="style='"+g+b+"5px solid #000;",m="<div "+p+"display:block;'><div style='"+b+"0;display:block;overflow:hidden;'></div></div>"+"<table "+p+"' cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",r=n.createElement("div"),r.style.cssText=y+"width:0;height:0;position:static;top:0;margin-top:"+h+"px",w.insertBefore(r,w.firstChild),v=n.createElement("div"),r.appendChild(v),v.innerHTML="<table><tr><td style='"+b+"0;display:none'></td><td>t</td></tr></table>",l=v.getElementsByTagName("td"),d=l[0].offsetHeight===0,l[0].style.display="",l[1].style.display="none",t.reliableHiddenOffsets=d&&l[0].offsetHeight===0,e.getComputedStyle&&(v.innerHTML="",c=n.createElement("div"),c.style.width="0",c.style.marginRight="0",v.style.width="2px",v.appendChild(c),t.reliableMarginRight=(parseInt((e.getComputedStyle(c,null)||{marginRight:0}).marginRight,10)||0)===0),typeof v.style.zoom!="undefined"&&(v.innerHTML="",v.style.width=v.style.padding="1px",v.style.border=0,v.style.overflow="hidden",v.style.display="inline",v.style.zoom=1,t.inlineBlockNeedsLayout=v.offsetWidth===3,v.style.display="block",v.style.overflow="visible",v.innerHTML="<div style='width:5px;'></div>",t.shrinkWrapBlocks=v.offsetWidth!==3),v.style.cssText=g+y,v.innerHTML=m,i=v.firstChild,o=i.firstChild,a=i.nextSibling.firstChild.firstChild,f={doesNotAddBorder:o.offsetTop!==5,doesAddBorderForTableAndCells:a.offsetTop===5},o.style.position="fixed",o.style.top="20px",f.fixedPosition=o.offsetTop===20||o.offsetTop===15,o.style.position=o.style.top="",i.style.overflow="hidden",i.style.position="relative",f.subtractsBorderForOverflowNotVisible=o.offsetTop===-5,f.doesNotIncludeMarginInBodyOffset=w.offsetTop!==h,e.getComputedStyle&&(v.style.marginTop="1%",t.pixelMargin=(e.getComputedStyle(v,null)||{marginTop:0}).marginTop!=="1%"),typeof r.style.zoom!="undefined"&&(r.style.zoom=1),w.removeChild(r),c=v=r=null,s.extend(t,f)}),t}();var f=/^(?:\{.*\}|\[.*\])$/,l=/([A-Z])/g;s.extend({cache:{},uuid:0,expando:"jQuery"+(s.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?s.cache[e[s.expando]]:e[s.expando],!!e&&!h(e)},data:function(e,n,r,i){if(!s.acceptData(e))return;var o,u,a,f=s.expando,l=typeof n=="string",c=e.nodeType,h=c?s.cache:e,p=c?e[f]:e[f]&&f,d=n==="events";if((!p||!h[p]||!d&&!i&&!h[p].data)&&l&&r===t)return;p||(c?e[f]=p=++s.uuid:p=f),h[p]||(h[p]={},c||(h[p].toJSON=s.noop));if(typeof n=="object"||typeof n=="function")i?h[p]=s.extend(h[p],n):h[p].data=s.extend(h[p].data,n);return o=u=h[p],i||(u.data||(u.data={}),u=u.data),r!==t&&(u[s.camelCase(n)]=r),d&&!u[n]?o.events:(l?(a=u[n],a==null&&(a=u[s.camelCase(n)])):a=u,a)},removeData:function(e,t,n){if(!s.acceptData(e))return;var r,i,o,u=s.expando,a=e.nodeType,f=a?s.cache:e,l=a?e[u]:u;if(!f[l])return;if(t){r=n?f[l]:f[l].data;if(r){s.isArray(t)||(t in r?t=[t]:(t=s.camelCase(t),t in r?t=[t]:t=t.split(" ")));for(i=0,o=t.length;i<o;i++)delete r[t[i]];if(!(n?h:s.isEmptyObject)(r))return}}if(!n){delete f[l].data;if(!h(f[l]))return}s.support.deleteExpando||!f.setInterval?delete f[l]:f[l]=null,a&&(s.support.deleteExpando?delete e[u]:e.removeAttribute?e.removeAttribute(u):e[u]=null)},_data:function(e,t,n){return s.data(e,t,n,!0)},acceptData:function(e){if(e.nodeName){var t=s.noData[e.nodeName.toLowerCase()];if(t)return t!==!0&&e.getAttribute("classid")===t}return!0}}),s.fn.extend({data:function(e,n){var r,i,o,u,a,f=this[0],l=0,h=null;if(e===t){if(this.length){h=s.data(f);if(f.nodeType===1&&!s._data(f,"parsedAttrs")){o=f.attributes;for(a=o.length;l<a;l++)u=o[l].name,u.indexOf("data-")===0&&(u=s.camelCase(u.substring(5)),c(f,u,h[u]));s._data(f,"parsedAttrs",!0)}}return h}return typeof e=="object"?this.each(function(){s.data(this,e)}):(r=e.split(".",2),r[1]=r[1]?"."+r[1]:"",i=r[1]+"!",s.access(this,function(n){if(n===t)return h=this.triggerHandler("getData"+i,[r[0]]),h===t&&f&&(h=s.data(f,e),h=c(f,e,h)),h===t&&r[1]?this.data(r[0]):h;r[1]=n,this.each(function(){var t=s(this);t.triggerHandler("setData"+i,r),s.data(this,e,n),t.triggerHandler("changeData"+i,r)})},null,n,arguments.length>1,null,!1))},removeData:function(e){return this.each(function(){s.removeData(this,e)})}}),s.extend({_mark:function(e,t){e&&(t=(t||"fx")+"mark",s._data(e,t,(s._data(e,t)||0)+1))},_unmark:function(e,t,n){e!==!0&&(n=t,t=e,e=!1);if(t){n=n||"fx";var r=n+"mark",i=e?0:(s._data(t,r)||1)-1;i?s._data(t,r,i):(s.removeData(t,r,!0),p(t,n,"mark"))}},queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=s._data(e,t),n&&(!r||s.isArray(n)?r=s._data(e,t,s.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=s.queue(e,t),r=n.shift(),i={};r==="inprogress"&&(r=n.shift()),r&&(t==="fx"&&n.unshift("inprogress"),s._data(e,t+".run",i),r.call(e,function(){s.dequeue(e,t)},i)),n.length||(s.removeData(e,t+"queue "+t+".run",!0),p(e,t,"queue"))}}),s.fn.extend({queue:function(e,n){var r=2;return typeof e!="string"&&(n=e,e="fx",r--),arguments.length<r?s.queue(this[0],e):n===t?this:this.each(function(){var t=s.queue(this,e,n);e==="fx"&&t[0]!=="inprogress"&&s.dequeue(this,e)})},dequeue:function(e){return this.each(function(){s.dequeue(this,e)})},delay:function(e,t){return e=s.fx?s.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){function h(){--u||r.resolveWith(i,[i])}typeof e!="string"&&(n=e,e=t),e=e||"fx";var r=s.Deferred(),i=this,o=i.length,u=1,a=e+"defer",f=e+"queue",l=e+"mark",c;while(o--)if(c=s.data(i[o],a,t,!0)||(s.data(i[o],f,t,!0)||s.data(i[o],l,t,!0))&&s.data(i[o],a,s.Callbacks("once memory"),!0))u++,c.add(h);return h(),r.promise(n)}});var d=/[\n\t\r]/g,v=/\s+/,m=/\r/g,g=/^(?:button|input)$/i,y=/^(?:button|input|object|select|textarea)$/i,b=/^a(?:rea)?$/i,w=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,E=s.support.getSetAttribute,S,x,T;s.fn.extend({attr:function(e,t){return s.access(this,s.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){s.removeAttr(this,e)})},prop:function(e,t){return s.access(this,s.prop,e,t,arguments.length>1)},removeProp:function(e){return e=s.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,u,a;if(s.isFunction(e))return this.each(function(t){s(this).addClass(e.call(this,t,this.className))});if(e&&typeof e=="string"){t=e.split(v);for(n=0,r=this.length;n<r;n++){i=this[n];if(i.nodeType===1)if(!i.className&&t.length===1)i.className=e;else{o=" "+i.className+" ";for(u=0,a=t.length;u<a;u++)~o.indexOf(" "+t[u]+" ")||(o+=t[u]+" ");i.className=s.trim(o)}}}return this},removeClass:function(e){var n,r,i,o,u,a,f;if(s.isFunction(e))return this.each(function(t){s(this).removeClass(e.call(this,t,this.className))});if(e&&typeof e=="string"||e===t){n=(e||"").split(v);for(r=0,i=this.length;r<i;r++){o=this[r];if(o.nodeType===1&&o.className)if(e){u=(" "+o.className+" ").replace(d," ");for(a=0,f=n.length;a<f;a++)u=u.replace(" "+n[a]+" "," ");o.className=s.trim(u)}else o.className=""}}return this},toggleClass:function(e,t){var n=typeof e,r=typeof t=="boolean";return s.isFunction(e)?this.each(function(n){s(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if(n==="string"){var i,o=0,u=s(this),a=t,f=e.split(v);while(i=f[o++])a=r?a:!u.hasClass(i),u[a?"addClass":"removeClass"](i)}else if(n==="undefined"||n==="boolean")this.className&&s._data(this,"__className__",this.className),this.className=this.className||e===!1?"":s._data(this,"__className__")||""})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;n<r;n++)if(this[n].nodeType===1&&(" "+this[n].className+" ").replace(d," ").indexOf(t)>-1)return!0;return!1},val:function(e){var n,r,i,o=this[0];if(!arguments.length){if(o)return n=s.valHooks[o.type]||s.valHooks[o.nodeName.toLowerCase()],n&&"get"in n&&(r=n.get(o,"value"))!==t?r:(r=o.value,typeof r=="string"?r.replace(m,""):r==null?"":r);return}return i=s.isFunction(e),this.each(function(r){var o=s(this),u;if(this.nodeType!==1)return;i?u=e.call(this,r,o.val()):u=e,u==null?u="":typeof u=="number"?u+="":s.isArray(u)&&(u=s.map(u,function(e){return e==null?"":e+""})),n=s.valHooks[this.type]||s.valHooks[this.nodeName.toLowerCase()];if(!n||!("set"in n)||n.set(this,u,"value")===t)this.value=u})}}),s.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r,i,o=e.selectedIndex,u=[],a=e.options,f=e.type==="select-one";if(o<0)return null;n=f?o:0,r=f?o+1:a.length;for(;n<r;n++){i=a[n];if(i.selected&&(s.support.optDisabled?!i.disabled:i.getAttribute("disabled")===null)&&(!i.parentNode.disabled||!s.nodeName(i.parentNode,"optgroup"))){t=s(i).val();if(f)return t;u.push(t)}}return f&&!u.length&&a.length?s(a[o]).val():u},set:function(e,t){var n=s.makeArray(t);return s(e).find("option").each(function(){this.selected=s.inArray(s(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(e,n,r,i){var o,u,a,f=e.nodeType;if(!e||f===3||f===8||f===2)return;if(i&&n in s.attrFn)return s(e)[n](r);if(typeof e.getAttribute=="undefined")return s.prop(e,n,r);a=f!==1||!s.isXMLDoc(e),a&&(n=n.toLowerCase(),u=s.attrHooks[n]||(w.test(n)?x:S));if(r!==t){if(r===null){s.removeAttr(e,n);return}return u&&"set"in u&&a&&(o=u.set(e,r,n))!==t?o:(e.setAttribute(n,""+r),r)}return u&&"get"in u&&a&&(o=u.get(e,n))!==null?o:(o=e.getAttribute(n),o===null?t:o)},removeAttr:function(e,t){var n,r,i,o,u,a=0;if(t&&e.nodeType===1){r=t.toLowerCase().split(v),o=r.length;for(;a<o;a++)i=r[a],i&&(n=s.propFix[i]||i,u=w.test(i),u||s.attr(e,i,""),e.removeAttribute(E?i:n),u&&n in e&&(e[n]=!1))}},attrHooks:{type:{set:function(e,t){if(g.test(e.nodeName)&&e.parentNode)s.error("type property can't be changed");else if(!s.support.radioValue&&t==="radio"&&s.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}},value:{get:function(e,t){return S&&s.nodeName(e,"button")?S.get(e,t):t in e?e.value:null},set:function(e,t,n){if(S&&s.nodeName(e,"button"))return S.set(e,t,n);e.value=t}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,u,a=e.nodeType;if(!e||a===3||a===8||a===2)return;return u=a!==1||!s.isXMLDoc(e),u&&(n=s.propFix[n]||n,o=s.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&(i=o.get(e,n))!==null?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):y.test(e.nodeName)||b.test(e.nodeName)&&e.href?0:t}}}}),s.attrHooks.tabindex=s.propHooks.tabIndex,x={get:function(e,n){var r,i=s.prop(e,n);return i===!0||typeof i!="boolean"&&(r=e.getAttributeNode(n))&&r.nodeValue!==!1?n.toLowerCase():t},set:function(e,t,n){var r;return t===!1?s.removeAttr(e,n):(r=s.propFix[n]||n,r in e&&(e[r]=!0),e.setAttribute(n,n.toLowerCase())),n}},E||(T={name:!0,id:!0,coords:!0},S=s.valHooks.button={get:function(e,n){var r;return r=e.getAttributeNode(n),r&&(T[n]?r.nodeValue!=="":r.specified)?r.nodeValue:t},set:function(e,t,r){var i=e.getAttributeNode(r);return i||(i=n.createAttribute(r),e.setAttributeNode(i)),i.nodeValue=t+""}},s.attrHooks.tabindex.set=S.set,s.each(["width","height"],function(e,t){s.attrHooks[t]=s.extend(s.attrHooks[t],{set:function(e,n){if(n==="")return e.setAttribute(t,"auto"),n}})}),s.attrHooks.contenteditable={get:S.get,set:function(e,t,n){t===""&&(t="false"),S.set(e,t,n)}}),s.support.hrefNormalized||s.each(["href","src","width","height"],function(e,n){s.attrHooks[n]=s.extend(s.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return r===null?t:r}})}),s.support.style||(s.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||t},set:function(e,t){return e.style.cssText=""+t}}),s.support.optSelected||(s.propHooks.selected=s.extend(s.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),s.support.enctype||(s.propFix.enctype="encoding"),s.support.checkOn||s.each(["radio","checkbox"],function(){s.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value}}}),s.each(["radio","checkbox"],function(){s.valHooks[this]=s.extend(s.valHooks[this],{set:function(e,t){if(s.isArray(t))return e.checked=s.inArray(s(e).val(),t)>=0}})});var N=/^(?:textarea|input|select)$/i,C=/^([^\.]*)?(?:\.(.+))?$/,k=/(?:^|\s)hover(\.\S+)?\b/,L=/^key/,A=/^(?:mouse|contextmenu)|click/,O=/^(?:focusinfocus|focusoutblur)$/,M=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,_=function(e){var t=M.exec(e);return t&&(t[1]=(t[1]||"").toLowerCase(
),t[3]=t[3]&&RegExp("(?:^|\\s)"+t[3]+"(?:\\s|$)")),t},D=function(e,t){var n=e.attributes||{};return(!t[1]||e.nodeName.toLowerCase()===t[1])&&(!t[2]||(n.id||{}).value===t[2])&&(!t[3]||t[3].test((n["class"]||{}).value))},P=function(e){return s.event.special.hover?e:e.replace(k,"mouseenter$1 mouseleave$1")};s.event={add:function(e,n,r,i,o){var u,a,f,l,c,h,p,d,v,m,g,y;if(e.nodeType===3||e.nodeType===8||!n||!r||!(u=s._data(e)))return;r.handler&&(v=r,r=v.handler,o=v.selector),r.guid||(r.guid=s.guid++),f=u.events,f||(u.events=f={}),a=u.handle,a||(u.handle=a=function(e){return typeof s=="undefined"||!!e&&s.event.triggered===e.type?t:s.event.dispatch.apply(a.elem,arguments)},a.elem=e),n=s.trim(P(n)).split(" ");for(l=0;l<n.length;l++){c=C.exec(n[l])||[],h=c[1],p=(c[2]||"").split(".").sort(),y=s.event.special[h]||{},h=(o?y.delegateType:y.bindType)||h,y=s.event.special[h]||{},d=s.extend({type:h,origType:c[1],data:i,handler:r,guid:r.guid,selector:o,quick:o&&_(o),namespace:p.join(".")},v),g=f[h];if(!g){g=f[h]=[],g.delegateCount=0;if(!y.setup||y.setup.call(e,i,p,a)===!1)e.addEventListener?e.addEventListener(h,a,!1):e.attachEvent&&e.attachEvent("on"+h,a)}y.add&&(y.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),o?g.splice(g.delegateCount++,0,d):g.push(d),s.event.global[h]=!0}e=null},global:{},remove:function(e,t,n,r,i){var o=s.hasData(e)&&s._data(e),u,a,f,l,c,h,p,d,v,m,g,y;if(!o||!(d=o.events))return;t=s.trim(P(t||"")).split(" ");for(u=0;u<t.length;u++){a=C.exec(t[u])||[],f=l=a[1],c=a[2];if(!f){for(f in d)s.event.remove(e,f+t[u],n,r,!0);continue}v=s.event.special[f]||{},f=(r?v.delegateType:v.bindType)||f,g=d[f]||[],h=g.length,c=c?RegExp("(^|\\.)"+c.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(p=0;p<g.length;p++)y=g[p],(i||l===y.origType)&&(!n||n.guid===y.guid)&&(!c||c.test(y.namespace))&&(!r||r===y.selector||r==="**"&&y.selector)&&(g.splice(p--,1),y.selector&&g.delegateCount--,v.remove&&v.remove.call(e,y));g.length===0&&h!==g.length&&((!v.teardown||v.teardown.call(e,c)===!1)&&s.removeEvent(e,f,o.handle),delete d[f])}s.isEmptyObject(d)&&(m=o.handle,m&&(m.elem=null),s.removeData(e,["events","handle"],!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(n,r,i,o){if(!i||i.nodeType!==3&&i.nodeType!==8){var u=n.type||n,a=[],f,l,c,h,p,d,v,m,g,y;if(O.test(u+s.event.triggered))return;u.indexOf("!")>=0&&(u=u.slice(0,-1),l=!0),u.indexOf(".")>=0&&(a=u.split("."),u=a.shift(),a.sort());if((!i||s.event.customEvent[u])&&!s.event.global[u])return;n=typeof n=="object"?n[s.expando]?n:new s.Event(u,n):new s.Event(u),n.type=u,n.isTrigger=!0,n.exclusive=l,n.namespace=a.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+a.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,d=u.indexOf(":")<0?"on"+u:"";if(!i){f=s.cache;for(c in f)f[c].events&&f[c].events[u]&&s.event.trigger(n,r,f[c].handle.elem,!0);return}n.result=t,n.target||(n.target=i),r=r!=null?s.makeArray(r):[],r.unshift(n),v=s.event.special[u]||{};if(v.trigger&&v.trigger.apply(i,r)===!1)return;g=[[i,v.bindType||u]];if(!o&&!v.noBubble&&!s.isWindow(i)){y=v.delegateType||u,h=O.test(y+u)?i:i.parentNode,p=null;for(;h;h=h.parentNode)g.push([h,y]),p=h;p&&p===i.ownerDocument&&g.push([p.defaultView||p.parentWindow||e,y])}for(c=0;c<g.length&&!n.isPropagationStopped();c++)h=g[c][0],n.type=g[c][1],m=(s._data(h,"events")||{})[n.type]&&s._data(h,"handle"),m&&m.apply(h,r),m=d&&h[d],m&&s.acceptData(h)&&m.apply(h,r)===!1&&n.preventDefault();return n.type=u,!o&&!n.isDefaultPrevented()&&(!v._default||v._default.apply(i.ownerDocument,r)===!1)&&(u!=="click"||!s.nodeName(i,"a"))&&s.acceptData(i)&&d&&i[u]&&(u!=="focus"&&u!=="blur"||n.target.offsetWidth!==0)&&!s.isWindow(i)&&(p=i[d],p&&(i[d]=null),s.event.triggered=u,i[u](),s.event.triggered=t,p&&(i[d]=p)),n.result}return},dispatch:function(n){n=s.event.fix(n||e.event);var r=(s._data(this,"events")||{})[n.type]||[],i=r.delegateCount,o=[].slice.call(arguments,0),u=!n.exclusive&&!n.namespace,a=s.event.special[n.type]||{},f=[],l,c,h,p,d,v,m,g,y,b,w;o[0]=n,n.delegateTarget=this;if(a.preDispatch&&a.preDispatch.call(this,n)===!1)return;if(i&&(!n.button||n.type!=="click")){p=s(this),p.context=this.ownerDocument||this;for(h=n.target;h!=this;h=h.parentNode||this)if(h.disabled!==!0){v={},g=[],p[0]=h;for(l=0;l<i;l++)y=r[l],b=y.selector,v[b]===t&&(v[b]=y.quick?D(h,y.quick):p.is(b)),v[b]&&g.push(y);g.length&&f.push({elem:h,matches:g})}}r.length>i&&f.push({elem:this,matches:r.slice(i)});for(l=0;l<f.length&&!n.isPropagationStopped();l++){m=f[l],n.currentTarget=m.elem;for(c=0;c<m.matches.length&&!n.isImmediatePropagationStopped();c++){y=m.matches[c];if(u||!n.namespace&&!y.namespace||n.namespace_re&&n.namespace_re.test(y.namespace))n.data=y.data,n.handleObj=y,d=((s.event.special[y.origType]||{}).handle||y.handler).apply(m.elem,o),d!==t&&(n.result=d,d===!1&&(n.preventDefault(),n.stopPropagation()))}}return a.postDispatch&&a.postDispatch.call(this,n),n.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return e.which==null&&(e.which=t.charCode!=null?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,r){var i,s,o,u=r.button,a=r.fromElement;return e.pageX==null&&r.clientX!=null&&(i=e.target.ownerDocument||n,s=i.documentElement,o=i.body,e.pageX=r.clientX+(s&&s.scrollLeft||o&&o.scrollLeft||0)-(s&&s.clientLeft||o&&o.clientLeft||0),e.pageY=r.clientY+(s&&s.scrollTop||o&&o.scrollTop||0)-(s&&s.clientTop||o&&o.clientTop||0)),!e.relatedTarget&&a&&(e.relatedTarget=a===e.target?r.toElement:a),!e.which&&u!==t&&(e.which=u&1?1:u&2?3:u&4?2:0),e}},fix:function(e){if(e[s.expando])return e;var r,i,o=e,u=s.event.fixHooks[e.type]||{},a=u.props?this.props.concat(u.props):this.props;e=s.Event(o);for(r=a.length;r;)i=a[--r],e[i]=o[i];return e.target||(e.target=o.srcElement||n),e.target.nodeType===3&&(e.target=e.target.parentNode),e.metaKey===t&&(e.metaKey=e.ctrlKey),u.filter?u.filter(e,o):e},special:{ready:{setup:s.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(e,t,n){s.isWindow(this)&&(this.onbeforeunload=n)},teardown:function(e,t){this.onbeforeunload===t&&(this.onbeforeunload=null)}}},simulate:function(e,t,n,r){var i=s.extend(new s.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?s.event.trigger(i,null,t):s.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},s.event.handle=s.event.dispatch,s.removeEvent=n.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){e.detachEvent&&e.detachEvent("on"+t,n)},s.Event=function(e,t){if(!(this instanceof s.Event))return new s.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?B:H):this.type=e,t&&s.extend(this,t),this.timeStamp=e&&e.timeStamp||s.now(),this[s.expando]=!0},s.Event.prototype={preventDefault:function(){this.isDefaultPrevented=B;var e=this.originalEvent;if(!e)return;e.preventDefault?e.preventDefault():e.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=B;var e=this.originalEvent;if(!e)return;e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=B,this.stopPropagation()},isDefaultPrevented:H,isPropagationStopped:H,isImmediatePropagationStopped:H},s.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){s.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n=this,r=e.relatedTarget,i=e.handleObj,o=i.selector,u;if(!r||r!==n&&!s.contains(n,r))e.type=i.origType,u=i.handler.apply(this,arguments),e.type=t;return u}}}),s.support.submitBubbles||(s.event.special.submit={setup:function(){if(s.nodeName(this,"form"))return!1;s.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=s.nodeName(n,"input")||s.nodeName(n,"button")?n.form:t;r&&!r._submit_attached&&(s.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),r._submit_attached=!0)})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&s.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){if(s.nodeName(this,"form"))return!1;s.event.remove(this,"._submit")}}),s.support.changeBubbles||(s.event.special.change={setup:function(){if(N.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")s.event.add(this,"propertychange._change",function(e){e.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),s.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1,s.event.simulate("change",this,e,!0))});return!1}s.event.add(this,"beforeactivate._change",function(e){var t=e.target;N.test(t.nodeName)&&!t._change_attached&&(s.event.add(t,"change._change",function(e){this.parentNode&&!e.isSimulated&&!e.isTrigger&&s.event.simulate("change",this.parentNode,e,!0)}),t._change_attached=!0)})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||t.type!=="radio"&&t.type!=="checkbox")return e.handleObj.handler.apply(this,arguments)},teardown:function(){return s.event.remove(this,"._change"),N.test(this.nodeName)}}),s.support.focusinBubbles||s.each({focus:"focusin",blur:"focusout"},function(e,t){var r=0,i=function(e){s.event.simulate(t,e.target,s.event.fix(e),!0)};s.event.special[t]={setup:function(){r++===0&&n.addEventListener(e,i,!0)},teardown:function(){--r===0&&n.removeEventListener(e,i,!0)}}}),s.fn.extend({on:function(e,n,r,i,o){var u,a;if(typeof e=="object"){typeof n!="string"&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}r==null&&i==null?(i=n,r=n=t):i==null&&(typeof n=="string"?(i=r,r=t):(i=r,r=n,n=t));if(i===!1)i=H;else if(!i)return this;return o===1&&(u=i,i=function(e){return s().off(e),u.apply(this,arguments)},i.guid=u.guid||(u.guid=s.guid++)),this.each(function(){s.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){if(e&&e.preventDefault&&e.handleObj){var i=e.handleObj;return s(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this}if(typeof e=="object"){for(var o in e)this.off(o,n,e[o]);return this}if(n===!1||typeof n=="function")r=n,n=t;return r===!1&&(r=H),this.each(function(){s.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},live:function(e,t,n){return s(this.context).on(e,this.selector,t,n),this},die:function(e,t){return s(this.context).off(e,this.selector||"**",t),this},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return arguments.length==1?this.off(e,"**"):this.off(t,e,n)},trigger:function(e,t){return this.each(function(){s.event.trigger(e,t,this)})},triggerHandler:function(e,t){if(this[0])return s.event.trigger(e,t,this[0],!0)},toggle:function(e){var t=arguments,n=e.guid||s.guid++,r=0,i=function(n){var i=(s._data(this,"lastToggle"+e.guid)||0)%r;return s._data(this,"lastToggle"+e.guid,i+1),n.preventDefault(),t[i].apply(this,arguments)||!1};i.guid=n;while(r<t.length)t[r++].guid=n;return this.click(i)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),s.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){s.fn[t]=function(e,n){return n==null&&(n=e,e=null),arguments.length>0?this.on(t,null,e,n):this.trigger(t)},s.attrFn&&(s.attrFn[t]=!0),L.test(t)&&(s.event.fixHooks[t]=s.event.keyHooks),A.test(t)&&(s.event.fixHooks[t]=s.event.mouseHooks)}),function(){function S(e,t,n,i,s,o){for(var u=0,a=i.length;u<a;u++){var f=i[u];if(f){var l=!1;f=f[e];while(f){if(f[r]===n){l=i[f.sizset];break}f.nodeType===1&&!o&&(f[r]=n,f.sizset=u);if(f.nodeName.toLowerCase()===t){l=f;break}f=f[e]}i[u]=l}}}function x(e,t,n,i,s,o){for(var u=0,a=i.length;u<a;u++){var f=i[u];if(f){var l=!1;f=f[e];while(f){if(f[r]===n){l=i[f.sizset];break}if(f.nodeType===1){o||(f[r]=n,f.sizset=u);if(typeof t!="string"){if(f===t){l=!0;break}}else if(h.filter(t,[f]).length>0){l=f;break}}f=f[e]}i[u]=l}}}var e=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,r="sizcache"+(Math.random()+"").replace(".",""),i=0,o=Object.prototype.toString,u=!1,a=!0,f=/\\/g,l=/\r\n/g,c=/\W/;[0,0].sort(function(){return a=!1,0});var h=function(t,r,i,s){i=i||[],r=r||n;var u=r;if(r.nodeType!==1&&r.nodeType!==9)return[];if(!t||typeof t!="string")return i;var a,f,l,c,p,m,g,b,w=!0,E=h.isXML(r),S=[],x=t;do{e.exec(""),a=e.exec(x);if(a){x=a[3],S.push(a[1]);if(a[2]){c=a[3];break}}}while(a);if(S.length>1&&v.exec(t))if(S.length===2&&d.relative[S[0]])f=T(S[0]+S[1],r,s);else{f=d.relative[S[0]]?[r]:h(S.shift(),r);while(S.length)t=S.shift(),d.relative[t]&&(t+=S.shift()),f=T(t,f,s)}else{!s&&S.length>1&&r.nodeType===9&&!E&&d.match.ID.test(S[0])&&!d.match.ID.test(S[S.length-1])&&(p=h.find(S.shift(),r,E),r=p.expr?h.filter(p.expr,p.set)[0]:p.set[0]);if(r){p=s?{expr:S.pop(),set:y(s)}:h.find(S.pop(),S.length!==1||S[0]!=="~"&&S[0]!=="+"||!r.parentNode?r:r.parentNode,E),f=p.expr?h.filter(p.expr,p.set):p.set,S.length>0?l=y(f):w=!1;while(S.length)m=S.pop(),g=m,d.relative[m]?g=S.pop():m="",g==null&&(g=r),d.relative[m](l,g,E)}else l=S=[]}l||(l=f),l||h.error(m||t);if(o.call(l)==="[object Array]")if(!w)i.push.apply(i,l);else if(r&&r.nodeType===1)for(b=0;l[b]!=null;b++)l[b]&&(l[b]===!0||l[b].nodeType===1&&h.contains(r,l[b]))&&i.push(f[b]);else for(b=0;l[b]!=null;b++)l[b]&&l[b].nodeType===1&&i.push(f[b]);else y(l,i);return c&&(h(c,u,i,s),h.uniqueSort(i)),i};h.uniqueSort=function(e){if(w){u=a,e.sort(w);if(u)for(var t=1;t<e.length;t++)e[t]===e[t-1]&&e.splice(t--,1)}return e},h.matches=function(e,t){return h(e,null,null,t)},h.matchesSelector=function(e,t){return h(t,null,null,[e]).length>0},h.find=function(e,t,n){var r,i,s,o,u,a;if(!e)return[];for(i=0,s=d.order.length;i<s;i++){u=d.order[i];if(o=d.leftMatch[u].exec(e)){a=o[1],o.splice(1,1);if(a.substr(a.length-1)!=="\\"){o[1]=(o[1]||"").replace(f,""),r=d.find[u](o,t,n);if(r!=null){e=e.replace(d.match[u],"");break}}}}return r||(r=typeof t.getElementsByTagName!="undefined"?t.getElementsByTagName("*"):[]),{set:r,expr:e}},h.filter=function(e,n,r,i){var s,o,u,a,f,l,c,p,v,m=e,g=[],y=n,b=n&&n[0]&&h.isXML(n[0]);while(e&&n.length){for(u in d.filter)if((s=d.leftMatch[u].exec(e))!=null&&s[2]){l=d.filter[u],c=s[1],o=!1,s.splice(1,1);if(c.substr(c.length-1)==="\\")continue;y===g&&(g=[]);if(d.preFilter[u]){s=d.preFilter[u](s,y,r,g,i,b);if(!s)o=a=!0;else if(s===!0)continue}if(s)for(p=0;(f=y[p])!=null;p++)f&&(a=l(f,s,p,y),v=i^a,r&&a!=null?v?o=!0:y[p]=!1:v&&(g.push(f),o=!0));if(a!==t){r||(y=g),e=e.replace(d.match[u],"");if(!o)return[];break}}if(e===m){if(o!=null)break;h.error(e)}m=e}return y},h.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)};var p=h.getText=function(e){var t,n,r=e.nodeType,i="";if(r){if(r===1||r===9||r===11){if(typeof e.textContent=="string")return e.textContent;if(typeof e.innerText=="string")return e.innerText.replace(l,"");for(e=e.firstChild;e;e=e.nextSibling)i+=p(e)}else if(r===3||r===4)return e.nodeValue}else for(t=0;n=e[t];t++)n.nodeType!==8&&(i+=p(n));return i},d=h.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(e){return e.getAttribute("href")},type:function(e){return e.getAttribute("type")}},relative:{"+":function(e,t){var n=typeof t=="string",r=n&&!c.test(t),i=n&&!r;r&&(t=t.toLowerCase());for(var s=0,o=e.length,u;s<o;s++)if(u=e[s]){while((u=u.previousSibling)&&u.nodeType!==1);e[s]=i||u&&u.nodeName.toLowerCase()===t?u||!1:u===t}i&&h.filter(t,e,!0)},">":function(e,t){var n,r=typeof t=="string",i=0,s=e.length;if(r&&!c.test(t)){t=t.toLowerCase();for(;i<s;i++){n=e[i];if(n){var o=n.parentNode;e[i]=o.nodeName.toLowerCase()===t?o:!1}}}else{for(;i<s;i++)n=e[i],n&&(e[i]=r?n.parentNode:n.parentNode===t);r&&h.filter(t,e,!0)}},"":function(e,t,n){var r,s=i++,o=x;typeof t=="string"&&!c.test(t)&&(t=t.toLowerCase(),r=t,o=S),o("parentNode",t,s,e,r,n)},"~":function(e,t,n){var r,s=i++,o=x;typeof t=="string"&&!c.test(t)&&(t=t.toLowerCase(),r=t,o=S),o("previousSibling",t,s,e,r,n)}},find:{ID:function(e,t,n){if(typeof t.getElementById!="undefined"&&!n){var r=t.getElementById(e[1]);return r&&r.parentNode?[r]:[]}},NAME:function(e,t){if(typeof t.getElementsByName!="undefined"){var n=[],r=t.getElementsByName(e[1]);for(var i=0,s=r.length;i<s;i++)r[i].getAttribute("name")===e[1]&&n.push(r[i]);return n.length===0?null:n}},TAG:function(e,t){if(typeof t.getElementsByTagName!="undefined")return t.getElementsByTagName(e[1])}},preFilter:{CLASS:function(e,t,n,r,i,s){e=" "+e[1].replace(f,"")+" ";if(s)return e;for(var o=0,u;(u=t[o])!=null;o++)u&&(i^(u.className&&(" "+u.className+" ").replace(/[\t\n\r]/g," ").indexOf(e)>=0)?n||r.push(u):n&&(t[o]=!1));return!1},ID:function(e){return e[1].replace(f,"")},TAG:function(e,t){return e[1].replace(f,"").toLowerCase()},CHILD:function(e){if(e[1]==="nth"){e[2]||h.error(e[0]),e[2]=e[2].replace(/^\+|\s*/g,"");var t=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(e[2]==="even"&&"2n"||e[2]==="odd"&&"2n+1"||!/\D/.test(e[2])&&"0n+"+e[2]||e[2]);e[2]=t[1]+(t[2]||1)-0,e[3]=t[3]-0}else e[2]&&h.error(e[0]);return e[0]=i++,e},ATTR:function(e,t,n,r,i,s){var o=e[1]=e[1].replace(f,"");return!s&&d.attrMap[o]&&(e[1]=d.attrMap[o]),e[4]=(e[4]||e[5]||"").replace(f,""),e[2]==="~="&&(e[4]=" "+e[4]+" "),e},PSEUDO:function(t,n,r,i,s){if(t[1]==="not"){if((e.exec(t[3])||"").length<=1&&!/^\w/.test(t[3])){var o=h.filter(t[3],n,r,!0^s);return r||i.push.apply(i,o),!1}t[3]=h(t[3],null,null,n)}else if(d.match.POS.test(t[0])||d.match.CHILD.test(t[0]))return!0;return t},POS:function(e){return e.unshift(!0),e}},filters:{enabled:function(e){return e.disabled===!1&&e.type!=="hidden"},disabled:function(e){return e.disabled===!0},checked:function(e){return e.checked===!0},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},parent:function(e){return!!e.firstChild},empty:function(e){return!e.firstChild},has:function(e,t,n){return!!h(n[3],e).length},header:function(e){return/h\d/i.test(e.nodeName)},text:function(e){var t=e.getAttribute("type"),n=e.type;return e.nodeName.toLowerCase()==="input"&&"text"===n&&(t===n||t===null)},radio:function(e){return e.nodeName.toLowerCase()==="input"&&"radio"===e.type},checkbox:function(e){return e.nodeName.toLowerCase()==="input"&&"checkbox"===e.type},file:function(e){return e.nodeName.toLowerCase()==="input"&&"file"===e.type},password:function(e){return e.nodeName.toLowerCase()==="input"&&"password"===e.type},submit:function(e){var t=e.nodeName.toLowerCase();return(t==="input"||t==="button")&&"submit"===e.type},image:function(e){return e.nodeName.toLowerCase()==="input"&&"image"===e.type},reset:function(e){var t=e.nodeName.toLowerCase();return(t==="input"||t==="button")&&"reset"===e.type},button:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&"button"===e.type||t==="button"},input:function(e){return/input|select|textarea|button/i.test(e.nodeName)},focus:function(e){return e===e.ownerDocument.activeElement}},setFilters:{first:function(e,t){return t===0},last:function(e,t,n,r){return t===r.length-1},even:function(e,t){return t%2===0},odd:function(e,t){return t%2===1},lt:function(e,t,n){return t<n[3]-0},gt:function(e,t,n){return t>n[3]-0},nth:function(e,t,n){return n[3]-0===t},eq:function(e,t,n){return n[3]-0===t}},filter:{PSEUDO:function(e,t,n,r){var i=t[1],s=d.filters[i];if(s)return s(e,n,t,r);if(i==="contains")return(e.textContent||e.innerText||p([e])||"").indexOf(t[3])>=0;if(i==="not"){var o=t[3];for(var u=0,a=o.length;u<a;u++)if(o[u]===e)return!1;return!0}h.error(i)},CHILD:function(e,t){var n,i,s,o,u,a,f,l=t[1],c=e;switch(l){case"only":case"first":while(c=c.previousSibling)if(c.nodeType===1)return!1;if(l==="first")return!0;c=e;case"last":while(c=c.nextSibling)if(c.nodeType===1)return!1;return!0;case"nth":n=t[2],i=t[3];if(n===1&&i===0)return!0;s=t[0],o=e.parentNode;if(o&&(o[r]!==s||!e.nodeIndex)){a=0;for(c=o.firstChild;c;c=c.nextSibling)c.nodeType===1&&(c.nodeIndex=++a);o[r]=s}return f=e.nodeIndex-i,n===0?f===0:f%n===0&&f/n>=0}},ID:function(e,t){return e.nodeType===1&&e.getAttribute("id")===t},TAG:function(e,t){return t==="*"&&e.nodeType===1||!!e.nodeName&&e.nodeName.toLowerCase()===t},CLASS:function(e,t){return(" "+(e.className||e.getAttribute("class"))+" ").indexOf(t)>-1},ATTR:function(e,t){var n=t[1],r=h.attr?h.attr(e,n):d.attrHandle[n]?d.attrHandle[n](e):e[n]!=null?e[n]:e.getAttribute(n),i=r+"",s=t[2],o=t[4];return r==null?s==="!=":!s&&h.attr?r!=null:s==="="?i===o:s==="*="?i.indexOf(o)>=0:s==="~="?(" "+i+" ").indexOf(o)>=0:o?s==="!="?i!==o:s==="^="?i.indexOf(o)===0:s==="$="?i.substr(i.length-o.length)===o:s==="|="?i===o||i.substr(0,o.length+1)===o+"-":!1:i&&r!==!1},POS:function(e,t,n,r){var i=t[2],s=d.setFilters[i];if(s)return s(e,n,t,r)}}},v=d.match.POS,m=function(e,t){return"\\"+(t-0+1)};for(var g in d.match)d.match[g]=RegExp(d.match[g].source+/(?![^\[]*\])(?![^\(]*\))/.source),d.leftMatch[g]=RegExp(/(^(?:.|\r|\n)*?)/.source+d.match[g].source.replace(/\\(\d+)/g,m));d.match.globalPOS=v;var y=function(e,t){return e=Array.prototype.slice.call(e,0),t?(t.push.apply(t,e),t):e};try{Array.prototype.slice.call(n.documentElement.childNodes,0)[0].nodeType}catch(b){y=function(e,t){var n=0,r=t||[];if(o.call(e)==="[object Array]")Array.prototype.push.apply(r,e);else if(typeof e.length=="number")for(var i=e.length;n<i;n++)r.push(e[n]);else for(;e[n];n++)r.push(e[n]);return r}}var w,E;n.documentElement.compareDocumentPosition?w=function(e,t){return e===t?(u=!0,0):!e.compareDocumentPosition||!t.compareDocumentPosition?e.compareDocumentPosition?-1:1:e.compareDocumentPosition(t)&4?-1:1}:(w=function(e,t){if(e===t)return u=!0,0;if(e.sourceIndex&&t.sourceIndex)return e.sourceIndex-t.sourceIndex;var n,r,i=[],s=[],o=e.parentNode,a=t.parentNode,f=o;if(o===a)return E(e,t);if(!o)return-1;if(!a)return 1;while(f)i.unshift(f),f=f.parentNode;f=a;while(f)s.unshift(f),f=f.parentNode;n=i.length,r=s.length;for(var l=0;l<n&&l<r;l++)if(i[l]!==s[l])return E(i[l],s[l]);return l===n?E(e,s[l],-1):E(i[l],t,1)},E=function(e,t,n){if(e===t)return n;var r=e.nextSibling;while(r){if(r===t)return-1;r=r.nextSibling}return 1}),function(){var e=n.createElement("div"),r="script"+(new Date).getTime(),i=n.documentElement;e.innerHTML="<a name='"+r+"'/>",i.insertBefore(e,i.firstChild),n.getElementById(r)&&(d.find.ID=function(e,n,r){if(typeof n.getElementById!="undefined"&&!r){var i=n.getElementById(e[1]);return i?i.id===e[1]||typeof i.getAttributeNode!="undefined"&&i.getAttributeNode("id").nodeValue===e[1]?[i]:t:[]}},d.filter.ID=function(e,t){var n=typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id");return e.nodeType===1&&n&&n.nodeValue===t}),i.removeChild(e),i=e=null}(),function(){var e=n.createElement("div");e.appendChild(n.createComment("")),e.getElementsByTagName("*").length>0&&(d.find.TAG=function(e,t){var n=t.getElementsByTagName(e[1]);if(e[1]==="*"){var r=[];for(var i=0;n[i];i++)n[i].nodeType===1&&r.push(n[i]);n=r}return n}),e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!="undefined"&&e.firstChild.getAttribute("href")!=="#"&&(d.attrHandle.href=function(e){return e.getAttribute("href",2)}),e=null}(),n.querySelectorAll&&function(){var e=h,t=n.createElement("div"),r="__sizzle__";t.innerHTML="<p class='TEST'></p>";if(t.querySelectorAll&&t.querySelectorAll(".TEST").length===0)return;h=function(t,i,s,o){i=i||n;if(!o&&!h.isXML(i)){var u=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(t);if(u&&(i.nodeType===1||i.nodeType===9)){if(u[1])return y(i.getElementsByTagName(t),s);if(u[2]&&d.find.CLASS&&i.getElementsByClassName)return y(i.getElementsByClassName(u[2]),s)}if(i.nodeType===9){if(t==="body"&&i.body)return y([i.body],s);if(u&&u[3]){var a=i.getElementById(u[3]);if(!a||!a.parentNode)return y([],s);if(a.id===u[3])return y([a],s)}try{return y(i.querySelectorAll(t),s)}catch(f){}}else if(i.nodeType===1&&i.nodeName.toLowerCase()!=="object"){var l=i,c=i.getAttribute("id"),p=c||r,v=i.parentNode,m=/^\s*[+~]/.test(t);c?p=p.replace(/'/g,"\\$&"):i.setAttribute("id",p),m&&v&&(i=i.parentNode);try{if(!m||v)return y(i.querySelectorAll("[id='"+p+"'] "+t),s)}catch(g){}finally{c||l.removeAttribute("id")}}}return e(t,i,s,o)};for(var i in e)h[i]=e[i];t=null}(),function(){var e=n.documentElement,t=e.matchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.msMatchesSelector;if(t){var r=!t.call(n.createElement("div"),"div"),i=!1;try{t.call(n.documentElement,"[test!='']:sizzle")}catch(s){i=!0}h.matchesSelector=function(e,n){n=n.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!h.isXML(e))try{if(i||!d.match.PSEUDO.test(n)&&!/!=/.test(n)){var s=t.call(e,n);if(s||!r||e.document&&e.document.nodeType!==11)return s}}catch(o){}return h(n,null,null,[e]).length>0}}}(),function(){var e=n.createElement("div");e.innerHTML="<div class='test e'></div><div class='test'></div>";if(!e.getElementsByClassName||e.getElementsByClassName("e").length===0)return;e.lastChild.className="e";if(e.getElementsByClassName("e").length===1)return;d.order.splice(1,0,"CLASS"),d.find.CLASS=function(e,t,n){if(typeof t.getElementsByClassName!="undefined"&&!n)return t.getElementsByClassName(e[1])},e=null}(),n.documentElement.contains?h.contains=function(e,t){return e!==t&&(e.contains?e.contains(t):!0)}:n.documentElement.compareDocumentPosition?h.contains=function(e,t){return!!(e.compareDocumentPosition(t)&16)}:h.contains=function(){return!1},h.isXML=function(e){var t=(e?e.ownerDocument||e:0).documentElement;return t?t.nodeName!=="HTML":!1};var T=function(e,t,n){var r,i=[],s="",o=t.nodeType?[t]:t;while(r=d.match.PSEUDO.exec(e))s+=r[0],e=e.replace(d.match.PSEUDO,"");e=d.relative[e]?e+"*":e;for(var u=0,a=o.length;u<a;u++)h(e,o[u],i,n);return h.filter(s,i)};h.attr=s.attr,h.selectors.attrMap={},s.find=h,s.expr=h.selectors,s.expr[":"]=s.expr.filters,s.unique=h.uniqueSort,s.text=h.getText,s.isXMLDoc=h.isXML,s.contains=h.contains}();var j=/Until$/,F=/^(?:parents|prevUntil|prevAll)/,I=/,/,q=/^.[^:#\[\.,]*$/,R=Array.prototype.slice,U=s.expr.match.globalPOS,z={children:!0,contents:!0,next:!0,prev:!0};s.fn.extend({find:function(e){var t=this,n,r;if(typeof e!="string")return s(e).filter(function(){for(n=0,r=t.length;n<r;n++)if(s.contains(t[n],this))return!0});var i=this.pushStack("","find",e),o,u,a;for(n=0,r=this.length;n<r;n++){o=i.length,s.find(e,this[n],i);if(n>0)for(u=o;u<i.length;u++)for(a=0;a<o;a++)if(i[a]===i[u]){i.splice(u--,1);break}}return i},has:function(e){var t=s(e);return this.filter(function(){for(var e=0,n=t.length;e<n;e++)if(s.contains(this,t[e]))return!0})},not:function(e){return this.pushStack(X(this,e,!1),"not",e)},filter:function(e){return this.pushStack(X(this,e,!0),"filter",e)},is:function(e){return!!e&&(typeof e=="string"?U.test(e)?s(e,this.context).index(this[0])>=0:s.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n=[],r,i,o=this[0];if(s.isArray(e)){var u=1;while(o&&o.ownerDocument&&o!==t){for(r=0;r<e.length;r++)s(o).is(e[r])&&n.push({selector:e[r],elem:o,level:u});o=o.parentNode,u++}return n}var a=U.test(e)||typeof e!="string"?s(e,t||this.context):0;for(r=0,i=this.length;r<i;r++){o=this[r];while(o){if(a?a.index(o)>-1:s.find.matchesSelector(o,e)){n.push(o);break}o=o.parentNode;if(!o||!o.ownerDocument||o===t||o.nodeType===11)break}}return n=n.length>1?s.unique(n):n,this.pushStack(n,"closest",e)},index:function(e){return e?typeof e=="string"?s.inArray(this[0],s(e)):s.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(e,t){var n=typeof e=="string"?s(e,t):s.makeArray(e&&e.nodeType?[e]:e),r=s.merge(this.get(),n);return this.pushStack(W(n[0])||W(r[0])?r:s.unique(r))},andSelf:function(){return this.add(this.prevObject)}}),s.each({parent:function(e){var t=e.parentNode;return t&&t.nodeType!==11?t:null},parents:function(e){return s.dir(e,"parentNode")},parentsUntil:function(e,t,n){return s.dir(e,"parentNode",n)},next:function(e){return s.nth(e,2,"nextSibling")},prev:function(e){return s.nth(e,2,"previousSibling")},nextAll:function(e){return s.dir(e,"nextSibling")},prevAll:function(e){return s.dir(e,"previousSibling")},nextUntil:function(e,t,n){return s.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return s.dir(e,"previousSibling",n)},siblings:function(e){return s.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return s.sibling(e.firstChild)},contents:function(e){return s.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:s.makeArray(e.childNodes)}},function(e,t){s.fn[e]=function(n,r){var i=s.map(this,t,n);return j.test(e)||(r=n),r&&typeof r=="string"&&(i=s.filter(r,i)),i=this.length>1&&!z[e]?s.unique(i):i,(this.length>1||I.test(r))&&F.test(e)&&(i=i.reverse()),this.pushStack(i,e,R.call(arguments).join(","))}}),s.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),t.length===1?s.find.matchesSelector(t[0],e)?[t[0]]:[]:s.find.matches(e,t)},dir:function(e,n,r){var i=[],o=e[n];while(o&&o.nodeType!==9&&(r===t||o.nodeType!==1||!s(o).is(r)))o.nodeType===1&&i.push(o),o=o[n];return i},nth:function(e,t,n,r){t=t||1;var i=0;for(;e;e=e[n])if(e.nodeType===1&&++i===t)break;return e},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)e.nodeType===1&&e!==t&&n.push(e);return n}});var $="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",J=/ jQuery\d+="(?:\d+|null)"/g,K=/^\s+/,Q=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,G=/<([\w:]+)/,Y=/<tbody/i,Z=/<|&#?\w+;/,et=/<(?:script|style)/i,tt=/<(?:script|object|embed|option|style)/i,nt=RegExp("<(?:"+$+")[\\s/>]","i"),rt=/checked\s*(?:[^=]|=\s*.checked.)/i,it=/\/(java|ecma)script/i,st=/^\s*<!(?:\[CDATA\[|\-\-)/,ot={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},ut=V(n);ot.optgroup=ot.option,ot.tbody=ot.tfoot=ot.colgroup=ot.caption=ot.thead,ot.th=ot.td,s.support.htmlSerialize||(ot._default=[1,"div<div>","</div>"]),s.fn.extend({text:function(e){return s.access(this,function(e){return e===t?s.text(this):this.empty().append((this[0]&&this[0].ownerDocument||n).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(s.isFunction(e))return this.each(function(t){s(this).wrapAll(e.call(this,t))});if(this[0]){var t=s(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&e.firstChild.nodeType===1)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return s.isFunction(e)?this.each(function(t){s(this).wrapInner(e.call(this,t))}):this.each(function(){var t=s(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=s.isFunction(e);return this.each(function(n){s(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){s.nodeName(this,"body")||s(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){this.nodeType===1&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){this.nodeType===1&&this.insertBefore(e,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this)});if(arguments.length){var e=s.clean(arguments);return e.push.apply(e,this.toArray()),this.pushStack(e,"before",arguments)}},after:function(){if(
this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this.nextSibling)});if(arguments.length){var e=this.pushStack(this,"after",arguments);return e.push.apply(e,s.clean(arguments)),e}},remove:function(e,t){for(var n=0,r;(r=this[n])!=null;n++)if(!e||s.filter(e,[r]).length)!t&&r.nodeType===1&&(s.cleanData(r.getElementsByTagName("*")),s.cleanData([r])),r.parentNode&&r.parentNode.removeChild(r);return this},empty:function(){for(var e=0,t;(t=this[e])!=null;e++){t.nodeType===1&&s.cleanData(t.getElementsByTagName("*"));while(t.firstChild)t.removeChild(t.firstChild)}return this},clone:function(e,t){return e=e==null?!1:e,t=t==null?e:t,this.map(function(){return s.clone(this,e,t)})},html:function(e){return s.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return n.nodeType===1?n.innerHTML.replace(J,""):null;if(typeof e=="string"&&!et.test(e)&&(s.support.leadingWhitespace||!K.test(e))&&!ot[(G.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(Q,"<$1></$2>");try{for(;r<i;r++)n=this[r]||{},n.nodeType===1&&(s.cleanData(n.getElementsByTagName("*")),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){return this[0]&&this[0].parentNode?s.isFunction(e)?this.each(function(t){var n=s(this),r=n.html();n.replaceWith(e.call(this,t,r))}):(typeof e!="string"&&(e=s(e).detach()),this.each(function(){var t=this.nextSibling,n=this.parentNode;s(this).remove(),t?s(t).before(e):s(n).append(e)})):this.length?this.pushStack(s(s.isFunction(e)?e():e),"replaceWith",e):this},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){var i,o,u,a,f=e[0],l=[];if(!s.support.checkClone&&arguments.length===3&&typeof f=="string"&&rt.test(f))return this.each(function(){s(this).domManip(e,n,r,!0)});if(s.isFunction(f))return this.each(function(i){var o=s(this);e[0]=f.call(this,i,n?o.html():t),o.domManip(e,n,r)});if(this[0]){a=f&&f.parentNode,s.support.parentNode&&a&&a.nodeType===11&&a.childNodes.length===this.length?i={fragment:a}:i=s.buildFragment(e,this,l),u=i.fragment,u.childNodes.length===1?o=u=u.firstChild:o=u.firstChild;if(o){n=n&&s.nodeName(o,"tr");for(var c=0,h=this.length,p=h-1;c<h;c++)r.call(n?at(this[c],o):this[c],i.cacheable||h>1&&c<p?s.clone(u,!0,!0):u)}l.length&&s.each(l,function(e,t){t.src?s.ajax({type:"GET",global:!1,url:t.src,async:!1,dataType:"script"}):s.globalEval((t.text||t.textContent||t.innerHTML||"").replace(st,"/*$0*/")),t.parentNode&&t.parentNode.removeChild(t)})}return this}}),s.buildFragment=function(e,t,r){var i,o,u,a,f=e[0];return t&&t[0]&&(a=t[0].ownerDocument||t[0]),a.createDocumentFragment||(a=n),e.length===1&&typeof f=="string"&&f.length<512&&a===n&&f.charAt(0)==="<"&&!tt.test(f)&&(s.support.checkClone||!rt.test(f))&&(s.support.html5Clone||!nt.test(f))&&(o=!0,u=s.fragments[f],u&&u!==1&&(i=u)),i||(i=a.createDocumentFragment(),s.clean(e,a,i,r)),o&&(s.fragments[f]=u?i:1),{fragment:i,cacheable:o}},s.fragments={},s.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){s.fn[e]=function(n){var r=[],i=s(n),o=this.length===1&&this[0].parentNode;if(o&&o.nodeType===11&&o.childNodes.length===1&&i.length===1)return i[t](this[0]),this;for(var u=0,a=i.length;u<a;u++){var f=(u>0?this.clone(!0):this).get();s(i[u])[t](f),r=r.concat(f)}return this.pushStack(r,e,i.selector)}}),s.extend({clone:function(e,t,n){var r,i,o,u=s.support.html5Clone||s.isXMLDoc(e)||!nt.test("<"+e.nodeName+">")?e.cloneNode(!0):dt(e);if((!s.support.noCloneEvent||!s.support.noCloneChecked)&&(e.nodeType===1||e.nodeType===11)&&!s.isXMLDoc(e)){lt(e,u),r=ct(e),i=ct(u);for(o=0;r[o];++o)i[o]&&lt(r[o],i[o])}if(t){ft(e,u);if(n){r=ct(e),i=ct(u);for(o=0;r[o];++o)ft(r[o],i[o])}}return r=i=null,u},clean:function(e,t,r,i){var o,u,a,f=[];t=t||n,typeof t.createElement=="undefined"&&(t=t.ownerDocument||t[0]&&t[0].ownerDocument||n);for(var l=0,c;(c=e[l])!=null;l++){typeof c=="number"&&(c+="");if(!c)continue;if(typeof c=="string")if(!Z.test(c))c=t.createTextNode(c);else{c=c.replace(Q,"<$1></$2>");var h=(G.exec(c)||["",""])[1].toLowerCase(),p=ot[h]||ot._default,d=p[0],v=t.createElement("div"),m=ut.childNodes,g;t===n?ut.appendChild(v):V(t).appendChild(v),v.innerHTML=p[1]+c+p[2];while(d--)v=v.lastChild;if(!s.support.tbody){var y=Y.test(c),b=h==="table"&&!y?v.firstChild&&v.firstChild.childNodes:p[1]==="<table>"&&!y?v.childNodes:[];for(a=b.length-1;a>=0;--a)s.nodeName(b[a],"tbody")&&!b[a].childNodes.length&&b[a].parentNode.removeChild(b[a])}!s.support.leadingWhitespace&&K.test(c)&&v.insertBefore(t.createTextNode(K.exec(c)[0]),v.firstChild),c=v.childNodes,v&&(v.parentNode.removeChild(v),m.length>0&&(g=m[m.length-1],g&&g.parentNode&&g.parentNode.removeChild(g)))}var w;if(!s.support.appendChecked)if(c[0]&&typeof (w=c.length)=="number")for(a=0;a<w;a++)pt(c[a]);else pt(c);c.nodeType?f.push(c):f=s.merge(f,c)}if(r){o=function(e){return!e.type||it.test(e.type)};for(l=0;f[l];l++){u=f[l];if(i&&s.nodeName(u,"script")&&(!u.type||it.test(u.type)))i.push(u.parentNode?u.parentNode.removeChild(u):u);else{if(u.nodeType===1){var E=s.grep(u.getElementsByTagName("script"),o);f.splice.apply(f,[l+1,0].concat(E))}r.appendChild(u)}}}return f},cleanData:function(e){var t,n,r=s.cache,i=s.event.special,o=s.support.deleteExpando;for(var u=0,a;(a=e[u])!=null;u++){if(a.nodeName&&s.noData[a.nodeName.toLowerCase()])continue;n=a[s.expando];if(n){t=r[n];if(t&&t.events){for(var f in t.events)i[f]?s.event.remove(a,f):s.removeEvent(a,f,t.handle);t.handle&&(t.handle.elem=null)}o?delete a[s.expando]:a.removeAttribute&&a.removeAttribute(s.expando),delete r[n]}}}});var vt=/alpha\([^)]*\)/i,mt=/opacity=([^)]*)/,gt=/([A-Z]|^ms)/g,yt=/^[\-+]?(?:\d*\.)?\d+$/i,bt=/^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,wt=/^([\-+])=([\-+.\de]+)/,Et=/^margin/,St={position:"absolute",visibility:"hidden",display:"block"},xt=["Top","Right","Bottom","Left"],Tt,Nt,Ct;s.fn.css=function(e,n){return s.access(this,function(e,n,r){return r!==t?s.style(e,n,r):s.css(e,n)},e,n,arguments.length>1)},s.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Tt(e,"opacity");return n===""?"1":n}return e.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":s.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(!e||e.nodeType===3||e.nodeType===8||!e.style)return;var o,u,a=s.camelCase(n),f=e.style,l=s.cssHooks[a];n=s.cssProps[a]||a;if(r===t)return l&&"get"in l&&(o=l.get(e,!1,i))!==t?o:f[n];u=typeof r,u==="string"&&(o=wt.exec(r))&&(r=+(o[1]+1)*+o[2]+parseFloat(s.css(e,n)),u="number");if(r==null||u==="number"&&isNaN(r))return;u==="number"&&!s.cssNumber[a]&&(r+="px");if(!l||!("set"in l)||(r=l.set(e,r))!==t)try{f[n]=r}catch(c){}},css:function(e,n,r){var i,o;n=s.camelCase(n),o=s.cssHooks[n],n=s.cssProps[n]||n,n==="cssFloat"&&(n="float");if(o&&"get"in o&&(i=o.get(e,!0,r))!==t)return i;if(Tt)return Tt(e,n)},swap:function(e,t,n){var r={},i,s;for(s in t)r[s]=e.style[s],e.style[s]=t[s];i=n.call(e);for(s in t)e.style[s]=r[s];return i}}),s.curCSS=s.css,n.defaultView&&n.defaultView.getComputedStyle&&(Nt=function(e,t){var n,r,i,o,u=e.style;return t=t.replace(gt,"-$1").toLowerCase(),(r=e.ownerDocument.defaultView)&&(i=r.getComputedStyle(e,null))&&(n=i.getPropertyValue(t),n===""&&!s.contains(e.ownerDocument.documentElement,e)&&(n=s.style(e,t))),!s.support.pixelMargin&&i&&Et.test(t)&&bt.test(n)&&(o=u.width,u.width=n,n=i.width,u.width=o),n}),n.documentElement.currentStyle&&(Ct=function(e,t){var n,r,i,s=e.currentStyle&&e.currentStyle[t],o=e.style;return s==null&&o&&(i=o[t])&&(s=i),bt.test(s)&&(n=o.left,r=e.runtimeStyle&&e.runtimeStyle.left,r&&(e.runtimeStyle.left=e.currentStyle.left),o.left=t==="fontSize"?"1em":s,s=o.pixelLeft+"px",o.left=n,r&&(e.runtimeStyle.left=r)),s===""?"auto":s}),Tt=Nt||Ct,s.each(["height","width"],function(e,t){s.cssHooks[t]={get:function(e,n,r){if(n)return e.offsetWidth!==0?kt(e,t,r):s.swap(e,St,function(){return kt(e,t,r)})},set:function(e,t){return yt.test(t)?t+"px":t}}}),s.support.opacity||(s.cssHooks.opacity={get:function(e,t){return mt.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?parseFloat(RegExp.$1)/100+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=s.isNumeric(t)?"alpha(opacity="+t*100+")":"",o=r&&r.filter||n.filter||"";n.zoom=1;if(t>=1&&s.trim(o.replace(vt,""))===""){n.removeAttribute("filter");if(r&&!r.filter)return}n.filter=vt.test(o)?o.replace(vt,i):o+" "+i}}),s(function(){s.support.reliableMarginRight||(s.cssHooks.marginRight={get:function(e,t){return s.swap(e,{display:"inline-block"},function(){return t?Tt(e,"margin-right"):e.style.marginRight})}})}),s.expr&&s.expr.filters&&(s.expr.filters.hidden=function(e){var t=e.offsetWidth,n=e.offsetHeight;return t===0&&n===0||!s.support.reliableHiddenOffsets&&(e.style&&e.style.display||s.css(e,"display"))==="none"},s.expr.filters.visible=function(e){return!s.expr.filters.hidden(e)}),s.each({margin:"",padding:"",border:"Width"},function(e,t){s.cssHooks[e+t]={expand:function(n){var r,i=typeof n=="string"?n.split(" "):[n],s={};for(r=0;r<4;r++)s[e+xt[r]+t]=i[r]||i[r-2]||i[0];return s}}});var Lt=/%20/g,At=/\[\]$/,Ot=/\r?\n/g,Mt=/#.*$/,_t=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,Dt=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,Pt=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,Ht=/^(?:GET|HEAD)$/,Bt=/^\/\//,jt=/\?/,Ft=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,It=/^(?:select|textarea)/i,qt=/\s+/,Rt=/([?&])_=[^&]*/,Ut=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,zt=s.fn.load,Wt={},Xt={},Vt,$t,Jt=["*/"]+["*"];try{Vt=i.href}catch(Kt){Vt=n.createElement("a"),Vt.href="",Vt=Vt.href}$t=Ut.exec(Vt.toLowerCase())||[],s.fn.extend({load:function(e,n,r){if(typeof e!="string"&&zt)return zt.apply(this,arguments);if(!this.length)return this;var i=e.indexOf(" ");if(i>=0){var o=e.slice(i,e.length);e=e.slice(0,i)}var u="GET";n&&(s.isFunction(n)?(r=n,n=t):typeof n=="object"&&(n=s.param(n,s.ajaxSettings.traditional),u="POST"));var a=this;return s.ajax({url:e,type:u,dataType:"html",data:n,complete:function(e,t,n){n=e.responseText,e.isResolved()&&(e.done(function(e){n=e}),a.html(o?s("<div>").append(n.replace(Ft,"")).find(o):n)),r&&a.each(r,[n,t,e])}}),this},serialize:function(){return s.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?s.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||It.test(this.nodeName)||Dt.test(this.type))}).map(function(e,t){var n=s(this).val();return n==null?null:s.isArray(n)?s.map(n,function(e,n){return{name:t.name,value:e.replace(Ot,"\r\n")}}):{name:t.name,value:n.replace(Ot,"\r\n")}}).get()}}),s.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,t){s.fn[t]=function(e){return this.on(t,e)}}),s.each(["get","post"],function(e,n){s[n]=function(e,r,i,o){return s.isFunction(r)&&(o=o||i,i=r,r=t),s.ajax({type:n,url:e,data:r,success:i,dataType:o})}}),s.extend({getScript:function(e,n){return s.get(e,t,n,"script")},getJSON:function(e,t,n){return s.get(e,t,n,"json")},ajaxSetup:function(e,t){return t?Yt(e,s.ajaxSettings):(t=e,e=s.ajaxSettings),Yt(e,t),e},ajaxSettings:{url:Vt,isLocal:Pt.test($t[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":Jt},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":s.parseJSON,"text xml":s.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:Qt(Wt),ajaxTransport:Qt(Xt),ajax:function(e,n){function S(e,n,c,h){if(y===2)return;y=2,m&&clearTimeout(m),v=t,p=h||"",E.readyState=e>0?4:0;var d,g,w,S=n,x=c?en(r,E,c):t,T,N;if(e>=200&&e<300||e===304){if(r.ifModified){if(T=E.getResponseHeader("Last-Modified"))s.lastModified[l]=T;if(N=E.getResponseHeader("Etag"))s.etag[l]=N}if(e===304)S="notmodified",d=!0;else try{g=tn(r,x),S="success",d=!0}catch(C){S="parsererror",w=C}}else{w=S;if(!S||e)S="error",e<0&&(e=0)}E.status=e,E.statusText=""+(n||S),d?u.resolveWith(i,[g,S,E]):u.rejectWith(i,[E,S,w]),E.statusCode(f),f=t,b&&o.trigger("ajax"+(d?"Success":"Error"),[E,r,d?g:w]),a.fireWith(i,[E,S]),b&&(o.trigger("ajaxComplete",[E,r]),--s.active||s.event.trigger("ajaxStop"))}typeof e=="object"&&(n=e,e=t),n=n||{};var r=s.ajaxSetup({},n),i=r.context||r,o=i!==r&&(i.nodeType||i instanceof s)?s(i):s.event,u=s.Deferred(),a=s.Callbacks("once memory"),f=r.statusCode||{},l,c={},h={},p,d,v,m,g,y=0,b,w,E={readyState:0,setRequestHeader:function(e,t){if(!y){var n=e.toLowerCase();e=h[n]=h[n]||e,c[e]=t}return this},getAllResponseHeaders:function(){return y===2?p:null},getResponseHeader:function(e){var n;if(y===2){if(!d){d={};while(n=_t.exec(p))d[n[1].toLowerCase()]=n[2]}n=d[e.toLowerCase()]}return n===t?null:n},overrideMimeType:function(e){return y||(r.mimeType=e),this},abort:function(e){return e=e||"abort",v&&v.abort(e),S(0,e),this}};u.promise(E),E.success=E.done,E.error=E.fail,E.complete=a.add,E.statusCode=function(e){if(e){var t;if(y<2)for(t in e)f[t]=[f[t],e[t]];else t=e[E.status],E.then(t,t)}return this},r.url=((e||r.url)+"").replace(Mt,"").replace(Bt,$t[1]+"//"),r.dataTypes=s.trim(r.dataType||"*").toLowerCase().split(qt),r.crossDomain==null&&(g=Ut.exec(r.url.toLowerCase()),r.crossDomain=!(!g||g[1]==$t[1]&&g[2]==$t[2]&&(g[3]||(g[1]==="http:"?80:443))==($t[3]||($t[1]==="http:"?80:443)))),r.data&&r.processData&&typeof r.data!="string"&&(r.data=s.param(r.data,r.traditional)),Gt(Wt,r,n,E);if(y===2)return!1;b=r.global,r.type=r.type.toUpperCase(),r.hasContent=!Ht.test(r.type),b&&s.active++===0&&s.event.trigger("ajaxStart");if(!r.hasContent){r.data&&(r.url+=(jt.test(r.url)?"&":"?")+r.data,delete r.data),l=r.url;if(r.cache===!1){var x=s.now(),T=r.url.replace(Rt,"$1_="+x);r.url=T+(T===r.url?(jt.test(r.url)?"&":"?")+"_="+x:"")}}(r.data&&r.hasContent&&r.contentType!==!1||n.contentType)&&E.setRequestHeader("Content-Type",r.contentType),r.ifModified&&(l=l||r.url,s.lastModified[l]&&E.setRequestHeader("If-Modified-Since",s.lastModified[l]),s.etag[l]&&E.setRequestHeader("If-None-Match",s.etag[l])),E.setRequestHeader("Accept",r.dataTypes[0]&&r.accepts[r.dataTypes[0]]?r.accepts[r.dataTypes[0]]+(r.dataTypes[0]!=="*"?", "+Jt+"; q=0.01":""):r.accepts["*"]);for(w in r.headers)E.setRequestHeader(w,r.headers[w]);if(!r.beforeSend||r.beforeSend.call(i,E,r)!==!1&&y!==2){for(w in{success:1,error:1,complete:1})E[w](r[w]);v=Gt(Xt,r,n,E);if(!v)S(-1,"No Transport");else{E.readyState=1,b&&o.trigger("ajaxSend",[E,r]),r.async&&r.timeout>0&&(m=setTimeout(function(){E.abort("timeout")},r.timeout));try{y=1,v.send(c,S)}catch(N){if(y>=2)throw N;S(-1,N)}}return E}return E.abort(),!1},param:function(e,n){var r=[],i=function(e,t){t=s.isFunction(t)?t():t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};n===t&&(n=s.ajaxSettings.traditional);if(s.isArray(e)||e.jquery&&!s.isPlainObject(e))s.each(e,function(){i(this.name,this.value)});else for(var o in e)Zt(o,e[o],n,i);return r.join("&").replace(Lt,"+")}}),s.extend({active:0,lastModified:{},etag:{}});var nn=s.now(),rn=/(\=)\?(&|$)|\?\?/i;s.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return s.expando+"_"+nn++}}),s.ajaxPrefilter("json jsonp",function(t,n,r){var i=typeof t.data=="string"&&/^application\/x\-www\-form\-urlencoded/.test(t.contentType);if(t.dataTypes[0]==="jsonp"||t.jsonp!==!1&&(rn.test(t.url)||i&&rn.test(t.data))){var o,u=t.jsonpCallback=s.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a=e[u],f=t.url,l=t.data,c="$1"+u+"$2";return t.jsonp!==!1&&(f=f.replace(rn,c),t.url===f&&(i&&(l=l.replace(rn,c)),t.data===l&&(f+=(/\?/.test(f)?"&":"?")+t.jsonp+"="+u))),t.url=f,t.data=l,e[u]=function(e){o=[e]},r.always(function(){e[u]=a,o&&s.isFunction(a)&&e[u](o[0])}),t.converters["script json"]=function(){return o||s.error(u+" was not called"),o[0]},t.dataTypes[0]="json","script"}}),s.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){return s.globalEval(e),e}}}),s.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),s.ajaxTransport("script",function(e){if(e.crossDomain){var r,i=n.head||n.getElementsByTagName("head")[0]||n.documentElement;return{send:function(s,o){r=n.createElement("script"),r.async="async",e.scriptCharset&&(r.charset=e.scriptCharset),r.src=e.url,r.onload=r.onreadystatechange=function(e,n){if(n||!r.readyState||/loaded|complete/.test(r.readyState))r.onload=r.onreadystatechange=null,i&&r.parentNode&&i.removeChild(r),r=t,n||o(200,"success")},i.insertBefore(r,i.firstChild)},abort:function(){r&&r.onload(0,1)}}}});var sn=e.ActiveXObject?function(){for(var e in un)un[e](0,1)}:!1,on=0,un;s.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&an()||fn()}:an,function(e){s.extend(s.support,{ajax:!!e,cors:!!e&&"withCredentials"in e})}(s.ajaxSettings.xhr()),s.support.ajax&&s.ajaxTransport(function(n){if(!n.crossDomain||s.support.cors){var r;return{send:function(i,o){var u=n.xhr(),a,f;n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async);if(n.xhrFields)for(f in n.xhrFields)u[f]=n.xhrFields[f];n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),!n.crossDomain&&!i["X-Requested-With"]&&(i["X-Requested-With"]="XMLHttpRequest");try{for(f in i)u.setRequestHeader(f,i[f])}catch(l){}u.send(n.hasContent&&n.data||null),r=function(e,i){var f,l,c,h,p;try{if(r&&(i||u.readyState===4)){r=t,a&&(u.onreadystatechange=s.noop,sn&&delete un[a]);if(i)u.readyState!==4&&u.abort();else{f=u.status,c=u.getAllResponseHeaders(),h={},p=u.responseXML,p&&p.documentElement&&(h.xml=p);try{h.text=u.responseText}catch(e){}try{l=u.statusText}catch(d){l=""}!f&&n.isLocal&&!n.crossDomain?f=h.text?200:404:f===1223&&(f=204)}}}catch(v){i||o(-1,v)}h&&o(f,l,h,c)},!n.async||u.readyState===4?r():(a=++on,sn&&(un||(un={},s(e).unload(sn)),un[a]=r),u.onreadystatechange=r)},abort:function(){r&&r(0,1)}}}});var ln={},cn,hn,pn=/^(?:toggle|show|hide)$/,dn=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,vn,mn=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],gn;s.fn.extend({show:function(e,t,n){var r,i;if(e||e===0)return this.animate(wn("show",3),e,t,n);for(var o=0,u=this.length;o<u;o++)r=this[o],r.style&&(i=r.style.display,!s._data(r,"olddisplay")&&i==="none"&&(i=r.style.display=""),(i===""&&s.css(r,"display")==="none"||!s.contains(r.ownerDocument.documentElement,r))&&s._data(r,"olddisplay",En(r.nodeName)));for(o=0;o<u;o++){r=this[o];if(r.style){i=r.style.display;if(i===""||i==="none")r.style.display=s._data(r,"olddisplay")||""}}return this},hide:function(e,t,n){if(e||e===0)return this.animate(wn("hide",3),e,t,n);var r,i,o=0,u=this.length;for(;o<u;o++)r=this[o],r.style&&(i=s.css(r,"display"),i!=="none"&&!s._data(r,"olddisplay")&&s._data(r,"olddisplay",i));for(o=0;o<u;o++)this[o].style&&(this[o].style.display="none");return this},_toggle:s.fn.toggle,toggle:function(e,t,n){var r=typeof e=="boolean";return s.isFunction(e)&&s.isFunction(t)?this._toggle.apply(this,arguments):e==null||r?this.each(function(){var t=r?e:s(this).is(":hidden");s(this)[t?"show":"hide"]()}):this.animate(wn("toggle",3),e,t,n),this},fadeTo:function(e,t,n,r){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){function o(){i.queue===!1&&s._mark(this);var t=s.extend({},i),n=this.nodeType===1,r=n&&s(this).is(":hidden"),o,u,a,f,l,c,h,p,d,v,m;t.animatedProperties={};for(a in e){o=s.camelCase(a),a!==o&&(e[o]=e[a],delete e[a]);if((l=s.cssHooks[o])&&"expand"in l){c=l.expand(e[o]),delete e[o];for(a in c)a in e||(e[a]=c[a])}}for(o in e){u=e[o],s.isArray(u)?(t.animatedProperties[o]=u[1],u=e[o]=u[0]):t.animatedProperties[o]=t.specialEasing&&t.specialEasing[o]||t.easing||"swing";if(u==="hide"&&r||u==="show"&&!r)return t.complete.call(this);n&&(o==="height"||o==="width")&&(t.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],s.css(this,"display")==="inline"&&s.css(this,"float")==="none"&&(!s.support.inlineBlockNeedsLayout||En(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}t.overflow!=null&&(this.style.overflow="hidden");for(a in e)f=new s.fx(this,t,a),u=e[a],pn.test(u)?(m=s._data(this,"toggle"+a)||(u==="toggle"?r?"show":"hide":0),m?(s._data(this,"toggle"+a,m==="show"?"hide":"show"),f[m]()):f[u]()):(h=dn.exec(u),p=f.cur(),h?(d=parseFloat(h[2]),v=h[3]||(s.cssNumber[a]?"":"px"),v!=="px"&&(s.style(this,a,(d||1)+v),p=(d||1)/f.cur()*p,s.style(this,a,p+v)),h[1]&&(d=(h[1]==="-="?-1:1)*d+p),f.custom(p,d,v)):f.custom(p,u,""));return!0}var i=s.speed(t,n,r);return s.isEmptyObject(e)?this.each(i.complete,[!1]):(e=s.extend({},e),i.queue===!1?this.each(o):this.queue(i.queue,o))},stop:function(e,n,r){return typeof e!="string"&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){function u(e,t,n){var i=t[n];s.removeData(e,n,!0),i.stop(r)}var t,n=!1,i=s.timers,o=s._data(this);r||s._unmark(!0,this);if(e==null)for(t in o)o[t]&&o[t].stop&&t.indexOf(".run")===t.length-4&&u(this,o,t);else o[t=e+".run"]&&o[t].stop&&u(this,o,t);for(t=i.length;t--;)i[t].elem===this&&(e==null||i[t].queue===e)&&(r?i[t](!0):i[t].saveState(),n=!0,i.splice(t,1));(!r||!n)&&s.dequeue(this,e)})}}),s.each({slideDown:wn("show",1),slideUp:wn("hide",1),slideToggle:wn("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){s.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),s.extend({speed:function(e,t,n){var r=e&&typeof e=="object"?s.extend({},e):{complete:n||!n&&t||s.isFunction(e)&&e,duration:e,easing:n&&t||t&&!s.isFunction(t)&&t};r.duration=s.fx.off?0:typeof r.duration=="number"?r.duration:r.duration in s.fx.speeds?s.fx.speeds[r.duration]:s.fx.speeds._default;if(r.queue==null||r.queue===!0)r.queue="fx";return r.old=r.complete,r.complete=function(e){s.isFunction(r.old)&&r.old.call(this),r.queue?s.dequeue(this,r.queue):e!==!1&&s._unmark(this)},r},easing:{linear:function(e){return e},swing:function(e){return-Math.cos(e*Math.PI)/2+.5}},timers:[],fx:function(e,t,n){this.options=t,this.elem=e,this.prop=n,t.orig=t.orig||{}}}),s.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(s.fx.step[this.prop]||s.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]==null||!!this.elem.style&&this.elem.style[this.prop]!=null){var e,t=s.css(this.elem,this.prop);return isNaN(e=parseFloat(t))?!t||t==="auto"?0:t:e}return this.elem[this.prop]},custom:function(e,n,r){function u(e){return i.step(e)}var i=this,o=s.fx;this.startTime=gn||yn(),this.end=n,this.now=this.start=e,this.pos=this.state=0,this.unit=r||this.unit||(s.cssNumber[this.prop]?"":"px"),u.queue=this.options.queue,u.elem=this.elem,u.saveState=function(){s._data(i.elem,"fxshow"+i.prop)===t&&(i.options.hide?s._data(i.elem,"fxshow"+i.prop,i.start):i.options.show&&s._data(i.elem,"fxshow"+i.prop,i.end))},u()&&s.timers.push(u)&&!vn&&(vn=setInterval(o.tick,o.interval))},show:function(){var e=s._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=e||s.style(this.elem,this.prop),this.options.show=!0,e!==t?this.custom(this.cur(),e):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),s(this.elem).show()},hide:function(){this.options.orig[this.prop]=s._data(this.elem,"fxshow"+this.prop)||s.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(e){var t,n,r,i=gn||yn(),o=!0,u=this.elem,a=this.options;if(e||i>=a.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),a.animatedProperties[this.prop]=!0;for(t in a.animatedProperties)a.animatedProperties[t]!==!0&&(o=!1);if(o){a.overflow!=null&&!s.support.shrinkWrapBlocks&&s.each(["","X","Y"],function(e,t){u.style["overflow"+t]=a.overflow[e]}),a.hide&&s(u).hide();if(a.hide||a.show)for(t in a.animatedProperties)s.style(u,t,a.orig[t]),s.removeData(u,"fxshow"+t,!0),s.removeData(u,"toggle"+t,!0);r=a.complete,r&&(a.complete=!1,r.call(u))}return!1}return a.duration==Infinity?this.now=i:(n=i-this.startTime,this.state=n/a.duration,this.pos=s.easing[a.animatedProperties[this.prop]](this.state,n,0,1,a.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update(),!0}},s.extend(s.fx,{tick:function(){var e,t=s.timers,n=0;for(;n<t.length;n++)e=t[n],!e()&&t[n]===e&&t.splice(n--,1);t.length||s.fx.stop()},interval:13,stop:function(){clearInterval(vn),vn=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(e){s.style(e.elem,"opacity",e.now)},_default:function(e){e.elem.style&&e.elem.style[e.prop]!=null?e.elem.style[e.prop]=e.now+e.unit:e.elem[e.prop]=e.now}}}),s.each(mn.concat.apply([],mn),function(e,t){t.indexOf("margin")&&(s.fx.step[t]=function(e){s.style(e.elem,t,Math.max(0,e.now)+e.unit)})}),s.expr&&s.expr.filters&&(s.expr.filters.animated=function(e){return s.grep(s.timers,function(t){return e===t.elem}).length});var Sn,xn=/^t(?:able|d|h)$/i,Tn=/^(?:body|html)$/i;"getBoundingClientRect"in n.documentElement?Sn=function(e,t,n,r){try{r=e.getBoundingClientRect()}catch(i){}if(!r||!s.contains(n,e))return r?{top:r.top,left:r.left}:{top:0,left:0};var o=t.body,u=Nn(t),a=n.clientTop||o.clientTop||0,f=n.clientLeft||o.clientLeft||0,l=u.pageYOffset||s.support.boxModel&&n.scrollTop||o.scrollTop,c=u.pageXOffset||s.support.boxModel&&n.scrollLeft||o.scrollLeft,h=r.top+l-a,p=r.left+c-f;return{top:h,left:p}}:Sn=function(e,t,n){var r,i=e.offsetParent,o=e,u=t.body,a=t.defaultView,f=a?a.getComputedStyle(e,null):e.currentStyle,l=e.offsetTop,c=e.offsetLeft;while((e=e.parentNode)&&e!==u&&e!==n){if(s.support.fixedPosition&&f.position==="fixed")break;r=a?a.getComputedStyle(e,null):e.currentStyle,l-=e.scrollTop,c-=e.scrollLeft,e===i&&(l+=e.offsetTop,c+=e.offsetLeft,s.support.doesNotAddBorder&&(!s.support.doesAddBorderForTableAndCells||!xn.test(e.nodeName))&&(l+=parseFloat(r.borderTopWidth)||0,c+=parseFloat(r.borderLeftWidth)||0),o=i,i=e.offsetParent),s.support.subtractsBorderForOverflowNotVisible&&r.overflow!=="visible"&&(l+=parseFloat(r.borderTopWidth)||0,c+=parseFloat(r.borderLeftWidth)||0),f=r}if(f.position==="relative"||f.position==="static")l+=u.offsetTop,c+=u.offsetLeft;return s.support.fixedPosition&&f.position==="fixed"&&(l+=Math.max(n.scrollTop,u.scrollTop),c+=Math.max(n.scrollLeft,u.scrollLeft)),{top:l,left:c}},s.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){s.offset.setOffset(this,e,t)});var n=this[0],r=n&&n.ownerDocument;return r?n===r.body?s.offset.bodyOffset(n):Sn(n,r,r.documentElement):null},s.offset={bodyOffset:function(e){var t=e.offsetTop,n=e.offsetLeft;return s.support.doesNotIncludeMarginInBodyOffset&&(t+=parseFloat(s.css(e,"marginTop"))||0,n+=parseFloat(s.css(e,"marginLeft"))||0),{top:t,left:n}},setOffset:function(e,t,n){var r=s.css(e,"position");r==="static"&&(e.style.position="relative");var i=s(e),o=i.offset(),u=s.css(e,"top"),a=s.css(e,"left"),f=(r==="absolute"||r==="fixed")&&s.inArray("auto",[u,a])>-1,l={},c={},h,p;f?(c=i.position(),h=c.top,p=c.left):(h=parseFloat(u)||0,p=parseFloat(a)||0),s.isFunction(t)&&(t=t.call(e,n,o)),t.top!=null&&(l.top=t.top-o.top+h),t.left!=null&&(l.left=t.left-o.left+p),"using"in t?t.using.call(e,l):i.css(l)}},s.fn.extend({position:function(){if(!this[0])return null;var e=this[0],t=this.offsetParent(),n=this.offset(),r=Tn.test(t[0].nodeName)?{top:0,left:0}:t.offset();return n.top-=parseFloat(s.css(e,"marginTop"))||0,n.left-=parseFloat(s.css(e,"marginLeft"))||0,r.top+=parseFloat(s.css(t[0],"borderTopWidth"))||0,r.left+=parseFloat(s.css(t[0],"borderLeftWidth"))||0,{top:n.top-r.top,left:n.left-r.left}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||n.body;while(e&&!Tn.test(e.nodeName)&&s.css(e,"position")==="static")e=e.offsetParent;return e})}}),s.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);s.fn[e]=function(i){return s.access(this,function(e,i,o){var u=Nn(e);if(o===t)return u?n in u?u[n]:s.support.boxModel&&u.document.documentElement[i]||u.document.body[i]:e[i];u?u.scrollTo(r?s(u).scrollLeft():o,r?o:s(u).scrollTop()):e[i]=o},e,i,arguments.length,null)}}),s.each({Height:"height",Width:"width"},function(e,n){var r="client"+e,i="scroll"+e,o="offset"+e;s.fn["inner"+e]=function(){var e=this[0];return e?e.style?parseFloat(s.css(e,n,"padding")):this[n]():null},s.fn["outer"+e]=function(e){var t=this[0];return t?t.style?parseFloat(s.css(t,n,e?"margin":"border")):this[n]():null},s.fn[n]=function(e){return s.access(this,function(e,n,u){var a,f,l,c;if(s.isWindow(e))return a=e.document,f=a.documentElement[r],s.support.boxModel&&f||a.body&&a.body[r]||f;if(e.nodeType===9)return a=e.documentElement,a[r]<a[i]?Math.max(e.body[i],a[i],e.body[o],a[o]):a[r];if(u===t)return l=s.css(e,n),c=parseFloat(l),s.isNumeric(c)?c:l;s(e).css(n,u)},n,e,arguments.length,null)}}),e.jQuery=e.$=s,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return s})})(window);;
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (value !== undefined && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setTime(+t + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {};

		// To prevent the for loop in the first place assign an empty array
		// in case there are no cookies at all. Also prevents odd result when
		// calling $.cookie().
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');

			if (key && key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) === undefined) {
			return false;
		}

		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));

/**
 * sprintf and vsprintf for jQuery
 * somewhat based on http://jan.moesen.nu/code/javascript/sprintf-and-printf-in-javascript/
 *
 * Copyright (c) 2008 Sabin Iacob (m0n5t3r) <iacobs@m0n5t3r.info>
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * @license http://www.gnu.org/licenses/gpl.html
 * @project jquery.sprintf
 */(function(e){var t={b:function(e){return parseInt(e,10).toString(2)},c:function(e){return String.fromCharCode(parseInt(e,10))},d:function(e){return parseInt(e,10)},u:function(e){return Math.abs(e)},f:function(e,t){return t=parseInt(t,10),e=parseFloat(e),isNaN(t&&e)?NaN:t&&e.toFixed(t)||e},o:function(e){return parseInt(e,10).toString(8)},s:function(e){return e},x:function(e){return(""+parseInt(e,10).toString(16)).toLowerCase()},X:function(e){return(""+parseInt(e,10).toString(16)).toUpperCase()}},n=/%(?:(\d+)?(?:\.(\d+))?|\(([^)]+)\))([%bcdufosxX])/g,r=function(e){if(e.length==1&&typeof e[0]=="object")return e=e[0],function(n,r,i,s,o,u,a){return t[o](e[s])};var n=0;return function(r,i,s,o,u,a,f){return u=="%"?"%":t[u](e[n++],s)}};e.extend({sprintf:function(e){var t=Array.apply(null,arguments).slice(1);return e.replace(n,r(t))},vsprintf:function(e,t){return e.replace(n,r(t))}})})(jQuery);
/*!
 * jQuery Autocomplete plugin 1.1
 *
 * Copyright (c) 2009 Jörn Zaefferer
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Revision: $Id: jquery.autocomplete.js 15 2009-08-22 10:30:27Z joern.zaefferer $
 */

;(function($) {

$.fn.extend({
	autocomplete: function(urlOrData, options) {
		var isUrl = typeof urlOrData == "string";
		options = $.extend({}, $.Autocompleter.defaults, {
			url: isUrl ? urlOrData : null,
			data: isUrl ? null : urlOrData,
			delay: isUrl ? $.Autocompleter.defaults.delay : 10,
			max: options && !options.scroll ? 10 : 150
		}, options);

		// if highlight is set to false, replace it with a do-nothing function
		options.highlight = options.highlight || function(value) { return value; };

		// if the formatMatch option is not specified, then use formatItem for backwards compatibility
		options.formatMatch = options.formatMatch || options.formatItem;

		options.show = options.show || function(list) {};

		return this.each(function() {
			new $.Autocompleter(this, options);
		});
	},
	result: function(handler) {
		return this.bind("result", handler);
	},
	search: function(handler) {
		return this.trigger("search", [handler]);
	},
	flushCache: function() {
		return this.trigger("flushCache");
	},
	setOptions: function(options){
		return this.trigger("setOptions", [options]);
	},
	unautocomplete: function() {
		return this.trigger("unautocomplete");
	}
});

$.Autocompleter = function(input, options) {

	var KEY = {
		UP: 38,
		DOWN: 40,
		DEL: 46,
		TAB: 9,
		RETURN: 13,
		ESC: 27,
		COMMA: 188,
		PAGEUP: 33,
		PAGEDOWN: 34,
		BACKSPACE: 8
	};

	// Create $ object for input element
	var $input = $(input).attr("autocomplete", "off").addClass(options.inputClass);

	var timeout;
	var previousValue = "";
	var cache = $.Autocompleter.Cache(options);
	var hasFocus = 0;
	var lastKeyPressCode;
	var config = {
		mouseDownOnSelect: false
	};
	var select = $.Autocompleter.Select(options, input, selectCurrent, config);

	// only opera doesn't trigger keydown multiple times while pressed, others don't work with keypress at all
	$input.bind(($.browser.opera ? "keypress" : "keydown") + ".autocomplete", function(event) {
		// a keypress means the input has focus
		// avoids issue where input had focus before the autocomplete was applied
		hasFocus = 1;
		// track last key pressed
		lastKeyPressCode = event.keyCode;
		switch(event.keyCode) {

			case KEY.UP:
				event.preventDefault();
				if ( select.visible() ) {
					select.prev();
				} else {
					onChange(0, true);
				}
				break;

			case KEY.DOWN:
				event.preventDefault();
				if ( select.visible() ) {
					select.next();
				} else {
					onChange(0, true);
				}
				break;

			case KEY.PAGEUP:
				event.preventDefault();
				if ( select.visible() ) {
					select.pageUp();
				} else {
					onChange(0, true);
				}
				break;

			case KEY.PAGEDOWN:
				event.preventDefault();
				if ( select.visible() ) {
					select.pageDown();
				} else {
					onChange(0, true);
				}
				break;

			// matches also semicolon
			case options.multiple && $.trim(options.multipleSeparator) == "," && KEY.COMMA:
			case KEY.TAB:
			case KEY.RETURN:
				if( selectCurrent() ) {
					//event.preventDefault();
					//return false;
				}
				break;

			case KEY.ESC:
				select.hide();
				break;

			default:
				clearTimeout(timeout);
				timeout = setTimeout(onChange, options.delay);
				break;
		}
	}).focus(function(){
		// track whether the field has focus, we shouldn't process any
		// results if the field no longer has focus
		hasFocus++;
	}).blur(function() {
		hasFocus = 0;
		if (!config.mouseDownOnSelect) {
			hideResults();
		}
	}).click(function() {
		// show select when clicking in a focused field
		if ( hasFocus++ > 1 && !select.visible() ) {
			onChange(0, true);
		}
	}).bind("search", function() {
		// TODO why not just specifying both arguments?
		var fn = (arguments.length > 1) ? arguments[1] : null;
		function findValueCallback(q, data) {
			var result;
			if( data && data.length ) {
				for (var i=0; i < data.length; i++) {
					if( data[i].result.toLowerCase() == q.toLowerCase() ) {
						result = data[i];
						break;
					}
				}
			}
			if( typeof fn == "function" ) fn(result);
			else $input.trigger("result", result && [result.data, result.value]);
		}
		$.each(trimWords($input.val()), function(i, value) {
			request(value, findValueCallback, findValueCallback);
		});
	}).bind("flushCache", function() {
		cache.flush();
	}).bind("setOptions", function() {
		$.extend(options, arguments[1]);
		// if we've updated the data, repopulate
		if ( "data" in arguments[1] )
			cache.populate();
	}).bind("unautocomplete", function() {
		select.unbind();
		$input.unbind();
		$(input.form).unbind(".autocomplete");
	});


	function selectCurrent() {
		var selected = select.selected();
		if( !selected )
			return false;

		var v = selected.result;
		previousValue = v;

		if ( options.multiple ) {
			var words = trimWords($input.val());
			if ( words.length > 1 ) {
				var seperator = options.multipleSeparator.length;
				var cursorAt = $(input).selection().start;
				var wordAt, progress = 0;
				$.each(words, function(i, word) {
					progress += word.length;
					if (cursorAt <= progress) {
						wordAt = i;
						return false;
					}
					progress += seperator;
				});
				words[wordAt] = v;
				// TODO this should set the cursor to the right position, but it gets overriden somewhere
				//$.Autocompleter.Selection(input, progress + seperator, progress + seperator);
				v = words.join( options.multipleSeparator );
			}
			v += options.multipleSeparator;
		}

		$input.val(v);
		hideResultsNow();
		$input.trigger("result", [selected.data, selected.value]);
		return true;
	}

	function onChange(crap, skipPrevCheck) {
		if( lastKeyPressCode == KEY.DEL ) {
			select.hide();
			return;
		}

		var currentValue = $input.val();

		if ( !skipPrevCheck && currentValue == previousValue )
			return;

		previousValue = currentValue;

		currentValue = lastWord(currentValue);
		if ( currentValue.length >= options.minChars) {
			$input.addClass(options.loadingClass);
			if (!options.matchCase)
				currentValue = currentValue.toLowerCase();
			request(currentValue, receiveData, hideResultsNow);
		} else {
			stopLoading();
			select.hide();
		}
	};

	function trimWords(value) {
		if (!value)
			return [""];
		if (!options.multiple)
			return [$.trim(value)];
		return $.map(value.split(options.multipleSeparator), function(word) {
			return $.trim(value).length ? $.trim(word) : null;
		});
	}

	function lastWord(value) {
		if ( !options.multiple )
			return value;
		var words = trimWords(value);
		if (words.length == 1)
			return words[0];
		var cursorAt = $(input).selection().start;
		if (cursorAt == value.length) {
			words = trimWords(value)
		} else {
			words = trimWords(value.replace(value.substring(cursorAt), ""));
		}
		return words[words.length - 1];
	}

	// fills in the input box w/the first match (assumed to be the best match)
	// q: the term entered
	// sValue: the first matching result
	function autoFill(q, sValue){
		// autofill in the complete box w/the first match as long as the user hasn't entered in more data
		// if the last user key pressed was backspace, don't autofill
		if( options.autoFill && (lastWord($input.val()).toLowerCase() == q.toLowerCase()) && lastKeyPressCode != KEY.BACKSPACE ) {
			// fill in the value (keep the case the user has typed)
			$input.val($input.val() + sValue.substring(lastWord(previousValue).length));
			// select the portion of the value not typed by the user (so the next character will erase)
			$(input).selection(previousValue.length, previousValue.length + sValue.length);
		}
	};

	function hideResults() {
		clearTimeout(timeout);
		timeout = setTimeout(hideResultsNow, 200);
	};

	function hideResultsNow() {
		var wasVisible = select.visible();
		select.hide();
		clearTimeout(timeout);
		stopLoading();
		if (options.mustMatch) {
			// call search and run callback
			$input.search(
				function (result){
					// if no value found, clear the input box
					if( !result ) {
						if (options.multiple) {
							var words = trimWords($input.val()).slice(0, -1);
							$input.val( words.join(options.multipleSeparator) + (words.length ? options.multipleSeparator : "") );
						}
						else {
							$input.val( "" );
							$input.trigger("result", null);
						}
					}
				}
			);
		}
	};

	function receiveData(q, data) {
		if ( data && data.length && hasFocus ) {
			stopLoading();
			select.display(data, q);
			autoFill(q, data[0].value);
			select.show();
		} else {
			hideResultsNow();
		}
	};

	function request(term, success, failure) {
		if (!options.matchCase)
			term = term.toLowerCase();
		var data = cache.load(term);
		// recieve the cached data
		if (data && data.length) {
			success(term, data);
		// if an AJAX url has been supplied, try loading the data now
		} else if( (typeof options.url == "string") && (options.url.length > 0) ){

			var extraParams = {
				timestamp: +new Date()
			};
			$.each(options.extraParams, function(key, param) {
				extraParams[key] = typeof param == "function" ? param() : param;
			});

			$.ajax({
				// try to leverage ajaxQueue plugin to abort previous requests
				mode: "abort",
				// limit abortion to this input
				port: "autocomplete" + input.name,
				dataType: options.dataType,
				url: options.url,
				data: $.extend({
					q: lastWord(term),
					limit: options.max
				}, extraParams),
				success: function(data) {
					var parsed = options.parse && options.parse(data) || parse(data);
					cache.add(term, parsed);
					success(term, parsed);
				}
			});
		} else {
			// if we have a failure, we need to empty the list -- this prevents the the [TAB] key from selecting the last successful match
			select.emptyList();
			failure(term);
		}
	};

	function parse(data) {
		var parsed = [];
		var rows = data.split("\n");
		for (var i=0; i < rows.length; i++) {
			var row = $.trim(rows[i]);
			if (row) {
				row = row.split("|");
				parsed[parsed.length] = {
					data: row,
					value: row[0],
					result: options.formatResult && options.formatResult(row, row[0]) || row[0]
				};
			}
		}
		return parsed;
	};

	function stopLoading() {
		$input.removeClass(options.loadingClass);
	};

};

$.Autocompleter.defaults = {
	inputClass: "ac_input",
	resultsClass: "ac_results",
	loadingClass: "ac_loading",
	minChars: 1,
	delay: 400,
	matchCase: false,
	matchSubset: true,
	matchContains: false,
	cacheLength: 10,
	max: 100,
	mustMatch: false,
	extraParams: {},
	selectFirst: true,
	formatItem: function(row) { return row[0]; },
	formatMatch: null,
	autoFill: false,
	width: 0,
	multiple: false,
	multipleSeparator: ", ",
	highlight: function(value, term) {
		return value.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + term.replace(/([\^\$\(\)\[\]\{\}\*\.\+\?\|\\])/gi, "\\$1") + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");
	},
	scroll: true,
	scrollHeight: 180
};

$.Autocompleter.Cache = function(options) {

	var data = {};
	var length = 0;

	function matchSubset(s, sub) {
		if (!options.matchCase)
			s = s.toLowerCase();
		var i = s.indexOf(sub);
		if (options.matchContains == "word"){
			i = s.toLowerCase().search("\\b" + sub.toLowerCase());
		}
		if (i == -1) return false;
		return i == 0 || options.matchContains;
	};

	function add(q, value) {
		if (length > options.cacheLength){
			flush();
		}
		if (!data[q]){
			length++;
		}
		data[q] = value;
	}

	function populate(){
		if( !options.data ) return false;
		// track the matches
		var stMatchSets = {},
			nullData = 0;

		// no url was specified, we need to adjust the cache length to make sure it fits the local data store
		if( !options.url ) options.cacheLength = 1;

		// track all options for minChars = 0
		stMatchSets[""] = [];

		// loop through the array and create a lookup structure
		for ( var i = 0, ol = options.data.length; i < ol; i++ ) {
			var rawValue = options.data[i];
			// if rawValue is a string, make an array otherwise just reference the array
			rawValue = (typeof rawValue == "string") ? [rawValue] : rawValue;

			var value = options.formatMatch(rawValue, i+1, options.data.length);
			if ( value === false )
				continue;

			var firstChar = value.charAt(0).toLowerCase();
			// if no lookup array for this character exists, look it up now
			if( !stMatchSets[firstChar] )
				stMatchSets[firstChar] = [];

			// if the match is a string
			var row = {
				value: value,
				data: rawValue,
				result: options.formatResult && options.formatResult(rawValue) || value
			};

			// push the current match into the set list
			stMatchSets[firstChar].push(row);

			// keep track of minChars zero items
			if ( nullData++ < options.max ) {
				stMatchSets[""].push(row);
			}
		};

		// add the data items to the cache
		$.each(stMatchSets, function(i, value) {
			// increase the cache size
			options.cacheLength++;
			// add to the cache
			add(i, value);
		});
	}

	// populate any existing data
	setTimeout(populate, 25);

	function flush(){
		data = {};
		length = 0;
	}

	return {
		flush: flush,
		add: add,
		populate: populate,
		load: function(q) {
			if (!options.cacheLength || !length)
				return null;
			/*
			 * if dealing w/local data and matchContains than we must make sure
			 * to loop through all the data collections looking for matches
			 */
			if( !options.url && options.matchContains ){
				// track all matches
				var csub = [];
				// loop through all the data grids for matches
				for( var k in data ){
					// don't search through the stMatchSets[""] (minChars: 0) cache
					// this prevents duplicates
					if( k.length > 0 ){
						var c = data[k];
						$.each(c, function(i, x) {
							// if we've got a match, add it to the array
							if (matchSubset(x.value, q)) {
								csub.push(x);
							}
						});
					}
				}
				return csub;
			} else
			// if the exact item exists, use it
			if (data[q]){
				return data[q];
			} else
			if (options.matchSubset) {
				for (var i = q.length - 1; i >= options.minChars; i--) {
					var c = data[q.substr(0, i)];
					if (c) {
						var csub = [];
						$.each(c, function(i, x) {
							if (matchSubset(x.value, q)) {
								csub[csub.length] = x;
							}
						});
						return csub;
					}
				}
			}
			return null;
		}
	};
};

$.Autocompleter.Select = function (options, input, select, config) {
	var CLASSES = {
		ACTIVE: "ac_over"
	};

	var listItems,
		active = -1,
		data,
		term = "",
		needsInit = true,
		element,
		list;

	// Create results
	function init() {
		if (!needsInit)
			return;
		element = $("<div/>")
		.hide()
		.addClass(options.resultsClass)
		.css("position", "absolute")
		.appendTo(document.body);

		list = $("<ul/>").appendTo(element).mouseover( function(event) {
			if(target(event).nodeName && target(event).nodeName.toUpperCase() == 'LI') {
				active = $("li", list).removeClass(CLASSES.ACTIVE).index(target(event));
				$(target(event)).addClass(CLASSES.ACTIVE);
			}
		}).click(function(event) {
			$(target(event)).addClass(CLASSES.ACTIVE);
			select();
			// TODO provide option to avoid setting focus again after selection? useful for cleanup-on-focus
			input.focus();
			return false;
		}).mousedown(function() {
			config.mouseDownOnSelect = true;
		}).mouseup(function() {
			config.mouseDownOnSelect = false;
		});

		if( options.width > 0 )
			element.css("width", options.width);

		needsInit = false;
	}

	function target(event) {
		var element = event.target;
		while(element && element.tagName != "LI")
			element = element.parentNode;
		// more fun with IE, sometimes event.target is empty, just ignore it then
		if(!element)
			return [];
		return element;
	}

	function moveSelect(step) {
		listItems.slice(active, active + 1).removeClass(CLASSES.ACTIVE);
		movePosition(step);
		var activeItem = listItems.slice(active, active + 1).addClass(CLASSES.ACTIVE);
		if(options.scroll) {
			var offset = 0;
			listItems.slice(0, active).each(function() {
				offset += this.offsetHeight;
			});
			if((offset + activeItem[0].offsetHeight - list.scrollTop()) > list[0].clientHeight) {
				list.scrollTop(offset + activeItem[0].offsetHeight - list.innerHeight());
			} else if(offset < list.scrollTop()) {
				list.scrollTop(offset);
			}
		}
	};

	function movePosition(step) {
		active += step;
		if (active < 0) {
			active = listItems.size() - 1;
		} else if (active >= listItems.size()) {
			active = 0;
		}
	}

	function limitNumberOfItems(available) {
		return options.max && options.max < available
			? options.max
			: available;
	}

	function fillList() {
		list.empty();
		var max = limitNumberOfItems(data.length);
		for (var i=0; i < max; i++) {
			if (!data[i])
				continue;
			var formatted = options.formatItem(data[i].data, i+1, max, data[i].value, term);
			if ( formatted === false )
				continue;
			var li = $("<li/>").html( options.highlight(formatted, term) ).addClass(i%2 == 0 ? "ac_even" : "ac_odd").appendTo(list)[0];
			$.data(li, "ac_data", data[i]);
		}
		listItems = list.find("li");
		if ( options.selectFirst ) {
			listItems.slice(0, 1).addClass(CLASSES.ACTIVE);
			active = 0;
		}
		// apply bgiframe if available
		if ( $.fn.bgiframe )
			list.bgiframe();
	}

	return {
		display: function(d, q) {
			init();
			data = d;
			term = q;
			fillList();
		},
		next: function() {
			moveSelect(1);
		},
		prev: function() {
			moveSelect(-1);
		},
		pageUp: function() {
			if (active != 0 && active - 8 < 0) {
				moveSelect( -active );
			} else {
				moveSelect(-8);
			}
		},
		pageDown: function() {
			if (active != listItems.size() - 1 && active + 8 > listItems.size()) {
				moveSelect( listItems.size() - 1 - active );
			} else {
				moveSelect(8);
			}
		},
		hide: function() {
			element && element.hide();
			listItems && listItems.removeClass(CLASSES.ACTIVE);
			active = -1;
		},
		visible : function() {
			return element && element.is(":visible");
		},
		current: function() {
			return this.visible() && (listItems.filter("." + CLASSES.ACTIVE)[0] || options.selectFirst && listItems[0]);
		},
		show: function() {
			var offset = $(input).offset();
			element.css({
				width: typeof options.width == "string" || options.width > 0 ? options.width : $(input).innerWidth(),
				top: offset.top + input.offsetHeight,
				left: offset.left
			}).show();
			options.show(element);
			if(options.scroll) {
				list.scrollTop(0);
				list.css({
					maxHeight: options.scrollHeight,
					overflow: 'auto'
				});

				if($.browser.msie && typeof document.body.style.maxHeight === "undefined") {
					var listHeight = 0;
					listItems.each(function() {
						listHeight += this.offsetHeight;
					});
					var scrollbarsVisible = listHeight > options.scrollHeight;
					list.css('height', scrollbarsVisible ? options.scrollHeight : listHeight );
					if (!scrollbarsVisible) {
						// IE doesn't recalculate width when scrollbar disappears
						listItems.width( list.width() - parseInt(listItems.css("padding-left")) - parseInt(listItems.css("padding-right")) );
					}
				}

			}
		},
		selected: function() {
			var selected = listItems && listItems.filter("." + CLASSES.ACTIVE).removeClass(CLASSES.ACTIVE);
			return selected && selected.length && $.data(selected[0], "ac_data");
		},
		emptyList: function (){
			list && list.empty();
		},
		unbind: function() {
			element && element.remove();
		}
	};
};

$.fn.selection = function(start, end) {
	if (start !== undefined) {
		return this.each(function() {
			if( this.createTextRange ){
				var selRange = this.createTextRange();
				if (end === undefined || start == end) {
					selRange.move("character", start);
					selRange.select();
				} else {
					selRange.collapse(true);
					selRange.moveStart("character", start);
					selRange.moveEnd("character", end);
					selRange.select();
				}
			} else if( this.setSelectionRange ){
				this.setSelectionRange(start, end);
			} else if( this.selectionStart ){
				this.selectionStart = start;
				this.selectionEnd = end;
			}
		});
	}
	var field = this[0];
	if ( field.createTextRange ) {
		var range = document.selection.createRange(),
			orig = field.value,
			teststring = "<->",
			textLength = range.text.length;
		range.text = teststring;
		var caretAt = field.value.indexOf(teststring);
		field.value = orig;
		this.selection(caretAt, caretAt + textLength);
		return {
			start: caretAt,
			end: caretAt + textLength
		}
	} else if( field.selectionStart !== undefined ){
		return {
			start: field.selectionStart,
			end: field.selectionEnd
		}
	}
};

})(jQuery);
/**
 * jQuery.fn.sortElements
 * --------------
 * @author James Padolsey (http://james.padolsey.com)
 * @version 0.11
 * @updated 18-MAR-2010
 * --------------
 * @param Function comparator:
 *   Exactly the same behaviour as [1,2,3].sort(comparator)
 *
 * @param Function getSortable
 *   A function that should return the element that is
 *   to be sorted. The comparator will run on the
 *   current collection, but you may want the actual
 *   resulting sort to occur on a parent or another
 *   associated element.
 *
 *   E.g. $('td').sortElements(comparator, function(){
 *      return this.parentNode;
 *   })
 *
 *   The <td>'s parent (<tr>) will be sorted instead
 *   of the <td> itself.
 */
jQuery.fn.sortElements = (function(){

    var sort = [].sort;

    return function(comparator, getSortable) {

        getSortable = getSortable || function(){return this;};

        var placements = this.map(function(){

            var sortElement = getSortable.call(this),
                parentNode = sortElement.parentNode,

                // Since the element itself will change position, we have
                // to have some way of storing it's original position in
                // the DOM. The easiest way is to have a 'flag' node:
                nextSibling = parentNode.insertBefore(
                    document.createTextNode(''),
                    sortElement.nextSibling
                );

            return function() {

                if (parentNode === this) {
                    throw new Error(
                        "You can't sort elements if any one is a descendant of another."
                    );
                }

                // Insert before flag:
                parentNode.insertBefore(this, nextSibling);
                // Remove flag:
                parentNode.removeChild(nextSibling);

            };

        });

        return sort.call(this, comparator).each(function(i){
            placements[i].call(getSortable.call(this));
        });

    };

})();
/*!
 * ApiGen 2.8.0 - API documentation generator for PHP 5.3+
 *
 * Copyright (c) 2010-2011 David Grudl (http://davidgrudl.com)
 * Copyright (c) 2011-2012 Jaroslav Hanslík (https://github.com/kukulich)
 * Copyright (c) 2011-2012 Ondřej Nešpor (https://github.com/Andrewsville)
 *
 * For the full copyright and license information, please view
 * the file LICENSE.md that was distributed with this source code.
 */

$(function() {
	var $document = $(document);
	var $left = $('#left');
	var $right = $('#right');
	var $rightInner = $('#rightInner');
	var $splitter = $('#splitter');
	var $groups = $('#groups');
	var $content = $('#content');

	// Menu

	// Hide deep packages and namespaces
	$('ul span', $groups).click(function(event) {
		event.preventDefault();
		event.stopPropagation();
		$(this)
			.toggleClass('collapsed')
			.parent()
				.next('ul')
					.toggleClass('collapsed');
	}).click();

	$active = $('ul li.active', $groups);
	if ($active.length > 0) {
		// Open active
		$('> a > span', $active).click();
	} else {
		$main = $('> ul > li.main', $groups);
		if ($main.length > 0) {
			// Open first level of the main project
			$('> a > span', $main).click();
		} else {
			// Open first level of all
			$('> ul > li > a > span', $groups).click();
		}
	}

	// Content

	// Search autocompletion
	var autocompleteFound = false;
	var autocompleteFiles = {'c': 'class', 'co': 'constant', 'f': 'function', 'm': 'class', 'mm': 'class', 'p': 'class', 'mp': 'class', 'cc': 'class'};
	var $search = $('#search input[name=q]');
	$search
		.autocomplete(ApiGen.elements, {
			matchContains: true,
			scrollHeight: 200,
			max: 20,
			formatItem: function(data) {
				return data[1].replace(/^(.+\\)(.+)$/, '<span><small>$1</small>$2</span>');
			},
			formatMatch: function(data) {
				return data[1];
			},
			formatResult: function(data) {
				return data[1];
			},
			show: function($list) {
				var $items = $('li span', $list);
				var maxWidth = Math.max.apply(null, $items.map(function() {
					return $(this).width();
				}));
				// 10px padding
				$list
					.width(Math.max(maxWidth + 10, $search.innerWidth()))
					.css('left', $search.offset().left + $search.outerWidth() - $list.outerWidth());
			}
		}).result(function(event, data) {
			autocompleteFound = true;
			var location = window.location.href.split('/');
			location.pop();
			var parts = data[1].split(/::|$/);
			var file = $.sprintf(ApiGen.config.templates.main[autocompleteFiles[data[0]]].filename, parts[0].replace(/[^\w]/g, '.'));
			if (parts[1]) {
				file += '#' + ('mm' === data[0] || 'mp' === data[0] ? 'm' : '') + parts[1].replace(/([\w]+)\(\)/, '_$1');
			}
			location.push(file);
			window.location = location.join('/');

			// Workaround for Opera bug
			$(this).closest('form').attr('action', location.join('/'));
		}).closest('form')
			.submit(function() {
				var query = $search.val();
				if ('' === query) {
					return false;
				}

				var label = $('#search input[name=more]').val();
				if (!autocompleteFound && label && -1 === query.indexOf('more:')) {
					$search.val(query + ' more:' + label);
				}

				return !autocompleteFound && '' !== $('#search input[name=cx]').val();
			});

	// Save natural order
	$('table.summary tr[data-order]', $content).each(function(index) {
		do {
			index = '0' + index;
		} while (index.length < 3);
		$(this).attr('data-order-natural', index);
	});

	// Switch between natural and alphabetical order
	var $caption = $('table.summary', $content)
		.filter(':has(tr[data-order])')
			.find('caption');
	$caption
		.click(function() {
			var $this = $(this);
			var order = $this.data('order') || 'natural';
			order = 'natural' === order ? 'alphabetical' : 'natural';
			$this.data('order', order);
			$.cookie('order', order, {expires: 365});
			var attr = 'alphabetical' === order ? 'data-order' : 'data-order-natural';
			$this
				.closest('table')
					.find('tr').sortElements(function(a, b) {
						return $(a).attr(attr) > $(b).attr(attr) ? 1 : -1;
					});
			return false;
		})
		.addClass('switchable')
		.attr('title', 'Switch between natural and alphabetical order');
	if ((null === $.cookie('order') && 'alphabetical' === ApiGen.config.options.elementsOrder) || 'alphabetical' === $.cookie('order')) {
		$caption.click();
	}

	// Open details
	if (ApiGen.config.options.elementDetailsCollapsed) {
		$('tr', $content).filter(':has(.detailed)')
			.click(function() {
				var $this = $(this);
				$('.short', $this).hide();
				$('.detailed', $this).show();
			});
	}

	// Splitter
	var splitterWidth = $splitter.width();
	function setSplitterPosition(position)
	{
		$left.width(position);
		$right.css('margin-left', position + splitterWidth);
		$splitter.css('left', position);
	}
	function setNavigationPosition()
	{
		var width = $rightInner.width();
		$rightInner
			.toggleClass('medium', width <= 960)
			.toggleClass('small', width <= 650);
	}
	$splitter.mousedown(function() {
			$splitter.addClass('active');

			$document.mousemove(function(event) {
				if (event.pageX >= 230 && $document.width() - event.pageX >= 600 + splitterWidth) {
					setSplitterPosition(event.pageX);
					setNavigationPosition();
				}
			});

			$()
				.add($splitter)
				.add($document)
					.mouseup(function() {
						$splitter
							.removeClass('active')
							.unbind('mouseup');
						$document
							.unbind('mousemove')
							.unbind('mouseup');

						$.cookie('splitter', parseInt($splitter.css('left')), {expires: 365});
					});

			return false;
		});
	var splitterPosition = $.cookie('splitter');
	if (null !== splitterPosition) {
		setSplitterPosition(parseInt(splitterPosition));
	}
	setNavigationPosition();
	$(window).resize(setNavigationPosition);

	// Select selected lines
	var matches = window.location.hash.substr(1).match(/^\d+(?:-\d+)?(?:,\d+(?:-\d+)?)*$/);
	if (null !== matches) {
		var lists = matches[0].split(',');
		for (var i = 0; i < lists.length; i++) {
			var lines = lists[i].split('-');
			lines[1] = lines[1] || lines[0];
			for (var j = lines[0]; j <= lines[1]; j++) {
				$('#' + j).addClass('selected');
			}
		}

		var $firstLine = $('#' + parseInt(matches[0]));
		if ($firstLine.length > 0) {
			$right.scrollTop($firstLine.offset().top);
		}
	}

	// Save selected lines
	var lastLine;
	$('a.l').click(function(event) {
		event.preventDefault();

		var $selectedLine = $(this).parent();
		var selectedLine = parseInt($selectedLine.attr('id'));

		if (event.shiftKey) {
			if (lastLine) {
				for (var i = Math.min(selectedLine, lastLine); i <= Math.max(selectedLine, lastLine); i++) {
					$('#' + i).addClass('selected');
				}
			} else {
				$selectedLine.addClass('selected');
			}
		} else if (event.ctrlKey) {
			$selectedLine.toggleClass('selected');
		} else {
			var $selected = $('.l.selected')
				.not($selectedLine)
				.removeClass('selected');
			if ($selected.length > 0) {
				$selectedLine.addClass('selected');
			} else {
				$selectedLine.toggleClass('selected');
			}
		}

		lastLine = $selectedLine.hasClass('selected') ? selectedLine : null;

		// Update hash
		var lines = $('.l.selected')
			.map(function() {
				return parseInt($(this).attr('id'));
			})
			.get()
			.sort(function(a, b) {
				return a - b;
			});

		var hash = [];
		var list = [];
		for (var j = 0; j < lines.length; j++) {
			if (0 === j && j + 1 === lines.length) {
				hash.push(lines[j]);
			} else if (0 === j) {
				list[0] = lines[j];
			} else if (lines[j - 1] + 1 !== lines[j] && j + 1 === lines.length) {
				hash.push(list.join('-'));
				hash.push(lines[j]);
			} else if (lines[j - 1] + 1 !== lines[j]) {
				hash.push(list.join('-'));
				list = [lines[j]];
			} else if (j + 1 === lines.length) {
				list[1] = lines[j];
				hash.push(list.join('-'));
			} else {
				list[1] = lines[j];
			}
		}

		window.location.hash = hash.join(',');
	});
});

