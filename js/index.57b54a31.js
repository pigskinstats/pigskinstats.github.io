(function(){"use strict";var e={856:function(e,t,a){var n=a(963),s=a(825),r=a(252);const o={id:"app"};function i(e,t,a,n,s,i){const l=(0,r.up)("page-heading"),c=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",o,[(0,r.Wm)(l),(0,r.Wm)(c,{class:"content"})])}var l={name:"App"},c=a(744);const u=(0,c.Z)(l,[["render",i]]);var m=u,d=a(201),g=a(577);function p(e,t,a,n,s,o){const i=(0,r.up)("page-title"),l=(0,r.up)("pagination-controls"),c=(0,r.up)("games-table"),u=(0,r.up)("alert-message");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(i,{title:"Games",info:{Season:s.season}},null,8,["info"]),(0,r.Wm)(l,{paginator:s.games},null,8,["paginator"]),(0,r.Wm)(c,{season:s.season,games:s.games.items},null,8,["season","games"]),s.error?((0,r.wg)(),(0,r.j4)(u,{key:0,level:"error"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,g.zw)(s.error),1)])),_:1})):(0,r.kq)("",!0)])}var h=a(669),f=a.n(h);const w=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],v=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];class y{constructor(e){this._date=e}static fromWolfeDate(e){return new y(new Date(e))}static fromIsoDate(e){return new y(new Date(e))}get month(){return v[this._date.getMonth()]}get day(){return this._date.getDate()}get dayOfWeek(){return w[this._date.getDay()]}get year(){return this._date.getYear()+1900}get unix(){return this._date.getTime()/1e3}toString(){return`${this.dayOfWeek}, ${this.month} ${this.day}`}}function b(e){return function({date:t,awayTeam:a,awayScore:n,homeTeam:s,homeScore:r}){return{date:y.fromIsoDate(t),awayTeam:{slug:a,name:e[a].name,score:n},homeTeam:{slug:s,name:e[s].name,score:r}}}}function _(e,t){const a=e=>e===t?"this":"other",n={};if(n[a(e.homeTeam)]=e.homeScore,n[a(e.awayTeam)]=e.awayScore,void 0!==n.this)return n.this===n.away?"tie":n.this>n.other?"wins":"losses"}function k(e){return function(t,a){const n=_(a,e);return n&&(t[n]+=1),t}}class T{async _getRawTeams(e){const t=`/static/wolfe-scores/${e}/teams-db.json`;return await f().get(t).then((({data:e})=>e))}async _getRawGames(e){const t=`/static/wolfe-scores/${e}/games-db.json`;return await f().get(t).then((({data:e})=>e))}async getTeams({season:e}){const t=await this._getRawTeams(e);return Object.keys(t).map((e=>Object.assign({slug:e},t[e])))}async getTeam({slug:e,season:t}){const[a,n]=await Promise.all([this._getRawTeams(t),this._getRawGames(t)]),s=n.filter((({awayTeam:t,homeTeam:a})=>[a,t].includes(e)));return Object.assign({},a[e],{games:s.map(b(a))},{record:s.reduce(k(e),{wins:0,losses:0})})}async getGames({season:e}){const[t,a]=await Promise.all([this._getRawGames(e),this._getRawTeams(e)]);return t.map(b(a))}getSeasons(){return[2018,2019,2020,2021,2022,2023]}}var W=new T;class D{constructor(e){this._collection=e,this._limit=50,this.gotoPage(1)}get pages(){return Math.ceil(this._collection.length/this._limit)}forward(){this.gotoPage(this.page+1)}back(){this.gotoPage(this.page-1)}gotoPage(e){if(e<1||e>this.pages)return;this.page=e;const t=this._limit*(this.page-1),a=t+this._limit;this.items=this._collection.slice(t,a)}}function S(e,t){return t.date.unix-e.date.unix}var O={methods:{async updateGames(){try{const e=await W.getGames({season:this.season});this.games=new D(e.sort(S))}catch(e){this.error=e}}},async created(){await this.updateGames()},data(){return{season:Number(this.$route.params["season"]),games:new D([]),error:""}}};const j=(0,c.Z)(O,[["render",p]]);var z=j;function C(e,t,a,n,s,o){const i=(0,r.up)("page-title"),l=(0,r.up)("router-link"),c=(0,r.up)("data-table");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(i,{title:"Seasons"}),(0,r.Wm)(c,null,{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.seasons,(e=>((0,r.wg)(),(0,r.iD)("tr",null,[(0,r._)("td",null,[(0,r.Wm)(l,{to:{name:"Season",params:{season:e}}},{default:(0,r.w5)((()=>[(0,r.Uk)((0,g.zw)(e),1)])),_:2},1032,["to"])])])))),256))])),_:1})])}var Z={data(){return{seasons:W.getSeasons()}}};const $=(0,c.Z)(Z,[["render",C]]);var U=$;function G(e,t,a,n,s,o){const i=(0,r.up)("page-title"),l=(0,r.up)("pagination-controls"),c=(0,r.up)("teams-table"),u=(0,r.up)("alert-message");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(i,{title:"Teams",info:{Season:s.season}},null,8,["info"]),(0,r.Wm)(l,{paginator:s.teams},null,8,["paginator"]),(0,r.Wm)(c,{teams:s.teams.items},null,8,["teams"]),s.error?((0,r.wg)(),(0,r.j4)(u,{key:0,level:"error"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,g.zw)(s.error),1)])),_:1})):(0,r.kq)("",!0)])}function P(e,t){return null!==e&&void 0!==e?e:t}function I(e){return function(t,a){return e(t).localeCompare(e(a))}}var R={methods:{async updateTeams(){try{const e=await W.getTeams({season:this.season});this.teams=new D(e.sort(I((e=>e.name))))}catch(e){this.error=e}}},async created(){await this.updateTeams()},data(){return{teams:new D([]),season:Number(this.$route.params["season"]),error:""}}};const x=(0,c.Z)(R,[["render",G]]);var q=x;function M(e,t,a,n,s,o){const i=(0,r.up)("page-title"),l=(0,r.up)("games-table"),c=(0,r.up)("alert-message");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(i,{title:`${s.team.name}`,info:{Season:s.season,Record:`(${s.record})`}},null,8,["title","info"]),(0,r.Wm)(l,{season:s.season,games:s.team.games},null,8,["season","games"]),s.error?((0,r.wg)(),(0,r.j4)(c,{key:0,level:"error"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,g.zw)(s.error),1)])),_:1})):(0,r.kq)("",!0)])}var N={methods:{async updateTeam(e){try{const t=await W.getTeam({slug:e,season:this.season});this.team=t,this.record=`${t.record.wins}-${t.record.losses}`}catch(t){this.error=t}}},async beforeRouteUpdate(e,t,a){await this.updateTeam(e.params.id),a()},async created(){await this.updateTeam(this.$route.params.id)},data(){return{season:Number(this.$route.params["season"]),team:{},record:"",error:""}}};const A=(0,c.Z)(N,[["render",M]]);var H=A;function Y(e,t){const a=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(a)}const F={},K=(0,c.Z)(F,[["render",Y]]);var E=K,J=(0,d.p7)({history:(0,d.r5)(),routes:[{path:"/",redirect:{name:"Games",params:{season:2023}}},{path:"/seasons",component:E,children:[{path:"",name:"Seasons",component:U},{path:":season",component:E,children:[{path:"",name:"Season",redirect:({params:e})=>({name:"Games",params:e})},{path:"games",name:"Games",component:z},{path:"teams",name:"Teams",component:q},{path:"teams/:id",name:"Team",component:H}]}]}]}),V=a(947),B=a(436),L=a(810);const Q=e=>((0,r.dD)("data-v-65efd89b"),e=e(),(0,r.Cn)(),e),X={class:"heading",style:{display:"flex"}},ee=Q((()=>(0,r._)("div",null,[(0,r._)("h1",null,[(0,r._)("a",{href:"/"},"PigskinStats.com")]),(0,r._)("div",{class:"subheading"},[(0,r.Uk)("Powered by: "),(0,r._)("a",{href:"http://prwolfe.bol.ucla.edu/cfootball"},"Wolfe Scores")])],-1)));function te(e,t,a,n,s,o){const i=(0,r.up)("font-awesome-icon");return(0,r.wg)(),(0,r.iD)("div",X,[(0,r._)("div",null,[(0,r.Wm)(i,{class:"football-icon",icon:"football-ball"})]),ee])}var ae={name:"PageHeading"};const ne=(0,c.Z)(ae,[["render",te],["__scopeId","data-v-65efd89b"]]);var se=ne;const re={class:"page-title"};function oe(e,t,a,n,s,o){return(0,r.wg)(),(0,r.iD)("div",re,[(0,r._)("h2",null,(0,g.zw)(a.title),1),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.each(a.info),(({key:e,value:t})=>((0,r.wg)(),(0,r.iD)("div",null,(0,g.zw)(e)+": "+(0,g.zw)(t),1)))),256))])}var ie={props:{title:String,info:{type:Object,required:!1,default:()=>({})}},methods:{each(e){return Object.keys(e).map((t=>({key:t,value:e[t]})))}}};const le=(0,c.Z)(ie,[["render",oe],["__scopeId","data-v-359bc072"]]);var ce=le;const ue={key:0};function me(e,t,a,n,s,o){return(0,r.wg)(),(0,r.iD)("div",{class:(0,g.C_)(["alert",o.styleClass])},[o.label?((0,r.wg)(),(0,r.iD)("b",ue,(0,g.zw)(o.label)+":",1)):(0,r.kq)("",!0),(0,r.Uk)(),(0,r.WI)(e.$slots,"default")],2)}const de={error:{label:"Error",styleClass:"alert-danger"},warning:{label:"Warning",styleClass:"alert-warning"},success:{label:"Success",styleClass:"alert-success"},info:{label:"Info",styleClass:"alert-info"}};var ge={props:{level:{type:String,required:!0,validator:e=>Object.keys(de).includes(e)}},computed:{label(){return de[this.level].label},styleClass(){return de[this.level].styleClass}}};const pe=(0,c.Z)(ge,[["render",me]]);var he=pe;const fe={style:{"white-space":"nowrap"}};function we(e,t,a,n,s,o){const i=(0,r.up)("router-link"),l=(0,r.up)("data-table");return(0,r.wg)(),(0,r.j4)(l,null,{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.games,(({homeTeam:e,awayTeam:t,date:n})=>((0,r.wg)(),(0,r.iD)("tr",null,[(0,r._)("td",fe,(0,g.zw)(n.toString()),1),(0,r._)("td",{class:(0,g.C_)(o.teamStyle(e,t))},[(0,r.Wm)(i,{to:o.linkTo(e,a.season)},{default:(0,r.w5)((()=>[(0,r.Uk)((0,g.zw)(e.name),1)])),_:2},1032,["to"])],2),(0,r._)("td",{class:(0,g.C_)([o.teamStyle(e,t),"number-cell"])},(0,g.zw)(o.scoreValue(e.score)),3),(0,r._)("td",{class:(0,g.C_)(o.teamStyle(t,e))},[(0,r.Wm)(i,{to:o.linkTo(t,a.season)},{default:(0,r.w5)((()=>[(0,r.Uk)((0,g.zw)(t.name),1)])),_:2},1032,["to"])],2),(0,r._)("td",{class:(0,g.C_)([o.teamStyle(t,e),"number-cell"])},(0,g.zw)(o.scoreValue(t.score)),3)])))),256))])),_:1})}var ve={props:{season:Number,games:Array},methods:{linkTo:(e,t)=>({name:"Team",params:{season:t,id:e.slug}}),scoreValue:e=>P(e,"-"),teamStyle:(e,t)=>e.score>t.score?{winner:!0}:e.score<t.score?{loser:!0}:void 0}};const ye=(0,c.Z)(ve,[["render",we],["__scopeId","data-v-50ac7047"]]);var be=ye;function _e(e,t,a,n,s,o){const i=(0,r.up)("router-link"),l=(0,r.up)("data-table");return(0,r.wg)(),(0,r.j4)(l,null,{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.teams,(({slug:e,name:t})=>((0,r.wg)(),(0,r.iD)("tr",null,[(0,r._)("td",null,[(0,r.Wm)(i,{to:{name:"Team",params:{id:e}}},{default:(0,r.w5)((()=>[(0,r.Uk)((0,g.zw)(t),1)])),_:2},1032,["to"])])])))),256))])),_:1})}var ke={props:{teams:Array}};const Te=(0,c.Z)(ke,[["render",_e]]);var We=Te;const De={cellspacing:"10",border:"1",class:"data-table"};function Se(e,t){return(0,r.wg)(),(0,r.iD)("table",De,[(0,r.WI)(e.$slots,"default")])}const Oe={},je=(0,c.Z)(Oe,[["render",Se]]);var ze=je;const Ce={class:"data-table-controls"};function Ze(e,t,a,n,s,o){const i=(0,r.up)("font-awesome-icon"),l=(0,r.up)("b-button");return(0,r.wg)(),(0,r.iD)("div",Ce,[(0,r.Wm)(l,{pill:"",size:"sm",variant:"outline-dark",onClick:t[0]||(t[0]=e=>a.paginator.back())},{default:(0,r.w5)((()=>[(0,r.Wm)(i,{icon:"angle-left"}),(0,r.Uk)(" Back")])),_:1}),(0,r.Uk)("  "),(0,r._)("span",null,"Page "+(0,g.zw)(a.paginator.page)+" of "+(0,g.zw)(a.paginator.pages),1),(0,r.Uk)("  "),(0,r.Wm)(l,{pill:"",size:"sm",variant:"outline-dark",onClick:t[1]||(t[1]=e=>a.paginator.forward())},{default:(0,r.w5)((()=>[(0,r.Uk)("Forward "),(0,r.Wm)(i,{icon:"angle-right"})])),_:1})])}var $e={props:{paginator:Object}};const Ue=(0,c.Z)($e,[["render",Ze],["__scopeId","data-v-4eb1b55b"]]);var Ge=Ue;V.vI.add(B.h6w,B.yOZ,B.EyR),(0,n.ri)(m).use(J).use(s.Z).component("font-awesome-icon",L.GN).component("page-heading",se).component("page-title",ce).component("alert-message",he).component("pagination-controls",Ge).component("games-table",be).component("teams-table",We).component("data-table",ze).mount("#app")}},t={};function a(n){var s=t[n];if(void 0!==s)return s.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,a),r.exports}a.m=e,function(){var e=[];a.O=function(t,n,s,r){if(!n){var o=1/0;for(u=0;u<e.length;u++){n=e[u][0],s=e[u][1],r=e[u][2];for(var i=!0,l=0;l<n.length;l++)(!1&r||o>=r)&&Object.keys(a.O).every((function(e){return a.O[e](n[l])}))?n.splice(l--,1):(i=!1,r<o&&(o=r));if(i){e.splice(u--,1);var c=s();void 0!==c&&(t=c)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[n,s,r]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={826:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var s,r,o=n[0],i=n[1],l=n[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(s in i)a.o(i,s)&&(a.m[s]=i[s]);if(l)var u=l(a)}for(t&&t(n);c<o.length;c++)r=o[c],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(u)},n=self["webpackChunkpigskinstats_com"]=self["webpackChunkpigskinstats_com"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(856)}));n=a.O(n)})();
//# sourceMappingURL=index.57b54a31.js.map