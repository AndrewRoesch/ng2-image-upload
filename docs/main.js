(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../dist/fesm5/opsuite-ng2-op-image-upload.js":
/*!***************************************************************************************************!*\
  !*** /Users/andrewlynn/Documents/code/ng2-image-upload/dist/fesm5/opsuite-ng2-op-image-upload.js ***!
  \***************************************************************************************************/
/*! exports provided: FileHolder, ImageUploadComponent, ImageUploadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileHolder", function() { return FileHolder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageUploadComponent", function() { return ImageUploadComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageUploadModule", function() { return ImageUploadModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");





var FileDropDirective = /** @class */ (function () {
    function FileDropDirective() {
        this.fileOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.fileDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    FileDropDirective.getDataTransfer = function (event) {
        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
    };
    FileDropDirective.hasFiles = function (types) {
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
    };
    FileDropDirective.matchRule = function (rule, candidate) {
        return new RegExp('^' + rule.split('*').join('.*') + '$').test(candidate);
    };
    FileDropDirective.prototype.onDrop = function (event) {
        var dataTransfer = FileDropDirective.getDataTransfer(event);
        if (!FileDropDirective.hasFiles(dataTransfer.types)) {
            return;
        }
        event.preventDefault();
        var files = this.filterFiles(dataTransfer.files);
        event.preventDefault();
        this.fileOver.emit(false);
        this.fileDrop.emit(files);
    };
    FileDropDirective.prototype.onDragLeave = function (event) {
        this.fileOver.emit(false);
    };
    FileDropDirective.prototype.onDragOver = function (event) {
        var dataTransfer = FileDropDirective.getDataTransfer(event);
        if (!FileDropDirective.hasFiles(dataTransfer.types)) {
            return;
        }
        dataTransfer.dropEffect = 'copy';
        event.preventDefault();
        this.fileOver.emit(true);
    };
    FileDropDirective.prototype.filterFiles = function (files) {
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
    };
    FileDropDirective.ɵfac = function FileDropDirective_Factory(t) { return new (t || FileDropDirective)(); };
    FileDropDirective.ɵdir = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"])({ type: FileDropDirective, selectors: [["", "fileDrop", ""]], hostBindings: function FileDropDirective_HostBindings(rf, ctx) { if (rf & 1) {
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"])("drop", function FileDropDirective_drop_HostBindingHandler($event) { return ctx.onDrop($event); })("dragleave", function FileDropDirective_dragleave_HostBindingHandler($event) { return ctx.onDragLeave($event); })("dragover", function FileDropDirective_dragover_HostBindingHandler($event) { return ctx.onDragOver($event); });
        } }, inputs: { accept: "accept" }, outputs: { fileOver: "fileOver", fileDrop: "fileDrop" } });
    return FileDropDirective;
}());
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"])(FileDropDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[fileDrop]'
            }]
    }], null, { accept: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], fileOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], fileDrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onDrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['drop', ['$event']]
        }], onDragLeave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['dragleave', ['$event']]
        }], onDragOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['dragover', ['$event']]
        }] }); })();

