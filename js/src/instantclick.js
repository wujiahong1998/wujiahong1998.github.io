// build time:Wed Feb 05 2020 15:57:09 GMT+0800 (GMT+08:00)
var InstantClick=function(e,t){var r=navigator.userAgent,n=r.indexOf(" CriOS/")>-1,a="createTouch"in e,f,s,o,u,l={},c,d=false,h=false,v=false,p=false,b={},g=false,m=false,y=[],w,E,T,L={fetch:[],receive:[],wait:[],change:[]};function A(e){var t=e.indexOf("#");if(t<0){return e}return e.substr(0,t)}function H(e){while(e&&e.nodeName!="A"){e=e.parentNode}return e}function x(e){do{if(!e.hasAttribute){break}if(e.hasAttribute("data-instant")){return false}if(e.hasAttribute("data-no-instant")){return true}}while(e=e.parentNode);return false}function D(e){do{if(!e.hasAttribute){break}if(e.hasAttribute("data-no-instant")){return false}if(e.hasAttribute("data-instant")){return true}}while(e=e.parentNode);return false}function M(e){var r=t.protocol+"//"+t.host;if(e.target||e.hasAttribute("download")||e.href.indexOf(r+"/")!=0||e.href.indexOf("#")>-1&&A(e.href)==f||(w?!D(e):x(e))){return false}return true}function O(e,t,r,n){var i=false;for(var a=0;a<L[e].length;a++){if(e=="receive"){var f=L[e][a](t,r,n);if(f){if("body"in f){r=f.body}if("title"in f){n=f.title}i=f}}else{L[e][a](t,r,n)}}return i}function Y(t,r,i,a){e.documentElement.replaceChild(r,e.body);if(i){history.pushState(null,null,i);var s=i.indexOf("#"),o=s>-1&&e.getElementById(i.substr(s+1)),u=0;if(o){while(o.offsetParent){u+=o.offsetTop;o=o.offsetParent}}scrollTo(0,u);f=A(i)}else{scrollTo(0,a)}if(n&&e.title==t){e.title=t+String.fromCharCode(160)}else{e.title=t}R();O("change",false);var l=e.createEvent("HTMLEvents");l.initEvent("instantclick:newpage",true,true);dispatchEvent(l)}function C(){g=false;m=false}function k(e){return e.replace(/<noscript[\s\S]+<\/noscript>/gi,"")}function S(e){if(u>+new Date-500){return}var t=H(e.target);if(!t||!M(t)){return}q(t.href)}function N(e){if(u>+new Date-500){return}var t=H(e.target);if(!t||!M(t)){return}t.addEventListener("mouseout",K);if(!T){q(t.href)}else{s=t.href;o=setTimeout(q,T)}}function B(e){u=+new Date;var t=H(e.target);if(!t||!M(t)){return}if(E){t.removeEventListener("mousedown",S)}else{t.removeEventListener("mouseover",N)}q(t.href)}function I(e){var t=H(e.target);if(!t||!M(t)){return}if(e.which>1||e.metaKey||e.ctrlKey){return}e.preventDefault();G(t.href)}function K(){if(o){clearTimeout(o);o=false;return}if(!g||m){return}c.abort();C()}function P(){if(c.readyState<4){return}if(c.status==0){return}b.ready=+new Date-b.start;if(c.getResponseHeader("Content-Type").match(/\/(x|ht|xht)ml/)){var t=e.implementation.createHTMLDocument("");t.documentElement.innerHTML=k(c.responseText);h=t.title;p=t.body;var r=O("receive",d,p,h);if(r){if("body"in r){p=r.body}if("title"in r){h=r.title}}var n=A(d);l[n]={body:p,title:h,scrollY:n in l?l[n].scrollY:0};var i=t.head.children,a=0,f,s;for(var o=i.length-1;o>=0;o--){f=i[o];if(f.hasAttribute("data-instant-track")){s=f.getAttribute("href")||f.getAttribute("src")||f.innerHTML;for(var u=y.length-1;u>=0;u--){if(y[u]==s){a++}}}}if(a!=y.length){v=true}}else{v=true}if(m){m=false;G(d)}}function R(t){e.body.addEventListener("touchstart",B,true);if(E){e.body.addEventListener("mousedown",S,true)}else{e.body.addEventListener("mouseover",N,true)}e.body.addEventListener("click",I,true);if(!t){var r=e.body.getElementsByTagName("script"),n,a,f,s;for(i=0,j=r.length;i<j;i++){n=r[i];if(n.hasAttribute("data-no-instant")){continue}a=e.createElement("script");if(n.src){a.src=n.src}if(n.innerHTML){a.innerHTML=n.innerHTML}f=n.parentNode;s=n.nextSibling;f.removeChild(n);f.insertBefore(a,s)}}}function q(e){if(!E&&"display"in b&&+new Date-(b.start+b.display)<100){return}if(o){clearTimeout(o);o=false}if(!e){e=s}if(g&&(e==d||m)){return}g=true;m=false;d=e;p=false;v=false;b={start:+new Date};O("fetch");c.open("GET",e);c.send()}function G(e){if(!("display"in b)){b.display=+new Date-b.start}if(o||!g){if(o&&d&&d!=e){t.href=e;return}q(e);O("wait");m=true;return}if(m){t.href=e;return}if(v){t.href=d;return}if(!p){O("wait");m=true;return}l[f].scrollY=pageYOffset;C();Y(h,p,d)}var X="pushState"in history&&(!r.match("Android")||r.match("Chrome/"))&&t.protocol!="file:";function z(){if(f){return}if(!X){O("change",true);return}for(var r=arguments.length-1;r>=0;r--){var n=arguments[r];if(n===true){w=true}else if(n=="mousedown"){E=true}else if(typeof n=="number"){T=n}}f=A(t.href);l[f]={body:e.body,title:e.title,scrollY:pageYOffset};var i=e.head.children,a,s;for(var r=i.length-1;r>=0;r--){a=i[r];if(a.hasAttribute("data-instant-track")){s=a.getAttribute("href")||a.getAttribute("src")||a.innerHTML;y.push(s)}}c=new XMLHttpRequest;c.addEventListener("readystatechange",P);R(true);O("change",true);addEventListener("popstate",function(){var e=A(t.href);if(e==f){return}if(!(e in l)){t.href=t.href;return}l[f].scrollY=pageYOffset;f=e;Y(l[e].title,l[e].body,false,l[e].scrollY)})}function F(e,t){L[e].push(t)}return{supported:X,init:z,on:F}}(document,location);
//rebuild by neat 