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
        this.email = "testing@testing";
        this.tempString = "Not valid right now";
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        var mySwitch = new switchModule.Switch();
    };
    RegistrationComponent.prototype.updateInputStatus = function () {
        if (utilities_1.isValidEmail(this.email)) {
            this.tempString = "Valid email!";
            return this.tempString;
        }
        else {
            this.tempString = "still nope";
            return this.tempString;
        }
    };
    RegistrationComponent.prototype.setRegistrantIdentity = function (identity) {
        this.identity = identity;
        this.revealForm(true);
    };
    RegistrationComponent.prototype.createUser = function () {
        // if(isValidEmail(this.email)){
        //   this.tempString = "Valid email!";
        // }
        // if (!isValidPassword(this.password, this.confirmPassword)){
        //   alert("Valid password!");
        // }
        // if(this.identity === "student"){
        //   // user = new Student(p1, p2, p3....);
        // } else if (this.identity === "instructor"){
        //   // uer = new Instructor(p1,p2,p3, p4,p5);
        // }
        // //OR user = new User(p1,p2,p3);
    };
    RegistrationComponent.prototype.revealForm = function (booleanStatus) {
        console.log("email is: " + this.email);
        this.showForm = booleanStatus;
    };
    RegistrationComponent.prototype.inputsValid = function () {
        return true;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0cmF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlZ2lzdHJhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQseURBQTJEO0FBQzNELG9EQUF1RTtBQVF2RTtJQVdFO1FBVlEscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsYUFBUSxHQUFZLElBQUksQ0FBQztRQUN6QixVQUFLLEdBQVcsaUJBQWlCLENBQUM7UUFLbEMsZUFBVSxHQUFXLHFCQUFxQixDQUFDO0lBRW5DLENBQUM7SUFJakIsd0NBQVEsR0FBUjtRQUVFLElBQUksUUFBUSxHQUFHLElBQUksWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFFRCxpREFBaUIsR0FBakI7UUFDRSxFQUFFLENBQUEsQ0FBQyx3QkFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxjQUFjLENBQUM7WUFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDekIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLFVBQVUsR0FBRyxZQUFZLENBQUM7WUFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDekIsQ0FBQztJQUNILENBQUM7SUFFRCxxREFBcUIsR0FBckIsVUFBc0IsUUFBZ0I7UUFDcEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQsMENBQVUsR0FBVjtRQUNFLGdDQUFnQztRQUNoQyxzQ0FBc0M7UUFDdEMsSUFBSTtRQUNKLDhEQUE4RDtRQUM5RCw4QkFBOEI7UUFDOUIsSUFBSTtRQUNKLG1DQUFtQztRQUNuQywyQ0FBMkM7UUFDM0MsOENBQThDO1FBQzlDLDhDQUE4QztRQUM5QyxJQUFJO1FBQ0osa0NBQWtDO0lBQ3BDLENBQUM7SUFFRCwwQ0FBVSxHQUFWLFVBQVcsYUFBc0I7UUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLEdBQUcsYUFBYSxDQUFDO0lBQ2hDLENBQUM7SUFFRCwyQ0FBVyxHQUFYO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUF6RFUscUJBQXFCO1FBTmpDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixXQUFXLEVBQUUsK0JBQStCO1lBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO1NBQzVDLENBQUM7O09BQ1cscUJBQXFCLENBMkRqQztJQUFELDRCQUFDO0NBQUEsQUEzREQsSUEyREM7QUEzRFksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIHN3aXRjaE1vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zd2l0Y2hcIjtcbmltcG9ydCB7IGlzVmFsaWRQYXNzd29yZCwgaXNWYWxpZEVtYWlsIH0gZnJvbSBcIi4uL3V0aWxpdGllcy91dGlsaXRpZXNcIjtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnbnMtcmVnaXN0cmF0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUmVnaXN0cmF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBpbnN0cnVjdG9yU3RhdHVzID0gZmFsc2U7XG4gIHByaXZhdGUgc2hvd0Zvcm0gPSBmYWxzZTtcbiAgcHJpdmF0ZSBpZGVudGl0eSA6IHN0cmluZyA9IG51bGw7XG4gIHByaXZhdGUgZW1haWw6IHN0cmluZyA9IFwidGVzdGluZ0B0ZXN0aW5nXCI7XG4gIHByaXZhdGUgZGlzcGxheU5hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBmdWxsTmFtZTogc3RyaW5nO1xuICBwcml2YXRlIHBhc3N3b3JkOiBzdHJpbmc7XG4gIHByaXZhdGUgY29uZmlybVBhc3N3b3JkOiBzdHJpbmc7XG4gIHByaXZhdGUgdGVtcFN0cmluZzogc3RyaW5nID0gXCJOb3QgdmFsaWQgcmlnaHQgbm93XCI7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBcblxuICBuZ09uSW5pdCgpIHtcblxuICAgIGxldCBteVN3aXRjaCA9IG5ldyBzd2l0Y2hNb2R1bGUuU3dpdGNoKCk7ICBcbiAgfVxuXG4gIHVwZGF0ZUlucHV0U3RhdHVzKCl7XG4gICAgaWYoaXNWYWxpZEVtYWlsKHRoaXMuZW1haWwpKXtcbiAgICAgIHRoaXMudGVtcFN0cmluZyA9IFwiVmFsaWQgZW1haWwhXCI7XG4gICAgICByZXR1cm4gdGhpcy50ZW1wU3RyaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRlbXBTdHJpbmcgPSBcInN0aWxsIG5vcGVcIjtcbiAgICAgIHJldHVybiB0aGlzLnRlbXBTdHJpbmc7XG4gICAgfVxuICB9XG5cbiAgc2V0UmVnaXN0cmFudElkZW50aXR5KGlkZW50aXR5OiBzdHJpbmcpe1xuICAgIHRoaXMuaWRlbnRpdHkgPSBpZGVudGl0eTtcbiAgICB0aGlzLnJldmVhbEZvcm0odHJ1ZSk7XG4gIH1cblxuICBjcmVhdGVVc2VyKCl7XG4gICAgLy8gaWYoaXNWYWxpZEVtYWlsKHRoaXMuZW1haWwpKXtcbiAgICAvLyAgIHRoaXMudGVtcFN0cmluZyA9IFwiVmFsaWQgZW1haWwhXCI7XG4gICAgLy8gfVxuICAgIC8vIGlmICghaXNWYWxpZFBhc3N3b3JkKHRoaXMucGFzc3dvcmQsIHRoaXMuY29uZmlybVBhc3N3b3JkKSl7XG4gICAgLy8gICBhbGVydChcIlZhbGlkIHBhc3N3b3JkIVwiKTtcbiAgICAvLyB9XG4gICAgLy8gaWYodGhpcy5pZGVudGl0eSA9PT0gXCJzdHVkZW50XCIpe1xuICAgIC8vICAgLy8gdXNlciA9IG5ldyBTdHVkZW50KHAxLCBwMiwgcDMuLi4uKTtcbiAgICAvLyB9IGVsc2UgaWYgKHRoaXMuaWRlbnRpdHkgPT09IFwiaW5zdHJ1Y3RvclwiKXtcbiAgICAvLyAgIC8vIHVlciA9IG5ldyBJbnN0cnVjdG9yKHAxLHAyLHAzLCBwNCxwNSk7XG4gICAgLy8gfVxuICAgIC8vIC8vT1IgdXNlciA9IG5ldyBVc2VyKHAxLHAyLHAzKTtcbiAgfVxuXG4gIHJldmVhbEZvcm0oYm9vbGVhblN0YXR1czogYm9vbGVhbil7XG4gICAgY29uc29sZS5sb2coXCJlbWFpbCBpczogXCIgKyB0aGlzLmVtYWlsKTtcbiAgICB0aGlzLnNob3dGb3JtID0gYm9vbGVhblN0YXR1cztcbiAgfVxuXG4gIGlucHV0c1ZhbGlkKCl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxufVxuXG5cbiJdfQ==