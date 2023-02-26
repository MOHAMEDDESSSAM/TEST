describe(' invaild login test cases', function () {

    it('leave all fileds empty ', function () {
      cy.log('your request can not be processed')
      cy.visit('https://facebook.com');
      cy.get('[name="login"]').click()
      });
      it('invalid email&password ', function () {
        cy.log('your request can not be processed')
        cy.visit('https://facebook.com');
        cy.get('[name="email"]').type('mohameedd93525@.com')
        cy.get('[name="pass"]').type('mo12345')
        cy.get('[name="login"]').click()
      });
      it('vailid email &invaild password ', function () {
        cy.log('your request can not be processed')
        cy.visit('https://facebook.com');
        cy.get('[name="email"]').type('mohameedd93525@gmail.com')
        cy.get('[name="pass"]').type('mo12345')
        cy.get('[name="login"]').click()
      });
      it('invalid email &valid password ', function () {
        cy.log('your request can not be processed')
        cy.visit('https://facebook.com');
        cy.get('[name="email"]').type('mohameedd93525@.com')
        cy.get('[name="pass"]').type('mo1234569')
        cy.get('[name="login"]').click()
      });
    })

    describe(' valid login test cases', function () {

      it('valid email and password ', function () {
        cy.log('redirect user to home page')
        cy.visit('https://facebook.com');
        cy.get('[name="email"]').type('mohameedd93525@gmail.com')
        cy.get('[name="pass"]').type('mo1234569')
        cy.get('[name="login"]').click()
        });
      });