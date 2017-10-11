import { Component, OnInit } from '@angular/core';
import * as switchModule from "tns-core-modules/ui/switch";
import { isValidPassword, isValidEmail } from "../utilities/utilities";

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
  private email: string;
  private displayName: string;
  private fullName: string;
  private password: string;
  private confirmPassword: string;

  constructor() { }

  ngOnInit() {

    let mySwitch = new switchModule.Switch();
  }

  setRegistrantIdentity(identity: string){
    this.identity = identity;
    this.revealForm(true);
  }

  createUser(){
    if(!isValidEmail(this.email)){
      alert("Please enter a valid email");
    }
    if (!isValidPassword(this.password, this.confirmPassword)){
      alert("Valid password!");
    }
    if(this.identity === "student"){
      // user = new Student(p1, p2, p3....);
    } else if (this.identity === "instructor"){
      // uer = new Instructor(p1,p2,p3, p4,p5);
    }
    //OR user = new User(p1,p2,p3);
  }

  revealForm(booleanStatus: boolean){
    this.showForm = booleanStatus;
  }

}


