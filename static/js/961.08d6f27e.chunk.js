"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[961],{279:function(n,t,e){e.d(t,{Z:function(){return c}});var r,a=e(168),i=e(867).ZP.li(r||(r=(0,a.Z)(["\n  &.notification-item {\n    height: 95px;\n    padding: 0;\n    width: 100%;\n  }\n  & .notification-text {\n    padding: 30px;\n    font-size: 30px;\n    text-align: center;\n  }\n"]))),o=e(184),c=function(){return(0,o.jsx)(i,{className:"notification-item",children:(0,o.jsx)("p",{className:"notification-text",children:"There's nothing here yet!"})})}},961:function(n,t,e){e.r(t),e.d(t,{default:function(){return C}});var r,a,i,o,c=e(861),u=e(439),s=e(757),p=e.n(s),x=e(791),d=e(87),l=e(390),f=e(134),h=e(168),g=e(867),m=g.ZP.form(r||(r=(0,h.Z)(["\n  display: flex;\n  max-width: 500px;\n  border-radius: 3px;\n  overflow: hidden;\n  margin: auto;\n  margin-bottom: 30px;\n\n  & button {\n    background-color: #170d1c;\n    box-shadow: inset 0 0 10px tomato;\n    height: 48px;\n    width: 48px;\n    &:hover,\n    &:focus {\n      background-color: #170d1c;\n      box-shadow: inset 0 0 20px tomato;\n    }\n  }\n"]))),v=g.ZP.input(a||(a=(0,h.Z)(["\n  padding: 7px 15px;\n  background-color: rgb(255, 215, 0);\n  box-shadow: inset 0 0 30px tomato;\n  width: 100%;\n  color: #8b0000;\n  text-shadow: red 0 0 1px;\n  line-height: 1.5;\n  letter-spacing: 0.04em;\n  font-size: 16px;\n  font-weight: 600;\n  border: none;\n  outline: none;\n"]))),b=e(184),w=function(n){var t=n.onFormSubmit,e=n.onInputChange;return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)(m,{onSubmit:t,children:[(0,b.jsx)("button",{type:"submit",children:(0,b.jsx)(f.RB5,{size:"24",color:"white"})}),(0,b.jsx)(v,{type:"text",onChange:e})]})})},k=e(689),Z=e(279),y=e(158),j=g.ZP.ul(i||(i=(0,h.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  column-gap: 24px;\n  row-gap: 48px;\n  height: 100%;\n  justify-content: center;\n  margin-bottom: 30px;\n  & li {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 460px;\n    border-radius: 0px 0px 4px 4px;\n    width: calc((100% - 72px) / 4);\n    box-shadow: 0px 1px 6px #ffbd33, 0px 1px 1px #ffbd33, 0px 2px 1px #ffbd33;\n    padding: 5px 0;\n  }\n"]))),_=(0,g.ZP)(d.rU)(o||(o=(0,h.Z)(["\n  width: 264px;\n  background-image: linear-gradient(to right, violet, pink);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n  & img {\n    border-radius: 4px 4px 0px 0px;\n  }\n  & h3 {\n    height: 63px;\n    display: flex;\n    text-align: center;\n    align-items: center;\n  }\n"]))),P=function(n){var t=n.searchResult.results,e=(0,k.TH)();return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)("div",{className:"container",children:(0,b.jsx)(j,{children:(null===t||void 0===t?void 0:t.length)>0?t.map((function(n){var t=n.id,r=n.poster_path,a=n.title;return(0,b.jsx)("li",{children:(0,b.jsxs)(_,{to:"".concat(t),state:{from:e},children:[(0,b.jsx)("img",{src:r?"https://image.tmdb.org/t/p/w500/".concat(r):y.M,alt:a,width:264,height:396}),(0,b.jsx)("h3",{children:a})]})},t)})):(0,b.jsx)(Z.Z,{})})})})},C=function(){var n,t=(0,d.lr)(),e=(0,u.Z)(t,2),r=e[0],a=e[1],i=(0,x.useState)(""),o=(0,u.Z)(i,2),s=o[0],f=o[1],h=(0,x.useState)([]),g=(0,u.Z)(h,2),m=g[0],v=g[1],k=null!==(n=r.get("query"))&&void 0!==n?n:"";(0,x.useEffect)((function(){var n=function(){var n=(0,c.Z)(p().mark((function n(){var t;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,k){n.next=3;break}return n.abrupt("return");case 3:return n.next=5,(0,l.Pt)(k);case 5:t=n.sent,v(t),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}();n()}),[k]);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(w,{onFormSubmit:function(n){n.preventDefault(),""!==s.trim()&&a({query:s})},onInputChange:function(n){var t=n.target;f(t.value.toLowerCase())}}),(0,b.jsx)(P,{searchResult:m})]})}},390:function(n,t,e){e.d(t,{Df:function(){return u},IQ:function(){return p},Jh:function(){return x},Pg:function(){return s},Pt:function(){return d}});var r=e(861),a=e(757),i=e.n(a),o=e(243);o.Z.defaults.baseURL="https://api.themoviedb.org/3";var c="35e03337fca9c6068c8f09b84db34ce1",u=function(){var n=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("trending/movie/day?api_key=".concat(c));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(t,"?api_key=").concat(c));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(t,"/credits?api_key=").concat(c));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(t,"/reviews?api_key=").concat(c));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("search/movie?query=".concat(t,"&api_key=").concat(c));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},158:function(n,t,e){e.d(t,{M:function(){return r}});var r="https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700"}}]);
//# sourceMappingURL=961.08d6f27e.chunk.js.map