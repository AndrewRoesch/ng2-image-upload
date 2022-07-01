(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../dist/fesm5/ng2-op-image-upload.js":
/*!***********************************************************************************************!*\
  !*** C:/Users/aroesch/Documents/GitHub/ng2-op-image-upload/dist/fesm5/ng2-op-image-upload.js ***!
  \***********************************************************************************************/
/*! exports provided: ImageUploadModule, ImageUploadComponent, FileHolder, ɵb, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageUploadModule", function() { return ImageUploadModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageUploadComponent", function() { return ImageUploadComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileHolder", function() { return FileHolder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return FileDropDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return ImageUploadService; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FileDropDirective = /** @class */ (function () {
    function FileDropDirective() {
        this.fileOver = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.fileDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    FileDropDirective.getDataTransfer = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
    };
    /**
     * @private
     * @param {?} types
     * @return {?}
     */
    FileDropDirective.hasFiles = /**
     * @private
     * @param {?} types
     * @return {?}
     */
    function (types) {
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
    /**
     * @private
     * @param {?} rule
     * @param {?} candidate
     * @return {?}
     */
    FileDropDirective.matchRule = /**
     * @private
     * @param {?} rule
     * @param {?} candidate
     * @return {?}
     */
    function (rule, candidate) {
        return new RegExp('^' + rule.split('*').join('.*') + '$').test(candidate);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FileDropDirective.prototype.onDrop = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var dataTransfer = FileDropDirective.getDataTransfer(event);
        if (!FileDropDirective.hasFiles(dataTransfer.types)) {
            return;
        }
        event.preventDefault();
        /** @type {?} */
        var files = this.filterFiles(dataTransfer.files);
        event.preventDefault();
        this.fileOver.emit(false);
        this.fileDrop.emit(files);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FileDropDirective.prototype.onDragLeave = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.fileOver.emit(false);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FileDropDirective.prototype.onDragOver = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var dataTransfer = FileDropDirective.getDataTransfer(event);
        if (!FileDropDirective.hasFiles(dataTransfer.types)) {
            return;
        }
        dataTransfer.dropEffect = 'copy';
        event.preventDefault();
        this.fileOver.emit(true);
    };
    /**
     * @private
     * @param {?} files
     * @return {?}
     */
    FileDropDirective.prototype.filterFiles = /**
     * @private
     * @param {?} files
     * @return {?}
     */
    function (files) {
        if (!this.accept || this.accept.length === 0) {
            return files;
        }
        /** @type {?} */
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
    FileDropDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                    selector: '[fileDrop]'
                },] }
    ];
    FileDropDirective.propDecorators = {
        accept: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        fileOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        fileDrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        onDrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['drop', ['$event'],] }],
        onDragLeave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['dragleave', ['$event'],] }],
        onDragOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['dragover', ['$event'],] }]
    };
    return FileDropDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ImageUploadService = /** @class */ (function () {
    function ImageUploadService(http) {
        this.http = http;
    }
    /**
     * @param {?} url
     * @param {?} image
     * @param {?=} headers
     * @param {?=} partName
     * @param {?=} customFormData
     * @param {?=} withCredentials
     * @return {?}
     */
    ImageUploadService.prototype.uploadImage = /**
     * @param {?} url
     * @param {?} image
     * @param {?=} headers
     * @param {?=} partName
     * @param {?=} customFormData
     * @param {?=} withCredentials
     * @return {?}
     */
    function (url, image, headers, partName, customFormData, withCredentials) {
        if (partName === void 0) { partName = 'image'; }
        var e_1, _a;
        if (!url || url === '') {
            throw new Error('Url is not set! Please set it before doing queries');
        }
        /** @type {?} */
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
    ImageUploadService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"] }
    ];
    /** @nocollapse */
    ImageUploadService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    return ImageUploadService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FileHolder = /** @class */ (function () {
    function FileHolder(src, file) {
        this.src = src;
        this.file = file;
        this.pending = false;
    }
    return FileHolder;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ImageUploadComponent = /** @class */ (function () {
    function ImageUploadComponent(imageService) {
        var _this = this;
        this.imageService = imageService;
        this.files = [];
        this.fileCounter = 0;
        this.fileOver = false;
        this.showFileTooLargeMessage = false;
        this.beforeUpload = (/**
         * @param {?} metadata
         * @return {?}
         */
        function (metadata) { return metadata; });
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
        this.onFileOver = (/**
         * @param {?} isOver
         * @return {?}
         */
        function (isOver) { return _this.fileOver = isOver; });
    }
    /**
     * @return {?}
     */
    ImageUploadComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.fileTooLargeMessage) {
            this.fileTooLargeMessage = 'An image was too large and was not uploaded.' + (this.maxFileSize ? (' The maximum file size is ' + this.maxFileSize / 1024) + 'KiB.' : '');
        }
        this.supportedExtensions = this.supportedExtensions ? this.supportedExtensions.map((/**
         * @param {?} ext
         * @return {?}
         */
        function (ext) { return 'image/' + ext; })) : ['image/*'];
    };
    /**
     * @return {?}
     */
    ImageUploadComponent.prototype.deleteAll = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.files.forEach((/**
         * @param {?} f
         * @return {?}
         */
        function (f) { return _this.removed.emit(f); }));
        this.files = [];
        this.fileCounter = 0;
        if (this.inputElement) {
            this.inputElement.nativeElement.value = '';
        }
    };
    /**
     * @param {?} file
     * @return {?}
     */
    ImageUploadComponent.prototype.deleteFile = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        /** @type {?} */
        var index = this.files.indexOf(file);
        this.files.splice(index, 1);
        this.fileCounter--;
        if (this.inputElement) {
            this.inputElement.nativeElement.value = '';
        }
        this.removed.emit(file);
    };
    /**
     * @param {?} file
     * @return {?}
     */
    ImageUploadComponent.prototype.previewFileClicked = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        this.previewClicked.emit(file);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ImageUploadComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.uploadedFiles && changes.uploadedFiles.currentValue.length > 0) {
            this.processUploadedFiles();
        }
    };
    /**
     * @param {?} files
     * @return {?}
     */
    ImageUploadComponent.prototype.onFileChange = /**
     * @param {?} files
     * @return {?}
     */
    function (files) {
        if (this.disabled)
            return;
        /** @type {?} */
        var remainingSlots = this.max - this.fileCounter;
        /** @type {?} */
        var filesToUploadNum = files.length > remainingSlots ? remainingSlots : files.length;
        if (this.url && filesToUploadNum !== 0) {
            this.uploadStateChanged.emit(true);
        }
        this.fileCounter += filesToUploadNum;
        this.showFileTooLargeMessage = false;
        this.uploadFiles(files, filesToUploadNum);
    };
    /**
     * @private
     * @param {?} response
     * @param {?} fileHolder
     * @return {?}
     */
    ImageUploadComponent.prototype.onResponse = /**
     * @private
     * @param {?} response
     * @param {?} fileHolder
     * @return {?}
     */
    function (response, fileHolder) {
        fileHolder.serverResponse = { status: response.status, response: response };
        fileHolder.pending = false;
        this.uploadFinished.emit(fileHolder);
        if (--this.pendingFilesCounter === 0) {
            this.uploadStateChanged.emit(false);
        }
    };
    /**
     * @private
     * @return {?}
     */
    ImageUploadComponent.prototype.processUploadedFiles = /**
     * @private
     * @return {?}
     */
    function () {
        for (var i = 0; i < this.uploadedFiles.length; i++) {
            /** @type {?} */
            var data = this.uploadedFiles[i];
            /** @type {?} */
            var fileBlob = void 0;
            /** @type {?} */
            var file = void 0;
            /** @type {?} */
            var fileUrl = void 0;
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
    /**
     * @private
     * @param {?} files
     * @param {?} filesToUploadNum
     * @return {?}
     */
    ImageUploadComponent.prototype.uploadFiles = /**
     * @private
     * @param {?} files
     * @param {?} filesToUploadNum
     * @return {?}
     */
    function (files, filesToUploadNum) {
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
                                        img = (/** @type {?} */ (document.createElement('img')));
                                        img.src = window.URL.createObjectURL(beforeUploadResult.file);
                                        reader = new FileReader();
                                        reader.addEventListener('load', (/**
                                         * @param {?} event
                                         * @return {?}
                                         */
                                        function (event) {
                                            /** @type {?} */
                                            var fileHolder = new FileHolder(event.target.result, beforeUploadResult.file);
                                            _this.files.push(fileHolder);
                                            _this.uploadSingleFile(fileHolder, beforeUploadResult.url, beforeUploadResult.formData);
                                        }), false);
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
    /**
     * @private
     * @param {?} fileHolder
     * @param {?=} url
     * @param {?=} customForm
     * @return {?}
     */
    ImageUploadComponent.prototype.uploadSingleFile = /**
     * @private
     * @param {?} fileHolder
     * @param {?=} url
     * @param {?=} customForm
     * @return {?}
     */
    function (fileHolder, url, customForm) {
        var _this = this;
        if (url === void 0) { url = this.url; }
        if (url) {
            this.pendingFilesCounter++;
            fileHolder.pending = true;
            this.imageService
                .uploadImage(url, fileHolder.file, this.headers, this.partName, customForm, this.withCredentials)
                .subscribe((/**
             * @param {?} response
             * @return {?}
             */
            function (response) { return _this.onResponse(response, fileHolder); }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                _this.onResponse(error, fileHolder);
                _this.deleteFile(fileHolder);
            }));
        }
        else {
            this.uploadFinished.emit(fileHolder);
        }
    };
    ImageUploadComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'image-upload',
                    template: "<div\r\n     fileDrop\r\n     [accept]=\"supportedExtensions\"\r\n     (fileOver)=\"onFileOver($event)\"\r\n     (fileDrop)=\"onFileChange($event)\"\r\n     [ngClass]=\"cssClass\"\r\n     [ngClass]=\"{'img-ul-file-is-over': fileOver}\"     \r\n     [ngStyle]=\"style?.layout\"\r\n>\r\n  <div class=\"img-ul-file-upload img-ul-hr-inline-group\">    \r\n    <label *ngIf=\"fileCounter != max\"\r\n      class=\"img-ul-upload img-ul-button\" \r\n      [ngStyle]=\"style?.selectButton\"\r\n      [ngClass]=\"{'img-ul-disabled': disabled}\">\r\n      <span [innerText]=\"buttonCaption\"></span>\r\n      <input\r\n        type=\"file\"\r\n        [disabled]=\"disabled\"\r\n        [accept]=\"supportedExtensions\"\r\n        [multiple]=\"max > 1\"\r\n        (change)=\"onFileChange(input.files)\"\r\n        #input>\r\n    </label>\r\n    <button *ngIf=\"fileCounter > 0\"\r\n      [disabled]=\"disabled\"\r\n      class=\"img-ul-clear img-ul-button\" \r\n      (click)=\"deleteAll()\" \r\n      [ngStyle]=\"style?.clearButton\"\r\n      [innerText]=\"clearButtonCaption\">\r\n    </button>\r\n    <div class=\"img-ul-drag-box-msg\" [innerText]=\"dropBoxMessage\"></div>\r\n  </div>\r\n\r\n  <p class=\"img-ul-file-too-large\" *ngIf=\"showFileTooLargeMessage\" [innerText]=\"fileTooLargeMessage\"></p>\r\n\r\n  <div *ngIf=\"preview\" class=\"img-ul-container img-ul-hr-inline-group\" [ngStyle]=\"style?.previewPanel\">\r\n    <div\r\n      class=\"img-ul-image\"\r\n      *ngFor=\"let file of files\"\r\n      (click)=\"previewFileClicked(file)\"\r\n      [ngStyle]=\"{'background-image': 'url('+ file.src +')'}\"\r\n    >\r\n      <div *ngIf=\"file.pending\" class=\"img-ul-loading-overlay\">\r\n        <div class=\"img-ul-spinning-circle\"></div>\r\n      </div>\r\n      <div *ngIf=\"!file.pending\" \r\n        [ngClass]=\"{'img-ul-disabled': disabled}\" \r\n        class=\"img-ul-x-mark\" \r\n        (click)=\"deleteFile(file)\">\r\n        <span class=\"img-ul-close\"></span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>",
                    styles: [".img-ul{--active-color:#3C9;--common-radius:3px;background-color:#f8f8f8;border-radius:var(--common-radius);border:1px dashed #d0d0d0;font-family:sans-serif;position:relative;color:#9b9b9b}.img-ul-file-is-over{border:var(--active-color) solid}.img-ul-hr-inline-group:after{clear:both;content:\"\";display:table}.img-ul-file-upload{padding:16px}.img-ul-drag-box-msg{display:inline-block;font-weight:600;margin-left:12px;padding-top:14px}label.img-ul-button input[type=file]{display:none;position:fixed;top:-99999px}.img-ul-clear{background-color:red}.img-ul-clear:disabled{background-color:#ff6464;cursor:default}.img-ul-upload{background-color:var(--active-color)}.img-ul-button{-moz-box-shadow:2px 2px 4px 0 rgba(148,148,148,.6);-webkit-box-shadow:2px 2px 4px 0 rgba(148,148,148,.6);border:none;box-shadow:2px 2px 4px 0 rgba(148,148,148,.6);color:#fff;cursor:pointer;display:inline-block;float:left;font-size:1.25em;font-weight:500;padding:10px;text-transform:uppercase}.img-ul-button:active span{display:block;position:relative;top:1px}.img-ul-container{background-color:#fdfdfd;padding:0 10px}.img-ul-image{background:center center/contain no-repeat;display:inline-block;float:left;height:86px;margin:6px;position:relative;width:86px}.img-ul-x-mark{background-color:#000;border-radius:2px;color:#fff;cursor:pointer;float:right;height:20px;margin:2px;opacity:.7;text-align:center;width:20px}.img-ul-close{height:20px;opacity:.7;padding-right:3px;position:relative;width:20px}.img-ul-x-mark:hover .img-ul-close{opacity:1}.img-ul-close:after,.img-ul-close:before{background-color:#fff;border-radius:2px;content:'';height:15px;position:absolute;top:0;width:2px}.img-ul-close:before{transform:rotate(45deg)}.img-ul-close:after{transform:rotate(-45deg)}.img-ul-x-mark.img-ul-disabled{display:none}.img-ul-loading-overlay{background-color:#000;bottom:0;left:0;opacity:.7;position:absolute;right:0;top:0}.img-ul-spinning-circle{height:30px;width:30px;margin:auto;position:absolute;top:0;left:0;bottom:0;right:0;border-radius:50%;border:3px solid rgba(255,255,255,0);border-top:3px solid #fff;border-right:3px solid #fff;-webkit-animation:2s cubic-bezier(.085,.625,.855,.36) infinite spinner;animation:2s cubic-bezier(.085,.625,.855,.36) infinite spinner}.img-ul-file-too-large{color:red;padding:0 15px}.img-ul-upload.img-ul-disabled{background-color:#86e9c9;cursor:default}.img-ul-upload.img-ul-disabled:active span{top:0}@-webkit-keyframes spinner{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes spinner{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}"]
                }] }
    ];
    /** @nocollapse */
    ImageUploadComponent.ctorParameters = function () { return [
        { type: ImageUploadService }
    ]; };
    ImageUploadComponent.propDecorators = {
        beforeUpload: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        buttonCaption: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        cssClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['class',] }],
        clearButtonCaption: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        dropBoxMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        fileTooLargeMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        headers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        max: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        maxFileSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        preview: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        partName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        style: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        supportedExtensions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['extensions',] }],
        url: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        withCredentials: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        uploadedFiles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        removed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        uploadStateChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        uploadFinished: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        previewClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        inputElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['input',] }]
    };
    return ImageUploadComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ImageUploadModule = /** @class */ (function () {
    function ImageUploadModule() {
    }
    /**
     * @return {?}
     */
    ImageUploadModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: ImageUploadModule,
            providers: [ImageUploadService]
        };
    };
    ImageUploadModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
                    declarations: [
                        ImageUploadComponent,
                        FileDropDirective
                    ],
                    exports: [ImageUploadComponent]
                },] }
    ];
    return ImageUploadModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ng2-op-image-upload.js.map

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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"github-star-button\">\r\n  <a class=\"github-button\"\r\n     href=\"https://github.com/aberezkin/ng2-image-upload\"\r\n     data-icon=\"octicon-star\"\r\n     data-size=\"large\"\r\n     data-show-count=\"true\"\r\n     aria-label=\"Star aberezkin/ng2-image-upload on GitHub\"\r\n  >Star</a>\r\n</div>\r\n\r\n<div class=\"jumbotron jumbotron-fluid text-center\">\r\n  <h1 class=\"display-3\">\r\n    Angular Image Upload\r\n  </h1>\r\n  <p class=\"lead\">\r\n    Angular component for image uploading\r\n  </p>\r\n</div>\r\n\r\n<div class=\"d-flex justify-content-center align-items-center mb-3\">\r\n  <ul class=\"nav nav-pills\">\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" routerLink=\"demo\" routerLinkActive=\"active\">Demo</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" routerLink=\"readme\" routerLinkActive=\"active\">Readme</a>\r\n    </li>\r\n  </ul>\r\n</div>\r\n\r\n<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_op_image_upload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-op-image-upload */ "../../dist/fesm5/ng2-op-image-upload.js");
/* harmony import */ var ngx_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-md */ "../../node_modules/ngx-md/fesm5/ngx-md.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _demo_components_demo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./demo/components/demo.component */ "./src/app/demo/components/demo.component.ts");
/* harmony import */ var _demo_demo_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./demo/demo.module */ "./src/app/demo/demo.module.ts");
/* harmony import */ var _readme_components_readme_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./readme/components/readme.component */ "./src/app/readme/components/readme.component.ts");
/* harmony import */ var _readme_readme_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./readme/readme.module */ "./src/app/readme/readme.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _demo_demo_module__WEBPACK_IMPORTED_MODULE_7__["DemoModule"],
                _readme_readme_module__WEBPACK_IMPORTED_MODULE_9__["ReadmeModule"],
                ngx_md__WEBPACK_IMPORTED_MODULE_4__["NgxMdModule"].forRoot(),
                ng2_op_image_upload__WEBPACK_IMPORTED_MODULE_3__["ImageUploadModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([{
                        path: '',
                        redirectTo: 'demo',
                        pathMatch: 'prefix'
                    }, {
                        path: 'demo',
                        component: _demo_components_demo_component__WEBPACK_IMPORTED_MODULE_6__["DemoComponent"]
                    }, {
                        path: 'readme',
                        component: _readme_components_readme_component__WEBPACK_IMPORTED_MODULE_8__["ReadmeComponent"]
                    }], { useHash: true })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/demo/components/basic/basic.component.html":
