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
        this.email = "chance@gmail.com";
        this.emailValidationString = "Not a valid email address";
        this.passwordValidationString = "Passwords don't match";
        this.displayNameValdiationString = "Display name is invalid";
        this.fullNameValidationString = "Full name is invalid";
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        var mySwitch = new switchModule.Switch();
    };
    RegistrationComponent.prototype.updateEmailInputStatus = function () {
        if (utilities_1.isValidEmail(this.email)) {
            this.emailValidationString = "Valid email!";
            return this.emailValidationString;
        }
        else {
            this.emailValidationString = "Not a valid email address";
            return this.emailValidationString;
        }
    };
    RegistrationComponent.prototype.updatePasswordInputStatus = function () {
        if (utilities_1.isValidPassword(this.password, this.confirmPassword)) {
            this.passwordValidationString = "Passwords match";
            return this.passwordValidationString;
        }
        else {
            this.passwordValidationString = "Passwords don't match";
            return this.passwordValidationString;
        }
    };
    RegistrationComponent.prototype.updateDisplayNameInputStatus = function () {
        if (utilities_1.isValidDisplayName(this.displayName)) {
            this.displayNameValdiationString = "Valid display name";
            return this.displayNameValdiationString;
        }
        else {
            this.displayNameValdiationString = "Display name is invalid";
            return this.displayNameValdiationString;
        }
    };
    RegistrationComponent.prototype.updateFullNameInputStatus = function () {
        if (utilities_1.isValidFullName(this.fullName)) {
            this.fullNameValidationString = "Valid full name";
            return this.fullNameValidationString;
        }
        else {
            this.fullNameValidationString = "Invalid full name";
            return this.fullNameValidationString;
        }
    };
    RegistrationComponent.prototype.setRegistrantIdentity = function (identity) {
        this.identity = identity;
        this.revealForm(true);
    };
    RegistrationComponent.prototype.isDirty = function (formInput) {
        if (formInput.length > 0) {
            return true;
        }
        else {
            return false;
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0cmF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlZ2lzdHJhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQseURBQTJEO0FBQzNELG9EQUE0RztBQVE1RztJQWNFO1FBYlEscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsYUFBUSxHQUFZLElBQUksQ0FBQztRQUN6QixVQUFLLEdBQVcsa0JBQWtCLENBQUM7UUFLbkMsMEJBQXFCLEdBQVcsMkJBQTJCLENBQUM7UUFDNUQsNkJBQXdCLEdBQVcsdUJBQXVCLENBQUM7UUFDM0QsZ0NBQTJCLEdBQVcseUJBQXlCLENBQUM7UUFDaEUsNkJBQXdCLEdBQVcsc0JBQXNCLENBQUM7SUFFbEQsQ0FBQztJQUlqQix3Q0FBUSxHQUFSO1FBRUUsSUFBSSxRQUFRLEdBQUcsSUFBSSxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUVELHNEQUFzQixHQUF0QjtRQUNFLEVBQUUsQ0FBQSxDQUFDLHdCQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUMzQixJQUFJLENBQUMscUJBQXFCLEdBQUcsY0FBYyxDQUFDO1lBQzVDLE1BQU0sQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUM7UUFDcEMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLHFCQUFxQixHQUFHLDJCQUEyQixDQUFDO1lBQ3pELE1BQU0sQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUM7UUFDcEMsQ0FBQztJQUNILENBQUM7SUFFRCx5REFBeUIsR0FBekI7UUFDRSxFQUFFLENBQUEsQ0FBQywyQkFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUN2RCxJQUFJLENBQUMsd0JBQXdCLEdBQUcsaUJBQWlCLENBQUM7WUFDbEQsTUFBTSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQztRQUN2QyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsd0JBQXdCLEdBQUcsdUJBQXVCLENBQUM7WUFDeEQsTUFBTSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQztRQUN2QyxDQUFDO0lBQ0gsQ0FBQztJQUVELDREQUE0QixHQUE1QjtRQUNFLEVBQUUsQ0FBQSxDQUFDLDhCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDdkMsSUFBSSxDQUFDLDJCQUEyQixHQUFHLG9CQUFvQixDQUFDO1lBQ3hELE1BQU0sQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUM7UUFDMUMsQ0FBQztRQUFDLElBQUksQ0FBQSxDQUFDO1lBQ0wsSUFBSSxDQUFDLDJCQUEyQixHQUFHLHlCQUF5QixDQUFDO1lBQzdELE1BQU0sQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUM7UUFDMUMsQ0FBQztJQUNILENBQUM7SUFFRCx5REFBeUIsR0FBekI7UUFDRSxFQUFFLENBQUEsQ0FBQywyQkFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDakMsSUFBSSxDQUFDLHdCQUF3QixHQUFHLGlCQUFpQixDQUFDO1lBQ2xELE1BQU0sQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUM7UUFDdkMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLHdCQUF3QixHQUFHLG1CQUFtQixDQUFDO1lBQ3BELE1BQU0sQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUM7UUFDdkMsQ0FBQztJQUNILENBQUM7SUFFRCxxREFBcUIsR0FBckIsVUFBc0IsUUFBZ0I7UUFDcEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQsdUNBQU8sR0FBUCxVQUFRLFNBQWlCO1FBQ3ZCLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2QsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNmLENBQUM7SUFDSCxDQUFDO0lBR0QsMENBQVUsR0FBVjtRQUNFLGdDQUFnQztRQUNoQyxzQ0FBc0M7UUFDdEMsSUFBSTtRQUNKLDhEQUE4RDtRQUM5RCw4QkFBOEI7UUFDOUIsSUFBSTtRQUNKLG1DQUFtQztRQUNuQywyQ0FBMkM7UUFDM0MsOENBQThDO1FBQzlDLDhDQUE4QztRQUM5QyxJQUFJO1FBQ0osa0NBQWtDO0lBQ3BDLENBQUM7SUFFRCwwQ0FBVSxHQUFWLFVBQVcsYUFBc0I7UUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLEdBQUcsYUFBYSxDQUFDO0lBQ2hDLENBQUM7SUFFRCwyQ0FBVyxHQUFYO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFuR1UscUJBQXFCO1FBTmpDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixXQUFXLEVBQUUsK0JBQStCO1lBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO1NBQzVDLENBQUM7O09BQ1cscUJBQXFCLENBcUdqQztJQUFELDRCQUFDO0NBQUEsQUFyR0QsSUFxR0M7QUFyR1ksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIHN3aXRjaE1vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zd2l0Y2hcIjtcbmltcG9ydCB7IGlzVmFsaWRQYXNzd29yZCwgaXNWYWxpZEVtYWlsLCBpc1ZhbGlkRGlzcGxheU5hbWUsIGlzVmFsaWRGdWxsTmFtZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvdXRpbGl0aWVzXCI7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ25zLXJlZ2lzdHJhdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZWdpc3RyYXRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFJlZ2lzdHJhdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgaW5zdHJ1Y3RvclN0YXR1cyA9IGZhbHNlO1xuICBwcml2YXRlIHNob3dGb3JtID0gZmFsc2U7XG4gIHByaXZhdGUgaWRlbnRpdHkgOiBzdHJpbmcgPSBudWxsO1xuICBwcml2YXRlIGVtYWlsOiBzdHJpbmcgPSBcImNoYW5jZUBnbWFpbC5jb21cIjtcbiAgcHJpdmF0ZSBkaXNwbGF5TmFtZTogc3RyaW5nO1xuICBwcml2YXRlIGZ1bGxOYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgcGFzc3dvcmQ6IHN0cmluZztcbiAgcHJpdmF0ZSBjb25maXJtUGFzc3dvcmQ6IHN0cmluZztcbiAgcHJpdmF0ZSBlbWFpbFZhbGlkYXRpb25TdHJpbmc6IHN0cmluZyA9IFwiTm90IGEgdmFsaWQgZW1haWwgYWRkcmVzc1wiO1xuICBwcml2YXRlIHBhc3N3b3JkVmFsaWRhdGlvblN0cmluZzogc3RyaW5nID0gXCJQYXNzd29yZHMgZG9uJ3QgbWF0Y2hcIjtcbiAgcHJpdmF0ZSBkaXNwbGF5TmFtZVZhbGRpYXRpb25TdHJpbmc6IHN0cmluZyA9IFwiRGlzcGxheSBuYW1lIGlzIGludmFsaWRcIjtcbiAgcHJpdmF0ZSBmdWxsTmFtZVZhbGlkYXRpb25TdHJpbmc6IHN0cmluZyA9IFwiRnVsbCBuYW1lIGlzIGludmFsaWRcIjtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIFxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgbGV0IG15U3dpdGNoID0gbmV3IHN3aXRjaE1vZHVsZS5Td2l0Y2goKTsgIFxuICB9XG5cbiAgdXBkYXRlRW1haWxJbnB1dFN0YXR1cygpe1xuICAgIGlmKGlzVmFsaWRFbWFpbCh0aGlzLmVtYWlsKSl7XG4gICAgICB0aGlzLmVtYWlsVmFsaWRhdGlvblN0cmluZyA9IFwiVmFsaWQgZW1haWwhXCI7XG4gICAgICByZXR1cm4gdGhpcy5lbWFpbFZhbGlkYXRpb25TdHJpbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZW1haWxWYWxpZGF0aW9uU3RyaW5nID0gXCJOb3QgYSB2YWxpZCBlbWFpbCBhZGRyZXNzXCI7XG4gICAgICByZXR1cm4gdGhpcy5lbWFpbFZhbGlkYXRpb25TdHJpbmc7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlUGFzc3dvcmRJbnB1dFN0YXR1cygpe1xuICAgIGlmKGlzVmFsaWRQYXNzd29yZCh0aGlzLnBhc3N3b3JkLCB0aGlzLmNvbmZpcm1QYXNzd29yZCkpe1xuICAgICAgdGhpcy5wYXNzd29yZFZhbGlkYXRpb25TdHJpbmcgPSBcIlBhc3N3b3JkcyBtYXRjaFwiO1xuICAgICAgcmV0dXJuIHRoaXMucGFzc3dvcmRWYWxpZGF0aW9uU3RyaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBhc3N3b3JkVmFsaWRhdGlvblN0cmluZyA9IFwiUGFzc3dvcmRzIGRvbid0IG1hdGNoXCI7XG4gICAgICByZXR1cm4gdGhpcy5wYXNzd29yZFZhbGlkYXRpb25TdHJpbmc7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlRGlzcGxheU5hbWVJbnB1dFN0YXR1cygpe1xuICAgIGlmKGlzVmFsaWREaXNwbGF5TmFtZSh0aGlzLmRpc3BsYXlOYW1lKSl7XG4gICAgICB0aGlzLmRpc3BsYXlOYW1lVmFsZGlhdGlvblN0cmluZyA9IFwiVmFsaWQgZGlzcGxheSBuYW1lXCI7XG4gICAgICByZXR1cm4gdGhpcy5kaXNwbGF5TmFtZVZhbGRpYXRpb25TdHJpbmc7XG4gICAgfSBlbHNle1xuICAgICAgdGhpcy5kaXNwbGF5TmFtZVZhbGRpYXRpb25TdHJpbmcgPSBcIkRpc3BsYXkgbmFtZSBpcyBpbnZhbGlkXCI7XG4gICAgICByZXR1cm4gdGhpcy5kaXNwbGF5TmFtZVZhbGRpYXRpb25TdHJpbmc7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlRnVsbE5hbWVJbnB1dFN0YXR1cygpe1xuICAgIGlmKGlzVmFsaWRGdWxsTmFtZSh0aGlzLmZ1bGxOYW1lKSl7XG4gICAgICB0aGlzLmZ1bGxOYW1lVmFsaWRhdGlvblN0cmluZyA9IFwiVmFsaWQgZnVsbCBuYW1lXCI7XG4gICAgICByZXR1cm4gdGhpcy5mdWxsTmFtZVZhbGlkYXRpb25TdHJpbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZnVsbE5hbWVWYWxpZGF0aW9uU3RyaW5nID0gXCJJbnZhbGlkIGZ1bGwgbmFtZVwiO1xuICAgICAgcmV0dXJuIHRoaXMuZnVsbE5hbWVWYWxpZGF0aW9uU3RyaW5nO1xuICAgIH1cbiAgfVxuXG4gIHNldFJlZ2lzdHJhbnRJZGVudGl0eShpZGVudGl0eTogc3RyaW5nKXtcbiAgICB0aGlzLmlkZW50aXR5ID0gaWRlbnRpdHk7XG4gICAgdGhpcy5yZXZlYWxGb3JtKHRydWUpO1xuICB9XG5cbiAgaXNEaXJ0eShmb3JtSW5wdXQ6IHN0cmluZyl7XG4gICAgaWYgKGZvcm1JbnB1dC5sZW5ndGggPiAwKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cblxuICBjcmVhdGVVc2VyKCl7XG4gICAgLy8gaWYoaXNWYWxpZEVtYWlsKHRoaXMuZW1haWwpKXtcbiAgICAvLyAgIHRoaXMudGVtcFN0cmluZyA9IFwiVmFsaWQgZW1haWwhXCI7XG4gICAgLy8gfVxuICAgIC8vIGlmICghaXNWYWxpZFBhc3N3b3JkKHRoaXMucGFzc3dvcmQsIHRoaXMuY29uZmlybVBhc3N3b3JkKSl7XG4gICAgLy8gICBhbGVydChcIlZhbGlkIHBhc3N3b3JkIVwiKTtcbiAgICAvLyB9XG4gICAgLy8gaWYodGhpcy5pZGVudGl0eSA9PT0gXCJzdHVkZW50XCIpe1xuICAgIC8vICAgLy8gdXNlciA9IG5ldyBTdHVkZW50KHAxLCBwMiwgcDMuLi4uKTtcbiAgICAvLyB9IGVsc2UgaWYgKHRoaXMuaWRlbnRpdHkgPT09IFwiaW5zdHJ1Y3RvclwiKXtcbiAgICAvLyAgIC8vIHVlciA9IG5ldyBJbnN0cnVjdG9yKHAxLHAyLHAzLCBwNCxwNSk7XG4gICAgLy8gfVxuICAgIC8vIC8vT1IgdXNlciA9IG5ldyBVc2VyKHAxLHAyLHAzKTtcbiAgfVxuXG4gIHJldmVhbEZvcm0oYm9vbGVhblN0YXR1czogYm9vbGVhbil7XG4gICAgY29uc29sZS5sb2coXCJlbWFpbCBpczogXCIgKyB0aGlzLmVtYWlsKTtcbiAgICB0aGlzLnNob3dGb3JtID0gYm9vbGVhblN0YXR1cztcbiAgfVxuXG4gIGlucHV0c1ZhbGlkKCl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxufVxuXG5cbiJdfQ==