"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[388],{679:function(e,t,r){r.r(t),r.d(t,{default:function(){return v}});var n=r(861),a=r(439),c=r(757),u=r.n(c),s=r(791),i=r(689),o=r(899),p={img:"cast-page_img__EuZZ3"},f=r.p+"static/media/placeholder.766050a83a9c288363de.png",l=r(184),v=function(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),r=t[0],c=t[1],v=(0,s.useState)(!1),h=(0,a.Z)(v,2),d=h[0],m=h[1],g=(0,s.useState)(null),x=(0,a.Z)(g,2),w=x[0],Z=x[1],b=(0,i.UO)().movieId;(0,s.useEffect)((function(){var e=function(){var e=(0,n.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(!0),e.next=4,(0,o.uV)(b);case 4:t=e.sent,c(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),Z(e.t0.message);case 11:return e.prev=11,m(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[b]);var k=r.map((function(e){var t=e.id,r=(e.character,e.original_name),n=e.profile_path;return(0,l.jsxs)("li",{children:[(0,l.jsx)("h4",{children:r}),(0,l.jsx)("img",{className:p.img,src:n?"https://image.tmdb.org/t/p/w300".concat(n):"".concat(f),alt:r})]},t)})),_=Boolean(r.length);return(0,l.jsxs)(l.Fragment,{children:[d&&(0,l.jsx)("p",{children:"...Loading"}),w&&(0,l.jsx)("p",{children:w}),_&&(0,l.jsx)("ul",{children:k})||(0,l.jsx)("p",{className:p.info,children:"There are no reviews."})]})}},899:function(e,t,r){r.d(t,{Hx:function(){return v},Pg:function(){return f},uV:function(){return l},vw:function(){return p},z1:function(){return o}});var n=r(861),a=r(757),c=r.n(a),u=r(294);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var s={params:{api_key:"344c7270581ee8890ac0e8ee75ba983e",language:"en-US",include_adult:!1}},i=u.Z.create({baseURL:"https://api.themoviedb.org/3"}),o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return i.get("/search/movie?query=".concat(e,"&page=").concat(t),s)},p=function(){var e=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("trending/movie/day",s);case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/movie/".concat(t),s);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/movie/".concat(t,"/credits?"),s);case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/movie/".concat(t,"/reviews"),s);case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=388.d97bd8e4.chunk.js.map