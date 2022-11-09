/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([157,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(158);
module.exports = __webpack_require__(382);


/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(1);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(56);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./node_modules/normalize.css/normalize.css
var normalize = __webpack_require__(328);

// EXTERNAL MODULE: ./node_modules/slick-carousel/slick/slick.css
var slick = __webpack_require__(329);

// EXTERNAL MODULE: ./node_modules/slick-carousel/slick/slick-theme.css
var slick_theme = __webpack_require__(330);

// EXTERNAL MODULE: ./src/client/styles/style.scss
var style = __webpack_require__(331);

// EXTERNAL MODULE: ./node_modules/webfontloader/webfontloader.js
var webfontloader = __webpack_require__(152);
var webfontloader_default = /*#__PURE__*/__webpack_require__.n(webfontloader);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(17);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ./src/client/components/helpers/base64Image.js
var toDataURL = function toDataURL(url) {
  return fetch(url).then(function (response) {
    return response.blob();
  }).then(function (blob) {
    return new Promise(function (resolve, reject) {
      var reader = new FileReader();

      reader.onloadend = function () {
        return resolve(reader.result);
      };

      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  });
};

/* harmony default export */ var base64Image = (toDataURL);
// CONCATENATED MODULE: ./src/client/components/provider/MemeProvider.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var MemeContext = react_default.a.createContext();
var memeApiEndpoint = 'https://api.imgflip.com/get_memes';

var MemeProvider_MemeProvider =
/*#__PURE__*/
function (_Component) {
  _inherits(MemeProvider, _Component);

  function MemeProvider() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, MemeProvider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MemeProvider)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {
      memes: [],
      selectedMeme: null,
      isLoadingImage: false,
      isLoading: false
    }, _this.fetchMeme =
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var memeRequest, meme;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              _this.setState({
                isLoading: true,
                isLoadingImage: true
              });

              _context.next = 4;
              return fetch(memeApiEndpoint);

            case 4:
              memeRequest = _context.sent;
              _context.next = 7;
              return memeRequest.json();

            case 7:
              meme = _context.sent;

              if (meme) {
                _this.setState({
                  memes: meme.data.memes,
                  isLoading: false,
                  isLoadingImage: false
                }, function () {
                  base64Image(_this.state.memes[0].url).then(function (img) {
                    _this.setState({
                      selectedMeme: img
                    });
                  });
                });
              }

              localStorage.setItem('memefy', JSON.stringify(_this.state));
              _context.next = 16;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](0);

              _this.setState({
                isLoading: true,
                isLoadingImage: false
              });

              console.log('Cannot fetch memes from server', _context.t0);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[0, 12]]);
    })), _this.setSelectedImage = function (image) {
      _this.setState({
        selectedMeme: image,
        isLoadingImage: false
      });
    }, _this.isLoadingImage = function (boolean) {
      _this.setState({
        isLoadingImage: boolean
      });
    }, _temp));
  }

  _createClass(MemeProvider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (localStorage.memefy) {
        var memefy = JSON.parse(localStorage.getItem('memefy'));
        this.setState({
          memes: memefy.memes,
          selectedMeme: memefy.selectedMeme
        });
      } else {
        this.fetchMeme();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      try {
        if (localStorage.memefy) {
          var memefy = JSON.parse(localStorage.getItem('memefy'));
          localStorage.setItem('memefy', JSON.stringify(_objectSpread({}, memefy, {
            selectedMeme: this.state.selectedMeme
          })));
        }
      } catch (e) {
        console.log('Cannot save  to localStorage', e);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react_default.a.createElement(MemeContext.Provider, {
        value: {
          memes: this.state.memes,
          selectedMeme: this.state.selectedMeme,
          setSelectedImage: this.setSelectedImage,
          isLoadingImage: this.state.isLoadingImage,
          isLoading: this.state.isLoading,
          triggerLoader: this.isLoadingImage
        }
      }, this.props.children);
    }
  }]);

  return MemeProvider;
}(react["Component"]);

