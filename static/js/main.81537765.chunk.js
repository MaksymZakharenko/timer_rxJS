(this.webpackJsonptimer=this.webpackJsonptimer||[]).push([[0],{21:function(t,e,c){},23:function(t,e,c){"use strict";c.r(e);var n=c(4),a=c(16),s=c.n(a),o=(c(21),c(15)),r=c(31),i=c(12),u=c(26),b=c(30),j=c(27),l=c(28),O=c(29),h=function(t){var e=t%60,c=Math.floor(t/60),n=Math.floor(t/3600),a=n<1||n>23?"00":n>=1&&n<=9?"0".concat(n):"".concat(n),s=c<10?0===c?"00":"0".concat(c):"".concat(c),o=e<10?"0".concat(e):"".concat(e);return"".concat(a,":").concat(s,":").concat(o)},p=c(2),f=function(t){var e=t.time,c=t.start,n=t.stop,a=t.reset,s=t.wait;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("header",{className:"header",children:[Object(p.jsx)("h1",{className:"stopwatch headline",children:"StopWatch"}),Object(p.jsx)("h1",{className:"stopwatch indicator",children:h(e)})]}),Object(p.jsx)("section",{className:"main",children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("button",{type:"button",className:"button is-dark",onClick:c,children:"Start"}),Object(p.jsx)("button",{type:"button",className:"button is-dark",onClick:n,children:"Stop"}),Object(p.jsx)("button",{type:"button",className:"button is-dark",onClick:a,children:"Reset"}),Object(p.jsx)("button",{type:"button",className:"button is-dark",onClick:s,children:"Wait"})]})})]})},d=function(){var t=Object(n.useState)("stop"),e=Object(o.a)(t,2),c=e[0],a=e[1],s=Object(n.useState)(0),h=Object(o.a)(s,2),d=h[0],m=h[1],x=Object(n.useMemo)((function(){return new r.a}),[]),k=Object(n.useMemo)((function(){return new r.a}),[]),w=Object(n.useCallback)((function(){m(0),a("stop")}),[]),N=Object(n.useCallback)((function(){m(0)}),[]),v=Object(n.useCallback)((function(){k.next(),a("wait"),k.next()}),[]);return Object(n.useEffect)((function(){var t=k.pipe(Object(u.a)(k.pipe(Object(b.a)(300))),Object(j.a)((function(t){return t.length})),Object(l.a)((function(t){return t>=2}))),e=new i.a((function(t){var e=0,c=setInterval((function(){t.next(e+=1),console.log(e)}),1e3);return function(){clearInterval(c)}})).pipe(Object(O.a)(t)).pipe(Object(O.a)(x)).subscribe({next:function(){"start"===c&&m((function(t){return t+1}))}});return function(){e.unsubscribe()}}),[c]),Object(p.jsx)("section",{className:"stopwatch",children:Object(p.jsx)(f,{time:d,start:function(){a("start")},stop:w,reset:N,wait:v})})};s.a.render(Object(p.jsx)(d,{}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.81537765.chunk.js.map