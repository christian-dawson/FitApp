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

module.exports = ".card{\r\n    position:absolute; /*it can be fixed too*/\r\n    left:0; right:0;\r\n    top:0; bottom:0;\r\n    margin:auto;\r\n    top: 35%;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n    z-index: 0;\r\n    /* transform: translateY(-50%); */\r\n    text-align: center;\r\n    width: 17%;\r\n    height: 30%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/add-goals/add-goals.component.html":
/*!****************************************************!*\
  !*** ./src/app/add-goals/add-goals.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"card\">\r\n  <form class=\"register\">\r\n    <label for=\"targetWeight\">Target Weight: </label><br>\r\n    <input type=\"number\" [(ngModel)]=\"targetWeight\" name=\"targetWeight\"><br>\r\n\r\n    <label for=\"type\">Additional Goals</label><br>\r\n    <textarea cols=\"22\" rows=\"3\" [(ngModel)]=\"type\" name=\"type\"></textarea><br>\r\n    <br>\r\n    <input type=\"submit\" (click)=\"postGoal()\" value=\"Add Goal\"/>\r\n  </form>\r\n</div>"

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
        this.sess.getLoggedInUser().subscribe(function (data) {
            if (!data) {
                _this.router.navigateByUrl('login');
            }
            else {
                console.log(data.id);
                _this.goal = {
                    goalId: _this.goalId,
                    userId: data.id,
                    targetWeight: _this.targetWeight,
                    type: _this.type
                };
                _this.goalService.postGoal(_this.goal).subscribe(function (doSomething) {
                    _this.router.navigateByUrl('home');
                });
            }
        });
    };
    AddGoalsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('ngOnInit in add-goals called()');
        this.sess.getLoggedInUser().subscribe(function (data) {
            console.log(data);
            if (!data) {
                _this.router.navigateByUrl('login');
            }
        });
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

/***/ "./src/app/alert/alert.component.css":
/*!*******************************************!*\
  !*** ./src/app/alert/alert.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ngb-alert{\r\n    z-index:2;\r\n}\r\n\r\n.hidden {\r\n    display: none;\r\n}"

/***/ }),