/*!************************************************************!*\
  !*** ./src/app/demo/components/basic/basic.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"mb-3 mt-3\">Basic Usage</h4>\r\n\r\n<image-upload url=\"http://mockbin.org/request\"></image-upload>\r\n\r\n<pre><code class=\"language-markup\"><![CDATA[<image-upload url=\"http://mockbin.org/request\"></image-upload>]]></code></pre>\r\n\r\n<h5 class=\"mb-3 mt-3\">With headers</h5>\r\n\r\n<image-upload url=\"http://mockbin.org/request\" [headers]=\"myHeaders\"></image-upload>\r\n\r\n<pre><code class=\"language-markup\"><![CDATA[<image-upload url=\"http://mockbin.org/request\" [headers]=\"myHeaders\"></image-upload>]]></code></pre>\r\n\r\n<pre><code class=\"language-typescript\"><![CDATA[myHeaders: { [header: string]: string | string[] } = {\r\n  'Authorization': 'MyToken',\r\n  'Another-Header': 'AnotherValue'\r\n};]]>\r\n</code></pre>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BasicExampleComponent = /** @class */ (function () {
    function BasicExampleComponent() {
        this.myHeaders = {
            'Authorization': 'MyToken',
            'Another-Header': 'AnotherValue'
        };
    }
    BasicExampleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'basic',
            template: __webpack_require__(/*! ./basic.component.html */ "./src/app/demo/components/basic/basic.component.html")
        })
    ], BasicExampleComponent);
    return BasicExampleComponent;
}());



