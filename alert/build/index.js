/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/edit.jsx":
/*!**********************!*\
  !*** ./src/edit.jsx ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helper_material_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helper/material-icons */ "../helper/material-icons.js");
/* harmony import */ var _helper_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helper/icon */ "../helper/icon.js");





function Edit({
  attributes,
  setAttributes
}) {
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: "alert"
  });
  const {
    iconName,
    iconClassName
  } = attributes;
  const onClickIconButton = icon => {
    setAttributes({
      iconName: icon.value,
      iconClassName: icon.className
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: "\u30A2\u30A4\u30B3\u30F3",
    icon: _helper_icon__WEBPACK_IMPORTED_MODULE_4__.icon,
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
    label: "\u30A2\u30E9\u30FC\u30C8\u30A2\u30A4\u30B3\u30F3\u3092\u9078\u629E",
    id: "su-blocks/alert/icon"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "editor-icon"
  }, _helper_material_icons__WEBPACK_IMPORTED_MODULE_3__["default"].map((icon, i) => {
    const isCurrent = icon.value === iconName && icon.className === iconClassName;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: i,
      className: isCurrent ? "editor-icon-item current" : "editor-icon-item",
      onClick: () => onClickIconButton(icon)
    }, icon.value !== "" ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: icon.className
    }, icon.value) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "su-alert-icon__blank"
    }, "\u306A\u3057"));
  }))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, iconName !== "" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: `${iconClassName} md-24 alert-icon`
  }, iconName), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, null)));
}

/***/ }),

/***/ "./src/save.jsx":
/*!**********************!*\
  !*** ./src/save.jsx ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


function save({
  attributes
}) {
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: "alert"
  });
  const {
    iconName,
    iconClassName
  } = attributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, iconName !== "" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: `${iconClassName} md-24 alert-icon`
  }, iconName), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null));
}

/***/ }),

/***/ "./src/styles.js":
/*!***********************!*\
  !*** ./src/styles.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  name: 'info',
  label: 'Info'
}, {
  name: 'success',
  label: 'Success'
}, {
  name: 'warning',
  label: 'Warning'
}, {
  name: 'danger',
  label: 'Danger'
}]);

/***/ }),

/***/ "../helper/icon.js":
/*!*************************!*\
  !*** ../helper/icon.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   icon: function() { return /* binding */ icon; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const icon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  className: "su-dashborad-icon",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m20,10c0,5.52-4.48,10-10,10S0,15.52,0,10,4.48,0,10,0s10,4.48,10,10Zm-13.73.4c.68.08,1.06.42,1.06.99,0,.45-.38.84-.86.84-.41,0-.74-.1-1.07-.51l-1.21.89c.67.74,1.47,1.03,2.27,1.03,1.23,0,2.38-.98,2.38-2.35s-.99-2.17-2.19-2.24c-.74-.05-.98-.34-.98-.66,0-.39.26-.62.65-.62.25,0,.56.15.74.35l1.15-.84c-.54-.64-1.2-.9-1.89-.9-.97,0-2.06.84-2.06,2.03,0,1.1.79,1.87,2.01,2.01Zm6.52,3.23c1.87,0,3.01-1.21,3.01-3.25v-3.89h-1.44v4.02c0,1.06-.47,1.73-1.56,1.73-1.04,0-1.57-.62-1.57-1.73v-4.02h-1.46v3.77c0,1.95.98,3.37,3.04,3.37Z"
}));

/***/ }),

/***/ "../helper/material-icons.js":
/*!***********************************!*\
  !*** ../helper/material-icons.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  label: 'Info',
  value: 'info',
  className: 'material-icons-outlined'
}, {
  label: 'Info',
  value: 'info',
  className: 'material-icons'
}, {
  label: 'Check',
  value: 'check',
  className: 'material-icons-outlined'
}, {
  label: 'Check Circle',
  value: 'check_circle',
  className: 'material-icons-outlined'
}, {
  label: 'Check Circle',
  value: 'check_circle',
  className: 'material-icons'
}, {
  label: 'Error Outline',
  value: 'error_outline',
  className: 'material-icons-outlined'
}, {
  label: 'Error',
  value: 'error',
  className: 'material-icons-outlined'
}, {
  label: 'Priority High',
  value: 'priority_high',
  className: 'material-icons-outlined'
}, {
  label: 'Warning',
  value: 'warning_amber',
  className: 'material-icons-outlined'
}, {
  label: 'Warning',
  value: 'warning',
  className: 'material-icons-outlined'
}, {
  label: 'Help Outline',
  value: 'help_outline',
  className: 'material-icons-outlined'
}, {
  label: 'Help',
  value: 'help',
  className: 'material-icons-outlined'
}, {
  label: 'Question Mark',
  value: 'question_mark',
  className: 'material-icons-outlined'
}, {
  label: 'Star',
  value: 'star',
  className: 'material-icons'
}, {
  label: 'Star Border',
  value: 'star_border',
  className: 'material-icons-outlined'
}, {
  label: 'Sentiment Satisfied',
  value: 'sentiment_satisfied',
  className: 'material-icons-outlined'
}, {
  label: 'Sentiment Neutral',
  value: 'sentiment_neutral',
  className: 'material-icons-outlined'
}, {
  label: 'Sentiment Dissatisfied',
  value: 'sentiment_dissatisfied',
  className: 'material-icons-outlined'
}, {
  label: 'Fiber Manual Record',
  value: 'fiber_manual_record',
  className: 'material-icons-outlined'
}, {
  label: 'Close',
  value: 'close',
  className: 'material-icons-outlined'
}, {
  label: 'Dangerous',
  value: 'dangerous',
  className: 'material-icons-outlined'
}, {
  label: 'Thumb Up',
  value: 'thumb_up',
  className: 'material-icons-outlined'
}, {
  label: 'Thumb Down',
  value: 'thumb_down',
  className: 'material-icons-outlined'
}, {
  label: 'Feedback',
  value: 'feedback',
  className: 'material-icons-outlined'
}, {
  label: 'なし',
  value: ''
}]);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"humi-blocks/alert","version":"0.1.0","title":"Humi アラート","category":"humi-blocks","icon":"info","description":"アイコンつきのアラート文を作成できます","example":{},"supports":{"html":false},"keywords":["コメント","注意","注釈"],"textdomain":"humi-blocks","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles */ "./src/styles.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.jsx");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/save.jsx");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/block.json");





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  attributes: {
    iconName: {
      type: "string",
      default: "info"
    },
    iconClassName: {
      type: "string",
      default: "material-icons"
    }
  },
  styles: _styles__WEBPACK_IMPORTED_MODULE_0__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map