MemeProvider_MemeProvider.propTypes = {
  children: prop_types_default.a.oneOfType([prop_types_default.a.arrayOf(prop_types_default.a.node), prop_types_default.a.node])
};
/* harmony default export */ var provider_MemeProvider = (MemeProvider_MemeProvider);
// EXTERNAL MODULE: ./node_modules/react-slick/lib/index.js
var lib = __webpack_require__(153);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ./node_modules/react-lazy-load/lib/LazyLoad.js
var LazyLoad = __webpack_require__(154);
var LazyLoad_default = /*#__PURE__*/__webpack_require__.n(LazyLoad);

// CONCATENATED MODULE: ./src/client/components/layout/ImageLoader.jsx
function ImageLoader_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ImageLoader_typeof = function _typeof(obj) { return typeof obj; }; } else { ImageLoader_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ImageLoader_typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ImageLoader_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ImageLoader_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ImageLoader_createClass(Constructor, protoProps, staticProps) { if (protoProps) ImageLoader_defineProperties(Constructor.prototype, protoProps); if (staticProps) ImageLoader_defineProperties(Constructor, staticProps); return Constructor; }

function ImageLoader_possibleConstructorReturn(self, call) { if (call && (ImageLoader_typeof(call) === "object" || typeof call === "function")) { return call; } return ImageLoader_assertThisInitialized(self); }

function ImageLoader_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ImageLoader_getPrototypeOf(o) { ImageLoader_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ImageLoader_getPrototypeOf(o); }

function ImageLoader_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ImageLoader_setPrototypeOf(subClass, superClass); }

function ImageLoader_setPrototypeOf(o, p) { ImageLoader_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ImageLoader_setPrototypeOf(o, p); }


var _loaded = {};

var ImageLoader_ImageLoader =
/*#__PURE__*/
function (_Component) {
  ImageLoader_inherits(ImageLoader, _Component);

  function ImageLoader() {
    var _getPrototypeOf2;

    var _temp, _this;

    ImageLoader_classCallCheck(this, ImageLoader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return ImageLoader_possibleConstructorReturn(_this, (_temp = _this = ImageLoader_possibleConstructorReturn(this, (_getPrototypeOf2 = ImageLoader_getPrototypeOf(ImageLoader)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {
      loaded: _loaded[_this.props.src]
    }, _this.onLoad = function () {
      _loaded[_this.props.src] = true;

      _this.setState(function () {
        return {
          loaded: true
        };
      });
    }, _temp));
  }

  ImageLoader_createClass(ImageLoader, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          loadedClassName = _this$props.loadedClassName,
          loadingClassName = _this$props.loadingClassName,
          props = _objectWithoutProperties(_this$props, ["className", "loadedClassName", "loadingClassName"]);

      className = "".concat(className, " ").concat(this.state.loaded ? loadedClassName : loadingClassName);
      return react_default.a.createElement("img", {
        className: className,
        "data-key": this.props.imgId,
        onClick: this.props.onClick,
        onLoad: this.onLoad,
        src: this.props.src
      });
    }
  }]);

  return ImageLoader;
}(react["Component"]);

ImageLoader_ImageLoader.defaultProps = {
  className: '',
  loadingClassName: 'img-loading',
  loadedClassName: 'img-loaded'
};
/* harmony default export */ var layout_ImageLoader = (ImageLoader_ImageLoader);
// CONCATENATED MODULE: ./src/client/components/meme/MemeItem.jsx







