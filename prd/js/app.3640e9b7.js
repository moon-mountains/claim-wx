(function(e){function t(t){for(var n,r,i=t[0],c=t[1],l=t[2],f=0,d=[];f<i.length;f++)r=i[f],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,i=1;i<a.length;i++){var c=a[i];0!==s[c]&&(n=!1)}n&&(o.splice(t--,1),e=r(r.s=a[0]))}return e}var n={},s={app:0},o=[];function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("85ec"),s=a.n(n);s.a},"35e8":function(e,t,a){},"4f8d":function(e,t){console.log("---process.env","http://39.100.104.229:8088");var a="http://39.100.104.229:8088";t.api={getWxUserInfo:"".concat(a,"/auth/wx/login"),queryAllSalesman:"".concat(a,"/auth/wx/queryAllSalesman"),saveReportCaseBaseInfo:"".concat(a,"/auth/wx/saveWxCaseBaseInfo"),queryWxCaseStatusList:"".concat(a,"/auth/wx/queryWxCaseStatusList"),queryWxCaseLog:"".concat(a,"/auth/wx/queryWxCaseLog"),queryWxNewCaseStatus:"".concat(a,"/auth/wx/queryWxNewCaseStatus"),verifyCode:"".concat(a,"/auth/code"),deleteWxUserRelation:"".concat(a,"/api/wx/deleteWxUserRelation"),wxUserRelation:"".concat(a,"/api/wx/wxUserRelation"),wxCaseBaseInfoRelation:"".concat(a,"/auth/wx/wxCaseBaseInfoRelation")}},"56d7":function(e,t,a){"use strict";a.r(t);a("d3b7"),a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("5aea");var n=a("2b0e"),s=a("2f62"),o=a("bc3a"),r=a.n(o),i=a("4f8d"),c={state:{userInfo:{openid:""}},mutations:{getWxUserInfo:function(e,t){e.userInfo=t||{}}},actions:{getWxUserInfo:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r()({method:"post",url:i["api"].getWxUserInfo,data:t}).then((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(200===t.code){var a=t.data;console.log("getWxUserInfo-----",a),e.commit("getWxUserInfo",a)}return t})).catch((function(e){console.log("getWxUserInfo----err",e)}))},saveReportCaseBaseInfo:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return console.log("--get--token",e.state.userInfo.token),r()({headers:{Authorization:e.state.userInfo.token||""},method:"post",url:i["api"].saveReportCaseBaseInfo,data:t}).then((function(e){return console.log("saveReportCaseBaseInfo-----",e),e})).catch((function(e){console.log("saveReportCaseBaseInfo----err",e)}))},queryAllSalesman:function(e){return r()({headers:{Authorization:e.state.userInfo.token||""},method:"post",url:i["api"].queryAllSalesman}).then((function(e){return console.log("queryAllSalesman-----",e),e})).catch((function(e){console.log("queryAllSalesman----err",e)}))},queryWxCaseStatusList:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return console.log("queryWxCaseStatusList--get--token",e.state.userInfo.token),r()({headers:{Authorization:e.state.userInfo.token||""},method:"post",url:i["api"].queryWxCaseStatusList,data:t}).then((function(e){return console.log("queryWxCaseStatusList-----",e),e})).catch((function(e){console.log("queryWxCaseStatusList----err",e)}))},queryWxCaseLog:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return console.log("queryWxCaseLog--get--token",e.state.userInfo.token),r()({headers:{Authorization:e.state.userInfo.token||""},method:"post",url:i["api"].queryWxCaseLog,data:t}).then((function(e){return console.log("queryWxCaseLog-----",e),e})).catch((function(e){console.log("queryWxCaseLog----err",e)}))},queryWxNewCaseStatus:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return console.log("queryWxNewCaseStatus--get--token",e.state.userInfo.token),r()({headers:{Authorization:e.state.userInfo.token||""},method:"post",url:i["api"].queryWxNewCaseStatus,data:t}).then((function(e){return console.log("queryWxNewCaseStatus-----",e),e})).catch((function(e){console.log("queryWxNewCaseStatus----err",e)}))},toGetVerifyCode:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r()({method:"get",url:i["api"].verifyCode,data:t}).then((function(e){return e})).catch((function(e){console.log("toGetVerifyCode----err",e)}))},toWxUserRelation:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r()({headers:{Authorization:e.state.userInfo.token||""},method:"post",url:i["api"].wxUserRelation,data:t}).then((function(e){return e})).catch((function(e){console.log("wxUserRelation----err",e)}))},toDeleteWxUserRelation:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r()({headers:{Authorization:e.state.userInfo.token||""},method:"post",url:i["api"].deleteWxUserRelation,data:t}).then((function(e){return e})).catch((function(e){console.log("toDeleteWxUserRelation----err",e)}))},toCaseBaseInfoRelation:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r()({headers:{Authorization:e.state.userInfo.token||""},method:"post",url:i["api"].wxCaseBaseInfoRelation,data:t}).then((function(e){return e})).catch((function(e){console.log("toCaseBaseInfoRelation----err",e)}))}},getters:{}},l=c;n["a"].use(s["a"]);var u=new s["a"].Store({modules:{caseInfo:l}}),f=u,d=a("b970"),h=(a("499a"),a("157a"),a("8c4f")),m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.isShowAll?a("section",[a("van-form",{attrs:{autocomplete:"off"},on:{submit:e.onSubmit}},[a("van-field",{staticClass:"m_1",attrs:{"input-align":"right",name:"业务员",label:"业务员",placeholder:"业务员",rules:[{required:!0,message:"请填写业务员"}]},model:{value:e.caseInfoForm.saleAgentName,callback:function(t){e.$set(e.caseInfoForm,"saleAgentName",t)},expression:"caseInfoForm.saleAgentName"}}),a("van-field",{staticClass:"m_1",attrs:{"input-align":"right",name:"公司名称",label:"公司名称",placeholder:"公司名称",rules:[{required:!0,message:"请填写公司名称"}]},model:{value:e.caseInfoForm.insurePersion,callback:function(t){e.$set(e.caseInfoForm,"insurePersion",t)},expression:"caseInfoForm.insurePersion"}}),a("van-field",{staticClass:"m_1",attrs:{"input-align":"right",name:"联系人",label:"联系人",placeholder:"联系人",rules:[{required:!0,message:"请填写联系人"}]},model:{value:e.caseInfoForm.linkPerson,callback:function(t){e.$set(e.caseInfoForm,"linkPerson",t)},expression:"caseInfoForm.linkPerson"}}),a("van-field",{staticClass:"m_1",attrs:{"input-align":"right",name:"联系人电话",label:"联系人电话",placeholder:"联系人电话",rules:[{required:!0,message:"请填写联系人电话"}]},model:{value:e.caseInfoForm.customerPhone,callback:function(t){e.$set(e.caseInfoForm,"customerPhone",t)},expression:"caseInfoForm.customerPhone"}}),a("van-cell",{attrs:{title:"出险时间","is-link":"",value:e.caseInfoForm.insureHappenTime},on:{click:e.showPopup}}),a("van-popup",{attrs:{position:"bottom"},model:{value:e.showTime,callback:function(t){e.showTime=t},expression:"showTime"}},[a("van-datetime-picker",{attrs:{type:"datetime",title:"选择年月日小时","min-date":e.minDate,"max-date":e.maxDate,loading:e.isLoadingShow,formatter:e.formatter},on:{cancel:function(t){e.showTime=!1},confirm:e.confirmPicker},model:{value:e.currentDate,callback:function(t){e.currentDate=t},expression:"currentDate"}})],1),a("van-field",{staticClass:"m_1",attrs:{"input-align":"right",name:"事故原因",label:"事故原因",placeholder:"事故原因",rules:[{required:!0,message:"请填写事故原因"}]},model:{value:e.caseInfoForm.accidentReason,callback:function(t){e.$set(e.caseInfoForm,"accidentReason",t)},expression:"caseInfoForm.accidentReason"}}),a("van-field",{staticClass:"m_1",attrs:{"input-align":"right",name:"事故经过",label:"事故经过",placeholder:"事故经过"},model:{value:e.caseInfoForm.accidentDes,callback:function(t){e.$set(e.caseInfoForm,"accidentDes",t)},expression:"caseInfoForm.accidentDes"}}),a("van-action-sheet",{attrs:{round:!1,actions:e.renderPopList},on:{select:e.selectReason},model:{value:e.isShowSelection,callback:function(t){e.isShowSelection=t},expression:"isShowSelection"}}),a("div",{staticClass:"m_16"},[a("van-button",{attrs:{block:"",type:"primary","native-type":"submit"}},[e._v("提交")])],1)],1)],1):e._e()},v=[],p=(a("99af"),a("4160"),a("b0c0"),a("159b"),a("5530")),g={className:"b_g_g"},b=(a("c975"),a("ac1f"),a("841c"),a("1276"),function(e){var t=decodeURIComponent(location.search),a=new Object;if(-1!=t.indexOf("?"))for(var n=t.substr(1),s=n.split("&"),o=0;o<s.length;o++)a[s[o].split("=")[0]]=unescape(s[o].split("=")[1]);return Object.assign(a,e),a?a.code:""}),_={data:function(){return{typeFlag:"",isShowAll:!1,showTime:!1,isShowSelection:!1,isLoadingShow:!1,minDate:new Date(2020,0,1),maxDate:new Date(2050,11,30),currentDate:new Date,caseInfoForm:{openid:"",saleAgentNo:"",caseInfoStatus:"0",saleAgentName:"",insurePersion:"",linkPerson:"",customerPhone:"",insureHappenTime:"",accidentReason:"",accidentDes:""},renderPopList:[],reasonList:[{name:"车泡水",className:g.className},{name:"车晒爆了",className:g.className}]}},created:function(){this.isShowAll=!1,this.getCode()},computed:Object(p["a"])({},Object(s["c"])({userInfo:function(e){return e.caseInfo.userInfo||{}}})),methods:Object(p["a"])(Object(p["a"])({},Object(s["b"])(["saveReportCaseBaseInfo","getWxUserInfo","queryAllSalesman"])),{},{getqueryAllSalesman:function(){var e=this;this.queryAllSalesman().then((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(200===t.code){var a=t.data;e.renderPopList=a,e.renderPopList.forEach((function(e){e.name=e.nickName})),e.isShowSelection=!0}else e.$notify(t.message||"暂无信息")}))},getCode:function(){if(this.userInfo.nickname)return this.wxUserInfo=this.userInfo,void(this.isShowAll=!0);var e=b(this.$route.query)||"";this.getOpenId(e)},getOpenId:function(e){var t=this;console.log("code---",e),this.getWxUserInfo({code:e}).then((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(200===e.code){console.log("getWxUserInfo---200",e);var a=e.data;if(!a.nickname)return void t.$notify("未授权成功，请重新进入");t.wxUserInfo=a,console.log("--token",a.token),window.sessionStorage.setItem("token",a.token||""),t.isShowAll=!0}else t.$notify("请重新进入")}))},showPopup:function(){var e=this;this.showTime=!0,this.isLoadingShow=!0,setTimeout((function(){e.isLoadingShow=!1}),500)},confirmPicker:function(e){var t=e.getFullYear(),a=e.getMonth()+1,n=e.getDate(),s=e.getHours(),o=e.getMinutes(),r=e.getSeconds();a>=1&&a<=9&&(a="0".concat(a)),n>=1&&n<=9&&(n="0".concat(n)),s>=0&&s<=9&&(s="0".concat(s)),o>=0&&o<=9&&(o="0".concat(o)),r>=0&&r<=9&&(r="0".concat(r)),this.caseInfoForm.insureHappenTime="".concat(t,"-").concat(a,"-").concat(n," ").concat(s,":").concat(o,":").concat(r),this.showTime=!1},formatter:function(e,t){return"year"===e?"".concat(t,"年"):"month"===e?"".concat(t,"月"):"day"===e?"".concat(t,"日"):"hour"===e?"".concat(t,"时"):t},selectReason:function(e){switch(this.typeFlag){case 1:this.caseInfoForm.saleAgentNo=e.userId,this.caseInfoForm.saleAgentName=e.name;break;case 2:this.caseInfoForm.accidentReason=e.name;break}this.isShowSelection=!1},onSubmit:function(){var e=this;console.log("onSubmit-----",this.caseInfoForm),this.saveReportCaseBaseInfo(this.caseInfoForm).then((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};console.log("saveReportCaseBaseInfo-----",t),200===t.code&&e.$router.push("userCenter"),"-2"==t.code?e.$notify(t.message||"请填写正确的业务员"):e.$notify(t.message||"提交失败了")}))},showPop:function(e){switch(e){case 1:this.typeFlag=e,this.getqueryAllSalesman();break;case 2:this.typeFlag=e,this.renderPopList=this.reasonList,this.isShowSelection=!0;break}}})},w=_,x=a("2877"),C=Object(x["a"])(w,m,v,!1,null,null,null),y=C.exports,S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.isShowAll?a("section",[a("van-nav-bar",{attrs:{title:"个人中心"}}),a("van-row",{staticClass:"m_t_1 b_g_white"},[a("van-col",{staticClass:"h_15",attrs:{span:"6"}},[e.wxUserInfo.headimgurl?a("div",{staticClass:"head_b_img_box"},[a("div",{staticClass:"head_borer"},[a("img",{staticClass:"head_b_img",attrs:{src:e.wxUserInfo.headimgurl}})])]):e._e()]),a("van-col",{staticClass:"h_15",attrs:{span:"18"}},[a("div",[e._v("用户"+e._s(e.wxUserInfo.nickname||"sddgfdfsg"))])])],1),a("van-row",{staticClass:"m_t_1 b_g_white"},[a("van-col",{attrs:{span:"6"}},[e.wxUserInfo.headimgurl?a("div",{staticClass:"head_b_img_b"},[a("div",{staticClass:"head_b"},[a("van-icon",{attrs:{name:"orders-o",size:"0.6rem"}})],1)]):e._e()]),a("van-col",{attrs:{span:"18"}},[a("div",{staticClass:"my_case",on:{click:e.toCaseListPage}},[a("div",[e._v("我的案件")]),a("van-icon",{attrs:{name:"arrow",size:".4rem",color:"#7c7c7d"}})],1)])],1),a("van-row",{staticClass:"m_t_1 b_g_white"},[a("van-col",{attrs:{span:"6"}},[e.wxUserInfo.headimgurl?a("div",{staticClass:"head_b_img_b"},[a("div",{staticClass:"head_b"},[a("van-icon",{attrs:{name:"records",size:"0.6rem"}})],1)]):e._e()]),a("van-col",{attrs:{span:"18"}},[a("div",{staticClass:"my_case",on:{click:e.toCaseRelationPage}},[a("div",[e._v("案件转接")]),a("van-icon",{attrs:{name:"arrow",size:".4rem",color:"#7c7c7d"}})],1)])],1),a("van-row",{staticClass:"m_t_1 b_g_white"},[a("van-col",{attrs:{span:"6"}},[e.wxUserInfo.headimgurl?a("div",{staticClass:"head_b_img_b"},[a("div",{staticClass:"head_b"},[a("van-icon",{attrs:{name:"manager-o",size:"0.6rem"}})],1)]):e._e()]),a("van-col",{attrs:{span:"18"}},[a("div",{staticClass:"my_case",on:{click:e.toUserRelationPage}},[a("div",[e._v("账号绑定")]),a("van-icon",{attrs:{name:"arrow",size:".4rem",color:"#7c7c7d"}})],1)])],1)],1):e._e()},I=[],k={data:function(){return{isShowAll:!1,avatarUrl:"",wxUserInfo:{}}},created:function(){this.getCode()},computed:Object(p["a"])({},Object(s["c"])({userInfo:function(e){return e.caseInfo.userInfo||{}}})),methods:Object(p["a"])(Object(p["a"])({},Object(s["b"])(["getWxUserInfo"])),{},{getCode:function(){if(this.userInfo.nickname)return this.wxUserInfo=this.userInfo,void(this.isShowAll=!0);var e=b(this.$route.query)||"";this.getOpenId(e)},getOpenId:function(e){var t=this;console.log("code---",e),this.getWxUserInfo({code:e}).then((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(200===e.code){console.log("getWxUserInfo---200",e);var a=e.data;if(!a.nickname)return void t.$notify("未授权成功，请重新进入");t.wxUserInfo=a||{},t.isShowAll=!0}else t.$notify("请重新进入")}))},toCaseListPage:function(){this.$router.push("caseList")},toCaseRelationPage:function(){this.$router.push("caseRelation")},toUserRelationPage:function(){this.$router.push("userRelation")}})},L=k,R=(a("975d"),Object(x["a"])(L,S,I,!1,null,"6f13e192",null)),W=R.exports,q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("van-nav-bar",{attrs:{title:"案件列表","left-arrow":""},on:{"click-left":e.onClickLeft}}),e._l(e.caseList,(function(t,n){return a("van-row",{key:n,staticClass:"m_t_2 b_g_white"},[a("van-col",[a("div",{staticClass:"h_117 f_4 m_l_5"},[e._v("案件号:"+e._s(t.caseNo))]),a("div",{staticClass:"h_60 f_3 m_l_5"},[e._v("报案时间:"+e._s(t.reportCaseTime))]),a("div",{staticClass:"h_60 f_3 m_l_5"},[e._v("公司名称:"+e._s(t.insurePersion))]),a("div",{staticClass:"h_60 f_3 m_l_5"},[e._v("事故原因:"+e._s(t.accidentReason))])]),a("van-col",{attrs:{span:24}},[a("van-cell",{attrs:{title:"状态:",value:e._f("translateStatus")(t.caseStatus),"is-link":""},on:{click:function(a){return e.toCaseDetailPage(t)}}})],1)],1)}))],2)},U=[],O=(a("caad"),{data:function(){return{caseList:[]}},filters:{translateStatus:function(e){var t=["01","02","03","04","05","06","07"],a=["08","09","10"];return t.includes(e)?"处理中":a.includes(e)?"已完成":"待处理"}},created:function(){this.getqueryWxCaseStatusList()},methods:Object(p["a"])(Object(p["a"])({},Object(s["b"])(["queryWxCaseStatusList"])),{},{getqueryWxCaseStatusList:function(){var e=this;this.queryWxCaseStatusList().then((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};200===t.code?e.caseList=t.data||[]:e.$notify(t.message||"暂无数据")}))},toCaseDetailPage:function(e){window.localStorage.setItem("caseNo",e.caseNo||""),this.$router.push("caseDetail")},onClickLeft:function(){this.$router.go(-1)}})}),$=O,F=Object(x["a"])($,q,U,!1,null,null,null),j=F.exports,N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("van-nav-bar",{attrs:{title:"案件详情","left-arrow":""},on:{"click-left":e.onClickLeft}}),a("van-steps",{staticStyle:{"font-size":".2rem"},attrs:{active:e.sureActiv,direction:"vertical"}},e._l(e.renderStepList,(function(t,n){return a("van-step",{key:n},[e._v(e._s(t.text))])})),1),a("van-divider",{staticClass:"h_117 b_g_white",staticStyle:{margin:".13rem 0"},attrs:{"content-position":"left"}},[e._v("案件处理日志")]),e._l(e.caseDetailList,(function(e,t){return a("van-cell-group",{key:t,staticStyle:{"margin-top":".1rem"}},[a("van-cell",{attrs:{"value-class":"over_f_unset",title:"案件号码:",value:e.caseNo||"--"}}),a("van-cell",{attrs:{"value-class":"over_f_unset",title:"报案时间:",value:e.reportCaseTime||"--"}}),a("van-cell",{attrs:{"value-class":"over_f_unset",title:"日志日期:",value:e.caseLogDate||"--"}}),a("van-cell",{attrs:{"value-class":"over_f_unset",title:"日志描述:",value:e.caseLogRemarks||"--"}}),a("van-cell",{attrs:{"value-class":"over_f_unset",title:"操作人员:",value:e.operationName||"--"}})],1)}))],2)},P=[],A={data:function(){return{caseDetailList:[],caseStatus:"0",endStepLineList:[[{caseStatus:"08",lineClass:"l_dis",text:"结案"}],[{caseStatus:"09",lineClass:"l_dis",text:"拒赔"}],[{caseStatus:"10",lineClass:"l_dis",text:"销案"}]],stepLineList:[{caseStatus:"0",lineClass:"l_dis",text:"案件待处理"},{caseStatus:"01",lineClass:"l_dis",text:"案件信息补充"},{caseStatus:"02",lineClass:"l_dis",text:"现场指导客户"},{caseStatus:"03",lineClass:"l_dis",text:"收集资料中"},{caseStatus:"04",lineClass:"l_dis",text:"收集资料待审核"},{caseStatus:"05",lineClass:"l_dis",text:"待定损"},{caseStatus:"06",lineClass:"l_dis",text:"定损"},{caseStatus:"07",lineClass:"l_dis",text:"结案待审核"}],renderStepList:[],allCaseStatusList:[],caseNo:window.localStorage.getItem("caseNo")||""}},created:function(){this.toqueryWxCaseLog(),this.toqueryWxNewCaseStatus(),this.renderline()},computed:{sureActiv:function(){for(var e=0,t=0;t<this.renderStepList.length;t++)if(this.renderStepList[t].caseStatus===this.caseStatus){e=t;break}return e}},methods:Object(p["a"])(Object(p["a"])({},Object(s["b"])(["queryWxCaseLog","queryWxNewCaseStatus"])),{},{toqueryWxCaseLog:function(){var e=this;this.queryWxCaseLog({caseNo:this.caseNo}).then((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};200===t.code?(e.caseDetailList=t.data||{},console.log("caseDetailList--",e.caseDetailList)):e.$notify(t.message||"暂无数据")}))},toqueryWxNewCaseStatus:function(){var e=this;this.queryWxNewCaseStatus({caseNo:this.caseNo}).then((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(200===t.code){var a=t.data;e.caseStatus=a.caseStatus||"",e.renderline()}}))},renderline:function(){switch(this.caseStatus){case"08":this.stepLineList.push(this.endStepLineList[0][0]);break;case"09":this.stepLineList.push(this.endStepLineList[1][0]);break;case"10":this.stepLineList.push(this.endStepLineList[2][0]);break}this.renderStepList=this.stepLineList},translateStatus:function(e){var t="";return this.renderStepList.forEach((function(a){a.caseStatus===e&&(t=a.text)})),t},onClickLeft:function(){this.$router.go(-1)}})},D=A,B=Object(x["a"])(D,N,P,!1,null,null,null),z=B.exports,T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("van-nav-bar",{attrs:{title:"案件绑定","left-arrow":""},on:{"click-left":e.onClickLeft}}),a("van-form",{on:{submit:e.toCaseInfoRelation}},[a("van-field",{attrs:{name:"案件号",label:"案件号",placeholder:"案件号",rules:[{required:!0,message:"请填写案件号"}]},model:{value:e.caseNo,callback:function(t){e.caseNo=t},expression:"caseNo"}}),a("div",{staticStyle:{margin:"16px"}},[a("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[e._v("绑定")])],1)],1)],1)},E=[],V={data:function(){return{caseNo:""}},methods:Object(p["a"])(Object(p["a"])({},Object(s["b"])(["toCaseBaseInfoRelation"])),{},{toCaseInfoRelation:function(){var e=this;this.toCaseBaseInfoRelation({caseNo:this.caseNo}).then((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};200===t.code?e.$notify({type:"success",message:t.message}):e.$notify(t.message||"绑定失败")}))},onClickLeft:function(){this.$router.go(-1)}})},M=V,G=Object(x["a"])(M,T,E,!1,null,null,null),H=G.exports,J=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("van-nav-bar",{attrs:{title:"用户绑定","left-arrow":""},on:{"click-left":e.onClickLeft}}),a("van-grid",{attrs:{clickable:"","column-num":2}},[a("van-grid-item",{attrs:{icon:"add-o",text:"添加绑定",to:"/addUserRelation"}}),a("van-grid-item",{attrs:{icon:"close",text:"取消绑定",to:"/deleteUserRelation"}})],1),a("van-notice-bar",{attrs:{background:"#ecf9ff","left-icon":"info-o",wrapable:"true"}},[e._v(" 一个微信号只能绑定一个理赔账号，如需变更，先取消绑定再添加 ")])],1)},Y=[],K={data:function(){return{}},methods:{onClickLeft:function(){this.$router.go(-1)}}},Q=K,X=Object(x["a"])(Q,J,Y,!1,null,null,null),Z=X.exports,ee=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("van-nav-bar",{attrs:{title:"添加绑定","left-arrow":""},on:{"click-left":e.onClickLeft}}),a("van-form",{on:{submit:e.wxUserRelation}},[a("van-field",{attrs:{name:"用户名",label:"用户名",placeholder:"用户名",rules:[{required:!0,message:"请填写用户名"}]},model:{value:e.relationForm.username,callback:function(t){e.$set(e.relationForm,"username",t)},expression:"relationForm.username"}}),a("van-field",{attrs:{type:"password",name:"密码",label:"密码",placeholder:"密码",rules:[{required:!0,message:"请填写密码"}]},model:{value:e.relationForm.password,callback:function(t){e.$set(e.relationForm,"password",t)},expression:"relationForm.password"}}),a("van-field",{attrs:{name:"验证码",label:"验证码",placeholder:"验证码",rules:[{required:!0,message:"请填写验证码"}]},model:{value:e.relationForm.code,callback:function(t){e.$set(e.relationForm,"code",t)},expression:"relationForm.code"}},[a("div",{attrs:{slot:"button"},slot:"button"},[a("img",{attrs:{src:e.verifyCode},on:{click:e.getVerifyCode}})])]),a("van-field",{directives:[{name:"show",rawName:"v-show",value:e.showUuid,expression:"showUuid"}],model:{value:e.relationForm.uuid,callback:function(t){e.$set(e.relationForm,"uuid",t)},expression:"relationForm.uuid"}}),a("div",{staticStyle:{margin:"16px"}},[a("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[e._v("绑定")])],1)],1)],1)},te=[],ae={data:function(){return{verifyCode:"",relationForm:{username:"",password:"",code:"",uuid:""},showUuid:!1}},created:function(){this.getVerifyCode()},methods:Object(p["a"])(Object(p["a"])({},Object(s["b"])(["toGetVerifyCode","toWxUserRelation"])),{},{getVerifyCode:function(){var e=this;this.toGetVerifyCode().then((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(200===t.code){var a=t.data;e.verifyCode=a.img,e.relationForm.uuid=a.uuid}}))},wxUserRelation:function(){var e=this;this.toWxUserRelation(this.relationForm).then((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};200===t.code?e.$notify({type:"success",message:t.message}):e.$notify(t.message||"绑定失败")}))},onClickLeft:function(){this.$router.go(-1)}})},ne=ae,se=Object(x["a"])(ne,ee,te,!1,null,null,null),oe=se.exports,re=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("van-nav-bar",{attrs:{title:"取消绑定","left-arrow":""},on:{"click-left":e.onClickLeft}}),a("van-form",{on:{submit:e.wxDeleteUserRelation}},[a("van-field",{attrs:{type:"password",name:"密码",label:"密码",placeholder:"请输入账号密码",rules:[{required:!0,message:"请填写密码"}]},model:{value:e.deleteRelationForm.password,callback:function(t){e.$set(e.deleteRelationForm,"password",t)},expression:"deleteRelationForm.password"}}),a("div",{staticStyle:{margin:"16px"}},[a("van-button",{attrs:{round:"",block:"",type:"danger","native-type":"submit"}},[e._v("解除绑定")])],1)],1)],1)},ie=[],ce={data:function(){return{verifyCode:"",deleteRelationForm:{password:""},showUuid:!1}},methods:Object(p["a"])(Object(p["a"])({},Object(s["b"])(["toDeleteWxUserRelation"])),{},{wxDeleteUserRelation:function(){var e=this;this.toDeleteWxUserRelation(this.deleteRelationForm).then((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};200===t.code?e.$notify({type:"success",message:t.message}):e.$notify(t.message||"取消绑定失败")}))},onClickLeft:function(){this.$router.go(-1)}})},le=ce,ue=Object(x["a"])(le,re,ie,!1,null,null,null),fe=ue.exports,de=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"b_g_grey"},[a("van-overlay",{attrs:{show:e.show},on:{click:function(t){e.show=!1}}},[a("van-loading",{staticClass:"lod_box"})],1),a("router-view")],1)},he=[],me={name:"App",components:{},data:function(){return{show:!1}},created:function(){this.show=this.$IsLoadding}},ve=me,pe=(a("034f"),Object(x["a"])(ve,de,he,!1,null,null,null)),ge=pe.exports,be=[{path:"/",component:ge,redirect:"caseInfo",children:[{name:"caseInfo",path:"/caseInfo",component:y},{name:"userCenter",path:"/userCenter",component:W},{name:"caseList",path:"/caseList",component:j},{name:"caseDetail",path:"/caseDetail",component:z},{name:"caseRelation",path:"/caseRelation",component:H},{name:"userRelation",path:"/userRelation",component:Z},{name:"addUserRelation",path:"/addUserRelation",component:oe},{name:"deleteUserRelation",path:"/deleteUserRelation",component:fe}]}],_e=be,we=new h["a"]({routes:_e}),xe=we,Ce=h["a"].prototype.push;h["a"].prototype.push=function(e){return Ce.call(this,e).catch((function(e){return e}))},r.a.interceptors.request.use((function(e){return n["a"].prototype.$IsLoadding=!0,e}),(function(e){return Promise.reject(e)})),r.a.interceptors.response.use((function(e){if(n["a"].prototype.$IsLoadding=!1,401!=e.data.code&&401!=e.data.status)return e.data;console.log("当前路由地址：",xe.currentRoute.fullPath)}),(function(e){return Promise.reject(e.response)})),n["a"].use(h["a"]),n["a"].use(r.a),n["a"].use(d["a"]),xe.beforeEach((function(e,t,a){console.log("--router to",e.fullPath),a()})),new n["a"]({router:xe,store:f,render:function(e){return e("router-view")}}).$mount("#app")},"5aea":function(e,t,a){},"85ec":function(e,t,a){},"975d":function(e,t,a){"use strict";var n=a("35e8"),s=a.n(n);s.a}});
//# sourceMappingURL=app.3640e9b7.js.map