var ImageUploadService = /** @class */ (function () {
    function ImageUploadService(http) {
        this.http = http;
    }
    ImageUploadService.prototype.uploadImage = function (url, image, headers, partName, customFormData, withCredentials) {
        var e_1, _a;
        if (partName === void 0) { partName = 'image'; }
        if (!url || url === '') {
            throw new Error('Url is not set! Please set it before doing queries');
        }
        var formData = new FormData();
        if (customFormData) {
            try {
                for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__values"])(Object.keys(customFormData)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    formData.append(key, customFormData[key]);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        formData.append(partName, image);
        return this.http.post(url, formData, { withCredentials: withCredentials, headers: headers, observe: 'response' });
    };
    ImageUploadService.ɵfac = function ImageUploadService_Factory(t) { return new (t || ImageUploadService)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
    ImageUploadService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ token: ImageUploadService, factory: ImageUploadService.ɵfac });
    return ImageUploadService;
}());
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"])(ImageUploadService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();

var FileHolder = /** @class */ (function () {
    function FileHolder(src, file) {
        this.src = src;
        this.file = file;
        this.pending = false;
    }
    return FileHolder;
}());

var _c0 = ["input"];
var _c1 = function (a0) { return { "img-ul-disabled": a0 }; };
function ImageUploadComponent_label_2_Template(rf, ctx) { if (rf & 1) {
    var _r6 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"])(0, "label", 7);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"])(1, "span", 8);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"])(2, "input", 9, 10);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"])("change", function ImageUploadComponent_label_2_Template_input_change_2_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"])(_r6); var _r4 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"])(3); var ctx_r5 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"])(); return ctx_r5.onFileChange(_r4.files); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"])("ngStyle", ctx_r0.style == null ? null : ctx_r0.style.selectButton)("ngClass", Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"])(6, _c1, ctx_r0.disabled));
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"])("innerText", ctx_r0.buttonCaption);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"])("disabled", ctx_r0.disabled)("accept", ctx_r0.supportedExtensions)("multiple", ctx_r0.max > 1);
} }
function ImageUploadComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    var _r8 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"])(0, "button", 11);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"])("click", function ImageUploadComponent_button_3_Template_button_click_0_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"])(_r8); var ctx_r7 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"])(); return ctx_r7.deleteAll(); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r1 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"])("disabled", ctx_r1.disabled)("ngStyle", ctx_r1.style == null ? null : ctx_r1.style.clearButton)("innerText", ctx_r1.clearButtonCaption);
} }
function ImageUploadComponent_p_5_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"])(0, "p", 12);
} if (rf & 2) {
    var ctx_r2 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"])("innerText", ctx_r2.fileTooLargeMessage);
} }
function ImageUploadComponent_div_6_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"])(0, "div", 18);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"])(1, "div", 19);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"])();
} }
function ImageUploadComponent_div_6_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r15 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"])(0, "div", 20);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"])("click", function ImageUploadComponent_div_6_div_1_div_2_Template_div_click_0_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"])(_r15); var file_r10 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"])().$implicit; var ctx_r13 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"])(2); return ctx_r13.deleteFile(file_r10); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"])(1, "span", 21);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r12 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"])("ngClass", Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"])(1, _c1, ctx_r12.disabled));
} }
var _c2 = function (a0) { return { "background-image": a0 }; };
function ImageUploadComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r17 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"])(0, "div", 15);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"])("click", function ImageUploadComponent_div_6_div_1_Template_div_click_0_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"])(_r17); var file_r10 = ctx.$implicit; var ctx_r16 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"])(2); return ctx_r16.previewFileClicked(file_r10); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"])(1, ImageUploadComponent_div_6_div_1_div_1_Template, 2, 0, "div", 16);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"])(2, ImageUploadComponent_div_6_div_1_div_2_Template, 2, 3, "div", 17);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"])();
} if (rf & 2) {
    var file_r10 = ctx.$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"])("ngStyle", Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"])(3, _c2, "url(" + file_r10.src + ")"));
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"])("ngIf", file_r10.pending);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"])("ngIf", !file_r10.pending);
} }
function ImageUploadComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"])(0, "div", 13);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"])(1, ImageUploadComponent_div_6_div_1_Template, 3, 5, "div", 14);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r3 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"])("ngStyle", ctx_r3.style == null ? null : ctx_r3.style.previewPanel);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"])("ngForOf", ctx_r3.files);
} }
var _c3 = function (a0) { return { "img-ul-file-is-over": a0 }; };
var ImageUploadComponent = /** @class */ (function () {
    function ImageUploadComponent(imageService) {
        var _this = this;
        this.imageService = imageService;
        this.files = [];
        this.fileCounter = 0;
        this.fileOver = false;
        this.showFileTooLargeMessage = false;
        this.beforeUpload = function (metadata) { return metadata; };
        this.buttonCaption = 'Select Images';
        this.disabled = false;
        this.cssClass = 'img-ul';
        this.clearButtonCaption = 'Clear';
        this.dropBoxMessage = 'Drop your images here!';
        this.max = 100;
        this.preview = true;
        this.withCredentials = false;
        this.uploadedFiles = [];
        this.removed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.uploadStateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.uploadFinished = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.previewClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.pendingFilesCounter = 0;
        this.onFileOver = function (isOver) { return _this.fileOver = isOver; };
    }
    ImageUploadComponent.prototype.ngOnInit = function () {
        if (!this.fileTooLargeMessage) {
            this.fileTooLargeMessage = 'An image was too large and was not uploaded.' + (this.maxFileSize ? (' The maximum file size is ' + this.maxFileSize / 1024) + 'KiB.' : '');
        }
        this.supportedExtensions = this.supportedExtensions ? this.supportedExtensions.map(function (ext) { return 'image/' + ext; }) : ['image/*'];
    };
    ImageUploadComponent.prototype.deleteAll = function () {
        var _this = this;
        this.files.forEach(function (f) { return _this.removed.emit(f); });
        this.files = [];
        this.fileCounter = 0;
        if (this.inputElement) {
            this.inputElement.nativeElement.value = '';
        }
    };
    ImageUploadComponent.prototype.deleteFile = function (file) {
        var index = this.files.indexOf(file);
        this.files.splice(index, 1);
        this.fileCounter--;
        if (this.inputElement) {
            this.inputElement.nativeElement.value = '';
        }
        this.removed.emit(file);
    };
    ImageUploadComponent.prototype.previewFileClicked = function (file) {
        this.previewClicked.emit(file);
    };
    ImageUploadComponent.prototype.ngOnChanges = function (changes) {
        if (changes.uploadedFiles && changes.uploadedFiles.currentValue.length > 0) {
            this.processUploadedFiles();
        }
    };
    ImageUploadComponent.prototype.onFileChange = function (files) {
        if (this.disabled)
            return;
        var remainingSlots = this.max - this.fileCounter;
        var filesToUploadNum = files.length > remainingSlots ? remainingSlots : files.length;
        if (this.url && filesToUploadNum !== 0) {
            this.uploadStateChanged.emit(true);
        }
        this.fileCounter += filesToUploadNum;
        this.showFileTooLargeMessage = false;
        this.uploadFiles(files, filesToUploadNum);
    };
    ImageUploadComponent.prototype.onResponse = function (response, fileHolder) {
        fileHolder.serverResponse = { status: response.status, response: response };
        fileHolder.pending = false;
        this.uploadFinished.emit(fileHolder);
        if (--this.pendingFilesCounter === 0) {
            this.uploadStateChanged.emit(false);
        }
    };
    ImageUploadComponent.prototype.processUploadedFiles = function () {
        for (var i = 0; i < this.uploadedFiles.length; i++) {
            var data = this.uploadedFiles[i];
            var fileBlob = void 0, file = void 0, fileUrl = void 0;
            if (data instanceof Object) {
                fileUrl = data.url;
                fileBlob = (data.blob) ? data.blob : new Blob([data]);
                file = new File([fileBlob], data.fileName);
            }
            else {
                fileUrl = data;
                fileBlob = new Blob([fileUrl]);
                file = new File([fileBlob], fileUrl);
            }
            this.files.push(new FileHolder(fileUrl, file));
        }
    };
    ImageUploadComponent.prototype.uploadFiles = function (files, filesToUploadNum) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
            var _loop_1, this_1, i;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _loop_1 = function (i) {
                            var file, beforeUploadResult, img, reader;
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        file = files[i];
                                        if (this_1.maxFileSize && file && file.size > this_1.maxFileSize) {
                                            this_1.fileCounter--;
                                            this_1.inputElement.nativeElement.value = '';
                                            this_1.showFileTooLargeMessage = true;
                                            this_1.uploadStateChanged.emit(false);
                                            return [2 /*return*/, "continue"];
                                        }
                                        return [4 /*yield*/, this_1.beforeUpload({ file: file, url: this_1.url, abort: false })];
                                    case 1:
                                        beforeUploadResult = _a.sent();
                                        if (beforeUploadResult.abort) {
                                            this_1.fileCounter--;
                                            this_1.inputElement.nativeElement.value = '';
                                            return [2 /*return*/, "continue"];
                                        }
                                        img = document.createElement('img');
                                        img.src = window.URL.createObjectURL(beforeUploadResult.file);
                                        reader = new FileReader();
                                        reader.addEventListener('load', function (event) {
                                            var fileHolder = new FileHolder(event.target.result, beforeUploadResult.file);
                                            _this.files.push(fileHolder);
                                            _this.uploadSingleFile(fileHolder, beforeUploadResult.url, beforeUploadResult.formData);
                                        }, false);
                                        reader.readAsDataURL(beforeUploadResult.file);
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < filesToUploadNum)) return [3 /*break*/, 4];
                        return [5 /*yield**/, _loop_1(i)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ImageUploadComponent.prototype.uploadSingleFile = function (fileHolder, url, customForm) {
        var _this = this;
        if (url === void 0) { url = this.url; }
        if (url) {
            this.pendingFilesCounter++;
            fileHolder.pending = true;
            this.imageService
                .uploadImage(url, fileHolder.file, this.headers, this.partName, customForm, this.withCredentials)
                .subscribe(function (response) { return _this.onResponse(response, fileHolder); }, function (error) {
                _this.onResponse(error, fileHolder);
                _this.deleteFile(fileHolder);
            });
        }
        else {
            this.uploadFinished.emit(fileHolder);
        }
    };
    ImageUploadComponent.ɵfac = function ImageUploadComponent_Factory(t) { return new (t || ImageUploadComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"])(ImageUploadService)); };
    ImageUploadComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"])({ type: ImageUploadComponent, selectors: [["image-upload"]], viewQuery: function ImageUploadComponent_Query(rf, ctx) { if (rf & 1) {
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"])(_c0, true);
        } if (rf & 2) {
            var _t;
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"])(_t = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"])()) && (ctx.inputElement = _t.first);
        } }, inputs: { beforeUpload: "beforeUpload", buttonCaption: "buttonCaption", disabled: "disabled", cssClass: ["class", "cssClass"], clearButtonCaption: "clearButtonCaption", dropBoxMessage: "dropBoxMessage", fileTooLargeMessage: "fileTooLargeMessage", headers: "headers", max: "max", maxFileSize: "maxFileSize", preview: "preview", partName: "partName", style: "style", supportedExtensions: ["extensions", "supportedExtensions"], url: "url", withCredentials: "withCredentials", uploadedFiles: "uploadedFiles" }, outputs: { removed: "removed", uploadStateChanged: "uploadStateChanged", uploadFinished: "uploadFinished", previewClicked: "previewClicked" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 7, vars: 11, consts: [["fileDrop", "", 3, "accept", "ngClass", "ngStyle", "fileOver", "fileDrop"], [1, "img-ul-file-upload", "img-ul-hr-inline-group"], ["class", "img-ul-upload img-ul-button", 3, "ngStyle", "ngClass", 4, "ngIf"], ["class", "img-ul-clear img-ul-button", 3, "disabled", "ngStyle", "innerText", "click", 4, "ngIf"], [1, "img-ul-drag-box-msg", 3, "innerText"], ["class", "img-ul-file-too-large", 3, "innerText", 4, "ngIf"], ["class", "img-ul-container img-ul-hr-inline-group", 3, "ngStyle", 4, "ngIf"], [1, "img-ul-upload", "img-ul-button", 3, "ngStyle", "ngClass"], [3, "innerText"], ["type", "file", 3, "disabled", "accept", "multiple", "change"], ["input", ""], [1, "img-ul-clear", "img-ul-button", 3, "disabled", "ngStyle", "innerText", "click"], [1, "img-ul-file-too-large", 3, "innerText"], [1, "img-ul-container", "img-ul-hr-inline-group", 3, "ngStyle"], ["class", "img-ul-image", 3, "ngStyle", "click", 4, "ngFor", "ngForOf"], [1, "img-ul-image", 3, "ngStyle", "click"], ["class", "img-ul-loading-overlay", 4, "ngIf"], ["class", "img-ul-x-mark", 3, "ngClass", "click", 4, "ngIf"], [1, "img-ul-loading-overlay"], [1, "img-ul-spinning-circle"], [1, "img-ul-x-mark", 3, "ngClass", "click"], [1, "img-ul-close"]], template: function ImageUploadComponent_Template(rf, ctx) { if (rf & 1) {
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"])(0, "div", 0);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"])("fileOver", function ImageUploadComponent_Template_div_fileOver_0_listener($event) { return ctx.onFileOver($event); })("fileDrop", function ImageUploadComponent_Template_div_fileDrop_0_listener($event) { return ctx.onFileChange($event); });
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"])(1, "div", 1);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"])(2, ImageUploadComponent_label_2_Template, 4, 8, "label", 2);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"])(3, ImageUploadComponent_button_3_Template, 1, 3, "button", 3);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"])(4, "div", 4);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"])();
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"])(5, ImageUploadComponent_p_5_Template, 1, 1, "p", 5);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"])(6, ImageUploadComponent_div_6_Template, 2, 2, "div", 6);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"])();
        } if (rf & 2) {
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"])("accept", ctx.supportedExtensions)("ngClass", ctx.cssClass)("ngClass", Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"])(9, _c3, ctx.fileOver))("ngStyle", ctx.style == null ? null : ctx.style.layout);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"])(2);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"])("ngIf", ctx.fileCounter != ctx.max);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"])(1);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"])("ngIf", ctx.fileCounter > 0);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"])(1);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"])("innerText", ctx.dropBoxMessage);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"])(1);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"])("ngIf", ctx.showFileTooLargeMessage);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"])(1);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"])("ngIf", ctx.preview);
        } }, directives: [FileDropDirective, _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"]], styles: [".img-ul[_ngcontent-%COMP%]{--active-color:#3C9;--common-radius:3px;background-color:#f8f8f8;border-radius:var(--common-radius);border:1px dashed #d0d0d0;font-family:sans-serif;position:relative;color:#9b9b9b}.img-ul-file-is-over[_ngcontent-%COMP%]{border:var(--active-color) solid}.img-ul-hr-inline-group[_ngcontent-%COMP%]:after{clear:both;content:\"\";display:table}.img-ul-file-upload[_ngcontent-%COMP%]{padding:16px}.img-ul-drag-box-msg[_ngcontent-%COMP%]{display:inline-block;font-weight:600;margin-left:12px;padding-top:14px}label.img-ul-button[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%]{display:none;position:fixed;top:-99999px}.img-ul-clear[_ngcontent-%COMP%]{background-color:red}.img-ul-clear[_ngcontent-%COMP%]:disabled{background-color:#ff6464;cursor:default}.img-ul-upload[_ngcontent-%COMP%]{background-color:var(--active-color)}.img-ul-button[_ngcontent-%COMP%]{-moz-box-shadow:2px 2px 4px 0 rgba(148,148,148,.6);-webkit-box-shadow:2px 2px 4px 0 rgba(148,148,148,.6);border:none;box-shadow:2px 2px 4px 0 rgba(148,148,148,.6);color:#fff;cursor:pointer;display:inline-block;float:left;font-size:1.25em;font-weight:500;padding:10px;text-transform:uppercase}.img-ul-button[_ngcontent-%COMP%]:active   span[_ngcontent-%COMP%]{display:block;position:relative;top:1px}.img-ul-container[_ngcontent-%COMP%]{background-color:#fdfdfd;padding:0 10px}.img-ul-image[_ngcontent-%COMP%]{background:center center/contain no-repeat;display:inline-block;float:left;height:86px;margin:6px;position:relative;width:86px}.img-ul-x-mark[_ngcontent-%COMP%]{background-color:#000;border-radius:2px;color:#fff;cursor:pointer;float:right;height:20px;margin:2px;opacity:.7;text-align:center;width:20px}.img-ul-close[_ngcontent-%COMP%]{height:20px;opacity:.7;padding-right:3px;position:relative;width:20px}.img-ul-x-mark[_ngcontent-%COMP%]:hover   .img-ul-close[_ngcontent-%COMP%]{opacity:1}.img-ul-close[_ngcontent-%COMP%]:after, .img-ul-close[_ngcontent-%COMP%]:before{background-color:#fff;border-radius:2px;content:'';height:15px;position:absolute;top:0;width:2px}.img-ul-close[_ngcontent-%COMP%]:before{transform:rotate(45deg)}.img-ul-close[_ngcontent-%COMP%]:after{transform:rotate(-45deg)}.img-ul-x-mark.img-ul-disabled[_ngcontent-%COMP%]{display:none}.img-ul-loading-overlay[_ngcontent-%COMP%]{background-color:#000;bottom:0;left:0;opacity:.7;position:absolute;right:0;top:0}.img-ul-spinning-circle[_ngcontent-%COMP%]{height:30px;width:30px;margin:auto;position:absolute;top:0;left:0;bottom:0;right:0;border-radius:50%;border:3px solid rgba(255,255,255,0);border-top:3px solid #fff;border-right:3px solid #fff;-webkit-animation:2s cubic-bezier(.085,.625,.855,.36) infinite spinner;animation:2s cubic-bezier(.085,.625,.855,.36) infinite spinner}.img-ul-file-too-large[_ngcontent-%COMP%]{color:red;padding:0 15px}.img-ul-upload.img-ul-disabled[_ngcontent-%COMP%]{background-color:#86e9c9;cursor:default}.img-ul-upload.img-ul-disabled[_ngcontent-%COMP%]:active   span[_ngcontent-%COMP%]{top:0}@-webkit-keyframes spinner{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes spinner{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}"] });
    return ImageUploadComponent;
}());
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"])(ImageUploadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'image-upload',
                templateUrl: './image-upload.component.html',
                styleUrls: ['./image-upload.component.css']
            }]
    }], function () { return [{ type: ImageUploadService }]; }, { beforeUpload: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], buttonCaption: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], cssClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['class']
        }], clearButtonCaption: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], dropBoxMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], fileTooLargeMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], headers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], maxFileSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], preview: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], partName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], style: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], supportedExtensions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['extensions']
        }], url: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], withCredentials: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], uploadedFiles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], removed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], uploadStateChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], uploadFinished: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], previewClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], inputElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['input']
        }] }); })();

