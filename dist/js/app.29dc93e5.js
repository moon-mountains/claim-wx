(function(e){function t(t){for(var a,r,i=t[0],c=t[1],l=t[2],f=0,h=[];f<i.length;f++)r=i[f],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&h.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(h.length)h.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(a=!1)}a&&(s.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},o={app:0},s=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("85ec"),o=n.n(a);o.a},"4f8d":function(e,t,n){console.log("---process.env",Object({NODE_ENV:"production",BASE_URL:""}));var a="http://47.106.183.152:8088";t.api={getWxUserInfo:"".concat(a,"/auth/wx/login"),queryAllSalesman:"".concat(a,"/api/user/queryAllSalesman"),saveReportCaseBaseInfo:"".concat(a,"/auth/wx/saveWxCaseBaseInfo"),queryWxCaseStatusList:"".concat(a,"/auth/wx/queryWxCaseStatusList"),queryWxCaseLog:"".concat(a,"/auth/wx/queryWxCaseLog")}},"56d7":function(e,t,n){"use strict";n.r(t);n("d3b7"),n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("5aea");var a=n("2b0e"),o=n("2f62"),s=n("bc3a"),r=n.n(s),i=n("4f8d"),c={state:{userInfo:{openid:""}},mutations:{getWxUserInfo:function(e,t){e.userInfo=t||{}}},actions:{getWxUserInfo:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r()({method:"post",url:i["api"].getWxUserInfo,data:t}).then((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(200===t.code){var n=t.data;console.log("getWxUserInfo-----",n),e.commit("getWxUserInfo",n)}return t})).catch((function(e){console.log("getWxUserInfo----err",e)}))},saveReportCaseBaseInfo:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return console.log("--get--token",e.state.userInfo.token),r()({headers:{Authorization:e.state.userInfo.token||""},method:"post",url:i["api"].saveReportCaseBaseInfo,data:t}).then((function(e){return console.log("saveReportCaseBaseInfo-----",e),e})).catch((function(e){console.log("saveReportCaseBaseInfo----err",e)}))},queryAllSalesman:function(e){return r()({headers:{Authorization:e.state.userInfo.token||""},method:"post",url:i["api"].queryAllSalesman}).then((function(e){return console.log("queryAllSalesman-----",e),e})).catch((function(e){console.log("queryAllSalesman----err",e)}))},queryWxCaseStatusList:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return console.log("queryWxCaseStatusList--get--token",e.state.userInfo.token),r()({headers:{Authorization:e.state.userInfo.token||""},method:"post",url:i["api"].queryWxCaseStatusList,data:t}).then((function(e){return console.log("queryWxCaseStatusList-----",e),e})).catch((function(e){console.log("queryWxCaseStatusList----err",e)}))},queryWxCaseLog:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return console.log("queryWxCaseLog--get--token",e.state.userInfo.token),r()({headers:{Authorization:e.state.userInfo.token||""},method:"post",url:i["api"].queryWxCaseLog,data:t}).then((function(e){return console.log("queryWxCaseLog-----",e),e})).catch((function(e){console.log("queryWxCaseLog----err",e)}))}},getters:{}},l=c;a["a"].use(o["a"]);var u=new o["a"].Store({modules:{caseInfo:l}}),f=u,h=n("b970"),d=(n("499a"),n("157a"),n("8c4f")),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isShowAll?n("section",[n("van-form",{attrs:{autocomplete:"off"},on:{submit:e.onSubmit}},[n("van-cell",{staticClass:"m_1",attrs:{title:"业务员",icon:"../assets/logo.png","is-link":"",value:e.caseInfoForm.saleAgentName},on:{click:function(t){return e.showPop(1)}}}),n("van-field",{staticClass:"m_1",attrs:{"input-align":"right",name:"公司名称",label:"公司名称",placeholder:"公司名称",rules:[{required:!0,message:"请填写公司名称"}]},model:{value:e.caseInfoForm.insurePersion,callback:function(t){e.$set(e.caseInfoForm,"insurePersion",t)},expression:"caseInfoForm.insurePersion"}}),n("van-field",{staticClass:"m_1",attrs:{"input-align":"right",name:"联系人",label:"联系人",placeholder:"联系人",rules:[{required:!0,message:"请填写联系人"}]},model:{value:e.caseInfoForm.linkPerson,callback:function(t){e.$set(e.caseInfoForm,"linkPerson",t)},expression:"caseInfoForm.linkPerson"}}),n("van-cell",{attrs:{title:"出险时间","is-link":"",value:e.caseInfoForm.insureHappenTime},on:{click:e.showPopup}}),n("van-popup",{attrs:{position:"bottom"},model:{value:e.showTime,callback:function(t){e.showTime=t},expression:"showTime"}},[n("van-datetime-picker",{attrs:{type:"datetime",title:"选择年月日","min-date":e.minDate,"max-date":e.maxDate,loading:e.isLoadingShow,formatter:e.formatter},on:{cancel:function(t){e.showTime=!1},confirm:e.confirmPicker},model:{value:e.currentDate,callback:function(t){e.currentDate=t},expression:"currentDate"}})],1),n("van-cell",{staticClass:"m_1",attrs:{title:"事故原因","is-link":"",value:e.caseInfoForm.accidentReason},on:{click:function(t){return e.showPop(2)}}}),n("van-field",{staticClass:"m_1",attrs:{"input-align":"right",name:"事故描述",label:"事故描述",placeholder:"事故描述"},model:{value:e.caseInfoForm.accidentDes,callback:function(t){e.$set(e.caseInfoForm,"accidentDes",t)},expression:"caseInfoForm.accidentDes"}}),n("van-action-sheet",{attrs:{round:!1,actions:e.renderPopList},on:{select:e.selectReason},model:{value:e.isShowSelection,callback:function(t){e.isShowSelection=t},expression:"isShowSelection"}}),n("div",{staticClass:"m_16"},[n("van-button",{attrs:{block:"",type:"primary","native-type":"submit"}},[e._v("提交")])],1)],1)],1):e._e()},m=[],v=(n("99af"),n("4160"),n("b0c0"),n("159b"),n("5530")),g={className:"b_g_g"},I=(n("c975"),n("ac1f"),n("841c"),n("1276"),function(e){var t=decodeURIComponent(location.search),n=new Object;if(-1!=t.indexOf("?"))for(var a=t.substr(1),o=a.split("&"),s=0;s<o.length;s++)n[o[s].split("=")[0]]=unescape(o[s].split("=")[1]);return Object.assign(n,e),n?n.code:""}),b={data:function(){return{typeFlag:"",isShowAll:!1,showTime:!1,isShowSelection:!1,isLoadingShow:!1,minDate:new Date(2020,0,1),maxDate:new Date(2050,11,30),currentDate:new Date,caseInfoForm:{openid:"",saleAgentNo:"",caseInfoStatus:"0",saleAgentName:"",insurePersion:"",linkPerson:"",insureHappenTime:"",accidentReason:"",accidentDes:""},renderPopList:[],reasonList:[{name:"车泡水",className:g.className},{name:"车晒爆了",className:g.className}]}},created:function(){this.isShowAll=!1,this.getCode()},computed:Object(v["a"])({},Object(o["c"])({userInfo:function(e){return e.caseInfo.userInfo||{}}})),methods:Object(v["a"])(Object(v["a"])({},Object(o["b"])(["saveReportCaseBaseInfo","getWxUserInfo","queryAllSalesman"])),{},{getqueryAllSalesman:function(){var e=this;this.queryAllSalesman().then((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(200===t.code){var n=t.data;e.renderPopList=n,e.renderPopList.forEach((function(e){e.name=e.nickName})),e.isShowSelection=!0}else e.$notify(t.message||"暂无信息")}))},getCode:function(){if(this.userInfo.nickname)return this.wxUserInfo=this.userInfo,void(this.isShowAll=!0);var e=I(this.$route.query)||"";this.getOpenId(e)},getOpenId:function(e){var t=this;console.log("code---",e),this.getWxUserInfo({code:e}).then((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(200===e.code){console.log("getWxUserInfo---200",e);var n=e.data;if(!n.nickname)return void t.$notify("未授权成功，请重新进入");t.wxUserInfo=n,console.log("--token",n.token),window.sessionStorage.setItem("token",n.token||""),t.isShowAll=!0}else t.$notify("请重新进入")}))},showPopup:function(){var e=this;this.showTime=!0,this.isLoadingShow=!0,setTimeout((function(){e.isLoadingShow=!1}),500)},confirmPicker:function(e){var t=e.getFullYear(),n=e.getMonth()+1,a=e.getDate(),o=e.getHours(),s=e.getMinutes(),r=e.getSeconds();n>=1&&n<=9&&(n="0".concat(n)),a>=1&&a<=9&&(a="0".concat(a)),o>=0&&o<=9&&(o="0".concat(o)),s>=0&&s<=9&&(s="0".concat(s)),r>=0&&r<=9&&(r="0".concat(r)),this.caseInfoForm.insureHappenTime="".concat(t,"-").concat(n,"-").concat(a," ").concat(o,":").concat(s,":").concat(r),this.showTime=!1},formatter:function(e,t){return"year"===e?"".concat(t,"年"):"month"===e?"".concat(t,"月"):"day"===e?"".concat(t,"日"):"hour"===e?"".concat(t,"时"):"minute"===e?"".concat(t,"分"):"second"===e?"".concat(t,"秒"):t},selectReason:function(e){switch(this.typeFlag){case 1:this.caseInfoForm.saleAgentNo=e.userId,this.caseInfoForm.saleAgentName=e.name;break;case 2:this.caseInfoForm.accidentReason=e.name;break}this.isShowSelection=!1},onSubmit:function(){var e=this;console.log("onSubmit-----",this.caseInfoForm),this.saveReportCaseBaseInfo(this.caseInfoForm).then((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};console.log("saveReportCaseBaseInfo-----",t),200===t.code?e.$router.push("userCenter"):e.$notify(t.message||"提交失败了")}))},showPop:function(e){switch(e){case 1:this.typeFlag=e,this.getqueryAllSalesman();break;case 2:this.typeFlag=e,this.renderPopList=this.reasonList,this.isShowSelection=!0;break}}})},w=b,y=n("2877"),x=Object(y["a"])(w,p,m,!1,null,null,null),S=x.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isShowAll?n("section",[n("van-nav-bar",{attrs:{title:"个人中心"}}),n("van-row",{staticClass:"m_t_1 b_g_white"},[n("van-col",{staticClass:"h_15",attrs:{span:"6"}},[n("div",[n("van-icon",{attrs:{name:e.wxUserInfo.headimgurl||""}})],1)]),n("van-col",{staticClass:"h_15",attrs:{span:"18"}},[n("div",[e._v("用户"+e._s(e.wxUserInfo.nickname||""))])])],1),n("van-row",{staticClass:"m_t_1 b_g_white"},[n("van-col",{attrs:{span:"6"}},[n("div",[n("van-icon",{attrs:{name:e.wxUserInfo.headimgurl||""}})],1)]),n("van-col",{attrs:{span:"18"}},[n("van-cell-group",[n("van-cell",{attrs:{title:"我的案件",value:"","is-link":""},on:{click:e.toCaseListPage}})],1)],1)],1)],1):e._e()},_=[],k={data:function(){return{isShowAll:!1,avatarUrl:"",wxUserInfo:{}}},created:function(){this.getCode()},computed:Object(v["a"])({},Object(o["c"])({userInfo:function(e){return e.caseInfo.userInfo||{}}})),methods:Object(v["a"])(Object(v["a"])({},Object(o["b"])(["getWxUserInfo"])),{},{getCode:function(){if(this.userInfo.nickname)return this.wxUserInfo=this.userInfo,void(this.isShowAll=!0);var e=I(this.$route.query)||"";this.getOpenId(e)},getOpenId:function(e){var t=this;console.log("code---",e),this.getWxUserInfo({code:e}).then((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(200===e.code){console.log("getWxUserInfo---200",e);var n=e.data;if(!n.nickname)return void t.$notify("未授权成功，请重新进入");t.wxUserInfo=n||{},t.isShowAll=!0}else t.$notify("请重新进入")}))},toCaseListPage:function(){this.$router.push("caseList")}})},L=k,O=Object(y["a"])(L,C,_,!1,null,null,null),D=O.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("van-nav-bar",{attrs:{title:"案件列表"}}),e._l(e.caseList,(function(t,a){return n("van-row",{key:a,staticClass:"m_t_2 b_g_white"},[n("van-col",[n("div",{staticClass:"h_117 f_4 m_l_5"},[e._v("案件号:"+e._s(t.caseNo))])]),n("van-col",{attrs:{span:24}},[n("van-cell",{attrs:{title:"状态:",value:e._f("translateStatus")(t.caseStatus),"is-link":""},on:{click:function(n){return e.toCaseDetailPage(t)}}})],1)],1)}))],2)},q=[],W=(n("caad"),{data:function(){return{caseList:[]}},filters:{translateStatus:function(e){var t=["01","02","03","04"],n=["05","06","07"];return t.includes(e)?"处理中":n.includes(e)?"已完成":"待处理"}},created:function(){this.getqueryWxCaseStatusList()},methods:Object(v["a"])(Object(v["a"])({},Object(o["b"])(["queryWxCaseStatusList"])),{},{getqueryWxCaseStatusList:function(){var e=this;this.queryWxCaseStatusList().then((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};200===t.code?e.caseList=t.data||[]:e.$notify(t.message||"暂无数据")}))},toCaseDetailPage:function(e){window.localStorage.setItem("caseNo",e.caseNo||""),this.$router.push("caseDetail")}})}),j=W,A=Object(y["a"])(j,P,q,!1,null,null,null),$=A.exports,F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("van-nav-bar",{attrs:{title:"案件详情"}}),n("van-divider",{staticClass:"h_117 b_g_white",attrs:{"content-position":"left"}},[e._v("案件处理日志")]),n("van-cell-group",[n("van-cell",{attrs:{title:"案发日期:",value:e.caseDetail.insureHappenTime||"--"}}),n("van-cell",{attrs:{title:"案件号码:",value:e.caseDetail.caseNo||"--"}}),n("van-cell",{attrs:{title:"案件ID:",value:e.caseDetail.caseId||"--"}}),n("van-cell",{attrs:{title:"被保人:",value:e.caseDetail.insurePersion||"--"}}),n("van-cell",{attrs:{title:"案件耗时:",value:e.caseDetail.reportCaseTime||"--"}}),n("van-cell",{attrs:{title:"所属部门:",value:e.caseDetail.accidentReason||"--"}}),n("van-cell",{attrs:{title:"联系人:",value:e.caseDetail.linkPerson||"--"}}),n("van-cell",{attrs:{title:"业务员编号:",value:e.caseDetail.saleAgentNo||"--"}}),n("van-cell",{attrs:{title:"事故描述:",value:e.caseDetail.accidentDes||"--"}})],1)],1)},U=[],N={data:function(){return{caseDetail:{}}},created:function(){this.toqueryWxCaseLog()},methods:Object(v["a"])(Object(v["a"])({},Object(o["b"])(["queryWxCaseLog"])),{},{toqueryWxCaseLog:function(){var e=this,t=window.localStorage.getItem("caseNo")||"";this.queryWxCaseLog({caseNo:t}).then((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};200===t.code?(e.caseDetail=t.data||{},console.log("caseDetail--",e.caseDetail)):e.$notify(t.message||"暂无数据")}))},toCaseDetailPage:function(){this.$router.push("caseDetail")}})},R=N,T=Object(y["a"])(R,F,U,!1,null,null,null),B=T.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"b_g_grey"},[n("van-overlay",{attrs:{show:e.show},on:{click:function(t){e.show=!1}}},[n("van-loading",{staticClass:"lod_box"})],1),n("router-view")],1)},M=[],H={name:"App",components:{},data:function(){return{show:!1}},created:function(){this.show=this.$IsLoadding}},z=H,J=(n("034f"),Object(y["a"])(z,E,M,!1,null,null,null)),V=J.exports,Y=[{path:"/",component:V,redirect:"caseInfo",children:[{name:"caseInfo",path:"/caseInfo",component:S},{name:"userCenter",path:"/userCenter",component:D},{name:"caseList",path:"/caseList",component:$},{name:"caseDetail",path:"/caseDetail",component:B}]}],G=Y,K=new d["a"]({routes:G}),Q=K,X=n("3a34"),Z=n.n(X),ee=d["a"].prototype.push;d["a"].prototype.push=function(e){return ee.call(this,e).catch((function(e){return e}))},r.a.interceptors.request.use((function(e){return a["a"].prototype.$IsLoadding=!0,e}),(function(e){return Promise.reject(e)})),r.a.interceptors.response.use((function(e){if(a["a"].prototype.$IsLoadding=!1,401!=e.data.code&&401!=e.data.status)return e.data;console.log("当前路由地址：",Q.currentRoute.fullPath)}),(function(e){return Promise.reject(e.response)})),a["a"].use(d["a"]),a["a"].use(r.a),a["a"].use(h["a"]),a["a"].use(new Z.a),Q.beforeEach((function(e,t,n){console.log("--router to",e.fullPath),n()})),new a["a"]({router:Q,store:f,render:function(e){return e("router-view")}}).$mount("#app")},"5aea":function(e,t,n){},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.29dc93e5.js.map