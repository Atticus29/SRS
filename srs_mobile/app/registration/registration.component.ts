import { Component, OnInit } from '@angular/core';
import * as switchModule from "tns-core-modules/ui/switch";

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

  constructor() { }

  ngOnInit() {

    let mySwitch = new switchModule.Switch();
  }

  setRegistrantIdentity(identity: string){
    this.identity = identity;
    this.revealForm(true);
  }

  createUser(){
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
