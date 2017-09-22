import { Component, OnInit } from '@angular/core';
import * as switchModule from "tns-core-modules/ui/switch";

@Component({
  moduleId: module.id,
  selector: 'ns-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  instructorStatus = false;

  constructor() { }

  ngOnInit() {

    let mySwitch = new switchModule.Switch();
  }

}
