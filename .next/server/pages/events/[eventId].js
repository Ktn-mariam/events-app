module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/events/[eventId].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/event-detail/event-content.js":
/*!**************************************************!*\
  !*** ./components/event-detail/event-content.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _event_content_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-content.module.css */ "./components/event-detail/event-content.module.css");
/* harmony import */ var _event_content_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_event_content_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\React\\Next.js\\6-practice-project2\\components\\event-detail\\event-content.js";


function EventContent(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: _event_content_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.content,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (EventContent);

/***/ }),

/***/ "./components/event-detail/event-content.module.css":
/*!**********************************************************!*\
  !*** ./components/event-detail/event-content.module.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"content": "event-content_content__2VRI6"
};


/***/ }),

/***/ "./components/event-detail/event-logistics.js":
/*!****************************************************!*\
  !*** ./components/event-detail/event-logistics.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons_address_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/address-icon */ "./components/icons/address-icon.js");
/* harmony import */ var _icons_date_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/date-icon */ "./components/icons/date-icon.js");
/* harmony import */ var _logistics_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logistics-item */ "./components/event-detail/logistics-item.js");
/* harmony import */ var _event_logistics_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event-logistics.module.css */ "./components/event-detail/event-logistics.module.css");
/* harmony import */ var _event_logistics_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_event_logistics_module_css__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\React\\Next.js\\6-practice-project2\\components\\event-detail\\event-logistics.js";





function EventLogistics(props) {
  const {
    date,
    address,
    image,
    imageAlt
  } = props;
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  const addressText = address.replace(', ', '\n');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: _event_logistics_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.logistics,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _event_logistics_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.image,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: `/${image}`,
        alt: imageAlt
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: _event_logistics_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.list,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_logistics_item__WEBPACK_IMPORTED_MODULE_3__["default"], {
        icon: _icons_date_icon__WEBPACK_IMPORTED_MODULE_2__["default"],
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("time", {
          children: humanReadableDate
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_logistics_item__WEBPACK_IMPORTED_MODULE_3__["default"], {
        icon: _icons_address_icon__WEBPACK_IMPORTED_MODULE_1__["default"],
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("address", {
          children: addressText
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (EventLogistics);

/***/ }),

/***/ "./components/event-detail/event-logistics.module.css":
/*!************************************************************!*\
  !*** ./components/event-detail/event-logistics.module.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"logistics": "event-logistics_logistics__3HiYD",
	"image": "event-logistics_image__1ED6X",
	"list": "event-logistics_list__59rDU"
};


/***/ }),

/***/ "./components/event-detail/event-summary.js":
/*!**************************************************!*\
  !*** ./components/event-detail/event-summary.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _event_summary_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-summary.module.css */ "./components/event-detail/event-summary.module.css");
/* harmony import */ var _event_summary_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_event_summary_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\React\\Next.js\\6-practice-project2\\components\\event-detail\\event-summary.js";


function EventSummary(props) {
  const {
    title
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: _event_summary_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.summary,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (EventSummary);

/***/ }),

/***/ "./components/event-detail/event-summary.module.css":
/*!**********************************************************!*\
  !*** ./components/event-detail/event-summary.module.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"summary": "event-summary_summary__3PCze"
};


/***/ }),

/***/ "./components/event-detail/logistics-item.js":
/*!***************************************************!*\
  !*** ./components/event-detail/logistics-item.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _logistics_item_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logistics-item.module.css */ "./components/event-detail/logistics-item.module.css");
/* harmony import */ var _logistics_item_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_logistics_item_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\React\\Next.js\\6-practice-project2\\components\\event-detail\\logistics-item.js";


function LogisticsItem(props) {
  const {
    icon: Icon
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
    className: _logistics_item_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.item,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: _logistics_item_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.icon,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icon, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: _logistics_item_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.content,
      children: props.children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (LogisticsItem);

/***/ }),

/***/ "./components/event-detail/logistics-item.module.css":
/*!***********************************************************!*\
  !*** ./components/event-detail/logistics-item.module.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"item": "logistics-item_item__1FERm",
	"icon": "logistics-item_icon__1DIos"
};


/***/ }),

