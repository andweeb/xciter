(this.webpackJsonp=this.webpackJsonp||[]).push([[6],{"0iUn":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",function(){return r})},"4mXO":function(e,t,n){e.exports=n("7TPF")},"74v/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("cha2")}])},"7TPF":function(e,t,n){n("AUvm"),e.exports=n("WEpk").Object.getOwnPropertySymbols},"7gP9":function(e,t,n){"use strict";var r=n("LX0d"),i=n.n(r),a=n("YBEZ"),o=n("wigE"),c=n("uaDg"),u=n("0iUn"),s=n("sLSF"),l=n("vYYK"),f=n("rb3x"),p=n.n(f),d=function(){function e(t,n,r){var i=this;Object(u.a)(this,e),Object(l.a)(this,"id",void 0),Object(l.a)(this,"store",void 0),Object(l.a)(this,"keyset",void 0),Object(l.a)(this,"worker",void 0),Object(l.a)(this,"filename",void 0),Object(l.a)(this,"createKeyset",function(){var e=new FileReader;e.onload=function(e){e.target&&e.target.result&&i.createFile("keyset",i.keyset.name,new Uint8Array(e.target.result))},e.readAsArrayBuffer(i.keyset)}),Object(l.a)(this,"onWorkerMessage",function(e){var t=e.data;switch(t.action){case"PRINT":i.store.dispatch(Object(o.h)(i.id,t.message));break;case"PRINT_ERR":console.warn(t.message);break;case"RUNTIME_INITIALIZED":i.keyset&&i.createKeyset(),i.store.dispatch(Object(o.h)(i.id,"WebAssembly runtime initialized.")),i.store.dispatch(Object(o.i)(i.id,a.g.Ready));break;case"FILE_CREATED":i.filename=t.name,i.store.dispatch(Object(o.h)(i.id,"Created ".concat(t.name," in virtual filesystem."),!0)),"xci"===t.fileType&&i.store.dispatch(Object(o.b)(i.id));break;case"FILE_CONVERTED":i.store.dispatch(Object(o.h)(i.id,"Converted ".concat(t.name,"."))),t.nspNames.forEach(function(e){return i.store.dispatch(Object(o.e)(i.id,e))});break;case"DOWNLOAD_FILE":var n=window.document.createElement("a");n.href=window.URL.createObjectURL(new Blob([t.file],{type:"application/octet-stream"})),n.download=t.filename,document.body.appendChild(n),n.click(),document.body.removeChild(n),i.store.dispatch(Object(o.i)(i.id,a.g.Completed));break;case"WORKER_COMPLETED":i.store.dispatch(Object(o.h)(i.id,"Job completed for ".concat(i.filename,"."))),i.terminateWorker()}}),this.id=t,this.store=r,this.worker=new p.a,this.worker.onmessage=this.onWorkerMessage,this.keyset=n,this.filename=null}return Object(s.a)(e,[{key:"createFile",value:function(e,t,n){var r={name:t,fileType:e,file:n,action:"CREATE_FILE"};this.worker.postMessage(r,[r.file.buffer])}},{key:"buildMultiPartFile",value:function(e,t){var n={name:e,file:t,action:"BUILD_MULTIPART_FILE"};this.worker.postMessage(n,[n.file.buffer])}},{key:"createMultiPartFile",value:function(e,t){this.worker.postMessage({action:"CREATE_MULTIPART_FILE"})}},{key:"convertFile",value:function(){this.worker.postMessage({id:this.id,filename:this.filename,keyset:this.keyset.name,action:"CONVERT_FILE"})}},{key:"downloadFile",value:function(e){this.store.dispatch(Object(o.h)(this.id,"Downloading ".concat(e,"..."))),this.worker.postMessage({filename:e,action:"DOWNLOAD_FILE"})}},{key:"terminateWorker",value:function(){this.worker.terminate()}}]),e}(),h=new i.a;t.a=function(e){return function(t){return function(n){var r=t(n),i=e.getState();switch(n.type){case a.h:var u=i.keyset.file;e.dispatch(Object(o.h)(n.id,"Setting up worker environment and WebAssembly runtime.")),h.set(n.id,new d(n.id,u,e));break;case a.b:h.forEach(function(e){e.keyset=n.file,e.createKeyset()});break;case a.i:var s=h.get(n.id);s&&(s.terminateWorker(),h.delete(n.id));break;case a.d:var l=h.get(n.id),f=new FileReader,p=!0;f.onprogress=function(t){var r=!p,i=Object(c.b)(t.loaded),a="".concat(i," transferred to worker.");e.dispatch(Object(o.h)(n.id,a,r)),p=!1},f.onerror=function(e){return console.error("Error reading file",e)},f.onload=function(e){e.target&&e.target.result&&l.createFile("xci",n.file.name,new Uint8Array(e.target.result))},f.readAsArrayBuffer(n.file);break;case a.e:for(var b=h.get(n.id),v=new FileReader,y=[],g=0,w=0,m=0;w<n.file.size;w+=c.a,m++){var k=w+c.a-1,O=n.file.slice(w,k);y.push(O)}var E=!0;v.onprogress=function(t){var r=!E,i=Object(c.b)(t.loaded),a="".concat(i," transferred to worker.");e.dispatch(Object(o.h)(n.id,a,r)),E=!1},v.onerror=function(e){return console.error("Error reading file",e)},v.onload=function(e){g+=1,e.target&&e.target.result&&b.buildMultiPartFile(n.file.name,new Uint8Array(e.target.result)),y[g]?v.readAsArrayBuffer(y[g]):b.createMultiPartFile()},v.readAsArrayBuffer(y[g]);break;case a.c:h.get(n.id).convertFile();break;case a.f:h.get(n.id).downloadFile(n.nspName)}return r}}}},"8Bbg":function(e,t,n){e.exports=n("B5Ud")},B5Ud:function(e,t,n){"use strict";var r=n("/HRN"),i=n("WaGi"),a=n("ZDA2"),o=n("/+P4"),c=n("N9n2"),u=n("ln6h"),s=n("KI45");t.__esModule=!0,t.Container=function(e){0;return e.children},t.createUrl=w,t.default=void 0;var l=s(n("htGi")),f=s(n("+oT+")),p=s(n("q1tI")),d=s(n("17x9")),h=n("g/15");t.AppInitialProps=h.AppInitialProps;var b=n("nOHt");function v(e){return y.apply(this,arguments)}function y(){return(y=(0,f.default)(u.mark(function e(t){var n,r,i;return u.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,r=t.ctx,e.next=3,(0,h.loadGetInitialProps)(n,r);case 3:return i=e.sent,e.abrupt("return",{pageProps:i});case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}var g=function(e){function t(){return r(this,t),a(this,o(t).apply(this,arguments))}return c(t,e),i(t,[{key:"getChildContext",value:function(){return{router:(0,b.makePublicRouterInstance)(this.props.router)}}},{key:"componentDidCatch",value:function(e,t){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,i=w(t);return p.default.createElement(n,(0,l.default)({},r,{url:i}))}}]),t}(p.default.Component);function w(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return r},get pathname(){return t},get asPath(){return n},back:function(){e.back()},push:function(t,n){return e.push(t,n)},pushTo:function(t,n){var r=n?t:"",i=n||t;return e.push(r,i)},replace:function(t,n){return e.replace(t,n)},replaceTo:function(t,n){var r=n?t:"",i=n||t;return e.replace(r,i)}}}t.default=g,g.childContextTypes={router:d.default.object},g.origGetInitialProps=v,g.getInitialProps=v},BhN1:function(e,t,n){"use strict";(function(e){var r=n("ANjH"),i=n("7gP9"),a=n("Z5Xq"),o=e.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||r.d;t.a=function(e,t){return Object(r.e)(a.a,o(Object(r.a)(i.a)))}}).call(this,n("yLpj"))},Z5Xq:function(e,t,n){"use strict";var r=n("ANjH"),i=n("YBEZ"),a={file:null};var o=n("Jo+v"),c=n.n(o),u=n("4mXO"),s=n.n(u),l=n("pLtp"),f=n.n(l),p=n("vYYK");function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=f()(n);"function"===typeof s.a&&(r=r.concat(s()(n).filter(function(e){return c()(n,e).enumerable}))),r.forEach(function(t){Object(p.a)(e,t,n[t])})}return e}var h=n("p0XB"),b=n.n(h);var v=n("d04V"),y=n.n(v),g=n("yLu3"),w=n.n(g);function m(e){return function(e){if(b()(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(w()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return y()(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var k={files:[]};function O(e,t,n,r){return function(i){if(i.id!==e)return i;var a=f()(i),o=new File([i],i.name);return a.forEach(function(e){o[e]=i[e]}),o[t]=r?r(i):n,o}}function E(e,t){return e.some(function(e){return e.id===t.id})?e:[].concat(m(e),[t])}t.a=Object(r.c)({keyset:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.b:return{file:t.file};default:return e}},files:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.a:return d({},e,{files:[].concat(m(e.files),m(t.files)).reduce(E,[])});case i.i:return d({},e,{files:e.files.filter(function(e){return e.id!==t.file.id})});case i.k:return d({},e,{files:e.files.map(O(t.id,"status",t.status))});case i.j:return d({},e,{files:e.files.map(O(t.id,"log",t.message,function(e){return t.overwrite?[].concat(m(e.log.slice(0,e.log.length-1)),[t.message]):[].concat(m(e.log),[t.message])}))});case i.h:return d({},e,{files:e.files.map(O(t.id,"status",i.g.Initializing))});case i.d:case i.e:return d({},e,{files:e.files.map(O(t.id,"status",i.g.Preparing))});case i.c:return d({},e,{files:e.files.map(O(t.id,"status",i.g.Converting))});case i.f:return d({},e,{files:e.files.map(O(t.id,"status",i.g.Downloading))});default:return e}}})},cha2:function(e,t,n){"use strict";n.r(t);var r=n("ln6h"),i=n.n(r),a=n("eVuF"),o=n.n(a);function c(e,t,n,r,i,a,c){try{var u=e[a](c),s=u.value}catch(l){return void n(l)}u.done?t(s):o.a.resolve(s).then(r,i)}var u=n("0iUn"),s=n("sLSF"),l=n("XVgq"),f=n.n(l),p=n("Z7t5"),d=n.n(p);function h(e){return(h="function"===typeof d.a&&"symbol"===typeof f.a?function(e){return typeof e}:function(e){return e&&"function"===typeof d.a&&e.constructor===d.a&&e!==d.a.prototype?"symbol":typeof e})(e)}function b(e){return(b="function"===typeof d.a&&"symbol"===h(f.a)?function(e){return h(e)}:function(e){return e&&"function"===typeof d.a&&e.constructor===d.a&&e!==d.a.prototype?"symbol":h(e)})(e)}function v(e,t){return!t||"object"!==b(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var y=n("Bhuq"),g=n.n(y),w=n("TRZx"),m=n.n(w);function k(e){return(k=m.a?g.a:function(e){return e.__proto__||g()(e)})(e)}var O=n("SqZg"),E=n.n(O);function _(e,t){return(_=m.a||function(e,t){return e.__proto__=t,e})(e,t)}var j=n("q1tI"),P=n.n(j),x=n("/MKj"),I=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),S=function(){return(S=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},A=function(e,t,n,r){return new(n||(n=Promise))(function(i,a){function o(e){try{u(r.next(e))}catch(t){a(t)}}function c(e){try{u(r.throw(e))}catch(t){a(t)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(o,c)}u((r=r.apply(e,t||[])).next())})},T=function(e,t){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(c){a=[6,c],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},F=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},R={storeKey:"__NEXT_REDUX_STORE__",debug:!1,serializeState:function(e){return e},deserializeState:function(e){return e}},C=n("8Bbg"),L=n.n(C),N=n("BhN1"),M=P.a.createElement,U=function(e){function t(){return Object(u.a)(this,t),v(this,k(t).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=E()(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,L.a),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.Component,n=e.pageProps,r=e.store;return M(x.a,{store:r},M(t,n))}}],[{key:"getInitialProps",value:function(){var e,t=(e=i.a.mark(function e(t){var n,r,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.Component,r=t.ctx,!n.getInitialProps){e.next=7;break}return e.next=4,n.getInitialProps(r);case 4:e.t0=e.sent,e.next=8;break;case 7:e.t0={};case 8:return a=e.t0,e.abrupt("return",{pageProps:a});case 10:case"end":return e.stop()}},e)}),function(){var t=this,n=arguments;return new o.a(function(r,i){var a=e.apply(t,n);function o(e){c(a,r,i,o,u,"next",e)}function u(e){c(a,r,i,o,u,"throw",e)}o(void 0)})});return function(e){return t.apply(this,arguments)}}()}]),t}();t.default=function(e,t){t=S(S({},R),t);var n="undefined"===typeof window,r=function(r){var i=r.initialState,a=r.ctx,o=t.storeKey,c=function(){return e(t.deserializeState(i),S(S(S({},a),t),{isServer:n}))};return n?c():(o in window||(window[o]=c()),window[o])};return function(e){var i;return(i=function(n){function i(e,i){var a=n.call(this,e,i)||this,o=e.initialState;return t.debug&&console.log("4. WrappedApp.render created new store with initialState",o),a.store=r({initialState:o}),a}return I(i,n),i.prototype.render=function(){var t=this.props,n=t.initialProps,r=(t.initialState,F(t,["initialProps","initialState"]));return P.a.createElement(e,S({},r,n,{store:this.store}))},i}(j.Component)).displayName="withRedux("+(e.displayName||e.name||"App")+")",i.getInitialProps=function(i){return A(void 0,void 0,void 0,function(){var a,o;return T(this,function(c){switch(c.label){case 0:if(!i)throw new Error("No app context");if(!i.ctx)throw new Error("No page context");return a=r({ctx:i.ctx}),t.debug&&console.log("1. WrappedApp.getInitialProps wrapper got the store with state",a.getState()),i.ctx.store=a,i.ctx.isServer=n,o={},"getInitialProps"in e?[4,e.getInitialProps.call(e,i)]:[3,2];case 1:o=c.sent(),c.label=2;case 2:return t.debug&&console.log("3. WrappedApp.getInitialProps has store state",a.getState()),[2,{isServer:n,initialState:n?t.serializeState(a.getState()):a.getState(),initialProps:o}]}})})},i}}(N.a)(U)},rb3x:function(e,t){e.exports=function(){return new Worker("/xciter/_next/static/bbbee76a32950307cbd0.worker.js")}},sLSF:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n("hfKm"),i=n.n(r);function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),i()(e,r.key,r)}}function o(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}}},[["74v/",1,0]]]);