var ImageUploadModule = /** @class */ (function () {
    function ImageUploadModule() {
    }
    ImageUploadModule.forRoot = function () {
        return {
            ngModule: ImageUploadModule,
            providers: [ImageUploadService]
        };
    };
    ImageUploadModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"])({ type: ImageUploadModule });
    ImageUploadModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"])({ factory: function ImageUploadModule_Factory(t) { return new (t || ImageUploadModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]]] });
    return ImageUploadModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"])(ImageUploadModule, { declarations: [ImageUploadComponent,
        FileDropDirective], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]], exports: [ImageUploadComponent] }); })();
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"])(ImageUploadModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]],
                declarations: [
                    ImageUploadComponent,
                    FileDropDirective
                ],
                exports: [ImageUploadComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of ng2-image-upload
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=opsuite-ng2-op-image-upload.js.map


/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");



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

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var ng2_op_image_upload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-op-image-upload */ "../../dist/fesm5/opsuite-ng2-op-image-upload.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _demo_components_demo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./demo/components/demo.component */ "./src/app/demo/components/demo.component.ts");
/* harmony import */ var _demo_demo_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./demo/demo.module */ "./src/app/demo/demo.module.ts");
/* harmony import */ var _readme_components_readme_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./readme/components/readme.component */ "./src/app/readme/components/readme.component.ts");
/* harmony import */ var _readme_readme_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./readme/readme.module */ "./src/app/readme/readme.module.ts");












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

