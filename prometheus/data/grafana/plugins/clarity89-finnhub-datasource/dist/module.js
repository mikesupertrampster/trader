/*! For license information please see module.js.LICENSE.txt */
define(["@grafana/data","react","@grafana/ui","rxjs"],(function(e,t,r,n){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=6)}([function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=n},function(e,t,r){(function(t){var r="[\\ud800-\\udfff]",n="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",a="\\ud83c[\\udffb-\\udfff]",o="[^\\ud800-\\udfff]",u="(?:\\ud83c[\\udde6-\\uddff]){2}",i="[\\ud800-\\udbff][\\udc00-\\udfff]",l="(?:"+n+"|"+a+")"+"?",c="[\\ufe0e\\ufe0f]?"+l+("(?:\\u200d(?:"+[o,u,i].join("|")+")[\\ufe0e\\ufe0f]?"+l+")*"),f="(?:"+[o+n+"?",n,u,i,r].join("|")+")",s=RegExp(a+"(?="+a+")|"+f+c,"g"),p=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),d="object"==typeof t&&t&&t.Object===Object&&t,y="object"==typeof self&&self&&self.Object===Object&&self,v=d||y||Function("return this")();function b(e){return p.test(e)}function m(e){return b(e)?function(e){return e.match(s)||[]}(e):function(e){return e.split("")}(e)}var h=Object.prototype.toString,g=v.Symbol,w=g?g.prototype:void 0,T=w?w.toString:void 0;function S(e){if("string"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==h.call(e)}(e))return T?T.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function F(e,t,r){var n=e.length;return r=void 0===r?n:r,!t&&r>=n?e:function(e,t,r){var n=-1,a=e.length;t<0&&(t=-t>a?0:a+t),(r=r>a?a:r)<0&&(r+=a),a=t>r?0:r-t>>>0,t>>>=0;for(var o=Array(a);++n<a;)o[n]=e[n+t];return o}(e,t,r)}function j(e){return null==e?"":S(e)}var x,O=(x="toUpperCase",function(e){var t=b(e=j(e))?m(e):void 0,r=t?t[0]:e.charAt(0),n=t?F(t,1).join(""):e.slice(1);return r[x]()+n});e.exports=function(e){return O(j(e).toLowerCase())}}).call(this,r(5))},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){"use strict";r.r(t);var n=r(0),a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};var o=function(){return(o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function u(e,t,r,n){return new(r||(r=Promise))((function(a,o){function u(e){try{l(n.next(e))}catch(e){o(e)}}function i(e){try{l(n.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(u,i)}l((n=n.apply(e,t||[])).next())}))}function i(e,t){var r,n,a,o,u={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;u;)try{if(r=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,n=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(a=u.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){u=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){u.label=o[1];break}if(6===o[0]&&u.label<a[1]){u.label=a[1],a=o;break}if(a&&u.label<a[2]){u.label=a[2],u.ops.push(o);break}a[2]&&u.ops.pop(),u.trys.pop();continue}o=t.call(e,u)}catch(e){o=[6,e],n=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}}function l(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,a,o=r.call(e),u=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)u.push(n.value)}catch(e){a={error:e}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(a)throw a.error}}return u}function c(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(l(arguments[t]));return e}var f,s=r(3);!function(e){e.Timeseries="TIMESERIES",e.Table="TABLE"}(f||(f={}));var p={type:{value:"profile2",label:"Profile"},format:f.Timeseries,count:1e3,resolution:1,symbol:"",metric:{value:"price",label:"price"}},d=["quote","earnings","candle","trades"],y=new Map([["o","Opening price"],["h","High price"],["l","Low price"],["c","Closing price"],["v","Traded volume"],["t","Time"]]),v=function(e){return void 0===e&&(e={}),d.includes(e.value)?f.Timeseries:f.Table},b=function(e){return e?Array.isArray(e)?e:[e]:[]};function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var h=function(e){function t(t,r){var a=e.call(this,t)||this;a.backendSrv=r,a.tableResponse=function(e,t){return e&&"no_data"!==e.s?[new n.MutableDataFrame({refId:t.refId,fields:Object.entries(e).map((function(e){var t=l(e,2),r=t[0],a=t[1];return{name:r,type:"string"==typeof a?n.FieldType.string:n.FieldType.number,values:[a]}})),meta:{preferredVisualisationType:"table"}})]:[new n.MutableDataFrame({refId:t.refId,fields:[{name:"no data",type:n.FieldType.string,values:[]}],meta:{preferredVisualisationType:"table"}})]},a.dataSourceName=t.name;var o=t.jsonData;return a.token=o.apiToken,a.baseUrl="https://finnhub.io/api/v1",a.websocketUrl="wss://ws.finnhub.io?token="+a.token,a}return t.$inject=["instanceSettings","backendSrv"],function(e,t){function r(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}(t,e),t.prototype.constructQuery=function(e,t){var r,n,a,o=null===(r=e.symbol)||void 0===r?void 0:r.toUpperCase(),u=e.refId;switch(null===(n=e.type)||void 0===n?void 0:n.value){case"candle":return{symbol:o,resolution:e.resolution,from:t.from.unix(),to:t.to.unix(),refId:u};case"metric":return{symbol:o,metric:null===(a=null==e?void 0:e.metric)||void 0===a?void 0:a.value,refId:u};default:return{symbol:o,refId:u}}},t.prototype.query=function(e){var t=this,r=e.targets,a=e.range,u=r.filter((function(e){return!e.hide})),i=u.filter((function(e){var t;return"trades"===(null===(t=e.type)||void 0===t?void 0:t.value)})).map((function(e){var r=o(o({},p),e),u=t.constructQuery(r,a);return new s.Observable((function(e){var r=new n.CircularDataFrame({append:"tail",capacity:1e3});r.refId=u.refId,r.addField({name:"ts",type:n.FieldType.time}),r.addField({name:"value",type:n.FieldType.number});var a=new WebSocket(t.websocketUrl);return a.onopen=function(){return a.send(JSON.stringify({type:"subscribe",symbol:u.symbol}))},a.onerror=function(e){return console.log("WebSocket error: "+JSON.stringify(e))},a.onclose=function(){return e.complete()},a.onmessage=function(t){try{var n=JSON.parse(t.data);if("trade"===n.type){var a=n.data[0],o=a.t,i=a.p;r.add({ts:o,value:i}),e.next({data:[r],key:u.refId})}}catch(e){console.error(e)}},function(){a.send(JSON.stringify({type:"unsubscribe",symbol:u.symbol})),a.close()}}))})),l=u.filter((function(e){var t;return"trades"!==(null===(t=e.type)||void 0===t?void 0:t.value)})).map((function(e){var r,n=o(o({},p),e),u=n.queryText,i=n.type;if(u)r=t.freeTextQuery(u);else{var l=t.constructQuery(o(o({},p),e),a);r=t.get(i.value,l)}return r.then((function(r){var n=v(i)===f.Table;return r.metric&&(r=r.metric),n?t.tableResponse(r,e):t.tsResponse(r,e)}))})),d=Object(s.from)(Promise.all(l).then((function(e){return{data:e.flat()}})));return s.merge.apply(void 0,c(i,[d]))},t.prototype.tsResponse=function(e,t){var r=t.refId,a=[new n.MutableDataFrame({refId:r,fields:[{name:"no data",type:n.FieldType.string,values:[]}],meta:{preferredVisualisationType:"graph"}})];if("no_data"===(null==e?void 0:e.s)||"string"==typeof e)return a;switch(t.type.value){case"earnings":var o=["symbol"],u=Object.keys(e[0]).filter((function(e){return!o.includes(e)}));return[new n.MutableDataFrame({refId:r,fields:u.map((function(t){return{type:"period"===t?n.FieldType.time:n.FieldType.number,name:t,values:e.map((function(e){return"period"===t?Object(n.dateTime)(e[t]).valueOf():e[t]}))}})),meta:{preferredVisualisationType:"graph"}})];case"quote":var i=new Map([["t","time"],["c","current price"]]);return[new n.MutableDataFrame({refId:r,fields:c(i).map((function(t){var r=l(t,2),a=r[0],o=r[1];return{type:"t"===a?n.FieldType.time:n.FieldType.number,name:o,values:"t"===a?[1e3*e[a]]:[e[a]]}})),meta:{preferredVisualisationType:"table"}})];case"candle":return[new n.MutableDataFrame({refId:r,fields:c(y).map((function(t){var r=l(t,2),a=r[0],o=r[1];return{type:"t"===a?n.FieldType.time:n.FieldType.number,name:a,title:o,values:"t"===a?e[a].map((function(e){return 1e3*e})):e[a]}})),meta:{preferredVisualisationType:"graph"}})];default:var f=["t","time","period"];return[new n.MutableDataFrame({refId:r,fields:Object.entries(e).map((function(e){var t=l(e,2),r=t[0],a=t[1];return{type:f.includes(r)?n.FieldType.time:m(a),name:r,values:f.includes(r)?b(a).map((function(e){return 1e3*e})):b(a)}}))})]}},t.prototype.testDatasource=function(){return u(this,void 0,void 0,(function(){return i(this,(function(e){switch(e.label){case 0:return[4,this.get("profile",{symbol:"AAPL"})];case 1:return 200===e.sent().status?[2,{status:"success"}]:[2,{status:"error"}]}}))}))},t.prototype.freeTextQuery=function(e){return u(this,void 0,void 0,(function(){var t;return i(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,this.backendSrv.get(this.baseUrl+"/"+e,{token:this.token})];case 1:return[2,r.sent()];case 2:return t=r.sent(),console.error("Error retrieving data",t),[3,3];case 3:return[2]}}))}))},t.prototype.get=function(e,t){return void 0===t&&(t={}),u(this,void 0,void 0,(function(){var r,n;return i(this,(function(a){switch(a.label){case 0:r=this.baseUrl+("quote"===e?"":"/stock"),a.label=1;case 1:return a.trys.push([1,3,,4]),[4,this.backendSrv.get(r+"/"+e,o(o({},t),{token:this.token}))];case 2:return[2,a.sent()];case 3:throw n=a.sent(),console.error("Error retrieving data",n),n;case 4:return[2]}}))}))},t}(n.DataSourceApi),g=r(1),w=r.n(g),T=r(2),S=r(4),F=r.n(S),j=c(d,["profile2","metric"]),x=["price","valuation","growth","margin","management","financialStrength","perShare"].map((function(e){return{value:e,label:e}})),O=[{value:"1",label:"1"},{value:"5",label:"5"},{value:"15",label:"15"},{value:"30",label:"30"},{value:"60",label:"60"},{value:"D",label:"Day"},{value:"W",label:"Week"},{value:"M",label:"Month"}],k=function(e){var t=e.onChange,r=e.onRunQuery,n=e.query,a=function(e){var r=e.target.value,a=r.split("?")[0];t(o(o({},n),{queryText:r,format:v({value:a})}))},u=function(e){var r,a=e.target,u=a.name,i=a.value;t(o(o({},n),((r={})[u]=i,r)))},i=function(e){t(o(o({},n),{type:e})),"exchange"===e.value&&r()},l=function(e){t(o(o({},n),{metric:e}))},c=function(e){t(o(o({},n),{resolution:e.value}))},f=function(e){"Enter"===e.key&&r()},s=j.map((function(e){return{label:F()(e).replace(/\d+/g,""),value:e}})),d=o(o({},p),n),y=d.queryText,b=d.symbol,m=d.type,h=d.resolution,g=d.metric;return w.a.createElement(T.Form,{onSubmit:r},(function(e){var t=e.register;e.errors;return w.a.createElement(w.a.Fragment,null,w.a.createElement(T.Field,{label:"Data type"},w.a.createElement(T.Select,{"data-testid":"Data type",onChange:i,options:s,value:m,defaultValue:m})),"exchange"!==m.value&&w.a.createElement(T.Field,{label:"Symbol"},w.a.createElement(T.Input,{name:"symbol",ref:t,value:b,onChange:u,onKeyDown:f,placeholder:"Stock symbol"})),"candle"===m.value&&w.a.createElement(T.Field,{label:"Resolution"},w.a.createElement(T.Select,{onChange:c,options:O,value:h})),"metric"===m.value&&w.a.createElement(T.Field,{label:"Metric"},w.a.createElement(T.Select,{onChange:l,options:x,value:g,defaultValue:g})),"trades"!==m.value&&w.a.createElement(T.Field,{label:"Free Query Text",horizontal:!1,description:"Experimental. Will override any selected values above."},w.a.createElement(T.Input,{name:"customQuery",ref:t,value:y||"",onChange:a,onKeyDown:f,placeholder:"Custom query e.g. 'earnings?symbol=AAPL'"})))}))};r.d(t,"plugin",(function(){return E}));var E=new n.DataSourcePlugin(h).setConfigEditor((function(e){var t=e.options,r=e.onOptionsChange,n=t.jsonData;return w.a.createElement(T.Field,{label:"API Token"},w.a.createElement(T.Input,{value:n.apiToken||"",placeholder:"Token for the Finnhub API",onChange:function(e){r(o(o({},t),{jsonData:{apiToken:e.target.value}}))}}))})).setQueryEditor(k).setExploreQueryField(k)}])}));
//# sourceMappingURL=module.js.map