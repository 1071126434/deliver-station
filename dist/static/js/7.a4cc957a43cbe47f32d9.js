webpackJsonp([7],{aEKa:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("Dd8w"),r=a.n(l),s=a("5jRo"),n=a("SJI6"),i={name:"rechargeList",mixins:[s.a],data:function(){return{dialogVisible:!1,currentPage:1,input:"",input1:"",input2:"",input3:"",value1:"",textarea:"",value3:"",apiUrl:"/api/order/search/getSellerOrderByCondition",options:[{value:"1",label:"圆通"}],value:"",payState:[{value4:"0",label:"未付款"},{value4:"1",label:"已付款"},{value4:"2",label:"任务取消"}],value4:"",orderState:[{value5:"0",label:"未获取运单"},{value5:"1",label:"已获取运单"},{value5:"2",label:"订单取消"}],value5:"",value6:this.$route.query.sellerTaskId||"",tableData:[],sellerOrderIds:[]}},computed:r()({params:function(){return{currPageNo:this.pageNo,limit:this.pageSize,startTime:this.value3?this.value3[0]:null,endTime:this.value3?this.value3[1]:null,logisticsType:this.value,payStatus:this.value4,orderStatus:this.value5,thirdOrderId:this.input2,receiveTelephone:this.input,sellerTaskId:this.value6,logisticsOrderId:this.input1,sellerUserName:this.input3,substationId:this.userInfo.substationId}}},Object(n.mapGetters)(["userInfo"])),methods:{search:function(){this.getList()},setList:function(e){this.tableData=e},handSelect:function(e){for(var t=[],a=0;a<e.length;a++)t.push(e[a].sellerOrderId);this.sellerOrderIds=t},getOrderId:function(){var e=this;if(0===this.sellerOrderIds.length)return this.$message({type:"warning",message:"请至少选择一条数据"}),!1;this.$ajax.post("/api/order/operate/reGetLogisticsOrderIds",{sellerOrderIds:this.sellerOrderIds}).then(function(t){"200"===t.data.code?(e.$message({type:"success",message:"重新获取成功"}),e.getList()):e.$message({type:"warning",message:t.data.message})}).catch(function(e){})}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"rechargeList"},[a("div",{staticClass:"wrap"},[a("h3",[e._v("订单列表")]),e._v(" "),a("ul",[a("li",[e._v("\n        物流平台:\n        "),a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),a("li",[e._v("\n        付款状态:\n        "),a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.value4,callback:function(t){e.value4=t},expression:"value4"}},e._l(e.payState,function(e){return a("el-option",{key:e.value4,attrs:{label:e.label,value:e.value4}})}))],1),e._v(" "),a("li",[e._v("\n        订单状态:\n        "),a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.value5,callback:function(t){e.value5=t},expression:"value5"}},e._l(e.orderState,function(e){return a("el-option",{key:e.value5,attrs:{label:e.label,value:e.value5}})}))],1)]),e._v(" "),a("ul",{staticStyle:{"margin-top":"20px"}},[a("li",[e._v("\n        任务号:    \n        "),a("el-input",{attrs:{placeholder:"请输入编号"},model:{value:e.value6,callback:function(t){e.value6=t},expression:"value6"}})],1),e._v(" "),a("li",[a("span",[e._v("订单号:    ")]),e._v(" "),a("el-input",{attrs:{placeholder:"请输入编号"},model:{value:e.input2,callback:function(t){e.input2=t},expression:"input2"}})],1),e._v(" "),a("li",[a("span",[e._v("收件手机:")]),e._v(" "),a("el-input",{attrs:{placeholder:"请输入编号"},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}})],1)]),e._v(" "),a("ul",{staticClass:"ulTow"},[a("li",[e._v("\n        快递单号:\n        "),a("el-input",{attrs:{placeholder:"请输入编号"},model:{value:e.input1,callback:function(t){e.input1=t},expression:"input1"}})],1),e._v(" "),a("li",[e._v("\n        用户名:    \n        "),a("el-input",{attrs:{placeholder:""},model:{value:e.input3,callback:function(t){e.input3=t},expression:"input3"}})],1),e._v(" "),a("li",[e._v("\n        提交日期:\n        "),a("el-date-picker",{attrs:{type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd",format:"yyyy-MM-dd"},model:{value:e.value3,callback:function(t){e.value3=t},expression:"value3"}})],1),e._v(" "),a("li",[a("button",{staticClass:"BtnDisable",on:{click:e.search}},[e._v("查询")])])]),e._v(" "),a("p",{staticStyle:{"margin-top":"2px","padding-bottom":"5px"}},[a("button",{staticClass:"centerBtn",on:{click:e.getOrderId}},[e._v("重新获取单号")])]),e._v(" "),a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""},on:{"selection-change":e.handSelect}},[a("el-table-column",{attrs:{fixed:"",type:"selection",width:"55",align:"center"},on:{"selection-change":e.chongse}}),e._v(" "),a("el-table-column",{attrs:{prop:"userName",label:"用户名",width:"120",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"gmtCreate",label:"发布日期",width:"150",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"logisticsType",label:"快递公司",width:"120",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return["1"===t.row.logisticsType?a("p",[e._v("圆通")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"shopType",label:"平台",width:"120",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return["1"===t.row.shopType?a("span",[e._v("淘宝")]):e._e(),e._v(" "),"2"===t.row.shopType?a("span",[e._v("天猫")]):e._e(),e._v(" "),"3"===t.row.shopType?a("span",[e._v("京东")]):e._e(),e._v(" "),"4"===t.row.shopType?a("span",[e._v("平多多")]):e._e(),e._v(" "),"5"===t.row.shopType?a("span",[e._v("其它")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"senderName",label:"发货信息",width:"380"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("p",[e._v("发货人姓名:"+e._s(t.row.senderName))]),e._v(" "),a("p",[e._v("发货人电话："+e._s(t.row.senderTelephone))]),e._v(" "),a("p",[e._v("发货人地址："+e._s(t.row.senderProvince+t.row.senderCity+t.row.senderRegion+t.row.senderAddress))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"receiveName",label:"收货信息",width:"380"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("p",[e._v("收货人姓名:"+e._s(t.row.receiveName))]),e._v(" "),a("p",[e._v("收货人电话："+e._s(t.row.receiveTelephone))]),e._v(" "),a("p",[e._v("收货人地址："+e._s(t.row.receiveProvince+t.row.receiveCity+t.row.receiveRegion+t.row.receiveAddress))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"orderInfo",label:"订单信息",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("p",[a("span",[e._v("单价:")]),e._v(e._s(t.row.price||"--")+" 物品质量："+e._s(t.row.weight)+"kg")]),e._v(" "),a("p",[e._v("平台订单号:"+e._s(t.row.thirdOrderId))]),e._v(" "),a("p",[e._v("快递单号:"+e._s(t.row.logisticsOrderId))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"status",align:"center",label:"状态",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return["0"===t.row.payStatus?a("p",[e._v("是否付款： 未付款")]):e._e(),e._v(" "),"1"===t.row.payStatus?a("p",[e._v("商家已付款")]):e._e(),e._v(" "),"1"===t.row.payStatus?a("p",[e._v("站点已付款")]):e._e(),e._v(" "),"2"===t.row.payStatus?a("p",[e._v("任务已撤销")]):e._e(),e._v(" "),"1"===t.row.status?a("p",[e._v("快递单获取成功")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"sellerOrderId",label:"任务号",width:"120",align:"center",fixed:"right"}})],1)],1),e._v(" "),a("div",{staticClass:"pager"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":e.pageSizeArray,"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.pageTotal},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)]),e._v(" "),a("el-dialog",{attrs:{title:"用户充值确认",visible:e.dialogVisible,width:"30%","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("p",[a("span",[e._v("到账日期")]),e._v(" "),a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}})],1),e._v(" "),a("p",{staticClass:"markets"},[a("span",[e._v("备注")]),e._v(" "),a("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入内容"},model:{value:e.textarea,callback:function(t){e.textarea=t},expression:"textarea"}})],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("确 定")])],1)])],1)},staticRenderFns:[]};var u=a("VU/8")(i,o,!1,function(e){a("zCRW")},"data-v-2b8cc520",null);t.default=u.exports},zCRW:function(e,t){}});
//# sourceMappingURL=7.a4cc957a43cbe47f32d9.js.map