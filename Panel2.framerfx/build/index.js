(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("framer"));
	else if(typeof define === 'function' && define.amd)
		define(["framer"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("framer")) : factory(root["Framer"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_framer__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
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
/******/
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
/******/ 		"main": 0
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
/******/ 		try { modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); } catch (error) { module.exports = { error } }
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// asset url
/******/ 	var __module_i = eval("typeof module !== 'undefined' ? module.i : ''");
/******/ 	var __framer_package = (/(node_modules\/.*)\/(?:build|dist)\/index\.js$/.exec(__module_i) || [])[1];
/******/ 	function __asset_url__(src) { return __WEBPACK_EXTERNAL_MODULE_framer__.serverURL(__framer_package, src) };
/******/ 	installedModules['framer/resource'] = { i: 'framer/resource', l: true, exports: { url: __asset_url__ } };
/******/
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
/******/ 	deferredModules.push(["./entry.js","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./code sync recursive \\.(t|j)s(x?)|\\.css$":
/*!***************************************!*\
  !*** ./code sync \.(t|j)s(x?)|\.css$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Panel.tsx": "./code/Panel.tsx",
	"./canvas.tsx": "./code/canvas.tsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./code sync recursive \\.(t|j)s(x?)|\\.css$";

/***/ }),

/***/ "./code/Panel.tsx":
/*!************************!*\
  !*** ./code/Panel.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFuZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL1BhbmVsLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLG1DQUFrRTtBQUVsRSxNQUFNLE9BQU8sR0FBRyxvQkFBVyxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQzlCLE1BQU0sSUFBSSxHQUFHLGFBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0FBRS9CLFNBQWdCLFVBQVU7O0lBQ3RCLE9BQU87UUFDSCxPQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRTtLQUNqQyxDQUFBO0NBQ0o7QUFKRCxnQ0FJQztBQUVELFNBQWdCLFVBQVU7O0lBQ3RCLE9BQU87UUFDSCxLQUFLOztZQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFBO1NBQ2pCO0tBQ0osQ0FBQTtDQUNKO0FBTkQsZ0NBTUM7QUFFRCxTQUFnQixTQUFTOztJQUNyQixPQUFPO1FBQ0gsS0FBSzs7WUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQTtTQUNuQjtLQUNKLENBQUE7Q0FDSjtBQU5ELDhCQU1DIn0=

Object.defineProperty(exports, "__esModule", { value: true });
const framer_1 = __webpack_require__(/*! framer */ "framer");
const handleX = framer_1.motionValue(0);
const data = framer_1.Data({ width: 0 });
function RightPanel() {
    window["__checkBudget__"]();
    return {
        animate: { width: data.width },
    };
}
exports.RightPanel = RightPanel;
function ClosePanel() {
    window["__checkBudget__"]();
    return {
        onTap() {
            window["__checkBudget__"]();
            data.width = 0;
        },
    };
}
exports.ClosePanel = ClosePanel;
function OpenPanel() {
    window["__checkBudget__"]();
    return {
        onTap() {
            window["__checkBudget__"]();
            data.width = 450;
        },
    };
}
exports.OpenPanel = OpenPanel;
exports.__info__ = [{ "name": "RightPanel", "type": "override" }, { "name": "ClosePanel", "type": "override" }, { "name": "OpenPanel", "type": "override" }];


/***/ }),

