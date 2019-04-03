(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["programme-programme-module"],{

/***/ "./src/app/programme/programme.module.ts":
/*!***********************************************!*\
  !*** ./src/app/programme/programme.module.ts ***!
  \***********************************************/
/*! exports provided: ProgrammePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgrammePageModule", function() { return ProgrammePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _programme_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./programme.page */ "./src/app/programme/programme.page.ts");







var routes = [
    {
        path: '',
        component: _programme_page__WEBPACK_IMPORTED_MODULE_6__["ProgrammePage"]
    }
];
var ProgrammePageModule = /** @class */ (function () {
    function ProgrammePageModule() {
    }
    ProgrammePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_programme_page__WEBPACK_IMPORTED_MODULE_6__["ProgrammePage"]]
        })
    ], ProgrammePageModule);
    return ProgrammePageModule;
}());



/***/ }),

/***/ "./src/app/programme/programme.page.html":
/*!***********************************************!*\
  !*** ./src/app/programme/programme.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>programme</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n<a href=\"/getpatientphonenumber\">\n  <img src=\"assets/img/programme.png\" />\n</a>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/programme/programme.page.scss":
/*!***********************************************!*\
  !*** ./src/app/programme/programme.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2dyYW1tZS9wcm9ncmFtbWUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/programme/programme.page.ts":
/*!*********************************************!*\
  !*** ./src/app/programme/programme.page.ts ***!
  \*********************************************/
/*! exports provided: ProgrammePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgrammePage", function() { return ProgrammePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProgrammePage = /** @class */ (function () {
    function ProgrammePage() {
    }
    ProgrammePage.prototype.ngOnInit = function () {
    };
    ProgrammePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-programme',
            template: __webpack_require__(/*! ./programme.page.html */ "./src/app/programme/programme.page.html"),
            styles: [__webpack_require__(/*! ./programme.page.scss */ "./src/app/programme/programme.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProgrammePage);
    return ProgrammePage;
}());



/***/ })

}]);
//# sourceMappingURL=programme-programme-module.js.map