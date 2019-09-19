/*! Built with http://stenciljs.com */
UpiWebComponents.loadBundle("kfldtaq1",["exports","./chunk1.js"],function(t,n){var e=window.UpiWebComponents.h,o=function(){function t(){}return t.prototype.render=function(){return e("div",null,e("main",null,e("stencil-router",null,e("stencil-route",{url:"/",component:"app-home",exact:!0}),e("stencil-route",{url:"/profile/:name",component:"app-profile"}))))},Object.defineProperty(t,"is",{get:function(){return"my-app"},enumerable:!0,configurable:!0}),t}(),i=function(){function t(){this.unsubscribe=function(){},this.componentProps={},this.exact=!1,this.group=null,this.groupIndex=null,this.routeRender=null,this.match=null}return t.prototype.computeMatch=function(t){return t||(t=this.activeRouter.get("location").pathname),n.matchPath(t,{path:this.url,exact:this.exact,strict:!0})},t.prototype.componentWillLoad=function(){var t=this;this.unsubscribe=this.activeRouter.subscribe(function(n){return t.match=n?null:t.computeMatch(),t.match},this.group,this.groupIndex),this.group||(this.match=this.computeMatch())},t.prototype.componentDidUnload=function(){this.unsubscribe()},t.prototype.render=function(){if(!this.activeRouter||!this.match)return null;var t=Object.assign({},this.componentProps,{history:this.activeRouter.get("history"),match:this.match});if(this.routeRender)return this.routeRender(Object.assign({},t,{component:this.component}));if(this.component){var n=this.component;return e(n,Object.assign({},t))}},Object.defineProperty(t,"is",{get:function(){return"stencil-route"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{activeRouter:{context:"activeRouter"},component:{type:String,attr:"component"},componentProps:{type:"Any",attr:"component-props"},exact:{type:Boolean,attr:"exact"},group:{type:String,attr:"group"},groupIndex:{type:Number,attr:"group-index"},location:{context:"location"},match:{state:!0},routeRender:{type:"Any",attr:"route-render"},url:{type:"Any",attr:"url"}}},enumerable:!0,configurable:!0}),t}();function r(t,n){return new RegExp("^"+n+"(\\/|\\?|#|$)","i").test(t)}function a(t,n){return r(t,n)?t.substr(n.length):t}function c(t){return"/"===t.charAt(t.length-1)?t.slice(0,-1):t}function s(t){return"/"===t.charAt(0)?t:"/"+t}function u(t){return"/"===t.charAt(0)?t.substr(1):t}function h(t){var n=t.pathname,e=t.search,o=t.hash,i=n||"/";return e&&"?"!==e&&(i+="?"===e.charAt(0)?e:"?"+e),o&&"#"!==o&&(i+="#"===o.charAt(0)?o:"#"+o),i}function f(t){return"/"===t.charAt(0)}function l(t,n){for(var e=n,o=e+1,i=t.length;o<i;e+=1,o+=1)t[e]=t[o];t.pop()}function p(t,n,e,o){var i,r;"string"==typeof t?(i=function(t){var n=t||"/",e="",o="",i=n.indexOf("#");-1!==i&&(o=n.substr(i),n=n.substr(0,i));var r=n.indexOf("?");return-1!==r&&(e=n.substr(r),n=n.substr(0,r)),{pathname:n,search:"?"===e?"":e,hash:"#"===o?"":o}}(t)).state=n:(void 0===(i=Object.assign({},t)).pathname&&(i.pathname=""),i.search?"?"!==i.search.charAt(0)&&(i.search="?"+i.search):i.search="",i.hash?"#"!==i.hash.charAt(0)&&(i.hash="#"+i.hash):i.hash="",void 0!==n&&void 0===i.state&&(i.state=n));try{i.pathname=decodeURI(i.pathname)}catch(t){throw t instanceof URIError?new URIError('Pathname "'+i.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):t}return e&&(i.key=e),o?i.pathname?"/"!==i.pathname.charAt(0)&&(i.pathname=function(t,n){void 0===n&&(n="");var e,o=t&&t.split("/")||[],i=n&&n.split("/")||[],r=t&&f(t),a=n&&f(n),c=r||a;if(t&&f(t)?i=o:o.length&&(i.pop(),i=i.concat(o)),!i.length)return"/";if(i.length){var s=i[i.length-1];e="."===s||".."===s||""===s}else e=!1;for(var u=0,h=i.length;h>=0;h--){var p=i[h];"."===p?l(i,h):".."===p?(l(i,h),u++):u&&(l(i,h),u--)}if(!c)for(;u--;u)i.unshift("..");!c||""===i[0]||i[0]&&f(i[0])||i.unshift("");var d=i.join("/");return e&&"/"!==d.substr(-1)&&(d+="/"),d}(i.pathname,o.pathname)):i.pathname=o.pathname:i.pathname||(i.pathname="/"),i.query=(r=i.search)?(/^[?#]/.test(r)?r.slice(1):r).split("&").reduce(function(t,n){var e=n.split("="),o=e[0],i=e[1];return t[o]=i?decodeURIComponent(i.replace(/\+/g," ")):"",t},{}):{},i}function d(t){for(var n=[],e=1;e<arguments.length;e++)n[e-1]=arguments[e];t||console.error.apply(console,n)}function v(t){for(var n=[],e=1;e<arguments.length;e++)n[e-1]=arguments[e];t||console.warn.apply(console,n)}var g=function(){var t,n=[];return{setPrompt:function(n){return v(null==t,"A history supports only one prompt at a time"),t=n,function(){t===n&&(t=null)}},confirmTransitionTo:function(n,e,o,i){if(null!=t){var r="function"==typeof t?t(n,e):t;"string"==typeof r?"function"==typeof o?o(r,i):(v(!1,"A history needs a getUserConfirmation function in order to use a prompt message"),i(!0)):i(!1!==r)}else i(!0)},appendListener:function(t){var e=!0,o=function(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];e&&t.apply(void 0,n)};return n.push(o),function(){e=!1,n=n.filter(function(t){return t!==o})}},notifyListeners:function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];n.forEach(function(n){return n.apply(void 0,t)})}}},m=!("undefined"==typeof window||!window.document||!window.document.createElement),y=function(t,n,e){return t.addEventListener?t.addEventListener(n,e,!1):t.attachEvent("on"+n,e)},b=function(t,n,e){return t.removeEventListener?t.removeEventListener(n,e,!1):t.detachEvent("on"+n,e)},w=function(t,n){return n(window.confirm(t))},x=function(){try{return window.history.state||{}}catch(t){return{}}},O={hashbang:{encodePath:function(t){return"!"===t.charAt(0)?t:"!/"+u(t)},decodePath:function(t){return"!"===t.charAt(0)?t.substr(1):t}},noslash:{encodePath:u,decodePath:s},slash:{encodePath:s,decodePath:s}},P=function(){var t=window.location.href,n=t.indexOf("#");return-1===n?"":t.substring(n+1)},A=function(t){var n=window.location.href.indexOf("#");window.location.replace(window.location.href.slice(0,n>=0?n:0)+"#"+t)},R={browser:function(t){void 0===t&&(t={}),d(m,"Browser history needs a DOM");var n,e=window.history,o=(-1===(n=window.navigator.userAgent).indexOf("Android 2.")&&-1===n.indexOf("Android 4.0")||-1===n.indexOf("Mobile Safari")||-1!==n.indexOf("Chrome")||-1!==n.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history,i=!(-1===window.navigator.userAgent.indexOf("Trident")),u=t.forceRefresh,f=void 0!==u&&u,l=t.getUserConfirmation,O=void 0===l?w:l,P=t.keyLength,A=void 0===P?6:P,R=t.basename?c(s(t.basename)):"",k=function(t){var n=(t=t||{}).key,e=t.state,o=window.location,i=o.pathname+o.search+o.hash;return v(!R||r(i,R),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+i+'" to begin with "'+R+'".'),R&&(i=a(i,R)),p(i,e,n)},L=function(){return Math.random().toString(36).substr(2,A)},S=g(),j=function(t){Object.assign(_,t),_.length=e.length,S.notifyListeners(_.location,_.action)},E=function(t){(function(t){return void 0===t.state&&-1===navigator.userAgent.indexOf("CriOS")})(t)||C(k(t.state))},T=function(){C(k(x()))},U=!1,C=function(t){U?(U=!1,j()):S.confirmTransitionTo(t,"POP",O,function(n){n?j({action:"POP",location:t}):H(t)})},H=function(t){var n=_.location,e=I.indexOf(n.key);-1===e&&(e=0);var o=I.indexOf(t.key);-1===o&&(o=0);var i=e-o;i&&(U=!0,W(i))},M=k(x()),I=[M.key],B=function(t){return R+h(t)},W=function(t){e.go(t)},D=0,Y=function(t){1===(D+=t)?(y(window,"popstate",E),i&&y(window,"hashchange",T)):0===D&&(b(window,"popstate",E),i&&b(window,"hashchange",T))},F=!1,_={length:e.length,action:"POP",location:M,createHref:B,push:function(t,n){v(!("object"==typeof t&&void 0!==t.state&&void 0!==n),"You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");var i=p(t,n,L(),_.location);S.confirmTransitionTo(i,"PUSH",O,function(t){if(t){var n=B(i),r=i.key,a=i.state;if(o)if(e.pushState({key:r,state:a},null,n),f)window.location.href=n;else{var c=I.indexOf(_.location.key),s=I.slice(0,-1===c?0:c+1);s.push(i.key),I=s,j({action:"PUSH",location:i})}else v(void 0===a,"Browser history cannot push state in browsers that do not support HTML5 history"),window.location.href=n}})},replace:function(t,n){v(!("object"==typeof t&&void 0!==t.state&&void 0!==n),"You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");var i=p(t,n,L(),_.location);S.confirmTransitionTo(i,"REPLACE",O,function(t){if(t){var n=B(i),r=i.key,a=i.state;if(o)if(e.replaceState({key:r,state:a},null,n),f)window.location.replace(n);else{var c=I.indexOf(_.location.key);-1!==c&&(I[c]=i.key),j({action:"REPLACE",location:i})}else v(void 0===a,"Browser history cannot replace state in browsers that do not support HTML5 history"),window.location.replace(n)}})},go:W,goBack:function(){return W(-1)},goForward:function(){return W(1)},block:function(t){void 0===t&&(t="");var n=S.setPrompt(t);return F||(Y(1),F=!0),function(){return F&&(F=!1,Y(-1)),n()}},listen:function(t){var n=S.appendListener(t);return Y(1),function(){Y(-1),n()}}};return _},hash:function(t){void 0===t&&(t={}),d(m,"Hash history needs a DOM");var n=window.history,e=-1===window.navigator.userAgent.indexOf("Firefox"),o=t.getUserConfirmation,i=void 0===o?w:o,u=t.hashType,f=void 0===u?"slash":u,l=t.basename?c(s(t.basename)):"",x=O[f],R=x.encodePath,k=x.decodePath,L=function(){var t=k(P());return v(!l||r(t,l),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+t+'" to begin with "'+l+'".'),l&&(t=a(t,l)),p(t)},S=g(),j=function(t){Object.assign(q,t),q.length=n.length,S.notifyListeners(q.location,q.action)},E=!1,T=null,U=function(){var t,n,e=P(),o=R(e);if(e!==o)A(o);else{var i=L(),r=q.location;if(!E&&(n=i,(t=r).pathname===n.pathname&&t.search===n.search&&t.hash===n.hash&&t.key===n.key&&function t(n,e){if(n===e)return!0;if(null==n||null==e)return!1;if(Array.isArray(n))return Array.isArray(e)&&n.length===e.length&&n.every(function(n,o){return t(n,e[o])});var o=typeof n;if(o!==typeof e)return!1;if("object"===o){var i=n.valueOf(),r=e.valueOf();if(i!==n||r!==e)return t(i,r);var a=Object.keys(n),c=Object.keys(e);return a.length===c.length&&a.every(function(o){return t(n[o],e[o])})}return!1}(t.state,n.state)))return;if(T===h(i))return;T=null,C(i)}},C=function(t){E?(E=!1,j()):S.confirmTransitionTo(t,"POP",i,function(n){n?j({action:"POP",location:t}):H(t)})},H=function(t){var n=q.location,e=W.lastIndexOf(h(n));-1===e&&(e=0);var o=W.lastIndexOf(h(t));-1===o&&(o=0);var i=e-o;i&&(E=!0,D(i))},M=P(),I=R(M);M!==I&&A(I);var B=L(),W=[h(B)],D=function(t){v(e,"Hash history go(n) causes a full page reload in this browser"),n.go(t)},Y=0,F=function(t){1===(Y+=t)?y(window,"hashchange",U):0===Y&&b(window,"hashchange",U)},_=!1,q={length:n.length,action:"POP",location:B,createHref:function(t){return"#"+R(l+h(t))},push:function(t,n){v(void 0===n,"Hash history cannot push state; it is ignored");var e=p(t,void 0,void 0,q.location);S.confirmTransitionTo(e,"PUSH",i,function(t){if(t){var n=h(e),o=R(l+n);if(P()!==o){T=n,function(t){window.location.hash=t}(o);var i=W.lastIndexOf(h(q.location)),r=W.slice(0,-1===i?0:i+1);r.push(n),W=r,j({action:"PUSH",location:e})}else v(!1,"Hash history cannot PUSH the same path; a new entry will not be added to the history stack"),j()}})},replace:function(t,n){v(void 0===n,"Hash history cannot replace state; it is ignored");var e=p(t,void 0,void 0,q.location);S.confirmTransitionTo(e,"REPLACE",i,function(t){if(t){var n=h(e),o=R(l+n);P()!==o&&(T=n,A(o));var i=W.indexOf(h(q.location));-1!==i&&(W[i]=n),j({action:"REPLACE",location:e})}})},go:D,goBack:function(){return D(-1)},goForward:function(){return D(1)},block:function(t){void 0===t&&(t="");var n=S.setPrompt(t);return _||(F(1),_=!0),function(){return _&&(_=!1,F(-1)),n()}},listen:function(t){var n=S.appendListener(t);return F(1),function(){F(-1),n()}}};return q}},k=function(){function t(){this.root="/",this.historyType="browser",this.titleSuffix="",this.unsubscribe=function(){},this.match=null}return t.prototype.titleSuffixChanged=function(t){this.activeRouter.set({titleSuffix:t})},t.prototype.computeMatch=function(t){return{path:this.root,url:this.root,isExact:t===this.root,params:{}}},t.prototype.componentWillLoad=function(){var t=this,n=R[this.historyType]();n.listen(function(n){t.activeRouter.set({location:t.getLocation(n)})}),this.activeRouter.set({location:this.getLocation(n.location),titleSuffix:this.titleSuffix,root:this.root,history:n}),this.unsubscribe=this.activeRouter.subscribe(function(){t.match=t.computeMatch()}),this.match=this.computeMatch()},t.prototype.getLocation=function(t){var n=0==t.pathname.indexOf(this.root)?"/"+t.pathname.slice(this.root.length):t.pathname;return Object.assign({},t,{pathname:n})},t.prototype.componentDidUnload=function(){this.unsubscribe()},t.prototype.render=function(){return e("slot",null)},Object.defineProperty(t,"is",{get:function(){return"stencil-router"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{activeRouter:{context:"activeRouter"},historyType:{type:"Any",attr:"history-type"},match:{state:!0},root:{type:String,attr:"root"},titleSuffix:{type:String,attr:"title-suffix",watchCallbacks:["titleSuffixChanged"]}}},enumerable:!0,configurable:!0}),t}();t.MyApp=o,t.StencilRoute=i,t.StencilRouter=k,Object.defineProperty(t,"__esModule",{value:!0})});