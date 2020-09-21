(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["timesheet"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Timesheet.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Timesheet.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_plain_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-plain-pagination */ "./node_modules/vue-plain-pagination/dist/vue-plain-pagination.umd.min.js");
/* harmony import */ var vue_plain_pagination__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_plain_pagination__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Timesheet",
  components: {
    vPagination: vue_plain_pagination__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  data: function data() {
    return {
      name: 'Nguyen Hong Nhung',
      leader: 'Duong Ngoc Son',
      TimeSheet: [{
        id: '1',
        day: '01/09/2020',
        currentPage: 1,
        task: ['ASY-10  Display timesheet list', 'ASY-10  Display timesheet list'],
        status: 'close'
      }, {
        id: '2',
        day: '01/09/2020',
        task: ['ASY-10  Display timesheet list', 'ASY-10  Display timesheet list'],
        status: 'close'
      }, {
        id: '3',
        day: '01/09/2020',
        task: ['ASY-10  Display timesheet list', 'ASY-10  Display timesheet list'],
        status: 'close'
      }, {
        id: '4',
        day: '01/09/2020',
        task: ['ASY-10  Display timesheet list', 'ASY-10  Display timesheet list'],
        status: 'close'
      }, {
        id: '5',
        day: '01/09/2020',
        task: ['ASY-10  Display timesheet list', 'ASY-10  Display timesheet list'],
        status: 'close'
      }]
    };
  },
  methods: {
    changePage: function changePage(pageNum) {
      if (pageNum === undefined) {
        this.pageNumber = 0;
      }

      this.pageNumber = pageNum - 1;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Timesheet.vue?vue&type=style&index=0&id=49fb7279&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Timesheet.vue?vue&type=style&index=0&id=49fb7279&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.title[data-v-49fb7279] {\r\n    float:left;\r\n    color: #ffff;\n}\n.option[data-v-49fb7279] {\r\n    color: black;\n}\n.custom-select[data-v-49fb7279] {\r\n    width: 85px;\n}\n.name[data-v-49fb7279] {\r\n    margin-left: -66%;\n}\n.leader[data-v-49fb7279] {\r\n    margin-left: 47%;\r\n    margin-top:-2.5%;\n}\nhr[data-v-49fb7279] {\r\n    border: 1px solid gray;\r\n    width: 60%;\r\n    margin-bottom: 2%;\n}\n.edit[data-v-49fb7279] {\r\n    margin-bottom: -5%;\r\n    margin-left: 70%;\n}\n.fa-trash[data-v-49fb7279] {\r\n    margin-left: 5px;\r\n    margin-right: 5px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Timesheet.vue?vue&type=style&index=0&id=49fb7279&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Timesheet.vue?vue&type=style&index=0&id=49fb7279&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Timesheet.vue?vue&type=style&index=0&id=49fb7279&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Timesheet.vue?vue&type=style&index=0&id=49fb7279&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Timesheet.vue?vue&type=template&id=49fb7279&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Timesheet.vue?vue&type=template&id=49fb7279&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "form",
    {
      staticClass: "text-center border border-light p-5",
      attrs: { action: "#!" }
    },
    [
      _c("div", [
        _c("h3", { staticClass: "title" }, [_vm._v("TimeSheet")]),
        _vm._v(" "),
        _vm._m(0),
        _vm._v(" "),
        _c("div", [
          _c("h4", { staticClass: "name" }, [
            _vm._v("Wellcome " + _vm._s(_vm.name))
          ]),
          _vm._v(" "),
          _c("h4", { staticClass: "leader" }, [
            _vm._v("Leader: " + _vm._s(_vm.leader))
          ])
        ]),
        _vm._v(" "),
        _c("hr")
      ]),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c(
        "table",
        {
          staticClass: "table border border-light",
          staticStyle: { width: "80%", "margin-left": "8%", "margin-top": "5%" }
        },
        [
          _vm._m(2),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.TimeSheet, function(time) {
              return _c("tr", { key: time.index }, [
                _c("th", { attrs: { scope: "row" } }, [
                  _c("div", { staticClass: "custom-control custom-checkbox" }, [
                    _c("input", {
                      staticClass: "custom-control-input",
                      attrs: { type: "checkbox", id: time.id }
                    }),
                    _vm._v(" "),
                    _c("label", {
                      staticClass: "custom-control-label",
                      attrs: { for: time.id }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(time.day))]),
                _vm._v(" "),
                _c(
                  "td",
                  _vm._l(time.task, function(task) {
                    return _c("li", { key: task.index }, [_vm._v(_vm._s(task))])
                  }),
                  0
                ),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(time.status))])
              ])
            }),
            0
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticStyle: { float: "right" } },
        [
          _c("v-pagination", {
            attrs: { "page-count": 3 },
            model: {
              value: _vm.currentPage,
              callback: function($$v) {
                _vm.currentPage = $$v
              },
              expression: "currentPage"
            }
          })
        ],
        1
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "input-group input-group-prepend",
        staticStyle: { width: "300px", "margin-left": "1200px" }
      },
      [
        _c("div", { staticStyle: { width: "85px" } }, [
          _c(
            "select",
            {
              staticClass: "custom-select",
              attrs: { id: "inputGroupSelect01" }
            },
            [
              _c("option", { staticClass: "option", attrs: { selected: "" } }, [
                _vm._v("Day")
              ]),
              _vm._v(" "),
              _c("option", { staticClass: "option", attrs: { value: "1" } }, [
                _vm._v("Week")
              ]),
              _vm._v(" "),
              _c("option", { staticClass: "option", attrs: { value: "2" } }, [
                _vm._v("Month")
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c("input", {
          staticClass: "form-control mb-3",
          attrs: {
            type: "date",
            "aria-label": "Text input with dropdown button"
          }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "edit" }, [
      _c("i", { staticClass: "fas fa-edit" }),
      _vm._v(" "),
      _c("i", { staticClass: "fas fa-trash" }),
      _vm._v(" "),
      _c("i", { staticClass: "fas fa-plus" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticStyle: { width: "30px" } }, [
          _c("div", { staticClass: "custom-control custom-checkbox" }, [
            _c("input", {
              staticClass: "custom-control-input",
              attrs: { type: "checkbox", id: "Check1" }
            }),
            _vm._v(" "),
            _c("label", {
              staticClass: "custom-control-label",
              attrs: { for: "Check1" }
            })
          ])
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "300px" } }, [_vm._v("Working Day")]),
        _vm._v(" "),
        _c("th", [_vm._v("Task")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "100px" } }, [_vm._v("Status")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Timesheet.vue":
/*!******************************************!*\
  !*** ./resources/js/pages/Timesheet.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Timesheet_vue_vue_type_template_id_49fb7279_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Timesheet.vue?vue&type=template&id=49fb7279&scoped=true& */ "./resources/js/pages/Timesheet.vue?vue&type=template&id=49fb7279&scoped=true&");
/* harmony import */ var _Timesheet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Timesheet.vue?vue&type=script&lang=js& */ "./resources/js/pages/Timesheet.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Timesheet_vue_vue_type_style_index_0_id_49fb7279_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Timesheet.vue?vue&type=style&index=0&id=49fb7279&scoped=true&lang=css& */ "./resources/js/pages/Timesheet.vue?vue&type=style&index=0&id=49fb7279&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Timesheet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Timesheet_vue_vue_type_template_id_49fb7279_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Timesheet_vue_vue_type_template_id_49fb7279_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "49fb7279",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Timesheet.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Timesheet.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/pages/Timesheet.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Timesheet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Timesheet.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Timesheet.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Timesheet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Timesheet.vue?vue&type=style&index=0&id=49fb7279&scoped=true&lang=css&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/pages/Timesheet.vue?vue&type=style&index=0&id=49fb7279&scoped=true&lang=css& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Timesheet_vue_vue_type_style_index_0_id_49fb7279_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Timesheet.vue?vue&type=style&index=0&id=49fb7279&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Timesheet.vue?vue&type=style&index=0&id=49fb7279&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Timesheet_vue_vue_type_style_index_0_id_49fb7279_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Timesheet_vue_vue_type_style_index_0_id_49fb7279_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Timesheet_vue_vue_type_style_index_0_id_49fb7279_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Timesheet_vue_vue_type_style_index_0_id_49fb7279_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Timesheet_vue_vue_type_style_index_0_id_49fb7279_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/pages/Timesheet.vue?vue&type=template&id=49fb7279&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./resources/js/pages/Timesheet.vue?vue&type=template&id=49fb7279&scoped=true& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Timesheet_vue_vue_type_template_id_49fb7279_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Timesheet.vue?vue&type=template&id=49fb7279&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Timesheet.vue?vue&type=template&id=49fb7279&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Timesheet_vue_vue_type_template_id_49fb7279_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Timesheet_vue_vue_type_template_id_49fb7279_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);