/***/ }),

/***/ "./src/app/demo/components/customise/customise.component.html":
/*!********************************************************************!*\
  !*** ./src/app/demo/components/customise/customise.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"mb-3 mt-5\">Custom Labels</h4>\r\n\r\n<image-upload url=\"http://mockbin.org/request\" buttonCaption=\"PRESS ME AAAAAAAAAH\" dropBoxMessage=\"DROP ON ME AAAAAAAAAH\" clearButtonCaption=\"CLEAR ME AAAAAAAAAH\"></image-upload>\r\n\r\n<pre><code class=\"language-markup\"><![CDATA[<image-upload\r\n  url=\"http://mockbin.org/request\"\r\n  buttonCaption=\"PRESS ME AAAAAAAAAH\"\r\n  dropBoxMessage=\"DROP ON ME AAAAAAAAAH\"\r\n  clearButtonCaption=\"CLEAR ME AAAAAAAAAH\">\r\n</image-upload>]]></code></pre>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CustomiseComponent = /** @class */ (function () {
    function CustomiseComponent() {
    }
    CustomiseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'customise',
            template: __webpack_require__(/*! ./customise.component.html */ "./src/app/demo/components/customise/customise.component.html")
        })
    ], CustomiseComponent);
    return CustomiseComponent;
}());