/***/ "./src/app/alert/alert.component.html":
/*!********************************************!*\
  !*** ./src/app/alert/alert.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  <ngb-alert type={{alert.type}} [dismissible]=\"false\" [ngClass]=\"alert.display ? '' : 'hidden'\">{{alert.message}}</ngb-alert>\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/alert/alert.component.ts":
/*!******************************************!*\
  !*** ./src/app/alert/alert.component.ts ***!
  \******************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/alert.service */ "./src/app/services/alert.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = /** @class */ (function () {
    function AlertComponent() {
        this.alert = _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"].getAlert();
    }
    AlertComponent.prototype.ngOnInit = function () {
    };
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/alert/alert.component.html"),
            styles: [__webpack_require__(/*! ./alert.component.css */ "./src/app/alert/alert.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AlertComponent);
    return AlertComponent;
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

module.exports = "<app-alert></app-alert>>\r\n<router-outlet></router-outlet>\r\n\r\n"

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
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _add_goals_add_goals_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./add-goals/add-goals.component */ "./src/app/add-goals/add-goals.component.ts");
/* harmony import */ var _dashboard_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/sidebar/sidebar.component */ "./src/app/dashboard/sidebar/sidebar.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./alert/alert.component */ "./src/app/alert/alert.component.ts");
/* harmony import */ var _search_trainers_search_trainers_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./search-trainers/search-trainers.component */ "./src/app/search-trainers/search-trainers.component.ts");
/* harmony import */ var _trainer_pipe_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./trainer-pipe.pipe */ "./src/app/trainer-pipe.pipe.ts");
/* harmony import */ var _directives_insert_component_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./directives/insert-component.directive */ "./src/app/directives/insert-component.directive.ts");
/* harmony import */ var _trainee_pipe_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./trainee-pipe.pipe */ "./src/app/trainee-pipe.pipe.ts");
/* harmony import */ var _search_trainees_search_trainees_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./search-trainees/search-trainees.component */ "./src/app/search-trainees/search-trainees.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"] },
    { path: 'home', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"] },
    { path: 'goal', component: _add_goals_add_goals_component__WEBPACK_IMPORTED_MODULE_10__["AddGoalsComponent"] },
    { path: 'searchTrainee', component: _search_trainees_search_trainees_component__WEBPACK_IMPORTED_MODULE_18__["SearchTraineesComponent"] }
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
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
                _add_goals_add_goals_component__WEBPACK_IMPORTED_MODULE_10__["AddGoalsComponent"],
                _dashboard_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["SidebarComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
                _alert_alert_component__WEBPACK_IMPORTED_MODULE_13__["AlertComponent"],
                _search_trainers_search_trainers_component__WEBPACK_IMPORTED_MODULE_14__["SearchTrainersComponent"],
                _search_trainees_search_trainees_component__WEBPACK_IMPORTED_MODULE_18__["SearchTraineesComponent"],
                _trainer_pipe_pipe__WEBPACK_IMPORTED_MODULE_15__["TrainerPipePipe"],
                _directives_insert_component_directive__WEBPACK_IMPORTED_MODULE_16__["InsertComponentDirective"],
                _trainee_pipe_pipe__WEBPACK_IMPORTED_MODULE_17__["TraineePipePipe"]
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
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            entryComponents: [_search_trainers_search_trainers_component__WEBPACK_IMPORTED_MODULE_14__["SearchTrainersComponent"], _search_trainees_search_trainees_component__WEBPACK_IMPORTED_MODULE_18__["SearchTraineesComponent"]]
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

module.exports = ".dashBody{\r\n  height: 100vh;\r\n}\r\n\r\n#mainDashContainer{\r\n  height: 70vh;\r\n  width: 100vh; \r\n  background-color: white;\r\n}\r\n\r\n#topDashContainer{\r\n  height: 20vh;\r\n  align-content: center;\r\n}"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <app-sidebar></app-sidebar>\r\n\r\n  <main class=\"col-lg-8 offset-sm-3 col-md-10 offset-md-2 pt-3\" id=\"dashBody\">\r\n    <div class=\"container\" id=\"topDashContainer\">\r\n      <app-header></app-header>\r\n    </div>\r\n    <div class=\"container\" id=\"mainDashContainer\">\r\n        <ng-template #dynamic></ng-template>\r\n    </div>\r\n  </main>\r\n    "

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
/* harmony import */ var _services_dynamic_component_dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/dynamic-component-dashboard.service */ "./src/app/services/dynamic-component-dashboard.service.ts");
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
    function DashboardComponent(injectorService) {
        this.injectorService = injectorService;
    }
    DashboardComponent.prototype.displaySearchTrainersComponent = function () {
        this.injectorService.addSearchTrainersComponent();
    };
    DashboardComponent.prototype.ngOnInit = function () {
        this.injectorService.setRootViewContainerRef(this.viewContainerRef);
        this.injectorService.addSearchTrainersComponent();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dynamic', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])
    ], DashboardComponent.prototype, "viewContainerRef", void 0);
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_services_dynamic_component_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DynamicComponentDashboardService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/sidebar/sidebar.component.css":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/sidebar/sidebar.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar {\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 1000;\r\n    padding: 20px;\r\n    overflow-x: hidden;\r\n    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\r\n    border-right: 1px solid #eee;\r\n  }\r\n  \r\n  /* Sidebar navigation */\r\n  \r\n  .sidebar {\r\n    height: 100vh;\r\n    background-color: white;\r\n    padding-left: 0;\r\n    padding-right: 0;\r\n  }\r\n  \r\n  .sidebar .nav {\r\n    margin-bottom: 20px;\r\n  }\r\n  \r\n  .sidebar .nav-item {\r\n    width: 100%;\r\n  }\r\n  \r\n  .sidebar .nav-item + .nav-item {\r\n    margin-left: 0;\r\n  }\r\n  \r\n  .sidebar .nav-link {\r\n    border-radius: 0;\r\n  }"

