(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{247:function(n,t,e){"use strict";var r=e(2),o=e(75).find,c=e(129),f="find",d=!0;f in[]&&Array(1).find((function(){d=!1})),r({target:"Array",proto:!0,forced:d},{find:function(n){return o(this,n,arguments.length>1?arguments[1]:void 0)}}),c(f)},252:function(n,t,e){"use strict";e.r(t);var r=e(10),o=(e(58),e(18),e(247),{asyncData:function(n){return Object(r.a)(regeneratorRuntime.mark((function t(){var e,r,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.params,r=n.redirect,t.next=3,fetch("https://api.nuxtjs.dev/mountains").then((function(n){return n.json()}));case 3:if(o=t.sent,!(c=o.find((function(n){return n.continent.toLowerCase()===e.continent&&n.slug===e.mountain})))){t.next=9;break}return t.abrupt("return",{continent:c.continent,mountain:c.title});case 9:r("/");case 10:case"end":return t.stop()}}),t)})))()}}),c=e(43),component=Object(c.a)(o,(function(){var n=this,t=n._self._c;return t("div",[t("h1",[n._v("Continent: "+n._s(n.continent))]),t("h2",[n._v("Mountain: "+n._s(n.mountain))]),t("p",[n._v("Path: "+n._s(n.$route.path))]),t("NuxtLink",{attrs:{to:"/"}},[n._v("Back to Mountains")])],1)}),[],!1,null,null,null);t.default=component.exports}}]);