/***/ }),

/***/ "./src/app/demo/components/demo.component.html":
/*!*****************************************************!*\
  !*** ./src/app/demo/components/demo.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mb-5\" highlight-js-content=\".highlight\">\r\n  <basic></basic>\r\n  <filter></filter>\r\n  <customise></customise>\r\n  <events></events>\r\n  <styles></styles>\r\n  <uploaded></uploaded>\r\n  <disabled></disabled>\r\n</div>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismjs */ "../../node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DemoComponent = /** @class */ (function () {
    function DemoComponent() {
    }
    DemoComponent.prototype.ngOnInit = function () {
        prismjs__WEBPACK_IMPORTED_MODULE_1__["highlightAll"](false);
    };
    DemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./demo.component.html */ "./src/app/demo/components/demo.component.html")
        })
    ], DemoComponent);
    return DemoComponent;
}());



/***/ }),

/***/ "./src/app/demo/components/disabled/disabled.component.html":
/*!******************************************************************!*\
  !*** ./src/app/demo/components/disabled/disabled.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"mb-3 mt-5\">Disable component</h4>\r\n\r\n<image-upload url=\"http://mockbin.org/request\" [disabled]=\"true\"></image-upload>\r\n\r\n<pre><code class=\"language-markup\"><![CDATA[<image-upload url=\"http://mockbin.org/request\" [disabled]=\"true\"></image-upload>]]></code></pre>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DisabledExampleComponent = /** @class */ (function () {
    function DisabledExampleComponent() {
    }
    DisabledExampleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'disabled',
            template: __webpack_require__(/*! ./disabled.component.html */ "./src/app/demo/components/disabled/disabled.component.html")
        })
    ], DisabledExampleComponent);
    return DisabledExampleComponent;
}());



