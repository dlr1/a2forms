System.register(['angular2/core', 'rxjs/Rx'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var KeysPipe, ObjectPropComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {}],
        execute: function() {
            KeysPipe = (function () {
                function KeysPipe() {
                }
                KeysPipe.prototype.transform = function (value, args) {
                    var keys = [];
                    for (var key in value) {
                        keys.push({ key: key, value: value[key] });
                    }
                    return keys;
                };
                KeysPipe = __decorate([
                    core_1.Pipe({ name: 'keys' }), 
                    __metadata('design:paramtypes', [])
                ], KeysPipe);
                return KeysPipe;
            })();
            exports_1("KeysPipe", KeysPipe);
            ObjectPropComponent = (function () {
                function ObjectPropComponent() {
                    this.myObject = {
                        "customerId": "1",
                        "customerName": "customer1",
                        "emailAddress": "customer@testa.com"
                    };
                }
                ObjectPropComponent = __decorate([
                    core_1.Component({
                        template: "\n    <div>\n      <ul>\n        <li *ngFor=\"#entry of myObject | keys\">\n            Key: {{entry.key}}, value: {{entry.value}}\n        </li>\n      </ul>\n    </div>\n         ",
                        pipes: [KeysPipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ObjectPropComponent);
                return ObjectPropComponent;
            })();
            exports_1("ObjectPropComponent", ObjectPropComponent);
        }
    }
});
//# sourceMappingURL=ngForObjectProperties.js.map