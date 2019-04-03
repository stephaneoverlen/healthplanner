(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["informations-informations-module"],{

/***/ "./src/app/informations/informations.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/informations/informations.module.ts ***!
  \*****************************************************/
/*! exports provided: InformationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationsPageModule", function() { return InformationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _informations_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./informations.page */ "./src/app/informations/informations.page.ts");







var routes = [
    {
        path: '',
        component: _informations_page__WEBPACK_IMPORTED_MODULE_6__["InformationsPage"]
    }
];
var InformationsPageModule = /** @class */ (function () {
    function InformationsPageModule() {
    }
    InformationsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_informations_page__WEBPACK_IMPORTED_MODULE_6__["InformationsPage"]]
        })
    ], InformationsPageModule);
    return InformationsPageModule;
}());



/***/ }),

/***/ "./src/app/informations/informations.page.html":
/*!*****************************************************!*\
  !*** ./src/app/informations/informations.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>informations</ion-title>\r\n  </ion-toolbar>\r\n\r\n  <div class=\"searchBar\">\r\n    <ion-searchbar placeholder=\"Recherche\" animated showCancelButton debounce=\"0\" (ionChange)=\"getItems($event)\">\r\n    </ion-searchbar>\r\n  </div>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"centeredTitle\">Composer mon parcours médical</div>\r\n  <div style=\"width: 400px; margin: auto; text-align: center; margin-top: 20px;\">\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Entrez votre code postal</ion-label>\r\n      <ion-input [(ngModel)]=\"npa\"></ion-input>\r\n    </ion-item>\r\n    <ion-button expand=\"block\" (click)=\"gotoPraticien()\">Valider</ion-button>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/informations/informations.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/informations/informations.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".centeredTitle {\n  width: 100%;\n  text-align: center;\n  margin: auto;\n  margin-top: 20px;\n  font-weight: bold;\n  font-size: xx-large; }\n\n.label {\n  width: 100%;\n  text-align: center;\n  margin: 20px;\n  color: grey;\n  font-size: x-large; }\n\n.searchBar {\n  max-width: 700px;\n  margin: auto;\n  margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Qcm9qZWN0cy9IZWFsdGhhZHZpc29yL3NyYy9hcHAvaW5mb3JtYXRpb25zL2luZm9ybWF0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaW5mb3JtYXRpb25zL2luZm9ybWF0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyZWRUaXRsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgfVxyXG4gIFxyXG4gIC5sYWJlbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gIH1cclxuICBcclxuICAuc2VhcmNoQmFyIHtcclxuICAgIG1heC13aWR0aDogNzAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICAgICAgIl19 */"

/***/ }),

/***/ "./src/app/informations/informations.page.ts":
/*!***************************************************!*\
  !*** ./src/app/informations/informations.page.ts ***!
  \***************************************************/
/*! exports provided: InformationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationsPage", function() { return InformationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var InformationsPage = /** @class */ (function () {
    function InformationsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    InformationsPage.prototype.ngOnInit = function () {
    };
    InformationsPage.prototype.gotoPraticien = function () {
        localStorage.setItem('npa', this.npa);
        this.navCtrl.navigateRoot('/praticien');
    };
    InformationsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-informations',
            template: __webpack_require__(/*! ./informations.page.html */ "./src/app/informations/informations.page.html"),
            styles: [__webpack_require__(/*! ./informations.page.scss */ "./src/app/informations/informations.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], InformationsPage);
    return InformationsPage;
}());



/***/ })

}]);
//# sourceMappingURL=informations-informations-module.js.map