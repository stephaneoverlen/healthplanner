(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["parcours-parcours-module"],{

/***/ "./src/app/parcours/parcours.module.ts":
/*!*********************************************!*\
  !*** ./src/app/parcours/parcours.module.ts ***!
  \*********************************************/
/*! exports provided: ParcoursPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParcoursPageModule", function() { return ParcoursPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _parcours_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parcours.page */ "./src/app/parcours/parcours.page.ts");







var routes = [
    {
        path: '',
        component: _parcours_page__WEBPACK_IMPORTED_MODULE_6__["ParcoursPage"]
    }
];
var ParcoursPageModule = /** @class */ (function () {
    function ParcoursPageModule() {
    }
    ParcoursPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_parcours_page__WEBPACK_IMPORTED_MODULE_6__["ParcoursPage"]]
        })
    ], ParcoursPageModule);
    return ParcoursPageModule;
}());



/***/ }),

/***/ "./src/app/parcours/parcours.page.html":
/*!*********************************************!*\
  !*** ./src/app/parcours/parcours.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<ion-content padding>\n    <ion-badge color=\"danger\" style=\"position: fixed; bottom: 270px; left: 80px;\">3</ion-badge>\n    <ion-badge color=\"danger\" style=\"position: fixed; bottom: 270px; left: 400px;\">1</ion-badge>\n  <a href=\"/praticien\">\n    <img src=\"assets/img/parcours.png\" />\n  </a>\n  <ion-item style=\"font-weight: bold;\">Documentations</ion-item>\n  <img src=\"assets/img/documentations.png\" />\n</ion-content>\n"

/***/ }),

/***/ "./src/app/parcours/parcours.page.scss":
/*!*********************************************!*\
  !*** ./src/app/parcours/parcours.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcmNvdXJzL3BhcmNvdXJzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/parcours/parcours.page.ts":
/*!*******************************************!*\
  !*** ./src/app/parcours/parcours.page.ts ***!
  \*******************************************/
/*! exports provided: ParcoursPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParcoursPage", function() { return ParcoursPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ParcoursPage = /** @class */ (function () {
    function ParcoursPage() {
    }
    ParcoursPage.prototype.ngOnInit = function () {
    };
    ParcoursPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-parcours',
            template: __webpack_require__(/*! ./parcours.page.html */ "./src/app/parcours/parcours.page.html"),
            styles: [__webpack_require__(/*! ./parcours.page.scss */ "./src/app/parcours/parcours.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ParcoursPage);
    return ParcoursPage;
}());



/***/ })

}]);
//# sourceMappingURL=parcours-parcours-module.js.map