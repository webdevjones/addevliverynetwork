(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{25:function(e,t,a){e.exports=a(55)},54:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(10),r=a.n(n),c=a(0),l=a.n(c),i=a(7),s=a(2),u=a(5),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ADS":return Object(u.a)(t.data);case"ADD_AD":return[t.data].concat(Object(u.a)(e));case"DELETE_AD":return e.filter((function(e){return e.id!==t.data}));case"SET_CURR":return e.map((function(e){return e.id===t.id?e.current=1:e.type===t.adtype&&(e.current=0),e}));case"NO_CURR":return e.map((function(e){return e.type===t.data&&1===e.current&&(e.current=0),e}));default:return e}},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ROUTE":return t.data;default:return e}},d=Object(i.b)({ads:o,route:m}),p=a(1),f=a.n(p),b=a(4),v=a(6),E=a(9),g=a.n(E),h="http://localhost:3001/api/ads/add/",N="http://localhost:3001/api/ads/",y="http://localhost:3001/api/ads/current/",O="http://localhost:3001/api/ads/delete/";h="/api/ads/add/",N="/api/ads/",y="/api/ads/current/",O="/api/ads/delete/";var j=function(){var e=Object(b.a)(f.a.mark((function e(t,a){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Posting data: ",t),e.next=3,g.a.post("".concat(h).concat(a),t,{headers:{Accept:"multipart/form-data","Content-Type":"multipart/form-data"}});case 3:return n=e.sent,console.log("Success"),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),x=function(){var e=Object(b.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get(N);case 2:return t=e.sent,console.log(t),e.abrupt("return",200===t.status?t.data:0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(b.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("".concat(y).concat(t));case 2:return a=e.sent,console.log("setcurr",a),e.abrupt("return",200===a.status?a:0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(b.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.delete("".concat(O).concat(t));case 2:return a=e.sent,e.abrupt("return",204===a.status?a:0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(s.b)(),t=Object(c.useState)(["","",""]),a=Object(v.a)(t,2),n=a[0],r=a[1],i=Object(c.useState)(["","",""]),o=Object(v.a)(i,2),m=o[0],d=o[1],p=Object(c.useState)([0,0,0]),E=Object(v.a)(p,2),g=E[0],h=E[1],N=Object(c.useState)([null,null,null]),y=Object(v.a)(N,2),O=y[0],x=y[1],k=function(){var e=document.getElementById("file-upload");e.classList.contains("uploading")||(e.innerText="Uploading...",e.classList.add("uploading"))},w=function(){var e=document.getElementById("file-upload");e.innerText="Upload",e.classList.remove("uploading")},D=function(){var t=Object(b.a)(f.a.mark((function t(a){var c,l,i,s,o,p;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),h([0,0,0]),c=0;case 3:if(!(c<3)){t.next=13;break}if(l=!!n[c].length+!!m[c].length+!!O[c]){t.next=9;break}return t.abrupt("continue",10);case 9:l<3&&((i=g)[c]=1,h(Object(u.a)(i)));case 10:++c,t.next=3;break;case 13:if(!g.includes(1)){t.next=15;break}return t.abrupt("return");case 15:s=0;case 16:if(!(s<3)){t.next=35;break}if(3!==!!n[s].length+!!m[s].length+!!O[s]){t.next=32;break}return k(),(o=new FormData).append("tag",n[s]),o.append("link",m[s]),o.append("file",O[s][0]),t.next=26,j(o,s);case 26:if(201===(p=t.sent).status){t.next=30;break}return alert("error of some kind"),t.abrupt("return");case 30:e({type:"NO_CURR",data:p.data.type}),e({type:"ADD_AD",data:p.data});case 32:++s,t.next=16;break;case 35:r(["","",""]),d(["","",""]),h([0,0,0]),x([null,null,null]),w(),S();case 38:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),S=function(){document.getElementById("adForm--wrapper").classList.remove("open")};return l.a.createElement("div",{id:"adForm--wrapper"},l.a.createElement("div",{id:"adForm"},l.a.createElement("form",null,l.a.createElement("div",{className:"form-wrapper"},["Banner Ad","Mid Ad","Long Ad"].map((function(e,t){return l.a.createElement("div",{className:"form-section ".concat(e),key:t},l.a.createElement("div",{className:"form-section--header"},e),!!g[t]&&l.a.createElement("div",{className:"form-section--error"},"Please fill all of the fields."),l.a.createElement("div",{className:"form-section--fields"},l.a.createElement("div",{className:"form-section--fields--field"},l.a.createElement("label",null,"Tag:"),l.a.createElement("input",{type:"text",value:n[t],onChange:function(e){return function(e,t){var a=n;a[t]=e.currentTarget.value,r(Object(u.a)(a))}(e,t)}})),l.a.createElement("div",{className:"form-section--fields--field"},l.a.createElement("label",null,"Link:"),l.a.createElement("input",{type:"text",value:m[t],onChange:function(e){return function(e,t){var a=m;a[t]=e.currentTarget.value,d(Object(u.a)(a))}(e,t)}})),l.a.createElement("div",{className:"form-section--fields--field"},l.a.createElement("label",null,"Image:"),l.a.createElement("input",{type:"file",id:"file-upload",onChange:function(e){return function(e,t){var a=O;a[t]=e.target.files,x(Object(u.a)(a))}(e,t)}}))))}))),l.a.createElement("button",{className:"form-submit",type:"submit",onClick:D},"Upload"))))},S=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.route})),a=function(t,a){console.log(a),e(function(e){return{type:"SET_ROUTE",data:e}}(a))};return l.a.createElement("nav",{id:"app-nav"},l.a.createElement("div",{className:"container"},l.a.createElement("img",{className:"app-nav--logo",src:"/static/ADN.svg",alt:"MRC ADN Logo"}),l.a.createElement("div",{className:"app-nav--tabs"},l.a.createElement("button",{onClick:function(e){return a(0,0)},className:0===t?"app-nav--tabs--tab active":"app-nav--tabs--tab"},l.a.createElement("div",{className:"app-nav--tabs--tab--text"},"Dashboard")),l.a.createElement("button",{onClick:function(e){return a(0,1)},className:1===t?"app-nav--tabs--tab active":"app-nav--tabs--tab"},l.a.createElement("div",{className:"app-nav--tabs--tab--text"},"New Campaign"))),l.a.createElement("div",{className:"app-nav--title"},l.a.createElement("div",{className:"app-nav--title--wrapper"},l.a.createElement("div",{className:"app-nav--title--main"},"MRC"),l.a.createElement("div",{className:"app-nav--title--sub"},l.a.createElement("div",{className:"app-nav--title--sub--text"},"Ad Delivery Network"))))))},A=function(e){var t=e.type,a=Object(s.c)((function(e){return e.ads}));if(a.length){for(var n=[],r=function(e){n[e]=a.find((function(t){return t.type===e&&t.current}))},c=0;c<3;++c)r(c);var i="";return 0===t?i="Banner Ad":1===t?i="Mid Size Ad (300x250)":2===t&&(i="Long Ad (300x600)"),console.log(n),l.a.createElement("div",{className:"current--item"},l.a.createElement("div",{className:"current--item--label"},i),l.a.createElement("div",{className:"current--item--img-container"},"undefined"!==typeof n[t]&&l.a.createElement("a",{href:n[t].link,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:n[t].s3url,alt:i,className:"current--item--img-container-img"}))))}return l.a.createElement("div",{className:"current--item--loading"},"Loading...")},C=function(e){var t=e.item,a=Object(c.useState)(0),n=Object(v.a)(a,2),r=n[0],i=n[1],u=Object(s.b)(),o=function(){var e=Object(b.a)(f.a.mark((function e(t,a){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,k(a.id);case 3:u((n=a.id,r=a.type,{type:"SET_CURR",id:n,adtype:r}));case 4:case"end":return e.stop()}var n,r}),e)})));return function(t,a){return e.apply(this,arguments)}}(),m=function(){var e=Object(b.a)(f.a.mark((function e(t,a){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,w(a.id);case 3:u({type:"DELETE_AD",data:a.id});case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return l.a.createElement("div",{key:t.id,className:"table--selection--section--row"},l.a.createElement("div",{className:"table--grid--item table--selection--section--item table--selection--section--tag",onMouseOver:function(e){i(1)},onMouseLeave:function(e){i(0)}},t.tag,!!r&&l.a.createElement("div",{className:"table--selection--section--tag--thumb"},l.a.createElement("img",{className:"table--selection--section--tag--thumb--img img-fluid",src:t.s3url,alt:t.tag}))),l.a.createElement("div",{className:"table--grid--item table--selection--section--item table--selection--section--select"},l.a.createElement("button",{onClick:function(e){return o(e,t)},className:"table--selection--section--select--btn green"},"\u2713")),l.a.createElement("div",{className:"table--grid--item table--selection--section--item table--selection--section--delete"},l.a.createElement("button",{onClick:function(e){return m(e,t)},className:"table--selection--section--select--btn red"},"X")))},T=function(e){var t=e.type,a=e.filter,n=Object(s.c)((function(e){return e.ads}));return n.length?l.a.createElement("div",{className:"table--selection--section"},n.filter((function(e){return e.type===t&&1===e.current})).map((function(e){return l.a.createElement("div",{key:e.id,className:"table--selection--section--row green"},l.a.createElement("div",{className:"table--grid--item table--selection--section--item table--selection--section--tag"},e.tag))})),n.filter((function(e){return e.type===t&&e.tag.includes(a)&&1!==e.current})).reverse().map((function(e){return l.a.createElement(C,{key:e.id,item:e})}))):l.a.createElement("div",{className:"table--loading"},"Loading...")},L=function(){var e=Object(c.useState)(""),t=Object(v.a)(e,2),a=t[0],n=t[1];return l.a.createElement("div",{className:"table--wrapper"},l.a.createElement("div",{className:"table--header"},l.a.createElement("div",{className:"table--grid--item table--header--item"},"Banner Ad"),l.a.createElement("div",{className:"table--grid--item table--header--item"},"Select"),l.a.createElement("div",{className:"table--grid--item table--header--item"},"Delete"),l.a.createElement("div",{className:"table--grid--item table--header--item"},"Mid Size Ad (300x250)"),l.a.createElement("div",{className:"table--grid--item table--header--item"},"Select"),l.a.createElement("div",{className:"table--grid--item table--header--item"},"Delete"),l.a.createElement("div",{className:"table--grid--item table--header--item"},"Long Ad (300x600)"),l.a.createElement("div",{className:"table--grid--item table--header--item"},"Select"),l.a.createElement("div",{className:"table--grid--item table--header--item"},"Delete")),l.a.createElement("div",{className:"table--filter"},l.a.createElement("div",{className:"table--grid--item"},l.a.createElement("label",null,"Filter:"),l.a.createElement("input",{type:"text",value:a,onChange:function(e){return n(e.currentTarget.value)}}))),l.a.createElement("div",{className:"table--selection"},l.a.createElement(T,{type:0,filter:a}),l.a.createElement(T,{type:1,filter:a}),l.a.createElement(T,{type:2,filter:a})))},_=function(){var e=Object(s.b)();return Object(c.useEffect)((function(){(function(){var t=Object(b.a)(f.a.mark((function t(){var a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x();case 2:(a=t.sent)?e({type:"SET_ADS",data:Object(u.a)(a)}):alert("Error loading data, first refresh then reach out to tech.");case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),l.a.createElement("section",{id:"dashboard"},l.a.createElement("div",{className:"grid-container--wrapper"},l.a.createElement("div",{className:"grid-container"},l.a.createElement("div",{className:"current"},l.a.createElement("div",{className:"current--wrapper"},l.a.createElement(A,{type:0}),l.a.createElement(A,{type:1}),l.a.createElement(A,{type:2}))),l.a.createElement("div",{className:"table"},l.a.createElement(L,null)))))},R=function(){var e=Object(s.c)((function(e){return e.route}));return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"app-wrapper"},l.a.createElement(S,null),0===e&&l.a.createElement(_,null),1===e&&l.a.createElement(D,null)))},U=(a(54),Object(i.c)(d));U.subscribe((function(){return console.log("Store: ",U.getState())})),console.log(U.getState()),r.a.render(l.a.createElement(s.a,{store:U},l.a.createElement(R,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.5a7b32f7.chunk.js.map