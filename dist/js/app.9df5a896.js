(function(e){function t(t){for(var a,c,r=t[0],i=t[1],l=t[2],f=0,m=[];f<r.length;f++)c=r[f],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&m.push(s[c][0]),s[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);u&&u(t);while(m.length)m.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==s[i]&&(a=!1)}a&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},s={app:0},o=[];function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],i=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var u=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("85ec"),s=n.n(a);s.a},"4f8d":function(e,t,n){console.log("---process.env",Object({NODE_ENV:"production",BASE_URL:""}));var a="http://47.106.183.152:8088";t.api={getWxUserInfo:"".concat(a,"/auth/wx/login")}},"56d7":function(e,t,n){"use strict";n.r(t);n("d3b7"),n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("5aea");var a=n("2b0e"),s=n("2f62"),o=n("bc3a"),c=n.n(o),r=n("4f8d"),i={state:{},mutations:{},actions:{getWxUserInfo:function(e,t){return c()({method:"post",url:r["api"].getWxUserInfo,data:t}).then((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(200===t.code){var n=t.data;e.commit("getWxUserInfo",n.data)}return t})).catch((function(e){console.log("getWxUserInfo----err",e)}))},saveReportCaseBaseInfo:function(e,t){return c()({headers:{Authorization:window.sessionStorage.getItem("token")||""},method:"post",url:r["api"].saveReportCaseBaseInfo,data:t}).then((function(e){return e})).catch((function(e){console.log("saveReportCaseBaseInfo----err",e)}))}},getters:{}},l=i;a["a"].use(s["a"]);var u=new s["a"].Store({modules:{caseInfo:l}}),f=u,m=n("b970"),p=(n("499a"),n("157a"),n("8c4f")),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("van-form",{attrs:{autocomplete:"off"},on:{submit:e.onSubmit}},[n("van-field",{staticClass:"m_1",attrs:{"input-align":"right",name:"业务员",label:"业务员",placeholder:"业务员",rules:[{required:!0,message:"请填写业务员名"}]},model:{value:e.caseInfoForm.salesmanName,callback:function(t){e.$set(e.caseInfoForm,"salesmanName",t)},expression:"caseInfoForm.salesmanName"}}),n("van-field",{staticClass:"m_1",attrs:{"input-align":"right",name:"公司名称",label:"公司名称",placeholder:"公司名称",rules:[{required:!0,message:"请填写公司名称"}]},model:{value:e.caseInfoForm.insurePersion,callback:function(t){e.$set(e.caseInfoForm,"insurePersion",t)},expression:"caseInfoForm.insurePersion"}}),n("van-field",{staticClass:"m_1",attrs:{"input-align":"right",name:"联系人",label:"联系人",placeholder:"联系人",rules:[{required:!0,message:"请填写联系人"}]},model:{value:e.caseInfoForm.linkPerson,callback:function(t){e.$set(e.caseInfoForm,"linkPerson",t)},expression:"caseInfoForm.linkPerson"}}),n("van-cell",{attrs:{title:"出险时间","is-link":"",value:e.caseInfoForm.insureHappenTime},on:{click:e.showPopup}}),n("van-popup",{attrs:{position:"bottom"},model:{value:e.showTime,callback:function(t){e.showTime=t},expression:"showTime"}},[n("van-datetime-picker",{attrs:{type:"date",title:"选择年月日","min-date":e.minDate,"max-date":e.maxDate,loading:e.isLoadingShow,formatter:e.formatter},on:{cancel:function(t){e.showTime=!1},confirm:e.confirmPicker},model:{value:e.currentDate,callback:function(t){e.currentDate=t},expression:"currentDate"}})],1),n("van-field",{staticClass:"m_1",attrs:{"input-align":"right","is-link":"",name:"事故原因",label:"事故原因",placeholder:"事故原因",rules:[{required:!0,message:"请填写事故原因"}]},on:{focus:function(t){t.preventDefault(),e.isShowSelection=!0}},model:{value:e.caseInfoForm.accidentReason,callback:function(t){e.$set(e.caseInfoForm,"accidentReason",t)},expression:"caseInfoForm.accidentReason"}}),n("van-action-sheet",{attrs:{round:!1,actions:e.reasonList},on:{select:e.selectReason},model:{value:e.isShowSelection,callback:function(t){e.isShowSelection=t},expression:"isShowSelection"}}),n("van-field",{staticClass:"m_1",attrs:{"input-align":"right",name:"事故描述",label:"事故描述",placeholder:"事故描述"},model:{value:e.caseInfoForm.accidentDes,callback:function(t){e.$set(e.caseInfoForm,"accidentDes",t)},expression:"caseInfoForm.accidentDes"}}),n("div",{staticClass:"m_16"},[n("van-button",{attrs:{block:"",type:"primary","native-type":"submit"}},[e._v("提交")])],1)],1)],1)},h=[],v=(n("99af"),n("c975"),n("b0c0"),n("ac1f"),n("841c"),n("1276"),n("5530")),g={className:"b_g_g"},b={data:function(){return{showTime:!1,isShowSelection:!1,isLoadingShow:!1,minDate:new Date(2020,0,1),maxDate:new Date(2050,11,30),currentDate:new Date,caseInfoForm:{salesmanName:"",insurePersion:"",linkPerson:"",insureHappenTime:"",accidentReason:"",accidentDes:""},reasonList:[{name:"车泡水",className:g.className},{name:"车晒爆了",className:g.className}]}},created:function(){this.getCode()},methods:Object(v["a"])(Object(v["a"])({},Object(s["b"])(["saveReportCaseBaseInfo","getWxUserInfo"])),{},{getCode:function(){var e=this.getUrlParams("code")||"";this.getOpenId(e)},getOpenId:function(e){var t=this;console.log(e),this.getWxUserInfo({code:e}).then((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(200===e.code){var n=e.data;t.wxUserInfo=n}}))},getUrlParams:function(e){var t=decodeURIComponent(location.search),n=new Object;if(-1!=t.indexOf("?"))for(var a=t.substr(1),s=a.split("&"),o=0;o<s.length;o++)n[s[o].split("=")[0]]=unescape(s[o].split("=")[1]);var c=Object.assign(n,this.$route.query);return c?c[e]:""},showPopup:function(){var e=this;this.showTime=!0,this.isLoadingShow=!0,setTimeout((function(){e.isLoadingShow=!1}),500)},confirmPicker:function(e){var t=e.getFullYear(),n=e.getMonth()+1,a=e.getDate();n>=1&&n<=9&&(n="0".concat(n)),a>=1&&a<=9&&(a="0".concat(a)),this.caseInfoForm.insureHappenTime="".concat(t,"-").concat(n,"-").concat(a),this.showTime=!1},formatter:function(e,t){return"year"===e?"".concat(t,"年"):"month"===e?"".concat(t,"月"):"day"===e?"".concat(t,"日"):"hour"===e?"".concat(t,"时"):"minute"===e?"".concat(t,"分"):"second"===e?"".concat(t,"秒"):t},selectReason:function(e){this.caseInfoForm.accidentReason=e.name,this.isShowSelection=!1},onSubmit:function(){var e=this;this.saveReportCaseBaseInfo(this.claimForm).then((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};200===t.code&&e.$message.success("提交报案成功")}))}})},w=b,_=n("2877"),I=Object(_["a"])(w,d,h,!1,null,null,null),S=I.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("van-nav-bar",{attrs:{title:"个人中心"}}),n("van-row",{staticClass:"m_t_5 b_g_white"},[n("van-col",{staticClass:"h_15",attrs:{span:"6"}},[n("div",[n("van-icon",{attrs:{name:"https://b.yzcdn.cn/vant/icon-demo-1126.png"}})],1)]),n("van-col",{staticClass:"h_15",attrs:{span:"18"}},[n("div",[e._v("用户"+e._s("xxxx"))])])],1),n("van-row",{staticClass:"m_t_5 b_g_white"},[n("van-col",{staticClass:"h_15",attrs:{span:"6"}},[n("div",[n("van-icon",{attrs:{name:"https://b.yzcdn.cn/vant/icon-demo-1126.png"}})],1)]),n("van-col",{staticClass:"h_15",attrs:{span:"18","is-link":""},on:{click:e.toCaseListPage}},[n("div",[e._v("我的案件")])])],1)],1)},C=[],y={data:function(){return{isShowSelection:!1,caseInfoForm:{saleMenName:"",reason:""},reasonList:[{name:"车泡水",className:g.className},{name:"车晒爆了",className:g.className}]}},created:function(){},methods:{selectReason:function(e){this.caseInfoForm.reason=e.name,this.isShowSelection=!1},toCaseListPage:function(){console.log("sdfsf"),this.$router.push("caseList")}}},P=y,k=Object(_["a"])(P,x,C,!1,null,null,null),F=k.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("van-nav-bar",{attrs:{title:"个人中心"}}),n("van-row",{staticClass:"m_t_5 b_g_white"},[n("van-col",{staticClass:"h_15",attrs:{span:"6"}},[n("div",[n("van-icon",{attrs:{name:"https://b.yzcdn.cn/vant/icon-demo-1126.png"}})],1)]),n("van-col",{staticClass:"h_15",attrs:{span:"18","is-link":""},on:{click:e.toCaseDetailPage}},[n("div",[e._v("我的案件")])])],1)],1)},N=[],O={data:function(){return{isShowSelection:!1,caseInfoForm:{saleMenName:"",reason:""},reasonList:[{name:"车泡水",className:g.className},{name:"车晒爆了",className:g.className}]}},created:function(){},methods:{selectReason:function(e){this.caseInfoForm.reason=e.name,this.isShowSelection=!1},toCaseDetailPage:function(){console.log("sdfsf"),this.$router.push("caseDetail")}}},j=O,$=Object(_["a"])(j,D,N,!1,null,null,null),L=$.exports,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("van-nav-bar",{attrs:{title:"个人中心"}}),n("van-row",{staticClass:"m_t_5 b_g_white"},[n("van-col",{staticClass:"h_15",attrs:{span:"6"}},[n("div",[n("van-icon",{attrs:{name:"https://b.yzcdn.cn/vant/icon-demo-1126.png"}})],1)]),n("van-col",{staticClass:"h_15",attrs:{span:"18","is-link":""},on:{click:e.toCaseDetailPage}},[n("div",[e._v("我的案件")])])],1)],1)},T=[],U={data:function(){return{isShowSelection:!1,caseInfoForm:{saleMenName:"",reason:""},reasonList:[{name:"车泡水",className:g.className},{name:"车晒爆了",className:g.className}]}},created:function(){},methods:{selectReason:function(e){this.caseInfoForm.reason=e.name,this.isShowSelection=!1},toCaseDetailPage:function(){console.log("sdfsf"),this.$router.push("caseDetail")}}},E=U,M=Object(_["a"])(E,R,T,!1,null,null,null),W=M.exports,q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"b_g_grey"},[n("van-overlay",{attrs:{show:e.show},on:{click:function(t){e.show=!1}}},[n("van-loading",{staticClass:"lod_box"})],1),n("router-view")],1)},B=[],z={name:"App",components:{},data:function(){return{show:!1}},created:function(){this.show=this.$IsLoadding}},A=z,H=(n("034f"),Object(_["a"])(A,q,B,!1,null,null,null)),J=H.exports,V=[{path:"/",component:J,redirect:"caseInfo",children:[{name:"caseInfo",path:"/caseInfo",component:S},{name:"userCenter",path:"/userCenter",component:F},{name:"caseList",path:"/caseList",component:L},{name:"caseDetail",path:"/caseDetail",component:W}]}],Y=V,G=new p["a"]({routes:Y}),K=G,Q=p["a"].prototype.push;p["a"].prototype.push=function(e){return Q.call(this,e).catch((function(e){return e}))},c.a.interceptors.request.use((function(e){return a["a"].prototype.$IsLoadding=!0,e}),(function(e){return Promise.reject(e)})),c.a.interceptors.response.use((function(e){if(a["a"].prototype.$IsLoadding=!1,401!=e.data.code&&401!=e.data.status)return e.data;console.log("当前路由地址：",K.currentRoute.fullPath)}),(function(e){return Promise.reject(e.response)})),a["a"].use(p["a"]),a["a"].use(c.a),a["a"].use(m["a"]),K.beforeEach((function(e,t,n){console.log("--router to",e.fullPath),n()})),new a["a"]({router:K,store:f,render:function(e){return e("router-view")}}).$mount("#app")},"5aea":function(e,t,n){},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.9df5a896.js.map