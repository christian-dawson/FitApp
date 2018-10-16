(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-goals/add-goals.component.css":
/*!***************************************************!*\
  !*** ./src/app/add-goals/add-goals.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#cardId{\r\n    position:absolute; /*it can be fixed too*/\r\n    left:0; right:0;\r\n    top:0; bottom:0;\r\n    margin:auto;\r\n    top: 80%;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n    z-index: 0;\r\n    /* transform: translateY(-50%); */\r\n    text-align: center;\r\n    width: 18rem;\r\n    height: 17rem;\r\n    background-color: rgba(254,254,254,.5); \r\n}\r\n.blur{\r\n\tposition:absolute; /*it can be fixed too*/\r\n    height: 100%;\r\n    width: 100%;\r\n    filter: blur(7px);\r\n    -webkit-filter: blur(7px);\r\n}\r\n"

/***/ }),

/***/ "./src/app/add-goals/add-goals.component.html":
/*!****************************************************!*\
  !*** ./src/app/add-goals/add-goals.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" id=\"cardId\">\r\n  <form class=\"register\">\r\n    <label for=\"targetWeight\">Target Weight: </label><br>\r\n    <input type=\"number\" [(ngModel)]=\"targetWeight\" name=\"targetWeight\"><br>\r\n\r\n    <label for=\"type\">Additional Goals</label><br>\r\n    <textarea cols=\"22\" rows=\"3\" [(ngModel)]=\"type\" name=\"type\"></textarea><br>\r\n    <br>\r\n    <input type=\"submit\" (click)=\"postGoal()\" value=\"Add Goal\"/>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/add-goals/add-goals.component.ts":
/*!**************************************************!*\
  !*** ./src/app/add-goals/add-goals.component.ts ***!
  \**************************************************/
