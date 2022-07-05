(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+PU9":
/*!******************************************************************!*\
  !*** ./src/app/demo/components/customise/customise.component.ts ***!
  \******************************************************************/
/*! exports provided: CustomiseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomiseComponent", function() { return CustomiseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var ng2_op_image_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-op-image-upload */ "WM2x");



var CustomiseComponent = /** @class */ (function () {
    function CustomiseComponent() {
    }
    CustomiseComponent.ɵfac = function CustomiseComponent_Factory(t) { return new (t || CustomiseComponent)(); };
    CustomiseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomiseComponent, selectors: [["customise"]], decls: 6, vars: 0, consts: [[1, "mb-3", "mt-5"], ["url", "http://mockbin.org/request", "buttonCaption", "PRESS ME AAAAAAAAAH", "dropBoxMessage", "DROP ON ME AAAAAAAAAH", "clearButtonCaption", "CLEAR ME AAAAAAAAAH"], [1, "language-markup"]], template: function CustomiseComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Custom Labels");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "image-upload", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "pre");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "code", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "<image-upload\n  url=\"http://mockbin.org/request\"\n  buttonCaption=\"PRESS ME AAAAAAAAAH\"\n  dropBoxMessage=\"DROP ON ME AAAAAAAAAH\"\n  clearButtonCaption=\"CLEAR ME AAAAAAAAAH\">\n</image-upload>");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [ng2_op_image_upload__WEBPACK_IMPORTED_MODULE_1__["ImageUploadComponent"]], encapsulation: 2 });
    return CustomiseComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomiseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'customise',
                templateUrl: './customise.component.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "+ksE":
/*!***************************************************!*\
  !*** ./src/app/demo/components/demo.component.ts ***!
  \***************************************************/
/*! exports provided: DemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoComponent", function() { return DemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismjs */ "n5u1");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _basic_basic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic/basic.component */ "8O13");
/* harmony import */ var _filter_filter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter/filter.component */ "t8Qz");
/* harmony import */ var _customise_customise_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customise/customise.component */ "+PU9");
/* harmony import */ var _events_events_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./events/events.component */ "MlNi");
/* harmony import */ var _style_style_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style/style.component */ "VWjp");
/* harmony import */ var _uploaded_uploaded_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./uploaded/uploaded.component */ "AxmK");
/* harmony import */ var _disabled_disabled_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./disabled/disabled.component */ "PjtW");










var DemoComponent = /** @class */ (function () {
    function DemoComponent() {
    }
    DemoComponent.prototype.ngOnInit = function () {
        prismjs__WEBPACK_IMPORTED_MODULE_1__["highlightAll"](false);
    };
    DemoComponent.ɵfac = function DemoComponent_Factory(t) { return new (t || DemoComponent)(); };
    DemoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DemoComponent, selectors: [["ng-component"]], decls: 8, vars: 0, consts: [["highlight-js-content", ".highlight", 1, "container", "mb-5"]], template: function DemoComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "basic");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "filter");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "customise");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "events");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "styles");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "uploaded");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "disabled");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_basic_basic_component__WEBPACK_IMPORTED_MODULE_2__["BasicExampleComponent"], _filter_filter_component__WEBPACK_IMPORTED_MODULE_3__["FilterExampleComponent"], _customise_customise_component__WEBPACK_IMPORTED_MODULE_4__["CustomiseComponent"], _events_events_component__WEBPACK_IMPORTED_MODULE_5__["EventsComponent"], _style_style_component__WEBPACK_IMPORTED_MODULE_6__["StyleComponent"], _uploaded_uploaded_component__WEBPACK_IMPORTED_MODULE_7__["UploadedExampleComponent"], _disabled_disabled_component__WEBPACK_IMPORTED_MODULE_8__["DisabledExampleComponent"]], encapsulation: 2 });
    return DemoComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DemoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './demo.component.html'
            }]
    }], null, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/andrewlynn/Documents/code/ng2-image-upload/projects/ng2-image-upload-demo/src/main.ts */"zUnb");


/***/ }),

/***/ "8O13":
/*!**********************************************************!*\
  !*** ./src/app/demo/components/basic/basic.component.ts ***!
  \**********************************************************/
/*! exports provided: BasicExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicExampleComponent", function() { return BasicExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var ng2_op_image_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-op-image-upload */ "WM2x");



var BasicExampleComponent = /** @class */ (function () {
    function BasicExampleComponent() {
        this.myHeaders = {
            'Authorization': 'MyToken',
            'Another-Header': 'AnotherValue'
        };
    }
    BasicExampleComponent.ɵfac = function BasicExampleComponent_Factory(t) { return new (t || BasicExampleComponent)(); };
    BasicExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BasicExampleComponent, selectors: [["basic"]], decls: 16, vars: 1, consts: [[1, "mb-3", "mt-3"], ["url", "http://mockbin.org/request"], [1, "language-markup"], ["url", "http://mockbin.org/request", 3, "headers"], [1, "language-typescript"]], template: function BasicExampleComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Basic Usage");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "image-upload", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "pre");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "code", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "<image-upload url=\"http://mockbin.org/request\"></image-upload>");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "With headers");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "image-upload", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "pre");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "code", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "<image-upload url=\"http://mockbin.org/request\" [headers]=\"myHeaders\"></image-upload>");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "pre");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "code", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "myHeaders: { [header: string]: string | string[] } = {\n  'Authorization': 'MyToken',\n  'Another-Header': 'AnotherValue'\n};");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("headers", ctx.myHeaders);
        } }, directives: [ng2_op_image_upload__WEBPACK_IMPORTED_MODULE_1__["ImageUploadComponent"]], encapsulation: 2 });
    return BasicExampleComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasicExampleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'basic',
                templateUrl: './basic.component.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "AxmK":
/*!****************************************************************!*\
  !*** ./src/app/demo/components/uploaded/uploaded.component.ts ***!
  \****************************************************************/
/*! exports provided: UploadedExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadedExampleComponent", function() { return UploadedExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var ng2_op_image_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-op-image-upload */ "WM2x");



