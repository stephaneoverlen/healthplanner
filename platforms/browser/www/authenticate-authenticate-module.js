(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["authenticate-authenticate-module"],{

/***/ "./src/app/authenticate/authenticate.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/authenticate/authenticate.module.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticatePageModule", function() { return AuthenticatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _authenticate_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authenticate.page */ "./src/app/authenticate/authenticate.page.ts");







var routes = [
    {
        path: '',
        component: _authenticate_page__WEBPACK_IMPORTED_MODULE_6__["AuthenticatePage"]
    }
];
var AuthenticatePageModule = /** @class */ (function () {
    function AuthenticatePageModule() {
    }
    AuthenticatePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_authenticate_page__WEBPACK_IMPORTED_MODULE_6__["AuthenticatePage"]]
        })
    ], AuthenticatePageModule);
    return AuthenticatePageModule;
}());



/***/ }),

/***/ "./src/app/authenticate/authenticate.page.html":
/*!*****************************************************!*\
  !*** ./src/app/authenticate/authenticate.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Connexion</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div style=\"width: 400px; margin: auto; border: 1px solid lightgrey; border-radius: 10px; padding: 0 10px 10px 10px;\">\n    <ion-item>\n      <ion-label position=\"floating\">identifiant</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"identifiant\" id=\"identifiant\" selected ></ion-input>\n    </ion-item>\n    <ion-button class=\"auto-select-button\" expand=\"block\">Envoyer le code à votre téléphone</ion-button>\n\n    <ion-item>\n      <ion-label position=\"floating\">Code reçu par SMS</ion-label>\n      <ion-input></ion-input>\n    </ion-item>\n\n    <ion-button class=\"auto-select-button\" expand=\"block\" (click)=\"validate()\">Valider</ion-button>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/authenticate/authenticate.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/authenticate/authenticate.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0ZS9hdXRoZW50aWNhdGUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/authenticate/authenticate.page.ts":
/*!***************************************************!*\
  !*** ./src/app/authenticate/authenticate.page.ts ***!
  \***************************************************/
/*! exports provided: AuthenticatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticatePage", function() { return AuthenticatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var AuthenticatePage = /** @class */ (function () {
    function AuthenticatePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AuthenticatePage.prototype.ngOnInit = function () {
    };
    AuthenticatePage.prototype.validate = function () {
        if (this.identifiant == 'medecin') {
            this.navCtrl.navigateRoot('/programme');
        }
        else if (this.identifiant == 'patient') {
            this.navCtrl.navigateRoot('/parcours');
        }
    };
    AuthenticatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-authenticate',
            template: __webpack_require__(/*! ./authenticate.page.html */ "./src/app/authenticate/authenticate.page.html"),
            styles: [__webpack_require__(/*! ./authenticate.page.scss */ "./src/app/authenticate/authenticate.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], AuthenticatePage);
    return AuthenticatePage;
}());



/***/ })

}]);
//# sourceMappingURL=authenticate-authenticate-module.js.map