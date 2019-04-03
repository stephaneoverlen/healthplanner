(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/dashboard/dashboard.page.ts");







var routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]
    }
];
var DashboardPageModule = /** @class */ (function () {
    function DashboardPageModule() {
    }
    DashboardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]]
        })
    ], DashboardPageModule);
    return DashboardPageModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.page.html":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>dashboard</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-label style=\"font-size: xx-large;\">Itinéraire clinique PTG pour patient âgé</ion-label>\n  <ion-button (click)=\"save()\" style=\"margin-left: 300px;\">Sauvegarder</ion-button>\n  <ion-button (click)=\"sendSMS()\">Envoyer par SMS</ion-button>\n  <ion-button (click)=\"sendMail()\">Envoyer par mail</ion-button>\n  <br>\n  <ion-card style=\"width: 45%; height: 250px; display: inline-block;\">\n    <ion-card-header color=\"warning\">\n      <ion-card-title>Information Patient</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content style=\"margin-top: 10px;\">\n      <table>\n        <tr>\n          <td>\n            <ion-icon name=\"contact\"></ion-icon>\n            John Doe\n          </td>\n          <td>\n            <span\n              style=\"margin-left: 100px; margin-right: 15px; position: relative; top: -13px; display: inline-block;\">Date\n              de sortie</span>\n            <ion-datetime displayFormat=\"MM/DD/YYYY\" value=\"2002-09-23T15:03:46.789\"\n              style=\"position: relative; top: 3px; display: inline-block; width: 150px; border: 1px solid lightgrey; border-radius: 5px;\">\n            </ion-datetime>\n            <ion-icon name=\"calendar\" style=\"font-size: 30px; position: relative; bottom: 7px; right: 45px;\">\n            </ion-icon>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <ion-icon name=\"phone-portrait\"></ion-icon>\n            +41 76 123 4562\n          </td>\n          <td></td>\n        </tr>\n        <tr>\n          <td>\n            <ion-icon name=\"mail\" style=\"margin-top: 15px;\"></ion-icon>\n            john.doe@gmail.com\n          </td>\n          <td></td>\n        </tr>\n      </table>\n    </ion-card-content>\n  </ion-card>\n  <ion-card style=\"width: 45%; height: 250px; display: inline-block;\">\n    <ion-card-header color=\"danger\">\n      <ion-card-title>Commentaire</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content style=\"margin-top: 15px;\">\n      <textarea placeholder=\"Entrez votre commentaire\" rows=\"7\" cols=\"70\"></textarea>\n    </ion-card-content>\n  </ion-card>\n  <ion-item style=\"font-weight: bold;\">Composition du programme</ion-item>\n  <ion-card style=\"display: inline-block; width: 220px; height: 200px;\">\n    <ion-card-header color=\"success\">\n      <ion-card-title>Physiothérapie</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      <table>\n        <tr>\n          <td>\n            <ion-list>\n              <ion-list-header>Nombre de séances</ion-list-header>\n              <ion-item>\n                <ion-select value=\"brown\" okText=\"Okay\" cancelText=\"Dismiss\">\n                  <ion-select-option value=\"brown\">6</ion-select-option>\n                  <ion-select-option value=\"brown\">1</ion-select-option>\n                  <ion-select-option value=\"blonde\">2</ion-select-option>\n                  <ion-select-option value=\"black\">3</ion-select-option>\n                  <ion-select-option value=\"red\">4</ion-select-option>\n                  <ion-select-option value=\"brown\">5</ion-select-option>\n                  <ion-select-option value=\"blonde\">6</ion-select-option>\n                  <ion-select-option value=\"black\">7</ion-select-option>\n                  <ion-select-option value=\"red\">8</ion-select-option>\n                </ion-select>\n              </ion-item>\n            </ion-list>\n          </td>\n          <td>\n            <ion-list>\n              <ion-list-header>Fréquence par semaine</ion-list-header>\n              <ion-item>\n                <ion-select value=\"brown\" okText=\"Okay\" cancelText=\"Dismiss\">\n                  <ion-select-option value=\"brown\">1</ion-select-option>\n                  <ion-select-option value=\"blonde\">2</ion-select-option>\n                  <ion-select-option value=\"black\">3</ion-select-option>\n                  <ion-select-option value=\"red\">4</ion-select-option>\n                  <ion-select-option value=\"brown\">5</ion-select-option>\n                  <ion-select-option value=\"blonde\">6</ion-select-option>\n                  <ion-select-option value=\"black\">7</ion-select-option>\n                  <ion-select-option value=\"red\">8</ion-select-option>\n                </ion-select>\n              </ion-item>\n            </ion-list>\n          </td>\n        </tr>\n      </table>\n    </ion-card-content>\n  </ion-card>\n  <ion-card style=\"display: inline-block; width: 220px; height: 200px;\">\n    <ion-card-header color=\"success\">\n      <ion-card-title>Ergothérapie</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      <table>\n        <tr>\n          <td>\n            <ion-list>\n              <ion-list-header>Nombre de séances</ion-list-header>\n              <ion-item>\n                <ion-select value=\"brown\" okText=\"Okay\" cancelText=\"Dismiss\">\n                  <ion-select-option value=\"brown\">8</ion-select-option>\n                  <ion-select-option value=\"blonde\">2</ion-select-option>\n                  <ion-select-option value=\"black\">3</ion-select-option>\n                  <ion-select-option value=\"red\">4</ion-select-option>\n                  <ion-select-option value=\"brown\">5</ion-select-option>\n                  <ion-select-option value=\"blonde\">6</ion-select-option>\n                  <ion-select-option value=\"black\">7</ion-select-option>\n                  <ion-select-option value=\"red\">8</ion-select-option>\n                </ion-select>\n              </ion-item>\n            </ion-list>\n          </td>\n          <td>\n            <ion-list>\n              <ion-list-header>Fréquence par semaine</ion-list-header>\n              <ion-item>\n                <ion-select value=\"brown\" okText=\"Okay\" cancelText=\"Dismiss\">\n                  <ion-select-option value=\"brown\">3</ion-select-option>\n                  <ion-select-option value=\"brown\">1</ion-select-option>\n                  <ion-select-option value=\"blonde\">2</ion-select-option>\n                  <ion-select-option value=\"black\">3</ion-select-option>\n                  <ion-select-option value=\"red\">4</ion-select-option>\n                  <ion-select-option value=\"brown\">5</ion-select-option>\n                  <ion-select-option value=\"blonde\">6</ion-select-option>\n                  <ion-select-option value=\"black\">7</ion-select-option>\n                  <ion-select-option value=\"red\">8</ion-select-option>\n                </ion-select>\n              </ion-item>\n            </ion-list>\n          </td>\n        </tr>\n      </table>\n    </ion-card-content>\n  </ion-card>\n  <!-- primary\", \"secondary\", \"tertiary\", \"success\", \"warning\", \"danger\", \"light\", \"medium\", and \"dark -->\n  <ion-card style=\"display: inline-block; width: 220px; height: 200px;\">\n    <ion-card-header color=\"success\">\n      <ion-card-title>Soin infirmier</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      <table>\n        <tr>\n          <td>\n            <ion-list>\n              <ion-list-header>Nombre de séances</ion-list-header>\n              <ion-item>\n                <ion-select value=\"brown\" okText=\"Okay\" cancelText=\"Dismiss\">\n                  <ion-select-option value=\"brown\">4</ion-select-option>\n                  <ion-select-option value=\"brown\">1</ion-select-option>\n                  <ion-select-option value=\"blonde\">2</ion-select-option>\n                  <ion-select-option value=\"black\">3</ion-select-option>\n                  <ion-select-option value=\"red\">4</ion-select-option>\n                  <ion-select-option value=\"brown\">5</ion-select-option>\n                  <ion-select-option value=\"blonde\">6</ion-select-option>\n                  <ion-select-option value=\"black\">7</ion-select-option>\n                  <ion-select-option value=\"red\">8</ion-select-option>\n                </ion-select>\n              </ion-item>\n            </ion-list>\n          </td>\n          <td>\n            <ion-list>\n              <ion-list-header>Fréquence par semaine</ion-list-header>\n              <ion-item>\n                <ion-select value=\"brown\" okText=\"Okay\" cancelText=\"Dismiss\">\n                  <ion-select-option value=\"brown\">1</ion-select-option>\n                  <ion-select-option value=\"blonde\">2</ion-select-option>\n                  <ion-select-option value=\"black\">3</ion-select-option>\n                  <ion-select-option value=\"red\">4</ion-select-option>\n                  <ion-select-option value=\"brown\">5</ion-select-option>\n                  <ion-select-option value=\"blonde\">6</ion-select-option>\n                  <ion-select-option value=\"black\">7</ion-select-option>\n                  <ion-select-option value=\"red\">8</ion-select-option>\n                </ion-select>\n              </ion-item>\n            </ion-list>\n          </td>\n        </tr>\n      </table>\n    </ion-card-content>\n  </ion-card>\n  <ion-card style=\"display: inline-block; width: 220px; height: 200px;\">\n    <ion-card-header color=\"success\">\n      <ion-card-title>Aide au ménage</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      <table>\n        <tr>\n          <td>\n            <ion-list>\n              <ion-list-header>Nombre de séances</ion-list-header>\n              <ion-item>\n                <ion-select value=\"brown\" okText=\"Okay\" cancelText=\"Dismiss\">\n                  <ion-select-option value=\"brown\">2</ion-select-option>\n                  <ion-select-option value=\"blonde\">2</ion-select-option>\n                  <ion-select-option value=\"black\">3</ion-select-option>\n                  <ion-select-option value=\"red\">4</ion-select-option>\n                  <ion-select-option value=\"brown\">5</ion-select-option>\n                  <ion-select-option value=\"blonde\">6</ion-select-option>\n                  <ion-select-option value=\"black\">7</ion-select-option>\n                  <ion-select-option value=\"red\">8</ion-select-option>\n                </ion-select>\n              </ion-item>\n            </ion-list>\n          </td>\n          <td>\n            <ion-list>\n              <ion-list-header>Fréquence par semaine</ion-list-header>\n              <ion-item>\n                <ion-select value=\"brown\" okText=\"Okay\" cancelText=\"Dismiss\">\n                  <ion-select-option value=\"brown\">1</ion-select-option>\n                  <ion-select-option value=\"blonde\">2</ion-select-option>\n                  <ion-select-option value=\"black\">3</ion-select-option>\n                  <ion-select-option value=\"red\">4</ion-select-option>\n                  <ion-select-option value=\"brown\">5</ion-select-option>\n                  <ion-select-option value=\"blonde\">6</ion-select-option>\n                  <ion-select-option value=\"black\">7</ion-select-option>\n                  <ion-select-option value=\"red\">8</ion-select-option>\n                </ion-select>\n              </ion-item>\n            </ion-list>\n          </td>\n        </tr>\n      </table>\n    </ion-card-content>\n  </ion-card>\n  <ion-card style=\"display: inline-block; width: 220px; height: 200px;\">\n    <ion-card-header>\n      <ion-card-title>Ajouter</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-icon name=\"add-circle-outline\" style=\"font-size: 30px;\"></ion-icon>\n    </ion-card-content>\n  </ion-card>\n  <ion-item style=\"font-weight: bold;\">Documentations</ion-item>\n  <img src=\"assets/img/documentations.png\" />\n</ion-content>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.page.scss":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.page.ts":
/*!*********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.ts ***!
  \*********************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardPage = /** @class */ (function () {
    function DashboardPage() {
    }
    DashboardPage.prototype.ngOnInit = function () {
    };
    DashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.page.html */ "./src/app/dashboard/dashboard.page.html"),
            styles: [__webpack_require__(/*! ./dashboard.page.scss */ "./src/app/dashboard/dashboard.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardPage);
    return DashboardPage;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map