/*! exports provided: AddGoalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGoalsComponent", function() { return AddGoalsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_goal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/goal.service */ "./src/app/services/goal.service.ts");
/* harmony import */ var _services_session_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/session-info.service */ "./src/app/services/session-info.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddGoalsComponent = /** @class */ (function () {
    function AddGoalsComponent(sess, goalService, router) {
        this.sess = sess;
        this.goalService = goalService;
        this.router = router;
    }
    AddGoalsComponent.prototype.postGoal = function () {
        var _this = this;
        this.goal = {
            goalId: this.goalId,
            userId: this.userId,
            targetWeight: this.targetWeight,
            type: this.type
        };
        this.goalService.postGoal(this.goal).subscribe(function (data) {
            _this.router.navigateByUrl('home');
        });
    };
    AddGoalsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.sess);
        this.sess.getLoggedInUser().subscribe(function (data) {
            if (!data) {
                _this.router.navigateByUrl('login');
            }
            else {
                _this.userId = data.id;
                console.log(data.id);
            }
        });
        console.log('onInitCalled()');
    };
    AddGoalsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-goals',
            template: __webpack_require__(/*! ./add-goals.component.html */ "./src/app/add-goals/add-goals.component.html"),
            styles: [__webpack_require__(/*! ./add-goals.component.css */ "./src/app/add-goals/add-goals.component.css")]
        }),
        __metadata("design:paramtypes", [_services_session_info_service__WEBPACK_IMPORTED_MODULE_2__["SessionInfoService"], _services_goal_service__WEBPACK_IMPORTED_MODULE_1__["GoalService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddGoalsComponent);
    return AddGoalsComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hide {\r\n    display: none;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<app-nav></app-nav>\r\n<div style=\"text-align:center\">\r\n  <h1 [ngClass] = \"location.path() == '/home' ? 'hide' : ''\">\r\n    Welcome to {{ title }}!\r\n  </h1>\r\n  <!-- <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\"> -->\r\n</div>\r\n<!-- <app-login></app-login> -->\r\n<br>\r\n<br>\r\n<!-- <app-register></app-register> -->\r\n\r\n<router-outlet></router-outlet>\r\n\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(location) {
        this.title = 'Fit App';
        this.location = location;
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/@angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _add_goals_add_goals_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./add-goals/add-goals.component */ "./src/app/add-goals/add-goals.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"] },
    { path: 'home', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"] },
    { path: 'addGoals', component: _add_goals_add_goals_component__WEBPACK_IMPORTED_MODULE_11__["AddGoalsComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_9__["NavComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"],
                _add_goals_add_goals_component__WEBPACK_IMPORTED_MODULE_11__["AddGoalsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(routes, { enableTracing: true } // <-- debugging purposes only
                ),
                _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n * Base structure\r\n */\r\n\r\n/* Move down content because we have a fixed navbar that is 50px tall */\r\n\r\nbody {\r\n    padding-top: 50px;\r\n  }\r\n\r\n/*\r\n   * Typography\r\n   */\r\n\r\n/*\r\n   * Sidebar\r\n   */\r\n\r\n.sidebar {\r\n    position: fixed;\r\n    top: 51px;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 1000;\r\n    padding: 20px;\r\n    overflow-x: hidden;\r\n    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\r\n    border-right: 1px solid #eee;\r\n  }\r\n\r\n/* Sidebar navigation */\r\n\r\n.sidebar {\r\n    height: 100vh;\r\n    background-color: white;\r\n    padding-left: 0;\r\n    padding-right: 0;\r\n  }\r\n\r\n.sidebar .nav {\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n.sidebar .nav-item {\r\n    width: 100%;\r\n  }\r\n\r\n.sidebar .nav-item + .nav-item {\r\n    margin-left: 0;\r\n  }\r\n\r\n.sidebar .nav-link {\r\n    border-radius: 0;\r\n  }\r\n\r\n/*\r\n   * Dashboard\r\n   */\r\n\r\n/* Placeholders */\r\n\r\n.placeholders {\r\n    padding-bottom: 3rem;\r\n  }\r\n\r\n.placeholder img {\r\n    padding-top: 1.5rem;\r\n    padding-bottom: 1.5rem;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <nav class=\"col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar\">\r\n        <ul class=\"nav nav-pills flex-column\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link active\" href=\"#\">Overview <span class=\"sr-only\">(current)</span></a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#\">Reports</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#\">Analytics</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#\">Export</a>\r\n          </li>\r\n        </ul>\r\n\r\n        <ul class=\"nav nav-pills flex-column\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#\">Nav item</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#\">Nav item again</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#\">One more nav</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#\">Another nav item</a>\r\n          </li>\r\n        </ul>\r\n\r\n        <ul class=\"nav nav-pills flex-column\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#\">Nav item again</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#\">One more nav</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#\">Another nav item</a>\r\n          </li>\r\n        </ul>\r\n      </nav>\r\n\r\n      <main class=\"col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3\">\r\n\r\n        <section class=\"row text-center placeholders\">\r\n          <div class=\"col-6 col-sm-3 placeholder\">\r\n            <img src=\"data:image/gif;base64,R0lGODlhAQABAIABAAJ12AAAACwAAAAAAQABAAACAkQBADs=\" width=\"200\" height=\"200\"\r\n              class=\"img-fluid rounded-circle\" alt=\"Generic placeholder thumbnail\">\r\n            <h4>Label</h4>\r\n            <div class=\"text-muted\">Something else</div>\r\n          </div>\r\n          <div class=\"col-6 col-sm-3 placeholder\">\r\n            <img src=\"data:image/gif;base64,R0lGODlhAQABAIABAADcgwAAACwAAAAAAQABAAACAkQBADs=\" width=\"200\" height=\"200\"\r\n              class=\"img-fluid rounded-circle\" alt=\"Generic placeholder thumbnail\">\r\n            <h4>Label</h4>\r\n            <span class=\"text-muted\">Something else</span>\r\n          </div>\r\n          <div class=\"col-6 col-sm-3 placeholder\">\r\n            <img src=\"data:image/gif;base64,R0lGODlhAQABAIABAAJ12AAAACwAAAAAAQABAAACAkQBADs=\" width=\"200\" height=\"200\"\r\n              class=\"img-fluid rounded-circle\" alt=\"Generic placeholder thumbnail\">\r\n            <h4>Label</h4>\r\n            <span class=\"text-muted\">Something else</span>\r\n          </div>\r\n          <div class=\"col-6 col-sm-3 placeholder\">\r\n            <img src=\"data:image/gif;base64,R0lGODlhAQABAIABAADcgwAAACwAAAAAAQABAAACAkQBADs=\" width=\"200\" height=\"200\"\r\n              class=\"img-fluid rounded-circle\" alt=\"Generic placeholder thumbnail\">\r\n            <h4>Label</h4>\r\n            <span class=\"text-muted\">Something else</span>\r\n          </div>\r\n        </section>\r\n\r\n        <h2>Section title</h2>\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-striped\">\r\n            <thead>\r\n              <tr>\r\n                <th>#</th>\r\n                <th>Header</th>\r\n                <th>Header</th>\r\n                <th>Header</th>\r\n                <th>Header</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td>1,001</td>\r\n                <td>Lorem</td>\r\n                <td>ipsum</td>\r\n                <td>dolor</td>\r\n                <td>sit</td>\r\n              </tr>\r\n              <tr>\r\n                <td>1,002</td>\r\n                <td>amet</td>\r\n                <td>consectetur</td>\r\n                <td>adipiscing</td>\r\n                <td>elit</td>\r\n              </tr>\r\n              <tr>\r\n                <td>1,003</td>\r\n                <td>Integer</td>\r\n                <td>nec</td>\r\n                <td>odio</td>\r\n                <td>Praesent</td>\r\n              </tr>\r\n              <tr>\r\n                <td>1,003</td>\r\n                <td>libero</td>\r\n                <td>Sed</td>\r\n                <td>cursus</td>\r\n                <td>ante</td>\r\n              </tr>\r\n              <tr>\r\n                <td>1,004</td>\r\n                <td>dapibus</td>\r\n                <td>diam</td>\r\n                <td>Sed</td>\r\n                <td>nisi</td>\r\n              </tr>\r\n              <tr>\r\n                <td>1,005</td>\r\n                <td>Nulla</td>\r\n                <td>quis</td>\r\n                <td>sem</td>\r\n                <td>at</td>\r\n              </tr>\r\n              <tr>\r\n                <td>1,006</td>\r\n                <td>nibh</td>\r\n                <td>elementum</td>\r\n                <td>imperdiet</td>\r\n                <td>Duis</td>\r\n              </tr>\r\n              <tr>\r\n                <td>1,007</td>\r\n                <td>sagittis</td>\r\n                <td>ipsum</td>\r\n                <td>Praesent</td>\r\n                <td>mauris</td>\r\n              </tr>\r\n              <tr>\r\n                <td>1,008</td>\r\n                <td>Fusce</td>\r\n                <td>nec</td>\r\n                <td>tellus</td>\r\n                <td>sed</td>\r\n              </tr>\r\n              <tr>\r\n                <td>1,009</td>\r\n                <td>augue</td>\r\n                <td>semper</td>\r\n                <td>porta</td>\r\n                <td>Mauris</td>\r\n              </tr>\r\n              <tr>\r\n                <td>1,010</td>\r\n                <td>massa</td>\r\n                <td>Vestibulum</td>\r\n                <td>lacinia</td>\r\n                <td>arcu</td>\r\n              </tr>\r\n              <tr>\r\n                <td>1,011</td>\r\n                <td>eget</td>\r\n                <td>nulla</td>\r\n                <td>Class</td>\r\n                <td>aptent</td>\r\n              </tr>\r\n              <tr>\r\n                <td>1,012</td>\r\n                <td>taciti</td>\r\n                <td>sociosqu</td>\r\n                <td>ad</td>\r\n                <td>litora</td>\r\n              </tr>\r\n              <tr>\r\n                <td>1,013</td>\r\n                <td>torquent</td>\r\n                <td>per</td>\r\n                <td>conubia</td>\r\n                <td>nostra</td>\r\n              </tr>\r\n              <tr>\r\n                <td>1,014</td>\r\n                <td>per</td>\r\n                <td>inceptos</td>\r\n                <td>himenaeos</td>\r\n                <td>Curabitur</td>\r\n              </tr>\r\n              <tr>\r\n                <td>1,015</td>\r\n                <td>sodales</td>\r\n                <td>ligula</td>\r\n                <td>in</td>\r\n                <td>libero</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </main>\r\n    </div>\r\n  </div>\r\n</body>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#cardId{\r\n    position:absolute; /*it can be fixed too*/\r\n    left:0; right:0;\r\n    top:0; bottom:0;\r\n    margin:auto;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n    z-index: 2;\r\n    /* transform: translateY(-50%); */\r\n    text-align: center;\r\n    width: 15rem;\r\n    height: 10rem;\r\n    \r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" id=\"cardId\">\r\n  <form class=\"register\" (submit)=\"login()\">\r\n      <label for=\"username\">Username</label><br>\r\n      <input type=\"text\" [(ngModel)]=\"username\" name=\"user\"><br>\r\n      <label for=\"username\">Password</label><br>\r\n      <input type=\"password\" [(ngModel)]=\"password\" name=\"pass\"><br>\r\n      <input type=\"submit\">\r\n  </form>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.user = {
            username: this.username,
            password: this.password,
            id: this.id,
            address: this.address,
            firstName: this.firstName,
            lastName: this.lastName,
            type: this.type,
            birthdate: this.birthdate,
            weight: this.weight,
            height: this.height
        };
        this.loginService.login(this.user)
            .subscribe(function (data) {
            _this.user = data;
            console.log(_this.user);
            _this.router.navigateByUrl('register');
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")],
            providers: [_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]]
        }),
        __metadata("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\" id=\"sidenav\">\r\n  <a class=\"navbar-brand\">Fitness!!!11!</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [ngClass]=\"location.path() == '/register' ? 'disabled btn disabled' : ''\" href=\"register\">#Placeholder</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [ngClass]=\"location.path() == '/PLACEHOLDERROUTE' ? 'disabled btn disabled' : ''\" href=\"#\">#Placeholder</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [ngClass]=\"location.path() == '/PLACEHOLDERROUTE' ? 'disabled btn disabled' : ''\" href=\"#\">#Placeholder</a>\r\n      </li>\r\n    </ul>\r\n    <ul class=\"navbar-nav navbar-right\">\r\n      <li><a href=\"login\"><span class=\"glyphicon glyphicon-log-in\"></span>Logout</a></li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavComponent = /** @class */ (function () {
    function NavComponent(location) {
        this.location = location;
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#cardId{\r\n    position:absolute; /*it can be fixed too*/\r\n    left:0; right:0;\r\n    top:0; bottom:0;\r\n    margin:auto;\r\n    top: 80%;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n    z-index: 0;\r\n    /* transform: translateY(-50%); */\r\n    text-align: center;\r\n    width: 18rem;\r\n    height: 46rem;\r\n}"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" id=\"cardId\">\r\n    <form class=\"register\" ngNativeValidate (submit)=\"register()\">\r\n      <label for=\"username\">Username</label><br>\r\n      <input type=\"text\" [(ngModel)]=\"username\" name=\"user\" required><br>\r\n   \r\n      <label for=\"username\">Password</label><br>\r\n      <input type=\"password\" [(ngModel)]=\"password\" name=\"pass\" required><br>\r\n   \r\n      <label for=\"address\">address</label><br>\r\n      <input type=\"text\" [(ngModel)]=\"address\" name=\"address\" required><br>\r\n   \r\n      <label for=\"firstName\">First Name</label><br>\r\n      <input type=\"text\" [(ngModel)]=\"firstName\" name=\"firstName\" required><br>\r\n      <label for=\"lastName\">Last Name</label><br>\r\n      <input type=\"text\" [(ngModel)]=\"lastName\" name=\"lastName\" required><br>\r\n   \r\n      <label for=\"type\">User Type</label><br>\r\n      <select name=\"type\" [(ngModel)] = \"type\">\r\n        <option value=\"trainee\" selected=\"selected\">User</option>\r\n        <option value=\"trainer\">Trainer</option>\r\n      </select><br>\r\n   \r\n      <label for=\"birthdate\">Date of Birth</label><br>\r\n      <input type=\"date\" [(ngModel)]=\"birthdate\" name=\"birthdate\" required min=\"{{minDate}}\" max={{maxDate}}><br>\r\n   \r\n      <label for=\"height\">Height (cm)</label><br>\r\n      <input type=\"number\" [(ngModel)]=\"height\" name=\"height\" min=\"1\" max=\"300\"><br>\r\n      <label for=\"weight\">Weight (kg)</label><br>\r\n      <input type=\"number\" [(ngModel)]=\"weight\" name=\"weight\" min=\"1\" max=\"9000\"><br>\r\n      <br>\r\n      <input type=\"submit\" value=\"register\">\r\n   \r\n    </form>\r\n   </div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/register.service */ "./src/app/services/register.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var maxYear = (new Date).getFullYear() - 18;
var minYear = (new Date).getFullYear() - 100;
var day = (new Date).getDay();
var month = (new Date).getMonth();
var maxDate = '' + month + '/' + day + '/' + maxYear;
var minDate = '' + month + '/' + day + '/' + minYear;
console.log(maxDate);
console.log(minDate);
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(registerService, router) {
        this.registerService = registerService;
        this.router = router;
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.user = {
            id: 0,
            username: this.username,
            password: this.password,
            address: this.address,
            firstName: this.firstName,
            lastName: this.lastName,
            type: this.type,
            birthdate: this.birthdate,
            weight: this.weight,
            height: this.height
        };
        console.log(this.user.type);
        this.registerService.register(this.user)
            .subscribe(function (data) {
            _this.user = data;
            _this.router.navigateByUrl('addGoals');
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")],
            providers: [_services_register_service__WEBPACK_IMPORTED_MODULE_1__["RegisterService"]]
        }),
        __metadata("design:paramtypes", [_services_register_service__WEBPACK_IMPORTED_MODULE_1__["RegisterService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/goal.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/goal.service.ts ***!
  \******************************************/
/*! exports provided: GoalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoalService", function() { return GoalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var userId = 10;
var GoalService = /** @class */ (function () {
    function GoalService(http) {
        this.http = http;
        this.posturl = 'http://localhost:8080/FitApp/' + userId + 'goal/';
    }
    GoalService.prototype.postGoal = function (goal) {
        this.goal = goal;
        return this.http.post(this.posturl, goal, httpOptions);
    };
    GoalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GoalService);
    return GoalService;
}());



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.url = 'http://localhost:8080/FitApp/login';
    }
    LoginService.prototype.login = function (user) {
        return this.http.post(this.url, JSON.stringify(user), httpOptions);
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/register.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/register.service.ts ***!
  \**********************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var RegisterService = /** @class */ (function () {
    function RegisterService(http) {
        this.http = http;
        this.url = 'http://localhost:8080/FitApp/user';
    }
    RegisterService.prototype.register = function (user) {
        return this.http.post(this.url, JSON.stringify(user), httpOptions);
    };
    RegisterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RegisterService);
    return RegisterService;
}());



/***/ }),

/***/ "./src/app/services/session-info.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/session-info.service.ts ***!
  \**************************************************/
/*! exports provided: SessionInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionInfoService", function() { return SessionInfoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var SessionInfoService = /** @class */ (function () {
    function SessionInfoService(http) {
        this.http = http;
    }
    SessionInfoService.prototype.getLoggedInUser = function () {
        return this.http.get(this.url);
    };
    SessionInfoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SessionInfoService);
    return SessionInfoService;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Chris\Documents\revature\FitApp\angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map