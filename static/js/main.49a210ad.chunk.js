(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{18:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var r,i,c,a,o,s,l,d,j,u,p,b,g,x,m,O,h,f,v,y,C,F,k,w,S,P,U,M,T,z=n(1),E=n.n(z),Y=n(5),L=n.n(Y),N=(n(18),n(2)),q=n(3),A=n(4),B=n(0),D=Object(z.createContext)(),I=function(){return Object(z.useContext)(D)},J=function(e){var t=e.children,n=Object(z.useState)(0),r=Object(A.a)(n,2),i=r[0],c=r[1],a=Object(z.useState)(0),o=Object(A.a)(a,2),s=o[0],l=o[1],d=Object(z.useState)([]),j=Object(A.a)(d,2),u=j[0],p=j[1];return Object(B.jsx)(D.Provider,{value:{qty:i,sum:s,handleSetSum:function(e){l(s+e)},handleSetQty:function(e){c(i+e)},clearCart:function(){c(0),l(0),p([])},savedProducts:u,updateList:function(e){var t=u.concat(e);p(t)}},children:t})},Q=Object(z.createContext)(),W=function(){return Object(z.useContext)(Q)},G=function(e){var t=e.children,n=Object(z.useState)(!1),r=Object(A.a)(n,2),i=r[0],c=r[1],a=Object(z.useState)(!1),o=Object(A.a)(a,2),s=o[0],l=o[1],d=Object(z.useState)(!1),j=Object(A.a)(d,2),u=j[0],p=j[1];return Object(B.jsx)(Q.Provider,{value:{TYpopup:s,modalForm:i,toggleModalForm:function(){return c(!i)},toggleTYPopup:function(){l(!s)},modalCart:u,toggleModalCart:function(){return p(!u)}},children:t})},H=q.a.div(r||(r=Object(N.a)(["\n  padding: 0.5rem 0;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background: lightgray;\n  z-index: 100;\n"]))),K=q.a.div(i||(i=Object(N.a)(["\n  display: flex;\n  justify-content: space-between;\n\n"]))),R=q.a.div(c||(c=Object(N.a)(["\n  max-width: 1200px;\n  margin: auto;\n"]))),V=q.a.span(a||(a=Object(N.a)(["\n"]))),X=q.a.span(o||(o=Object(N.a)(["\n  color: darkred;\n"]))),Z=q.a.div(s||(s=Object(N.a)(["\n  padding: 5px 12px;\n  background: darkorange;\n  color: white;\n  text-transform: uppercase;\n  border: 0;\n  border-radius: 4px;\n  cursor: pointer;\n;"]))),$=function(){var e=I(),t=e.qty,n=e.sum,r=W(),i=r.toggleModalCart;r.toggleModalForm;return Object(B.jsx)(H,{children:Object(B.jsx)(R,{children:Object(B.jsxs)(K,{children:[Object(B.jsxs)(V,{children:["\u0422\u043e\u0432\u0430\u0440\u043e\u0432 \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0435 -",Object(B.jsxs)(X,{children:[" ",t]})," \u043d\u0430 \u0441\u0443\u043c\u043c\u0443:",Object(B.jsx)(X,{children:n})]}),Object(B.jsx)(Z,{onClick:function(){i()},children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437"})]})})})},_=q.a.div(l||(l=Object(N.a)(["\n  max-width: 1200px;\n  margin: auto;\n"]))),ee=q.a.h1(d||(d=Object(N.a)(["\n  font-weight: 500;\n"]))),te=function(){return Object(B.jsx)(B.Fragment,{children:Object(B.jsxs)(_,{children:[Object(B.jsx)(ee,{children:"Welcome to our site"}),Object(B.jsx)(pe,{}),Object(B.jsx)(Ce,{})]})})},ne=Object(z.createContext)(),re=function(){return Object(z.useContext)(ne)},ie=function(e){var t=e.children,n=Object(z.useState)({visible:!1,text:""}),r=Object(A.a)(n,2),i=r[0],c=r[1];return Object(B.jsx)(ne.Provider,{value:{alert:i,setAlert:c},children:t})},ce=Object(z.createContext)(),ae=function(){return Object(z.useContext)(ce)},oe=function(e){var t=e.children,n=Object(z.useState)("1"),r=Object(A.a)(n,2),i=r[0],c=r[1],a=Object(z.useState)(0),o=Object(A.a)(a,2),s=o[0],l=o[1];return Object(B.jsx)(ce.Provider,{value:{categoryFilter:i,priceFilter:s,setCategoryFilter:c,setPriceFilter:l},children:t})},se=q.a.div(j||(j=Object(N.a)(["\n  padding: 1rem;\n  background: lightgray;\n  margin-bottom: 1rem;\n  display: flex;\n"]))),le=q.a.label(u||(u=Object(N.a)(["\n  margin-right: 1rem\n;"]))),de=q.a.select(p||(p=Object(N.a)(["    \n  background: none;\n  border: 1px solid navy;\n  margin-right: 2rem\n;"]))),je=q.a.div(b||(b=Object(N.a)([""]))),ue=q.a.div(g||(g=Object(N.a)([""]))),pe=function(){var e=ae(),t=e.priceFilter,n=e.categoryFilter,r=e.setPriceFilter,i=e.setCategoryFilter,c=function(e){var t=e.target,n=t.id,c=t.value;"category"===n?i(c):r(Number(c))};return Object(B.jsxs)(se,{children:[Object(B.jsxs)(je,{children:[Object(B.jsx)(le,{children:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f"}),Object(B.jsxs)(de,{id:"category",value:n,onChange:function(e){return c(e)},children:[Object(B.jsx)("option",{value:"0",children:"\u0412\u0441\u0435"}),Object(B.jsx)("option",{value:"1",children:"\u0417\u0430\u0432\u0442\u0440\u0430\u043a\u0438"}),Object(B.jsx)("option",{value:"2",children:"\u041f\u0435\u0440\u0432\u044b\u0435 \u0431\u043b\u044e\u0434\u0430"}),Object(B.jsx)("option",{value:"3",children:"\u0413\u0430\u0440\u043d\u0438\u0440\u044b"})]})]}),Object(B.jsxs)(ue,{children:[Object(B.jsx)(le,{children:"\u0426\u0435\u043d\u0430"}),Object(B.jsxs)(de,{id:"price",value:t,onChange:function(e){return c(e)},children:[Object(B.jsx)("option",{value:"0",children:"\u0412\u0441\u0435"}),Object(B.jsx)("option",{value:"30",children:"\u0414\u043e 30 \u0433\u0440\u043d"}),Object(B.jsx)("option",{value:"50",children:"\u0414\u043e 50 \u0433\u0440\u043d"}),Object(B.jsx)("option",{value:"100",children:"\u0414\u043e 100 \u0433\u0440\u043d"}),Object(B.jsx)("option",{value:"150",children:"\u0414\u043e 150 \u0433\u0440\u043d"})]})]})]})},be=q.a.div(x||(x=Object(N.a)(["display: flex;\n    flex-direction: column;\n    margin-bottom: 30px;\n    border: 1px dotted #ff3adc;\n    padding: 8px;\n"]))),ge=q.a.h3(m||(m=Object(N.a)(["    \n  text-align: center;\n  margin-bottom: 1rem;\n;"]))),xe=q.a.div(O||(O=Object(N.a)(["\n  margin-top: auto;\n  margin-bottom: 20px;\n  \n  img{\n    max-width: 100%;\n    width: 100%;\n    height: auto;\n  }\n"]))),me=q.a.div(h||(h=Object(N.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),Oe=q.a.div(f||(f=Object(N.a)(["\n  input{\n    width: 50px;\n    padding: 3px;\n  }\n"]))),he=q.a.div(v||(v=Object(N.a)(["\n  border: 0;\n  padding: 4px 8px;\n  background-color: #1674d1;\n  border-color: #1674d1;\n  color: #fff;\n  transition: transform 0.3s ease;\n  will-change: transform;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  cursor: pointer;\n\n  &:hover {\n    background-color: #1261ae;\n    border-color: #115aa3;\n  }\n"]))),fe=function(e){var t=e.item,n=t.title,r=t.imageUrl,i=t.price,c=I(),a=c.handleSetQty,o=c.handleSetSum,s=c.updateList,l=Object(z.useState)(""),d=Object(A.a)(l,2),j=d[0],u=d[1],p=function(){u("")};return Object(B.jsxs)(be,{children:[Object(B.jsx)(ge,{children:n}),Object(B.jsx)(xe,{children:Object(B.jsx)("img",{src:r,alt:""})}),Object(B.jsxs)(me,{children:[Object(B.jsx)("p",{children:i}),"\u0433\u0440\u043d.",Object(B.jsxs)(Oe,{children:[Object(B.jsx)("input",{min:"0",type:"number",value:j,onChange:function(e){return function(e){u(Number(e.target.value))}(e)}}),"\u041a\u043e\u043b."]}),Object(B.jsx)(he,{onClick:function(){return function(e){j&&(o(j*i),a(j),s(e),p())}(t)},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})]})},ve=[{title:"\u041e\u0432\u0441\u044f\u043d\u0430\u044f \u043a\u0430\u0448\u0430 \u0441 \u0444\u0440\u0443\u043a\u0442\u0430\u043c\u0438",price:25,imageUrl:"../../assets/images/im1.jpg",category:"1",id:0},{title:"\u042f\u0438\u0447\u043d\u0438\u0446\u0430 \u0433\u043b\u0430\u0437\u0443\u043d\u044c\u044f \u0441 \u043e\u0432\u043e\u0449\u0430\u043c\u0438 \u043d\u0430 \u0441\u043a\u043e\u0432\u043e\u0440\u043e\u0434\u043a\u0435",price:25,imageUrl:"../../assets/images/im2.jpg",category:"1",id:1},{title:"\u0421\u0435\u0442 \u0430\u0437\u0435\u0440\u0431\u0430\u0439\u0434\u0436\u0430\u043d\u0441\u043a\u0438\u0439 \u0437\u0430\u0432\u0442\u0440\u0430\u043a",price:30,imageUrl:"../../assets/images/im3.jpg",category:"1",id:2},{title:"\u042f\u0438\u0447\u043d\u0438\u0446\u0430 \u0441 \u043f\u043e\u043c\u0438\u0434\u043e\u0440\u0430\u043c\u0438 \u043f\u043e-\u0431\u0430\u043a\u0438\u043d\u0441\u043a\u0438",price:45,imageUrl:"../../assets/images/im4.jpg",category:"1",id:3},{title:"\u0421\u044b\u0440\u043d\u0438\u043a\u0438 \u0441\u043e \u0441\u043c\u0435\u0442\u0430\u043d\u043e\u0439",price:45,imageUrl:"../../assets/images/im5.jpg",category:"1",id:4},{title:"\u0428\u043f\u0438\u043d\u0430\u0442\u043d\u044b\u0439 \u043a\u0440\u0435\u043c-\u0441\u0443\u043f",price:50,imageUrl:"../../assets/images/im6.jpg",category:"2",id:5},{title:"\u0421\u0443\u043f \u041f\u0438\u0442\u0438",price:85,imageUrl:"../../assets/images/im7.jpg",category:"2",id:6},{title:"\u0411\u043e\u0440\u0449 \u0443\u043a\u0440\u0430\u0438\u043d\u0441\u043a\u0438\u0439",price:95,imageUrl:"../../assets/images/im8.jpg",category:"2",id:7},{title:"\u0421\u0443\u043f \u041a\u044e\u0444\u0442\u0430 \u0411\u043e\u0437\u0431\u0430\u0448",price:100,imageUrl:"../../assets/images/im9.jpg",category:"2",id:8},{title:"\u041a\u0430\u0440\u0442\u043e\u0444\u0435\u043b\u044c \u0444\u0440\u0438",price:125,imageUrl:"../../assets/images/im10.jpg",category:"3",id:9},{title:"\u041a\u0430\u0440\u0442\u043e\u0444\u0435\u043b\u044c \u043f\u043e-\u0434\u043e\u043c\u0430\u0448\u043d\u0435\u043c\u0443",price:135,imageUrl:"../../assets/images/im11.jpg",category:"3",id:10},{title:"\u0420\u0438\u0441 \u0441 \u043e\u0432\u043e\u0449\u0430\u043c\u0438",price:150,imageUrl:"../../assets/images/im12.jpg",category:"3",id:11}],ye=q.a.div(y||(y=Object(N.a)(["\n  display: grid;\n  grid-column-gap: 15px;\n  grid-template-columns: repeat(4, 1fr);\n"]))),Ce=function(){var e=ae(),t=e.priceFilter,n=e.categoryFilter,r=ve.filter((function(e){return 0===t?e:e.price<t}));return r=r.filter((function(e){return"0"===n?e:e.category===n})),Object(B.jsx)(ye,{children:r.map((function(e){return Object(B.jsx)(fe,{item:e},e.id)}))})},Fe=q.a.div(C||(C=Object(N.a)(["\n  padding: 1rem;\n  background: lightgray;\n  margin-bottom: 1rem;\n  position: fixed;\n  left: calc(50% - 300px);\n  width: 400px;\n  height: 200px;\n  top: 100px;\n  font-size: 23px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  \n  span{\n    position: absolute;\n    top: -20px;\n    right: -20px;\n    cursor: pointer;\n  }\n"]))),ke=function(){var e=W().toggleTYPopup;return Object(B.jsx)(B.Fragment,{children:Object(B.jsxs)(Fe,{children:[Object(B.jsx)("span",{onClick:e,children:"\u2715"}),"Thank you!"]})})},we=q.a.div(F||(F=Object(N.a)(["\n  padding: 1rem;\n  background: lightgray;\n  margin-bottom: 1rem;\n  position: fixed;\n  width: 400px;\n  height: 200px;\n  top: 100px;\n  left: calc(50% - 300px);\n\n  span{\n    position: absolute;\n    right: -16px;\n    top: -20px;\n    cursor: pointer;\n  }\n"]))),Se=q.a.div(k||(k=Object(N.a)([""]))),Pe=q.a.div(w||(w=Object(N.a)(["\n  position: absolute;\n  bottom: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: calc(100% - 40px);\n"]))),Ue=function(){var e=W(),t=e.toggleModalCart,n=e.toggleModalForm,r=I(),i=r.savedProducts,c=r.sum,a=(r.qty,Object(B.jsxs)(B.Fragment,{children:[i.map((function(e){return Object(B.jsx)("li",{children:e.title},Date.now())})),Object(B.jsxs)(Pe,{children:[Object(B.jsxs)(Se,{children:[" \u0421\u0443\u043c\u043c\u0430: ",c]}),Object(B.jsx)("button",{onClick:function(){n(),t()},children:"\u041a\u0443\u043f\u0438\u0442\u044c"})]})]})),o=Object(B.jsx)("p",{children:"No items here"});return Object(B.jsxs)(we,{children:[Object(B.jsx)("span",{onClick:t,children:"\u2715"}),i.length>0?a:o]})},Me=q.a.div(S||(S=Object(N.a)(["\n  padding: 1rem;\n  background: lightgray;\n  margin-bottom: 1rem;\n  position: fixed;\n  top: 100px;\n  left: calc(50% - 300px);\n  \n  span{\n    position: absolute;\n    right: -16px;\n    top: -20px;\n    cursor: pointer;\n  }\n"]))),Te=q.a.form(P||(P=Object(N.a)(["\n  display: flex;\n  flex-direction: column;\n  \n  input{\n    width: 400px;\n    height: 30px;\n    margin-bottom: 15px;\n    border: 0;\n    border-radius: 4px;\n    padding: 5px;\n  }\n"]))),ze=q.a.button(U||(U=Object(N.a)(["    \n    background: #ffa;\n    color: #000;\n    font-size: 16px;\n    height: 56px;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n"]))),Ee=function(){var e=W(),t=e.modalCart,n=e.modalForm,r=e.toggleModalForm,i=e.toggleTYPopup,c=e.TYpopup,a=re().setAlert,o=I().clearCart;return Object(B.jsxs)(B.Fragment,{children:[t&&Object(B.jsx)(Ue,{}),n&&Object(B.jsxs)(Me,{children:[Object(B.jsx)("span",{onClick:r,children:"\u2715"}),Object(B.jsxs)(Te,{action:"",name:"userForm",children:[Object(B.jsx)("input",{type:"text",placeholder:"Name",name:"name"}),Object(B.jsx)("input",{type:"text",placeholder:"Email",name:"email"}),Object(B.jsx)(ze,{onClick:function(e){e.preventDefault();var t=document.userForm.name,n=document.userForm.email;""!==t.value&&t.value.replace(/\s/g,"").length||a({visible:!0,text:"Please enter correct name!"}),""!==n.value&&n.value.replace(/\s/g,"").length?(r(),o(),i()):a({visible:!0,text:"Please provide correct Email!"})},children:"Send"})]})]}),c&&Object(B.jsx)(ke,{})]})},Ye=function(){var e=document.getElementById("modal"),t=document.createElement("div");return Object(z.useEffect)((function(){return e.appendChild(t),function(){e.removeChild(t)}}),[t]),L.a.createPortal(Object(B.jsx)(Ee,{}),e)},Le=q.a.div(M||(M=Object(N.a)(["\n  position: fixed;\n  z-index: 10;\n  top: 0;\n  padding: 20px;\n  width: calc(100% - 50px);\n  background: #d9534f;\n  color: #fff;\n  opacity: 0.8;\n  margin: 5px;\n  border-radius: 10px;\n  z-index: 300;\n  \nspan{\n  position: absolute;\n  right: 20px;\n  top: 18px;\n  cursor: pointer;\n}\n"]))),Ne=function(){var e=re(),t=e.alert,n=e.setAlert;return t.visible?Object(B.jsxs)(Le,{children:[t.text,Object(B.jsx)("span",{onClick:function(){return n({visible:!1,text:""})},children:"\u2715"})]}):null},qe=n(10);var Ae=q.a.div(T||(T=Object(N.a)(["\n  padding-top: 40px;\n"]))),Be=function(){var e=[[ie],[oe],[G],[J]].reduce((function(e,t){var n=Object(A.a)(t,2),r=n[0],i=n[1],c=void 0===i?{}:i;return function(t){var n=t.children;return Object(B.jsx)(e,{children:Object(B.jsx)(r,Object(qe.a)(Object(qe.a)({},c),{},{children:n}))})}}),(function(e){var t=e.children;return Object(B.jsx)(B.Fragment,{children:t})}));return Object(B.jsxs)(e,{children:[Object(B.jsxs)(Ae,{children:[Object(B.jsx)(Ne,{}),Object(B.jsx)($,{}),Object(B.jsx)(te,{})]}),Object(B.jsx)(Ye,{})]})},De=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),i(e),c(e),a(e)}))};L.a.render(Object(B.jsx)(E.a.StrictMode,{children:Object(B.jsx)(Be,{})}),document.getElementById("root")),De()}},[[22,1,2]]]);
//# sourceMappingURL=main.49a210ad.chunk.js.map