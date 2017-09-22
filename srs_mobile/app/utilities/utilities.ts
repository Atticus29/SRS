export let isValidEmail = function(email: string){
  return false; //TODO
}

export let isSamePassword = function (password: string, confirmPassword: string){
  return password === confirmPassword && password != null && confirmPassword != null;
}
