let utilities = require("../utilities/utilities");
const isValidPassword = utilities.isValidPassword;
const isValidEmail = utilities.isValidEmail;

describe("isValidPassword()", () =>{
  it("should return true", () =>{
    assert(isValidPassword("password1", "password1"));
  });

  it("should return false if passwords do not match", () =>{
    assert.equal(isValidPassword("password1", "password2"), false);
  });

  it("should return false if password is undefined", () =>{
    assert.equal(isValidPassword(undefined, "password2"), false);
  });

  it("should return false if null", ()=>{
    assert.isFalse(isValidPassword(null, "password1"));
  });

  it("should return false if password is fewer than 8 characters long", () =>{
    assert.isFalse(isValidPassword("passwor", "passwor"));
  });

});

describe("isValidEmail()", ()=>{
    it("should return true when there is a valid email address", () =>{
        assert(isValidEmail("chance@chance.com"));
    });

    it("should return false when the email doesn't have a domain", () =>{
      assert.isFalse(isValidEmail("badEmail"));
  });

    it("should return false if undefined", ()=>{
      assert.isFalse(isValidEmail(undefined));
    });

    it("should return false if null", ()=>{
      assert.isFalse(isValidEmail(null));
    });
});