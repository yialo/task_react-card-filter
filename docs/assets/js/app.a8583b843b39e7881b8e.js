!function(e){function t(t){for(var a,c,i=t[0],o=t[1],s=t[2],f=0,p=[];f<i.length;f++)c=i[f],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);for(u&&u(t);p.length;)p.shift()();return l.push.apply(l,s||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],a=!0,i=1;i<n.length;i++){var o=n[i];0!==r[o]&&(a=!1)}a&&(l.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={0:0},l=[];function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var i=window.webpackJsonp=window.webpackJsonp||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var u=o;l.push([313,1]),n()}({134:function(e,t,n){},197:function(e,t,n){},295:function(e,t,n){},296:function(e,t,n){},297:function(e,t,n){},313:function(e,t,n){"use strict";n.r(t);n(133),n(134);var a=n(0),r=n.n(a),l=n(51),c=n(58),i=n(52),o=n(53),s=n.n(o),u=n(54),f=n.n(u),p=n(24),d=n.n(p),m=n(25),v=n.n(m),h=n(26),_=n.n(h),b=n(34),y=n.n(b),E=n(27),g=n.n(E),N=n(55),L=n.n(N),O=n(18),j=n.n(O),k=n(56),w=n.n(k),C=n(9),T=n.n(C),R=(n(197),n(1)),x=n.n(R),q=n(130),S=n.n(q),F=(n(75),n(57)),P=n.n(F),B=n(131),D=n.n(B);n(78),n(295),n(296);function I(e){var t,n;return e.list.length>0?r.a.createElement("ul",{className:T()(t=["tag-list"]).call(t,e.classList).join(" ")},w()(n=e.list).call(n,(function(e,t){return r.a.createElement("li",{className:"tag-list__item",key:t},e)}))):null}I.defaultProps={classList:[]},I.propTypes={classList:x.a.arrayOf(x.a.string),list:x.a.arrayOf(x.a.string).isRequired};var M,A,z=function(e){var t,n;return null!==(t=null!==(n=e.displayName)&&void 0!==n?n:e.name)&&void 0!==t?t:"Component"},H=(M="ClassList",A=function(e,t){return function(n){return r.a.createElement(e,P()({},n,{classList:t}))}},function(e){for(var t,n,a=arguments.length,r=new Array(a>1?a-1:0),l=1;l<a;l++)r[l-1]=arguments[l];var c=A.apply(void 0,T()(t=[e]).call(t,r)),i=z(e);return c.displayName=T()(n="with".concat(M,"(")).call(n,i,")"),c}),J=H(I,["card__taglist"]);function U(e){var t,n,a=e.dto,l=a.date,c=a.id,i=a.name,o=a.organization,s=a.ptrn,u=a.sum,f=a.topTagList,p=a.bottomTagList;return r.a.createElement("article",{className:T()(t=T()(n=["card"]).call(n,e.classList)).call(t,e.isChecked?"js_checked":[]).join(" ")},r.a.createElement("label",{className:"card__check-line"},r.a.createElement("span",{className:"card__tip"},"Проверить данные клиента"),r.a.createElement("input",{className:"s_visually-hidden",type:"checkbox",checked:e.isChecked,name:"need_client_check",onChange:e.onCheck}),r.a.createElement("span",{className:"card__checkbox","aria-hidden":"true"})),r.a.createElement("p",{className:"s_regular-text card__sum"},u),r.a.createElement("p",{className:"s_regular-text card__organization"},o),r.a.createElement("p",{className:"s_pale-text card__ptrn"},"ИНН ".concat(s)),r.a.createElement(J,{list:f}),r.a.createElement("p",{className:"s_regular-text card__name"},i),r.a.createElement(J,{list:p}),r.a.createElement("p",{className:"s_pale-text card__footer"},r.a.createElement("span",{className:"card__id"},c),r.a.createElement("span",null,"от ".concat(l))))}U.defaultProps={classList:[]},U.propTypes={classList:x.a.arrayOf(x.a.string),dto:x.a.objectOf(x.a.oneOfType([x.a.string,x.a.number,x.a.arrayOf(x.a.string)])).isRequired,isChecked:x.a.bool.isRequired,onCheck:x.a.func.isRequired};var G=U;function K(e){var t=Object(a.useState)(!1),n=D()(t,2),l=n[0],c=n[1];return r.a.createElement(G,P()({},e,{isChecked:l,onCheck:function(){c((function(e){return!e}))}}))}K.displayName="withLocalState(".concat(G.name,")");var Q=K;n(297);function V(e){var t;return r.a.createElement("label",{className:T()(t=["search-field"]).call(t,e.classList).join(" "),"aria-label":e.label},r.a.createElement("input",{className:"search-field__input",type:"text",inputMode:"search",placeholder:e.placeholder,onChange:e.onChange}))}V.defaultProps={classList:[]},V.propTypes={classList:x.a.arrayOf(x.a.string),label:x.a.string.isRequired,placeholder:x.a.string.isRequired,onChange:x.a.func.isRequired};var W=V,X=H(Q,["app__card"]),Y=H(W,["app__filter","app__filter--number"]),Z=H(W,["app__filter","app__filter--name"]);function $(e){var t=e.clientList,n=e.isNetworkError,l=e.onDataLoaded,c=e.onFilterByNumber,i=e.onFilterByName,o=e.onNetworkError;Object(a.useEffect)((function(){var e;S.a.get(T()(e="".concat(void 0,"json/clients.json?t=")).call(e,+new Date)).then((function(e){l(e.data.list)})).catch((function(e){o()}))}),[]);var s,u=function(e){return function(t){e(t.target.value)}};return r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"app__searchbar",role:"search"},r.a.createElement(Y,{label:"Введите номер заявки",placeholder:"Номер заявки",onChange:u(c)}),r.a.createElement(Z,{label:"Укажите наименование клиента",placeholder:"Наименование клиента",onChange:u(i)})),(s=null,n?s="Ошибка сети":null===t?s="Загружаем список клиентов...":0===t.length&&(s="Список клиентов пуст"),s?r.a.createElement("p",{className:"app__fallback-message"},s):w()(t).call(t,(function(e){return r.a.createElement(X,{key:e.id,dto:e})}))))}$.defaultProps={clientList:null},$.propTypes={clientList:x.a.arrayOf(x.a.object),isNetworkError:x.a.bool.isRequired,onDataLoaded:x.a.func.isRequired,onFilterByNumber:x.a.func.isRequired,onFilterByName:x.a.func.isRequired,onNetworkError:x.a.func.isRequired};var ee=$,te=n(132),ne=n.n(te),ae="FETCH_ERROR",re="FETCH_CLIENT_LIST",le="FILTER_CLIENT_LIST",ce=ae,ie=re,oe=le,se=function(e){return{type:ie,payload:e}},ue=function(e,t){return{type:oe,payload:{filterName:e,substrToSearch:ne()(t).call(t)}}},fe=function(){return{type:ce}};function pe(e,t){var n=L()(e);if(g.a){var a=g()(e);t&&(a=y()(a).call(a,(function(t){return _()(e,t).enumerable}))),n.push.apply(n,a)}return n}function de(e){for(var t=1;t<arguments.length;t++){var n,a=null!=arguments[t]?arguments[t]:{};if(t%2)v()(n=pe(Object(a),!0)).call(n,(function(t){j()(e,t,a[t])}));else if(d.a)f()(e,d()(a));else{var r;v()(r=pe(Object(a))).call(r,(function(t){s()(e,t,_()(a,t))}))}}return e}var me,ve=Object(c.b)((function(e,t){return de(de({},t),{},{clientList:e.filteredList,isNetworkError:e.isNetworkError})}),(function(e){return{onDataLoaded:function(t){e(se(t))},onFilterByName:function(t){e(ue("name",t))},onFilterByNumber:function(t){e(ue("number",t))},onNetworkError:function(){e(fe())}}}))(ee);n(127),n(306);function he(e,t){var n=L()(e);if(g.a){var a=g()(e);t&&(a=y()(a).call(a,(function(t){return _()(e,t).enumerable}))),n.push.apply(n,a)}return n}function _e(e){for(var t=1;t<arguments.length;t++){var n,a=null!=arguments[t]?arguments[t]:{};if(t%2)v()(n=he(Object(a),!0)).call(n,(function(t){j()(e,t,a[t])}));else if(d.a)f()(e,d()(a));else{var r;v()(r=he(Object(a))).call(r,(function(t){s()(e,t,_()(a,t))}))}}return e}var be=ae,ye=re,Ee=le,ge={clientList:null,filteredList:null,isNetworkError:!1},Ne={name:"name",number:"id"},Le=(me={},j()(me,be,(function(e){return _e(_e({},e),{},{isNetworkError:!0})})),j()(me,ye,(function(e,t){return _e(_e({},e),{},{clientList:t,filteredList:t})})),j()(me,Ee,(function(e,t){var n,a=t.filterName,r=t.substrToSearch;if(""===r)return _e(_e({},e),{},{filteredList:e.clientList});var l=Ne[a],c=y()(n=e.clientList).call(n,(function(e){return String(e[l]).match(r)}));return _e(_e({},e),{},{filteredList:c})})),j()(me,"DEFAULT",(function(e){return e})),me),Oe=function(e,t){var n;return(null!==(n=Le[t.type])&&void 0!==n?n:Le.DEFAULT)(e,t.payload)};function je(){var e=Object(i.b)(Oe,ge,void 0);return r.a.createElement(c.a,{store:e},r.a.createElement(ve,null))}var ke=function(){var e=Object(a.createElement)(je),t=document.getElementById("root");Object(l.render)(e,t)};document.addEventListener("DOMContentLoaded",ke)}});