var UploadedExampleComponent = /** @class */ (function () {
    function UploadedExampleComponent() {
        this.images = [];
    }
    UploadedExampleComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.images = [
                'https://static.independent.co.uk/s3fs-public/styles/story_medium/public/thumbnails/image/2016/10/11/14/beats-logo-1200-80.jpg',
                'https://s-media-cache-ak0.pinimg.com/originals/68/fb/c7/68fbc7bc9eb8c530c6e804c4109ec647.jpg',
                { fileName: 'google-image.jpg', url: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' }
            ];
        }, 1000);
    };
    UploadedExampleComponent.ɵfac = function UploadedExampleComponent_Factory(t) { return new (t || UploadedExampleComponent)(); };
    UploadedExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UploadedExampleComponent, selectors: [["uploaded"]], decls: 6, vars: 1, consts: [[1, "mb-3", "mt-3"], ["url", "http://mockbin.org/request", 3, "uploadedFiles"], [1, "language-markup"]], template: function UploadedExampleComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Uploaded Usage");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "image-upload", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "pre");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "code", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "<image-upload url=\"http://mockbin.org/request\" [uploadedFiles]=\"images\"></image-upload>");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("uploadedFiles", ctx.images);
        } }, directives: [ng2_op_image_upload__WEBPACK_IMPORTED_MODULE_1__["ImageUploadComponent"]], encapsulation: 2 });
    return UploadedExampleComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UploadedExampleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'uploaded',
                templateUrl: './uploaded.component.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "JP7R":
/*!*************************************!*\
  !*** ./src/app/demo/demo.module.ts ***!
  \*************************************/
/*! exports provided: DemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoModule", function() { return DemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var ng2_op_image_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-op-image-upload */ "WM2x");
/* harmony import */ var _components_basic_basic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/basic/basic.component */ "8O13");
/* harmony import */ var _components_customise_customise_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/customise/customise.component */ "+PU9");
/* harmony import */ var _components_demo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/demo.component */ "+ksE");
/* harmony import */ var _components_disabled_disabled_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/disabled/disabled.component */ "PjtW");
/* harmony import */ var _components_events_events_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/events/events.component */ "MlNi");
/* harmony import */ var _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/filter/filter.component */ "t8Qz");
/* harmony import */ var _components_style_style_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/style/style.component */ "VWjp");
/* harmony import */ var _components_uploaded_uploaded_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/uploaded/uploaded.component */ "AxmK");











var DemoModule = /** @class */ (function () {
    function DemoModule() {
    }
    DemoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DemoModule });
    DemoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DemoModule_Factory(t) { return new (t || DemoModule)(); }, imports: [[
                ng2_op_image_upload__WEBPACK_IMPORTED_MODULE_1__["ImageUploadModule"]
            ]] });
    return DemoModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DemoModule, { declarations: [_components_demo_component__WEBPACK_IMPORTED_MODULE_4__["DemoComponent"],
        _components_basic_basic_component__WEBPACK_IMPORTED_MODULE_2__["BasicExampleComponent"],
        _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_7__["FilterExampleComponent"],
        _components_customise_customise_component__WEBPACK_IMPORTED_MODULE_3__["CustomiseComponent"],
        _components_events_events_component__WEBPACK_IMPORTED_MODULE_6__["EventsComponent"],
        _components_style_style_component__WEBPACK_IMPORTED_MODULE_8__["StyleComponent"],
        _components_uploaded_uploaded_component__WEBPACK_IMPORTED_MODULE_9__["UploadedExampleComponent"],
        _components_disabled_disabled_component__WEBPACK_IMPORTED_MODULE_5__["DisabledExampleComponent"]], imports: [ng2_op_image_upload__WEBPACK_IMPORTED_MODULE_1__["ImageUploadModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DemoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_demo_component__WEBPACK_IMPORTED_MODULE_4__["DemoComponent"],
                    _components_basic_basic_component__WEBPACK_IMPORTED_MODULE_2__["BasicExampleComponent"],
                    _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_7__["FilterExampleComponent"],
                    _components_customise_customise_component__WEBPACK_IMPORTED_MODULE_3__["CustomiseComponent"],
                    _components_events_events_component__WEBPACK_IMPORTED_MODULE_6__["EventsComponent"],
                    _components_style_style_component__WEBPACK_IMPORTED_MODULE_8__["StyleComponent"],
                    _components_uploaded_uploaded_component__WEBPACK_IMPORTED_MODULE_9__["UploadedExampleComponent"],
                    _components_disabled_disabled_component__WEBPACK_IMPORTED_MODULE_5__["DisabledExampleComponent"]
                ],
                imports: [
                    ng2_op_image_upload__WEBPACK_IMPORTED_MODULE_1__["ImageUploadModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "MlNi":
/*!************************************************************!*\
  !*** ./src/app/demo/components/events/events.component.ts ***!
  \************************************************************/
/*! exports provided: EventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsComponent", function() { return EventsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var ng2_op_image_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-op-image-upload */ "WM2x");



var EventsComponent = /** @class */ (function () {
    function EventsComponent() {
    }
    EventsComponent.prototype.onUploadFinished = function (file) {
        console.log(file);
    };
    EventsComponent.prototype.onRemoved = function (file) {
        console.log(file);
    };
    EventsComponent.prototype.onUploadStateChanged = function (state) {
        console.log(state);
    };
    EventsComponent.ɵfac = function EventsComponent_Factory(t) { return new (t || EventsComponent)(); };
    EventsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EventsComponent, selectors: [["events"]], decls: 10, vars: 0, consts: [[1, "mb-3", "mt-5"], ["url", "http://mockbin.org/request", 3, "removed", "uploadFinished", "uploadStateChanged"], [1, "language-markup"], [1, "language-typescript"]], template: function EventsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Events");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "image-upload", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removed", function EventsComponent_Template_image_upload_removed_2_listener($event) { return ctx.onRemoved($event); })("uploadFinished", function EventsComponent_Template_image_upload_uploadFinished_2_listener($event) { return ctx.onUploadFinished($event); })("uploadStateChanged", function EventsComponent_Template_image_upload_uploadStateChanged_2_listener($event) { return ctx.onUploadStateChanged($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "pre");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "code", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "<image-upload\n  url=\"http://mockbin.org/request\"\n  (removed)=\"onRemoved($event)\"\n  (uploadFinished)=\"onUploadFinished($event)\"\n  (uploadStateChanged)=\"onUploadStateChanged($event)\">\n</image-upload>");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "pre");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "code", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "onUploadFinished(file: FileHolder) {\n  console.log(file);\n}\n\nonRemoved(file: FileHolder) {\n  console.log(file);\n}\n\nonUploadStateChanged(state: boolean) {\n  console.log(state);\n}");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [ng2_op_image_upload__WEBPACK_IMPORTED_MODULE_1__["ImageUploadComponent"]], encapsulation: 2 });
    return EventsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'events',
                templateUrl: './events.component.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "PjtW":
/*!****************************************************************!*\
  !*** ./src/app/demo/components/disabled/disabled.component.ts ***!
  \****************************************************************/
/*! exports provided: DisabledExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisabledExampleComponent", function() { return DisabledExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var ng2_op_image_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-op-image-upload */ "WM2x");



