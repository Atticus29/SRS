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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0aWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXRpbGl0aWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ1csUUFBQSxZQUFZLEdBQUcsVUFBUyxTQUFnQjtJQUNqRCxJQUFJLFVBQVUsR0FBRyx5SkFBeUosQ0FBQztJQUMzSyxJQUFJLEtBQUssR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQyxLQUFLLENBQUM7QUFDZixDQUFDLENBQUE7QUFHVSxRQUFBLGVBQWUsR0FBRyxVQUFVLFFBQWdCLEVBQUUsZUFBdUI7SUFDOUUsTUFBTSxDQUFDLFFBQVEsS0FBSyxlQUFlLElBQUksUUFBUSxJQUFJLElBQUksSUFBSSxlQUFlLElBQUksSUFBSSxJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUUsQ0FBQyxJQUFJLGVBQWUsQ0FBQyxNQUFNLEdBQUUsQ0FBQyxDQUFDO0FBQ3hJLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGxldCBpc1ZhbGlkRW1haWwgPSBmdW5jdGlvbihjYW5kaWRhdGU6c3RyaW5nKSB7XG4gIGxldCBlbWFpbFJlZ0V4ID0gL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC9pO1xuICBsZXQgdmFsaWQgPSBlbWFpbFJlZ0V4LnRlc3QoY2FuZGlkYXRlKTtcbiAgcmV0dXJuIHZhbGlkO1xufVxuXG5cbmV4cG9ydCBsZXQgaXNWYWxpZFBhc3N3b3JkID0gZnVuY3Rpb24gKHBhc3N3b3JkOiBzdHJpbmcsIGNvbmZpcm1QYXNzd29yZDogc3RyaW5nKXtcbiAgcmV0dXJuIHBhc3N3b3JkID09PSBjb25maXJtUGFzc3dvcmQgJiYgcGFzc3dvcmQgIT0gbnVsbCAmJiBjb25maXJtUGFzc3dvcmQgIT0gbnVsbCAmJiBwYXNzd29yZC5sZW5ndGggPjcgJiYgY29uZmlybVBhc3N3b3JkLmxlbmd0aCA+Nztcbn1cblxuXG4iXX0=