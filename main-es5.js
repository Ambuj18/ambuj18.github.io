(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar using angular material -->\n<!-- Toolbar -->\n<div class=\"mb-3 pb-5\">\n<mat-toolbar color=\"primary\" class=\"app-header \">\n  <div [hidden]=\"!inside\"><a routerLink=\"home\" routerLinkActive=\"active\" class=\"positronx\">Home </a></div>\n<span flex></span>\n  <span class=\"nav-tool-items\">\n    <a mat-button routerLink=\"login\" routerLinkActive=\"active\" [hidden]=\"inside\" id=\"Log\">Log in</a>\n    <a mat-button  routerLink=\"register\" routerLinkActive=\"active\" [hidden]=\"inside\" id=\"reg\" >Register</a>\n  </span>\n</mat-toolbar>\n\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h6 class=\"modal-title\" id=\"exampleModalLabel\">Notification </h6>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body mt-5 pt-5\" id = \"msg\" style=\"text-align:center\">\n      <p class=\"pt-3 mt-3\">  {{message}} </p>\n<div>    <button type=\"button\" class=\"btn btn-secondary float-right\" id=\"call\" data-dismiss=\"modal\" (click)=\"route()\">OK</button></div>\n      </div>\n      <!-- <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"route()\">OK</button>\n         <button type=\"button\" class=\"btn btn-primary\">ok</button>\n      </div> -->\n\n    </div>\n  </div>\n</div>\n<button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModal\" id=\"btn\" [hidden]='true'>\n  Launch demo modal\n</button>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dashboard/dashboard.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dashboard/dashboard.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper bg-secondary\">\n    <div class=\"centerthis\">\n            <div class=\"card shadow-lg bg-light rounded\" style=\"width: auto;\">\n                    <div class=\"card-body\">\n                      <h5 class=\"card-title\">Aptitiude</h5>\n\n                      <h6 style=\"color:#2e2b2b69; font-size: larger\" >Score: 00</h6>\n                      <br>\n                      <!-- <a  class=\"btn btn-primary\" (click)=\"starttest(1)\">Start Test </a> -->\n                       <button type=\"button\" class=\"btn btn-primary\" (click)=\"starttest(1)\">Start Test</button>\n                    </div>\n                  </div>\n            <div class=\"card shadow-lg bg-light rounded\" style=\"width: auto\">\n                    <div class=\"card-body\">\n                      <h5 class=\"card-title\">English</h5>\n                      <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                      <a href=\"#\" class=\"btn btn-primary\">Start Test </a>\n                    </div>\n                  </div>\n            <div class=\"card shadow-lg bg-light rounded\" style=\"width: auto;\">\n                    <div class=\"card-body\">\n                      <h5 class=\"card-title\">Reasoning</h5>\n                      <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                      <a href=\"#\" class=\"btn btn-primary\">Start Test </a>\n                    </div>\n                  </div>\n            <div class=\"card shadow-lg bg-light rounded\" style=\"width: atuo;\">\n                    <div class=\"card-body\">\n                      <h5 class=\"card-title\">Programming</h5>\n                      <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                      <a href=\"#\" class=\"btn btn-primary\">Start Test </a>\n                    </div>\n                  </div>\n    </div>\n\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/home.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>home works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/log-in/log-in.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/log-in/log-in.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-wrapper\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n\n    <mat-card class=\"box\">\n      <mat-card-header>\n        <mat-card-title>Log in</mat-card-title>\n      </mat-card-header>\n\n      <form class=\"example-form\">\n        <mat-card-content>\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Username\" [(ngModel)] = \"username\"  [ngModelOptions]=\"{standalone: true}\">\n          </mat-form-field>\n\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Password\" [(ngModel)] = \"password\" type=\"password\"  [ngModelOptions]=\"{standalone: true}\">\n          </mat-form-field>\n        </mat-card-content>\n        <button mat-stroked-button color=\"accent\" class=\"btn-block\" (click)=\"fuck()\">Log in</button>\n      </form>\n    </mat-card>\n    \n  </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/register/register.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/register/register.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-wrapper\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <mat-card class=\"box\">\n      <mat-card-header>\n        <mat-card-title>Register</mat-card-title>\n      </mat-card-header>\n\n      <form class=\"example-form\">\n\n        <mat-card-content>\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Username\" [(ngModel)] = \"username\"  [ngModelOptions]=\"{standalone: true}\">\n          </mat-form-field>\n\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Email\"  [ngModelOptions]=\"{standalone: true}\" [(ngModel)] = \"Email\">\n          </mat-form-field>\n\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Password\" type=\"password\"  [ngModelOptions]=\"{standalone: true}\" [(ngModel)] = \"password\">\n          </mat-form-field>\n\n          <!-- <mat-form-field class=\"example-full-width\">\n            <mat-label>Choose a role...</mat-label>\n            <mat-select [(value)]=\"selected\">\n              <mat-option [value]=\"roles\" *ngFor=\"let roles of Roles\">{{roles}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field> -->\n\n        </mat-card-content>\n\n        <button mat-stroked-button color=\"accent\" class=\"btn-block\" (click)=\"fuck()\">Register</button>\n\n      </form>\n    </mat-card>\n  </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/test-apti/test-apti.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/test-apti/test-apti.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"bg-secondary p-5 \">\n<div class=\"card m-5 \">\n  <div class=\"card-header \">Aptitute Test  <span class= \"text-danger float-right\">Timer :- 2:15</span>\n\n    <span class=\"pr-5 float-right\"><span class=\"text-info\"> Max Marks</span> : 100</span>\n  </div>\n  <div class=\"card-body\">\n    <h6 class=\"card-title mb-5\">Questions:-</h6>\n\n    <div class=\"mb-5\">\n  <p class=\"card-text \"> 1) Two pipes A and B can fill a tank in 15 minutes and 20 minutes respectively. Both the pipes are opened together but after 4 minutes, pipe A is turned off. What is the total time required to fill the tank?</p>\n\n<div class=\"pl-4 \">\n  <div class=\"form-check\">\n    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\" checked>\n    <label class=\"form-check-label\" for=\"exampleRadios1\">\n      A.\n    10 min. 20 sec\n    </label>\n  </div>\n  <div class=\"form-check\">\n    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios2\" value=\"option2\">\n    <label class=\"form-check-label\" for=\"exampleRadios2\">\n      B.\n11 min. 45 sec\n    </label>\n  </div>\n  <div class=\"form-check\">\n    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios3\" value=\"option3\">\n    <label class=\"form-check-label\" for=\"exampleRadios2\">\n      C.\n  12 min. 30 sec\n    </label>\n  </div>\n  <div class=\"form-check\">\n    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios3\" value=\"option3\">\n    <label class=\"form-check-label\" for=\"exampleRadios2\">\n      D.\n14 min. 40 sec\n    </label>\n  </div>\n</div>\n\n</div>\n<div class=\"mb-5\">\n\n<p class=\"card-text ml-2\">\n\n2) ..3, 7, 6, 5, 9, 3, 12, 1, 15, (....)</p>\n<div class=\"alert alert-info w-25 ml-3 pt-0\" style=\"height:25px!important;text-align:center\" role=\"alert\">\nInsert the missing number.\n</div>\n\n<div class=\"pl-4 \">\n<div class=\"form-check\">\n  <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\" checked>\n  <label class=\"form-check-label\" for=\"exampleRadios1\">\n    A.\n  18\n\n  </label>\n</div>\n<div class=\"form-check\">\n  <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios2\" value=\"option2\">\n  <label class=\"form-check-label\" for=\"exampleRadios2\">\n    B.\n13\n\n  </label>\n</div>\n<div class=\"form-check\">\n  <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios3\" value=\"option3\">\n  <label class=\"form-check-label\" for=\"exampleRadios2\">\n    C.\n-1\n\n  </label>\n</div>\n<div class=\"form-check\">\n  <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios3\" value=\"option3\">\n  <label class=\"form-check-label\" for=\"exampleRadios2\">\n    D.\n  3\n\n  </label>\n</div>\n</div>\n</div>\n\n<div class=\"mb-5\">\n<p class=\"card-text \"> 3)\nA box contains 2 white balls, 3 black balls and 4 red balls. In how many ways can 3 balls be drawn from the box, if at least one black ball is to be included in the draw?</p>\n\n<div class=\"pl-4 \">\n<div class=\"form-check\">\n<input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\" checked>\n<label class=\"form-check-label\" for=\"exampleRadios1\">\n  A.\n  32\n\n</label>\n</div>\n<div class=\"form-check\">\n<input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios2\" value=\"option2\">\n<label class=\"form-check-label\" for=\"exampleRadios2\">\n  B.\n48\n\n</label>\n</div>\n<div class=\"form-check\">\n<input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios3\" value=\"option3\">\n<label class=\"form-check-label\" for=\"exampleRadios2\">\n  C.\n64\n</label>\n</div>\n<div class=\"form-check\">\n<input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios3\" value=\"option3\">\n<label class=\"form-check-label\" for=\"exampleRadios2\">\n  D.\n  96\n\n</label>\n</div>\n</div>\n\n</div>\n\n<div class=\"mb-5\">\n<p class=\"card-text \"> 4)\nA 6% stock yields 8%. The market value of the stock is:</p>\n\n<div class=\"pl-4 \">\n<div class=\"form-check\">\n<input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\" checked>\n<label class=\"form-check-label\" for=\"exampleRadios1\">\n  A.\nRs. 48\n\n\n</label>\n</div>\n<div class=\"form-check\">\n<input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios2\" value=\"option2\">\n<label class=\"form-check-label\" for=\"exampleRadios2\">\n  C.\n  Rs. 96\n\n\n\n</label>\n</div>\n<div class=\"form-check\">\n<input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios3\" value=\"option3\">\n<label class=\"form-check-label\" for=\"exampleRadios2\">\n  C.\n64\n</label>\n</div>\n<div class=\"form-check\">\n<input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios3\" value=\"option3\">\n<label class=\"form-check-label\" for=\"exampleRadios2\">\n  D.\n  Rs. 133.33\n\n</label>\n</div>\n</div>\n\n</div>\n\n<div class=\"mb-5\">\n<p class=\"card-text \"> 5)\nA and B together can do a piece of work in 30 days. A having worked for 16 days, B finishes the remaining work alone in 44 days. In how many days shall B finish the whole work alone?</p>\n\n<div class=\"pl-4 \">\n<div class=\"form-check\">\n<input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\" checked>\n<label class=\"form-check-label\" for=\"exampleRadios1\">\n  A.\n30 days\n\n\n\n</label>\n</div>\n<div class=\"form-check\">\n<input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios2\" value=\"option2\">\n<label class=\"form-check-label\" for=\"exampleRadios2\">\n  B.\n  40 days\n\n\n\n</label>\n</div>\n<div class=\"form-check\">\n<input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios3\" value=\"option3\">\n<label class=\"form-check-label\" for=\"exampleRadios2\">\n  C.\n60 days\n\n</label>\n</div>\n<div class=\"form-check\">\n<input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios3\" value=\"option3\">\n<label class=\"form-check-label\" for=\"exampleRadios2\">\n  D.\n  70 days\n\n\n</label>\n</div>\n</div>\n\n</div>\n\n\n\n\n\n<a href=\"#\" class=\"btn btn-primary float-right\">Submit</a>\n\n  </div>\n</div>\n<div>\n"

/***/ }),