var DisabledExampleComponent = /** @class */ (function () {
    function DisabledExampleComponent() {
    }
    DisabledExampleComponent.ɵfac = function DisabledExampleComponent_Factory(t) { return new (t || DisabledExampleComponent)(); };
    DisabledExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DisabledExampleComponent, selectors: [["disabled"]], decls: 6, vars: 1, consts: [[1, "mb-3", "mt-5"], ["url", "http://mockbin.org/request", 3, "disabled"], [1, "language-markup"]], template: function DisabledExampleComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Disable component");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "image-upload", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "pre");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "code", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "<image-upload url=\"http://mockbin.org/request\" [disabled]=\"true\"></image-upload>");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);
        } }, directives: [ng2_op_image_upload__WEBPACK_IMPORTED_MODULE_1__["ImageUploadComponent"]], encapsulation: 2 });
    return DisabledExampleComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DisabledExampleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'disabled',
                templateUrl: './disabled.component.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "PnoO":
/*!*****************************************!*\
  !*** ./src/app/readme/readme.module.ts ***!
  \*****************************************/
/*! exports provided: ReadmeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadmeModule", function() { return ReadmeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _components_readme_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/readme.component */ "Y4KJ");



var ReadmeModule = /** @class */ (function () {
    function ReadmeModule() {
    }
    ReadmeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ReadmeModule });
    ReadmeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ReadmeModule_Factory(t) { return new (t || ReadmeModule)(); }, imports: [[]] });
    return ReadmeModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ReadmeModule, { declarations: [_components_readme_component__WEBPACK_IMPORTED_MODULE_1__["ReadmeComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReadmeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_readme_component__WEBPACK_IMPORTED_MODULE_1__["ReadmeComponent"]
                ],
                imports: []
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 17, vars: 0, consts: [[1, "github-star-button"], ["href", "https://github.com/aberezkin/ng2-image-upload", "data-icon", "octicon-star", "data-size", "large", "data-show-count", "true", "aria-label", "Star aberezkin/ng2-image-upload on GitHub", 1, "github-button"], [1, "jumbotron", "jumbotron-fluid", "text-center"], [1, "display-3"], [1, "lead"], [1, "d-flex", "justify-content-center", "align-items-center", "mb-3"], [1, "nav", "nav-pills"], [1, "nav-item"], ["routerLink", "demo", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "readme", "routerLinkActive", "active", 1, "nav-link"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Star");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Angular Image Upload ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Angular component for image uploading ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Demo");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Readme");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "router-outlet");
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
    return AppComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "VWjp":
/*!**********************************************************!*\
  !*** ./src/app/demo/components/style/style.component.ts ***!
  \**********************************************************/
/*! exports provided: StyleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleComponent", function() { return StyleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var ng2_op_image_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-op-image-upload */ "WM2x");



var StyleComponent = /** @class */ (function () {
    function StyleComponent() {
        this.customStyle = {
            selectButton: {
                'background-color': 'yellow',
                'border-radius': '25px',
                'color': '#000'
            },
            clearButton: {
                'background-color': '#FFF',
                'border-radius': '25px',
                'color': '#000',
                'margin-left': '10px'
            },
            layout: {
                'background-color': 'purple',
                'border-radius': '25px',
                'border': 'none',
                'color': '#FFF',
                'font-size': '15px',
                'margin': '10px',
                'padding-top': '5px',
                'width': '500px'
            },
            previewPanel: {
                'background-color': '#894489',
                'border-radius': '0 0 25px 25px'
            }
        };
    }
    StyleComponent.ɵfac = function StyleComponent_Factory(t) { return new (t || StyleComponent)(); };
    StyleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StyleComponent, selectors: [["styles"]], decls: 20, vars: 2, consts: [[1, "mb-3", "mt-5"], [1, "mb-3", "mt-3"], ["url", "http://mockbin.org/request", 1, "customClass"], [1, "language-markup"], [1, "language-css"], ["url", "http://mockbin.org/request"], [1, "language-typescript"]], template: function StyleComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Styles");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Custom CSS Class");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "image-upload", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "pre");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "code", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "<image-upload url=\"http://mockbin.org/request\" class=\"customClass\"></image-upload>");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "pre");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "code", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, ".customClass {\n    background-color: #dd3;\n    border-radius: 5px;\n    margin:5px;\n    width: 500px;\n}\n\n.customClass .img-ul-upload {\n    background-color: #000 !important;\n}\n\n.customClass .img-ul-clear {\n    background-color: #B819BB !important;\n}\n\n.customClass .img-ul-drag-box-msg {\n    color: purple !important;\n}\n\n.customClass .img-ul-container {\n    background-color: #FF6CAD !important;\n}\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h5", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Custom Style");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "image-upload", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "pre");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "code", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "<image-upload url=\"http://mockbin.org/request\" [style]=\"customStyle\"></image-upload>");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "pre");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "code", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "customStyle = {\n    selectButton: {\n      \"background-color\": \"yellow\",\n      \"border-radius\": \"25px\",\n      \"color\": \"#000\"\n    },\n    clearButton: {\n      \"background-color\": \"#FFF\",\n      \"border-radius\": \"25px\",\n      \"color\": \"#000\",\n      \"margin-left\": \"10px\"\n    },\n    layout: {\n      \"background-color\": \"purple\",\n      \"border-radius\": \"25px\",\n      \"color\": \"#FFF\",\n      \"font-size\": \"15px\",\n      \"margin\": \"10px\",\n      \"padding-top\": \"5px\",\n      \"width\": \"500px\"\n    },\n    previewPanel: {\n      \"background-color\": \"#894489\",\n      \"border-radius\": \"0 0 25px 25px\",\n    }\n  }\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.customStyle);
        } }, directives: [ng2_op_image_upload__WEBPACK_IMPORTED_MODULE_1__["ImageUploadComponent"]], encapsulation: 2 });
    return StyleComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StyleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'styles',
                templateUrl: './style.component.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "WM2x":
/*!******************************************************************************************************!*\
  !*** /Users/andrewlynn/Documents/code/ng2-image-upload/dist/fesm2015/opsuite-ng2-op-image-upload.js ***!
  \******************************************************************************************************/