/***/ }),

/***/ "./src/app/demo/components/events/events.component.html":
/*!**************************************************************!*\
  !*** ./src/app/demo/components/events/events.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"mb-3 mt-5\">Events</h4>\r\n\r\n<image-upload url=\"http://mockbin.org/request\"\r\n              (removed)=\"onRemoved($event)\"\r\n              (uploadFinished)=\"onUploadFinished($event)\"\r\n              (uploadStateChanged)=\"onUploadStateChanged($event)\">\r\n</image-upload>\r\n\r\n<pre><code class=\"language-markup\"><![CDATA[<image-upload\r\n  url=\"http://mockbin.org/request\"\r\n  (removed)=\"onRemoved($event)\"\r\n  (uploadFinished)=\"onUploadFinished($event)\"\r\n  (uploadStateChanged)=\"onUploadStateChanged($event)\">\r\n</image-upload>]]></code></pre>\r\n\r\n<pre><code class=\"language-typescript\"><![CDATA[onUploadFinished(file: FileHolder) {\r\n  console.log(file);\r\n}\r\n\r\nonRemoved(file: FileHolder) {\r\n  console.log(file);\r\n}\r\n\r\nonUploadStateChanged(state: boolean) {\r\n  console.log(state);\r\n}]]>\r\n</code></pre>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

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
    EventsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'events',
            template: __webpack_require__(/*! ./events.component.html */ "./src/app/demo/components/events/events.component.html")
        })
    ], EventsComponent);
    return EventsComponent;
}());