/***/ "./src/app/demo/components/basic/basic.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/demo/components/basic/basic.component.ts ***!
  \**********************************************************/
/*! exports provided: BasicExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicExampleComponent", function() { return BasicExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var ng2_op_image_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-op-image-upload */ "../../dist/fesm5/opsuite-ng2-op-image-upload.js");



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

/***/ "./src/app/demo/components/customise/customise.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/demo/components/customise/customise.component.ts ***!
  \******************************************************************/
/*! exports provided: CustomiseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomiseComponent", function() { return CustomiseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var ng2_op_image_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-op-image-upload */ "../../dist/fesm5/opsuite-ng2-op-image-upload.js");



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

/***/ "./src/app/demo/components/demo.component.ts":
/*!***************************************************!*\
  !*** ./src/app/demo/components/demo.component.ts ***!
  \***************************************************/
/*! exports provided: DemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoComponent", function() { return DemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismjs */ "../../node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _basic_basic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic/basic.component */ "./src/app/demo/components/basic/basic.component.ts");
/* harmony import */ var _filter_filter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter/filter.component */ "./src/app/demo/components/filter/filter.component.ts");
/* harmony import */ var _customise_customise_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customise/customise.component */ "./src/app/demo/components/customise/customise.component.ts");
/* harmony import */ var _events_events_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./events/events.component */ "./src/app/demo/components/events/events.component.ts");
/* harmony import */ var _style_style_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style/style.component */ "./src/app/demo/components/style/style.component.ts");
/* harmony import */ var _uploaded_uploaded_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./uploaded/uploaded.component */ "./src/app/demo/components/uploaded/uploaded.component.ts");
/* harmony import */ var _disabled_disabled_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./disabled/disabled.component */ "./src/app/demo/components/disabled/disabled.component.ts");










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