/***/ "./components/icons/address-icon.js":
/*!******************************************!*\
  !*** ./components/icons/address-icon.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\React\\Next.js\\6-practice-project2\\components\\icons\\address-icon.js";

function AddressIcon() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (AddressIcon);

/***/ }),

/***/ "./components/icons/date-icon.js":
/*!***************************************!*\
  !*** ./components/icons/date-icon.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\React\\Next.js\\6-practice-project2\\components\\icons\\date-icon.js";

function DateIcon() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (DateIcon);

/***/ }),

/***/ "./dummy-data.js":
/*!***********************!*\
  !*** ./dummy-data.js ***!
  \***********************/
/*! exports provided: getFeaturedEvents, getAllEvents, getFilteredEvents, getEventById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFeaturedEvents", function() { return getFeaturedEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllEvents", function() { return getAllEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFilteredEvents", function() { return getFilteredEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEventById", function() { return getEventById; });
const DUMMY_EVENTS = [{
  id: 'e1',
  title: 'Programming for everyone',
  description: 'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
  location: 'Somestreet 25, 12345 San Somewhereo',
  date: '2021-05-12',
  image: 'images/coding-event.jpg',
  isFeatured: false
}, {
  id: 'e2',
  title: 'Networking for introverts',
  description: "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
  location: 'New Wall Street 5, 98765 New Work',
  date: '2021-05-30',
  image: 'images/introvert-event.jpg',
  isFeatured: true
}, {
  id: 'e3',
  title: 'Networking for extroverts',
  description: 'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
  location: 'My Street 12, 10115 Broke City',
  date: '2022-04-10',
  image: 'images/extrovert-event.jpg',
  isFeatured: true
}];
function getFeaturedEvents() {
  return DUMMY_EVENTS.filter(event => event.isFeatured);
}
function getAllEvents() {
  return DUMMY_EVENTS;
}
async function getFilteredEvents(dateFilter) {
  const {
    year,
    month
  } = dateFilter;
  const allEvents = await getAllEvents();
  let filteredEvents = allEvents.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });
  return filteredEvents;
}
function getEventById(id) {
  return DUMMY_EVENTS.find(event => event.id === id);
}

/***/ }),

/***/ "./pages/events/[eventId].js":
/*!***********************************!*\
  !*** ./pages/events/[eventId].js ***!
  \***********************************/
/*! exports provided: getStaticProps, getStaticPaths, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dummy_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dummy-data */ "./dummy-data.js");
/* harmony import */ var _components_event_detail_event_summary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/event-detail/event-summary */ "./components/event-detail/event-summary.js");
/* harmony import */ var _components_event_detail_event_logistics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/event-detail/event-logistics */ "./components/event-detail/event-logistics.js");
/* harmony import */ var _components_event_detail_event_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/event-detail/event-content */ "./components/event-detail/event-content.js");


var _jsxFileName = "C:\\React\\Next.js\\6-practice-project2\\pages\\events\\[eventId].js";





