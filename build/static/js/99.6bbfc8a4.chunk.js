"use strict";(self.webpackChunkfirstapp=self.webpackChunkfirstapp||[]).push([[99],{2187:function(t,e,n){n.d(e,{U:function(){return o}});var o="https://retoolapi.dev/FaGyjN/data"},8099:function(t,e,n){n.r(e);var o=n(1413),r=n(9439),a=n(2791),c=n(7689),s=n(2187),l=n(5294),u=n(8634),i=n(184);e.default=function(){var t=(0,c.s0)(),e=(0,c.UO)(),n=(0,a.useState)({}),p=(0,r.Z)(n,2),d=p[0],m=p[1],f=(0,a.useState)(!1),x=(0,r.Z)(f,2),h=x[0],j=x[1];(0,a.useEffect)((function(){j(!0),l.Z.get("".concat(s.U,"/").concat(e.id)).then((function(t){console.log(t),200===t.status?(m(t.data),j(!1)):m({})}))}),[]);var g=function(t){var e=(0,o.Z)({},d);e[t.target.name]=t.target.value,m(e)};return(0,i.jsx)(i.Fragment,{children:h?(0,i.jsx)("div",{className:"d-flex justify-content-center align-item-center",style:{marginTop:"10%"},children:(0,i.jsx)(u.Z,{})}):(0,i.jsxs)("div",{className:"container",children:[(0,i.jsxs)("div",{class:"form-group mt-2",children:[(0,i.jsx)("label",{for:"exampleFormControlInput1",children:"Product Name"}),(0,i.jsx)("input",{type:"text",name:"product_name",defaultValue:d.product_name,class:"form-control",id:"exampleFormControlInput1",onChange:g})]}),(0,i.jsxs)("div",{class:"form-group mt-2",children:[(0,i.jsx)("label",{for:"exampleFormControlInput1",children:"Product Description"}),(0,i.jsx)("input",{type:"text",name:"product_disc",defaultValue:d.product_disc,class:"form-control",id:"exampleFormControlInput1",onChange:g})]}),(0,i.jsxs)("div",{class:"form-group mt-2",children:[(0,i.jsx)("label",{for:"exampleFormControlInput1",children:"Product Price"}),(0,i.jsx)("input",{type:"number",name:"product_price",defaultValue:d.product_price,class:"form-control",id:"exampleFormControlInput1",onChange:g})]}),(0,i.jsx)("button",{className:"mt-2 btn btn-sm btn-success",onClick:function(){j(!0),l.Z.put("".concat(s.U,"/").concat(e.id),d).then((function(e){200===e.status&&t(-1)}))},children:"Update"})]})})}}}]);
//# sourceMappingURL=99.6bbfc8a4.chunk.js.map