/***/ }),

/***/ "./src/app/dashboard/sidebar/sidebar.component.html":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/sidebar/sidebar.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar\">\r\n  <ul class=\"nav nav-pills flex-column\">\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link active\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" href=\"#\">Request Plan</a>\r\n    </li>\r\n  </ul>\r\n\r\n  <ul class=\"nav nav-pills flex-column\">\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" href=\"goal\">Edit Goals</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" href=\"#\">Search Trainers</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" href=\"#\">Edit Account Information</a>\r\n    </li>\r\n  </ul>\r\n\r\n  <ul class=\"nav nav-pills flex-column\">\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" (click)=\"logout()\" href=\"login\">Logout</a>\r\n    </li>\r\n  </ul>\r\n</nav>"

/***/ }),

/***/ "./src/app/dashboard/sidebar/sidebar.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/sidebar/sidebar.component.ts ***!
  \********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/login.service */ "./src/app/services/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(ls) {
        this.ls = ls;
    }
    SidebarComponent.prototype.logout = function () {
        console.log('logout called');
        this.ls.logout().subscribe();
    };
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/dashboard/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/dashboard/sidebar/sidebar.component.css")],
            providers: [_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]]
        }),
        __metadata("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/directives/insert-component.directive.ts":
/*!**********************************************************!*\
  !*** ./src/app/directives/insert-component.directive.ts ***!
  \**********************************************************/
/*! exports provided: InsertComponentDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertComponentDirective", function() { return InsertComponentDirective; });
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

var InsertComponentDirective = /** @class */ (function () {
    function InsertComponentDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    InsertComponentDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appInsertComponent]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], InsertComponentDirective);
    return InsertComponentDirective;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\r\n    margin: 0 auto;\r\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\r\n  {{ message }}\r\n</h1>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
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


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(location) {
        this.location = location;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.ngDoCheck = function () {
        this.message = makeMessage(this.location);
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], HeaderComponent);
    return HeaderComponent;
}());

function makeMessage(location) {
    console.log(location.path());
    if (location.path() === '/home') {
        return 'Welcome Home';
    }
    else if (location.path() === '/login') {
        return 'Login';
    }
    else if (location.path() === '/register') {
        return 'Register';
    }
    else if (location.path() === '/findTrainer') {
        return 'Find a Trainer';
    }
    else if (location.path() === '/goal') {
        return 'Goals';
    }
    else {
        return '';
    }
}


