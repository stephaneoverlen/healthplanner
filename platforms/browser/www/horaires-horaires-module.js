(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["horaires-horaires-module"],{

/***/ "./src/app/horaires/horaires.module.ts":
/*!*********************************************!*\
  !*** ./src/app/horaires/horaires.module.ts ***!
  \*********************************************/
/*! exports provided: HorairesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorairesPageModule", function() { return HorairesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _horaires_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./horaires.page */ "./src/app/horaires/horaires.page.ts");







var routes = [
    {
        path: '',
        component: _horaires_page__WEBPACK_IMPORTED_MODULE_6__["HorairesPage"]
    }
];
var HorairesPageModule = /** @class */ (function () {
    function HorairesPageModule() {
    }
    HorairesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_horaires_page__WEBPACK_IMPORTED_MODULE_6__["HorairesPage"]]
        })
    ], HorairesPageModule);
    return HorairesPageModule;
}());



/***/ }),

/***/ "./src/app/horaires/horaires.page.html":
/*!*********************************************!*\
  !*** ./src/app/horaires/horaires.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>horaires</ion-title>\n  </ion-toolbar>\n\n  <div class=\"searchBar\">\n    <ion-searchbar placeholder=\"Recherche\" animated showCancelButton debounce=\"0\" (ionChange)=\"getItems($event)\">\n    </ion-searchbar>\n  </div>\n</ion-header>\n\n<ion-content>\n  <div class=\"centeredTitle\">Composer mon parcours médical</div>\n  <div class=\"label\">\n    <a href=\"/praticien\">Sélectionnez un praticien</a>\n    /\n    <a href=\"/deplacement\">Moyen de déplacement</a>\n    /\n    <a href=\"/ordonnance\">Ordonnance</a>\n    /\n    Horaires\n  </div>\n\n  <div style=\"margin: auto; width: 600px; text-align: center;\">\n    <ion-button class=\"auto-select-button\" expand=\"block\"\n      style=\"margin: auto; margin-bottom: 20px; width: 180px; height: 80px; font-size:medium;\">Je souhaite prendre\n      les<br>rendez-vous moi-même</ion-button>\n\n    <ion-list>\n      <span *ngFor=\"let entry of days\" style=\"font-size: xx-large;\">\n        <ion-label>{{entry}}</ion-label>\n        <ion-checkbox slot=\"end\" style=\"margin-left: 5px; margin-right: 15px;\"></ion-checkbox>\n      </span>\n    </ion-list>\n\n    <span style=\"font-size: x-large;\">Horaires de préférence (optionnel)</span>\n\n    <div style=\"width: 190px; margin: auto;\">\n      <ion-item>\n        <span>De </span>\n        <ion-datetime value=\"00:00\" displayFormat=\"HH:mm\"></ion-datetime>\n        <span style=\"margin-left: 15px;\"> à </span>\n        <ion-datetime value=\"00:00\" displayFormat=\"HH:mm\"></ion-datetime>\n      </ion-item>\n    </div>\n    <img src=\"assets/icon/plus.svg\" style=\"width: 25px; position: relative; top: 8px; margin: 4px;\" />\n    <span style=\"font-size: xx-large; margin-bottom: 10px;\">Ajouter un créneau</span>\n\n    <ion-item>\n      <a href=\"/finalisation\" style=\"margin: auto;\">\n        <ion-button class=\"auto-select-button\" expand=\"block\">Suivant</ion-button>\n      </a>\n    </ion-item>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/horaires/horaires.page.scss":
/*!*********************************************!*\
  !*** ./src/app/horaires/horaires.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".centeredTitle {\n  width: 100%;\n  text-align: center;\n  margin: auto;\n  margin-top: 20px;\n  font-weight: bold;\n  font-size: xx-large; }\n\n.label {\n  width: 100%;\n  text-align: center;\n  margin: 20px;\n  color: grey;\n  font-size: x-large; }\n\n.searchBar {\n  max-width: 700px;\n  margin: auto;\n  margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Qcm9qZWN0cy9IZWFsdGhhZHZpc29yL3NyYy9hcHAvaG9yYWlyZXMvaG9yYWlyZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvcmFpcmVzL2hvcmFpcmVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXJlZFRpdGxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxufVxyXG5cclxuLmxhYmVsIHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG4gIGNvbG9yOiBncmV5O1xyXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxufVxyXG5cclxuLnNlYXJjaEJhciB7XHJcbiAgbWF4LXdpZHRoOiA3MDBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/horaires/horaires.page.ts":
/*!*******************************************!*\
  !*** ./src/app/horaires/horaires.page.ts ***!
  \*******************************************/
/*! exports provided: HorairesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorairesPage", function() { return HorairesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HorairesPage = /** @class */ (function () {
    function HorairesPage() {
        this.days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'];
    }
    HorairesPage.prototype.ngOnInit = function () {
    };
    HorairesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-horaires',
            template: __webpack_require__(/*! ./horaires.page.html */ "./src/app/horaires/horaires.page.html"),
            styles: [__webpack_require__(/*! ./horaires.page.scss */ "./src/app/horaires/horaires.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HorairesPage);
    return HorairesPage;
}());



/***/ })

}]);
//# sourceMappingURL=horaires-horaires-module.js.map