(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["getpatientphonenumber-getpatientphonenumber-module"],{

/***/ "./src/app/getpatientphonenumber/getpatientphonenumber.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/getpatientphonenumber/getpatientphonenumber.module.ts ***!
  \***********************************************************************/
/*! exports provided: GetpatientphonenumberPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetpatientphonenumberPageModule", function() { return GetpatientphonenumberPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _getpatientphonenumber_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getpatientphonenumber.page */ "./src/app/getpatientphonenumber/getpatientphonenumber.page.ts");







var routes = [
    {
        path: '',
        component: _getpatientphonenumber_page__WEBPACK_IMPORTED_MODULE_6__["GetpatientphonenumberPage"]
    }
];
var GetpatientphonenumberPageModule = /** @class */ (function () {
    function GetpatientphonenumberPageModule() {
    }
    GetpatientphonenumberPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_getpatientphonenumber_page__WEBPACK_IMPORTED_MODULE_6__["GetpatientphonenumberPage"]]
        })
    ], GetpatientphonenumberPageModule);
    return GetpatientphonenumberPageModule;
}());



/***/ }),

/***/ "./src/app/getpatientphonenumber/getpatientphonenumber.page.html":
/*!***********************************************************************!*\
  !*** ./src/app/getpatientphonenumber/getpatientphonenumber.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Téléphone du patient</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div style=\"width: 400px; margin: auto; border: 1px solid lightgrey; border-radius: 10px; padding: 0 10px 10px 10px;\">\n    <ion-item>\n      <ion-label position=\"floating\">Entrez le numéro de téléphone du patient</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"phone\" id=\"phone\"></ion-input>\n    </ion-item>\n    <ion-button class=\"auto-select-button\" expand=\"block\" (click)=\"validate()\">Valider</ion-button>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/getpatientphonenumber/getpatientphonenumber.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/getpatientphonenumber/getpatientphonenumber.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dldHBhdGllbnRwaG9uZW51bWJlci9nZXRwYXRpZW50cGhvbmVudW1iZXIucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/getpatientphonenumber/getpatientphonenumber.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/getpatientphonenumber/getpatientphonenumber.page.ts ***!
  \*********************************************************************/
/*! exports provided: GetpatientphonenumberPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetpatientphonenumberPage", function() { return GetpatientphonenumberPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var GetpatientphonenumberPage = /** @class */ (function () {
    function GetpatientphonenumberPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    GetpatientphonenumberPage.prototype.ngOnInit = function () {
    };
    GetpatientphonenumberPage.prototype.validate = function () {
        this.navCtrl.navigateRoot('/dashboard');
    };
    GetpatientphonenumberPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-getpatientphonenumber',
            template: __webpack_require__(/*! ./getpatientphonenumber.page.html */ "./src/app/getpatientphonenumber/getpatientphonenumber.page.html"),
            styles: [__webpack_require__(/*! ./getpatientphonenumber.page.scss */ "./src/app/getpatientphonenumber/getpatientphonenumber.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], GetpatientphonenumberPage);
    return GetpatientphonenumberPage;
}());



/***/ })

}]);
//# sourceMappingURL=getpatientphonenumber-getpatientphonenumber-module.js.map