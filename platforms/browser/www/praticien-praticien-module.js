(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["praticien-praticien-module"],{

/***/ "./src/app/praticien/praticien.module.ts":
/*!***********************************************!*\
  !*** ./src/app/praticien/praticien.module.ts ***!
  \***********************************************/
/*! exports provided: PraticienPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PraticienPageModule", function() { return PraticienPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _praticien_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./praticien.page */ "./src/app/praticien/praticien.page.ts");







var routes = [
    {
        path: '',
        component: _praticien_page__WEBPACK_IMPORTED_MODULE_6__["PraticienPage"]
    }
];
var PraticienPageModule = /** @class */ (function () {
    function PraticienPageModule() {
    }
    PraticienPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_praticien_page__WEBPACK_IMPORTED_MODULE_6__["PraticienPage"]]
        })
    ], PraticienPageModule);
    return PraticienPageModule;
}());



/***/ }),

/***/ "./src/app/praticien/praticien.page.html":
/*!***********************************************!*\
  !*** ./src/app/praticien/praticien.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <!-- <ion-toolbar>\r\n    <ion-title> -->\r\n      <!-- <img src=\"assets/img/header.png\" alt=\"header\" /> -->\r\n    <!-- </ion-title>\r\n  </ion-toolbar> -->\r\n<!-- \r\n  <div class=\"searchBar\">\r\n    <ion-searchbar placeholder=\"Recherche\" animated showCancelButton debounce=\"0\" (ionChange)=\"getItems($event)\">\r\n    </ion-searchbar>\r\n  </div>\r\n</ion-header> -->\r\n\r\n<ion-content>\r\n  <ion-row>\r\n    <ion-col size=\"3\">\r\n      <ion-item>\r\n        <ion-label>code postal : {{ npa }}</ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>Physiothérapeute</ion-label>\r\n      </ion-item>\r\n    </ion-col>\r\n    <ion-col size=\"7\" class=\"praticien-body\">\r\n      <!-- <div class=\"praticien-body\"> -->\r\n      <ion-content padding>\r\n        <div class=\"centeredTitle\">Composer mon parcours médical</div>\r\n        <div class=\"label\">Sélectionnez un praticien</div>\r\n        <div class=\"filtersBloc\">\r\n          <img src=\"https://img.icons8.com/material-outlined/24/000000/tags.png\">\r\n          Filtrer par :\r\n          <span class=\"filters\" *ngFor=\"let filter of filters\">{{ filter }}</span>\r\n        </div>\r\n        <table height=\"2000\">\r\n          <tr>\r\n            <td style=\"vertical-align: top;\">\r\n              <ion-card class=\"auto-select-card\" style=\"width: 90%;\">\r\n                <ion-card-header class=\"auto-select-card-header\">\r\n                  <ion-card-title>\r\n                    Physiothérapeute\r\n                    <span style=\"float: right;\">Praticien</span><br>\r\n                  </ion-card-title>\r\n                </ion-card-header>\r\n                <ion-card-content>\r\n                  <ion-button class=\"auto-select-button\" expand=\"block\">Sélectionnez-le pour moi automatiquement\r\n                  </ion-button>\r\n                </ion-card-content>\r\n              </ion-card>\r\n              <ion-card class=\"card\" style=\"width: 90%;\">\r\n                <ion-card-header class=\"card\">\r\n                  <ion-card-title>\r\n                    Mes critères\r\n                  </ion-card-title>\r\n                </ion-card-header>\r\n                <ion-card-content>\r\n                  <ul>\r\n                    <li style=\"font-size: x-large;\">\r\n                      Date souhaitée :\r\n                      <ion-datetime value=\"2019-03-23\" displayFormat=\"DD.MM.YYYY\"\r\n                        style=\"width: 124px; border: 1px solid lightgrey; border-radius: 10px; position: relative; top: -37px; left: 140px;\">\r\n                      </ion-datetime>\r\n                    </li>\r\n                    <li style=\"font-size: x-large;\">\r\n                      Spécialités\r\n                    </li>\r\n                    <div *ngFor=\"let critere of criteres\">\r\n                      <ion-checkbox slot=\"end\" style=\"padding-top: 7px; margin-left: 5px; margin-right: 15px;\">\r\n                      </ion-checkbox>\r\n                      <ion-label style=\"font-size: x-large;\">{{ critere }}</ion-label><br>\r\n                    </div>\r\n                    <li style=\"font-size: x-large;\">\r\n                      Langues\r\n                    </li>\r\n                    <ion-checkbox slot=\"end\" style=\"padding-top: 7px; margin-left: 5px; margin-right: 15px;\">\r\n                    </ion-checkbox>\r\n                    <ion-label style=\"font-size: x-large;\">Homme</ion-label><br>\r\n                    <ion-checkbox slot=\"end\" style=\"padding-top: 7px; margin-left: 5px; margin-right: 15px;\">\r\n                    </ion-checkbox>\r\n                    <ion-label style=\"font-size: x-large;\">Femme</ion-label><br>\r\n                    <li style=\"font-size: x-large;\">\r\n                      <ion-checkbox slot=\"end\" style=\"padding-top: 7px; margin-left: 5px; margin-right: 15px;\">\r\n                      </ion-checkbox>\r\n                      <ion-label style=\"font-size: x-large;\">Domicile</ion-label><br>\r\n                      <ion-checkbox slot=\"end\" style=\"padding-top: 7px; margin-left: 5px; margin-right: 15px;\">\r\n                      </ion-checkbox>\r\n                      <ion-label style=\"font-size: x-large;\">Cabinet</ion-label><br>\r\n                    </li>\r\n                  </ul>\r\n                </ion-card-content>\r\n              </ion-card>\r\n            </td>\r\n            <td style=\"vertical-align: top;\">\r\n              <a href=\"/deplacement\">\r\n                <ion-card class=\"card\" *ngFor=\"let praticien of resultArray\" style=\"width: 90%;\">\r\n                  <ion-card-header>\r\n                    <ion-card-title>\r\n                      {{ praticien.name }}\r\n                    </ion-card-title>\r\n                    <ion-card-subtitle>\r\n                      {{ praticien.title }}\r\n                    </ion-card-subtitle>\r\n                  </ion-card-header>\r\n\r\n                  <ion-card-content>\r\n                    <div style=\"display: inline-block; width: 150px; margin-right: 20px;\">\r\n                      <div *ngFor=\"let workingField of praticien.workingFields\">\r\n                        - {{ workingField }}\r\n                      </div>\r\n                    </div>\r\n                    <div style=\"display: inline-block; width: 220px;\">\r\n                      <div>\r\n                        <table>\r\n                          <tr *ngFor=\"let score of praticien.scores\">\r\n                            <td>\r\n                              {{ score[0] }}\r\n                            </td>\r\n                            <td>\r\n                              <ion-icon name=\"{{ score[1] }}\"></ion-icon>\r\n                              <ion-icon name=\"{{ score[2] }}\"></ion-icon>\r\n                              <ion-icon name=\"{{ score[3] }}\"></ion-icon>\r\n                            </td>\r\n                          </tr>\r\n                        </table>\r\n                      </div>\r\n                    </div>\r\n                  </ion-card-content>\r\n                  <!-- <ion-card-content>\r\n                    3\r\n                    <ion-icon name=\"chatbubbles\"></ion-icon>\r\n                  </ion-card-content> -->\r\n                </ion-card>\r\n              </a>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </ion-content>\r\n      <!-- </div> -->\r\n    </ion-col>\r\n    <ion-col size=\"2\" style=\"position: fixed; right: 400px; top: 166px;\">\r\n      <img src=\"assets/img/horaires2.png\" />\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/praticien/praticien.page.scss":
/*!***********************************************!*\
  !*** ./src/app/praticien/praticien.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".auto-select-button {\n  margin-top: 20px; }\n\n.auto-select-card {\n  width: 45%;\n  background-color: aquamarine;\n  display: inline-block; }\n\n.auto-select-card-header {\n  background-color: aquamarine; }\n\n.body {\n  vertical-align: top;\n  display: inline-block;\n  width: 100px;\n  height: 100px;\n  padding: 5px; }\n\n.card {\n  width: 45%;\n  display: inline-block; }\n\n.centeredTitle {\n  width: 100%;\n  text-align: center;\n  margin: auto;\n  font-weight: bold;\n  font-size: x-large; }\n\n.filters {\n  margin: 4px;\n  padding: 4px;\n  border-radius: 8px;\n  background-color: gray;\n  color: white; }\n\n.filtersBloc {\n  margin-bottom: 15px; }\n\n.label {\n  width: 100%;\n  text-align: center;\n  margin: 20px;\n  color: grey;\n  font-size: x-large; }\n\n.menu {\n  vertical-align: top;\n  display: inline-block;\n  width: 200px;\n  height: 1080px;\n  margin: 5px; }\n\n.praticien-body {\n  height: 100%;\n  margin-left: 200px;\n  vertical-align: top;\n  position: fixed; }\n\n.searchBar {\n  max-width: 700px;\n  margin: auto;\n  margin-bottom: 10px; }\n\n.side-menu {\n  border: 1px solid red;\n  width: 200px;\n  vertical-align: top;\n  position: fixed;\n  top: 150px;\n  left: 0; }\n\n.side-menu-button {\n  height: 30px;\n  margin: 3px;\n  font-size: x-large; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Qcm9qZWN0cy9IZWFsdGhhZHZpc29yL3NyYy9hcHAvcHJhdGljaWVuL3ByYXRpY2llbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxVQUFVO0VBQ1YsNEJBQTRCO0VBQzVCLHFCQUFxQixFQUFBOztBQUd6QjtFQUNJLDRCQUE0QixFQUFBOztBQUdoQztFQUNFLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZLEVBQUE7O0FBR2Q7RUFDSSxVQUFVO0VBQ1YscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0ksV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGNBQWM7RUFDZCxXQUFXLEVBQUE7O0FBR2I7RUFDSSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBR25CO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixtQkFBbUIsRUFBQTs7QUFJckI7RUFDSSxxQkFBcUI7RUFFckIsWUFBWTtFQUNaLG1CQUFrQjtFQUNsQixlQUFlO0VBQ2YsVUFBVTtFQUNWLE9BQU8sRUFBQTs7QUFHWDtFQUNJLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcmF0aWNpZW4vcHJhdGljaWVuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdXRvLXNlbGVjdC1idXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLmF1dG8tc2VsZWN0LWNhcmQge1xyXG4gICAgd2lkdGg6IDQ1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5hdXRvLXNlbGVjdC1jYXJkLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xyXG59XHJcblxyXG4uYm9keSB7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICB3aWR0aDogNDUlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uY2VudGVyZWRUaXRsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG59XHJcblxyXG4uZmlsdGVycyB7XHJcbiAgICBtYXJnaW46IDRweDtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5maWx0ZXJzQmxvYyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4ubGFiZWwge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDIwcHg7XHJcbiAgY29sb3I6IGdyZXk7XHJcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG59XHJcblxyXG4ubWVudSB7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogMTA4MHB4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG4ucHJhdGljaWVuLWJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246dG9wO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG59XHJcblxyXG4uc2VhcmNoQmFyIHtcclxuICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5cclxuLnNpZGUtbWVudSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgICAvLyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDE1MHB4O1xyXG4gICAgbGVmdDogMDtcclxufVxyXG5cclxuLnNpZGUtbWVudS1idXR0b24ge1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWFyZ2luOiAzcHg7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/praticien/praticien.page.ts":
/*!*********************************************!*\
  !*** ./src/app/praticien/praticien.page.ts ***!
  \*********************************************/