/***/ "./src/app/demo/components/disabled/disabled.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/demo/components/disabled/disabled.component.ts ***!
  \****************************************************************/
/*! exports provided: DisabledExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisabledExampleComponent", function() { return DisabledExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var ng2_op_image_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-op-image-upload */ "../../dist/fesm5/opsuite-ng2-op-image-upload.js");



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

/***/ "./src/app/demo/components/events/events.component.ts":
/*!************************************************************!*\
  !*** ./src/app/demo/components/events/events.component.ts ***!
  \************************************************************/
/*! exports provided: EventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsComponent", function() { return EventsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var ng2_op_image_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-op-image-upload */ "../../dist/fesm5/opsuite-ng2-op-image-upload.js");



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

/***/ "./src/app/demo/components/filter/filter.component.ts":
/*!************************************************************!*\
  !*** ./src/app/demo/components/filter/filter.component.ts ***!
  \************************************************************/
/*! exports provided: FilterExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterExampleComponent", function() { return FilterExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var ng2_op_image_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-op-image-upload */ "../../dist/fesm5/opsuite-ng2-op-image-upload.js");



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

/***/ "./src/app/demo/components/style/style.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/demo/components/style/style.component.ts ***!
  \**********************************************************/
/*! exports provided: StyleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleComponent", function() { return StyleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var ng2_op_image_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-op-image-upload */ "../../dist/fesm5/opsuite-ng2-op-image-upload.js");



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

