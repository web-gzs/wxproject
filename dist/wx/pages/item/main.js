require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([6],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_74ca3734_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(112);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(110)
}
var normalizeComponent = __webpack_require__(23)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-74ca3734"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_74ca3734_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\item\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-74ca3734", Component.options)
  } else {
    hotAPI.reload("data-v-74ca3734", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 110:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_douban_js__ = __webpack_require__(52);
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


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      title: '加载中',
      detail: {}
    };
  },


  components: {},

  methods: {},

  mounted: function mounted() {
    var _this = this;

    Object(__WEBPACK_IMPORTED_MODULE_0__utils_douban_js__["a" /* default */])({
      url: '/v2/movie/subject/' + this.$root.$mp.query.id,
      navLoading: true
    }).then(function (res) {
      if (res.data.msg) {
        console.log('detail ID有误');
        return;
      }
      _this.detail = res.data;
      _this.title = res.data.title;
      /*  this.setData({
         detail: res.data,
         title: res.data.title
       }); */
      global.mpvue.setNavigationBarTitle({ title: _this.title + ' « 电影 « 豆瓣' }); //加载完了修改
      console.log(_this.detail);
    });
  }
});

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('img', {
    staticClass: "background",
    attrs: {
      "src": _vm.detail.images && _vm.detail.images.large,
      "mode": "aspectFill"
    }
  }), _vm._v(" "), _c('div', [_c('div', {
    staticClass: "meta"
  }, [_c('img', {
    staticClass: "poster",
    attrs: {
      "src": _vm.detail.images && _vm.detail.images.large,
      "mode": "aspectFit"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.detail.title) + "(" + _vm._s(_vm.detail.year) + ")")]), _vm._v(" "), _c('span', {
    staticClass: "info"
  }, [_vm._v("评分：" + _vm._s(_vm.detail.rating && _vm.detail.rating.average))]), _vm._v(" "), _c('span', {
    staticClass: "info"
  }, [_vm._v("导演："), _vm._l((_vm.detail.directors), function(item, index) {
    return _c('block', {
      key: item.id
    }, [_vm._v(" " + _vm._s(item.name) + " ")])
  })], 2), _vm._v(" "), _c('span', {
    staticClass: "info"
  }, [_vm._v("主演："), _vm._l((_vm.detail.casts), function(item, index) {
    return _c('block', {
      key: item.id
    }, [_vm._v(" " + _vm._s(item.name) + " ")])
  })], 2)]), _vm._v(" "), _c('div', {
    staticClass: "summary"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("摘要：")]), _vm._v(" "), _c('span', {
    staticClass: "content"
  }, [_vm._v(_vm._s(_vm.detail.summary))])])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-74ca3734", esExports)
  }
}

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(109);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ })

},[44]);