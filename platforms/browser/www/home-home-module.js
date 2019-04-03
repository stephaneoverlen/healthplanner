(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Header de la page active (hors menu) -->\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <!-- <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons> -->\r\n    <ion-title>\r\n      <!-- Home -->\r\n      <ion-row>\r\n        <ion-col size=\"10\">\r\n          <img src=\"assets/img/logo.svg\" alt=\"header\" height=\"54px\" />\r\n        </ion-col>\r\n        <ion-col size=\"2\">\r\n          <ion-button (click)=\"authenticate()\">\r\n            Mon compte\r\n            <ion-icon slot=\"end\" name=\"log-in\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"searchBar\">\r\n    <ion-searchbar placeholder=\"Rechercher\" animated showCancelButton debounce=\"0\" (ionChange)=\"getItems($event)\">\r\n    </ion-searchbar>\r\n  </div>\r\n\r\n  <ion-list>\r\n    <ion-item *ngFor=\"let result of resultArray\" class=\"arrayResult\" (click)=\"testtest()\">\r\n      <img class=\"thumbnail\" src=\"assets/img/{{result[1].icon}}.png\">\r\n      <div class=\"puces\">\r\n        <ul>\r\n          <li class=\"firstTitle\">{{ result[1].firstTitle }}</li>\r\n          <li class=\"secondTitle\">{{ result[1].secondTitle }}</li>\r\n          <li class=\"activityName\">{{ result[0] }}</li>\r\n        </ul>\r\n      </div>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <ion-row>\r\n    <ion-col size=\"4\">\r\n      <ion-card class=\"card\">\r\n        <img src=\"assets/img/soins.jpg\" (click)=\"showHideButtons()\">\r\n        <ion-card-header class=\"hydrated\">\r\n          <ion-card-title role=\"heading\" aria-level=\"2\" class=\"hydrated\">Soins</ion-card-title>\r\n        </ion-card-header>\r\n        <ion-card-content class=\"card-content card-content-ios hydrated\">\r\n          Recherchez des professionnels pour vos soins à domicile ou\r\n          en cabinet.\r\n          <ion-list *ngIf=\"this.chooseTypeClicked === true\">\r\n            <ul>\r\n              <li>\r\n                <a href=\"/informations\">\r\n                  Infirmière\r\n                </a>\r\n              </li>\r\n              <li>\r\n                <a href=\"/informations\">\r\n                  Physiothérapeute\r\n                </a>\r\n              </li>\r\n              <li>Ergothérapeute</li>\r\n              <li>Pharmacie</li>\r\n              <li>Soin paliatifs et douleur</li>\r\n            </ul>\r\n          </ion-list>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-col>\r\n\r\n    <ion-col size=\"4\">\r\n      <ion-card class=\"card\">\r\n        <img src=\"assets/img/domicile.jpg\">\r\n        <ion-card-header class=\"hydrated\">\r\n          <ion-card-title role=\"heading\" aria-level=\"2\" class=\"hydrated\">Services à domicile</ion-card-title>\r\n        </ion-card-header>\r\n        <ion-card-content class=\"card-content card-content-ios hydrated\">\r\n          Recherchez des professionnels pour vos soins à domicile ou\r\n          en cabinet.\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-col>\r\n\r\n\r\n    <ion-col size=\"4\">\r\n      <ion-card class=\"card\">\r\n        <img src=\"assets/img/accompagnement.jpg\">\r\n        <ion-card-header class=\"hydrated\">\r\n          <ion-card-title role=\"heading\" aria-level=\"2\" class=\"hydrated\">Accueil accompagnement</ion-card-title>\r\n        </ion-card-header>\r\n        <ion-card-content class=\"card-content card-content-ios hydrated\">\r\n          Recherchez des professionnels pour vos soins à domicile ou\r\n          en cabinet.\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-col>\r\n\r\n\r\n    <ion-col size=\"4\">\r\n      <ion-card class=\"card\">\r\n        <img src=\"assets/img/examen.jpg\">\r\n        <ion-card-header class=\"hydrated\">\r\n          <ion-card-title role=\"heading\" aria-level=\"2\" class=\"hydrated\">Examens</ion-card-title>\r\n        </ion-card-header>\r\n        <ion-card-content class=\"card-content card-content-ios hydrated\">\r\n          Recherchez des professionnels pour vos soins à domicile ou\r\n          en cabinet.\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-col>\r\n\r\n\r\n    <ion-col size=\"4\">\r\n      <ion-card class=\"card\">\r\n        <img src=\"assets/img/transport.jpg\">\r\n        <ion-card-header class=\"hydrated\">\r\n          <ion-card-title role=\"heading\" aria-level=\"2\" class=\"hydrated\">Transports</ion-card-title>\r\n        </ion-card-header>\r\n        <ion-card-content class=\"card-content card-content-ios hydrated\">\r\n          Recherchez des professionnels pour vos soins à domicile ou\r\n          en cabinet.\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-col>\r\n\r\n    <ion-col size=\"4\">\r\n      <ion-card class=\"card\">\r\n        <img src=\"assets/img/enfant.jpg\">\r\n        <ion-card-header class=\"hydrated\">\r\n          <ion-card-title role=\"heading\" aria-level=\"2\" class=\"hydrated\">Enfants</ion-card-title>\r\n        </ion-card-header>\r\n        <ion-card-content class=\"card-content card-content-ios hydrated\">\r\n          Recherchez des professionnels pour vos soins à domicile ou\r\n          en cabinet.\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-col>\r\n\r\n\r\n  </ion-row>\r\n\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".activityName {\n  font-weight: bold;\n  margin-left: 18px;\n  text-decoration: none;\n  color: black; }\n\n.arrayResult {\n  margin-top: 4px; }\n\n.firstTitle {\n  text-decoration: none;\n  color: white; }\n\n.puces {\n  position: absolute;\n  top: 0px;\n  display: inline-block;\n  background-color: cadetblue;\n  margin-top: 4px;\n  width: 300px;\n  height: 100px;\n  border-radius: 0 5px 5px 0; }\n\n.searchingResults {\n  margin: 2%; }\n\n.searchBar {\n  max-width: 500px;\n  margin: auto; }\n\n.secondTitle {\n  text-decoration: none;\n  color: white;\n  margin-left: 9px; }\n\n.thumbnail {\n  display: inline-block;\n  width: 100px;\n  height: 100px;\n  border-radius: 5px 0 0 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Qcm9qZWN0cy9IZWFsdGhhZHZpc29yL3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLFlBQVksRUFBQTs7QUFHZDtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxxQkFBcUI7RUFDckIsWUFBWSxFQUFBOztBQVNkO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixxQkFBcUI7RUFDckIsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixZQUFZO0VBQ1osYUFBYTtFQUNiLDBCQUEwQixFQUFBOztBQUc1QjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLGdCQUFnQjtFQUNoQixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osYUFBYTtFQUNiLDBCQUEwQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3Rpdml0eU5hbWUge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbi1sZWZ0OiAxOHB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5hcnJheVJlc3VsdCB7XHJcbiAgbWFyZ2luLXRvcDogNHB4O1xyXG59XHJcblxyXG4uZmlyc3RUaXRsZSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI2hvbWUtc2VhcmNoIHtcclxuICAvLyBtYXJnaW46IGF1dG87XHJcbiAgLy8gbWFyZ2luLXRvcDogMjAlO1xyXG4gIC8vIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5wdWNlcyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XHJcbiAgbWFyZ2luLXRvcDogNHB4O1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwO1xyXG59XHJcblxyXG4uc2VhcmNoaW5nUmVzdWx0cyB7XHJcbiAgbWFyZ2luOiAyJTtcclxufVxyXG5cclxuLnNlYXJjaEJhciB7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5zZWNvbmRUaXRsZSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tbGVmdDogOXB4O1xyXG59XHJcblxyXG4udGh1bWJuYWlsIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCA1cHg7XHJcbn1cclxuXHJcbi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XHJcbiAgLy8gbWF4LWhlaWdodDogMzV2aDtcclxuICAvLyBvdmVyZmxvdzogaGlkZGVuO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storage */ "./src/app/storage.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var HomePage = /** @class */ (function () {
    function HomePage(storage, navCtrl) {
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.searchKey = '';
        this.resultArray = [];
    }
    HomePage.prototype.ngOnInit = function () {
    };
    HomePage.prototype.showHideButtons = function () {
        this.chooseTypeClicked = !this.chooseTypeClicked;
    };
    HomePage.prototype.getItems = function (event) {
        var _this = this;
        if (event.detail.value == '') {
            this.resultArray = [];
        }
        else {
            this.storage.activities.forEach(function (activity) {
                if (activity[0].toString().toLowerCase().includes(event.detail.value.toLowerCase())
                    && !_this.resultArray.includes(activity)) {
                    // si l'activité contient le texte entré ET le tableau ne le contient pas: l'ajouter au tableau
                    _this.resultArray.push(activity);
                }
                else if (!activity[0].toString().toLowerCase().includes(event.detail.value.toLowerCase())
                    && _this.resultArray.includes(activity)) {
                    // si l'activité ne contient pas le texte entré ET le tableau le contient déjà: le supprimer du tableau
                    var index = _this.resultArray.indexOf(activity);
                    _this.resultArray.splice(index, 1);
                }
            });
        }
    };
    HomePage.prototype.authenticate = function () {
        this.navCtrl.navigateRoot('/authenticate');
    };
    HomePage.prototype.testtest = function () {
        this.navCtrl.navigateRoot('/informations');
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map