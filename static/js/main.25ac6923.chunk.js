(this["webpackJsonpweb-app"]=this["webpackJsonpweb-app"]||[]).push([[0],{20:function(e){e.exports=JSON.parse('{"a":"https://susmit89.github.io"}')},49:function(e,t,a){},74:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(17),l=a.n(o),c=a(8),s=(a(49),a(3)),i=a(4),u=a(6),m=a(5),p=a(1),h=a(22),d=a(9),v=a.n(d),f=a(18),b=a(13),g=a(30),y=a(21),E=a.n(y);var k={init:function(){},log:function(e){}};E.a.interceptors.response.use(null,(function(e){return e.response&&e.response.status>=400&&e.response.status<500||(k.log(e),h.b.error("An unexpected error occurred.")),Promise.reject(e)}));var C={get:E.a.get,post:E.a.post,put:E.a.put,delete:E.a.delete,setJwt:function(e){E.a.defaults.headers.common["x-auth-token"]=e}},S=a(20),O=S.a+"/blogs";function j(e){return S.a+"/posts/".concat(e)}function w(e){return C.get(j(e))}function N(){return C.get(S.a+"/topics")}var x=function(e){var t="fa fa-heart";return e.liked||(t+="-o"),r.a.createElement("i",{onClick:e.onClick,style:{cursor:"pointer"},className:t,"aria-hidden":"true"})},P=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).raiseSort=function(t){var a=Object(b.a)({},e.props.sortColumn);a.path===t?a.order="asc"===a.order?"desc":"asc":(a.path=t,a.order="asc"),e.props.onSort(a)},e.renderSortIcon=function(t){var a=e.props.sortColumn;return t.path!==a.path?null:"asc"===a.order?r.a.createElement("i",{className:"fa fa-sort-asc"}):r.a.createElement("i",{className:"fa fa-sort-desc"})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("thead",null,r.a.createElement("tr",null,this.props.columns.map((function(t){return r.a.createElement("th",{className:"clickable",key:t.path||t.key,onClick:function(){return e.raiseSort(t.path)}},t.label," ",e.renderSortIcon(t))}))))}}]),a}(n.Component),T=a(16),I=a.n(T),A=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).renderCell=function(e,t){return t.content?t.content(e):I.a.get(e,t.path)},e.createKey=function(e,t){return e._id+(t.path||t.key)},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.data,n=t.columns;return r.a.createElement("tbody",null,a.map((function(t){return r.a.createElement("tr",{key:t._id},n.map((function(a){return r.a.createElement("td",{key:e.createKey(t,a)},e.renderCell(t,a))})))})))}}]),a}(n.Component),D=function(e){var t=e.columns,a=e.onSort,n=e.sortColumn,o=e.data;return r.a.createElement("table",{className:"table"},r.a.createElement(P,{columns:t,sortColumn:n,onSort:a}),r.a.createElement(A,{columns:t,data:o}))},_=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).columns=[{path:"title",label:"Title",content:function(e){return r.a.createElement(c.b,{to:"/blogs/".concat(e._id)},e.title)}},{path:"topic.name",label:"Topic"},{path:"publishDate",label:"publishDate"},{key:"like",content:function(t){return r.a.createElement(x,{liked:t.liked,onClick:function(){return e.props.onLike(t)}})}}],e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.blogs,a=e.onSort,n=e.sortColumn;return r.a.createElement(D,{columns:this.columns,data:t,sortColumn:n,onSort:a})}}]),a}(n.Component),R=function(e){var t=e.itemsCount,a=e.pageSize,n=e.currentPage,o=e.onPageChange,l=Math.ceil(t/a);if(1===l)return null;var c=I.a.range(1,l+1);return r.a.createElement("nav",{className:"ul pagination"},c.map((function(e){return r.a.createElement("li",{key:e,className:e===n?"page-item active":"page-item"},r.a.createElement("a",{className:"page-link",onClick:function(){return o(e)}},e))})))},L=function(e){var t=e.items,a=e.textProperty,n=e.valueProperty,o=e.selectedItem,l=e.onItemSelect;return r.a.createElement("ul",{className:"list-group"},t.map((function(e){return r.a.createElement("li",{onClick:function(){return l(e)},key:e[n],className:e===o?"list-group-item active":"list-group-item"},e[a])})))};L.defaultProps={textProperty:"name",valueProperty:"_id"};var z=L;var B=function(e){var t=e.value,a=e.onChange;return r.a.createElement("input",{type:"text",name:"query",className:"form-control my-3",placeholder:"Search...",value:t,onChange:function(e){return a(e.currentTarget.value)}})},M=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={blogs:[],topics:[],currentPage:1,pageSize:4,searchQuery:"",selectedTopic:null,sortColumn:{path:"title",order:"asc"}},e.handleLike=function(t){var a=Object(g.a)(e.state.blogs),n=a.indexOf(t);a[n]=Object(b.a)({},a[n]),a[n].liked=!a[n].liked,e.setState({blogs:a})},e.handlePageChange=function(t){e.setState({currentPage:t})},e.handleTopicSelect=function(t){e.setState({selectedTopic:t,searchQuery:"",currentPage:1})},e.handleSort=function(t){e.setState({sortColumn:t})},e.handleSearch=function(t){e.setState({searchQuery:t,selectedTopic:null,currentPage:1})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(f.a)(v.a.mark((function e(){var t,a,n,r,o;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:return t=e.sent,a=t.data,n=[{_id:"",name:"All Topics"}].concat(Object(g.a)(a)),e.next=7,C.get(O);case 7:r=e.sent,o=r.data,this.setState({blogs:o,topics:n});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getPagedData",value:function(){var e=this.state,t=e.currentPage,a=e.pageSize,n=e.selectedTopic,r=e.searchQuery,o=e.sortColumn,l=e.blogs,c=l;r?c=l.filter((function(e){return e.title.toLowerCase().startsWith(r.toLowerCase())})):n&&n._id&&(c=l.filter((function(e){return e.topic._id===n._id})));var s=function(e,t,a){var n=(t-1)*a;return I()(e).slice(n).take(a).value()}(I.a.orderBy(c,[o.path],[o.order]),t,a);return{totalCount:c.length,data:s}}},{key:"render",value:function(){var e=this.state.blogs.length,t=this.state,a=t.currentPage,n=t.pageSize,o=t.sortColumn,l=t.searchQuery,s=this.props.user;if(0===e)return r.a.createElement("p",null,"There are no blogs in the database.");var i=this.getPagedData(),u=i.totalCount,m=i.data;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-3"},r.a.createElement(z,{items:this.state.topics,selectedItem:this.state.selectedTopic,onItemSelect:this.handleTopicSelect})),r.a.createElement("div",{className:"col"},s&&r.a.createElement(c.b,{to:"/blogs/new",className:"btn btn-primary",style:{marginBottom:20}},"New blogs"),r.a.createElement("p",null,"Showing ",u," blogs in the database."),r.a.createElement(B,{value:l,onChange:this.handleSearch}),r.a.createElement(_,{blogs:m,sortColumn:o,onLike:this.handleLike,onDelete:this.handleDelete,onSort:this.handleSort}),r.a.createElement(R,{itemsCount:u,pageSize:n,currentPage:a,onPageChange:this.handlePageChange})))}}]),a}(n.Component),Q=function(){return r.a.createElement("h1",null,"NotFound")},q=function(e){e.user;return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement(c.b,{className:"navbar-brand",to:"#"},"Terminator"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{class:"nav-item"},r.a.createElement(c.c,{className:"nav-link",to:"/blogs"},"Blogs")),r.a.createElement("li",{class:"nav-item"},r.a.createElement(c.c,{className:"nav-link",to:"/about"},"About")),r.a.createElement("li",{class:"nav-item"},r.a.createElement(c.c,{className:"nav-link",to:"/contact"},"Contact")))))},F=(a(73),a(74),function(){return r.a.createElement("h1",null,"About")}),J=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Contact"),r.a.createElement("iframe",{src:"https://docs.google.com/forms/d/e/1FAIpQLSf7r7MjR5hgbsskfwtQXSrR6-rr6wXlwZJR2zizhivSVynzOg/viewform?embedded=true",width:"640",height:"673",frameborder:"0",marginheight:"0",marginwidth:"0"}))},V=a(15),W=a.n(V),K=a(23),X=a(43),Z=a(44),$=function(e){var t=e.name,a=e.label,n=e.error,o=Object(Z.a)(e,["name","label","error"]);return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("input",Object.assign({},o,{name:t,id:t,className:"form-control"})),n&&r.a.createElement("div",{className:"alert alert-danger"},n))},G=function(e){var t=e.name,a=e.label,n=e.options,o=e.error,l=e.onChange;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("select",{onChange:l,name:t,id:t,className:"custom-select"},r.a.createElement("option",{value:""}),n.map((function(e){return r.a.createElement("option",{key:e._id,value:e._id},e.name)}))),o&&r.a.createElement("div",{className:"alert alert-danger"},o))},H=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={data:{},errors:{}},e.validate=function(){var t=W.a.validate(e.state.data,e.schema,{abortEarly:!1}).error;if(!t)return null;var a,n={},r=Object(X.a)(t.details);try{for(r.s();!(a=r.n()).done;){var o=a.value;n[o.path[0]]=o.message}}catch(l){r.e(l)}finally{r.f()}return n},e.validateProperty=function(t){var a=t.name,n=t.value,r=Object(K.a)({},a,n),o=Object(K.a)({},a,e.schema[a]),l=W.a.validate(r,o).error;return l?l.details[0].message:null},e.handleSubmit=function(t){t.preventDefault();var a=e.validate();e.setState({errors:a||{}}),a||e.doSubmit(e.state.data)},e.handleChange=function(t){var a=t.currentTarget,n=Object(b.a)({},e.state.errors),r=e.validateProperty(a);r?n[a.name]=r:delete n[a.name];var o=Object(b.a)({},e.state.data);o[a.name]=a.value,e.setState({data:o,errors:n})},e}return Object(i.a)(a,[{key:"renderButton",value:function(e){return r.a.createElement("button",{disabled:this.validate(),className:"btn btn-primary"},e)}},{key:"renderInput",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text",n=this.state,o=n.data,l=n.errors;return r.a.createElement($,{type:a,name:e,value:o[e],label:t,error:l[e],onChange:this.handleChange})}},{key:"renderDropdown",value:function(e,t,a){var n=this.state,o=n.data,l=n.errors;return r.a.createElement(G,{options:a,name:e,value:o[e],label:t,error:l[e],onChange:this.handleChange})}}]),a}(n.Component);var U=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).columns=[{path:"value",label:""},{path:"row",label:""},{path:"type",label:""}],e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.blogs,a=e.onSort,n=e.sortColumn;return r.a.createElement("div",{class:"hideme"},r.a.createElement(D,{columns:this.columns,data:t,sortColumn:n,onSort:a}))}}]),a}(n.Component),Y=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={data:{title:"",topicId:"Comedy",numberInStock:"",dailyRentalRate:"",content:[]},topics:[],errors:{},sortColumn:{path:"row",order:"asc"}},e.schema={_id:W.a.string(),title:W.a.string().required().label("Title"),topicId:W.a.string().required().label("Topic"),numberInStock:W.a.number().required().min(0).max(100).label("Number in Stock"),dailyRentalRate:W.a.number().required().min(0).max(19).label("Rate")},e.handleSort=function(t){e.setState({sortColumn:t})},e}return Object(i.a)(a,[{key:"populateTopics",value:function(){var e=Object(f.a)(v.a.mark((function e(){var t,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:t=e.sent,a=t.data,this.setState({topics:a}),console.log("genres "+this.state.topics);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"populateBlog",value:function(){var e=Object(f.a)(v.a.mark((function e(){var t,a,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props.match.params.id){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,e.next=6,w(t);case 6:a=e.sent,n=a.data,this.setState({data:this.mapToViewModel(n)}),e.next=15;break;case 11:if(e.prev=11,e.t0=e.catch(3),!e.t0.response||404!==e.t0.response.status){e.next=15;break}return e.abrupt("return",this.props.history.replace("/not-found"));case 15:case"end":return e.stop()}}),e,this,[[3,11]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(f.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.populateTopics();case 2:return e.next=4,this.populateBlog();case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"mapToViewModel",value:function(e){return this.applyStyle(e.content.text),{_id:e._id,title:e.title,topicId:e.topic.name,numberInStock:e.numberInStock,dailyRentalRate:e.dailyRentalRate,content:e.content.text}}},{key:"styleContent",value:function(e){switch(e.type){case"heading":return r.a.createElement("h3",null,e.value);case"subheading":return r.a.createElement("h4",null,e.value);case"image":return r.a.createElement("figure",{class:"figure"},r.a.createElement("img",{src:(t=e.reference,S.a+"/".concat(t)),class:"center figure-img img-fluid rounded"}),r.a.createElement("figcaption",{class:"center"},e.caption,"."));default:return r.a.createElement("p",null,e.value)}var t}},{key:"applyStyle",value:function(e){var t=this;return e.map((function(e){e.value=t.styleContent(e)}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,this.state.data.title),r.a.createElement("div",null,"Topic: ",this.state.data.topicId),r.a.createElement(U,{blogs:this.state.data.content,sortColumn:this.state.sortColumn,onLike:this.handleLike,onDelete:this.handleDelete,onSort:this.handleSort}))}}]),a}(H),ee=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,null),r.a.createElement(q,{user:this.state.user}),r.a.createElement("main",{className:"container"},r.a.createElement(p.d,null,r.a.createElement(p.b,{path:"/blogs/:id",component:Y}),r.a.createElement(p.b,{path:"/blogs",render:function(e){return r.a.createElement(M,e)}}),r.a.createElement(p.b,{path:"/about",component:F}),r.a.createElement(p.b,{path:"/contact",component:J}),r.a.createElement(p.b,{path:"/not-found",component:Q}),r.a.createElement(p.a,{from:"/",exact:!0,to:"/blogs"}),r.a.createElement(p.a,{to:"/not-found"}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(75),a(76);l.a.render(r.a.createElement(c.a,{basename:"/web-app"},r.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[77,1,2]]]);
//# sourceMappingURL=main.25ac6923.chunk.js.map