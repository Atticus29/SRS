export class User{
  emailAddress: string;
  password: string;
  id: string;
  displayName: string;

  constructor(displayName: string){
    this.displayName = displayName;
  }

  getName(){
    return this.displayName;
  }
}


export class Student extends User{
  //e.g., enrolledClasses...
}
