let student = require("../models/model.user");
// let assert = require('chai');

// let mainViewModel = require("../main-view-model");

describe('Student hi name method', () => {
  it("should return a student's name", () =>{
    const newStudent = new student.Student("Chance");
    assert.equal(newStudent.getName(),"Chance");
  });
});