var MemeItem_Meme = function Meme(_ref) {
  var meme = _ref.meme;
  var state = Object(react["useContext"])(MemeContext);

  var onSelectImage = function onSelectImage() {
    var selected = state.memes.filter(function (item) {
      return item.id === meme.id;
    });
    state.triggerLoader(true);

    if (selected.length !== 0) {
      base64Image(selected[0].url).then(function (img) {
        state.setSelectedImage(img);
      }).catch(function (e) {
        console.log('Cannot fetch selected image', e);
      });
    }
  };

  return react_default.a.createElement("div", {
    className: "meme",
    onClick: onSelectImage
  }, react_default.a.createElement("div", {
    className: "meme__image"
  }, react_default.a.createElement(LazyLoad_default.a, {
    debounce: false,
    height: 100,
    offsetVertical: 500
  }, react_default.a.createElement(layout_ImageLoader, {
    alt: meme.name,
    imgId: meme.id,
    src: meme.url
  }))), react_default.a.createElement("div", {
    className: "meme__title"
  }, react_default.a.createElement("h3", null, meme.name)));
};

MemeItem_Meme.propTypes = {
  meme: prop_types_default.a.shape({
    name: prop_types_default.a.string,
    url: prop_types_default.a.string
  })
};
/* harmony default export */ var MemeItem = (MemeItem_Meme);
// CONCATENATED MODULE: ./src/client/components/layout/Loader.jsx


var Loader_Loader = function Loader() {
  return react_default.a.createElement("div", {
    className: "loader"
  }, react_default.a.createElement("div", {
    className: "loader__circle"
  }));
};

/* harmony default export */ var layout_Loader = (Loader_Loader);
// CONCATENATED MODULE: ./src/client/components/meme/MemeListSlider.jsx
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var MemeListSlider_MemeList = function MemeList() {
  var _useContext = Object(react["useContext"])(MemeContext),
      isLoading = _useContext.isLoading,
      memes = _useContext.memes;

  var _useState = Object(react["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isMobile = _useState2[0],
      setIsMobile = _useState2[1];

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 2 : 7,
    slidesToScroll: isMobile ? 2 : 7
  };
  Object(react["useEffect"])(function () {
    if (window.screen.width <= 420) {
      setIsMobile(true);
    }
  }, []);
  return react_default.a.createElement("div", {
    className: "meme__header"
  }, react_default.a.createElement("h2", null, "Memes that take up my storage"), react_default.a.createElement("p", null, "Pick a meme from the great meme roll"), react_default.a.createElement("div", {
    className: "meme__wrapper"
  }, isLoading ? react_default.a.createElement(layout_Loader, null) : react_default.a.createElement(lib_default.a, settings, memes.map(function (meme) {
    return react_default.a.createElement(MemeItem, {
      key: meme.id,
      meme: meme
    });
  }))));
};

/* harmony default export */ var MemeListSlider = (MemeListSlider_MemeList);
// EXTERNAL MODULE: ./node_modules/html2canvas/dist/npm/index.js
var npm = __webpack_require__(155);
var npm_default = /*#__PURE__*/__webpack_require__.n(npm);

// EXTERNAL MODULE: ./node_modules/file-saver/dist/FileSaver.min.js
var FileSaver_min = __webpack_require__(156);

// CONCATENATED MODULE: ./src/client/components/layout/UploadButton.jsx




var UploadButton_UploadButton = function UploadButton() {
  var _useContext = Object(react["useContext"])(MemeContext),
      setSelectedImage = _useContext.setSelectedImage,
      triggerLoader = _useContext.triggerLoader;

  var onFileChooseChange = function onFileChooseChange(e) {
    var fileType = e.target.files[0].type;
    triggerLoader(true);

    if (fileType === 'image/jpeg' || fileType === 'image/png') {
      var reader = new FileReader();
      reader.addEventListener('load', function () {
        setSelectedImage(reader.result);
        triggerLoader(false);
      });
      reader.readAsDataURL(e.target.files[0]);
    } else {
      /* eslint-disable no-alert */
      alert('file type must be JPEG or PNG');
    }
  };

  return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement("input", {
    className: "file-chooser",
    id: "file-upload",
    onChange: onFileChooseChange,
    type: "file"
  }), react_default.a.createElement("label", {
    className: "file-upload-button",
    htmlFor: "file-upload"
  }, "Upload Own Photo"));
};