/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\n    position:absolute; /*it can be fixed too*/\r\n    left:0; right:0;\r\n    top:0; bottom:0;\r\n    margin:auto;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n    /* transform: translateY(-50%); */\r\n    text-align: center;\r\n    width: 18rem;\r\n    height: 14rem;\r\n}\r\na{\r\n    margin-left: 10%;\r\n}\r\nbutton{\r\n    margin: left;\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\r\n  <app-header></app-header>\r\n</div>\r\n<div class=\"card\">\r\n  <form class=\"register\" (submit)=\"login()\">\r\n      <label for=\"username\">Username</label><br>\r\n      <input type=\"text\" [(ngModel)]=\"username\" name=\"user\"><br>\r\n      <label for=\"username\">Password</label><br>\r\n      <input type=\"password\" [(ngModel)]=\"password\" name=\"pass\"><br><br>\r\n      <input type=\"submit\" value=\"login\">\r\n      <a href=\"register\">Need an account?</a>\r\n  </form>\r\n</div>\r\n\r\n"

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
/* harmony import */ var _types_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/alert */ "./src/app/types/alert.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
        this.alert = new _types_alert__WEBPACK_IMPORTED_MODULE_1__["Alert"]('', '', false);
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
            height: this.height,
            goal: this.goal
        };
        this.loginService.login(this.user)
            .subscribe(function (data) {
            if (!data) {
                _this.alert.message = 'Invalid User Credentials';
                _this.alert.type = 'danger';
                _this.alert.display = true;
                _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"].setAlert(_this.alert);
                _this.router.navigateByUrl('login');
            }
            else {
                _this.router.navigateByUrl('home');
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")],
            providers: [_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]]
        }),
        __metadata("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#cardId{\r\n    position:absolute; /*it can be fixed too*/\r\n    left:0; right:0;\r\n    top:0; bottom:0;\r\n    margin:auto;\r\n    top: 80%;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n    /* transform: translateY(-50%); */\r\n    text-align: center;\r\n    width: 16%;\r\n    height: 74%;\r\n}\r\na{\r\n    margin-left: 10%;\r\n}"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"card\" id=\"cardId\">\r\n  <form class=\"register\" ngNativeValidate (submit)=\"register()\">\r\n    <label for=\"username\">Username</label><br>\r\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"user\" required><br>\r\n\r\n    <label for=\"username\">Password</label><br>\r\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"pass\" required><br>\r\n\r\n    <label for=\"address\">address</label><br>\r\n    <input type=\"text\" [(ngModel)]=\"address\" name=\"address\" required><br>\r\n\r\n    <label for=\"firstName\">First Name</label><br>\r\n    <input type=\"text\" [(ngModel)]=\"firstName\" name=\"firstName\" required><br>\r\n    <label for=\"lastName\">Last Name</label><br>\r\n    <input type=\"text\" [(ngModel)]=\"lastName\" name=\"lastName\" required><br>\r\n\r\n    <label for=\"type\">User Type</label><br>\r\n    <select name=\"type\" [(ngModel)]=\"type\">\r\n      <option value=\"trainee\" selected=\"selected\">User</option>\r\n      <option value=\"trainer\">Trainer</option>\r\n    </select><br>\r\n\r\n    <label for=\"birthdate\">Date of Birth</label><br>\r\n    <input type=\"date\" [(ngModel)]=\"birthdate\" name=\"birthdate\" required min=\"{{minDate}}\" max={{maxDate}}><br>\r\n\r\n    <label for=\"height\">Height (cm)</label><br>\r\n    <input type=\"number\" [(ngModel)]=\"height\" name=\"height\" min=\"1\" max=\"300\"><br>\r\n    <label for=\"weight\">Weight (kg)</label><br>\r\n    <input type=\"number\" [(ngModel)]=\"weight\" name=\"weight\" min=\"1\" max=\"9000\"><br>\r\n    <br>\r\n    <input type=\"submit\" value=\"register\">\r\n    <a href=\"login\">Have an account?</a>\r\n\r\n  </form>\r\n</div>"

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
            height: this.height,
            goal: this.goal
        };
        console.log(this.user.type);
        this.registerService.register(this.user)
            .subscribe(function (data) {
            _this.user = data;
            _this.router.navigateByUrl('goal');
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

/***/ "./src/app/search-trainees/search-trainees.component.css":
/*!***************************************************************!*\
  !*** ./src/app/search-trainees/search-trainees.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    width: 100vh;\r\n}"

/***/ }),

/***/ "./src/app/search-trainees/search-trainees.component.html":
/*!****************************************************************!*\
  !*** ./src/app/search-trainees/search-trainees.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label>Search Trainees</label>\n<input type=\"text\" readyonly class=\"form-control-plaintext\" [(ngModel)]=\"searchText\" placeholder=\"Last Name\">\n<table>\n  <tr>\n    <th sytle=\"width: 25%\">\n      Person Requesting\n    </th>\n    <th sytle=\"width: 10%\">\n      Trainee Weight\n    </th>\n    <th sytle=\"width: 10%\">\n      Trainee Target Weight\n    </th>\n    <th style=\"width: 35%\">\n      Trainee Goals\n    </th>\n    <th style=\"width: 10%\">\n      Accept Request\n    </th>\n  </tr>\n  <tr *ngFor=\"let u of users | traineePipe : searchText\">\n    <td>\n      {{u.firstName}} {{u.lastName}}\n    </td>\n    <td>\n      {{ u.weight }}\n    </td>\n    <td>\n      {{ (u.goal) ? u.goal.targetWeight : 'none' }}\n    </td>\n    <td>\n      {{ (u.goal) ? u.goal.type : 'none' }}\n    </td>\n    <td>\n      <button (click)=\"acceptTraining(u)\">Accept</button>\n    </td>\n  </tr>\n</table>\n"

/***/ }),

