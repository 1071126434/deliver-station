webpackJsonp([6],{"4q5x":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l={name:"rechargeList",data:function(){return{dialogVisible:!1,currentPage:1,pageSize:5,input:"",input1:"",value1:"",textarea:"",value3:"",options:[{value:"选项1",label:"黄金糕"},{value:"选项2",label:"双皮奶"},{value:"选项3",label:"蚵仔煎"},{value:"选项4",label:"龙须面"},{value:"选项5",label:"北京烤鸭"}],value:"",payState:[{value4:"选项2",label:"双皮奶"},{value4:"选项3",label:"蚵仔煎"},{value4:"选项4",label:"龙须面"}],value4:"",tableData:[{name:"5454545454",date:"2017-02-01",taskNum:"546546546546",company:"圆通",orderNum:"5",price:"3.00",tasktotalPrice:"15.00",state:"已付款"}]}},methods:{handleClick:function(){this.dialogVisible=!0},handleClickCecal:function(){var e=this;this.$confirm("你确认取消订单么? 请谨慎操作","取消订单",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$message({type:"success",message:"删除成功!"})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})},handleSizeChange:function(e){console.log("每页 "+e+" 条")},handleCurrentChange:function(e){console.log("当前页: "+e)}}},n={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"rechargeList"},[t("div",{staticClass:"wrap"},[t("h3",[e._v("任务列表")]),e._v(" "),t("ul",[t("li",[e._v("\n        物流平台:\n        "),t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}},e._l(e.options,function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),t("li",[e._v("\n        支付状态:\n        "),t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.value4,callback:function(a){e.value4=a},expression:"value4"}},e._l(e.payState,function(e){return t("el-option",{key:e.value4,attrs:{label:e.label,value:e.value4}})}))],1)]),e._v(" "),t("ul",{staticClass:"ulTow"},[t("li",[e._v("\n        任务编号:\n        "),t("el-input",{attrs:{placeholder:"请输入编号"},model:{value:e.input1,callback:function(a){e.input1=a},expression:"input1"}})],1),e._v(" "),t("li",[e._v("\n        提交日期:\n        "),t("el-date-picker",{attrs:{type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd",format:"yyyy-MM-dd"},model:{value:e.value3,callback:function(a){e.value3=a},expression:"value3"}})],1),e._v(" "),e._m(0)]),e._v(" "),t("div",{staticClass:"table"},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},[t("el-table-column",{attrs:{prop:"date",label:"提交日期",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"taskNum",label:"任务编号",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"name",label:"用户名",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"company",label:"快递公司",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"orderNum",label:"订单数",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"price",label:"单价",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"tasktotalPrice",label:"任务总价",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"state",label:"付款状态",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){e.handleClick(a.row)}}},[e._v("查看")])]}}])})],1)],1),e._v(" "),t("div",{staticClass:"pager"},[t("el-pagination",{attrs:{"current-page":e.currentPage4,"page-sizes":[100,200,300,400],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:400},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)]),e._v(" "),t("el-dialog",{attrs:{title:"用户充值确认",visible:e.dialogVisible,width:"30%","before-close":e.handleClose},on:{"update:visible":function(a){e.dialogVisible=a}}},[t("p",[t("span",[e._v("到账日期")]),e._v(" "),t("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.value1,callback:function(a){e.value1=a},expression:"value1"}})],1),e._v(" "),t("p",{staticClass:"markets"},[t("span",[e._v("备注")]),e._v(" "),t("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入内容"},model:{value:e.textarea,callback:function(a){e.textarea=a},expression:"textarea"}})],1),e._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(a){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:function(a){e.dialogVisible=!1}}},[e._v("确 定")])],1)])],1)},staticRenderFns:[function(){var e=this.$createElement,a=this._self._c||e;return a("li",[a("button",{staticClass:"BtnDisable"},[this._v("查询")])])}]};var i=t("VU/8")(l,n,!1,function(e){t("aYmn")},"data-v-618916ce",null);a.default=i.exports},aYmn:function(e,a){}});
//# sourceMappingURL=6.3aa5b4454e6fc2803d85.js.map