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
        if (utilities_1.isValidEmail(this.email)) {
            alert("Valid email");
        }
        if (utilities_1.isSamePassword(this.password, this.confirmPassword)) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0cmF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlZ2lzdHJhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQseURBQTJEO0FBQzNELG9EQUFzRTtBQVF0RTtJQVVFO1FBVFEscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsYUFBUSxHQUFZLElBQUksQ0FBQztJQU9qQixDQUFDO0lBRWpCLHdDQUFRLEdBQVI7UUFFRSxJQUFJLFFBQVEsR0FBRyxJQUFJLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBRUQscURBQXFCLEdBQXJCLFVBQXNCLFFBQWdCO1FBQ3BDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVELDBDQUFVLEdBQVY7UUFDRSxFQUFFLENBQUEsQ0FBQyx3QkFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDM0IsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3ZCLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQywwQkFBYyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUN2RCxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUMzQixDQUFDO1FBQ0QsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxTQUFTLENBQUMsQ0FBQSxDQUFDO1lBQzlCLHNDQUFzQztRQUN4QyxDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssWUFBWSxDQUFDLENBQUEsQ0FBQztZQUN6Qyx5Q0FBeUM7UUFDM0MsQ0FBQztRQUNELCtCQUErQjtJQUNqQyxDQUFDO0lBRUQsMENBQVUsR0FBVixVQUFXLGFBQXNCO1FBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsYUFBYSxDQUFDO0lBQ2hDLENBQUM7SUF2Q1UscUJBQXFCO1FBTmpDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixXQUFXLEVBQUUsK0JBQStCO1lBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO1NBQzVDLENBQUM7O09BQ1cscUJBQXFCLENBeUNqQztJQUFELDRCQUFDO0NBQUEsQUF6Q0QsSUF5Q0M7QUF6Q1ksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIHN3aXRjaE1vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zd2l0Y2hcIjtcbmltcG9ydCB7IGlzU2FtZVBhc3N3b3JkLCBpc1ZhbGlkRW1haWwgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3V0aWxpdGllc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICducy1yZWdpc3RyYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBSZWdpc3RyYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIGluc3RydWN0b3JTdGF0dXMgPSBmYWxzZTtcbiAgcHJpdmF0ZSBzaG93Rm9ybSA9IGZhbHNlO1xuICBwcml2YXRlIGlkZW50aXR5IDogc3RyaW5nID0gbnVsbDtcbiAgcHJpdmF0ZSBlbWFpbDogc3RyaW5nO1xuICBwcml2YXRlIGRpc3BsYXlOYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgZnVsbE5hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBwYXNzd29yZDogc3RyaW5nO1xuICBwcml2YXRlIGNvbmZpcm1QYXNzd29yZDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgICBsZXQgbXlTd2l0Y2ggPSBuZXcgc3dpdGNoTW9kdWxlLlN3aXRjaCgpO1xuICB9XG5cbiAgc2V0UmVnaXN0cmFudElkZW50aXR5KGlkZW50aXR5OiBzdHJpbmcpe1xuICAgIHRoaXMuaWRlbnRpdHkgPSBpZGVudGl0eTtcbiAgICB0aGlzLnJldmVhbEZvcm0odHJ1ZSk7XG4gIH1cblxuICBjcmVhdGVVc2VyKCl7XG4gICAgaWYoaXNWYWxpZEVtYWlsKHRoaXMuZW1haWwpKXtcbiAgICAgIGFsZXJ0KFwiVmFsaWQgZW1haWxcIik7XG4gICAgfVxuICAgIGlmIChpc1NhbWVQYXNzd29yZCh0aGlzLnBhc3N3b3JkLCB0aGlzLmNvbmZpcm1QYXNzd29yZCkpe1xuICAgICAgYWxlcnQoXCJWYWxpZCBwYXNzd29yZCFcIik7XG4gICAgfVxuICAgIGlmKHRoaXMuaWRlbnRpdHkgPT09IFwic3R1ZGVudFwiKXtcbiAgICAgIC8vIHVzZXIgPSBuZXcgU3R1ZGVudChwMSwgcDIsIHAzLi4uLik7XG4gICAgfSBlbHNlIGlmICh0aGlzLmlkZW50aXR5ID09PSBcImluc3RydWN0b3JcIil7XG4gICAgICAvLyB1ZXIgPSBuZXcgSW5zdHJ1Y3RvcihwMSxwMixwMywgcDQscDUpO1xuICAgIH1cbiAgICAvL09SIHVzZXIgPSBuZXcgVXNlcihwMSxwMixwMyk7XG4gIH1cblxuICByZXZlYWxGb3JtKGJvb2xlYW5TdGF0dXM6IGJvb2xlYW4pe1xuICAgIHRoaXMuc2hvd0Zvcm0gPSBib29sZWFuU3RhdHVzO1xuICB9XG5cbn1cbiJdfQ==