/***/ "./src/app/demo/components/uploaded/uploaded.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/demo/components/uploaded/uploaded.component.ts ***!
  \****************************************************************/
/*! exports provided: UploadedExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadedExampleComponent", function() { return UploadedExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var ng2_op_image_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-op-image-upload */ "../../dist/fesm5/opsuite-ng2-op-image-upload.js");



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

/***/ "./src/app/demo/demo.module.ts":
/*!*************************************!*\
  !*** ./src/app/demo/demo.module.ts ***!
  \*************************************/
/*! exports provided: DemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoModule", function() { return DemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var ng2_op_image_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-op-image-upload */ "../../dist/fesm5/opsuite-ng2-op-image-upload.js");
/* harmony import */ var _components_basic_basic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/basic/basic.component */ "./src/app/demo/components/basic/basic.component.ts");
/* harmony import */ var _components_customise_customise_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/customise/customise.component */ "./src/app/demo/components/customise/customise.component.ts");
/* harmony import */ var _components_demo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/demo.component */ "./src/app/demo/components/demo.component.ts");
/* harmony import */ var _components_disabled_disabled_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/disabled/disabled.component */ "./src/app/demo/components/disabled/disabled.component.ts");
/* harmony import */ var _components_events_events_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/events/events.component */ "./src/app/demo/components/events/events.component.ts");
/* harmony import */ var _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/filter/filter.component */ "./src/app/demo/components/filter/filter.component.ts");
/* harmony import */ var _components_style_style_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/style/style.component */ "./src/app/demo/components/style/style.component.ts");
/* harmony import */ var _components_uploaded_uploaded_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/uploaded/uploaded.component */ "./src/app/demo/components/uploaded/uploaded.component.ts");











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

/***/ "./src/app/readme/components/readme.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/readme/components/readme.component.ts ***!
  \*******************************************************/
/*! exports provided: ReadmeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadmeComponent", function() { return ReadmeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


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

/***/ "./src/app/readme/readme.module.ts":
/*!*****************************************!*\
  !*** ./src/app/readme/readme.module.ts ***!
  \*****************************************/
/*! exports provided: ReadmeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadmeModule", function() { return ReadmeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _components_readme_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/readme.component */ "./src/app/readme/components/readme.component.ts");



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

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismjs */ "../../node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismjs/components/prism-typescript */ "../../node_modules/prismjs/components/prism-typescript.js");
/* harmony import */ var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/andrewlynn/Documents/code/ng2-image-upload/projects/ng2-image-upload-demo/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map