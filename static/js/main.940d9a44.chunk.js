(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,o,n){},16:function(e,o,n){},18:function(e,o,n){"use strict";n.r(o);var i=n(0),c=n.n(i),a=n(2),t=n.n(a),r=(n(14),n(3)),l=n(4),d=n(6),s=n(5),u=n(7);n(16);var f=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("header",null,c.a.createElement("div",{className:"title"},"50 Shades of Grey"),c.a.createElement("div",{className:"message"},e.message),c.a.createElement("div",{className:"score"},"Score ",e.score," of ",e.total)),c.a.createElement("br",null))};var m=function(e){return c.a.createElement("div",{className:"grid-container"},c.a.createElement("div",{id:"board"},e.images.map(function(o){return c.a.createElement("div",{style:{backgroundColor:o.color},className:"image grid-item",id:"image-"+o,key:o.index,onClick:function(){e.clickHandler(o.index)}})})))},x=[{color:"#272727",index:1},{color:"#292929",index:2},{color:"#2c2c2c",index:3},{color:"#313131",index:4},{color:"#343434",index:5},{color:"#373737",index:6},{color:"#3a3a3a",index:7},{color:"#3f3f3f",index:8},{color:"#424242",index:9},{color:"#454545",index:10},{color:"#484848",index:11},{color:"#4b4b4b",index:12},{color:"#4e4e4e",index:13},{color:"#515151",index:14},{color:"#565656",index:15},{color:"#585858",index:16},{color:"#5b5b5b",index:17},{color:"#5e5e5e",index:18},{color:"#626262",index:19},{color:"#656565",index:20},{color:"#6a6a6a",index:21},{color:"#6c6c6c",index:22},{color:"#6f6f6f",index:23},{color:"#737373",index:24},{color:"#767676",index:25},{color:"#7b7b7b",index:26},{color:"#7d7d7d",index:27},{color:"#808080",index:28},{color:"#818181",index:29},{color:"#838383",index:30},{color:"#868686",index:31},{color:"#878787",index:32},{color:"#898989",index:33},{color:"#8b8b8b",index:34},{color:"#8d8d8d",index:35},{color:"#919191",index:36},{color:"#939393",index:37},{color:"#959595",index:38},{color:"#979797",index:39},{color:"#999999",index:40},{color:"#9b9b9b",index:41},{color:"#9d9d9d",index:42},{color:"#9f9f9f",index:43},{color:"#a0a0a0",index:44},{color:"#a2a2a2",index:45},{color:"#a5a5a5",index:46},{color:"#a7a7a7",index:47},{color:"#a9a9a9",index:48},{color:"#ababab",index:49},{color:"#aeaeae",index:50}],g=function(e){function o(){var e,n;Object(r.a)(this,o);for(var i=arguments.length,c=new Array(i),a=0;a<i;a++)c[a]=arguments[a];return(n=Object(d.a)(this,(e=Object(s.a)(o)).call.apply(e,[this].concat(c)))).state={message:"Click all 50 shades of grey without clicking one twice",score:0,images:x,clicked:[],highScore:0},n.setGame=function(){},n.handleImageClickById=function(e){var o=n.state.clicked.slice(0);console.log("Checking",o,e),-1===o.findIndex(function(o){return e===o})?(o.push(e),n.setState({clicked:o,score:n.state.score+1,message:"You're dominating! Keep Clicking."})):50===n.state.score?n.setState({message:"Winner Winner, Chicken Dinner."}):n.setState({message:"You got beat into submission :(",score:0,clicked:[]});var i=n.state.images.slice(0);i.sort(function(){return Math.random()-.5}),n.setState({images:i}),console.log("handling click for ",e)},n}return Object(u.a)(o,e),Object(l.a)(o,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(f,{message:this.state.message,score:this.state.score,total:this.state.images.length}),c.a.createElement(m,{images:this.state.images,clickHandler:this.handleImageClickById}))}}]),o}(i.Component),h=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var o=e.installing;o.onstatechange=function(){"installed"===o.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}t.a.render(c.a.createElement(g,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/50-Shades-of-Grey-Click-Game",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/50-Shades-of-Grey-Click-Game","/service-worker.js");h?function(e){fetch(e).then(function(o){404===o.status||-1===o.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):b(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):b(e)})}}()},8:function(e,o,n){e.exports=n(18)}},[[8,2,1]]]);
//# sourceMappingURL=main.940d9a44.chunk.js.map