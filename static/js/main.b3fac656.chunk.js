(this["webpackJsonpreact-weather"]=this["webpackJsonpreact-weather"]||[]).push([[0],{45:function(e,t,a){e.exports=a(61)},50:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(6),o=a.n(r),i=(a(50),a(28)),l=a(89),s=a(92),m=a(94),u=a(95),p=a(96),h=a(97),g=a(40),w=a.n(g),d=a(35),f=a.n(d),x="3e24f8ec3ab92f67d68bd5902b5bd088",b="https://api.openweathermap.org/data/2.5/weather?q=",E=Object(l.a)((function(e){return{app:{width:"100vw",display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"center",textAlign:"center",background:"radial-gradient(circle, rgba(27,131,255,1) 0%, rgba(23,134,255,1) 60%, rgba(115,184,255,1) 100%)"},icon:{height:250,width:250,margin:"-25px 0 -50px 0"},text:{color:"white",textShadow:"2px 2px 4px rgba(0, 0, 0, 1)"},time:{color:"white",textShadow:"2px 2px 4px rgba(0, 0, 0, 1)",fontSize:"3rem"},temp:{color:"white",textShadow:"2px 2px 4px rgba(0, 0, 0, 1)",fontSize:"6rem",marginRight:"-1.5rem"},search:{color:"white"},paper:{marginTop:"auto",backgroundColor:"rgba(255, 255, 255, 0.5)"}}}));var v=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)({}),l=Object(i.a)(o,2),g=l[0],d=l[1],v=E(),D=function(){fetch("".concat(b).concat(a,"&units=metric&lang=ru&appid=").concat(x)).then((function(e){return e.json()})).then((function(e){d(e),r(""),console.log(e)})).catch((function(e){console.log(e)}))},y=["\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435","\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a","\u0412\u0442\u043e\u0440\u043d\u0438\u043a","\u0421\u0440\u0435\u0434\u0430","\u0427\u0435\u0442\u0432\u0435\u0440\u0433","\u041f\u044f\u0442\u043d\u0438\u0446\u0430","\u0421\u0443\u0431\u0431\u043e\u0442\u0430"][(new Date).getDay()],N=(new Date).getDate(),k=["\u042f\u043d\u0432\u0430\u0440\u044f","\u0424\u0435\u0432\u0440\u0430\u043b\u044f","\u041c\u0430\u0440\u0442\u0430","\u0410\u043f\u0440\u0435\u043b\u044f","\u041c\u0430\u044f","\u0418\u044e\u043d\u044f","\u0418\u044e\u043b\u044f","\u0410\u0432\u0433\u0443\u0441\u0442\u0430","\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044f","\u041e\u043a\u0442\u044f\u0431\u0440\u044f","\u041d\u043e\u044f\u0431\u0440\u044f","\u0414\u0435\u043a\u0430\u0431\u0440\u044f"][(new Date).getMonth()],S="".concat((new Date).getHours(),":").concat((new Date).getMinutes()<10?"0"+(new Date).getMinutes():(new Date).getMinutes());return c.a.createElement(f.a,{className:v.app},c.a.createElement(s.a,{className:v.text},"".concat(y,", ").concat(N," ").concat(k)),c.a.createElement(s.a,{className:v.time},S),"undefined"!=typeof g.main?c.a.createElement("div",null,c.a.createElement(s.a,{className:v.text},g.name),c.a.createElement(s.a,{className:v.text},g.weather[0].description.charAt(0).toUpperCase()+g.weather[0].description.slice(1)),c.a.createElement(m.a,{image:"http://openweathermap.org/img/wn/".concat(g.weather[0].icon,"@4x.png"),className:v.icon}),c.a.createElement(s.a,{className:v.temp},Math.round(g.main.temp),"\xb0")):c.a.createElement("div",null),c.a.createElement(u.a,{className:v.paper,elevation:3,variant:"outlined"},c.a.createElement(p.a,{variant:"filled",autoFocus:!0,className:v.search,onChange:function(e){return r(e.target.value)},value:a,onKeyPress:function(e){return"Enter"===e.key&&D()}}),c.a.createElement(h.a,{type:"submit",onClick:D},c.a.createElement(w.a,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.b3fac656.chunk.js.map