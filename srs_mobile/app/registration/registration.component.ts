import { Component, OnInit } from '@angular/core';
import * as switchModule from "tns-core-modules/ui/switch";
import { isValidPassword, isValidEmail, isValidDisplayName, isValidFullName } from "../utilities/utilities";

@Component({
  moduleId: module.id,
  selector: 'ns-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  private instructorStatus = false;
  private showForm = false;
  private identity : string = null;
  private email: string = "chance@gmail.com";
  private displayName: string;
  private fullName: string;
  private password: string;
  private confirmPassword: string;
  private emailValidationString: string = "Not a valid email address";
  private passwordValidationString: string = "Passwords don't match";
  private displayNameValdiationString: string = "Display name is invalid";
  private fullNameValidationString: string = "Full name is invalid";

  constructor() { }

  

  ngOnInit() {

    let mySwitch = new switchModule.Switch();  
  }

  updateEmailInputStatus(){
    if(isValidEmail(this.email)){
      this.emailValidationString = "Valid email!";
      return this.emailValidationString;
    } else {
      this.emailValidationString = "Not a valid email address";
      return this.emailValidationString;
    }
  }

  updatePasswordInputStatus(){
    if(isValidPassword(this.password, this.confirmPassword)){
      this.passwordValidationString = "Passwords match";
      return this.passwordValidationString;
    } else {
      this.passwordValidationString = "Passwords don't match";
      return this.passwordValidationString;
    }
  }

  updateDisplayNameInputStatus(){
    if(isValidDisplayName(this.displayName)){
      this.displayNameValdiationString = "Valid display name";
      return this.displayNameValdiationString;
    } else{
      this.displayNameValdiationString = "Display name is invalid";
      return this.displayNameValdiationString;
    }
  }

  updateFullNameInputStatus(){
    if(isValidFullName(this.fullName)){
      this.fullNameValidationString = "Valid full name";
      return this.fullNameValidationString;
    } else {
      this.fullNameValidationString = "Invalid full name";
      return this.fullNameValidationString;
    }
  }

  setRegistrantIdentity(identity: string){
    this.identity = identity;
    this.revealForm(true);
  }

  isDirty(formInput: string){
    if (formInput.length > 0){
      return true;
    } else {
      return false;
    }
  }


  createUser(){
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
  }

  revealForm(booleanStatus: boolean){
    console.log("email is: " + this.email);
    this.showForm = booleanStatus;
  }

  inputsValid(){
    return true;
  }

}