/*! exports provided: PraticienPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PraticienPage", function() { return PraticienPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storage */ "./src/app/storage.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var PraticienPage = /** @class */ (function () {
    function PraticienPage(storage, menu) {
        this.storage = storage;
        this.menu = menu;
        this.resultArray = [];
        this.previousPageSelected = [];
        this.criteres = this.storage.criteres;
        this.filters = ['Praticien', 'Profession', 'Spécialisation', 'Itinéraire clinique', 'Soin à domicile'];
    }
    PraticienPage.prototype.ngOnInit = function () {
        this.npa = localStorage.getItem('npa');
        this.previousPageSelected = this.storage.activities.filter(function (activity) {
            return activity[0] == decodeURI(window.location.search.split('selected=')[1]);
        })[0];
        this.getItems(null);
        console.log(this.criteres);
    };
    PraticienPage.prototype.getItems = function (event) {
        var _this = this;
        if (!event || event.detail.value == '') {
            this.storage.praticiens.forEach(function (praticien) {
                _this.resultArray.push(praticien);
            });
        }
        else {
            this.storage.praticiens.forEach(function (praticien) {
                if (praticien.name.toLowerCase().includes(event.detail.value.toLowerCase())
                    && !_this.resultArray.includes(praticien)) {
                    // si l'activité contient le texte entré ET le tableau ne le contient pas: l'ajouter au tableau
                    _this.resultArray.push(praticien);
                }
                else if (!praticien.name.toLowerCase().includes(event.detail.value.toLowerCase())
                    && _this.resultArray.includes(praticien)) {
                    // si l'activité ne contient pas le texte entré ET le tableau le contient déjà: le supprimer du tableau
                    var index = _this.resultArray.indexOf(praticien);
                    _this.resultArray.splice(index, 1);
                }
                console.log(_this.resultArray);
            });
        }
    };
    PraticienPage.prototype.openFirst = function () {
        this.menu.enable(true, 'first');
        this.menu.open('first');
    };
    PraticienPage.prototype.openEnd = function () {
        this.menu.open('end');
    };
    PraticienPage.prototype.openCustom = function () {
        this.menu.enable(true, 'custom');
        this.menu.open('custom');
    };
    PraticienPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-praticien',
            template: __webpack_require__(/*! ./praticien.page.html */ "./src/app/praticien/praticien.page.html"),
            styles: [__webpack_require__(/*! ./praticien.page.scss */ "./src/app/praticien/praticien.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]])
    ], PraticienPage);
    return PraticienPage;
}());



/***/ })

}]);
//# sourceMappingURL=praticien-praticien-module.js.map