/***/ }),

/***/ "./src/app/demo/components/filter/filter.component.html":
/*!**************************************************************!*\
  !*** ./src/app/demo/components/filter/filter.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"mb-3 mt-5\">Limit and filter images</h4>\r\n\r\n<image-upload url=\"http://mockbin.org/request\" [max]=\"2\" [extensions]=\"['jpeg','png']\"></image-upload>\r\n\r\n<pre><code class=\"language-markup\"><![CDATA[<image-upload url=\"http://mockbin.org/request\" [max]=\"2\" [extensions]=\"['jpeg','png']\"></image-upload>]]></code></pre>\r\n\r\n<h5 class=\"mb-3 mt-3\">Manual filtering and editing</h5>\r\n\r\n<image-upload url=\"http://mockbin.org/request\" [beforeUpload]=\"onBeforeUpload\"></image-upload>\r\n\r\n<pre><code class=\"language-markup\"><![CDATA[<image-upload url=\"http://mockbin.org/request\" [beforeUpload]=\"onBeforeUpload\"></image-upload>]]></code></pre>\r\n\r\n<pre><code class=\"language-typescript\"><![CDATA[private fileCounter = 0;\r\n\r\nonBeforeUpload = (metadata: UploadMetadata) => {\r\n  if (this.fileCounter % 2 === 0) {\r\n    metadata.abort = true;\r\n  } else {\r\n    // mutate the file or replace it entirely - metadata.file\r\n    metadata.url = 'http://somewhereelse.com'\r\n  }\r\n\r\n  this.fileCounter++;\r\n  return metadata;\r\n};]]></code></pre>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

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
    FilterExampleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'filter',
            template: __webpack_require__(/*! ./filter.component.html */ "./src/app/demo/components/filter/filter.component.html")
        })
    ], FilterExampleComponent);
    return FilterExampleComponent;
}());