/***/ "./code/canvas.tsx":
/*!*************************!*\
  !*** ./code/canvas.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// WARNING: this file is auto generated, any changes will be lost
const framer_1 = __webpack_require__(/*! framer */ "framer");
const canvas = framer_1.CanvasStore.shared({"children":[{"componentClass":"Frame","props":{"key":"E8X7nScff","id":"id_E8X7nScff","willChangeTransform":false,"_constraints":{"enabled":true,"intrinsicWidth":482,"intrinsicHeight":57},"_border":{},"visible":true,"style":{"rotate":0,"overflow":"hidden","backgroundColor":"hsl(0, 0%, 100%)"},"background":{"r":255,"g":255,"b":255,"a":1,"h":0,"s":0,"l":1,"initialValue":"hsl(0, 0%, 100%)","roundA":1,"format":"hsl"},"name":"Line"},"children":[{"componentClass":"Text","props":{"key":"GuXDJuLQg","id":"id_GuXDJuLQg","willChangeTransform":false,"_constraints":{"enabled":true,"autoSize":true},"width":104,"height":19,"right":29,"top":"50%","center":"y","rawHTML":"<div data-offset-key=\"feec6-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"feec6-0-0\" style=\"tab-size:4;font-family:&quot;system-ui&quot;, &quot;-apple-system&quot;, &quot;BlinkMacSystemFont&quot;, &quot;Segoe UI&quot;, &quot;Roboto&quot;, &quot;Oxygen&quot;, &quot;Ubuntu&quot;, &quot;Cantarell&quot;, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, &quot;sans-serif&quot;, &quot;System Default&quot;, serif;-webkit-text-fill-color:hsl(215, 80%, 49%);font-size:16px;letter-spacing:0px;line-height:1.2;font-weight:700\"><span data-text=\"true\">SD63553747</span></span></div>","fonts":["__SystemDefault-700-normal__"],"opacity":1,"rotation":0,"visible":true,"autoSize":true,"calculatedSize":{"height":19,"width":104},"isEditable":false},"name":null},{"componentClass":"Text","props":{"key":"FnhxpDm7I","id":"id_FnhxpDm7I","willChangeTransform":false,"_constraints":{"enabled":true,"autoSize":true},"width":44,"height":19,"left":143,"top":"50%","center":"y","rawHTML":"<div data-offset-key=\"feec6-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"feec6-0-0\" style=\"tab-size:4;font-family:&quot;system-ui&quot;, &quot;-apple-system&quot;, &quot;BlinkMacSystemFont&quot;, &quot;Segoe UI&quot;, &quot;Roboto&quot;, &quot;Oxygen&quot;, &quot;Ubuntu&quot;, &quot;Cantarell&quot;, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, &quot;sans-serif&quot;, serif;-webkit-text-fill-color:hsl(0, 0%, 38%);font-size:16px;letter-spacing:0px;line-height:1.2\"><span data-text=\"true\">Name</span></span></div>","fonts":["__SystemDefault-400-normal__"],"opacity":1,"rotation":0,"visible":true,"autoSize":true,"calculatedSize":{"height":19,"width":44},"isEditable":false},"name":null}],"name":"Line"},{"componentClass":"Frame","props":{"key":"FJnRC2Pi4","id":"id_FJnRC2Pi4","willChangeTransform":false,"_constraints":{"enabled":true,"intrinsicWidth":482,"intrinsicHeight":57},"_border":{},"visible":true,"style":{"rotate":0,"overflow":"hidden","backgroundColor":"hsl(204, 89%, 49%)"},"background":{"r":13.744499999999986,"g":147.19109999999998,"b":236.15550000000002,"a":1,"h":204,"s":0.89,"l":0.49,"initialValue":"hsl(204, 89%, 49%)","roundA":1,"format":"hsl"},"_overrideForwardingDescription":{"id_Q0hPNvqqc":"Close"},"name":"Header SP"},"children":[{"componentClass":"Text","props":{"key":"FJnRC2Pi4GuXDJuLQg","id":"id_FJnRC2Pi4GuXDJuLQg","willChangeTransform":false,"_constraints":{"enabled":true,"autoSize":true},"width":115,"height":19,"left":21,"top":"50%","center":"y","rawHTML":"<div data-offset-key=\"feec6-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"feec6-0-0\" style=\"tab-size:4;font-family:&quot;system-ui&quot;, &quot;-apple-system&quot;, &quot;BlinkMacSystemFont&quot;, &quot;Segoe UI&quot;, &quot;Roboto&quot;, &quot;Oxygen&quot;, &quot;Ubuntu&quot;, &quot;Cantarell&quot;, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, &quot;sans-serif&quot;, &quot;System Default&quot;, serif;-webkit-text-fill-color:hsl(0, 0%, 100%);font-size:16px;letter-spacing:0px;line-height:1.2;font-weight:700\"><span data-text=\"true\">SMART PANEL</span></span></div>","fonts":["__SystemDefault-700-normal__"],"opacity":1,"rotation":0,"visible":true,"autoSize":true,"calculatedSize":{"height":19,"width":115},"isEditable":false},"name":null},{"componentClass":"Frame","props":{"key":"Q0hPNvqqc","id":"id_Q0hPNvqqc","willChangeTransform":false,"_constraints":{"enabled":true,"intrinsicWidth":37,"intrinsicHeight":36},"width":37,"right":12,"top":11,"bottom":10,"_border":{},"visible":true,"style":{"rotate":0,"overflow":"hidden","backgroundColor":"rgba(229, 21, 21, 1.00)","borderRadius":"11px"},"background":{"r":229,"g":21,"b":21,"a":1,"h":0,"s":0.832,"l":0.4901960784313726,"initialValue":"rgba(229, 21, 21, 1.00)","roundA":1,"format":"rgb"},"name":"Close"},"children":[{"componentClass":"Frame","props":{"key":"Q0hPNvqqcJmWfsKfQz","id":"id_Q0hPNvqqcJmWfsKfQz","willChangeTransform":false,"_constraints":{"enabled":true},"width":27,"height":26,"left":"50%","top":"50%","center":true,"_border":{},"visible":true,"overflow":"hidden","style":{},"background":null},"children":[{"componentClass":"Vector","props":{"key":"id_Q0hPNvqqcUfAsPuEdH","id":"Q0hPNvqqcUfAsPuEdH","willChangeTransform":false,"isRootVectorNode":true,"calculatedPath":[{"pathSegments":[{"x":0,"y":0,"handleMirroring":"straight","handleOutX":0,"handleOutY":0,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":17,"y":16.37037037037038,"handleMirroring":"straight","handleOutX":0,"handleOutY":0,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"}],"pathClosed":false}],"insideStroke":false,"shapeId":"id_Q0hPNvqqcUfAsPuEdH","strokeEnabled":true,"strokeClipId":"id_Q0hPNvqqcUfAsPuEdH_clip","strokeWidth":4,"rect":{"x":5,"y":5,"width":17,"height":16.37037037037038},"frame":{"x":5,"y":5,"width":17,"height":16.37037037037038},"strokeAlpha":1,"name":"Path","rotation":0,"lineCap":"round","lineJoin":"miter","strokeColor":"hsl(0, 0%, 100%)","strokeDashArray":"0","strokeDashOffset":0,"strokeMiterLimit":4,"fill":null},"name":null},{"componentClass":"Vector","props":{"key":"id_Q0hPNvqqciTikYoiDy","id":"Q0hPNvqqciTikYoiDy","willChangeTransform":false,"isRootVectorNode":true,"calculatedPath":[{"pathSegments":[{"x":17,"y":0,"handleMirroring":"straight","handleOutX":0,"handleOutY":0,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":0,"y":16.37037037037038,"handleMirroring":"straight","handleOutX":0,"handleOutY":0,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"}],"pathClosed":false}],"insideStroke":false,"shapeId":"id_Q0hPNvqqciTikYoiDy","strokeEnabled":true,"strokeClipId":"id_Q0hPNvqqciTikYoiDy_clip","strokeWidth":4,"rect":{"x":5.000000000000008,"y":5.6296296296296235,"width":17,"height":16.37037037037038},"frame":{"x":5.000000000000008,"y":5.6296296296296235,"width":17,"height":16.37037037037038},"strokeAlpha":1,"name":"Path","rotation":0,"lineCap":"round","lineJoin":"miter","strokeColor":"hsl(0, 0%, 100%)","strokeDashArray":"0","strokeDashOffset":0,"strokeMiterLimit":4,"fill":null},"name":null}],"name":null}],"name":"Close"}],"name":"Header_SP"},{"componentClass":"Frame","props":{"key":"jWIwMmUpv","id":"id_jWIwMmUpv","willChangeTransform":false,"_constraints":{"enabled":true,"intrinsicWidth":114,"intrinsicHeight":43},"_border":{},"visible":true,"style":{"rotate":0,"overflow":"hidden","backgroundColor":"hsl(234, 83%, 49%)","borderRadius":"11px"},"background":{"r":21.24149999999998,"g":41.98319999999992,"b":228.6585,"a":1,"h":234,"s":0.83,"l":0.49,"initialValue":"hsl(234, 83%, 49%)","roundA":1,"format":"hsl"},"_overrideForwardingDescription":{"id_E7_v3PpOH":"Title"},"name":"Button"},"children":[{"componentClass":"Text","props":{"key":"E7_v3PpOH","id":"id_E7_v3PpOH","willChangeTransform":false,"_constraints":{"enabled":true,"autoSize":true},"width":41,"height":19,"left":"50%","top":"50%","center":true,"rawHTML":"<div data-offset-key=\"9q12n-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"9q12n-0-0\" style=\"tab-size:4;font-family:&quot;system-ui&quot;, &quot;-apple-system&quot;, &quot;BlinkMacSystemFont&quot;, &quot;Segoe UI&quot;, &quot;Roboto&quot;, &quot;Oxygen&quot;, &quot;Ubuntu&quot;, &quot;Cantarell&quot;, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, &quot;sans-serif&quot;, &quot;System Default&quot;, serif;-webkit-text-fill-color:hsl(0, 0%, 100%);font-size:16px;letter-spacing:0px;line-height:1.2;font-weight:900\"><span data-text=\"true\">Save</span></span></div>","fonts":["__SystemDefault-900-normal__"],"opacity":1,"rotation":0,"visible":true,"autoSize":true,"calculatedSize":{"height":19,"width":41},"isEditable":false,"name":"Title"},"name":"Title"}],"name":"Button"},{"componentClass":"Frame","props":{"key":"T4czwhKQM","id":"id_T4czwhKQM","willChangeTransform":false,"_constraints":{"enabled":true,"intrinsicWidth":37,"intrinsicHeight":36},"_border":{},"visible":true,"style":{"rotate":0,"overflow":"hidden","backgroundColor":"rgba(229, 21, 21, 1.00)","borderRadius":"11px"},"background":{"r":229,"g":21,"b":21,"a":1,"h":0,"s":0.832,"l":0.4901960784313726,"initialValue":"rgba(229, 21, 21, 1.00)","roundA":1,"format":"rgb"},"name":"Close"},"children":[{"componentClass":"Frame","props":{"key":"JmWfsKfQz","id":"id_JmWfsKfQz","willChangeTransform":false,"_constraints":{"enabled":true},"width":27,"height":26,"left":"50%","top":"50%","center":true,"_border":{},"visible":true,"overflow":"hidden","style":{},"background":null},"children":[{"componentClass":"Vector","props":{"key":"id_UfAsPuEdH","id":"UfAsPuEdH","willChangeTransform":false,"isRootVectorNode":true,"calculatedPath":[{"pathSegments":[{"x":0,"y":0,"handleMirroring":"straight","handleOutX":0,"handleOutY":0,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":17,"y":16.37037037037038,"handleMirroring":"straight","handleOutX":0,"handleOutY":0,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"}],"pathClosed":false}],"insideStroke":false,"shapeId":"id_UfAsPuEdH","strokeEnabled":true,"strokeClipId":"id_UfAsPuEdH_clip","strokeWidth":4,"rect":{"x":5,"y":5,"width":17,"height":16.37037037037038},"frame":{"x":5,"y":5,"width":17,"height":16.37037037037038},"strokeAlpha":1,"name":"Path","rotation":0,"lineCap":"round","lineJoin":"miter","strokeColor":"hsl(0, 0%, 100%)","strokeDashArray":"0","strokeDashOffset":0,"strokeMiterLimit":4,"fill":null},"name":null},{"componentClass":"Vector","props":{"key":"id_iTikYoiDy","id":"iTikYoiDy","willChangeTransform":false,"isRootVectorNode":true,"calculatedPath":[{"pathSegments":[{"x":17,"y":0,"handleMirroring":"straight","handleOutX":0,"handleOutY":0,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":0,"y":16.37037037037038,"handleMirroring":"straight","handleOutX":0,"handleOutY":0,"handleInX":0,"handleInY":0,"radius":0,"__class":"PathSegment"}],"pathClosed":false}],"insideStroke":false,"shapeId":"id_iTikYoiDy","strokeEnabled":true,"strokeClipId":"id_iTikYoiDy_clip","strokeWidth":4,"rect":{"x":5.000000000000008,"y":5.6296296296296235,"width":17,"height":16.37037037037038},"frame":{"x":5.000000000000008,"y":5.6296296296296235,"width":17,"height":16.37037037037038},"strokeAlpha":1,"name":"Path","rotation":0,"lineCap":"round","lineJoin":"miter","strokeColor":"hsl(0, 0%, 100%)","strokeDashArray":"0","strokeDashOffset":0,"strokeMiterLimit":4,"fill":null},"name":null}],"name":null}],"name":"Close"}]});
exports.Button = framer_1.createDesignComponent(canvas, "id_jWIwMmUpv", { Title: "string" }, 114, 43);
exports.Close = framer_1.createDesignComponent(canvas, "id_T4czwhKQM", {}, 37, 36);
exports.Header_SP = framer_1.createDesignComponent(canvas, "id_FJnRC2Pi4", {}, 482, 57);
exports.Line = framer_1.createDesignComponent(canvas, "id_E8X7nScff", {}, 482, 57);
exports.__info__ = [];


/***/ }),

/***/ "./entry.js":
/*!******************!*\
  !*** ./entry.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


// The template for the dynamic webpack entry. Be aware of the variables

const packageJson = __webpack_require__(/*! ./package.json */ "./package.json")

const packageInfo = {
    packageJson,
    sourceModules: {},
    dependencies: {},
}

try {
    // This is a special webpack thing that watches the whole directory
    // https://github.com/webpack/docs/wiki/context
    const ctx = __webpack_require__("./code sync recursive \\.(t|j)s(x?)|\\.css$")

    ctx.keys().forEach(key => {
        packageInfo.sourceModules[key] = () => ctx(key)
    })
} catch (e) {
    // Handle when the code directory is missing
    // See issue #8178 for more information
}

const packages = {}

// The packages are passed in through a template

                packages["framer"] = () => {
                    var packageInfo = {}
                    var designJson
                    try {
                        packageInfo = __webpack_require__(/*! framer */ "framer")
                        designJson = __webpack_require__(/*! ./designDependencies.js */ "./designDependencies.js")["framer"]
                    } catch (e) {
                        console.log(e)
                    }
                    packageInfo.__framer__ = packageInfo.__framer__ || {}
                    packageInfo.__framer__.packageJson = {"name":"framer","version":"1.1.6","main":"build/framer.js","author":"Framer","license":"MIT","scripts":{"coverage":"jest --coverage","test":"jest","watch":"jest --watch"},"devDependencies":{"@emotion/is-prop-valid":"^0.8.2","@microsoft/api-extractor":"^7.3.4","@testing-library/react":"^8.0.1","@types/chalk":"^2.2.0","@types/draft-js":"0.10.19","@types/enzyme":"^3.1.10","@types/enzyme-adapter-react-16":"^1.0.3","@types/google.fonts":"^1.0.2","@types/hsluv":"https://github.com/framer/typed_hsluv#bump","@types/jest":"^23.0.0","@types/jest-diff":"^20.0.0","@types/jest-matcher-utils":"^21.0.1","@types/node":"^10.12.9","@types/promise-queue":"^2.2.0","@types/react":"16.8.4","@types/react-dom":"^16.8","@types/webfontloader":"^1.6.29","cache-loader":"^1.2.2","chalk":"^2.4.1","convert-tsconfig-paths-to-webpack-aliases":"^0.9.2","css.escape":"^1.5.1","draft-js":"0.10.4","enzyme":"^3.9.0","enzyme-adapter-react-16":"^1.9.1","eventemitter3":"^3.1.0","fork-ts-checker-webpack-plugin":"^0.4.1","framer-motion":"^1.6.7","hoist-non-react-statics":"^2.5.0","hsluv":"^0.0.3","immutable":"^3.8.2","jest":"^23.1.0","jest-diff":"^23.6.0","jest-dom":"^3.1.3","jest-junit":"^5.2.0","modclean":"^3.0.0-beta.1","progress-bar-webpack-plugin":"^1.11.0","promise-queue":"^2.2.5","raf":"^3.4.0","react":"^16.8","react-dev-utils":"^5.0.1","react-dom":"^16.8","react-hooks-testing-library":"^0.5.1","react-testing-library":"^6.0.0","resize-observer-polyfill":"^1.5.1","semver":"^5.6.0","style-value-types":"^3.1.4","ts-jest":"^23.10.5","ts-loader":"^4.1.0","tslint":"^5.12.1","tslint-react-hooks":"^1.1.0","typescript":"^3.5.3","watch":"^1.0.2","webfontloader":"^1.6.28","webpack":"^4.4.1","webpack-cli":"^3.1.2","webpack-dev-server":"^3.1.10","xcssmatrix":"^0.2.2"},"peerDependencies":{"react":"^16.8.2","react-dom":"^16.8.2"},"tsdoc":{"tsdocFlavor":"AEDoc"},"framer":{"components":[{"name":"Scroll","children":true,"properties":[{"key":"direction","title":"Direction","kind":"enum","options":["horizontal","vertical","both"]}]},{"name":"Page"},{"name":"Stack"},{"name":"FramerAppleWatch38","type":"device"},{"name":"FramerAppleWatch42","type":"device"},{"name":"FramerSonySmartWatch","type":"device"},{"name":"FramerAppleIPhoneSE","type":"device"},{"name":"FramerAppleIPhone8","type":"device"},{"name":"FramerAppleIPhone8Plus","type":"device"},{"name":"FramerAppleIPhoneXS","type":"device"},{"name":"FramerAppleIPhoneXR","type":"device"},{"name":"FramerAppleIPhoneXSMax","type":"device"},{"name":"FramerGooglePixel2","type":"device"},{"name":"FramerGooglePixel2XL","type":"device"},{"name":"FramerGooglePixel3","type":"device"},{"name":"FramerGooglePixel3XL","type":"device"},{"name":"FramerSamsungNote5","type":"device"},{"name":"FramerSamsungGalaxyS9","type":"device"},{"name":"FramerAppleIPadAir","type":"device"},{"name":"FramerAppleIPadMini","type":"device"},{"name":"FramerAppleIPadPro","type":"device"},{"name":"FramerGoogleNexusTablet","type":"device"},{"name":"FramerMicrosoftSurfacePro3","type":"device"},{"name":"FramerMicrosoftSurfacePro4","type":"device"},{"name":"FramerAppleIMac","type":"device"},{"name":"FramerAppleThunderboltDisplay","type":"device"},{"name":"FramerAppleMacBook","type":"device"},{"name":"FramerAppleMacBookAir","type":"device"},{"name":"FramerAppleMacBookPro","type":"device"},{"name":"FramerDellXPS","type":"device"},{"name":"FramerMicrosoftSurfaceBook","type":"device"},{"name":"FramerSonyW850C","type":"device"},{"name":"FramerStoreArtwork","type":"device"},{"name":"FramerStoreIcon","type":"device"}]}}
                    packageInfo.__framer__.packageJson.design = designJson
                    return packageInfo
                }

                packages["@framer/framer.device-skin-apple-macbook"] = () => {
                    var packageInfo = {}
                    var designJson
                    try {
                        packageInfo = __webpack_require__(/*! framer-package-loader!@framer/framer.device-skin-apple-macbook */ "framer-package-loader.js!./node_modules/@framer/framer.device-skin-apple-macbook/build/index.js")
                        designJson = __webpack_require__(/*! ./designDependencies.js */ "./designDependencies.js")["@framer/framer.device-skin-apple-macbook"]
                    } catch (e) {
                        console.log(e)
                    }
                    packageInfo.__framer__ = packageInfo.__framer__ || {}
                    packageInfo.__framer__.packageJson = {"name":"@framer/framer.device-skin-apple-macbook","version":"1.0.0","main":"build/index.js","license":"MIT","devDependencies":{"typescript":"^2.9.2"},"framer":{"components":[{"name":"DeviceSkin","type":"deviceSkin"}]}}
                    packageInfo.__framer__.packageJson.design = designJson
                    return packageInfo
                }

packageInfo.dependencies = packages

exports.__framer__ = packageInfo


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: main, license, devDependencies, peerDependencies, framer, author, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"main\":\"dist/index.js\",\"license\":\"MIT\",\"devDependencies\":{\"@framer/framer.device-skin-apple-macbook\":\"^1.0.0\",\"@types/react\":\"^16.8\"},\"peerDependencies\":{\"framer\":\"^1.0\",\"react\":\"^16.8\"},\"framer\":{\"id\":\"48c5a97a-f71c-4af4-a950-72c682e2c62e\"},\"author\":\"Виктор Новиков\"}");

/***/ }),

/***/ "framer":
/*!******************************************************************************************!*\
  !*** external {"root":"Framer","commonjs2":"framer","commonjs":"framer","amd":"framer"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_framer__;

/***/ })

/******/ });
});