/***/ "./src/app/search-trainees/search-trainees.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/search-trainees/search-trainees.component.ts ***!
  \**************************************************************/
/*! exports provided: SearchTraineesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchTraineesComponent", function() { return SearchTraineesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchTraineesComponent = /** @class */ (function () {
    function SearchTraineesComponent(userService) {
        this.userService = userService;
    }
    SearchTraineesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (data) {
            _this.users = data;
        });
    };
    SearchTraineesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-trainees',
            template: __webpack_require__(/*! ./search-trainees.component.html */ "./src/app/search-trainees/search-trainees.component.html"),
            styles: [__webpack_require__(/*! ./search-trainees.component.css */ "./src/app/search-trainees/search-trainees.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], SearchTraineesComponent);
    return SearchTraineesComponent;
}());



/***/ }),

/***/ "./src/app/search-trainers/search-trainers.component.css":
/*!***************************************************************!*\
  !*** ./src/app/search-trainers/search-trainers.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    width: 100vh;\r\n}"

/***/ }),

/***/ "./src/app/search-trainers/search-trainers.component.html":
/*!****************************************************************!*\
  !*** ./src/app/search-trainers/search-trainers.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label>Search Trainers</label>\r\n<input type=\"text\" readyonly class=\"form-control-plaintext\" [(ngModel)]=\"searchText\" placeholder=\"Last Name\">\r\n<table>\r\n\r\n  <tr>\r\n    <th sytle=\"width: 25%\">\r\n      Trainer\r\n    </th>\r\n    <th sytle=\"width: 65%\">\r\n      Trainer skills\r\n    </th>\r\n    <th sytle=\"width: 10%\">\r\n      Request Services\r\n    </th>\r\n  </tr>\r\n  <tr *ngFor=\"let u of users | trainerPipe : searchText\">\r\n    <td>\r\n      {{u.firstName}} {{u.lastName}}\r\n    </td>\r\n    <td>\r\n      Weight Training\r\n    </td>\r\n    <td>\r\n      <button (click)=\"requestTraining(u)\">Train</button>\r\n    </td>\r\n  </tr>\r\n</table>"

/***/ }),

/***/ "./src/app/search-trainers/search-trainers.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/search-trainers/search-trainers.component.ts ***!
  \**************************************************************/
/*! exports provided: SearchTrainersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchTrainersComponent", function() { return SearchTrainersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchTrainersComponent = /** @class */ (function () {
    function SearchTrainersComponent(userService) {
        this.userService = userService;
    }
    SearchTrainersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (data) {
            _this.users = data;
        });
    };
    SearchTrainersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-trainers',
            template: __webpack_require__(/*! ./search-trainers.component.html */ "./src/app/search-trainers/search-trainers.component.html"),
            styles: [__webpack_require__(/*! ./search-trainers.component.css */ "./src/app/search-trainers/search-trainers.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], SearchTrainersComponent);
    return SearchTrainersComponent;
}());



/***/ }),

/***/ "./src/app/services/alert.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/alert.service.ts ***!
  \*******************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _types_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/alert */ "./src/app/types/alert.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertService = /** @class */ (function () {
    function AlertService() {
    }
    AlertService.setAlert = function (newAlert) {
        this.ourCustomAlert = newAlert;
    };
    AlertService.getAlert = function () {
        return this.ourCustomAlert;
    };
    AlertService.ourCustomAlert = new _types_alert__WEBPACK_IMPORTED_MODULE_1__["Alert"]('hello', 'success', false);
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/services/dynamic-component-dashboard.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/dynamic-component-dashboard.service.ts ***!
  \*****************************************************************/
