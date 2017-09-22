"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var switchModule = require("tns-core-modules/ui/switch");
var RegistrationComponent = (function () {
    function RegistrationComponent() {
        this.instructorStatus = false;
        this.buttonClicked = false;
        this.identity = null;
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        var mySwitch = new switchModule.Switch();
    };
    RegistrationComponent.prototype.setRegistrantIdentity = function (identity) {
        this.identity = identity;
        console.log("Identity is " + identity);
        this.buttonClicked = true;
        alert("Identity is " + identity);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0cmF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlZ2lzdHJhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQseURBQTJEO0FBUTNEO0lBS0U7UUFKQSxxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDekIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDdEIsYUFBUSxHQUFZLElBQUksQ0FBQztJQUVULENBQUM7SUFFakIsd0NBQVEsR0FBUjtRQUVFLElBQUksUUFBUSxHQUFHLElBQUksWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFFRCxxREFBcUIsR0FBckIsVUFBc0IsUUFBZ0I7UUFDcEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsS0FBSyxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsMENBQVUsR0FBVjtRQUNFLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssU0FBUyxDQUFDLENBQUEsQ0FBQztZQUM5QixzQ0FBc0M7UUFDeEMsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLFlBQVksQ0FBQyxDQUFBLENBQUM7WUFDekMseUNBQXlDO1FBQzNDLENBQUM7UUFDRCwrQkFBK0I7SUFDakMsQ0FBQztJQTFCVSxxQkFBcUI7UUFOakMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFdBQVcsRUFBRSwrQkFBK0I7WUFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7U0FDNUMsQ0FBQzs7T0FDVyxxQkFBcUIsQ0E0QmpDO0lBQUQsNEJBQUM7Q0FBQSxBQTVCRCxJQTRCQztBQTVCWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgc3dpdGNoTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N3aXRjaFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICducy1yZWdpc3RyYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBSZWdpc3RyYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBpbnN0cnVjdG9yU3RhdHVzID0gZmFsc2U7XG4gIGJ1dHRvbkNsaWNrZWQgPSBmYWxzZTtcbiAgaWRlbnRpdHkgOiBzdHJpbmcgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgICBsZXQgbXlTd2l0Y2ggPSBuZXcgc3dpdGNoTW9kdWxlLlN3aXRjaCgpO1xuICB9XG5cbiAgc2V0UmVnaXN0cmFudElkZW50aXR5KGlkZW50aXR5OiBzdHJpbmcpe1xuICAgIHRoaXMuaWRlbnRpdHkgPSBpZGVudGl0eTtcbiAgICBjb25zb2xlLmxvZyhcIklkZW50aXR5IGlzIFwiICsgaWRlbnRpdHkpO1xuICAgIHRoaXMuYnV0dG9uQ2xpY2tlZCA9IHRydWU7XG4gICAgYWxlcnQoXCJJZGVudGl0eSBpcyBcIiArIGlkZW50aXR5KTtcbiAgfVxuXG4gIGNyZWF0ZVVzZXIoKXtcbiAgICBpZih0aGlzLmlkZW50aXR5ID09PSBcInN0dWRlbnRcIil7XG4gICAgICAvLyB1c2VyID0gbmV3IFN0dWRlbnQocDEsIHAyLCBwMy4uLi4pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5pZGVudGl0eSA9PT0gXCJpbnN0cnVjdG9yXCIpe1xuICAgICAgLy8gdWVyID0gbmV3IEluc3RydWN0b3IocDEscDIscDMsIHA0LHA1KTtcbiAgICB9XG4gICAgLy9PUiB1c2VyID0gbmV3IFVzZXIocDEscDIscDMpO1xuICB9XG5cbn1cbiJdfQ==