(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[38],{266:function(e,t,a){"use strict";a.r(t);var n=a(98),i=a(47),c=a(24),s=a(68),b=a(285),j=a(267),d=a(268),r=a(61),o=a(269),O=a(91),v=a.n(O),h=a(2),l=a(221),u=a(205),x=a(206),m=a(204),f=a(207),p=a(134),w=a(19);function S(e){var t=e.date,a=e.dates,O=e.slider,v=Object(h.useState)("month"),S=Object(i.a)(v,2),k=S[0],D=S[1],g=Object(h.useState)(Object(c.k)(t)),L=Object(i.a)(g,2),z=L[0],C=L[1],y=Object(c.k)(a[0]),J=Object(c.k)(a[a.length-1]),N=function(e){var t=Object(b.a)(z,"month"===k?{months:e}:{years:e}),a="month"===k?Object(j.a)(y):Object(d.a)(y),n="month"===k?Object(r.a)(J):Object(o.a)(J);a<=t&&t<=n&&C(t)},W=Object(p.useSwipeable)({onSwipedRight:N.bind(this,-1),onSwipedLeft:N.bind(this,1)});return Object(w.jsx)("div",Object(n.a)(Object(n.a)({className:"Calendar",onWheel:function(e){0!==e.deltaX&&N(Math.sign(e.deltaX))}},W),{},{children:Object(w.jsx)(l.a,{value:Object(c.k)(t),tileDisabled:function(e){var t=e.date;return"month"===e.view&&!a.includes(Object(s.a)(t,{representation:"date"}))},minDate:y,maxDate:J,activeStartDate:z,view:k,onActiveStartDateChange:function(e){var t=e.activeStartDate;C(t)},onViewChange:function(e){var t=e.view;D(t)},minDetail:"year",showFixedNumberOfWeeks:!0,onChange:function(e){var t=Object(s.a)(e,{representation:"date"});O.moveToSlide(a.indexOf(t))},prevLabel:Object(w.jsx)("div",{children:Object(w.jsx)(u.a,{size:18})}),nextLabel:Object(w.jsx)("div",{children:Object(w.jsx)(x.a,{size:18})}),prev2Label:Object(w.jsx)("div",{children:Object(w.jsx)(m.a,{size:18})}),next2Label:Object(w.jsx)("div",{children:Object(w.jsx)(f.a,{size:18})})})}))}var k=function(e,t){return!!v()(t.date,e.date)&&!!v()(t.dates,e.dates)};t.default=Object(h.memo)(S,k)}}]);
//# sourceMappingURL=38.62e146a4.chunk.js.map