/*! exports provided: FileHolder, ImageUploadComponent, ImageUploadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileHolder", function() { return FileHolder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageUploadComponent", function() { return ImageUploadComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageUploadModule", function() { return ImageUploadModule; });
/* harmony import */ var _Users_andrewlynn_Documents_code_ng2_image_upload_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /Users/andrewlynn/Documents/code/ng2-image-upload/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "9fIP");
/* harmony import */ var _Users_andrewlynn_Documents_code_ng2_image_upload_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! /Users/andrewlynn/Documents/code/ng2-image-upload/node_modules/@babel/runtime/helpers/esm/createClass */ "MMYH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "vobO");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "D57K");



function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }






var FileDropDirective = /*#__PURE__*/function () {
  function FileDropDirective() {
    Object(_Users_andrewlynn_Documents_code_ng2_image_upload_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FileDropDirective);

    this.fileOver = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    this.fileDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
  }

  Object(_Users_andrewlynn_Documents_code_ng2_image_upload_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FileDropDirective, [{
    key: "onDrop",
    value: function onDrop(event) {
      var dataTransfer = FileDropDirective.getDataTransfer(event);

      if (!FileDropDirective.hasFiles(dataTransfer.types)) {
        return;
      }

      event.preventDefault();
      var files = this.filterFiles(dataTransfer.files);
      event.preventDefault();
      this.fileOver.emit(false);
      this.fileDrop.emit(files);
    }
  }, {
    key: "onDragLeave",
    value: function onDragLeave(event) {
      this.fileOver.emit(false);
    }
  }, {
    key: "onDragOver",
    value: function onDragOver(event) {
      var dataTransfer = FileDropDirective.getDataTransfer(event);

      if (!FileDropDirective.hasFiles(dataTransfer.types)) {
        return;
      }

      dataTransfer.dropEffect = 'copy';
      event.preventDefault();
      this.fileOver.emit(true);
    }
  }, {
    key: "filterFiles",
    value: function filterFiles(files) {
      if (!this.accept || this.accept.length === 0) {
        return files;
      }

      var acceptedFiles = [];

      for (var i = 0; i < files.length; i++) {
        for (var j = 0; j < this.accept.length; j++) {
          if (FileDropDirective.matchRule(this.accept[j], files[i].type)) {
            acceptedFiles.push(files[i]);
            break;
          }
        }
      }

      return acceptedFiles;
    }
  }], [{
    key: "getDataTransfer",
    value: function getDataTransfer(event) {
      return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
    }
  }, {
    key: "hasFiles",
    value: function hasFiles(types) {
      if (!types) {
        return false;
      }

      if (types.indexOf) {
        return types.indexOf('Files') !== -1;
      }

      if (types.contains) {
        return types.contains('Files');
      }

      return false;
    }
  }, {
    key: "matchRule",
    value: function matchRule(rule, candidate) {
      return new RegExp('^' + rule.split('*').join('.*') + '$').test(candidate);
    }
  }]);

  return FileDropDirective;
}();

FileDropDirective.ɵfac = function FileDropDirective_Factory(t) {
  return new (t || FileDropDirective)();
};

FileDropDirective.ɵdir = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"])({
  type: FileDropDirective,
  selectors: [["", "fileDrop", ""]],
  hostBindings: function FileDropDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"])("drop", function FileDropDirective_drop_HostBindingHandler($event) {
        return ctx.onDrop($event);
      })("dragleave", function FileDropDirective_dragleave_HostBindingHandler($event) {
        return ctx.onDragLeave($event);
      })("dragover", function FileDropDirective_dragover_HostBindingHandler($event) {
        return ctx.onDragOver($event);
      });
    }
  },
  inputs: {
    accept: "accept"
  },
  outputs: {
    fileOver: "fileOver",
    fileDrop: "fileDrop"
  }
});
/*@__PURE__*/

(function () {
  Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"])(FileDropDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
    args: [{
      selector: '[fileDrop]'
    }]
  }], null, {
    accept: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    fileOver: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    fileDrop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    onDrop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
      args: ['drop', ['$event']]
    }],
    onDragLeave: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
      args: ['dragleave', ['$event']]
    }],
    onDragOver: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
      args: ['dragover', ['$event']]
    }]
  });
})();

var ImageUploadService = /*#__PURE__*/function () {
  function ImageUploadService(http) {
    Object(_Users_andrewlynn_Documents_code_ng2_image_upload_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ImageUploadService);

    this.http = http;
  }

  Object(_Users_andrewlynn_Documents_code_ng2_image_upload_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ImageUploadService, [{
    key: "uploadImage",
    value: function uploadImage(url, image, headers) {
      var partName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'image';
      var customFormData = arguments.length > 4 ? arguments[4] : undefined;
      var withCredentials = arguments.length > 5 ? arguments[5] : undefined;

      if (!url || url === '') {
        throw new Error('Url is not set! Please set it before doing queries');
      }

      var formData = new FormData();

      if (customFormData) {
        for (var _i = 0, _Object$keys = Object.keys(customFormData); _i < _Object$keys.length; _i++) {
          var key = _Object$keys[_i];
          formData.append(key, customFormData[key]);
        }
      }

      formData.append(partName, image);
      return this.http.post(url, formData, {
        withCredentials: withCredentials,
        headers: headers,
        observe: 'response'
      });
    }
  }]);

  return ImageUploadService;
}();

ImageUploadService.ɵfac = function ImageUploadService_Factory(t) {
  return new (t || ImageUploadService)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
};

ImageUploadService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"])({
  token: ImageUploadService,
  factory: ImageUploadService.ɵfac
});
/*@__PURE__*/

(function () {
  Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"])(ImageUploadService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"]
  }], function () {
    return [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
    }];
  }, null);
})();

var FileHolder = /*#__PURE__*/Object(_Users_andrewlynn_Documents_code_ng2_image_upload_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(function FileHolder(src, file) {
  Object(_Users_andrewlynn_Documents_code_ng2_image_upload_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FileHolder);

  this.src = src;
  this.file = file;
  this.pending = false;
});

var _c0 = ["input"];

var _c1 = function _c1(a0) {
  return {
    "img-ul-disabled": a0
  };
};

function ImageUploadComponent_label_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r6 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"])();

    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"])(0, "label", 7);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"])(1, "span", 8);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"])(2, "input", 9, 10);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"])("change", function ImageUploadComponent_label_2_Template_input_change_2_listener() {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"])(_r6);

      var _r4 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"])(3);

      var ctx_r5 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"])();
      return ctx_r5.onFileChange(_r4.files);
    });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var ctx_r0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"])("ngStyle", ctx_r0.style == null ? null : ctx_r0.style.selectButton)("ngClass", Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"])(6, _c1, ctx_r0.disabled));
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"])("innerText", ctx_r0.buttonCaption);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"])("disabled", ctx_r0.disabled)("accept", ctx_r0.supportedExtensions)("multiple", ctx_r0.max > 1);
  }
}

function ImageUploadComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    var _r8 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"])();

    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"])(0, "button", 11);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"])("click", function ImageUploadComponent_button_3_Template_button_click_0_listener() {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"])(_r8);
      var ctx_r7 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"])();
      return ctx_r7.deleteAll();
    });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var ctx_r1 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"])("disabled", ctx_r1.disabled)("ngStyle", ctx_r1.style == null ? null : ctx_r1.style.clearButton)("innerText", ctx_r1.clearButtonCaption);
  }
}

function ImageUploadComponent_p_5_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"])(0, "p", 12);
  }

  if (rf & 2) {
    var ctx_r2 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"])("innerText", ctx_r2.fileTooLargeMessage);
  }
}

function ImageUploadComponent_div_6_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"])(0, "div", 18);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"])(1, "div", 19);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"])();
  }
}

function ImageUploadComponent_div_6_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r15 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"])();

    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"])(0, "div", 20);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"])("click", function ImageUploadComponent_div_6_div_1_div_2_Template_div_click_0_listener() {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"])(_r15);
      var file_r10 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"])().$implicit;
      var ctx_r13 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"])(2);
      return ctx_r13.deleteFile(file_r10);
    });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"])(1, "span", 21);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var ctx_r12 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"])("ngClass", Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"])(1, _c1, ctx_r12.disabled));
  }
}

var _c2 = function _c2(a0) {
  return {
    "background-image": a0
  };
};

function ImageUploadComponent_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r17 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"])();

    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"])(0, "div", 15);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"])("click", function ImageUploadComponent_div_6_div_1_Template_div_click_0_listener() {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"])(_r17);
      var file_r10 = ctx.$implicit;
      var ctx_r16 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"])(2);
      return ctx_r16.previewFileClicked(file_r10);
    });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"])(1, ImageUploadComponent_div_6_div_1_div_1_Template, 2, 0, "div", 16);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"])(2, ImageUploadComponent_div_6_div_1_div_2_Template, 2, 3, "div", 17);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var file_r10 = ctx.$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"])("ngStyle", Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"])(3, _c2, "url(" + file_r10.src + ")"));
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"])("ngIf", file_r10.pending);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"])("ngIf", !file_r10.pending);
  }
}

function ImageUploadComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"])(0, "div", 13);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"])(1, ImageUploadComponent_div_6_div_1_Template, 3, 5, "div", 14);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var ctx_r3 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"])("ngStyle", ctx_r3.style == null ? null : ctx_r3.style.previewPanel);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"])("ngForOf", ctx_r3.files);
  }
}

var _c3 = function _c3(a0) {
  return {
    "img-ul-file-is-over": a0
  };
};

