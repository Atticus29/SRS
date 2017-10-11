
export let isValidEmail = function(candidate:string) {
  let emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
  let valid = emailRegEx.test(candidate);
  return valid;
}


export let isValidPassword = function (password: string, confirmPassword: string){
  return password === confirmPassword && password != null && confirmPassword != null && password.length >7 && confirmPassword.length >7;
}

export let isValidDisplayName = function(displayName: string){
  return displayName.length > 0; //TODO add more validation here
}

export let isValidFullName = function(fullName: string){
  return fullName.length >0; //TODO flesh out as above
}


