(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["finalisation-finalisation-module"],{

/***/ "./src/app/finalisation/finalisation.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/finalisation/finalisation.module.ts ***!
  \*****************************************************/
/*! exports provided: FinalisationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalisationPageModule", function() { return FinalisationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _finalisation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./finalisation.page */ "./src/app/finalisation/finalisation.page.ts");







var routes = [
    {
        path: '',
        component: _finalisation_page__WEBPACK_IMPORTED_MODULE_6__["FinalisationPage"]
    }
];
var FinalisationPageModule = /** @class */ (function () {
    function FinalisationPageModule() {
    }
    FinalisationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_finalisation_page__WEBPACK_IMPORTED_MODULE_6__["FinalisationPage"]]
        })
    ], FinalisationPageModule);
    return FinalisationPageModule;
}());



/***/ }),

/***/ "./src/app/finalisation/finalisation.page.html":
/*!*****************************************************!*\
  !*** ./src/app/finalisation/finalisation.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>finalisation</ion-title>\n  </ion-toolbar>\n\n  <div class=\"searchBar\">\n    <ion-searchbar placeholder=\"Recherche\" animated showCancelButton debounce=\"0\"\n      (ionChange)=\"getItems($event)\">\n    </ion-searchbar>\n  </div>\n</ion-header>\n\n<ion-content padding>\n  <div class=\"centeredTitle\">Composer mon parcours médical</div>\n  \n  <div class=\"label\">\n      <a href=\"/praticien\">Sélectionnez un praticien</a>\n      /\n      <a href=\"/deplacement\">Moyen de déplacement</a>\n      /\n      <a href=\"/ordonnance\">Ordonnance</a>\n      /\n      <a href=\"/horaires\">Horaires</a>\n      /\n      Finalisation\n    </div>\n\n  <div style=\"width: 400px; margin: auto; border: 1px solid lightgrey; border-radius: 10px; padding: 0 10px 10px 10px;\">\n    <ion-item>\n      <ion-label position=\"floating\">Votre nom et prénom</ion-label>\n      <ion-input></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Votre numéro de téléphone</ion-label>\n      <ion-input></ion-input>\n    </ion-item>\n\n    <ion-button class=\"auto-select-button\" expand=\"block\">Valider</ion-button>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/finalisation/finalisation.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/finalisation/finalisation.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".centeredTitle {\n  width: 100%;\n  text-align: center;\n  margin: auto;\n  font-weight: bold;\n  font-size: xx-large; }\n\n.label {\n  width: 100%;\n  text-align: center;\n  margin: 20px;\n  color: grey;\n  font-size: x-large; }\n\n.searchBar {\n  max-width: 700px;\n  margin: auto;\n  margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Qcm9qZWN0cy9IZWFsdGhhZHZpc29yL3NyYy9hcHAvZmluYWxpc2F0aW9uL2ZpbmFsaXNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9maW5hbGlzYXRpb24vZmluYWxpc2F0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXJlZFRpdGxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbn1cclxuXHJcbi5sYWJlbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMjBweDtcclxuICBjb2xvcjogZ3JleTtcclxuICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbn1cclxuXHJcbi5zZWFyY2hCYXIge1xyXG4gIG1heC13aWR0aDogNzAwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/finalisation/finalisation.page.ts":
/*!***************************************************!*\
  !*** ./src/app/finalisation/finalisation.page.ts ***!
  \***************************************************/
/*! exports provided: FinalisationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalisationPage", function() { return FinalisationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FinalisationPage = /** @class */ (function () {
    function FinalisationPage() {
    }
    FinalisationPage.prototype.ngOnInit = function () {
    };
    FinalisationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-finalisation',
            template: __webpack_require__(/*! ./finalisation.page.html */ "./src/app/finalisation/finalisation.page.html"),
            styles: [__webpack_require__(/*! ./finalisation.page.scss */ "./src/app/finalisation/finalisation.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FinalisationPage);
    return FinalisationPage;
}());



/***/ })

}]);
//# sourceMappingURL=finalisation-finalisation-module.js.map