var ImageUploadComponent = /*#__PURE__*/function () {
  function ImageUploadComponent(imageService) {
    var _this = this;

    Object(_Users_andrewlynn_Documents_code_ng2_image_upload_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ImageUploadComponent);

    this.imageService = imageService;
    this.files = [];
    this.fileCounter = 0;
    this.fileOver = false;
    this.showFileTooLargeMessage = false;

    this.beforeUpload = function (metadata) {
      return metadata;
    };

    this.buttonCaption = 'Select Images';
    this.disabled = false;
    this.cssClass = 'img-ul';
    this.clearButtonCaption = 'Clear';
    this.dropBoxMessage = 'Drop your images here!';
    this.max = 100;
    this.preview = true;
    this.withCredentials = false;
    this.uploadedFiles = [];
    this.removed = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    this.uploadStateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    this.uploadFinished = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    this.previewClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    this.pendingFilesCounter = 0;

    this.onFileOver = function (isOver) {
      return _this.fileOver = isOver;
    };
  }

  Object(_Users_andrewlynn_Documents_code_ng2_image_upload_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ImageUploadComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      if (!this.fileTooLargeMessage) {
        this.fileTooLargeMessage = 'An image was too large and was not uploaded.' + (this.maxFileSize ? ' The maximum file size is ' + this.maxFileSize / 1024 + 'KiB.' : '');
      }

      this.supportedExtensions = this.supportedExtensions ? this.supportedExtensions.map(function (ext) {
        return 'image/' + ext;
      }) : ['image/*'];
    }
  }, {
    key: "deleteAll",
    value: function deleteAll() {
      var _this2 = this;

      this.files.forEach(function (f) {
        return _this2.removed.emit(f);
      });
      this.files = [];
      this.fileCounter = 0;

      if (this.inputElement) {
        this.inputElement.nativeElement.value = '';
      }
    }
  }, {
    key: "deleteFile",
    value: function deleteFile(file) {
      var index = this.files.indexOf(file);
      this.files.splice(index, 1);
      this.fileCounter--;

      if (this.inputElement) {
        this.inputElement.nativeElement.value = '';
      }

      this.removed.emit(file);
    }
  }, {
    key: "previewFileClicked",
    value: function previewFileClicked(file) {
      this.previewClicked.emit(file);
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if (changes.uploadedFiles && changes.uploadedFiles.currentValue.length > 0) {
        this.processUploadedFiles();
      }
    }
  }, {
    key: "onFileChange",
    value: function onFileChange(files) {
      if (this.disabled) return;
      var remainingSlots = this.max - this.fileCounter;
      var filesToUploadNum = files.length > remainingSlots ? remainingSlots : files.length;

      if (this.url && filesToUploadNum !== 0) {
        this.uploadStateChanged.emit(true);
      }

      this.fileCounter += filesToUploadNum;
      this.showFileTooLargeMessage = false;
      this.uploadFiles(files, filesToUploadNum);
    }
  }, {
    key: "onResponse",
    value: function onResponse(response, fileHolder) {
      fileHolder.serverResponse = {
        status: response.status,
        response: response
      };
      fileHolder.pending = false;
      this.uploadFinished.emit(fileHolder);

      if (--this.pendingFilesCounter === 0) {
        this.uploadStateChanged.emit(false);
      }
    }
  }, {
    key: "processUploadedFiles",
    value: function processUploadedFiles() {
      for (var i = 0; i < this.uploadedFiles.length; i++) {
        var data = this.uploadedFiles[i];
        var fileBlob = void 0,
            file = void 0,
            fileUrl = void 0;

        if (data instanceof Object) {
          fileUrl = data.url;
          fileBlob = data.blob ? data.blob : new Blob([data]);
          file = new File([fileBlob], data.fileName);
        } else {
          fileUrl = data;
          fileBlob = new Blob([fileUrl]);
          file = new File([fileBlob], fileUrl);
        }

        this.files.push(new FileHolder(fileUrl, file));
      }
    }
  }, {
    key: "uploadFiles",
    value: function uploadFiles(files, filesToUploadNum) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this3 = this;

        var _loop, i, _ret;

        return _regeneratorRuntime().wrap(function _callee$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop(i) {
                  var file, beforeUploadResult, img, reader;
                  return _regeneratorRuntime().wrap(function _loop$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          file = files[i];

                          if (!(_this3.maxFileSize && file && file.size > _this3.maxFileSize)) {
                            _context.next = 7;
                            break;
                          }

                          _this3.fileCounter--;
                          _this3.inputElement.nativeElement.value = '';
                          _this3.showFileTooLargeMessage = true;

                          _this3.uploadStateChanged.emit(false);

                          return _context.abrupt("return", "continue");

                        case 7:
                          _context.next = 9;
                          return _this3.beforeUpload({
                            file: file,
                            url: _this3.url,
                            abort: false
                          });

                        case 9:
                          beforeUploadResult = _context.sent;

                          if (!beforeUploadResult.abort) {
                            _context.next = 14;
                            break;
                          }

                          _this3.fileCounter--;
                          _this3.inputElement.nativeElement.value = '';
                          return _context.abrupt("return", "continue");

                        case 14:
                          img = document.createElement('img');
                          img.src = window.URL.createObjectURL(beforeUploadResult.file);
                          reader = new FileReader();
                          reader.addEventListener('load', function (event) {
                            var fileHolder = new FileHolder(event.target.result, beforeUploadResult.file);

                            _this3.files.push(fileHolder);

                            _this3.uploadSingleFile(fileHolder, beforeUploadResult.url, beforeUploadResult.formData);
                          }, false);
                          reader.readAsDataURL(beforeUploadResult.file);

                        case 19:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _loop);
                });
                i = 0;

              case 2:
                if (!(i < filesToUploadNum)) {
                  _context2.next = 10;
                  break;
                }

                return _context2.delegateYield(_loop(i), "t0", 4);

              case 4:
                _ret = _context2.t0;

                if (!(_ret === "continue")) {
                  _context2.next = 7;
                  break;
                }

                return _context2.abrupt("continue", 7);

              case 7:
                i++;
                _context2.next = 2;
                break;

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee);
      }));
    }
  }, {
    key: "uploadSingleFile",
    value: function uploadSingleFile(fileHolder) {
      var _this4 = this;

      var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.url;
      var customForm = arguments.length > 2 ? arguments[2] : undefined;

      if (url) {
        this.pendingFilesCounter++;
        fileHolder.pending = true;
        this.imageService.uploadImage(url, fileHolder.file, this.headers, this.partName, customForm, this.withCredentials).subscribe(function (response) {
          return _this4.onResponse(response, fileHolder);
        }, function (error) {
          _this4.onResponse(error, fileHolder);

          _this4.deleteFile(fileHolder);
        });
      } else {
        this.uploadFinished.emit(fileHolder);
      }
    }
  }]);

  return ImageUploadComponent;
}();

