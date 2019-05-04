(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{120:function(e,t,a){},205:function(e,t,a){},209:function(e,t,a){},210:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(76),c=a.n(r),o=(a(87),a(8)),s=a(9),i=a(12),u=a(10),m=a(13),d=a(11),h=a(14),b=function(e){return l.a.createElement("div",null,l.a.createElement("h3",null,"Welcome to MapReduce with AWS Lambda! "),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(d.b,{to:"/create"}," Create a Map Reduce Job ")),l.a.createElement("div",null,l.a.createElement(d.b,{to:"/results"}," View Results "))))},E=a(18),v=a.n(E),f=a(31),p=a.n(f),j=a(3),g=a.n(j),N="https://npbtinvj6l.execute-api.us-east-1.amazonaws.com/dev/jobs";a(35),a(120);var O={theme:"chrome",mode:"javascript",height:"150px",highlightActiveLine:!0,setOptions:{showLineNumbers:!0,tabSize:2},editorProps:{$blockScrolling:!0}},y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={job:void 0},a.refresh=function(){a.setState({loading:!0}),function(e){var t=N+"/"+e;return p.a.get(t).then(function(t){var a=t.data;return g()(a)?a.find(function(t){return t.jobId===e}):a})}(a.props.match.params.resultId).then(function(e){return a.setState({job:e})}).finally(function(){return a.setState({loading:!1})})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.refresh()}},{key:"render",value:function(){var e=this.state.job||{};if(this.state.loading)return l.a.createElement("div",{className:"loader"});var t=e.createdAt,a=e.updatedAt,n=e.status,r=e.jobId,c=e.map,o=e.reduce,s=e.bucket,i=e.fileName,u=e.jobName;return l.a.createElement("div",{className:"result__root"},l.a.createElement("div",{className:"body"},l.a.createElement("div",{className:"header"},l.a.createElement("div",null,l.a.createElement("div",{className:"jobName"},u),l.a.createElement("div",{className:"subHeader"},l.a.createElement("div",{className:"label"},"Created On:"),l.a.createElement("div",{className:"value"},new Date(t).toLocaleString()),l.a.createElement("div",{className:"label"},"Last Update:"),l.a.createElement("div",{className:"value"},new Date(a).toLocaleString())),l.a.createElement("div",null,"Bucket: ",s,", File: ",i,", job Id: ",r)),l.a.createElement("div",{className:"status"},l.a.createElement("div",null,l.a.createElement("div",null,"Status:",l.a.createElement("span",{className:"value"},n?n.toUpperCase():"")))),l.a.createElement("div",{className:"refresh"},"done"===n?l.a.createElement("a",{href:"https://npbtinvj6l.execute-api.us-east-1.amazonaws.com/dev/results/"+r}," ","Results"," "):l.a.createElement("button",{onClick:this.refresh}," Refresh "))),l.a.createElement("div",{className:"function"},l.a.createElement("div",{className:"function_name"},"Map:"),l.a.createElement(v.a,Object.assign({name:"map-function",readOnly:!0,value:c},O))),l.a.createElement("div",{className:"function"},l.a.createElement("div",{className:"function_name"},"Reduce:"),l.a.createElement(v.a,Object.assign({name:"reduce-function",readOnly:!0,value:o},O)))))}}]),t}(n.Component),w=a(79),k=a.n(w),C=(a(205),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={jobs:[]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),p.a.get(N).then(function(e){return e.data}).then(function(t){return e.setState({jobs:t})}).finally(function(){return e.setState({loading:!1})})}},{key:"render",value:function(){var e=k()(this.state.jobs,"createdAt","desc");return this.state.loading?l.a.createElement("div",{className:"loader"}):l.a.createElement("div",{className:"list-results"},l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Job Name"),l.a.createElement("th",null,"Created Date"))),l.a.createElement("tbody",null,e.map(function(e){return l.a.createElement("tr",{key:e.jobId},l.a.createElement("td",null,l.a.createElement(d.b,{to:"/results/"+e.jobId},e.jobName||"missing")),l.a.createElement("td",null,new Date(e.createdAt).toLocaleString()))}))))}}]),t}(n.Component)),S=a(30),I=a(80),x=a(81),A=a.n(x),L=(a(33),a(206),a(208),a(209),"function map(line, emit) {\n\n}"),R="function reduce(key, values, emit) {\n\n}",J={theme:"chrome",mode:"javascript",height:"150px",highlightActiveLine:!0,setOptions:{showLineNumbers:!0,tabSize:2},editorProps:{$blockScrolling:!0}},M=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={form:{jobName:"",bucket:"",fileName:"",map:L,reduce:R},loading:!1},a.handleChange=function(e){return function(t){var n=t.target?t.target.value:t;a.setState({form:Object(I.a)({},a.state.form,Object(S.a)({},e,n))})}},a.submit=function(){var e;Object.values(a.state.form).some(A.a)?alert("You must fill out all fields"):(a.setState({loading:!0}),(e=a.state.form,p.a.post(N,e).then(function(e){return e.data})).then(function(e){var t=e.jobId||e.Item&&e.Item.jobId;a.props.history.push("/results/"+t)}).catch(function(e){alert("There was an error submitting your job. Error message: \n"+e),a.setState({loading:!1})}))},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.state.loading?l.a.createElement("div",{className:"loader"}):l.a.createElement("div",{className:"create-job"},l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Field"),l.a.createElement("th",null,"Input"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Job Name"),l.a.createElement("td",null,l.a.createElement("input",{type:"text",value:this.state.form.jobName,onChange:this.handleChange("jobName")}))),l.a.createElement("tr",null,l.a.createElement("td",null,"Bucket Name"),l.a.createElement("td",null,l.a.createElement("input",{type:"text",value:this.state.form.url,onChange:this.handleChange("bucket")}))),l.a.createElement("tr",null,l.a.createElement("td",null,"File Name"),l.a.createElement("td",null,l.a.createElement("input",{type:"text",value:this.state.form.url,onChange:this.handleChange("fileName")}))),l.a.createElement("tr",null,l.a.createElement("td",null,"Map Function",l.a.createElement("div",{className:"info"},"Please use JavaScript")),l.a.createElement("td",null,l.a.createElement(v.a,Object.assign({name:"map-function",onChange:this.handleChange("map"),value:this.state.form.map},J)))),l.a.createElement("tr",null,l.a.createElement("td",null,"Reduce Function",l.a.createElement("div",{className:"info"},"Please use JavaScript")),l.a.createElement("td",null,l.a.createElement(v.a,Object.assign({name:"reduce-function",onChange:this.handleChange("reduce"),value:this.state.form.reduce},J)))),l.a.createElement("tr",null,l.a.createElement("td",null),l.a.createElement("td",null,l.a.createElement("button",{className:"submit",onClick:this.submit},"Submit"))))))}}]),t}(n.Component),D=Object(h.d)(M),F=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(d.a,{basename:"/MapReduceUI"},l.a.createElement(h.a,{path:"/",exact:!0,component:b}),l.a.createElement(h.a,{path:"/results/",exact:!0,component:C}),l.a.createElement(h.a,{path:"/results/:resultId",component:y}),l.a.createElement(h.a,{path:"/create/",component:D}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},35:function(e,t,a){},82:function(e,t,a){e.exports=a(210)}},[[82,1,2]]]);
//# sourceMappingURL=main.3e6f6e67.chunk.js.map