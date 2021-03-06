System.register(['angular2/core', 'angular2/router', './defaultMisc', '../components/parentchildData', 'angular2/http', 'rxjs/add/operator/map'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, defaultMisc_1, parentchildData_1, http_1;
    var Child1Component, MiscComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (defaultMisc_1_1) {
                defaultMisc_1 = defaultMisc_1_1;
            },
            function (parentchildData_1_1) {
                parentchildData_1 = parentchildData_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            Child1Component = (function () {
                function Child1Component() {
                }
                Child1Component = __decorate([
                    core_1.Component({
                        selector: 'dynamic-component',
                        template: 'Child'
                    }), 
                    __metadata('design:paramtypes', [])
                ], Child1Component);
                return Child1Component;
            }());
            MiscComponent = (function () {
                function MiscComponent(_http, dynamicComponentLoader, _elementRef, injector) {
                    this._http = _http;
                    this._elementRef = _elementRef;
                    this.injector = injector;
                    this._dynamicComponentLoader = dynamicComponentLoader;
                }
                MiscComponent.prototype.loadComponent = function (item, m) {
                    var component = System.import(item.component);
                    this._dynamicComponentLoader.loadIntoLocation(m[item.component], this._elementRef, 'container');
                    //this._dynamicComponentLoader.loadAsRoot(m[item.component],'#child', this.injector)
                };
                MiscComponent.prototype.itemSelected = function (item) {
                    var _this = this;
                    System.import(item.path).then(function (m) { return _this.loadComponent(item, m); }, console.error.bind(console));
                };
                MiscComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._http.get('./app/data.json')
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) { return _this.items = data.items; });
                };
                MiscComponent = __decorate([
                    core_1.Component({
                        selector: 'router',
                        templateUrl: '../app/misc/misc.html',
                        directives: [router_1.ROUTER_DIRECTIVES, router_1.RouterOutlet, Child1Component, parentchildData_1.ParentComponent]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'DefaultMisc', component: defaultMisc_1.DefaultMiscComponent, useAsDefault: true },
                    ]), 
                    __metadata('design:paramtypes', [http_1.Http, core_1.DynamicComponentLoader, core_1.ElementRef, core_1.Injector])
                ], MiscComponent);
                return MiscComponent;
            }());
            exports_1("MiscComponent", MiscComponent);
        }
    }
});
//# sourceMappingURL=misc.js.map