ImageUploadComponent.ɵfac = function ImageUploadComponent_Factory(t) {
  return new (t || ImageUploadComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"])(ImageUploadService));
};

ImageUploadComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"])({
  type: ImageUploadComponent,
  selectors: [["image-upload"]],
  viewQuery: function ImageUploadComponent_Query(rf, ctx) {
    if (rf & 1) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"])(_c0, true);
    }

    if (rf & 2) {
      var _t;

      Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"])(_t = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"])()) && (ctx.inputElement = _t.first);
    }
  },
  inputs: {
    beforeUpload: "beforeUpload",
    buttonCaption: "buttonCaption",
    disabled: "disabled",
    cssClass: ["class", "cssClass"],
    clearButtonCaption: "clearButtonCaption",
    dropBoxMessage: "dropBoxMessage",
    fileTooLargeMessage: "fileTooLargeMessage",
    headers: "headers",
    max: "max",
    maxFileSize: "maxFileSize",
    preview: "preview",
    partName: "partName",
    style: "style",
    supportedExtensions: ["extensions", "supportedExtensions"],
    url: "url",
    withCredentials: "withCredentials",
    uploadedFiles: "uploadedFiles"
  },
  outputs: {
    removed: "removed",
    uploadStateChanged: "uploadStateChanged",
    uploadFinished: "uploadFinished",
    previewClicked: "previewClicked"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
  decls: 7,
  vars: 11,
  consts: [["fileDrop", "", 3, "accept", "ngClass", "ngStyle", "fileOver", "fileDrop"], [1, "img-ul-file-upload", "img-ul-hr-inline-group"], ["class", "img-ul-upload img-ul-button", 3, "ngStyle", "ngClass", 4, "ngIf"], ["class", "img-ul-clear img-ul-button", 3, "disabled", "ngStyle", "innerText", "click", 4, "ngIf"], [1, "img-ul-drag-box-msg", 3, "innerText"], ["class", "img-ul-file-too-large", 3, "innerText", 4, "ngIf"], ["class", "img-ul-container img-ul-hr-inline-group", 3, "ngStyle", 4, "ngIf"], [1, "img-ul-upload", "img-ul-button", 3, "ngStyle", "ngClass"], [3, "innerText"], ["type", "file", 3, "disabled", "accept", "multiple", "change"], ["input", ""], [1, "img-ul-clear", "img-ul-button", 3, "disabled", "ngStyle", "innerText", "click"], [1, "img-ul-file-too-large", 3, "innerText"], [1, "img-ul-container", "img-ul-hr-inline-group", 3, "ngStyle"], ["class", "img-ul-image", 3, "ngStyle", "click", 4, "ngFor", "ngForOf"], [1, "img-ul-image", 3, "ngStyle", "click"], ["class", "img-ul-loading-overlay", 4, "ngIf"], ["class", "img-ul-x-mark", 3, "ngClass", "click", 4, "ngIf"], [1, "img-ul-loading-overlay"], [1, "img-ul-spinning-circle"], [1, "img-ul-x-mark", 3, "ngClass", "click"], [1, "img-ul-close"]],
  template: function ImageUploadComponent_Template(rf, ctx) {
    if (rf & 1) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"])(0, "div", 0);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"])("fileOver", function ImageUploadComponent_Template_div_fileOver_0_listener($event) {
        return ctx.onFileOver($event);
      })("fileDrop", function ImageUploadComponent_Template_div_fileDrop_0_listener($event) {
        return ctx.onFileChange($event);
      });
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"])(1, "div", 1);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"])(2, ImageUploadComponent_label_2_Template, 4, 8, "label", 2);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"])(3, ImageUploadComponent_button_3_Template, 1, 3, "button", 3);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"])(4, "div", 4);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"])();
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"])(5, ImageUploadComponent_p_5_Template, 1, 1, "p", 5);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"])(6, ImageUploadComponent_div_6_Template, 2, 2, "div", 6);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"])();
    }

    if (rf & 2) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"])("accept", ctx.supportedExtensions)("ngClass", ctx.cssClass)("ngClass", Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"])(9, _c3, ctx.fileOver))("ngStyle", ctx.style == null ? null : ctx.style.layout);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"])(2);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"])("ngIf", ctx.fileCounter != ctx.max);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"])(1);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"])("ngIf", ctx.fileCounter > 0);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"])(1);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"])("innerText", ctx.dropBoxMessage);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"])(1);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"])("ngIf", ctx.showFileTooLargeMessage);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"])(1);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"])("ngIf", ctx.preview);
    }
  },
  directives: [FileDropDirective, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
  styles: [".img-ul[_ngcontent-%COMP%]{--active-color:#3c9;--common-radius:3px;background-color:#f8f8f8;border:1px dashed #d0d0d0;border-radius:var(--common-radius);color:#9b9b9b;font-family:sans-serif;position:relative}.img-ul-file-is-over[_ngcontent-%COMP%]{border:var(--active-color) solid}.img-ul-hr-inline-group[_ngcontent-%COMP%]:after{clear:both;content:\"\";display:table}.img-ul-file-upload[_ngcontent-%COMP%]{padding:16px}.img-ul-drag-box-msg[_ngcontent-%COMP%]{display:inline-block;font-weight:600;margin-left:12px;padding-top:14px}label.img-ul-button[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%]{display:none;position:fixed;top:-99999px}.img-ul-clear[_ngcontent-%COMP%]{background-color:red}.img-ul-clear[_ngcontent-%COMP%]:disabled{background-color:#ff6464;cursor:default}.img-ul-upload[_ngcontent-%COMP%]{background-color:var(--active-color)}.img-ul-button[_ngcontent-%COMP%]{-moz-box-shadow:2px 2px 4px 0 hsla(0,0%,58%,.6);-webkit-box-shadow:2px 2px 4px 0 hsla(0,0%,58%,.6);border:none;box-shadow:2px 2px 4px 0 hsla(0,0%,58%,.6);color:#fff;cursor:pointer;display:inline-block;float:left;font-size:1.25em;font-weight:500;padding:10px;text-transform:uppercase}.img-ul-button[_ngcontent-%COMP%]:active   span[_ngcontent-%COMP%]{display:block;position:relative;top:1px}.img-ul-container[_ngcontent-%COMP%]{background-color:#fdfdfd;padding:0 10px}.img-ul-image[_ngcontent-%COMP%]{background:50% no-repeat;background-size:contain;display:inline-block;float:left;height:86px;margin:6px;position:relative;width:86px}.img-ul-x-mark[_ngcontent-%COMP%]{background-color:#000;border-radius:2px;color:#fff;cursor:pointer;float:right;margin:2px;text-align:center}.img-ul-close[_ngcontent-%COMP%], .img-ul-x-mark[_ngcontent-%COMP%]{height:20px;opacity:.7;width:20px}.img-ul-close[_ngcontent-%COMP%]{padding-right:3px;position:relative}.img-ul-x-mark[_ngcontent-%COMP%]:hover   .img-ul-close[_ngcontent-%COMP%]{opacity:1}.img-ul-close[_ngcontent-%COMP%]:after, .img-ul-close[_ngcontent-%COMP%]:before{background-color:#fff;border-radius:2px;content:\"\";height:15px;position:absolute;top:0;width:2px}.img-ul-close[_ngcontent-%COMP%]:before{transform:rotate(45deg)}.img-ul-close[_ngcontent-%COMP%]:after{transform:rotate(-45deg)}.img-ul-x-mark.img-ul-disabled[_ngcontent-%COMP%]{display:none}.img-ul-loading-overlay[_ngcontent-%COMP%]{background-color:#000;bottom:0;left:0;opacity:.7;position:absolute;right:0;top:0}.img-ul-spinning-circle[_ngcontent-%COMP%]{-webkit-animation:spinner 2s cubic-bezier(.085,.625,.855,.36) infinite;animation:spinner 2s cubic-bezier(.085,.625,.855,.36) infinite;border-color:#fff #fff hsla(0,0%,100%,0) hsla(0,0%,100%,0);border-radius:50%;border-right:3px solid hsla(0,0%,100%,0);border-style:solid;border-top:3px solid hsla(0,0%,100%,0);border-width:3px;bottom:0;height:30px;left:0;margin:auto;position:absolute;right:0;top:0;width:30px}.img-ul-file-too-large[_ngcontent-%COMP%]{color:red;padding:0 15px}.img-ul-upload.img-ul-disabled[_ngcontent-%COMP%]{background-color:#86e9c9;cursor:default}.img-ul-upload.img-ul-disabled[_ngcontent-%COMP%]:active   span[_ngcontent-%COMP%]{top:0}@-webkit-keyframes spinner{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes spinner{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}"]
});
/*@__PURE__*/

(function () {
  Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"])(ImageUploadComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
    args: [{
      selector: 'image-upload',
      templateUrl: './image-upload.component.html',
      styleUrls: ['./image-upload.component.css']
    }]
  }], function () {
    return [{
      type: ImageUploadService
    }];
  }, {
    beforeUpload: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    buttonCaption: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    cssClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
      args: ['class']
    }],
    clearButtonCaption: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    dropBoxMessage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    fileTooLargeMessage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    headers: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    max: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    maxFileSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    preview: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    partName: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    supportedExtensions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
      args: ['extensions']
    }],
    url: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    withCredentials: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    uploadedFiles: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    removed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    uploadStateChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    uploadFinished: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    previewClicked: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    inputElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
      args: ['input']
    }]
  });
})();