/***/ }),

/***/ "./src/app/demo/components/style/style.component.html":
/*!************************************************************!*\
  !*** ./src/app/demo/components/style/style.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"mb-3 mt-5\">Styles</h4>\r\n\r\n<h5 class=\"mb-3 mt-3\">Custom CSS Class</h5>\r\n\r\n<image-upload url=\"http://mockbin.org/request\" class=\"customClass\"></image-upload>\r\n\r\n<pre><code class=\"language-markup\"><![CDATA[<image-upload url=\"http://mockbin.org/request\" class=\"customClass\"></image-upload>]]></code></pre>\r\n\r\n<pre><code class=\"language-css\"><![CDATA[.customClass {\r\n    background-color: #dd3;\r\n    border-radius: 5px;\r\n    margin:5px;\r\n    width: 500px;\r\n}\r\n\r\n.customClass .img-ul-upload {\r\n    background-color: #000 !important;\r\n}\r\n\r\n.customClass .img-ul-clear {\r\n    background-color: #B819BB !important;\r\n}\r\n\r\n.customClass .img-ul-drag-box-msg {\r\n    color: purple !important;\r\n}\r\n\r\n.customClass .img-ul-container {\r\n    background-color: #FF6CAD !important;\r\n}\r\n]]></code></pre>\r\n\r\n<h5 class=\"mb-3 mt-3\">Custom Style</h5>\r\n\r\n<image-upload url=\"http://mockbin.org/request\" [style]=\"customStyle\"></image-upload>\r\n\r\n<pre><code class=\"language-markup\"><![CDATA[<image-upload url=\"http://mockbin.org/request\" [style]=\"customStyle\"></image-upload>]]></code></pre>\r\n\r\n<pre><code class=\"language-typescript\"><![CDATA[customStyle = {\r\n    selectButton: {\r\n      \"background-color\": \"yellow\",\r\n      \"border-radius\": \"25px\",\r\n      \"color\": \"#000\"\r\n    },\r\n    clearButton: {\r\n      \"background-color\": \"#FFF\",\r\n      \"border-radius\": \"25px\",\r\n      \"color\": \"#000\",\r\n      \"margin-left\": \"10px\"\r\n    },\r\n    layout: {\r\n      \"background-color\": \"purple\",\r\n      \"border-radius\": \"25px\",\r\n      \"color\": \"#FFF\",\r\n      \"font-size\": \"15px\",\r\n      \"margin\": \"10px\",\r\n      \"padding-top\": \"5px\",\r\n      \"width\": \"500px\"\r\n    },\r\n    previewPanel: {\r\n      \"background-color\": \"#894489\",\r\n      \"border-radius\": \"0 0 25px 25px\",\r\n    }\r\n  }\r\n]]></code></pre>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

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
    StyleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'styles',
            template: __webpack_require__(/*! ./style.component.html */ "./src/app/demo/components/style/style.component.html")
        })
    ], StyleComponent);
    return StyleComponent;
}());



