"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = (function () {
    function User(displayName) {
        this.displayName = displayName;
    }
    User.prototype.getName = function () {
        return this.displayName;
    };
    return User;
}());
exports.User = User;
var Student = (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Student;
}(User));
exports.Student = Student;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWwudXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1vZGVsLnVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQU9FLGNBQVksV0FBbUI7UUFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDakMsQ0FBQztJQUVELHNCQUFPLEdBQVA7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBQ0gsV0FBQztBQUFELENBQUMsQUFkRCxJQWNDO0FBZFksb0JBQUk7QUFpQmpCO0lBQTZCLDJCQUFJO0lBQWpDOztJQUVBLENBQUM7SUFBRCxjQUFDO0FBQUQsQ0FBQyxBQUZELENBQTZCLElBQUksR0FFaEM7QUFGWSwwQkFBTyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBVc2Vye1xuICBlbWFpbEFkZHJlc3M6IHN0cmluZztcbiAgcGFzc3dvcmQ6IHN0cmluZztcbiAgaWQ6IHN0cmluZztcbiAgZGlzcGxheU5hbWU6IHN0cmluZztcbiAgaWRlbnRpdHk6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihkaXNwbGF5TmFtZTogc3RyaW5nKXtcbiAgICB0aGlzLmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWU7XG4gIH1cblxuICBnZXROYW1lKCl7XG4gICAgcmV0dXJuIHRoaXMuZGlzcGxheU5hbWU7XG4gIH1cbn1cblxuXG5leHBvcnQgY2xhc3MgU3R1ZGVudCBleHRlbmRzIFVzZXJ7XG4gIC8vZS5nLiwgZW5yb2xsZWRDbGFzc2VzLi4uXG59XG4iXX0=