var ImageUploadModule = /*#__PURE__*/function () {
  function ImageUploadModule() {
    Object(_Users_andrewlynn_Documents_code_ng2_image_upload_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ImageUploadModule);
  }

  Object(_Users_andrewlynn_Documents_code_ng2_image_upload_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ImageUploadModule, null, [{
    key: "forRoot",
    value: function forRoot() {
      return {
        ngModule: ImageUploadModule,
        providers: [ImageUploadService]
      };
    }
  }]);

  return ImageUploadModule;
}();

ImageUploadModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"])({
  type: ImageUploadModule
});
ImageUploadModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"])({
  factory: function ImageUploadModule_Factory(t) {
    return new (t || ImageUploadModule)();
  },
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"])(ImageUploadModule, {
    declarations: [ImageUploadComponent, FileDropDirective],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]],
    exports: [ImageUploadComponent]
  });
})();
/*@__PURE__*/


(function () {
  Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"])(ImageUploadModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]],
      declarations: [ImageUploadComponent, FileDropDirective],
      exports: [ImageUploadComponent]
    }]
  }], null, null);
})();
/*
 * Public API Surface of ng2-image-upload
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "Y4KJ":
/*!*******************************************************!*\
  !*** ./src/app/readme/components/readme.component.ts ***!
  \*******************************************************/
/*! exports provided: ReadmeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadmeComponent", function() { return ReadmeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");


var ReadmeComponent = /** @class */ (function () {
    function ReadmeComponent() {
    }
    ReadmeComponent.ɵfac = function ReadmeComponent_Factory(t) { return new (t || ReadmeComponent)(); };
    ReadmeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReadmeComponent, selectors: [["ng-component"]], decls: 1, vars: 0, consts: [[1, "container"]], template: function ReadmeComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        } }, encapsulation: 2 });
    return ReadmeComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReadmeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './readme.component.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "e4iD");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var ng2_op_image_upload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-op-image-upload */ "WM2x");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _demo_components_demo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./demo/components/demo.component */ "+ksE");
/* harmony import */ var _demo_demo_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./demo/demo.module */ "JP7R");
/* harmony import */ var _readme_components_readme_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./readme/components/readme.component */ "Y4KJ");
/* harmony import */ var _readme_readme_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./readme/readme.module */ "PnoO");












var routes = [{
        path: '',
        redirectTo: 'demo',
        pathMatch: 'prefix'
    }, {
        path: 'demo',
        component: _demo_components_demo_component__WEBPACK_IMPORTED_MODULE_5__["DemoComponent"]
    }, {
        path: 'readme',
        component: _readme_components_readme_component__WEBPACK_IMPORTED_MODULE_7__["ReadmeComponent"]
    }];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true }),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _demo_demo_module__WEBPACK_IMPORTED_MODULE_6__["DemoModule"],
                _readme_readme_module__WEBPACK_IMPORTED_MODULE_8__["ReadmeModule"],
                ng2_op_image_upload__WEBPACK_IMPORTED_MODULE_3__["ImageUploadModule"].forRoot()
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _demo_demo_module__WEBPACK_IMPORTED_MODULE_6__["DemoModule"],
        _readme_readme_module__WEBPACK_IMPORTED_MODULE_8__["ReadmeModule"], ng2_op_image_upload__WEBPACK_IMPORTED_MODULE_3__["ImageUploadModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
                ],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true }),
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _demo_demo_module__WEBPACK_IMPORTED_MODULE_6__["DemoModule"],
                    _readme_readme_module__WEBPACK_IMPORTED_MODULE_8__["ReadmeModule"],
                    ng2_op_image_upload__WEBPACK_IMPORTED_MODULE_3__["ImageUploadModule"].forRoot()
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "t8Qz":
/*!************************************************************!*\
  !*** ./src/app/demo/components/filter/filter.component.ts ***!
  \************************************************************/
/*! exports provided: FilterExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterExampleComponent", function() { return FilterExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var ng2_op_image_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-op-image-upload */ "WM2x");



var _c0 = function () { return ["jpeg", "png"]; };
var FilterExampleComponent = /** @class */ (function () {
    function FilterExampleComponent() {
        var _this = this;
        this.fileCounter = 0;
        this.onBeforeUpload = function (metadata) {
            if (_this.fileCounter % 2 === 0) {
                metadata.abort = true;
            }
            else {
                // mutate the file or replace it entirely - metadata.file
                metadata.url = 'http://somewhereelse.com';
            }
            _this.fileCounter++;
            return metadata;
        };
    }
    FilterExampleComponent.ɵfac = function FilterExampleComponent_Factory(t) { return new (t || FilterExampleComponent)(); };
    FilterExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FilterExampleComponent, selectors: [["filter"]], decls: 15, vars: 4, consts: [[1, "mb-3", "mt-5"], ["url", "http://mockbin.org/request", 3, "max", "extensions"], [1, "language-markup"], [1, "mb-3", "mt-3"], ["url", "http://mockbin.org/request", 3, "beforeUpload"], [1, "language-typescript"]], template: function FilterExampleComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Limit and filter images");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "image-upload", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "pre");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "code", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "<image-upload url=\"http://mockbin.org/request\" [max]=\"2\" [extensions]=\"['jpeg','png']\"></image-upload>");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Manual filtering and editing");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "image-upload", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "pre");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "code", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "<image-upload url=\"http://mockbin.org/request\" [beforeUpload]=\"onBeforeUpload\"></image-upload>");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "pre");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "code", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "private fileCounter = 0;\n\nonBeforeUpload = (metadata: UploadMetadata) => {\n  if (this.fileCounter % 2 === 0) {\n    metadata.abort = true;\n  } else {\n    // mutate the file or replace it entirely - metadata.file\n    metadata.url = 'http://somewhereelse.com'\n  }\n\n  this.fileCounter++;\n  return metadata;\n};");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", 2)("extensions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("beforeUpload", ctx.onBeforeUpload);
        } }, directives: [ng2_op_image_upload__WEBPACK_IMPORTED_MODULE_1__["ImageUploadComponent"]], encapsulation: 2 });
    return FilterExampleComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterExampleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'filter',
                templateUrl: './filter.component.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismjs */ "n5u1");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismjs/components/prism-typescript */ "k00s");
/* harmony import */ var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "e4iD");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map