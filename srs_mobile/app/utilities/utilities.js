"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidEmail = function (candidate) {
    var emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
    var valid = emailRegEx.test(candidate);
    return valid;
};
exports.isValidPassword = function (password, confirmPassword) {
    return password === confirmPassword && password != null && confirmPassword != null && password.length > 7 && confirmPassword.length > 7;
};
exports.isValidDisplayName = function (displayName) {
    return displayName.length > 0; //TODO add more validation here
};
exports.isValidFullName = function (fullName) {
    return fullName.length > 0; //TODO flesh out as above
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0aWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXRpbGl0aWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ1csUUFBQSxZQUFZLEdBQUcsVUFBUyxTQUFnQjtJQUNqRCxJQUFJLFVBQVUsR0FBRyx5SkFBeUosQ0FBQztJQUMzSyxJQUFJLEtBQUssR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQyxLQUFLLENBQUM7QUFDZixDQUFDLENBQUE7QUFHVSxRQUFBLGVBQWUsR0FBRyxVQUFVLFFBQWdCLEVBQUUsZUFBdUI7SUFDOUUsTUFBTSxDQUFDLFFBQVEsS0FBSyxlQUFlLElBQUksUUFBUSxJQUFJLElBQUksSUFBSSxlQUFlLElBQUksSUFBSSxJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUUsQ0FBQyxJQUFJLGVBQWUsQ0FBQyxNQUFNLEdBQUUsQ0FBQyxDQUFDO0FBQ3hJLENBQUMsQ0FBQTtBQUVVLFFBQUEsa0JBQWtCLEdBQUcsVUFBUyxXQUFtQjtJQUMxRCxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQywrQkFBK0I7QUFDaEUsQ0FBQyxDQUFBO0FBRVUsUUFBQSxlQUFlLEdBQUcsVUFBUyxRQUFnQjtJQUNwRCxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRSxDQUFDLENBQUMsQ0FBQyx5QkFBeUI7QUFDdEQsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgbGV0IGlzVmFsaWRFbWFpbCA9IGZ1bmN0aW9uKGNhbmRpZGF0ZTpzdHJpbmcpIHtcbiAgbGV0IGVtYWlsUmVnRXggPSAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkL2k7XG4gIGxldCB2YWxpZCA9IGVtYWlsUmVnRXgudGVzdChjYW5kaWRhdGUpO1xuICByZXR1cm4gdmFsaWQ7XG59XG5cblxuZXhwb3J0IGxldCBpc1ZhbGlkUGFzc3dvcmQgPSBmdW5jdGlvbiAocGFzc3dvcmQ6IHN0cmluZywgY29uZmlybVBhc3N3b3JkOiBzdHJpbmcpe1xuICByZXR1cm4gcGFzc3dvcmQgPT09IGNvbmZpcm1QYXNzd29yZCAmJiBwYXNzd29yZCAhPSBudWxsICYmIGNvbmZpcm1QYXNzd29yZCAhPSBudWxsICYmIHBhc3N3b3JkLmxlbmd0aCA+NyAmJiBjb25maXJtUGFzc3dvcmQubGVuZ3RoID43O1xufVxuXG5leHBvcnQgbGV0IGlzVmFsaWREaXNwbGF5TmFtZSA9IGZ1bmN0aW9uKGRpc3BsYXlOYW1lOiBzdHJpbmcpe1xuICByZXR1cm4gZGlzcGxheU5hbWUubGVuZ3RoID4gMDsgLy9UT0RPIGFkZCBtb3JlIHZhbGlkYXRpb24gaGVyZVxufVxuXG5leHBvcnQgbGV0IGlzVmFsaWRGdWxsTmFtZSA9IGZ1bmN0aW9uKGZ1bGxOYW1lOiBzdHJpbmcpe1xuICByZXR1cm4gZnVsbE5hbWUubGVuZ3RoID4wOyAvL1RPRE8gZmxlc2ggb3V0IGFzIGFib3ZlXG59XG5cblxuIl19