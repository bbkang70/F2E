(function(t){function i(i){for(var e,c,l=i[0],r=i[1],o=i[2],d=0,u=[];d<l.length;d++)c=l[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&u.push(a[c][0]),a[c]=0;for(e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e]);v&&v(i);while(u.length)u.shift()();return n.push.apply(n,o||[]),s()}function s(){for(var t,i=0;i<n.length;i++){for(var s=n[i],e=!0,l=1;l<s.length;l++){var r=s[l];0!==a[r]&&(e=!1)}e&&(n.splice(i--,1),t=c(c.s=s[0]))}return t}var e={},a={app:0},n=[];function c(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.m=t,c.c=e,c.d=function(t,i,s){c.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:s})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,i){if(1&i&&(t=c(t)),8&i)return t;if(4&i&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var e in t)c.d(s,e,function(i){return t[i]}.bind(null,e));return s},c.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(i,"a",i),i},c.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},c.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=i,l=l.slice();for(var o=0;o<l.length;o++)i(l[o]);var v=r;n.push([0,"chunk-vendors"]),s()})({0:function(t,i,s){t.exports=s("56d7")},"034f":function(t,i,s){"use strict";var e=s("64a9"),a=s.n(e);a.a},2566:function(t,i,s){},"2dcd":function(t,i,s){"use strict";var e=s("8476"),a=s.n(e);a.a},"303f":function(t,i,s){"use strict";var e=s("c55d"),a=s.n(e);a.a},"4b6d":function(t,i,s){},"56d7":function(t,i,s){"use strict";s.r(i);s("cadf"),s("551c"),s("f751"),s("097d");var e=s("2b0e"),a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{attrs:{id:"app"}},[s("link",{attrs:{rel:"stylesheet",href:"//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons"}}),s("Native"),s("ToolsBar"),s("div",{staticClass:"content"},[s("FileList"),s("FileListDetail")],1),s("Footer")],1)},n=[],c=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"native"},[t._m(0),t._m(1),s("div",{staticClass:"headerLast"},[s("input",{staticClass:"inputN"}),s("md-icon",{staticClass:"inputN_icon"},[t._v("search")])],1)])},l=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("img",{staticClass:"logo",attrs:{src:s("c319")}})])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"menu1"},[s("a",{attrs:{href:"#"}},[t._v("starred")]),s("a",{attrs:{href:"#"}},[t._v("trash")])])}],r={name:"Native",props:{msg:String}},o=r,v=(s("752b"),s("2877")),d=Object(v["a"])(o,c,l,!1,null,"87ac3a08",null),u=d.exports,f=function(){var t=this,i=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"footer"},[s("div",{staticClass:"storge"},[t._v("storage")]),s("div",{staticClass:"storge1"},[t._v("16 gb /200 gb")])])}],p={name:"Footer",props:{msg:String}},_=p,C=(s("2dcd"),Object(v["a"])(_,f,m,!1,null,"40a0a322",null)),b=C.exports,g=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"toolsBar"},[s("div",{staticClass:"myDrive"},[t._v("My Drive")]),s("div",{staticClass:"itemRight"},[s("md-icon",{staticClass:"inputN_icon"},[t._v("cloud_upload")]),s("md-icon",{staticClass:"inputN_icon"},[t._v("create_new_folder")])],1)])},h=[],x={name:"ToolsBar",props:{}},y=x,O=(s("6d2e"),Object(v["a"])(y,g,h,!1,null,"292c1272",null)),j=O.exports,w=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"fileList"},[s("div",{staticClass:"titleBar"},[s("div",[t._v("folders")]),s("div",[s("md-icon",{staticClass:"icon"},[t._v("view_list")]),s("md-icon",{staticClass:"icon active"},[t._v("apps")])],1)]),s("div",{staticClass:"list"},[s("div",{staticClass:"item"},[s("md-icon",{staticClass:"icon "},[t._v("folder")]),s("div",{staticClass:"file_text"},[t._v("Hexschool")])],1),s("div",{staticClass:"item"},[s("md-icon",{staticClass:"icon "},[t._v("folder")]),s("div",{staticClass:"file_text"},[t._v("Hexschool")])],1),s("div",{staticClass:"item"},[s("md-icon",{staticClass:"icon "},[t._v("folder")]),s("div",{staticClass:"file_text"},[t._v("Hexschool")])],1),s("div",{staticClass:"item"},[s("md-icon",{staticClass:"icon "},[t._v("folder")]),s("div",{staticClass:"file_text"},[t._v("Hexschool")])],1),s("div",{staticClass:"item"},[s("md-icon",{staticClass:"icon "},[t._v("folder")]),s("div",{staticClass:"file_text"},[t._v("Hexschool")])],1),s("div",{staticClass:"item"},[s("md-icon",{staticClass:"icon "},[t._v("folder")]),s("div",{staticClass:"file_text"},[t._v("Hexschool")])],1)])])},$=[],E={name:"FileList",props:{msg:String}},F=E,L=(s("ff10"),Object(v["a"])(F,w,$,!1,null,"3a43b5cd",null)),S=L.exports,P=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"fileListDetail"},[s("div",{staticClass:"titleBar"},[s("div",[t._v("files")]),s("div",[s("md-icon",{staticClass:"icon  active"},[t._v("view_list")]),s("md-icon",{staticClass:"icon  "},[t._v("apps")])],1)]),t._m(0)])},M=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"list"},[e("div",{staticClass:"items"},[e("div",{staticClass:"item title"}),e("div",{staticClass:"item title"},[t._v("name")]),e("div",{staticClass:"item title"},[t._v("location")]),e("div",{staticClass:"item title"},[t._v("last modified")]),e("div",{staticClass:"item title"},[t._v("size")])]),e("div",{staticClass:"items"},[e("div",{staticClass:"item center"},[e("img",{attrs:{src:s("bf17")}})]),e("div",{staticClass:"item "},[t._v("Ad-benefit-august.mp4")]),e("div",{staticClass:"item "},[t._v("my drive")]),e("div",{staticClass:"item "},[t._v("2019/8/20")]),e("div",{staticClass:"item "},[t._v("6 kb")])]),e("div",{staticClass:"items"},[e("div",{staticClass:"item center"},[e("img",{attrs:{src:s("5ab7")}})]),e("div",{staticClass:"item "},[t._v("Presentation-Q1.pdf")]),e("div",{staticClass:"item "},[t._v("my drive")]),e("div",{staticClass:"item "},[t._v("2019/8/20")]),e("div",{staticClass:"item "},[t._v("18 kb")])])])}],N={name:"FileListDetail",props:{msg:String}},k=N,B=(s("303f"),Object(v["a"])(k,P,M,!1,null,"746150ce",null)),D=B.exports,H={name:"app",components:{Native:u,ToolsBar:j,FileList:S,FileListDetail:D,Footer:b}},T=H,I=(s("034f"),Object(v["a"])(T,a,n,!1,null,null,null)),J=I.exports,R=(s("fa6d"),s("51de"),s("9c30"));e["default"].config.productionTip=!1,e["default"].use(R["MdIcon"]),new e["default"]({render:function(t){return t(J)}}).$mount("#app")},"5ab7":function(t,i,s){t.exports=s.p+"img/ic-ppt.cc4d2ea8.svg"},"5bd9":function(t,i,s){},"64a9":function(t,i,s){},"6d2e":function(t,i,s){"use strict";var e=s("2566"),a=s.n(e);a.a},"752b":function(t,i,s){"use strict";var e=s("4b6d"),a=s.n(e);a.a},8476:function(t,i,s){},bf17:function(t,i,s){t.exports=s.p+"img/ic-media.c8bc251e.svg"},c319:function(t,i,s){t.exports=s.p+"img/ic-logo-drive.57c16604.svg"},c55d:function(t,i,s){},ff10:function(t,i,s){"use strict";var e=s("5bd9"),a=s.n(e);a.a}});
//# sourceMappingURL=app.d22887e0.js.map