function EventDetailPage(props) {
  const event = props.selectedEvent;

  if (!event) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Loading..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_event_detail_event_summary__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: event.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_event_detail_event_logistics__WEBPACK_IMPORTED_MODULE_3__["default"], {
      date: event.date,
      address: event.location,
      image: event.image,
      imageAlt: event.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_event_detail_event_content__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: event.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

async function getStaticProps(context) {
  const eventId = context.params.eventId;
  const event = await Object(_dummy_data__WEBPACK_IMPORTED_MODULE_1__["getEventById"])(eventId);
  return {
    props: {
      selectedEvent: event
    },
    revalidate: 30
  };
}
async function getStaticPaths() {
  const events = await Object(_dummy_data__WEBPACK_IMPORTED_MODULE_1__["getFeaturedEvents"])();
  const paths = events.map(event => ({
    params: {
      eventId: event.id
    }
  }));
  return {
    paths: paths,
    fallback: true
  };
}
/* harmony default export */ __webpack_exports__["default"] = (EventDetailPage);

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ldmVudC1kZXRhaWwvZXZlbnQtY29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2V2ZW50LWRldGFpbC9ldmVudC1jb250ZW50Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ldmVudC1kZXRhaWwvZXZlbnQtbG9naXN0aWNzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZXZlbnQtZGV0YWlsL2V2ZW50LWxvZ2lzdGljcy5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZXZlbnQtZGV0YWlsL2V2ZW50LXN1bW1hcnkuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ldmVudC1kZXRhaWwvZXZlbnQtc3VtbWFyeS5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZXZlbnQtZGV0YWlsL2xvZ2lzdGljcy1pdGVtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZXZlbnQtZGV0YWlsL2xvZ2lzdGljcy1pdGVtLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29ucy9hZGRyZXNzLWljb24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29ucy9kYXRlLWljb24uanMiLCJ3ZWJwYWNrOi8vLy4vZHVtbXktZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9ldmVudHMvW2V2ZW50SWRdLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkV2ZW50Q29udGVudCIsInByb3BzIiwiY2xhc3NlcyIsImNvbnRlbnQiLCJjaGlsZHJlbiIsIkV2ZW50TG9naXN0aWNzIiwiZGF0ZSIsImFkZHJlc3MiLCJpbWFnZSIsImltYWdlQWx0IiwiaHVtYW5SZWFkYWJsZURhdGUiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiZGF5IiwibW9udGgiLCJ5ZWFyIiwiYWRkcmVzc1RleHQiLCJyZXBsYWNlIiwibG9naXN0aWNzIiwibGlzdCIsIkRhdGVJY29uIiwiQWRkcmVzc0ljb24iLCJFdmVudFN1bW1hcnkiLCJ0aXRsZSIsInN1bW1hcnkiLCJMb2dpc3RpY3NJdGVtIiwiaWNvbiIsIkljb24iLCJpdGVtIiwiRFVNTVlfRVZFTlRTIiwiaWQiLCJkZXNjcmlwdGlvbiIsImxvY2F0aW9uIiwiaXNGZWF0dXJlZCIsImdldEZlYXR1cmVkRXZlbnRzIiwiZmlsdGVyIiwiZXZlbnQiLCJnZXRBbGxFdmVudHMiLCJnZXRGaWx0ZXJlZEV2ZW50cyIsImRhdGVGaWx0ZXIiLCJhbGxFdmVudHMiLCJmaWx0ZXJlZEV2ZW50cyIsImV2ZW50RGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXRFdmVudEJ5SWQiLCJmaW5kIiwiRXZlbnREZXRhaWxQYWdlIiwic2VsZWN0ZWRFdmVudCIsImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsImV2ZW50SWQiLCJwYXJhbXMiLCJyZXZhbGlkYXRlIiwiZ2V0U3RhdGljUGF0aHMiLCJldmVudHMiLCJwYXRocyIsIm1hcCIsImZhbGxiYWNrIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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QUssQ0FBQ2I7QUFKbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBUUUscUVBQUMsOEVBQUQ7QUFBQSw2QkFDRTtBQUFBLGtCQUFJYSxLQUFLLENBQUNMO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSRjtBQUFBLGtCQURGO0FBY0Q7O0FBRU0sZUFBZWtCLGNBQWYsQ0FBOEJDLE9BQTlCLEVBQXVDO0FBQzVDLFFBQU1DLE9BQU8sR0FBR0QsT0FBTyxDQUFDRSxNQUFSLENBQWVELE9BQS9CO0FBQ0EsUUFBTWYsS0FBSyxHQUFHLE1BQU1TLGdFQUFZLENBQUNNLE9BQUQsQ0FBaEM7QUFDQSxTQUFPO0FBQ0xsRCxTQUFLLEVBQUU7QUFDTCtDLG1CQUFhLEVBQUVaO0FBRFYsS0FERjtBQUlMaUIsY0FBVSxFQUFFO0FBSlAsR0FBUDtBQU1EO0FBRU0sZUFBZUMsY0FBZixHQUFnQztBQUNyQyxRQUFNQyxNQUFNLEdBQUcsTUFBTXJCLHFFQUFpQixFQUF0QztBQUNBLFFBQU1zQixLQUFLLEdBQUdELE1BQU0sQ0FBQ0UsR0FBUCxDQUFZckIsS0FBRCxLQUFZO0FBQUVnQixVQUFNLEVBQUU7QUFBRUQsYUFBTyxFQUFFZixLQUFLLENBQUNOO0FBQWpCO0FBQVYsR0FBWixDQUFYLENBQWQ7QUFFQSxTQUFPO0FBQ0wwQixTQUFLLEVBQUVBLEtBREY7QUFFTEUsWUFBUSxFQUFFO0FBRkwsR0FBUDtBQUlEO0FBRWNYLDhFQUFmLEU7Ozs7Ozs7Ozs7O0FDbkRBLGtEIiwiZmlsZSI6InBhZ2VzL2V2ZW50cy9bZXZlbnRJZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2V2ZW50cy9bZXZlbnRJZF0uanNcIik7XG4iLCJpbXBvcnQgY2xhc3NlcyBmcm9tICcuL2V2ZW50LWNvbnRlbnQubW9kdWxlLmNzcyc7XG5cbmZ1bmN0aW9uIEV2ZW50Q29udGVudChwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50Q29udGVudDtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRlbnRcIjogXCJldmVudC1jb250ZW50X2NvbnRlbnRfXzJWUkk2XCJcbn07XG4iLCJpbXBvcnQgQWRkcmVzc0ljb24gZnJvbSAnLi4vaWNvbnMvYWRkcmVzcy1pY29uJztcbmltcG9ydCBEYXRlSWNvbiBmcm9tICcuLi9pY29ucy9kYXRlLWljb24nO1xuaW1wb3J0IExvZ2lzdGljc0l0ZW0gZnJvbSAnLi9sb2dpc3RpY3MtaXRlbSc7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL2V2ZW50LWxvZ2lzdGljcy5tb2R1bGUuY3NzJztcblxuZnVuY3Rpb24gRXZlbnRMb2dpc3RpY3MocHJvcHMpIHtcbiAgY29uc3QgeyBkYXRlLCBhZGRyZXNzLCBpbWFnZSwgaW1hZ2VBbHQgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGh1bWFuUmVhZGFibGVEYXRlID0gbmV3IERhdGUoZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1VUycsIHtcbiAgICBkYXk6ICdudW1lcmljJyxcbiAgICBtb250aDogJ2xvbmcnLFxuICAgIHllYXI6ICdudW1lcmljJyxcbiAgfSk7XG4gIGNvbnN0IGFkZHJlc3NUZXh0ID0gYWRkcmVzcy5yZXBsYWNlKCcsICcsICdcXG4nKTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dpc3RpY3N9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9PlxuICAgICAgICA8aW1nIHNyYz17YC8ke2ltYWdlfWB9IGFsdD17aW1hZ2VBbHR9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDx1bCBjbGFzc05hbWU9e2NsYXNzZXMubGlzdH0+XG4gICAgICAgIDxMb2dpc3RpY3NJdGVtIGljb249e0RhdGVJY29ufT5cbiAgICAgICAgICA8dGltZT57aHVtYW5SZWFkYWJsZURhdGV9PC90aW1lPlxuICAgICAgICA8L0xvZ2lzdGljc0l0ZW0+XG4gICAgICAgIDxMb2dpc3RpY3NJdGVtIGljb249e0FkZHJlc3NJY29ufT5cbiAgICAgICAgICA8YWRkcmVzcz57YWRkcmVzc1RleHR9PC9hZGRyZXNzPlxuICAgICAgICA8L0xvZ2lzdGljc0l0ZW0+XG4gICAgICA8L3VsPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRMb2dpc3RpY3M7XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJsb2dpc3RpY3NcIjogXCJldmVudC1sb2dpc3RpY3NfbG9naXN0aWNzX18zSGlZRFwiLFxuXHRcImltYWdlXCI6IFwiZXZlbnQtbG9naXN0aWNzX2ltYWdlX18xRUQ2WFwiLFxuXHRcImxpc3RcIjogXCJldmVudC1sb2dpc3RpY3NfbGlzdF9fNTlyRFVcIlxufTtcbiIsImltcG9ydCBjbGFzc2VzIGZyb20gJy4vZXZlbnQtc3VtbWFyeS5tb2R1bGUuY3NzJztcblxuZnVuY3Rpb24gRXZlbnRTdW1tYXJ5KHByb3BzKSB7XG4gIGNvbnN0IHsgdGl0bGUgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLnN1bW1hcnl9PlxuICAgICAgPGgxPnt0aXRsZX08L2gxPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRTdW1tYXJ5OyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInN1bW1hcnlcIjogXCJldmVudC1zdW1tYXJ5X3N1bW1hcnlfXzNQQ3plXCJcbn07XG4iLCJpbXBvcnQgY2xhc3NlcyBmcm9tICcuL2xvZ2lzdGljcy1pdGVtLm1vZHVsZS5jc3MnO1xuXG5mdW5jdGlvbiBMb2dpc3RpY3NJdGVtKHByb3BzKSB7XG4gIGNvbnN0IHsgaWNvbjogSWNvbiB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW19PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmljb259PlxuICAgICAgICA8SWNvbiAvPlxuICAgICAgPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9Pntwcm9wcy5jaGlsZHJlbn08L3NwYW4+XG4gICAgPC9saT5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naXN0aWNzSXRlbTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIml0ZW1cIjogXCJsb2dpc3RpY3MtaXRlbV9pdGVtX18xRkVSbVwiLFxuXHRcImljb25cIjogXCJsb2dpc3RpY3MtaXRlbV9pY29uX18xRElvc1wiXG59O1xuIiwiZnVuY3Rpb24gQWRkcmVzc0ljb24oKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuICAgICAgZmlsbD0nbm9uZSdcbiAgICAgIHZpZXdCb3g9JzAgMCAyNCAyNCdcbiAgICAgIHN0cm9rZT0nY3VycmVudENvbG9yJ1xuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIHN0cm9rZUxpbmVjYXA9J3JvdW5kJ1xuICAgICAgICBzdHJva2VMaW5lam9pbj0ncm91bmQnXG4gICAgICAgIHN0cm9rZVdpZHRoPXsyfVxuICAgICAgICBkPSdNMTcuNjU3IDE2LjY1N0wxMy40MTQgMjAuOWExLjk5OCAxLjk5OCAwIDAxLTIuODI3IDBsLTQuMjQ0LTQuMjQzYTggOCAwIDExMTEuMzE0IDB6J1xuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIHN0cm9rZUxpbmVjYXA9J3JvdW5kJ1xuICAgICAgICBzdHJva2VMaW5lam9pbj0ncm91bmQnXG4gICAgICAgIHN0cm9rZVdpZHRoPXsyfVxuICAgICAgICBkPSdNMTUgMTFhMyAzIDAgMTEtNiAwIDMgMyAwIDAxNiAweidcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFkZHJlc3NJY29uO1xuIiwiZnVuY3Rpb24gRGF0ZUljb24oKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuICAgICAgZmlsbD0nbm9uZSdcbiAgICAgIHZpZXdCb3g9JzAgMCAyNCAyNCdcbiAgICAgIHN0cm9rZT0nY3VycmVudENvbG9yJ1xuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIHN0cm9rZUxpbmVjYXA9J3JvdW5kJ1xuICAgICAgICBzdHJva2VMaW5lam9pbj0ncm91bmQnXG4gICAgICAgIHN0cm9rZVdpZHRoPXsyfVxuICAgICAgICBkPSdNOCA3VjNtOCA0VjNtLTkgOGgxME01IDIxaDE0YTIgMiAwIDAwMi0yVjdhMiAyIDAgMDAtMi0ySDVhMiAyIDAgMDAtMiAydjEyYTIgMiAwIDAwMiAyeidcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IERhdGVJY29uOyIsImNvbnN0IERVTU1ZX0VWRU5UUyA9IFtcclxuICB7XHJcbiAgICBpZDogJ2UxJyxcclxuICAgIHRpdGxlOiAnUHJvZ3JhbW1pbmcgZm9yIGV2ZXJ5b25lJyxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAnRXZlcnlvbmUgY2FuIGxlYXJuIHRvIGNvZGUhIFllcywgZXZlcnlvbmUhIEluIHRoaXMgbGl2ZSBldmVudCwgd2UgYXJlIGdvaW5nIHRvIGdvIHRocm91Z2ggYWxsIHRoZSBrZXkgYmFzaWNzIGFuZCBnZXQgeW91IHN0YXJ0ZWQgd2l0aCBwcm9ncmFtbWluZyBhcyB3ZWxsLicsXHJcbiAgICBsb2NhdGlvbjogJ1NvbWVzdHJlZXQgMjUsIDEyMzQ1IFNhbiBTb21ld2hlcmVvJyxcclxuICAgIGRhdGU6ICcyMDIxLTA1LTEyJyxcclxuICAgIGltYWdlOiAnaW1hZ2VzL2NvZGluZy1ldmVudC5qcGcnLFxyXG4gICAgaXNGZWF0dXJlZDogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJ2UyJyxcclxuICAgIHRpdGxlOiAnTmV0d29ya2luZyBmb3IgaW50cm92ZXJ0cycsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJXZSBrbm93OiBOZXR3b3JraW5nIGlzIG5vIGZ1biBpZiB5b3UgYXJlIGFuIGludHJvdmVydCBwZXJzb24uIFRoYXQncyB3aHkgd2UgY2FtZSB1cCB3aXRoIHRoaXMgZXZlbnQgLSBpdCdsbCBiZSBzbyBtdWNoIGVhc2llci4gUHJvbWlzZWQhXCIsXHJcbiAgICBsb2NhdGlvbjogJ05ldyBXYWxsIFN0cmVldCA1LCA5ODc2NSBOZXcgV29yaycsXHJcbiAgICBkYXRlOiAnMjAyMS0wNS0zMCcsXHJcbiAgICBpbWFnZTogJ2ltYWdlcy9pbnRyb3ZlcnQtZXZlbnQuanBnJyxcclxuICAgIGlzRmVhdHVyZWQ6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJ2UzJyxcclxuICAgIHRpdGxlOiAnTmV0d29ya2luZyBmb3IgZXh0cm92ZXJ0cycsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgJ1lvdSBwcm9iYWJseSBuZWVkIG5vIGhlbHAgd2l0aCBuZXR3b3JraW5nIGluIGdlbmVyYWwuIEJ1dCBmb2N1c2luZyB5b3VyIGVuZXJneSBjb3JyZWN0bHkgLSB0aGF0IGlzIHNvbWV0aGluZyB3aGVyZSBtb3N0IHBlb3BsZSBjYW4gaW1wcm92ZS4nLFxyXG4gICAgbG9jYXRpb246ICdNeSBTdHJlZXQgMTIsIDEwMTE1IEJyb2tlIENpdHknLFxyXG4gICAgZGF0ZTogJzIwMjItMDQtMTAnLFxyXG4gICAgaW1hZ2U6ICdpbWFnZXMvZXh0cm92ZXJ0LWV2ZW50LmpwZycsXHJcbiAgICBpc0ZlYXR1cmVkOiB0cnVlLFxyXG4gIH0sXHJcbl1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRGZWF0dXJlZEV2ZW50cygpIHtcclxuICByZXR1cm4gRFVNTVlfRVZFTlRTLmZpbHRlcigoZXZlbnQpID0+IGV2ZW50LmlzRmVhdHVyZWQpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxFdmVudHMoKSB7XHJcbiAgcmV0dXJuIERVTU1ZX0VWRU5UU1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RmlsdGVyZWRFdmVudHMoZGF0ZUZpbHRlcikge1xyXG4gIGNvbnN0IHsgeWVhciwgbW9udGggfSA9IGRhdGVGaWx0ZXJcclxuXHJcbiAgY29uc3QgYWxsRXZlbnRzID0gYXdhaXQgZ2V0QWxsRXZlbnRzKClcclxuICBsZXQgZmlsdGVyZWRFdmVudHMgPSBhbGxFdmVudHMuZmlsdGVyKChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgZXZlbnREYXRlID0gbmV3IERhdGUoZXZlbnQuZGF0ZSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgIGV2ZW50RGF0ZS5nZXRGdWxsWWVhcigpID09PSB5ZWFyICYmIGV2ZW50RGF0ZS5nZXRNb250aCgpID09PSBtb250aCAtIDFcclxuICAgIClcclxuICB9KVxyXG5cclxuICByZXR1cm4gZmlsdGVyZWRFdmVudHNcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEV2ZW50QnlJZChpZCkge1xyXG4gIHJldHVybiBEVU1NWV9FVkVOVFMuZmluZCgoZXZlbnQpID0+IGV2ZW50LmlkID09PSBpZClcclxufVxyXG4iLCJpbXBvcnQgeyBnZXRFdmVudEJ5SWQsIGdldEZlYXR1cmVkRXZlbnRzIH0gZnJvbSAnLi4vLi4vZHVtbXktZGF0YSdcclxuaW1wb3J0IEV2ZW50U3VtbWFyeSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2V2ZW50LWRldGFpbC9ldmVudC1zdW1tYXJ5J1xyXG5pbXBvcnQgRXZlbnRMb2dpc3RpY3MgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9ldmVudC1kZXRhaWwvZXZlbnQtbG9naXN0aWNzJ1xyXG5pbXBvcnQgRXZlbnRDb250ZW50IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZXZlbnQtZGV0YWlsL2V2ZW50LWNvbnRlbnQnXHJcblxyXG5mdW5jdGlvbiBFdmVudERldGFpbFBhZ2UocHJvcHMpIHtcclxuICBjb25zdCBldmVudCA9IHByb3BzLnNlbGVjdGVkRXZlbnRcclxuICBpZiAoIWV2ZW50KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlclwiPlxyXG4gICAgICAgIDxwPkxvYWRpbmcuLi48L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEV2ZW50U3VtbWFyeSB0aXRsZT17ZXZlbnQudGl0bGV9IC8+XHJcbiAgICAgIDxFdmVudExvZ2lzdGljc1xyXG4gICAgICAgIGRhdGU9e2V2ZW50LmRhdGV9XHJcbiAgICAgICAgYWRkcmVzcz17ZXZlbnQubG9jYXRpb259XHJcbiAgICAgICAgaW1hZ2U9e2V2ZW50LmltYWdlfVxyXG4gICAgICAgIGltYWdlQWx0PXtldmVudC50aXRsZX1cclxuICAgICAgLz5cclxuICAgICAgPEV2ZW50Q29udGVudD5cclxuICAgICAgICA8cD57ZXZlbnQuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICA8L0V2ZW50Q29udGVudD5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCBldmVudElkID0gY29udGV4dC5wYXJhbXMuZXZlbnRJZFxyXG4gIGNvbnN0IGV2ZW50ID0gYXdhaXQgZ2V0RXZlbnRCeUlkKGV2ZW50SWQpXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHNlbGVjdGVkRXZlbnQ6IGV2ZW50LFxyXG4gICAgfSxcclxuICAgIHJldmFsaWRhdGU6IDMwLFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIGNvbnN0IGV2ZW50cyA9IGF3YWl0IGdldEZlYXR1cmVkRXZlbnRzKClcclxuICBjb25zdCBwYXRocyA9IGV2ZW50cy5tYXAoKGV2ZW50KSA9PiAoeyBwYXJhbXM6IHsgZXZlbnRJZDogZXZlbnQuaWQgfSB9KSlcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzOiBwYXRocyxcclxuICAgIGZhbGxiYWNrOiB0cnVlLFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXZlbnREZXRhaWxQYWdlXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9