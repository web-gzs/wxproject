require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([3],{

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_1c9bbabb_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(117);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(115)
}
var normalizeComponent = __webpack_require__(23)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1c9bbabb"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_1c9bbabb_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\search\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1c9bbabb", Component.options)
  } else {
    hotAPI.reload("data-v-1c9bbabb", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 115:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_douban_js__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_product__ = __webpack_require__(102);
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




/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      page: 1,
      size: 20,
      subtitle: '输入想要搜索的内容',
      list: [],
      search: '搜索',
      loading: false,
      hasMore: false
    };
  },


  components: {
    product: __WEBPACK_IMPORTED_MODULE_1__components_product__["a" /* default */]
  },

  methods: {
    loadList: function loadList() {
      var _this = this;

      this.subtitle = '加载中...';
      this.hasMore = true;
      this.loading = true;
      // this.setData({ subtitle: '标题...', hasMore: true, loading: true })
      var start = (this.page - 1) * this.size; //??????
      this.page = this.page + 1;
      /* this.setData({
        page: this.page + 1
      }); */
      // console.log('https://douban.uieee.com/v2/movie/search?q=' + this.search + '&start=' + start + '&count=' + this.size);
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_douban_js__["a" /* default */])({
        url: '/v2/movie/search',
        data: {
          tag: this.search,
          start: start,
          count: this.size
        }
      }).then(function (res) {
        _this.loading = false;
        _this.hasMore = false;
        _this.subtitle = res.data.title;
        // this.setData({ loading: false, hasMore: false, subtitle: res.data.title });
        console.log('????', res.data.subjects);
        if (!res.data.subjects.length) {
          return;
        }

        var result = [];
        res.data.subjects.map(function (item) {
          result.push({
            image: item.images.small,
            id: item.id,
            title: item.title,
            average: item.rating.average,
            original_title: item.original_title,
            year: item.year,
            directors: item.directors.length && item.directors[0].name || '-'
          });
        });
        _this.list = _this.list.concat(result);
        /* this.setData({
          list: this.list.concat(result),
        }); */

        console.log(res.data.total, res.data.count, _this.list.length);

        global.mpvue.stopPullDownRefresh(); //??????UI
      });
    },
    handleSearch: function handleSearch(e) {
      if (!e.target.value) return;
      this.list = [];
      this.page = 1;
      this.subtitle = '加载中...';
      this.hasMore = true;
      this.loading = true;
      this.search = e.target.value;
      // this.setData({ list: [], page: 1 })//?????????
      // this.setData({ subtitle: '???...', hasMore: true, loading: true, search: e.detail.value });
      this.loadList();
    }
  },

  onPullDownRefresh: function onPullDownRefresh() {
    console.log('onPullDownRefresh');
    this.list = [];
    this.page = 1;
    this.loadList();
    // app.wechat.original.stopPullDownRefresh(); //??????UI
  },

  /**
   * ?????????????
   */
  onReachBottom: function onReachBottom() {
    console.log('onReachBottom');
    this.loadList(); //????
  }

});

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "search"
  }, [_c('input', {
    staticClass: "search-input",
    attrs: {
      "placeholder": _vm.subtitle,
      "focus": "",
      "eventid": '0'
    },
    on: {
      "change": _vm.handleSearch
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "list"
  }, [(_vm.loading) ? _c('div', {
    staticClass: "tips"
  }, [_vm._m(0)]) : _vm._e(), _vm._v(" "), _vm._l((_vm.list), function(item, index) {
    return _c('navigator', {
      key: item.id,
      attrs: {
        "url": '../item/main?id=' + item.id
      }
    }, [_c('product', {
      attrs: {
        "item": item,
        "mpcomid": '0_' + index
      }
    })], 1)
  }), _vm._v(" "), (_vm.list.length > 0) ? _c('div', {
    staticClass: "tips"
  }, [(_vm.hasMore) ? _c('div', [_c('img', {
    staticClass: "tips-img",
    attrs: {
      "src": '/static/images/loading.gif',
      "mode": "aspectFill"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "span"
  }, [_vm._v("玩命加载中...")])]) : _c('div', [_c('span', [_vm._v("没有更多内容了")])])]) : _vm._e()], 2)])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('img', {
    staticClass: "tips-img",
    attrs: {
      "src": "/static/images/loading.gif",
      "mode": "aspectFill"
    }
  }), _vm._v(" "), _c('span', [_vm._v("刷新中...")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-1c9bbabb", esExports)
  }
}

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(114);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ })

},[47]);