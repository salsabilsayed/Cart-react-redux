(this.webpackJsonpbag=this.webpackJsonpbag||[]).push([[0],{32:function(t,e,c){},38:function(t,e,c){},42:function(t,e,c){},60:function(t,e,c){},61:function(t,e,c){},62:function(t,e,c){},63:function(t,e,c){},64:function(t,e,c){},65:function(t,e,c){},66:function(t,e,c){},67:function(t,e,c){"use strict";c.r(e);var a=c(0),n=c.n(a),r=c(11),i=c.n(r),o=(c(32),c(4)),s=(c(38),c(1)),u=function(t){return Object(s.jsx)("div",{className:"container",children:t.children})},j=c(7),b=c(6),l=(c(42),function(){var t=Object(o.d)((function(t){return t.basketNumber}));return Object(s.jsx)("nav",{children:Object(s.jsx)(u,{children:Object(s.jsxs)("div",{className:"nav-container",children:[Object(s.jsx)("h2",{children:"Shopping Cart"}),Object(s.jsxs)("div",{className:"basket",children:[Object(s.jsx)(j.a,{icon:b.c,className:"cart-icon"}),Object(s.jsx)("div",{className:"basketNumBox",children:Object(s.jsx)("p",{className:"basketNum",children:t})})]})]})})})}),d=n.a.memo(l),m=c(26),O=c.n(m),f=(c(60),function(t){var e=t.title,c=t.amount,a=t.img,n=t.price,r=t.id,i=Object(o.c)();return Object(s.jsxs)("li",{className:"parent",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("img",{src:a,alt:e,className:"image"}),Object(s.jsxs)("div",{children:[Object(s.jsx)("h4",{children:e}),Object(s.jsx)("p",{className:"price",children:n}),Object(s.jsx)("button",{type:"button",className:"remove-btn",onClick:function(){return i(function(t){return{type:"REMOVE_ITEM",payload:t}}(r))},children:"remove"})]})]}),Object(s.jsxs)("div",{className:"counter-container",children:[Object(s.jsx)(j.a,{icon:b.b,className:"count-icon",onClick:function(){return i(function(t){return{type:"INCREMENT",payload:t}}(r))}}),Object(s.jsx)("p",{children:c}),Object(s.jsx)(j.a,{icon:b.a,className:"count-icon",onClick:function(){return i(function(t){return{type:"DECREMENT",payload:t}}(r))}})]})]})}),p=n.a.memo(f),h=Object(o.b)((function(t){return{data:t.data}}),(function(t){return{fetchItems:function(){return t((function(t){t({type:"FETCH_DATA"}),O.a.get("https://course-api.com/react-useReducer-cart-project").then((function(e){var c=e.data;t({type:"FETCH_DATA_SUCCESS",payload:c}),t({type:"GET_TOTAL"})})).catch((function(e){var c=e.message;t(function(t){return{type:"FETCH_DATA_FAILURE",payload:t}}(c))}))}))}}}))((function(t){var e=t.fetchItems,c=t.data;return Object(a.useEffect)((function(){e()}),[e]),Object(s.jsx)(n.a.Fragment,{children:Object(s.jsx)("ul",{children:c.map((function(t){return Object(s.jsx)(p,{title:t.title,price:t.price,img:t.img,amount:t.amount,id:t.id},t.id)}))})})})),x=(c(61),function(){return Object(s.jsx)("h1",{children:"YOUR BAG"})}),N=n.a.memo(x),E=(c(62),function(){var t=Object(o.d)((function(t){return t.totalPrice}));return Object(s.jsxs)(n.a.Fragment,{children:[Object(s.jsx)("div",{className:"border"}),Object(s.jsxs)("div",{className:"total",children:[Object(s.jsx)("h4",{children:"Total"}),Object(s.jsxs)("p",{className:"totalPrice",children:["$",t.toFixed(2)]})]})]})}),v=n.a.memo(E),y=(c(63),function(){var t=Object(o.c)();return Object(s.jsx)("div",{className:"btn-container",children:Object(s.jsx)("button",{type:"button",className:"btn",onClick:function(){return t({type:"CLEAR_ALL",payload:e});var e},children:"clear cart"})})}),T=n.a.memo(y);c(64);var g=function(){return Object(s.jsx)("h4",{className:"empty-p",children:"is currently empty"})};c(65);var A=function(){return Object(s.jsx)("div",{className:"loading",children:Object(s.jsx)("h2",{className:"loading-title",children:"Loading..."})})};c(66);var C=function(){var t=Object(o.d)((function(t){return t})),e=t.isEmpty,c=t.loading;return Object(s.jsxs)(n.a.Fragment,{children:[!c&&Object(s.jsx)(d,{}),c&&Object(s.jsx)(A,{}),Object(s.jsxs)(u,{children:[!c&&Object(s.jsx)(N,{}),e&&Object(s.jsx)(g,{}),!e&&Object(s.jsx)(h,{}),!e&&!c&&Object(s.jsx)(v,{}),!e&&!c&&Object(s.jsx)(T,{})]})]})},k=c(12),_=c(3),F={data:[],loading:!1,error:"",basketNumber:0,totalPrice:0,isEmpty:!1},R=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"FETCH_DATA":return Object(_.a)(Object(_.a)({},t),{},{loading:!0});case"FETCH_DATA_SUCCESS":return Object(_.a)(Object(_.a)({},t),{},{loading:!1,data:e.payload,error:""});case"FETCH_DATA_FAILURE":return Object(_.a)(Object(_.a)({},t),{},{loading:!1,data:[],error:e.payload});case"GET_TOTAL":var c=0;t.data.forEach((function(t){return c+=Number(t.price)}));var a=0;return t.data.forEach((function(t){return a+=t.amount})),Object(_.a)(Object(_.a)({},t),{},{totalPrice:c,basketNumber:a});case"INCREMENT":var n,r=t.data.map((function(t,c){return t.id===e.payload?(n=c,Object(_.a)(Object(_.a)({},t),{},{amount:t.amount+1})):t}));return Object(_.a)(Object(_.a)({},t),{},{data:r,basketNumber:t.basketNumber+1,totalPrice:t.totalPrice+Number(r[n].price)});case"DECREMENT":var i,o=t.data.map((function(t,c){return t.id===e.payload?(i=c,Object(_.a)(Object(_.a)({},t),{},{amount:t.amount-1})):t})).filter((function(t){return 0!==t.amount}));return Object(_.a)(Object(_.a)({},t),{},{data:o,basketNumber:t.basketNumber-1,totalPrice:t.totalPrice-Number(o[i].price)*o[i].amount});case"REMOVE_ITEM":var s=t.data.find((function(t){return t.id===e.payload}));return Object(_.a)(Object(_.a)({},t),{},{basketNumber:t.basketNumber-s.amount,totalPrice:t.totalPrice-s.amount*s.price,data:t.data.filter((function(t){return t.id!==e.payload}))});case"CLEAR_ALL":return Object(_.a)(Object(_.a)({},t),{},{basketNumber:0,totalPrice:0,data:[],isEmpty:!0});default:return t}},L=c(27),P=Object(k.c)(R,Object(k.b)(Object(k.a)(L.a)));i.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(o.a,{store:P,children:Object(s.jsx)(C,{})})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.c6254a88.chunk.js.map