/***/ }),

/***/ "./src/app/demo/components/uploaded/uploaded.component.html":
/*!******************************************************************!*\
  !*** ./src/app/demo/components/uploaded/uploaded.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"mb-3 mt-3\">Uploaded Usage</h4>\r\n\r\n<image-upload\r\n  url=\"http://mockbin.org/request\"\r\n  [uploadedFiles]=\"images\">\r\n</image-upload>\r\n\r\n<pre><code class=\"language-markup\"><![CDATA[<image-upload url=\"http://mockbin.org/request\" [uploadedFiles]=\"images\"></image-upload>]]></code></pre>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

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
    UploadedExampleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'uploaded',
            template: __webpack_require__(/*! ./uploaded.component.html */ "./src/app/demo/components/uploaded/uploaded.component.html")
        })
    ], UploadedExampleComponent);
    return UploadedExampleComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_op_image_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-op-image-upload */ "../../dist/fesm5/ng2-op-image-upload.js");
/* harmony import */ var _components_basic_basic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/basic/basic.component */ "./src/app/demo/components/basic/basic.component.ts");
/* harmony import */ var _components_customise_customise_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/customise/customise.component */ "./src/app/demo/components/customise/customise.component.ts");
/* harmony import */ var _components_demo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/demo.component */ "./src/app/demo/components/demo.component.ts");
/* harmony import */ var _components_disabled_disabled_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/disabled/disabled.component */ "./src/app/demo/components/disabled/disabled.component.ts");
/* harmony import */ var _components_events_events_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/events/events.component */ "./src/app/demo/components/events/events.component.ts");
/* harmony import */ var _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/filter/filter.component */ "./src/app/demo/components/filter/filter.component.ts");
/* harmony import */ var _components_style_style_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/style/style.component */ "./src/app/demo/components/style/style.component.ts");
/* harmony import */ var _components_uploaded_uploaded_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/uploaded/uploaded.component */ "./src/app/demo/components/uploaded/uploaded.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var DemoModule = /** @class */ (function () {
    function DemoModule() {
    }
    DemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
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
        })
    ], DemoModule);
    return DemoModule;
}());



/***/ }),

/***/ "./src/app/readme/components/readme.component.html":
/*!*********************************************************!*\
  !*** ./src/app/readme/components/readme.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <ngx-md path=\"assets/readme.md\"></ngx-md>\r\n</div>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ReadmeComponent = /** @class */ (function () {
    function ReadmeComponent() {
    }
    ReadmeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./readme.component.html */ "./src/app/readme/components/readme.component.html")
        })
    ], ReadmeComponent);
    return ReadmeComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-md */ "../../node_modules/ngx-md/fesm5/ngx-md.js");
/* harmony import */ var _components_readme_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/readme.component */ "./src/app/readme/components/readme.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReadmeModule = /** @class */ (function () {
    function ReadmeModule() {
    }
    ReadmeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _components_readme_component__WEBPACK_IMPORTED_MODULE_2__["ReadmeComponent"]
            ],
            imports: [
                ngx_md__WEBPACK_IMPORTED_MODULE_1__["NgxMdModule"]
            ]
        })
    ], ReadmeModule);
    return ReadmeModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismjs */ "../../node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismjs/components/prism-typescript */ "../../node_modules/prismjs/components/prism-typescript.js");
/* harmony import */ var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\aroesch\Documents\GitHub\ng2-op-image-upload\projects\ng2-image-upload-demo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map