(this.webpackJsonpsyncho=this.webpackJsonpsyncho||[]).push([[7],{193:function(e,t,a){"use strict";t.a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADrSURBVHgBjZIxDoIwFIbfa8WZI3AFbyA38AgsEkdGiSEymGhw0NHBBG6CN4EjmJg4YNraohDA0viSDv37vvbv36IfJQXIql7MzQ5hCYZabpIUCcyrx3NGgEtFgDO1aO6t944RQvCAi3pOCGOuBEsT3EJClIRxNzvHd1QLK9nMKc0BwZGj7NoeQpevjs2uOtiidKuDeuAQFoDSjrB10A/YwhNaNHMOzL3uwtuwjwwFJu31GpCmusDIWHrqJFPaRAepOyl7pqdCHdQNYuyp0I+OJwkEY+lp4c+XEwsTpErpXdu1GASxrQb8WU3vG83LwRVyuVdYAAAAAElFTkSuQmCC"},207:function(e,t,a){"use strict";a(0);var s=a(5),c=a(59),n=(a(208),a(1));t.a=function(){return Object(n.jsxs)("div",{className:"sidebar",children:[Object(n.jsx)("img",{src:c.a,alt:"logo"}),Object(n.jsxs)("div",{className:"links",children:[Object(n.jsx)(s.a,{to:"/leads",className:"backLinks",activeClassName:"active",children:"Lead Management"}),"assistant_admin"!==localStorage.getItem("role")?Object(n.jsx)(s.a,{to:"/user",className:"backLinks",activeClassName:"active",children:"User Management"}):null]}),Object(n.jsx)("div",{className:"navBorder",children:Object(n.jsx)("div",{className:"border"})})]})}},208:function(e,t,a){},209:function(e,t,a){"use strict";a(0);var s=a(350),c=a(298),n=a(297),r=(a(194),a(336)),i=a(1);t.a=function(){var e=localStorage.getItem("name"),t=JSON.stringify(e);return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"drop",children:[Object(i.jsxs)("div",{className:"shown",children:[Object(i.jsx)(r.a,{name:"user circle"}),Object(i.jsx)("h1",{children:t.slice(1,-1)}),Object(i.jsx)(r.a,{name:"angle down"})]}),Object(i.jsx)(s.a,{className:"d",children:Object(i.jsx)(c.a,{children:Object(i.jsx)(n.a,{onClick:function(){localStorage.clear(),sessionStorage.clear(),window.location.href="/#top"},children:Object(i.jsx)("p",{children:"Log Out"})})})})]})})}},301:function(e,t,a){},357:function(e,t,a){"use strict";a.r(t);var s=a(56),c=a.n(s),n=a(270),r=a(65),i=a(10),l=a(0),o=a.n(l),j=a(207),d=(a(301),a(168)),u=a(193),b=a(209),O=a(336),m=a(66),h=a.n(m),A=a(169),x=a(167),p=a(1);t.default=function(){var e=Object(l.useState)(!1),t=Object(i.a)(e,2),a=t[0],s=t[1],m=Object(l.useState)(""),f=Object(i.a)(m,2),v=f[0],g=f[1],N=Object(l.useState)(""),S=Object(i.a)(N,2),y=S[0],E=S[1],w=Object(l.useState)([]),C=Object(i.a)(w,2),I=C[0],k=C[1],B=Object(l.useState)({}),D=Object(i.a)(B,2),R=D[0],L=D[1],J=Object(l.useState)(""),F=Object(i.a)(J,2),Q=F[0],V=F[1],Z=Object(l.useState)(""),z=Object(i.a)(Z,2),U=z[0],Y=z[1],G=Object(l.useState)(""),q=Object(i.a)(G,2),M=q[0],P=q[1],T=Object(l.useState)(""),X=Object(i.a)(T,2),W=X[0],_=X[1],H=Object(l.useState)(0),K=Object(i.a)(H,2),$=K[0],ee=K[1],te=Object(l.useState)(!1),ae=Object(i.a)(te,2),se=ae[0],ce=ae[1],ne=Object(l.useState)(!1),re=Object(i.a)(ne,2),ie=re[0],le=re[1],oe=Object(l.useState)(!1),je=Object(i.a)(oe,2),de=je[0],ue=je[1],be=Object(l.useState)(!1),Oe=Object(i.a)(be,2),me=Oe[0],he=Oe[1],Ae=Object(l.useState)(!1),xe=Object(i.a)(Ae,2),pe=xe[0],fe=xe[1],ve=Object(l.useState)(!1),ge=Object(i.a)(ve,2),Ne=(ge[0],ge[1]),Se=Object(l.useState)(!1),ye=Object(i.a)(Se,2),Ee=ye[0],we=ye[1],Ce=Object(l.useState)(!1),Ie=Object(i.a)(Ce,2),ke=Ie[0],Be=Ie[1],De=Object(l.useState)({}),Re=Object(i.a)(De,2),Le=(Re[0],Re[1]),Je=Object(l.useState)({open:!1,message:"",type:"success"}),Fe=Object(i.a)(Je,2),Qe=Fe[0],Ve=Fe[1],Ze=function(e){switch(e.target.name){case"fname":V(e.target.value),ce(!e.target.validity.valid);break;case"lname":Y(e.target.value),le(!e.target.validity.valid);break;case"mail":P(e.target.value),ue(!e.target.validity.valid),_("")}},ze=function(){var e=Object(r.a)(c.a.mark((function e(){var t,a,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null!==localStorage.getItem("role")&&"assistant_admin"!==localStorage.getItem("role")||(window.location.href="/#top"),t=localStorage.getItem("accessToken"),a=JSON.stringify(t),s={Authorization:"Bearer ".concat(a.slice(1,-1))},null!==localStorage.getItem("role")&&"admin"===localStorage.getItem("role")&&h.a.get("".concat("http://devapi.shycosafe.com/","users").concat(""!==y?"?search=".concat(y):""),{headers:s}).then((function(e){if(e){var t=e.data.data;k(Object(n.a)(t))}})).catch((function(e){var t=e.response&&e.response.data||{},a=t.message,s=void 0===a?"Sorry! We are unable to process your request.":a,c=t.status_code,n=t.errors,r=void 0===n?{}:n,i=Object.keys(r);if(422===c&&i.length){var l={};i.forEach((function(e){return l[e]=r[e][0]})),Le(l)}else Ve({open:!0,message:s,type:"error"})}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();o.a.useEffect((function(){0===I.length&&ze()}),[]),o.a.useEffect((function(){ze()}),[y]);var Ue=function(){var e=Object(r.a)(c.a.mark((function e(){var t,a,n,r,i,l,o,j,d,u,b,O;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("accessToken"),a=JSON.stringify(t),n={Authorization:"Bearer ".concat(a.slice(1,-1))},!me){e.next=18;break}return e.prev=4,e.next=7,h.a.post("".concat("http://devapi.shycosafe.com/","users"),R,{headers:n});case 7:e.sent&&(he(!1),s(!1),V(""),Y(""),P(""),_(""),L({}),window.location.reload()),e.next=18;break;case 11:e.prev=11,e.t0=e.catch(4),he(!1),e.t0.request&&(r=JSON.parse(e.t0.request.response),_(r.message)),i=e.t0.response&&e.t0.response.data||{},l=i.message,o=void 0===l?"Sorry! We are unable to process your request.":l,j=i.status_code,d=i.errors,u=void 0===d?{}:d,b=Object.keys(u),422===j&&b.length?(O={},b.forEach((function(e){return O[e]=u[e][0]})),Le(O)):Ve({open:!0,message:o,type:"error"});case 18:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(){return e.apply(this,arguments)}}(),Ye=function(e){e.preventDefault(),/\s/.test(Q)&&ce(!0),se&&ie&&de||""===Q||""===U||""===M?(he(!1),fe(!0)):(he(!0),L({first_name:Q,last_name:U,email:M}),fe(!1),Ne(!0))};o.a.useEffect((function(){me&&Ue()}),[Ye]);var Ge=function(){var e=Object(r.a)(c.a.mark((function e(){var t,a,s,n,r,i,l,o,j,d,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("accessToken"),a=JSON.stringify(t),s={Authorization:"Bearer ".concat(a.slice(1,-1))},!ke){e.next=16;break}return e.prev=4,e.next=7,h.a.delete("".concat("http://devapi.shycosafe.com/","users/").concat($),{headers:s});case 7:e.sent&&(ee(0),Be(!1),window.location.reload()),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(4),n=e.t0.response&&e.t0.response.data||{},r=n.message,i=void 0===r?"Sorry! We are unable to process your request.":r,l=n.status_code,o=n.errors,j=void 0===o?{}:o,d=Object.keys(j),422===l&&d.length?(u={},d.forEach((function(e){return u[e]=j[e][0]})),Le(u)):Ve({open:!0,message:i,type:"error"});case 16:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(){return e.apply(this,arguments)}}();o.a.useEffect((function(){ke&&Ge()}),[ke]),o.a.useEffect((function(){""===v&&E("")}),[v]);var qe=function(){Ve({open:!1,message:"",type:"success"})};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(j.a,{}),Object(p.jsxs)("div",{className:"userMain",children:[Object(p.jsx)(b.a,{}),Object(p.jsxs)("div",{className:"contain",children:[Object(p.jsx)("h1",{children:"User Manangement"}),Object(p.jsxs)("div",{className:"Navigation",children:[Object(p.jsx)("div",{className:"links",children:Object(p.jsx)("form",{className:"searchBox",onSubmit:function(e){e.preventDefault(),E(v)},children:Object(p.jsxs)("div",{className:"text-input",children:[Object(p.jsx)("input",{value:v,className:"input",name:"search",onChange:function(e){return g(e.target.value)},pattern:"^([A-Za-z ,.'`-]{0,})$",type:"text"}),Object(p.jsx)("label",{htmlFor:"search",className:"input-placeholder",children:"Search by Name"}),Object(p.jsx)("button",{type:"submit",disabled:""===v,children:Object(p.jsx)(O.a,{name:"search"})})]})})}),Object(p.jsxs)("button",{className:"redBtn",onClick:function(){return s(!0)},children:[Object(p.jsx)(O.a,{name:"add"})," New Asst. Admin"]})]}),Object(p.jsx)("table",{className:"mainData",children:Object(p.jsxs)("tbody",{children:[Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"Name"}),Object(p.jsx)("th",{children:"Email"}),Object(p.jsx)("th",{children:"Role"}),Object(p.jsx)("th",{})]}),0===I.length?Object(p.jsx)("tr",{className:"empty",children:Object(p.jsx)("td",{children:"Records not found."})}):null,I.map((function(e,t){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"".concat(e.first_name," ").concat(e.last_name)}),Object(p.jsx)("td",{children:e.email}),Object(p.jsx)("td",{children:e.role.split("_").join(" ")}),Object(p.jsx)("td",{onClick:function(){we(!0),ee(e.id)},children:e.deletable?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAASCAYAAABrXO8xAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACTSURBVHgB7ZC7DcJAEERnLyCmhEMEiIzIOZVQAx2YDtwClZATkQEBYksgJriBBfknWf4FDiy/4DQa7dOeVlDguvFeZnL6Ro8yyje364tqWsgtWjwrBptQh6ERe+7RcgeGhIJ5w7wKXLw6P46/rxIhbiEZHgiJBZcX7SD+C3ofZxJHJArx6uBoJgZwnxZ12AKSB8sf7P0nJPvgqFIAAAAASUVORK5CYII=",alt:"delete"}),"Delete"]}):null})]},t)}))]})}),Object(p.jsx)(d.a,{className:"modalAdmin",open:a,onClose:function(){s(!1),V(""),Y(""),P(""),_(""),L({})},children:Object(p.jsxs)("div",{className:"box",children:[Object(p.jsxs)("div",{className:"head",children:[Object(p.jsxs)("div",{className:"heading",children:[Object(p.jsx)("h1",{children:"Add New Asst. Admin"}),Object(p.jsx)("p",{children:"Please fill in the details. "})]}),Object(p.jsx)("img",{className:"img",src:u.a,alt:"cancel",onClick:function(){s(!1),V(""),Y(""),P(""),_(""),L({})}})]}),Object(p.jsxs)("form",{className:"enterData",onSubmit:Ye,children:[Object(p.jsxs)("div",{className:"textInside",children:[Object(p.jsxs)("div",{className:"textInput",children:[Object(p.jsxs)("div",{className:"text-input",children:[Object(p.jsx)("input",{value:Q,className:"input",name:"fname",pattern:"^([A-Za-z ,.'`-]{2,30})$",onChange:Ze,type:"text",required:!0}),Object(p.jsx)("label",{htmlFor:"fname",className:"input-placeholder",children:"First Name"})]}),se?Object(p.jsx)("p",{className:"error-text",children:"PLEASE PROVIDE A VALID FIRST NAME"}):null]}),Object(p.jsxs)("div",{className:"textInput",children:[Object(p.jsxs)("div",{className:"text-input",children:[Object(p.jsx)("input",{value:U,className:"input",name:"lname",pattern:"^([A-Za-z ,.'`-]{2,30})$",onChange:Ze,type:"text",required:!0}),Object(p.jsx)("label",{htmlFor:"lname",className:"input-placeholder",children:"Last Name"})]}),ie?Object(p.jsx)("p",{className:"error-text",children:"PLEASE PROVIDE A VALID LAST NAME"}):null]})]}),Object(p.jsxs)("div",{className:"textInput",children:[Object(p.jsxs)("div",{className:"text-input",children:[Object(p.jsx)("input",{className:"input",value:M,name:"mail",onChange:Ze,pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",type:"email",required:!0}),Object(p.jsx)("label",{htmlFor:"mail",className:"input-placeholder",children:"Email"})]}),de&&""===W?Object(p.jsx)("p",{className:"error-text",children:"PLEASE PROVIDE A VALID EMAIL"}):null,""!==W?Object(p.jsx)("p",{className:"error-text",style:{fontSize:"16px"},children:W}):null]}),Object(p.jsxs)("div",{className:"btnGrp",children:[Object(p.jsx)("button",{className:"noOutline",onClick:function(){s(!1),V(""),Y(""),P(""),_(""),L({})},children:"Cancel"}),Object(p.jsx)("button",{disabled:!!(se||ie||de||""===Q||""===M||""===U),className:"redBtn",type:"submit",children:"Add"})]}),pe?Object(p.jsx)("p",{className:"error-text",children:"PLEASE PROVIDE A VALID DATA."}):null]})]})}),Object(p.jsx)(d.a,{className:"modalAdmin",open:Ee,onClose:function(){we(!1)},children:Object(p.jsxs)("div",{className:"box",children:[Object(p.jsxs)("div",{className:"head",children:[Object(p.jsx)("div",{className:"heading",children:Object(p.jsx)("h1",{children:"Confirmation"})}),Object(p.jsx)("img",{className:"img",src:u.a,alt:"cancel",onClick:function(){return we(!1)}})]}),Object(p.jsx)("div",{className:"body",children:Object(p.jsx)("p",{children:"Are you sure you want to delete this user as assistant admin?"})}),Object(p.jsxs)("div",{className:"btnGrp",children:[Object(p.jsx)("button",{className:"noOutline",onClick:function(){return we(!1)},children:"Cancel"}),Object(p.jsx)("button",{className:"redBtn",onClick:function(){return Be(!0)},children:"Delete"})]})]})})]}),Object(p.jsx)(A.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:Qe.open,onClose:qe,autoHideDuration:5e3,children:Object(p.jsx)(x.a,{onClose:qe,severity:Qe.type,variant:"filled",children:Qe.message})})]})]})}}}]);
//# sourceMappingURL=7.e9e051a7.chunk.js.map