(function(t){function s(s){for(var a,i,o=s[0],c=s[1],l=s[2],d=0,h=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&h.push(n[i][0]),n[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(s);while(h.length)h.shift()();return r.push.apply(r,l||[]),e()}function e(){for(var t,s=0;s<r.length;s++){for(var e=r[s],a=!0,o=1;o<e.length;o++){var c=e[o];0!==n[c]&&(a=!1)}a&&(r.splice(s--,1),t=i(i.s=e[0]))}return t}var a={},n={app:0},r=[];function i(s){if(a[s])return a[s].exports;var e=a[s]={i:s,l:!1,exports:{}};return t[s].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=a,i.d=function(t,s,e){i.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,s){if(1&s&&(t=i(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var a in t)i.d(e,a,function(s){return t[s]}.bind(null,a));return e},i.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(s,"a",s),s},i.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},i.p="/formula-one-comparison/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=s,o=o.slice();for(var l=0;l<o.length;l++)s(o[l]);var u=c;r.push([0,"chunk-vendors"]),e()})({0:function(t,s,e){t.exports=e("56d7")},"034f":function(t,s,e){"use strict";e("85ec")},"0ac2":function(t,s,e){"use strict";e("acb5")},"0e74":function(t,s,e){},"4b10":function(t,s,e){t.exports=e.p+"img/f1_logo.a7e88539.svg"},"56d7":function(t,s,e){"use strict";e.r(s);e("e260"),e("e6cf"),e("cca6"),e("a79d");var a=e("2b0e"),n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("Header",{on:{"menu-press":t.changeView,"season-change":t.updateSeason}}),"Home"==t.content?e("Home",{attrs:{season:this.season,driversStandings:this.driversStandings,constructorsStandings:this.constructorsStandings,raceBasicInfo:this.raceBasicInfo,fastestDriver:this.fastestDriver,fastestTime:this.fastestTime},on:{"race-change":t.updateRaceData}}):t._e(),"Drivers"==t.content?e("Drivers"):t._e(),"Teams"==t.content?e("Teams"):t._e()],1)},r=[],i=e("2909"),o=(e("ac1f"),e("5319"),e("d81d"),e("a9e3"),e("b0c0"),function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"header"},[a("img",{staticClass:"logo",attrs:{src:e("4b10")}}),a("h2",{staticClass:"header-title"},[t._v("Analyse")]),a("div",{staticClass:"header-split"}),a("div",{staticClass:"menu"},t._l(t.menuItems,(function(s){return a("div",{key:s.id,staticClass:"menu-item",on:{click:function(e){return t.menuPress(s.label)}}},[t._v(" "+t._s(s.label)+" ")])})),0),a("div",{staticClass:"season-select"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.season,expression:"season"}],staticClass:"season-dropdown",attrs:{id:"season-select"},on:{change:[function(s){var e=Array.prototype.filter.call(s.target.options,(function(t){return t.selected})).map((function(t){var s="_value"in t?t._value:t.value;return s}));t.season=s.target.multiple?e:e[0]},function(s){return t.seasonChange(s)}]}},t._l(t.seasons,(function(s){return a("option",{key:s.id,domProps:{value:s.season}},[t._v(t._s(s.season))])})),0),a("label",{staticClass:"season-label",attrs:{for:"season-select"}},[t._v("Season:")])])])}),c=[],l={methods:{menuPress:function(t){this.$emit("menu-press",t)},seasonChange:function(t){this.$emit("season-change",t.target.value)}},mounted:function(){var t=(new Date).getFullYear(),s=t;while(1949!=s)this.seasons.push({id:s,season:s}),s--;this.$emit("season-change",t)},data:function(){return{menuItems:[{id:"home",label:"Home"},{id:"drivers",label:"Drivers"},{id:"teams",label:"Teams"},{id:"tracks",label:"Tracks"}],seasons:[],season:(new Date).getFullYear()}}},u=l,d=(e("8baf"),e("2877")),h=Object(d["a"])(u,o,c,!1,null,null,null),f=h.exports,v=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[e("DriversStandings",{attrs:{season:this.season,driversStandings:this.driversStandings}}),e("RaceBreakdown",{attrs:{season:this.season,raceBasicInfo:this.raceBasicInfo,fastestDriver:this.fastestDriver,fastestTime:this.fastestTime},on:{"race-change":t.raceChange}}),e("ConstructorsStandings",{attrs:{season:this.season,constructorsStandings:this.constructorsStandings}})],1)},p=[],m=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"standings"},[e("h3",{staticClass:"standings-title"},[t._v(t._s(this.season)+" World Drivers Championship")]),e("table",{staticClass:"standings-table"},[t._m(0),t._l(this.driversStandings,(function(s){return e("tr",{key:s.id},[e("td",[t._v(t._s(s.position))]),e("td",[t._v(t._s(s.firstName+" "+s.lastName))]),e("td",[t._v(t._s(s.team))]),e("td",[t._v(t._s(s.points))])])}))],2)])},g=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("tr",[e("th",[t._v("Position")]),e("th",[t._v("Driver")]),e("th",[t._v("Team")]),e("th",[t._v("Points")])])}],_={props:["season","driversStandings"]},b=_,C=(e("9517"),Object(d["a"])(b,m,g,!1,null,null,null)),D=C.exports,S=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"constructors-standings"},[e("h3",{staticClass:"constructors-standings-title"},[t._v(t._s(this.season)+" World Constructors Championship")]),e("table",{staticClass:"standings-table",attrs:{id:"constructors-table"}},[t._m(0),t._l(this.constructorsStandings,(function(s){return e("tr",{key:s.name},[e("td",[t._v(t._s(s.position))]),e("td",[t._v(t._s(s.name))]),e("td",[t._v(t._s(s.points))])])}))],2)])},y=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("tr",[e("th",[t._v("Position")]),e("th",[t._v("Constructor")]),e("th",[t._v("Points")])])}],T={props:["season","constructorsStandings"]},R=T,w=(e("f27b"),Object(d["a"])(R,S,y,!1,null,null,null)),N=w.exports,j=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"race-breakdown"},[e("h3",{staticClass:"race-breakdown-title"},[t._v(t._s(this.season)+"'s Races")]),e("div",{staticClass:"race-switcher"},[e("div",{staticClass:"race-sw-left",on:{click:function(s){return t.raceChange("prev")}}},[t._v("<")]),e("div",{staticClass:"names"},[e("h4",{staticClass:"race-name"},[t._v(t._s(this.raceBasicInfo[0].raceName))]),e("p",{staticClass:"circuit-name"},[t._v(t._s(this.raceBasicInfo[0].circuitName))])]),e("div",{staticClass:"race-sw-right",on:{click:function(s){return t.raceChange("next")}}},[t._v(">")])]),e("div",{staticClass:"race-timings-content"},[e("div",{staticClass:"race-winners-container"},[e("h4",{staticClass:"race-winners-title"},[t._v("Race Winners")]),e("table",{staticClass:"race-winners-table"},[e("tr",[e("td",{staticClass:"sector-heading",staticStyle:{color:"darkorange"}},[t._v("P1")]),e("td",[t._v(t._s(this.raceBasicInfo[0].results.p1.name))])]),e("tr",[e("td",{staticClass:"sector-heading",staticStyle:{color:"darkgray"}},[t._v("P2")]),e("td",[t._v(t._s(this.raceBasicInfo[0].results.p2.name))])]),e("tr",[e("td",{staticClass:"sector-heading",staticStyle:{color:"brown"}},[t._v("P3")]),e("td",[t._v(t._s(this.raceBasicInfo[0].results.p3.name))])])])]),e("div",{staticClass:"table-splitter"}),e("div",{staticClass:"lap-table-container"},[e("h4",{staticClass:"laps-title"},[t._v("Fastest Lap")]),e("table",{staticClass:"lap-table"},[e("tr",[e("td",[t._v(t._s(this.fastestDriver.name))]),e("td",[t._v(t._s(this.fastestTime))])])])])])])},$=[],O={props:["season","raceBasicInfo","fastestDriver","fastestTime"],methods:{raceChange:function(t){this.$emit("race-change",t)}}},k=O,x=(e("0ac2"),Object(d["a"])(k,j,$,!1,null,null,null)),I=x.exports,P={components:{DriversStandings:D,RaceBreakdown:I,ConstructorsStandings:N},props:["season","driversStandings","constructorsStandings","raceBasicInfo","fastestDriver","fastestTime"],methods:{raceChange:function(t){this.$emit("race-change",t)}}},B=P,M=Object(d["a"])(B,v,p,!1,null,null,null),E=M.exports,L=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("h1",{staticClass:"page-title"},[t._v("Driver Compare")])},H=[],A={},F=A,W=Object(d["a"])(F,L,H,!1,null,null,null),J=W.exports,V=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("h1",{staticClass:"page-title"},[t._v("Team Compare")])},Y=[],q={},z=q,G=Object(d["a"])(z,V,Y,!1,null,null,null),K=G.exports,Q={name:"App",components:{Header:f,Home:E,Drivers:J,Teams:K},data:function(){return{content:"Home",season:0,driversStandings:[],constructorsStandings:[],raceBasicInfo:[],round:0,totalRounds:0,fastestDriver:{},fastestTime:""}},methods:{changeView:function(t){console.log("menu-press",t),this.content=t},updateSeason:function(t){console.log("season-change",t),this.season=t,this.getSeasonData(t)},updateRaceData:function(t){"next"==t?this.round++:"prev"==t&&this.round--,this.round>this.totalRounds?this.round--:this.round<1&&this.round++,console.log("round:",this.round),this.getRaceData()},getRaceData:function(){var t=this,s=[];if(this.$http.get("https://ergast.com/api/f1/"+this.season+"/"+this.round+"/results.json").then((function(t){var e=t.data.MRData.RaceTable.Races;s.push({roundNumber:e[0].round,raceName:e[0].raceName,circuitName:e[0].Circuit.circuitName,results:{p1:{name:e[0].Results[0].Driver.givenName+" "+e[0].Results[0].Driver.familyName},p2:{name:e[0].Results[1].Driver.givenName+" "+e[0].Results[1].Driver.familyName},p3:{name:e[0].Results[2].Driver.givenName+" "+e[0].Results[2].Driver.familyName}}})})),this.raceBasicInfo=s,console.log(s),this.season>=2004){var e="",a={};this.$http.get("https://ergast.com/api/f1/"+this.season+"/"+this.round+"/fastest/1/drivers.json").then((function(s){e=s.data.MRData.DriverTable.Drivers[0].driverId,a={name:s.data.MRData.DriverTable.Drivers[0].givenName+" "+s.data.MRData.DriverTable.Drivers[0].familyName,code:e},t.getFastestLapData(a.code),t.fastestDriver=a}))}else a={name:"N/A"},this.fastestDriver=a,this.fastestTime="-"},getFastestLapData:function(t){var s=this;this.$http.get("https://ergast.com/api/f1/"+this.season+"/"+this.round+"/laps.json?limit=15000").then((function(e){for(var a=e.data.MRData.RaceTable.Races[0].Laps,n=[],r={},o=0;o<a.length;o++)for(var c=0;c<a[o].Timings.length;c++)if(a[o].Timings[c].driverId==t){var l=a[o].Timings[c].time.replace(":","");n.push(l)}n=n.map((function(t){return l=Number(t.replace(":","")),r[l]=t,l}));var u=r[Math.min.apply(Math,Object(i["a"])(n))],d=u.charAt(0)+":"+u.substr(1,u.length);console.log(d),s.fastestTime=d}))},getSeasonData:function(t){var s=this,e=[],a=[];this.$http.get("https://ergast.com/api/f1/"+t+"/driverStandings.json").then((function(t){var a=t.data.MRData.StandingsTable.StandingsLists[0].DriverStandings,n=t.data.MRData.StandingsTable.StandingsLists[0].round;s.totalRounds=n;for(var r=0;r<a.length;r++){var i=a[r].Driver,o=a[r].Constructors[0];e.push({position:a[r].position,firstName:i.givenName,lastName:i.familyName,points:a[r].points,team:o.name,ppr:a[r].points/n})}})),this.$http.get("https://ergast.com/api/f1/"+t+"/constructorStandings.json").then((function(t){var s=t.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings,e=t.data.MRData.StandingsTable.StandingsLists[0].round;console.log(s);for(var n=0;n<s.length;n++){var r=s[n].Constructor;a.push({position:s[n].position,name:r.name,points:s[n].points,ppr:s[n].points/e})}})),this.driversStandings=e,this.constructorsStandings=a,this.round=1,this.getRaceData()}}},U=Q,X=(e("034f"),Object(d["a"])(U,n,r,!1,null,null,null)),Z=X.exports,tt=e("bc3a"),st=e.n(tt);e("845f");a["a"].config.productionTip=!1,a["a"].prototype.$http=st.a,new a["a"]({render:function(t){return t(Z)}}).$mount("#app")},6860:function(t,s,e){},"80a8":function(t,s,e){},"845f":function(t,s,e){},"85ec":function(t,s,e){},"8baf":function(t,s,e){"use strict";e("6860")},9517:function(t,s,e){"use strict";e("0e74")},acb5:function(t,s,e){},f27b:function(t,s,e){"use strict";e("80a8")}});
//# sourceMappingURL=app.cadb5484.js.map