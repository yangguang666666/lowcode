(function(e){function t(t){for(var r,c,a=t[0],l=t[1],i=t[2],f=0,d=[];f<a.length;f++)c=a[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);s&&s(t);while(d.length)d.shift()();return u.push.apply(u,i||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var l=n[a];0!==o[l]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},u=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var i=0;i<a.length;i++)t(a[i]);var s=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},5033:function(e){e.exports=JSON.parse('{"container":{"width":550,"height":550},"blocks":[{"top":100,"left":100,"zIndex":1,"key":"text"},{"top":200,"left":200,"zIndex":1,"key":"button"},{"top":300,"left":300,"zIndex":1,"key":"input"}]}')},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o={class:"app"};function u(e,t,n,u,c,a){var l=Object(r["N"])("Editor");return Object(r["G"])(),Object(r["m"])("div",o,[Object(r["p"])(l,{modelValue:u.state,"onUpdate:modelValue":t[0]||(t[0]=function(e){return u.state=e})},null,8,["modelValue"])])}var c=n("5033"),a=(n("d81d"),n("a818"),Object(r["q"])({props:{block:{type:Object}},setup:function(e){var t=Object(r["i"])((function(){return{top:"".concat(e.block.top,"px"),left:"".concat(e.block.left,"px"),zIndex:"".concat(e.block.zIndex)}})),n=Object(r["t"])("config"),o=Object(r["J"])(null);return Object(r["D"])((function(){var t=o.value,n=t.offsetWidth,r=t.offsetHeight;e.block.alignCenter&&(e.block.left=e.block.left-n/2,e.block.top=e.block.top-r/2,e.block.alignCenter=!1),e.block.width=n,e.block.height=r})),function(){var u=n.componentMap[e.block.key],c=u.render();return Object(r["p"])("div",{class:"editor-block",style:t.value,ref:o},[c])}}})),l=n("4979"),i=n.n(l),s=n("2909"),f=n("5530"),d=(n("99af"),n("1344")),p=Object(d["a"])();function v(e,t){var n=null,r=function(e){e.dataTransfer.dropEffect="move"},o=function(e){e.preventDefault()},u=function(e){e.dataTransfer.dropEffect="none"},c=function(e){var r=t.value.blocks;t.value=Object(f["a"])(Object(f["a"])({},t.value),{},{blocks:[].concat(Object(s["a"])(r),[{top:e.offsetY,left:e.offsetX,zIndex:1,key:n.key,alignCenter:!0}])}),n=null},a=function(t,a){e.value.addEventListener("dragenter",r),e.value.addEventListener("dragover",o),e.value.addEventListener("dragleave",u),e.value.addEventListener("drop",c),n=a,p.emit("start")},l=function(t){e.value.removeEventListener("dragenter",r),e.value.removeEventListener("dragover",o),e.value.removeEventListener("dragleave",u),e.value.removeEventListener("drop",c),p.emit("end")};return{dragstart:a,dragend:l}}n("159b");function b(e,t){var n=Object(r["J"])(-1),o=Object(r["i"])((function(){return e.value.blocks[n.value]})),u=Object(r["i"])((function(){var t=[],n=[];return e.value.blocks.forEach((function(e){return(e.focus?t:n).push(e)})),{focus:t,unfocused:n}})),c=function(){e.value.blocks.forEach((function(e){return e.focus=!1}))},a=function(){c(),n.value=-1},l=function(e,r,o){e.preventDefault(),e.stopPropagation(),e.shiftKey?u.value.focus.length<=1?r.focus=!0:r.focus=!r.focus:r.focus||(c(),r.focus=!0),n.value=o,t(e)};return{blockMousedown:l,containerMousedown:a,focusData:u,lastSelectBlock:o}}function h(e,t,n){var o={startX:0,startY:0,dragging:!1},u=Object(r["I"])({x:null,y:null}),c=function(r){var u=t.value,c=u.width,i=u.height;o={startX:r.clientX,startY:r.clientY,startLeft:t.value.left,startTop:t.value.top,dragging:!1,startPos:e.value.focus.map((function(e){var t=e.top,n=e.left;return{top:t,left:n}})),lines:function(){var t=e.value.unfocused,r={x:[],y:[]};return[].concat(Object(s["a"])(t),[{top:0,left:0,width:n.value.container.width,height:n.value.container.height}]).forEach((function(e){var t=e.top,n=e.left,o=e.width,u=e.height;r.y.push({showTop:t,top:t}),r.y.push({showTop:t,top:t-i}),r.y.push({showTop:t+u/2,top:t+u/2-i/2}),r.y.push({showTop:t+u,top:t+u}),r.y.push({showTop:t+u,top:t+u-i}),r.x.push({showLeft:n,left:n}),r.x.push({showLeft:n+o,left:n+o}),r.x.push({showLeft:n+o/2,left:n+o/2-c/2}),r.x.push({showLeft:n+o,left:n+o-c}),r.x.push({showLeft:n,left:n-c})})),r}()},document.addEventListener("mousemove",a),document.addEventListener("mouseup",l)},a=function(t){var n=t.clientX,r=t.clientY;o.dragging||(o.dragging=!0,p.emit("start"));for(var c=n-o.startX+o.startLeft,a=r-o.startY+o.startTop,l=null,i=null,s=0;s<o.lines.y.length;s++){var f=o.lines.y[s],d=f.top,v=f.showTop;if(Math.abs(d-a)<5){l=v,r=o.startY-o.startTop+d;break}}for(var b=0;b<o.lines.x.length;b++){var h=o.lines.x[b],m=h.left,g=h.showLeft;if(Math.abs(m-c)<5){i=g,n=o.startX-o.startLeft+m;break}}u.x=i,u.y=l;var y=n-o.startX,O=r-o.startY;e.value.focus.forEach((function(e,t){e.top=o.startPos[t].top+O,e.left=o.startPos[t].left+y}))},l=function e(t){document.removeEventListener("mousemove",a),document.removeEventListener("mouseup",e),u.x=null,u.y=null,o.dragging&&p.emit("end")};return{mousedown:c,markLine:u}}n("b0c0"),n("fb6a"),n("a15b");function m(e){var t={current:-1,queue:[],commands:{},commandArray:[],destroyArray:[]},n=function(e){t.commandArray.push(e),t.commands[e.name]=function(){var n=e.execute(),r=n.redo,o=n.undo;if(r(),e.pushQueue){var u=t.queue,c=t.current;u.length>0&&(u=u.slice(0,c+1),t.queue=u),u.push({redo:r,undo:o}),t.current=c+1,console.log(u)}}};n({name:"redo",keyboard:"ctrl+y",execute:function(){return{redo:function(){var e=t.queue[t.current+1];e&&(e.redo&&e.redo(),t.current++)}}}}),n({name:"undo",keyboard:"ctrl+z",execute:function(){return{redo:function(){if(-1!=t.current){var e=t.queue[t.current];e&&(e.undo&&e.undo(),t.current--)}}}}}),n({name:"drag",pushQueue:!0,init:function(){var n=this;this.before=null;var r=function(){n.before=i()(e.value.blocks)},o=function(){t.commands.drag()};return p.on("start",r),p.on("end",o),function(){p.off("start",r),p.off("end",o)}},execute:function(){var t=this.before,n=e.value.blocks;return{redo:function(){e.value=Object(f["a"])(Object(f["a"])({},e.value),{},{blocks:n})},undo:function(){e.value=Object(f["a"])(Object(f["a"])({},e.value),{},{blocks:t})}}}});var o=function(){var e={90:"z",89:"y"},n=function(n){var r=n.ctrlKey,o=n.keyCode,u=[];r&&u.push("ctrl"),u.push(e[o]),u=u.join("+"),t.commandArray.forEach((function(e){var r=e.keyboard,o=e.name;r&&r===u&&(t.commands[o](),n.preventDefault())}))},r=function(){return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}};return r}();return function(){t.destroyArray.push(o()),t.commandArray.forEach((function(e){return e.init&&t.destroyArray.push(e.init())}))}(),Object(r["E"])((function(){t.destroyArray.forEach((function(e){return e&&e()}))})),t}var g=Object(r["q"])({props:{modelValue:{type:Object}},emits:["update:modelValue"],setup:function(e,t){var n=Object(r["i"])({get:function(){return e.modelValue},set:function(e){t.emit("update:modelValue",i()(e))}}),o=Object(r["i"])((function(){return{width:n.value.container.width+"px",height:n.value.container.height+"px"}})),u=Object(r["t"])("config"),c=Object(r["J"])(null),l=v(c,n),s=l.dragstart,f=l.dragend,d=b(n,(function(e){k(e)})),p=d.blockMousedown,g=d.focusData,y=d.containerMousedown,O=d.lastSelectBlock,j=h(g,O,n),k=j.mousedown,w=j.markLine,x=m(n),L=x.commands,E=[{label:"撤销",icon:"icon-back",handler:function(){return L.undo()}},{label:"重做",icon:"icon-forward",handler:function(){return L.redo()}}];return function(){return Object(r["p"])("div",{class:"editor"},[Object(r["p"])("div",{class:"editor-left"},[u.componentList.map((function(e){return Object(r["p"])("div",{class:"editor-left-item",draggable:!0,onDragstart:function(t){return s(t,e)},onDragend:f},[Object(r["p"])("span",null,[e.label]),Object(r["p"])("div",null,[e.preview()])])}))]),Object(r["p"])("div",{class:"editor-top"},[E.map((function(e,t){return Object(r["p"])("div",{class:"editor-top-button",onClick:e.handler},[Object(r["p"])("i",{class:e.icon},null),Object(r["p"])("span",null,[e.label])])}))]),Object(r["p"])("div",{class:"editor-right"},[Object(r["o"])("属性控制栏目")]),Object(r["p"])("div",{class:"editor-container"},[Object(r["p"])("div",{class:"editor-container-canvas"},[Object(r["p"])("div",{class:"editor-container-canvas__content",style:o.value,ref:c,onMousedown:y},[n.value.blocks.map((function(e,t){return Object(r["p"])(a,{class:e.focus?"editor-block-focus":"",block:e,onMousedown:function(n){return p(n,e,t)}},null)})),null!==w.x&&Object(r["p"])("div",{class:"line-x",style:{left:w.x+"px"}},null),null!==w.y&&Object(r["p"])("div",{class:"line-y",style:{top:w.y+"px"}},null)])])])])}}}),y=n("7864");function O(){var e=[],t={};return{componentList:e,componentMap:t,register:function(n){e.push(n),t[n.key]=n}}}var j=O();j.register({label:"文本",preview:function(){return"预览文本"},render:function(){return"渲染文本"},key:"text"}),j.register({label:"按钮",preview:function(){return Object(r["p"])(y["a"],null,{default:function(){return[Object(r["o"])("预览按钮")]}})},render:function(){return Object(r["p"])(y["a"],null,{default:function(){return[Object(r["o"])("渲染按钮")]}})},key:"button"}),j.register({label:"输入框",preview:function(){return Object(r["p"])(y["b"],{placeholder:"预览输入框"},null)},render:function(){return Object(r["p"])(y["b"],{placeholder:"渲染输入框"},null)},key:"input"});var k={components:{Editor:g},setup:function(){var e=Object(r["J"])(c);return Object(r["H"])("config",j),{state:e}}};n("7e7e");k.render=u;var w=k;n("7dd6");Object(r["j"])(w).mount("#app")},"7e7e":function(e,t,n){"use strict";n("c2ab")},a818:function(e,t,n){},c2ab:function(e,t,n){}});
//# sourceMappingURL=app.e2fa419d.js.map