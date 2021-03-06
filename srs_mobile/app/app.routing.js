"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var items_component_1 = require("./item/items.component");
var item_detail_component_1 = require("./item/item-detail.component");
var registration_component_1 = require("./registration/registration.component");
var routes = [
    {
        path: "", redirectTo: "/registration",
        pathMatch: "full"
    },
    {
        path: "items",
        component: items_component_1.ItemsComponent
    },
    {
        path: "item/:id",
        component: item_detail_component_1.ItemDetailComponent
    },
    {
        path: "registration",
        component: registration_component_1.RegistrationComponent
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFHdkUsMERBQXdEO0FBQ3hELHNFQUFtRTtBQUNuRSxnRkFBOEU7QUFFOUUsSUFBTSxNQUFNLEdBQVc7SUFDbkI7UUFDQSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxlQUFlO1FBQ3JDLFNBQVMsRUFBRSxNQUFNO0tBQ2xCO0lBQ0M7UUFDRyxJQUFJLEVBQUUsT0FBTztRQUNiLFNBQVMsRUFBRSxnQ0FBYztLQUMxQjtJQUNGO1FBQ0UsSUFBSSxFQUFFLFVBQVU7UUFDaEIsU0FBUyxFQUFFLDJDQUFtQjtLQUMvQjtJQUNEO1FBQ0UsSUFBSSxFQUFFLGNBQWM7UUFDcEIsU0FBUyxFQUFFLDhDQUFxQjtLQUNqQztDQUNKLENBQUM7QUFNRjtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBSjVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgSXRlbXNDb21wb25lbnQgfSBmcm9tIFwiLi9pdGVtL2l0ZW1zLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSXRlbURldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0vaXRlbS1kZXRhaWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBSZWdpc3RyYXRpb25Db21wb25lbnQgfSBmcm9tIFwiLi9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudFwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7XG4gICAgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvcmVnaXN0cmF0aW9uXCIsIFxuICAgIHBhdGhNYXRjaDogXCJmdWxsXCJcbiAgfSxcbiAgICB7XG4gICAgICAgcGF0aDogXCJpdGVtc1wiLFxuICAgICAgIGNvbXBvbmVudDogSXRlbXNDb21wb25lbnRcbiAgICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiBcIml0ZW0vOmlkXCIsXG4gICAgICBjb21wb25lbnQ6IEl0ZW1EZXRhaWxDb21wb25lbnRcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6IFwicmVnaXN0cmF0aW9uXCIsXG4gICAgICBjb21wb25lbnQ6IFJlZ2lzdHJhdGlvbkNvbXBvbmVudFxuICAgIH0sXG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxuIl19