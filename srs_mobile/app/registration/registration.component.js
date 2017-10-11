"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var switchModule = require("tns-core-modules/ui/switch");
var utilities_1 = require("../utilities/utilities");
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
        if (!utilities_1.isValidEmail(this.email)) {
            alert("Please enter a valid email");
        }
        if (!utilities_1.isValidPassword(this.password, this.confirmPassword)) {
            alert("Valid password!");
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0cmF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlZ2lzdHJhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQseURBQTJEO0FBQzNELG9EQUF1RTtBQVF2RTtJQVVFO1FBVFEscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsYUFBUSxHQUFZLElBQUksQ0FBQztJQU9qQixDQUFDO0lBRWpCLHdDQUFRLEdBQVI7UUFFRSxJQUFJLFFBQVEsR0FBRyxJQUFJLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBRUQscURBQXFCLEdBQXJCLFVBQXNCLFFBQWdCO1FBQ3BDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVELDBDQUFVLEdBQVY7UUFDRSxFQUFFLENBQUEsQ0FBQyxDQUFDLHdCQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUM1QixLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUN0QyxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsQ0FBQywyQkFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUN6RCxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUMzQixDQUFDO1FBQ0QsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxTQUFTLENBQUMsQ0FBQSxDQUFDO1lBQzlCLHNDQUFzQztRQUN4QyxDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssWUFBWSxDQUFDLENBQUEsQ0FBQztZQUN6Qyx5Q0FBeUM7UUFDM0MsQ0FBQztRQUNELCtCQUErQjtJQUNqQyxDQUFDO0lBRUQsMENBQVUsR0FBVixVQUFXLGFBQXNCO1FBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsYUFBYSxDQUFDO0lBQ2hDLENBQUM7SUF2Q1UscUJBQXFCO1FBTmpDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixXQUFXLEVBQUUsK0JBQStCO1lBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO1NBQzVDLENBQUM7O09BQ1cscUJBQXFCLENBeUNqQztJQUFELDRCQUFDO0NBQUEsQUF6Q0QsSUF5Q0M7QUF6Q1ksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIHN3aXRjaE1vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zd2l0Y2hcIjtcbmltcG9ydCB7IGlzVmFsaWRQYXNzd29yZCwgaXNWYWxpZEVtYWlsIH0gZnJvbSBcIi4uL3V0aWxpdGllcy91dGlsaXRpZXNcIjtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnbnMtcmVnaXN0cmF0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUmVnaXN0cmF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBpbnN0cnVjdG9yU3RhdHVzID0gZmFsc2U7XG4gIHByaXZhdGUgc2hvd0Zvcm0gPSBmYWxzZTtcbiAgcHJpdmF0ZSBpZGVudGl0eSA6IHN0cmluZyA9IG51bGw7XG4gIHByaXZhdGUgZW1haWw6IHN0cmluZztcbiAgcHJpdmF0ZSBkaXNwbGF5TmFtZTogc3RyaW5nO1xuICBwcml2YXRlIGZ1bGxOYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgcGFzc3dvcmQ6IHN0cmluZztcbiAgcHJpdmF0ZSBjb25maXJtUGFzc3dvcmQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgbGV0IG15U3dpdGNoID0gbmV3IHN3aXRjaE1vZHVsZS5Td2l0Y2goKTtcbiAgfVxuXG4gIHNldFJlZ2lzdHJhbnRJZGVudGl0eShpZGVudGl0eTogc3RyaW5nKXtcbiAgICB0aGlzLmlkZW50aXR5ID0gaWRlbnRpdHk7XG4gICAgdGhpcy5yZXZlYWxGb3JtKHRydWUpO1xuICB9XG5cbiAgY3JlYXRlVXNlcigpe1xuICAgIGlmKCFpc1ZhbGlkRW1haWwodGhpcy5lbWFpbCkpe1xuICAgICAgYWxlcnQoXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbFwiKTtcbiAgICB9XG4gICAgaWYgKCFpc1ZhbGlkUGFzc3dvcmQodGhpcy5wYXNzd29yZCwgdGhpcy5jb25maXJtUGFzc3dvcmQpKXtcbiAgICAgIGFsZXJ0KFwiVmFsaWQgcGFzc3dvcmQhXCIpO1xuICAgIH1cbiAgICBpZih0aGlzLmlkZW50aXR5ID09PSBcInN0dWRlbnRcIil7XG4gICAgICAvLyB1c2VyID0gbmV3IFN0dWRlbnQocDEsIHAyLCBwMy4uLi4pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5pZGVudGl0eSA9PT0gXCJpbnN0cnVjdG9yXCIpe1xuICAgICAgLy8gdWVyID0gbmV3IEluc3RydWN0b3IocDEscDIscDMsIHA0LHA1KTtcbiAgICB9XG4gICAgLy9PUiB1c2VyID0gbmV3IFVzZXIocDEscDIscDMpO1xuICB9XG5cbiAgcmV2ZWFsRm9ybShib29sZWFuU3RhdHVzOiBib29sZWFuKXtcbiAgICB0aGlzLnNob3dGb3JtID0gYm9vbGVhblN0YXR1cztcbiAgfVxuXG59XG5cblxuIl19