UploadButton_UploadButton.propTypes = {
  setSelectedImage: prop_types_default.a.func
};
/* harmony default export */ var layout_UploadButton = (UploadButton_UploadButton);
// EXTERNAL MODULE: ./node_modules/interactjs/dist/interact.js
var interact = __webpack_require__(106);
var interact_default = /*#__PURE__*/__webpack_require__.n(interact);

// CONCATENATED MODULE: ./src/client/components/helpers/interact.js


var setScaledFont = function setScaledFont(targetElement, scale) {
  var size = targetElement.offsetWidth;
  var fs = size * scale;
  /* eslint-disable no-param-reassign */

  targetElement.style.fontSize = "".concat(fs, "%");
};

var onResizeMove = function onResizeMove(event) {
  var targetElement = event.target;
  var x = parseFloat(targetElement.getAttribute('data-x')) || 0;
  var y = parseFloat(targetElement.getAttribute('data-y')) || 0; // update the element's style

  targetElement.style.width = "".concat(event.rect.width, "px");
  targetElement.style.height = "".concat(event.rect.height, "px"); // translate when resizing from top or left edges

  x += event.deltaRect.left;
  y += event.deltaRect.top;
  targetElement.style.transform = "'translate(".concat(x, "px, ").concat(y, "px)");
  targetElement.style.border = '3px dashed #4c8ade';
  targetElement.setAttribute('data-x', x);
  targetElement.setAttribute('data-y', y); // Scale font size

  setScaledFont(targetElement, 0.35);
};

var onResizeEnd = function onResizeEnd(event) {
  var targetElement = event.target;
  targetElement.style.border = '3px dashed transparent';
};

var dragMoveListener = function dragMoveListener(event) {
  var targetElement = event.target;
  var x = (parseFloat(targetElement.getAttribute('data-x')) || 0) + event.dx;
  var y = (parseFloat(targetElement.getAttribute('data-y')) || 0) + event.dy; // translate the element

  targetElement.style.transform = "translate(".concat(x, "px, ").concat(y, "px)"); // update the posiion attributes

  targetElement.setAttribute('data-x', x);
  targetElement.setAttribute('data-y', y);
};

var interact_interactElement = function interactElement(element) {
  interact_default()(element).draggable({
    snap: {
      targets: [interact_default.a.createSnapGrid({
        x: 10,
        y: 10
      })],
      range: Infinity,
      relativePoints: [{
        x: 0,
        y: 0
      }]
    },
    restrict: {
      restriction: 'parent',
      elementRect: {
        top: 0,
        left: 0,
        bottom: 1,
        right: 1
      }
    },
    onmove: dragMoveListener
  }).pointerEvents({
    ignoreFrom: '[no-pointer-event]'
  }).resizable({
    edges: {
      left: true,
      right: true,
      bottom: true,
      top: true
    },
    restrictEdges: {
      outer: 'parent',
      endOnly: true
    },
    inertia: true
  }).on('resizemove', onResizeMove).on('resizeend', onResizeEnd);
};

/* harmony default export */ var helpers_interact = (interact_interactElement);
// CONCATENATED MODULE: ./src/client/components/meme/MemePanel.jsx
function MemePanel_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { MemePanel_typeof = function _typeof(obj) { return typeof obj; }; } else { MemePanel_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return MemePanel_typeof(obj); }

function MemePanel_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { MemePanel_defineProperty(target, key, source[key]); }); } return target; }

function MemePanel_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function MemePanel_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MemePanel_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function MemePanel_createClass(Constructor, protoProps, staticProps) { if (protoProps) MemePanel_defineProperties(Constructor.prototype, protoProps); if (staticProps) MemePanel_defineProperties(Constructor, staticProps); return Constructor; }

function MemePanel_possibleConstructorReturn(self, call) { if (call && (MemePanel_typeof(call) === "object" || typeof call === "function")) { return call; } return MemePanel_assertThisInitialized(self); }

function MemePanel_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function MemePanel_getPrototypeOf(o) { MemePanel_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return MemePanel_getPrototypeOf(o); }

function MemePanel_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) MemePanel_setPrototypeOf(subClass, superClass); }

function MemePanel_setPrototypeOf(o, p) { MemePanel_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return MemePanel_setPrototypeOf(o, p); }









var MemePanel_MemePanel =
/*#__PURE__*/
function (_Component) {
  MemePanel_inherits(MemePanel, _Component);

  function MemePanel() {
    var _getPrototypeOf2;

    var _temp, _this;

    MemePanel_classCallCheck(this, MemePanel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return MemePanel_possibleConstructorReturn(_this, (_temp = _this = MemePanel_possibleConstructorReturn(this, (_getPrototypeOf2 = MemePanel_getPrototypeOf(MemePanel)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {
      topText: 'TOP TEXT',
      topTextColor: '#ffffff',
      bottomText: 'BOTTOM TEXT',
      bottomTextColor: '#ffffff'
    }, _this.onTopTextChange = function (e) {
      var topText = e.target.value;

      _this.setState({
        topText: topText
      });
    }, _this.onBottomTextChange = function (e) {
      var bottomText = e.target.value;

      _this.setState({
        bottomText: bottomText
      });
    }, _this.onSaveHandler = function () {
      _this.save__button.disabled = true;
      _this.save__button.textContent = 'Saving Meme ...';
      npm_default()(_this.meme__image).then(function (canvas) {
        var date = new Date().getTime();
        canvas.toBlob(function (blob) {
          Object(FileSaver_min["saveAs"])(blob, "meme-".concat(date, ".png"));
        });
        _this.save__button.disabled = false;
        _this.save__button.textContent = 'Save Meme';
      });
    }, _this.onTopTextColorChange = function (e) {
      var color = e.target.value;

      _this.setState({
        topTextColor: color
      });
    }, _this.onBottomTextColorChange = function (e) {
      var color = e.target.value;

      _this.setState({
        bottomTextColor: color
      });
    }, _temp));
  }

  MemePanel_createClass(MemePanel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if ('localStorage' in window && localStorage.memefy) {
        var memefy = JSON.parse(localStorage.getItem('memefy'));
        if (memefy.settings) this.setState(MemePanel_objectSpread({}, memefy.settings));
      }

      if (!this.context.isLoadingImage) {
        helpers_interact(this.meme__top_text);
        helpers_interact(this.meme__bottom_text);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      try {
        if ('localStorage' in window && localStorage.memefy) {
          var memefy = JSON.parse(localStorage.getItem('memefy'));
          localStorage.setItem('memefy', JSON.stringify(MemePanel_objectSpread({}, memefy, {
            settings: this.state
          })));
        }
      } catch (e) {
        console.log('Cannot save to localStorage', e);
      }

      if (!this.context.isLoadingImage) {
        helpers_interact(this.meme__top_text);
        helpers_interact(this.meme__bottom_text);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          topText = _this$state.topText,
          bottomText = _this$state.bottomText,
          topTextColor = _this$state.topTextColor,
          bottomTextColor = _this$state.bottomTextColor;
      var _this$context = this.context,
          setSelectedImage = _this$context.setSelectedImage,
          selectedMeme = _this$context.selectedMeme,
          isLoadingImage = _this$context.isLoadingImage;
      return react_default.a.createElement("div", {
        className: "meme__panel"
      }, react_default.a.createElement("div", {
        className: "meme__editor",
        ref: function ref(node) {
          return _this2.meme__image = node;
        }
      }, isLoadingImage ? react_default.a.createElement(layout_Loader, null) : react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement("div", {
        className: "meme__top-text",
        draggable: "true",
        ref: function ref(node) {
          return _this2.meme__top_text = node;
        }
      }, react_default.a.createElement("h1", {
        className: "meme__text",
        style: {
          color: topTextColor
        }
      }, topText)), react_default.a.createElement("img", {
        alt: "",
        className: "meme__image-selected",
        src: selectedMeme
      }), react_default.a.createElement("div", {
        className: "meme__bottom-text",
        draggable: "true",
        ref: function ref(node) {
          return _this2.meme__bottom_text = node;
        }
      }, react_default.a.createElement("h1", {
        className: "meme__text",
        style: {
          color: bottomTextColor
        }
      }, bottomText)))), react_default.a.createElement("div", {
        className: "meme__form"
      }, react_default.a.createElement("div", {
        className: "meme__form-control"
      }, react_default.a.createElement("span", {
        className: "meme__form-title"
      }, "Top Text"), react_default.a.createElement("div", {
        className: "meme__form-wrapper"
      }, react_default.a.createElement("input", {
        onChange: this.onTopTextChange,
        placeholder: "Top Text",
        type: "text",
        value: topText
      }), react_default.a.createElement("input", {
        onChange: this.onTopTextColorChange,
        style: {
          marginLeft: '15px'
        },
        type: "color",
        value: topTextColor
      }))), react_default.a.createElement("div", {
        className: "meme__form-control"
      }, react_default.a.createElement("span", {
        className: "meme__form-title"
      }, "Bottom Text"), react_default.a.createElement("div", {
        className: "meme__form-wrapper"
      }, react_default.a.createElement("input", {
        onChange: this.onBottomTextChange,
        placeholder: "Bottom Text",
        type: "text",
        value: bottomText
      }), react_default.a.createElement("input", {
        onChange: this.onBottomTextColorChange,
        style: {
          marginLeft: '15px'
        },
        type: "color",
        value: bottomTextColor
      }))), react_default.a.createElement("div", {
        className: "meme__form-control"
      }, react_default.a.createElement("div", {
        className: "meme__form-wrapper form-actions"
      }, react_default.a.createElement(layout_UploadButton, {
        setSelectedImage: setSelectedImage
      }), react_default.a.createElement("button", {
        onClick: this.onSaveHandler,
        ref: function ref(node) {
          return _this2.save__button = node;
        }
      }, "Save Meme")))));
    }
  }]);

  return MemePanel;
}(react["Component"]);

MemePanel_MemePanel.contextType = MemeContext;
/* harmony default export */ var meme_MemePanel = (MemePanel_MemePanel);
// CONCATENATED MODULE: ./src/client/components/layout/Navigation.jsx




var Navigation_Navigation = function Navigation() {
  var state = Object(react["useContext"])(MemeContext);
  return react_default.a.createElement("div", {
    className: "navigation"
  }, react_default.a.createElement("span", {
    className: "navigation__title"
  }, "Mememate!"), react_default.a.createElement(layout_UploadButton, {
    setSelectedImage: state.setSelectedImage
  }));
};

/* harmony default export */ var layout_Navigation = (Navigation_Navigation);
// CONCATENATED MODULE: ./src/client/components/App.jsx






var App_App = function App() {
  return react_default.a.createElement(provider_MemeProvider, null, react_default.a.createElement(layout_Navigation, null), react_default.a.createElement("div", {
    className: "meme__content"
  }, react_default.a.createElement(MemeListSlider, null), react_default.a.createElement(meme_MemePanel, null)));
};

/* harmony default export */ var components_App = (App_App);
// CONCATENATED MODULE: ./src/client/index.js








webfontloader_default.a.load({
  google: {
    families: ['Roboto: 400, 500, 900']
  }
});

if ( true && 'serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(function (registration) {
    console.log('SW registered: ', registration);
  }).catch(function (registrationError) {
    console.log('SW registration failed: ', registrationError);
  });
}

react_dom_default.a.render(react_default.a.createElement(components_App, null), document.getElementById('app'));

/***/ })

/******/ });
//# sourceMappingURL=main.11e46abeba6c4c84fc99.js.map
