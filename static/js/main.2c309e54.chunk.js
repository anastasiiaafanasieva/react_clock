(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),o=n.n(c),a=n(2),s=n(3),i=n(5),r=n(4),l=n(1),h=n.n(l),d=(n(12),n(0)),u=function(t){Object(i.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),s=0;s<c;s++)o[s]=arguments[s];return(t=e.call.apply(e,[this].concat(o))).timerId=void 0,t.state={date:new Date},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=setInterval((function(){t.setState({date:new Date}),console.log(t.state.date.toLocaleTimeString())}),1e3)}},{key:"componentDidUpdate",value:function(t){t.name!==this.props.name&&console.log("The Clock was renamed from ".concat(t.name," to ").concat(this.props.name))}},{key:"componentWillUnmount",value:function(){this.timerId&&clearInterval(this.timerId)}},{key:"render",value:function(){var t=this.state.date;return Object(d.jsx)(d.Fragment,{children:t.toLocaleTimeString()})}}]),n}(h.a.Component),m=function(t){Object(i.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),s=0;s<c;s++)o[s]=arguments[s];return(t=e.call.apply(e,[this].concat(o))).words=["Rock","Paper","Scissors","Cat","People","Dog","Summer"],t.number=Math.floor(Math.random()*t.words.length),t.state={isClockVisible:!0,clockName:t.words[Math.floor(Math.random()*t.words.length)]},t.showButton=function(){t.setState({isClockVisible:!0})},t.hideButton=function(){t.setState({isClockVisible:!1})},t.changeName=function(){t.setState({clockName:t.words[Math.floor(Math.random()*t.words.length)]})},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state,e=t.isClockVisible,n=t.clockName;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"React clock"}),Object(d.jsxs)("div",{className:"buttonsList",children:[Object(d.jsx)("div",{className:"button",children:Object(d.jsx)("button",{type:"button",onClick:this.showButton,children:"Show Clock"})}),Object(d.jsx)("div",{className:"button",children:Object(d.jsx)("button",{type:"button",onClick:this.hideButton,children:"Hide Clock"})}),Object(d.jsx)("div",{className:"button",children:Object(d.jsx)("button",{type:"button",onClick:this.changeName,children:n})})]}),e?Object(d.jsxs)("div",{className:"time",children:["Current time:"," ",Object(d.jsx)(u,{name:this.state.clockName})]}):Object(d.jsx)("div",{className:"time",children:Object(d.jsx)("p",{children:"Clock is hidden"})})]})}}]),n}(h.a.Component);o.a.render(Object(d.jsx)(m,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.2c309e54.chunk.js.map