/***/ "./src/app/angular-material-module.ts":
/*!********************************************!*\
  !*** ./src/app/angular-material-module.ts ***!
  \********************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var AngularMaterialModule = /** @class */ (function () {
    function AngularMaterialModule() {
    }
    AngularMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"]
            ],
            providers: [
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
            ]
        })
    ], AngularMaterialModule);
    return AngularMaterialModule;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/log-in/log-in.component */ "./src/app/components/log-in/log-in.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_test_apti_test_apti_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/test-apti/test-apti.component */ "./src/app/components/test-apti/test-apti.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");








var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'register' },
    { path: 'login', component: _components_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_3__["LogInComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'dashboard/testapti', component: _components_test_apti_test_apti_component__WEBPACK_IMPORTED_MODULE_6__["TestAptiComponent"] },
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body {\r\n    height: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    background-image: url(https://lh4.googleusercontent.com/-XplyTa1Za-I/VMSgIyAYkHI/AAAAAAAADxM/oL-rD6VP4ts/w1184-h666/Android-Lollipop-wallpapers-Google-Now-Wallpaper-2.png);\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    min-height: 100vh;\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.app-header {\r\n    justify-content: space-between;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 2;\r\n    box-shadow: 0 3px 5px -1px rgba(0, 0, 0, .2), 0 6px 10px 0 rgba(0, 0, 0, .14), 0 1px 18px 0 rgba(0, 0, 0, .12);\r\n}\r\n\r\n.login-wrapper {\r\n    height: 100%;\r\n}\r\n\r\n.positronx {\r\n    text-decoration: none;\r\n    color: #ffffff;\r\n}\r\n\r\n.box {\r\n    position: relative;\r\n    top: 0;\r\n    opacity: 1;\r\n    float: left;\r\n    padding: 60px 50px 40px 50px;\r\n    width: 100%;\r\n    background: #fff;\r\n    border-radius: 10px;\r\n    transform: scale(1);\r\n    -webkit-transform: scale(1);\r\n    -ms-transform: scale(1);\r\n    z-index: 5;\r\n    max-width: 330px;\r\n}\r\n\r\n.box.back {\r\n    transform: scale(.95);\r\n    -webkit-transform: scale(.95);\r\n    -ms-transform: scale(.95);\r\n    top: -20px;\r\n    opacity: .8;\r\n    z-index: -1;\r\n}\r\n\r\n.box:before {\r\n    content: \"\";\r\n    width: 100%;\r\n    height: 30px;\r\n    border-radius: 10px;\r\n    position: absolute;\r\n    top: -10px;\r\n    background: rgba(255, 255, 255, .6);\r\n    left: 0;\r\n    transform: scale(.95);\r\n    -webkit-transform: scale(.95);\r\n    -ms-transform: scale(.95);\r\n    z-index: -1;\r\n}\r\n\r\n.login-wrapper .example-form {\r\n    min-width: 100%;\r\n    max-width: 300px;\r\n    width: 100%;\r\n}\r\n\r\n.login-wrapper .example-full-width, .login-wrapper .btn-block {\r\n    width: 100%;\r\n}\r\n\r\n.login-wrapper mat-card-header {\r\n    text-align: center;\r\n    width: 100%;\r\n    display: block;\r\n    font-weight: 700;\r\n}\r\n\r\n.login-wrapper mat-card-header mat-card-title {\r\n    font-size: 30px;\r\n    margin: 0;\r\n}\r\n\r\n.login-wrapper .mat-card {\r\n    padding: 40px 70px 50px;\r\n}\r\n\r\n.login-wrapper .mat-stroked-button {\r\n    border: 1px solid currentColor;\r\n    line-height: 54px;\r\n    background: #FFF7FA;\r\n}\r\n\r\n.login-wrapper .mat-form-field-appearance-legacy .mat-form-field-infix {\r\n    padding: 0.8375em 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLDJLQUEySztJQUMzSywyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixpQkFBaUI7SUFDakIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixVQUFVO0lBQ1YsOEdBQThHO0FBQ2xIOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixVQUFVO0lBQ1YsV0FBVztJQUNYLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDZCQUE2QjtJQUM3Qix5QkFBeUI7SUFDekIsVUFBVTtJQUNWLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixtQ0FBbUM7SUFDbkMsT0FBTztJQUNQLHFCQUFxQjtJQUNyQiw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLCBib2R5IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vbGg0Lmdvb2dsZXVzZXJjb250ZW50LmNvbS8tWHBseVRhMVphLUkvVk1TZ0l5QVlrSEkvQUFBQUFBQUFEeE0vb0wtckQ2VlA0dHMvdzExODQtaDY2Ni9BbmRyb2lkLUxvbGxpcG9wLXdhbGxwYXBlcnMtR29vZ2xlLU5vdy1XYWxscGFwZXItMi5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmFwcC1oZWFkZXIge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLCAwLCAwLCAuMTIpO1xyXG59XHJcblxyXG4ubG9naW4td3JhcHBlciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5wb3NpdHJvbngge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5ib3gge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZzogNjBweCA1MHB4IDQwcHggNTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB6LWluZGV4OiA1O1xyXG4gICAgbWF4LXdpZHRoOiAzMzBweDtcclxufVxyXG5cclxuLmJveC5iYWNrIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoLjk1KTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSguOTUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoLjk1KTtcclxuICAgIHRvcDogLTIwcHg7XHJcbiAgICBvcGFjaXR5OiAuODtcclxuICAgIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG4uYm94OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtMTBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjYpO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoLjk1KTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSguOTUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoLjk1KTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG4ubG9naW4td3JhcHBlciAuZXhhbXBsZS1mb3JtIHtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmxvZ2luLXdyYXBwZXIgLmV4YW1wbGUtZnVsbC13aWR0aCwgLmxvZ2luLXdyYXBwZXIgLmJ0bi1ibG9jayB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmxvZ2luLXdyYXBwZXIgbWF0LWNhcmQtaGVhZGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4ubG9naW4td3JhcHBlciBtYXQtY2FyZC1oZWFkZXIgbWF0LWNhcmQtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ubG9naW4td3JhcHBlciAubWF0LWNhcmQge1xyXG4gICAgcGFkZGluZzogNDBweCA3MHB4IDUwcHg7XHJcbn1cclxuXHJcbi5sb2dpbi13cmFwcGVyIC5tYXQtc3Ryb2tlZC1idXR0b24ge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgY3VycmVudENvbG9yO1xyXG4gICAgbGluZS1oZWlnaHQ6IDU0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGN0ZBO1xyXG59XHJcblxyXG4ubG9naW4td3JhcHBlciAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcclxuICAgIHBhZGRpbmc6IDAuODM3NWVtIDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _policy_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./policy.service */ "./src/app/policy.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(policyService, router) {
        this.policyService = policyService;
        this.router = router;
        this.inside = false;
        this.message = '';
        this.url = '/login';
        this.title = 'minimus';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.policyService.getPolicies().subscribe(function (data) {
            console.log(data);
        });
    };
    AppComponent.prototype.route = function () {
        this.router.navigateByUrl(this.url);
    };
    AppComponent.ctorParameters = function () { return [
        { type: _policy_service__WEBPACK_IMPORTED_MODULE_2__["PolicyService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_policy_service__WEBPACK_IMPORTED_MODULE_2__["PolicyService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/log-in/log-in.component */ "./src/app/components/log-in/log-in.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./angular-material-module */ "./src/app/angular-material-module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_test_apti_test_apti_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/test-apti/test-apti.component */ "./src/app/components/test-apti/test-apti.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");











// importing this to include material design in angular form






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_5__["LogInComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _components_test_apti_test_apti_component__WEBPACK_IMPORTED_MODULE_15__["TestAptiComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__["DashboardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_material_module__WEBPACK_IMPORTED_MODULE_11__["AngularMaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_9__["InMemoryWebApiModule"].forRoot(_data_service__WEBPACK_IMPORTED_MODULE_10__["DataService"])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 100vh;\r\n    align-items: center;\r\n    justify-items: center; /* adjusted */\r\n  }\r\n\r\n  .centerthis{\r\n      margin-top: 70px;\r\n      display: inline-grid;\r\n      grid-template-rows: 200px 200px;\r\n      grid-template-columns: 400px 400px;\r\n      /* background-color: aquamarine; */\r\n      grid-gap: 20px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIscUJBQXFCLEVBQUUsYUFBYTtFQUN0Qzs7RUFFQTtNQUNJLGdCQUFnQjtNQUNoQixvQkFBb0I7TUFDcEIsK0JBQStCO01BQy9CLGtDQUFrQztNQUNsQyxrQ0FBa0M7TUFDbEMsY0FBYztFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDB2aDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7IC8qIGFkanVzdGVkICovXHJcbiAgfVxyXG5cclxuICAuY2VudGVydGhpc3tcclxuICAgICAgbWFyZ2luLXRvcDogNzBweDtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWdyaWQ7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjAwcHggMjAwcHg7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDAwcHggNDAwcHg7XHJcbiAgICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7ICovXHJcbiAgICAgIGdyaWQtZ2FwOiAyMHB4O1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.component */ "./src/app/app.component.ts");




var DashboardComponent = /** @class */ (function () {
    //public id :any= '0'
    function DashboardComponent(router, app) {
        this.app = app;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.starttest = function (id) {
        this.app.url = "/dashboard/testapti";
        this.app.route();
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"] }
    ]; };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/log-in/log-in.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/log-in/log-in.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body {\r\n    height: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    background-image: url(https://lh4.googleusercontent.com/-XplyTa1Za-I/VMSgIyAYkHI/AAAAAAAADxM/oL-rD6VP4ts/w1184-h666/Android-Lollipop-wallpapers-Google-Now-Wallpaper-2.png);\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    min-height: 100vh;\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.app-header {\r\n    justify-content: space-between;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 2;\r\n    box-shadow: 0 3px 5px -1px rgba(0, 0, 0, .2), 0 6px 10px 0 rgba(0, 0, 0, .14), 0 1px 18px 0 rgba(0, 0, 0, .12);\r\n}\r\n\r\n.login-wrapper {\r\n    height: 100%;\r\n}\r\n\r\n.positronx {\r\n    text-decoration: none;\r\n    color: #ffffff;\r\n}\r\n\r\n.box {\r\n    position: relative;\r\n    top: 0;\r\n    opacity: 1;\r\n    float: left;\r\n    padding: 60px 50px 40px 50px;\r\n    width: 100%;\r\n    background: #fff;\r\n    border-radius: 10px;\r\n    transform: scale(1);\r\n    -webkit-transform: scale(1);\r\n    -ms-transform: scale(1);\r\n    z-index: 5;\r\n    max-width: 330px;\r\n}\r\n\r\n.box.back {\r\n    transform: scale(.95);\r\n    -webkit-transform: scale(.95);\r\n    -ms-transform: scale(.95);\r\n    top: -20px;\r\n    opacity: .8;\r\n    z-index: -1;\r\n}\r\n\r\n.box:before {\r\n    content: \"\";\r\n    width: 100%;\r\n    height: 30px;\r\n    border-radius: 10px;\r\n    position: absolute;\r\n    top: -10px;\r\n    background: rgba(255, 255, 255, .6);\r\n    left: 0;\r\n    transform: scale(.95);\r\n    -webkit-transform: scale(.95);\r\n    -ms-transform: scale(.95);\r\n    z-index: -1;\r\n}\r\n\r\n.login-wrapper .example-form {\r\n    min-width: 100%;\r\n    max-width: 300px;\r\n    width: 100%;\r\n}\r\n\r\n.login-wrapper .example-full-width, .login-wrapper .btn-block {\r\n    width: 100%;\r\n}\r\n\r\n.login-wrapper mat-card-header {\r\n    text-align: center;\r\n    width: 100%;\r\n    display: block;\r\n    font-weight: 700;\r\n}\r\n\r\n.login-wrapper mat-card-header mat-card-title {\r\n    font-size: 30px;\r\n    margin: 0;\r\n}\r\n\r\n.login-wrapper .mat-card {\r\n    padding: 40px 70px 50px;\r\n}\r\n\r\n.login-wrapper .mat-stroked-button {\r\n    border: 1px solid currentColor;\r\n    line-height: 54px;\r\n    background: #FFF7FA;\r\n}\r\n\r\n.login-wrapper .mat-form-field-appearance-legacy .mat-form-field-infix {\r\n    padding: 0.8375em 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2ctaW4vbG9nLWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLDJLQUEySztJQUMzSywyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixpQkFBaUI7SUFDakIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixVQUFVO0lBQ1YsOEdBQThHO0FBQ2xIOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixVQUFVO0lBQ1YsV0FBVztJQUNYLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDZCQUE2QjtJQUM3Qix5QkFBeUI7SUFDekIsVUFBVTtJQUNWLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixtQ0FBbUM7SUFDbkMsT0FBTztJQUNQLHFCQUFxQjtJQUNyQiw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2ctaW4vbG9nLWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLCBib2R5IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vbGg0Lmdvb2dsZXVzZXJjb250ZW50LmNvbS8tWHBseVRhMVphLUkvVk1TZ0l5QVlrSEkvQUFBQUFBQUFEeE0vb0wtckQ2VlA0dHMvdzExODQtaDY2Ni9BbmRyb2lkLUxvbGxpcG9wLXdhbGxwYXBlcnMtR29vZ2xlLU5vdy1XYWxscGFwZXItMi5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmFwcC1oZWFkZXIge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLCAwLCAwLCAuMTIpO1xyXG59XHJcblxyXG4ubG9naW4td3JhcHBlciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5wb3NpdHJvbngge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5ib3gge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZzogNjBweCA1MHB4IDQwcHggNTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB6LWluZGV4OiA1O1xyXG4gICAgbWF4LXdpZHRoOiAzMzBweDtcclxufVxyXG5cclxuLmJveC5iYWNrIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoLjk1KTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSguOTUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoLjk1KTtcclxuICAgIHRvcDogLTIwcHg7XHJcbiAgICBvcGFjaXR5OiAuODtcclxuICAgIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG4uYm94OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtMTBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjYpO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoLjk1KTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSguOTUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoLjk1KTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG4ubG9naW4td3JhcHBlciAuZXhhbXBsZS1mb3JtIHtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmxvZ2luLXdyYXBwZXIgLmV4YW1wbGUtZnVsbC13aWR0aCwgLmxvZ2luLXdyYXBwZXIgLmJ0bi1ibG9jayB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmxvZ2luLXdyYXBwZXIgbWF0LWNhcmQtaGVhZGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4ubG9naW4td3JhcHBlciBtYXQtY2FyZC1oZWFkZXIgbWF0LWNhcmQtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ubG9naW4td3JhcHBlciAubWF0LWNhcmQge1xyXG4gICAgcGFkZGluZzogNDBweCA3MHB4IDUwcHg7XHJcbn1cclxuXHJcbi5sb2dpbi13cmFwcGVyIC5tYXQtc3Ryb2tlZC1idXR0b24ge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgY3VycmVudENvbG9yO1xyXG4gICAgbGluZS1oZWlnaHQ6IDU0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGN0ZBO1xyXG59XHJcblxyXG4ubG9naW4td3JhcHBlciAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcclxuICAgIHBhZGRpbmc6IDAuODM3NWVtIDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/log-in/log-in.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/log-in/log-in.component.ts ***!
  \*******************************************************/
/*! exports provided: LogInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInComponent", function() { return LogInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_policy_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/policy.service */ "./src/app/policy.service.ts");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app//app.component */ "./src/app/app.component.ts");




var LogInComponent = /** @class */ (function () {
    function LogInComponent(policyService, app) {
        this.policyService = policyService;
        this.app = app;
        this.success = false;
    }
    LogInComponent.prototype.ngOnInit = function () {
    };
    LogInComponent.prototype.fuck = function () {
        var _this = this;
        console.log('here');
        this.policyService.getPolicies().subscribe(function (data) {
            console.log(data);
            data.forEach(function (x) {
                console.log(x);
                if (x.username == _this.username && x.Password == _this.password) {
                    _this.success = true;
                    console.log(_this.success);
                    _this.app.inside = true;
                    _this.app.message = 'Login Successful';
                    document.getElementById('msg').setAttribute("class", "text-success");
                    document.getElementById('btn').click();
                }
                _this.app.url = "/dashboard";
            });
            if (_this.success == false) {
                _this.app.message = 'Login unSuccessful check your credentials';
                document.getElementById('msg').setAttribute("class", "text-danger");
                document.getElementById('btn').click();
            }
        });
    };
    LogInComponent.ctorParameters = function () { return [
        { type: src_app_policy_service__WEBPACK_IMPORTED_MODULE_2__["PolicyService"] },
        { type: src_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"] }
    ]; };
    LogInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-log-in',
            template: __webpack_require__(/*! raw-loader!./log-in.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/log-in/log-in.component.html"),
            styles: [__webpack_require__(/*! ./log-in.component.css */ "./src/app/components/log-in/log-in.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_policy_service__WEBPACK_IMPORTED_MODULE_2__["PolicyService"], src_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]])
    ], LogInComponent);
    return LogInComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body {\r\n    height: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    background-image: url(https://lh4.googleusercontent.com/-XplyTa1Za-I/VMSgIyAYkHI/AAAAAAAADxM/oL-rD6VP4ts/w1184-h666/Android-Lollipop-wallpapers-Google-Now-Wallpaper-2.png);\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    min-height: 100vh;\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.app-header {\r\n    justify-content: space-between;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 2;\r\n    box-shadow: 0 3px 5px -1px rgba(0, 0, 0, .2), 0 6px 10px 0 rgba(0, 0, 0, .14), 0 1px 18px 0 rgba(0, 0, 0, .12);\r\n}\r\n\r\n.login-wrapper {\r\n    height: 100%;\r\n}\r\n\r\n.positronx {\r\n    text-decoration: none;\r\n    color: #ffffff;\r\n}\r\n\r\n.box {\r\n    position: relative;\r\n    top: 0;\r\n    opacity: 1;\r\n    float: left;\r\n    padding: 60px 50px 40px 50px;\r\n    width: 100%;\r\n    background: #fff;\r\n    border-radius: 10px;\r\n    transform: scale(1);\r\n    -webkit-transform: scale(1);\r\n    -ms-transform: scale(1);\r\n    z-index: 5;\r\n    max-width: 330px;\r\n}\r\n\r\n.box.back {\r\n    transform: scale(.95);\r\n    -webkit-transform: scale(.95);\r\n    -ms-transform: scale(.95);\r\n    top: -20px;\r\n    opacity: .8;\r\n    z-index: -1;\r\n}\r\n\r\n.box:before {\r\n    content: \"\";\r\n    width: 100%;\r\n    height: 30px;\r\n    border-radius: 10px;\r\n    position: absolute;\r\n    top: -10px;\r\n    background: rgba(255, 255, 255, .6);\r\n    left: 0;\r\n    transform: scale(.95);\r\n    -webkit-transform: scale(.95);\r\n    -ms-transform: scale(.95);\r\n    z-index: -1;\r\n}\r\n\r\n.login-wrapper .example-form {\r\n    min-width: 100%;\r\n    max-width: 300px;\r\n    width: 100%;\r\n}\r\n\r\n.login-wrapper .example-full-width, .login-wrapper .btn-block {\r\n    width: 100%;\r\n}\r\n\r\n.login-wrapper mat-card-header {\r\n    text-align: center;\r\n    width: 100%;\r\n    display: block;\r\n    font-weight: 700;\r\n}\r\n\r\n.login-wrapper mat-card-header mat-card-title {\r\n    font-size: 30px;\r\n    margin: 0;\r\n}\r\n\r\n.login-wrapper .mat-card {\r\n    padding: 40px 70px 50px;\r\n}\r\n\r\n.login-wrapper .mat-stroked-button {\r\n    border: 1px solid currentColor;\r\n    line-height: 54px;\r\n    background: #FFF7FA;\r\n}\r\n\r\n.login-wrapper .mat-form-field-appearance-legacy .mat-form-field-infix {\r\n    padding: 0.8375em 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSwyS0FBMks7SUFDM0ssMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsaUJBQWlCO0lBQ2pCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsVUFBVTtJQUNWLDhHQUE4RztBQUNsSDs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sVUFBVTtJQUNWLFdBQVc7SUFDWCw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLFVBQVU7SUFDVixXQUFXO0lBQ1gsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsbUNBQW1DO0lBQ25DLE9BQU87SUFDUCxxQkFBcUI7SUFDckIsNkJBQTZCO0lBQzdCLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixTQUFTO0FBQ2I7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsIGJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9saDQuZ29vZ2xldXNlcmNvbnRlbnQuY29tLy1YcGx5VGExWmEtSS9WTVNnSXlBWWtISS9BQUFBQUFBQUR4TS9vTC1yRDZWUDR0cy93MTE4NC1oNjY2L0FuZHJvaWQtTG9sbGlwb3Atd2FsbHBhcGVycy1Hb29nbGUtTm93LVdhbGxwYXBlci0yLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uYXBwLWhlYWRlciB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAuMiksIDAgNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIC4xNCksIDAgMXB4IDE4cHggMCByZ2JhKDAsIDAsIDAsIC4xMik7XHJcbn1cclxuXHJcbi5sb2dpbi13cmFwcGVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnBvc2l0cm9ueCB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmJveCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiA2MHB4IDUwcHggNDBweCA1MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIHotaW5kZXg6IDU7XHJcbiAgICBtYXgtd2lkdGg6IDMzMHB4O1xyXG59XHJcblxyXG4uYm94LmJhY2sge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSguOTUpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC45NSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSguOTUpO1xyXG4gICAgdG9wOiAtMjBweDtcclxuICAgIG9wYWNpdHk6IC44O1xyXG4gICAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbi5ib3g6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0xMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNik7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSguOTUpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC45NSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSguOTUpO1xyXG4gICAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbi5sb2dpbi13cmFwcGVyIC5leGFtcGxlLWZvcm0ge1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubG9naW4td3JhcHBlciAuZXhhbXBsZS1mdWxsLXdpZHRoLCAubG9naW4td3JhcHBlciAuYnRuLWJsb2NrIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubG9naW4td3JhcHBlciBtYXQtY2FyZC1oZWFkZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5sb2dpbi13cmFwcGVyIG1hdC1jYXJkLWhlYWRlciBtYXQtY2FyZC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5sb2dpbi13cmFwcGVyIC5tYXQtY2FyZCB7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDcwcHggNTBweDtcclxufVxyXG5cclxuLmxvZ2luLXdyYXBwZXIgLm1hdC1zdHJva2VkLWJ1dHRvbiB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBjdXJyZW50Q29sb3I7XHJcbiAgICBsaW5lLWhlaWdodDogNTRweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRkY3RkE7XHJcbn1cclxuXHJcbi5sb2dpbi13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtaW5maXgge1xyXG4gICAgcGFkZGluZzogMC44Mzc1ZW0gMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_policy_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/policy.service */ "./src/app/policy.service.ts");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app//app.component */ "./src/app/app.component.ts");




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(policyService, app) {
        this.policyService = policyService;
        this.app = app;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.policyService.getPolicies().subscribe(function (data) {
            console.log(data);
            _this.recordlength = data.length + 1;
        });
    };
    RegisterComponent.prototype.fuck = function () {
        var policy;
        this.createPolicy(policy = { 'id': this.recordlength, 'username': this.username, 'Password': this.password, 'ScoreM': 0, 'ScoreGK': 0, 'scoreEng': 0, 'scoreApti': 0 });
    };
    RegisterComponent.prototype.createPolicy = function (policy) {
        var _this = this;
        this.policyService.createPolicy(policy).subscribe(function (ret) {
            console.log("Policy created: ", ret);
            _this.app.message = 'Successfully Registered !\n NOW MR.' + _this.username + "  you can login with your credentials";
            document.getElementById('msg').setAttribute("class", "text-success");
            document.getElementById('btn').click();
        });
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: src_app_policy_service__WEBPACK_IMPORTED_MODULE_2__["PolicyService"] },
        { type: src_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"] }
    ]; };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_policy_service__WEBPACK_IMPORTED_MODULE_2__["PolicyService"], src_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/test-apti/test-apti.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/test-apti/test-apti.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVzdC1hcHRpL3Rlc3QtYXB0aS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/test-apti/test-apti.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/test-apti/test-apti.component.ts ***!
  \*************************************************************/
/*! exports provided: TestAptiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestAptiComponent", function() { return TestAptiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TestAptiComponent = /** @class */ (function () {
    function TestAptiComponent() {
    }
    TestAptiComponent.prototype.ngOnInit = function () {
    };
    TestAptiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test-apti',
            template: __webpack_require__(/*! raw-loader!./test-apti.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/test-apti/test-apti.component.html"),
            styles: [__webpack_require__(/*! ./test-apti.component.css */ "./src/app/components/test-apti/test-apti.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TestAptiComponent);
    return TestAptiComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DataService = /** @class */ (function () {
    function DataService() {
    }
    DataService.prototype.createDb = function () {
        var policies = [
            { id: 1, username: 'Roshan', Password: 'Root', ScoreM: '100', ScoreGK: '500', scoreEng: '300', scoreApti: '200' },
            { id: 2, username: 'Test', Password: '123', ScoreM: '100', ScoreGK: '500', scoreEng: '300', scoreApti: '200' },
            { id: 3, username: 'Test2', Password: 'Root', ScoreM: '100', ScoreGK: '500', scoreEng: '300', scoreApti: '200' },
            { id: 4, username: 'Prithvi', Password: 'Root', ScoreM: '100', ScoreGK: '500', scoreEng: '300', scoreApti: '200' }
        ];
        return { policies: policies };
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/policy.service.ts":
/*!***********************************!*\
  !*** ./src/app/policy.service.ts ***!
  \***********************************/
/*! exports provided: PolicyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyService", function() { return PolicyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var PolicyService = /** @class */ (function () {
    function PolicyService(httpClient) {
        this.httpClient = httpClient;
        this.SERVER_URL = "http://localhost:4211/api/";
    }
    PolicyService.prototype.getPolicies = function () {
        return this.httpClient.get(this.SERVER_URL + 'policies');
    };
    PolicyService.prototype.getPolicy = function (policyId) {
        return this.httpClient.get(this.SERVER_URL + 'policies' + "/" + policyId);
    };
    PolicyService.prototype.createPolicy = function (policy) {
        return this.httpClient.post("" + (this.SERVER_URL + 'policies'), policy);
    };
    PolicyService.prototype.deletePolicy = function (policyId) {
        return this.httpClient.delete(this.SERVER_URL + 'policies' + "/" + policyId);
    };
    PolicyService.prototype.updatePolicy = function (policy) {
        return this.httpClient.put(this.SERVER_URL + 'policies' + "/" + policy.id, policy);
    };
    PolicyService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PolicyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PolicyService);
    return PolicyService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Ambuj sahu\Downloads\minimus\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map