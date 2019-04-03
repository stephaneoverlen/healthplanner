(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["deplacement-deplacement-module"],{

/***/ "./src/app/deplacement/deplacement.module.ts":
/*!***************************************************!*\
  !*** ./src/app/deplacement/deplacement.module.ts ***!
  \***************************************************/
/*! exports provided: DeplacementPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeplacementPageModule", function() { return DeplacementPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _deplacement_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./deplacement.page */ "./src/app/deplacement/deplacement.page.ts");







var routes = [
    {
        path: '',
        component: _deplacement_page__WEBPACK_IMPORTED_MODULE_6__["DeplacementPage"]
    }
];
var DeplacementPageModule = /** @class */ (function () {
    function DeplacementPageModule() {
    }
    DeplacementPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_deplacement_page__WEBPACK_IMPORTED_MODULE_6__["DeplacementPage"]]
        })
    ], DeplacementPageModule);
    return DeplacementPageModule;
}());



/***/ }),

/***/ "./src/app/deplacement/deplacement.page.html":
/*!***************************************************!*\
  !*** ./src/app/deplacement/deplacement.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-title>\n        <img src=\"assets/img/header.png\" alt=\"header\" />\n      </ion-title>\n    </ion-toolbar>\n  \n    <div class=\"searchBar\">\n      <ion-searchbar placeholder=\"Recherche\" animated showCancelButton debounce=\"0\" (ionChange)=\"getItems($event)\">\n      </ion-searchbar>\n    </div>\n  </ion-header>\n  \n<ion-content padding>\n  <div class=\"centeredTitle\">Composer mon parcours médical</div>\n\n  <div class=\"label\">\n    <a href=\"/praticien\">Sélectionnez un praticien</a>\n    /\n    Moyen de déplacement\n  </div>\n  <ion-button class=\"auto-select-button\" expand=\"block\">Je peux me déplacer par mes propres moyens</ion-button>\n\n  <a href=\"/ordonnance\">\n    <ion-card class=\"card\" *ngFor=\"let transport of resultArray\">\n      <ion-card-header>\n        <ion-card-title>\n          {{ transport.name }}\n          <span style=\"float: right;\">Dans mes favoris <ion-icon name=\"star\"></ion-icon></span><br>\n        </ion-card-title>\n        <ion-card-subtitle>\n          {{ transport.type }}\n        </ion-card-subtitle>\n      </ion-card-header>\n      <!-- <ion-card-content>\n        <ion-icon name=\"chatbubbles\"></ion-icon>\n      </ion-card-content> -->\n    </ion-card>\n  </a>\n</ion-content>"

/***/ }),

/***/ "./src/app/deplacement/deplacement.page.scss":
/*!***************************************************!*\
  !*** ./src/app/deplacement/deplacement.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  width: 45%;\n  display: inline-block; }\n\n.centeredTitle {\n  width: 100%;\n  text-align: center;\n  margin: auto;\n  font-weight: bold;\n  font-size: xx-large; }\n\n.label {\n  width: 100%;\n  text-align: center;\n  margin: 20px;\n  color: grey;\n  font-size: x-large; }\n\n.searchBar {\n  max-width: 700px;\n  margin: auto;\n  margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Qcm9qZWN0cy9IZWFsdGhhZHZpc29yL3NyYy9hcHAvZGVwbGFjZW1lbnQvZGVwbGFjZW1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBVTtFQUNWLHFCQUFxQixFQUFBOztBQUd6QjtFQUNJLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2RlcGxhY2VtZW50L2RlcGxhY2VtZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICAgIHdpZHRoOiA0NSU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5jZW50ZXJlZFRpdGxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gIH1cclxuICBcclxuICAubGFiZWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBjb2xvcjogZ3JleTtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICB9XHJcbiAgXHJcbiAgLnNlYXJjaEJhciB7XHJcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/deplacement/deplacement.page.ts":
/*!*************************************************!*\
  !*** ./src/app/deplacement/deplacement.page.ts ***!
  \*************************************************/
/*! exports provided: DeplacementPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeplacementPage", function() { return DeplacementPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storage */ "./src/app/storage.ts");



var DeplacementPage = /** @class */ (function () {
    function DeplacementPage(storage) {
        this.storage = storage;
        this.resultArray = [];
    }
    DeplacementPage.prototype.ngOnInit = function () {
        this.getItems(null);
    };
    DeplacementPage.prototype.getItems = function (event) {
        var _this = this;
        if (!event || event.detail.value == '') {
            this.storage.transports.forEach(function (transport) {
                _this.resultArray.push(transport);
            });
        }
        else {
            this.storage.transports.forEach(function (transport) {
                if (transport.name.toLowerCase().includes(event.detail.value.toLowerCase())
                    && !_this.resultArray.includes(transport)) {
                    // si l'activité contient le texte entré ET le tableau ne le contient pas: l'ajouter au tableau
                    _this.resultArray.push(transport);
                }
                else if (!transport.name.toLowerCase().includes(event.detail.value.toLowerCase())
                    && _this.resultArray.includes(transport)) {
                    // si l'activité ne contient pas le texte entré ET le tableau le contient déjà: le supprimer du tableau
                    var index = _this.resultArray.indexOf(transport);
                    _this.resultArray.splice(index, 1);
                }
            });
        }
    };
    DeplacementPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-deplacement',
            template: __webpack_require__(/*! ./deplacement.page.html */ "./src/app/deplacement/deplacement.page.html"),
            styles: [__webpack_require__(/*! ./deplacement.page.scss */ "./src/app/deplacement/deplacement.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]])
    ], DeplacementPage);
    return DeplacementPage;
}());



/***/ })

}]);
//# sourceMappingURL=deplacement-deplacement-module.js.map