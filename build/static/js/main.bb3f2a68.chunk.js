(this.webpackJsonpnotes=this.webpackJsonpnotes||[]).push([[0],{113:function(e,t,n){e.exports={menu:"styles_menu__16Mxx",link:"styles_link__3qNSY"}},127:function(e,t,n){e.exports={content:"styles_content__3oCXF","text-header":"styles_text-header__1KwVW"}},152:function(e,t,n){e.exports={container:"styles_container__35dEc"}},281:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(16),c=n.n(r),s=n(23),i=n(284),o=n(6),u=function(e){var t=Object.assign({},e);return Object(o.jsx)(i.a,Object(s.a)({},t))};u.Header=i.a.Header,u.Content=i.a.Content,u.Footer=i.a.Footer,u.Sider=i.a.Sider;var d=u,l=(n(177),n(152)),j=n.n(l),b=n(81),p=function(){return Object(b.b)()},h=b.c,O=n(170),f=n(39),m=n.n(f),x=n(62),v=n(31),k=new(n(153).a)("tasksDb");k.version(1).stores({tasks:"++id, name, description"});var _=k,y=n(34),g=Object(v.c)({name:"app",initialState:{tasks:[],status:"idle"},reducers:{addTask:function(e,t){e.tasks=[].concat(Object(y.a)(e.tasks),[t.payload])},loadTasks:function(e,t){e.tasks=t.payload},deleteTask:function(e,t){e.tasks=e.tasks.filter((function(e){return e.id!=t.payload}))},updateTask:function(e,t){var n=e.tasks.map((function(e){return e.id===t.payload.id?t.payload:e}));e.tasks=n}}}),w=g.actions,S=w.addTask,T=w.loadTasks,N=w.deleteTask,C=w.updateTask,F=g.reducer,A=Object(v.b)("app/addTaskAsync",function(){var e=Object(x.a)(m.a.mark((function e(t,n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.table("tasks").add(t);case 3:n.dispatch(S(t)),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,n){return e.apply(this,arguments)}}()),D=Object(v.b)("app/loadTaskAsync",function(){var e=Object(x.a)(m.a.mark((function e(t,n){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.table("tasks").toArray();case 3:a=e.sent,n.dispatch(T(a)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}()),E=Object(v.b)("app/deleteTaskAsync",function(){var e=Object(x.a)(m.a.mark((function e(t,n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t),e.next=4,_.table("tasks").delete(t);case 4:n.dispatch(N(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}()),B=Object(v.b)("app/updateTaskAsync",function(){var e=Object(x.a)(m.a.mark((function e(t,n){var a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=t.id,r=Object(O.a)(t,["id"]),e.next=4,_.table("tasks").update(a,r);case 4:n.dispatch(C(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}()),I=n(38),q=n(21),V=n(171),H=n(165),J=n(285),M=function(e){var t=Object.assign({},e);return Object(o.jsx)(J.a,Object(s.a)({},t))};M.Search=J.a.Search,M.TextArea=J.a.TextArea;var P=M,R=n(114),W=n(4),z=n.n(W),L=n(84),X=n.n(L),K=n(58),U=function(e){var t=Object.assign({},e);return Object(o.jsx)(K.a,Object(s.a)({},t))},Y={color:"tomato",fontSize:"12px"},$=function(e){var t=e.changeDbFunction,n=e.title,a=e.head,r=e.inform,c=R.a().shape({name:R.b().required("Name is required"),description:R.b().required("Description is required")}),i=Object(H.a)({initialValues:{name:a,description:r},validateOnBlur:!0,validationSchema:c,onSubmit:function(e){t(e)}}),u=z()({"input-error":i.errors.name&&i.touched.name,"":!i.errors.name||!i.touched.name}),d=z()({"input-error":i.errors.description&&i.touched.description,"":!i.errors.description||!i.touched.description});return Object(o.jsxs)("form",{className:X.a.form,onSubmit:i.handleSubmit,children:[Object(o.jsx)("h3",{className:X.a["form-header"],children:n}),Object(o.jsxs)("label",{htmlFor:"name",children:["Title",Object(o.jsx)(P,Object(s.a)({className:X.a[u],id:"name",placeholder:"Type name"},i.getFieldProps("name")))]}),i.touched.name&&i.errors.name&&Object(o.jsx)("div",{style:Y,children:i.errors.name}),Object(o.jsxs)("label",{htmlFor:"desc",children:["Description",Object(o.jsx)(P.TextArea,Object(s.a)(Object(s.a)({className:X.a[d],id:"desc",placeholder:"Type description"},i.getFieldProps("description")),{},{autoSize:{minRows:10}}))]}),i.touched.description&&i.errors.description&&Object(o.jsx)("div",{style:Y,children:i.errors.description}),Object(o.jsx)(U,{type:"primary",htmlType:"submit",children:"Submit"}),Object(o.jsx)(U,{type:"default",onClick:function(){return i.resetForm()},children:"Clear"})]})},G=function(){var e=p(),t=Object(q.f)();return Object(o.jsx)($,{changeDbFunction:function(n){var a=Object(V.a)(8),r=Object(s.a)(Object(s.a)({},n),{},{id:a});e(A(r)),t.push("/task/".concat(a))},title:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u0437\u0430\u043c\u0435\u0442\u043a\u0443",head:"",inform:""})},Q=n(35),Z=n(127),ee=n.n(Z),te=n(286),ne=function(e){var t=Object.assign({},e);return Object(o.jsx)(te.a,Object(s.a)({},t))},ae=function(){var e=Object(a.useState)(!1),t=Object(Q.a)(e,2),n=t[0],r=t[1],c=Object(q.g)(),s=p(),i=Object(q.f)();return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(U,{danger:!0,onClick:function(){return r(!0)},children:"Delite"}),Object(o.jsx)(ne,{title:"Do you want to delete this task?",visible:n,onOk:function(){s(E(c.id)),r(!1),i.push("/")},onCancel:function(){r(!1)}})]})},re=function(){var e,t=Object(a.useState)(""),n=Object(Q.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(""),i=Object(Q.a)(s,2),u=i[0],d=i[1],l=h((function(e){return e.appSlice.tasks})),j=h((function(e){return e.headerSlice.value})),b=Object(q.g)(),p=l.filter((function(e){return e.id===b.id})),O=Object(Q.a)(p,1)[0];return Object(a.useEffect)((function(){if(!j)return c(null===O||void 0===O?void 0:O.name),void d(null===O||void 0===O?void 0:O.description);var e=(null===O||void 0===O?void 0:O.description.split(" ")).map((function(e){return e.replace(j,"<mark>".concat(j,"</mark>"))}));d(e.join(" "))}),[j,O]),Object(o.jsxs)("section",{className:ee.a.content,children:[Object(o.jsxs)("header",{children:[Object(o.jsx)(U,{type:"primary",children:Object(o.jsx)(I.b,{to:"edit-task",children:"Edit"})}),Object(o.jsx)(ae,{})]}),Object(o.jsxs)("article",{children:[Object(o.jsx)("h3",{className:ee.a["text-header"],children:r}),Object(o.jsx)("p",{dangerouslySetInnerHTML:(e=u,{__html:e})})]})]})},ce=n(287),se=function(e){var t=Object.assign({},e);return Object(o.jsx)(ce.a,Object(s.a)({},t))};se.Item=ce.a.Item;var ie=se,oe=n(288),ue=n(289),de=n(113),le=n.n(de),je=d.Sider,be=function(){var e=h((function(e){return e.appSlice})),t=e.tasks;e.status;return Object(o.jsx)(je,{theme:"dark",children:Object(o.jsxs)(ie,{className:le.a.menu,children:[Object(o.jsx)(ie.Item,{icon:Object(o.jsx)(oe.a,{}),children:Object(o.jsx)(I.b,{className:le.a.link,to:"/create-task",children:"Create new task"})},"1"),t.map((function(e){var t=e.id,n=e.name;return Object(o.jsx)(ie.Item,{id:t,icon:Object(o.jsx)(ue.a,{}),children:Object(o.jsx)(I.b,{className:le.a.link,to:"/task/".concat(t,"/"),children:n})},t)}))]})})},pe=function(){var e=Object(q.f)(),t=p(),n=Object(q.g)(),a=h((function(e){return e.appSlice})).tasks.filter((function(e){return e.id===n.id})),r=Object(Q.a)(a,1)[0];return Object(o.jsx)($,{changeDbFunction:function(a){var r=Object(s.a)(Object(s.a)({},a),{},{id:n.id});t(B(r)),e.push("/task/".concat(n.id))},title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0437\u0430\u043c\u0435\u0442\u043a\u0443",head:r.name,inform:r.description})},he=n(85),Oe=n.n(he),fe=Object(v.c)({name:"header",initialState:{value:""},reducers:{changeValue:function(e,t){e.value=t.payload}}}),me=fe.actions.changeValue,xe=fe.reducer,ve=d.Header,ke=function(){var e=p();return Object(o.jsx)(ve,{className:Oe.a.header,children:Object(o.jsxs)("div",{className:Oe.a.header__wrapper,children:[Object(o.jsx)(I.b,{to:"/",className:Oe.a.header__text,children:"Notes"}),Object(o.jsx)(P.Search,{placeholder:"Enter search text",className:Oe.a.header__search,onSearch:function(t){return e(me(t))},allowClear:!0})]})})},_e=d.Content,ye=function(){var e=p();return Object(a.useEffect)((function(){e(D())}),[]),Object(o.jsx)(I.a,{children:Object(o.jsxs)(d,{className:j.a.container,children:[Object(o.jsx)(ke,{}),Object(o.jsxs)(d,{children:[Object(o.jsx)(be,{}),Object(o.jsx)(_e,{children:Object(o.jsxs)(q.c,{children:[Object(o.jsx)(q.a,{path:["/","/create-task"],component:G,exact:!0}),Object(o.jsx)(q.a,{path:"/task/:id/edit-task",component:pe,exact:!0}),Object(o.jsx)(q.a,{path:"/task/:id",component:re,exact:!0})]})})]})]})})};function ge(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(t){return setTimeout((function(){return t({data:e})}),500)}))}var we=Object(v.b)("counter/fetchCount",function(){var e=Object(x.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ge(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Se=Object(v.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}},extraReducers:function(e){e.addCase(we.pending,(function(e){e.status="loading"})).addCase(we.fulfilled,(function(e,t){e.status="idle",e.value+=t.payload}))}}),Te=Se.actions,Ne=(Te.increment,Te.decrement,Te.incrementByAmount,Se.reducer),Ce=Object(v.a)({reducer:{appSlice:F,headerSlice:xe,counter:Ne}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(o.jsx)(b.a,{store:Ce,children:Object(o.jsx)(ye,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},84:function(e,t,n){e.exports={"input-error":"styles_input-error__2VMa-","form-header":"styles_form-header__3jcLJ",form:"styles_form__35kpl"}},85:function(e,t,n){e.exports={header:"styles_header__3B9XR",header__wrapper:"styles_header__wrapper__OUoNp",header__search:"styles_header__search__3h_99",header__text:"styles_header__text__30OEa"}}},[[281,1,2]]]);
//# sourceMappingURL=main.bb3f2a68.chunk.js.map