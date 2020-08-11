(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{611:function(e,n,t){"use strict";t.r(n);var a={name:"component-exhibition",components:{"firm-demo0":(Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e})({render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("ux-grid",{ref:"plxTable",attrs:{border:"","show-overflow":"","keep-source":"",height:"500",data:e.tableData,highlightCurrentRow:!1,"show-summary":"",summaryMethod:e.summaryMethod,spanMethod:e.rowspanMethod,"edit-config":{trigger:"manual",mode:"row"}}},[t("ux-table-column",{attrs:{type:"checkbox",width:"60"}}),e._v(" "),t("ux-table-column",{attrs:{type:"index",width:"80"}}),e._v(" "),t("ux-table-column",{attrs:{field:"name",title:"名字",width:"140","edit-render":""},scopedSlots:e._u([{key:"edit",fn:function(n){return[t("el-input",{model:{value:n.row.name,callback:function(t){e.$set(n.row,"name",t)},expression:"scope.row.name"}})]}}])}),e._v(" "),t("ux-table-column",{attrs:{field:"age",title:"年龄",width:"160","edit-render":""},scopedSlots:e._u([{key:"header",fn:function(n){var a=n.column;return[t("span",[e._v(e._s(a.title))])]}},{key:"edit",fn:function(n){var a=n.row;return[t("el-input",{staticStyle:{width:"100%"},attrs:{type:"number",placeholder:"请输入内容"},on:{input:function(n){return e.updateFooterEvent(a.age)}},model:{value:a.age,callback:function(n){e.$set(a,"age",n)},expression:"row.age"}})]}}])}),e._v(" "),t("ux-table-column",{attrs:{field:"sex",title:"性别","min-width":"140","edit-render":""},scopedSlots:e._u([{key:"edit",fn:function(n){return[t("el-select",{on:{change:function(t){return e.$refs.plxTable.updateStatus(n)}},model:{value:n.row.sex,callback:function(t){e.$set(n.row,"sex",t)},expression:"scope.row.sex"}},e._l(e.sexList,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)]}},{key:"default",fn:function(n){var t=n.row;return[e._v(e._s(e.getLabel(t.sex)))]}}])}),e._v(" "),t("ux-table-column",{attrs:{title:"操作",width:"200"},scopedSlots:e._u([{key:"default",fn:function(n){var a=n.row;return[e.$refs.plxTable.isActiveByRow(a)?[t("el-button",{attrs:{type:"primary"},on:{click:function(n){return e.saveEvent(a)}}},[e._v("保存")]),e._v(" "),t("el-button",{on:{click:function(n){return e.cancelRowEvent(a)}}},[e._v("取消")])]:[t("el-button",{on:{click:function(n){return e.editRowEvent(a)}}},[e._v("编辑")])]]}}])})],1)]],2)},staticRenderFns:[]},{data:function(){return{tableData:[],columns:[],sexList:[{value:"nan",label:"男"},{value:"nv",label:"女"},{value:"weizhi",label:"未知"}]}},mounted:function(){this.tableData=Array.from({length:10},(function(e,n){return{id:n+1,date:"2016-05-03",name:"张三"+n,sex:"nan",age:18+n}}))},methods:{saveEvent:function(e){var n=this;console.log(this.$refs.plxTable.isUpdateByRow(e)),this.$refs.plxTable.isUpdateByRow(e)?(this.$refs.plxTable.clearActived().then((function(){n.$refs.plxTable.reloadRow(e,null,null)})),this.$message({message:"恭喜你，保存成功",type:"success"})):this.$message({message:"保存失败，你没改变当前行的数据",type:"error"})},getLabel:function(e){var n=this.sexList.filter((function(n){return n.value===e}))[0];return n?n.label:""},editRowEvent:function(e){this.$refs.plxTable.setActiveRow(e)},cancelRowEvent:function(e){var n=this;this.$refs.plxTable.clearActived().then((function(){n.$refs.plxTable.revertData(e)}))},summaryMethod:function(e){var n=e.columns,t=e.data,a=[];return n.forEach((function(e,n){if(0===n)a.push("合计");else{var l=t.map((function(n){return Number(n[e.property])}));l.every((function(e){return isNaN(e)}))?a[n]="":(a[n]=l.reduce((function(e,n){var t=Number(n);return isNaN(t)?e:e+n}),0),a[n]+=" 岁啦，哈哈")}})),[a]},updateFooterEvent:function(e){this.$refs.plxTable.updateFooter()},rowspanMethod:function(e){e.row;var n=e.$rowIndex;if(e.column,e.data,2===e.$columnIndex)return n%2==0?{rowspan:2,colspan:1}:{rowspan:0,colspan:0}}}})}},l=t(34),o=Object(l.a)(a,(function(){var e=this.$createElement,n=this._self._c||e;return n("div",[this._m(0),n("p",[this._v("1.首先在ux-grid上绑定 keep-source属性，edit-config = {trigger: 'manual' // 手动触发，意思就是需要点击按钮调用方法触发， mode: 'row' // 作用点在谁身上 row表示行，cell: 表示单元格}")]),n("p",[this._v("2.通过表尾来实现合计功能，数据发生变化时实时统计，对于某些场景下如果需要频繁计算的可以手动调用 updateFooter 函数(如你去试试年龄那个单元格，加加减减试试看)")]),n("p",[this._v("3.如果你的表格数据量不大呢，你还可以合并列合并行。")]),n("div",[this._m(1),n("template",{slot:"source"},[n("firm-demo0")],1),n("template",{slot:"highlight"},[this._m(2)])],2)])}),[function(){var e=this.$createElement,n=this._self._c||e;return n("h3",{attrs:{id:"shou-dong-hong-fa-bian-ji-biao-ge-biao-ge-shu-ju-shao-suo-yi-yong-data-fang-shi-fu-zhi-biao-ge-shu-ju-zhe-shi-ge-shi-li"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#shou-dong-hong-fa-bian-ji-biao-ge-biao-ge-shu-ju-shao-suo-yi-yong-data-fang-shi-fu-zhi-biao-ge-shu-ju-zhe-shi-ge-shi-li"}},[this._v("¶")]),this._v(" 手动触发编辑表格(表格数据少，所以用data方式赋值表格数据。这是个示例)")])},function(){var e=this.$createElement,n=this._self._c||e;return n("div",[n("p",[this._v("4.设置 keep-source 开启保持原始值状态，对于某些需要局部保存的场景，可以在数据保存完成后调用 reloadRow 方法加载行数据并恢复到初始状态")])])},function(){var e=this.$createElement,n=this._self._c||e;return n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[this._v('  <template>\n   <ux-grid border\n             show-overflow\n             ref="plxTable"\n             keep-source\n             height="500"\n             :data="tableData"\n             :highlightCurrentRow="false"\n             show-summary\n             :summaryMethod="summaryMethod"\n             :spanMethod="rowspanMethod"\n             :edit-config="{trigger: \'manual\', mode: \'row\'}">\n             <ux-table-column type="checkbox" width="60"></ux-table-column>\n             <ux-table-column type="index" width="80"></ux-table-column>\n             <ux-table-column field="name" title="名字" width="140" edit-render>\n               <template v-slot:edit="scope">\n                 <el-input v-model="scope.row.name"></el-input>\n               </template>\n             </ux-table-column>\n             <ux-table-column field="age" title="年龄"  width="160" edit-render>\n               <template v-slot:header="{ column }">\n                 <span>{{ column.title }}</span>\n               </template>\n               <template v-slot:edit="{ row }">\n                  <el-input\n                      v-model="row.age"\n                      type="number"\n                      placeholder="请输入内容"\n                      @input="updateFooterEvent(row.age)"\n                      style="width: 100%"></el-input>\n               </template>\n             </ux-table-column>\n             <ux-table-column field="sex" title="性别" min-width="140" edit-render>\n               <template v-slot:edit="scope">\n                 <el-select v-model="scope.row.sex" @change="$refs.plxTable.updateStatus(scope)">\n                   <el-option v-for="item in sexList" :key="item.value" :label="item.label" :value="item.value"></el-option>\n                 </el-select>\n               </template>\n               <template v-slot="{ row }">{{ getLabel(row.sex) }}</template>\n             </ux-table-column>\n               <ux-table-column title="操作" width="200">\n                 <template v-slot="{ row }">\n                        \x3c!--判断行是否激活了, 编辑按钮执行的方式就是为了去激活--\x3e\n                        <template v-if="$refs.plxTable.isActiveByRow(row)">\n                            <el-button @click="saveEvent(row)" type="primary">保存</el-button>\n                            <el-button @click="cancelRowEvent(row)">取消</el-button>\n                       </template>\n                       <template v-else>\n                           <el-button @click="editRowEvent(row)">编辑</el-button>\n                        </template>\n                 </template>\n               </ux-table-column>\n           </ux-grid>\n  </template>\n\n  <script>\n    export default {\n       data () {\n           return {\n             tableData: [],\n             columns: [],\n             sexList: [\n                { value: \'nan\',label: \'男\' },\n                { value: \'nv\',label: \'女\'},\n                { value: \'weizhi\',label: \'未知\'}\n             ]\n           }\n         },\n       mounted () {\n         // 延迟加载\n         this.tableData = Array.from({ length: 10 }, (_, idx) => ({\n             id: idx + 1,\n             date: \'2016-05-03\',\n             name: \'张三\' + idx,\n             sex: \'nan\',\n             age: 18 + idx\n          }))\n       },\n       methods: {\n          // 点击保存\n          saveEvent(row) {\n            // 判断是否发生改变\n            console.log(this.$refs.plxTable.isUpdateByRow(row))\n            // 你也可以不使用这个判断，我是给示例，没做个性化需求\n            if (this.$refs.plxTable.isUpdateByRow(row)) {\n                  // ...保存相关的逻辑（后端的呀，或者前端的呀）\n                  // 清除表格激活状态\n                  this.$refs.plxTable.clearActived().then(() => {\n                     // 局部保存，并将行数据恢复到初始状态（如果 第二个参数record 为空则不改动行数据，只恢复状态）\n                     // 你不执行这个reloadRow，代表下次进来你上面的这个if还是会执行，不然下次点击保存，还是保存成功哦！状态没改变哦\n                     this.$refs.plxTable.reloadRow(row, null, null)\n                     // 如果，假如你保存了后端给你个当前行的row，那么你需要赋值给表格行呢，你就需要把后端给你的row填到第二个参数位置\n                     // this.$refs.plxTable.reloadRow(row, 后端的row, null)\n                     // 第三个参数呢就是只改变当前行中的call单个单元格。第三个参数是row中的字段名（field属性的值）\n                  })\n                  this.$message({\n                    message: \'恭喜你，保存成功\',\n                    type: \'success\'\n                 });\n            } else {\n               this.$message({\n                  message: \'保存失败，你没改变当前行的数据\',\n                  type: \'error\'\n               });\n            }\n          },\n          // 转换男女\n          getLabel (val) {\n             const item = this.sexList.filter(item => item[\'value\'] === val)[0]\n             return item ? item.label : \'\'\n           },\n          // 点击编辑按钮，激活行状态-> 为编辑状态\n          editRowEvent (row) {\n             this.$refs.plxTable.setActiveRow(row)\n          },\n          // 取消\n          cancelRowEvent (row) {\n            // 清除表格激活状态\n            this.$refs.plxTable.clearActived().then(() => {\n               // 还原行数据\n               this.$refs.plxTable.revertData(row)\n            })\n          },\n          // 合计方法\n          summaryMethod ({ columns, data }) {\n                const means = [] // 合计\n                columns.forEach((column, columnIndex) => {\n                  if (columnIndex === 0) {\n                      means.push(\'合计\')\n                  } else {\n                      const values = data.map(item => Number(item[column.property]));\n                      // 合计\n                      if (!values.every(value => isNaN(value))) {\n                          means[columnIndex] = values.reduce((prev, curr) => {\n                              const value = Number(curr);\n                              if (!isNaN(value)) {\n                                  return prev + curr;\n                              } else {\n                                  return prev;\n                              }\n                          }, 0);\n                          means[columnIndex] += \' 岁啦，哈哈\'\n                      } else {\n                          means[columnIndex] = \'\';\n                      }\n                  }\n              })\n               // 返回一个二维数组的表尾合计\n               return [means]\n           },\n           // 更新合计\n           updateFooterEvent (num) {\n             // 这里执行了updateFooter，然后就自动会去执行你的summaryMethod合计方法啦\n             this.$refs.plxTable.updateFooter()\n           },\n           // 通用行合并函数（将相同多列数据合并为一行）\n           rowspanMethod ({ row, $rowIndex, column, data, $columnIndex }) {\n            if ($columnIndex === 2) {\n              if ($rowIndex % 2 === 0) {\n                return {\n                  rowspan: 2,\n                  colspan: 1\n                };\n              } else {\n                return {\n                  rowspan: 0,\n                  colspan: 0\n                };\n              }\n            }\n          }\n       }\n    }\n  <\/script>\n')])])}],!1,null,null,null);n.default=o.exports}}]);