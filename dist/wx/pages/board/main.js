require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([7],{

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(94);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_62b8a0ee_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(97);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(95)
}
var normalizeComponent = __webpack_require__(23)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-62b8a0ee"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_62b8a0ee_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\board\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-62b8a0ee", Component.options)
  } else {
    hotAPI.reload("data-v-62b8a0ee", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 95:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 96:
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
      banner: {
        key: 'coming_soon',
        title: '正在热映',
        count: 4,
        content: [
          // {image:'',id:xx}
        ]
      },
      list: [{ key: 'coming_soon', title: '即将上映' }, { key: 'top250', title: 'Top250' }, { key: 'in_theaters', title: '正在热映' }]
    };
  },


  components: {},

  methods: {},

  created: function created() {
    var _this = this;

    // let app = getApp() 抓
    Object(__WEBPACK_IMPORTED_MODULE_0__utils_douban_js__["a" /* default */])({
      url: '/v2/movie/' + this.banner.key,
      data: { count: this.banner.count }
    }).then(function (res) {

      if (!res.data.subjects) return;
      var result = [];
      res.data.subjects.map(function (item) {
        result.push({
          image: item.images.large,
          id: item.id
        });
      });
      // console.log(result);
      _this.banner.content = result;
      /* this.setData({
        'banner.content': result
      }); */
      // console.log(this.banner.content);
    });
  }
});

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "slide"
  }, [_c('swiper', {
    staticClass: "swp",
    attrs: {
      "indicator-dots": true,
      "autoplay": true,
      "interval": 1000,
      "duration": 100,
      "circular": true
    }
  }, _vm._l((_vm.banner.content), function(item, index) {
    return _c('swiper-item', {
      key: item.id,
      attrs: {
        "mpcomid": '0_' + index
      }
    }, [_c('navigator', {
      attrs: {
        "url": '../item/main?id=' + item.id
      }
    }, [_c('image', {
      staticClass: "nav-img",
      attrs: {
        "src": item.image,
        "mode": "aspectFill"
      }
    })])], 1)
  }))], 1), _vm._v(" "), _c('div', {
    staticClass: "board",
    attrs: {
      "scroll-y": true
    }
  }, _vm._l((_vm.list), function(item, index) {
    return _c('navigator', {
      key: item.key,
      attrs: {
        "url": '../list/main?key=' + item.key + '&title=' + item.title
      }
    }, [_c('div', {
      staticClass: "board-item"
    }, [_c('span', {
      staticClass: "board-item-title"
    }, [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('img', {
      staticClass: "arrow",
      attrs: {
        "src": "/static/images/arrowright.png"
      }
    })])])
  }))])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-62b8a0ee", esExports)
  }
}

/***/ })

},[43]);