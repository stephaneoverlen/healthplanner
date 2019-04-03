(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ordonnance-ordonnance-module"],{

/***/ "./src/app/ordonnance/ordonnance.module.ts":
/*!*************************************************!*\
  !*** ./src/app/ordonnance/ordonnance.module.ts ***!
  \*************************************************/
/*! exports provided: OrdonnancePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdonnancePageModule", function() { return OrdonnancePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ordonnance_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ordonnance.page */ "./src/app/ordonnance/ordonnance.page.ts");







var routes = [
    {
        path: '',
        component: _ordonnance_page__WEBPACK_IMPORTED_MODULE_6__["OrdonnancePage"]
    }
];
var OrdonnancePageModule = /** @class */ (function () {
    function OrdonnancePageModule() {
    }
    OrdonnancePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_ordonnance_page__WEBPACK_IMPORTED_MODULE_6__["OrdonnancePage"]]
        })
    ], OrdonnancePageModule);
    return OrdonnancePageModule;
}());



/***/ }),

/***/ "./src/app/ordonnance/ordonnance.page.html":
/*!*************************************************!*\
  !*** ./src/app/ordonnance/ordonnance.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>ordonnance</ion-title>\n  </ion-toolbar>\n\n  <div class=\"searchBar\">\n    <ion-searchbar placeholder=\"Recherche\" animated showCancelButton debounce=\"0\" (ionChange)=\"getItems($event)\">\n    </ion-searchbar>\n  </div>\n</ion-header>\n\n<ion-content padding>\n  <div class=\"centeredTitle\">Composer mon parcours médical</div>\n\n  <div class=\"label\">\n    <a href=\"/praticien\">Sélectionnez un praticien</a>\n    /\n    <a href=\"/deplacement\">Moyen de déplacement</a>\n    /\n    Ordonnance\n  </div>\n\n  <i class=\"icon ion-ionic\"></i>\n\n  <ion-item>\n    <ion-label position=\"floating\" style=\"font-size: xx-large;\">Nombre de séances nécessaires </ion-label>\n    <img src=\"assets/icon/minus.svg\" style=\"width: 25px;\" (click)=\"suppressionSeanceNecessaire()\" />\n    <span name=\"seancesNecessaires\" ngDefaultControl [(ngModel)]=\"seancesNecessaires\"\n      style=\"font-size: xx-large; margin: 5px; height: 38px; width: 20px;\">{{ seancesNecessaires }}</span>\n    <img src=\"assets/icon/plus.svg\" style=\"width: 25px;\" (click)=\"ajoutSeanceNecessaire()\" />\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\" style=\"font-size: xx-large;\">Fréquence des séances </ion-label>\n    <img src=\"assets/icon/minus.svg\" style=\"width: 25px;\" (click)=\"suppressionFrequenceSeance()\" />\n    <span name=\"frequenceSeances\" ngDefaultControl [(ngModel)]=\"frequenceSeances\"\n      style=\"font-size: xx-large; margin: 5px; height: 38px; width: 20px;\">{{ frequenceSeances }}</span>\n    <img src=\"assets/icon/plus.svg\" style=\"width: 25px;\" (click)=\"ajoutFrequenceSeance()\" />\n    <span style=\"font-size: xx-large;\"> séances par semaine</span>\n  </ion-item>\n\n  <div>\n    <ion-label position=\"floating\" style=\"font-size: xx-large;\">À partir de quelle date ?</ion-label>\n    <ion-datetime style=\"font-size: xx-large;\" displayFormat=\"MM/DD/YYYY\" value=\"2002-09-23T15:03:46.789\">\n    </ion-datetime>\n  </div>\n\n  <div>\n    <ion-label position=\"floating\" style=\"font-size: xx-large;\">Joindre l'ordonnance (optionnel)</ion-label>\n    <ion-button class=\"auto-select-button\" expand=\"block\" style=\"width: 200px;\">Parcourir</ion-button>\n  </div>\n\n  <div>\n    <ion-button class=\"auto-select-button\" expand=\"block\" style=\"height: 80px; width: 220px; display: inline-block;\">Je\n      souhaite prendre les<br> rendez-vous moi-même</ion-button>\n    <a href=\"/horaires\">\n      <ion-button class=\"auto-select-button\" expand=\"block\" style=\"height: 80px; width: 220px; display: inline-block;\">\n        Suivant</ion-button>\n    </a>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/ordonnance/ordonnance.page.scss":
/*!*************************************************!*\
  !*** ./src/app/ordonnance/ordonnance.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".centeredTitle {\n  width: 100%;\n  text-align: center;\n  margin: auto;\n  font-weight: bold;\n  font-size: xx-large; }\n\n.label {\n  width: 100%;\n  text-align: center;\n  margin: 20px;\n  color: grey;\n  font-size: x-large; }\n\n.searchBar {\n  max-width: 700px;\n  margin: auto;\n  margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Qcm9qZWN0cy9IZWFsdGhhZHZpc29yL3NyYy9hcHAvb3Jkb25uYW5jZS9vcmRvbm5hbmNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL29yZG9ubmFuY2Uvb3Jkb25uYW5jZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyZWRUaXRsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG59XHJcblxyXG4ubGFiZWwge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDIwcHg7XHJcbiAgY29sb3I6IGdyZXk7XHJcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG59XHJcblxyXG4uc2VhcmNoQmFyIHtcclxuICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/ordonnance/ordonnance.page.ts":
/*!***********************************************!*\
  !*** ./src/app/ordonnance/ordonnance.page.ts ***!
  \***********************************************/
/*! exports provided: OrdonnancePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdonnancePage", function() { return OrdonnancePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrdonnancePage = /** @class */ (function () {
    function OrdonnancePage() {
        this.seancesNecessaires = 3;
        this.frequenceSeances = 3;
    }
    OrdonnancePage.prototype.ngOnInit = function () {
    };
    OrdonnancePage.prototype.onDateSelect = function (date) {
        console.log(date);
    };
    OrdonnancePage.prototype.ajoutSeanceNecessaire = function () {
        this.seancesNecessaires++;
    };
    OrdonnancePage.prototype.suppressionSeanceNecessaire = function () {
        if (this.seancesNecessaires > 0) {
            this.seancesNecessaires--;
        }
    };
    OrdonnancePage.prototype.ajoutFrequenceSeance = function () {
        this.frequenceSeances++;
    };
    OrdonnancePage.prototype.suppressionFrequenceSeance = function () {
        if (this.frequenceSeances > 0) {
            this.frequenceSeances--;
        }
    };
    OrdonnancePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ordonnance',
            template: __webpack_require__(/*! ./ordonnance.page.html */ "./src/app/ordonnance/ordonnance.page.html"),
            styles: [__webpack_require__(/*! ./ordonnance.page.scss */ "./src/app/ordonnance/ordonnance.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OrdonnancePage);
    return OrdonnancePage;
}());



/***/ })

}]);
//# sourceMappingURL=ordonnance-ordonnance-module.js.map