"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var switchModule = require("tns-core-modules/ui/switch");
var RegistrationComponent = (function () {
    function RegistrationComponent() {
        this.instructorStatus = false;
        this.showForm = false;
        this.identity = null;
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        var mySwitch = new switchModule.Switch();
    };
    RegistrationComponent.prototype.setRegistrantIdentity = function (identity) {
        this.identity = identity;
        this.revealForm(true);
    };
    RegistrationComponent.prototype.createUser = function () {
        if (this.identity === "student") {
            // user = new Student(p1, p2, p3....);
        }
        else if (this.identity === "instructor") {
            // uer = new Instructor(p1,p2,p3, p4,p5);
        }
        //OR user = new User(p1,p2,p3);
    };
    RegistrationComponent.prototype.revealForm = function (booleanStatus) {
        this.showForm = booleanStatus;
    };
    RegistrationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ns-registration',
            templateUrl: './registration.component.html',
            styleUrls: ['./registration.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], RegistrationComponent);
    return RegistrationComponent;
}());
exports.RegistrationComponent = RegistrationComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0cmF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlZ2lzdHJhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQseURBQTJEO0FBUTNEO0lBS0U7UUFKUSxxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDekIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixhQUFRLEdBQVksSUFBSSxDQUFDO0lBRWpCLENBQUM7SUFFakIsd0NBQVEsR0FBUjtRQUVFLElBQUksUUFBUSxHQUFHLElBQUksWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFFRCxxREFBcUIsR0FBckIsVUFBc0IsUUFBZ0I7UUFDcEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQsMENBQVUsR0FBVjtRQUNFLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssU0FBUyxDQUFDLENBQUEsQ0FBQztZQUM5QixzQ0FBc0M7UUFDeEMsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLFlBQVksQ0FBQyxDQUFBLENBQUM7WUFDekMseUNBQXlDO1FBQzNDLENBQUM7UUFDRCwrQkFBK0I7SUFDakMsQ0FBQztJQUVELDBDQUFVLEdBQVYsVUFBVyxhQUFzQjtRQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FBQztJQUNoQyxDQUFDO0lBNUJVLHFCQUFxQjtRQU5qQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsV0FBVyxFQUFFLCtCQUErQjtZQUM1QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztTQUM1QyxDQUFDOztPQUNXLHFCQUFxQixDQThCakM7SUFBRCw0QkFBQztDQUFBLEFBOUJELElBOEJDO0FBOUJZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBzd2l0Y2hNb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvc3dpdGNoXCI7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ25zLXJlZ2lzdHJhdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZWdpc3RyYXRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFJlZ2lzdHJhdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgaW5zdHJ1Y3RvclN0YXR1cyA9IGZhbHNlO1xuICBwcml2YXRlIHNob3dGb3JtID0gZmFsc2U7XG4gIHByaXZhdGUgaWRlbnRpdHkgOiBzdHJpbmcgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgICBsZXQgbXlTd2l0Y2ggPSBuZXcgc3dpdGNoTW9kdWxlLlN3aXRjaCgpO1xuICB9XG5cbiAgc2V0UmVnaXN0cmFudElkZW50aXR5KGlkZW50aXR5OiBzdHJpbmcpe1xuICAgIHRoaXMuaWRlbnRpdHkgPSBpZGVudGl0eTtcbiAgICB0aGlzLnJldmVhbEZvcm0odHJ1ZSk7XG4gIH1cblxuICBjcmVhdGVVc2VyKCl7XG4gICAgaWYodGhpcy5pZGVudGl0eSA9PT0gXCJzdHVkZW50XCIpe1xuICAgICAgLy8gdXNlciA9IG5ldyBTdHVkZW50KHAxLCBwMiwgcDMuLi4uKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaWRlbnRpdHkgPT09IFwiaW5zdHJ1Y3RvclwiKXtcbiAgICAgIC8vIHVlciA9IG5ldyBJbnN0cnVjdG9yKHAxLHAyLHAzLCBwNCxwNSk7XG4gICAgfVxuICAgIC8vT1IgdXNlciA9IG5ldyBVc2VyKHAxLHAyLHAzKTtcbiAgfVxuXG4gIHJldmVhbEZvcm0oYm9vbGVhblN0YXR1czogYm9vbGVhbil7XG4gICAgdGhpcy5zaG93Rm9ybSA9IGJvb2xlYW5TdGF0dXM7XG4gIH1cblxufVxuIl19