/*! exports provided: DynamicComponentDashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicComponentDashboardService", function() { return DynamicComponentDashboardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _search_trainers_search_trainers_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../search-trainers/search-trainers.component */ "./src/app/search-trainers/search-trainers.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DynamicComponentDashboardService = /** @class */ (function () {
    function DynamicComponentDashboardService(factoryResolver) {
        this.factoryResolver = factoryResolver;
    }
    DynamicComponentDashboardService.prototype.setRootViewContainerRef = function (viewContainerRef) {
        this.rootViewContainer = viewContainerRef;
    };
    DynamicComponentDashboardService.prototype.addSearchTrainersComponent = function () {
        var factory = this.factoryResolver.resolveComponentFactory(_search_trainers_search_trainers_component__WEBPACK_IMPORTED_MODULE_1__["SearchTrainersComponent"]);
        var component = factory.create(this.rootViewContainer.parentInjector);
        this.rootViewContainer.insert(component.hostView);
    };
    DynamicComponentDashboardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"])),
        __metadata("design:paramtypes", [Object])
    ], DynamicComponentDashboardService);
    return DynamicComponentDashboardService;
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
        this.posturl = 'http://localhost:8080/FitApp/user/' + userId + '/goal/';
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
        this.logoutUrl = 'http://localhost:8080/FitApp/logout';
    }
    LoginService.prototype.login = function (user) {
        return this.http.post(this.url, JSON.stringify(user), httpOptions);
    };
    LoginService.prototype.logout = function () {
        return this.http.get(this.logoutUrl);
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
        this.url = 'http://localhost:8080/FitApp/session';
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

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
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
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.url = 'http://localhost:8080/FitApp/user/';
    }
    UserService.prototype.getUsers = function () {
        return this.http.get(this.url);
    };
    UserService.prototype.postUser = function (user) {
        return this.http.post(this.url, user, httpOptions);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/trainee-pipe.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/trainee-pipe.pipe.ts ***!
  \**************************************/
/*! exports provided: TraineePipePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TraineePipePipe", function() { return TraineePipePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TraineePipePipe = /** @class */ (function () {
    function TraineePipePipe() {
    }
    TraineePipePipe.prototype.transform = function (items, searchText) {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items.filter(function (user) {
                if (user.type === 'trainee') {
                    return true;
                }
            });
        }
        searchText = searchText.toLowerCase();
        return items.filter(function (it) {
            if (it.type === 'trainee') {
                if (it.lastName.toLowerCase().includes(searchText)) {
                    return true;
                }
            }
        });
    };
    TraineePipePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'traineePipe'
        })
    ], TraineePipePipe);
    return TraineePipePipe;
}());



/***/ }),

/***/ "./src/app/trainer-pipe.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/trainer-pipe.pipe.ts ***!
  \**************************************/
/*! exports provided: TrainerPipePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainerPipePipe", function() { return TrainerPipePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TrainerPipePipe = /** @class */ (function () {
    function TrainerPipePipe() {
    }
    TrainerPipePipe.prototype.transform = function (items, searchText) {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items.filter(function (user) {
                if (user.type === 'trainer') {
                    return true;
                }
            });
        }
        searchText = searchText.toLowerCase();
        return items.filter(function (it) {
            if (it.type === 'trainer') {
                if (it.lastName.toLowerCase().includes(searchText)) {
                    return true;
                }
            }
        });
    };
    TrainerPipePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'trainerPipe'
        })
    ], TrainerPipePipe);
    return TrainerPipePipe;
}());



/***/ }),

/***/ "./src/app/types/alert.ts":
/*!********************************!*\
  !*** ./src/app/types/alert.ts ***!
  \********************************/
/*! exports provided: Alert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
var Alert = /** @class */ (function () {
    function Alert(message, type, display) {
        this.message = message;
        this.type = type;
        this.display = display;
    }
    return Alert;
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

module.exports = __webpack_require__(/*! C:\Users\tdvpr\Documents\1808-Java\FitApp\angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map