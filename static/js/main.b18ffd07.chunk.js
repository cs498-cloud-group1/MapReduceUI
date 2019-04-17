(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(e,t,a){},200:function(e,t,a){},209:function(e,t,a){},210:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(76),c=a.n(r),o=(a(87),a(8)),u=a(9),i=a(12),s=a(10),m=a(13),d=a(11),h=a(14),b=function(e){return l.a.createElement("div",null,l.a.createElement("h3",null,"Welcome to MapReduce with AWS Lambda! "),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(d.b,{to:"/create"}," Create a Map Reduce Job ")),l.a.createElement("div",null,l.a.createElement(d.b,{to:"/results"}," View Results "))))},f=a(30),p=a.n(f),E=a(3),v=a.n(E),j="https://npbtinvj6l.execute-api.us-east-1.amazonaws.com/dev/jobs";a(32),a(115);var g=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={job:void 0},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),function(e){var t=j;return p.a.get(t).then(function(t){var a=t.data;return v()(a)?a.find(function(t){return t.jobId===e}):a})}(this.props.match.params.resultId).then(function(t){return e.setState({job:t})}).finally(function(){return e.setState({loading:!1})})}},{key:"render",value:function(){var e=this.state.job;return this.state.loading?l.a.createElement("div",{className:"loader"}):l.a.createElement("div",{className:"result"},l.a.createElement("pre",null,JSON.stringify(e,null,2)))}}]),t}(n.Component),O=a(79),y=a.n(O),w=(a(200),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={jobs:[]},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),p.a.get(j).then(function(e){return e.data}).then(function(t){return e.setState({jobs:t})}).finally(function(){return e.setState({loading:!1})})}},{key:"render",value:function(){var e=y()(this.state.jobs,"createdAt","desc");return this.state.loading?l.a.createElement("div",{className:"loader"}):l.a.createElement("div",{className:"list-results"},l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Job Name"),l.a.createElement("th",null,"Created Date"))),l.a.createElement("tbody",null,e.map(function(e){return l.a.createElement("tr",{key:e.jobId},l.a.createElement("td",null,l.a.createElement(d.b,{to:"/results/"+e.jobId},e.jobName||"missing")),l.a.createElement("td",null,new Date(e.createdAt).toLocaleString()))}))))}}]),t}(n.Component)),N=a(29),S=a(80),C=a(81),k=a.n(C),I=(a(43),a(201),a(203),a(45)),J=a.n(I),A=(a(209),"function map(key, value) {\n\n}"),x="function reduce(key, values) {\n\n}",M={theme:"chrome",mode:"javascript",height:"150px",highlightActiveLine:!0,setOptions:{showLineNumbers:!0,tabSize:2},editorProps:{$blockScrolling:!0}},R=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={form:{jobName:"",url:"",map:A,reduce:x},loading:!1},a.handleChange=function(e){return function(t){var n=t.target?t.target.value:t;a.setState({form:Object(S.a)({},a.state.form,Object(N.a)({},e,n))})}},a.submit=function(){var e;Object.values(a.state.form).some(k.a)?alert("You must fill out all fields"):(a.setState({loading:!0}),(e=a.state.form,p.a.post(j,e).then(function(e){return e.data})).then(function(e){var t=e.jobId||e.Item&&e.Item.jobId;a.props.history.push("/results/"+t)}).catch(function(e){alert("There was an error submitting your job. Error message: \n"+e),a.setState({loading:!1})}))},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return this.state.loading?l.a.createElement("div",{className:"loader"}):l.a.createElement("div",{className:"create-job"},l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Field"),l.a.createElement("th",null,"Input"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Job Name"),l.a.createElement("td",null,l.a.createElement("input",{type:"text",value:this.state.form.jobName,onChange:this.handleChange("jobName")}))),l.a.createElement("tr",null,l.a.createElement("td",null,"Data URL"),l.a.createElement("td",null,l.a.createElement("input",{type:"url",value:this.state.form.url,onChange:this.handleChange("url")}))),l.a.createElement("tr",null,l.a.createElement("td",null,"Map Function",l.a.createElement("div",{className:"info"},"Please use JavaScript")),l.a.createElement("td",null,l.a.createElement(J.a,Object.assign({name:"map-function",onChange:this.handleChange("map"),value:this.state.form.map},M)))),l.a.createElement("tr",null,l.a.createElement("td",null,"Reduce Function",l.a.createElement("div",{className:"info"},"Please use JavaScript")),l.a.createElement("td",null,l.a.createElement(J.a,Object.assign({name:"reduce-function",onChange:this.handleChange("reduce"),value:this.state.form.reduce},M)))),l.a.createElement("tr",null,l.a.createElement("td",null),l.a.createElement("td",null,l.a.createElement("button",{className:"submit",onClick:this.submit},"Submit"))))))}}]),t}(n.Component),D=Object(h.d)(R),L=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement(d.a,{basename:"/MapReduceUI"},l.a.createElement(h.a,{path:"/",exact:!0,component:b}),l.a.createElement(h.a,{path:"/results/",exact:!0,component:w}),l.a.createElement(h.a,{path:"/results/:resultId",component:g}),l.a.createElement(h.a,{path:"/create/",component:D}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},32:function(e,t,a){},82:function(e,t,a){e.exports=a(210)}},[[82,1,2]]]);
//# sourceMappingURL=main.b18ffd07.chunk.js.map