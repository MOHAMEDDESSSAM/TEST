describe('valid sign-up page test cases ', function () {

    it('valid data required', function () {
      cy.log('redirect user to home page')
        cy.visit('https://facebook.com/');   
        cy.get('[data-testid="open-registration-form-button"]').click()
        cy.get('[name="firstname"]').type('moooohamed')
        cy.get('[name="lastname"]').type('ghazal')
        cy.get('[name="reg_email__"]').type('mohameedd93525@gmail.com')
        cy.get('[name="reg_email_confirmation__"]').type('mohameedd93525@gmail.com')
        cy.get('[name="reg_passwd__"]').type('mohamed123456')
        cy.get('[name="birthday_day"]').select('25')
        cy.get('[name="birthday_month"]').select('May')
        cy.get('[name="birthday_year"]').select('1993')
        cy.get('[name="sex"]').check('2')
        cy.get('[name="websubmit"]').click()

      })
    })
    describe('inavlid sign-up page test cases ', function () {
      it('leave all fileds empty ', function () {
        cy.log('your request can not be processed')
        cy.visit('https://facebook.com/'); 
        cy.get('[data-testid="open-registration-form-button"]').click()
        cy.get('[name="websubmit"]').click()
      });
      it('firstname with wrong format ', function () {
        cy.log('your request can not be processed')
        cy.visit('https://facebook.com/');   
        cy.get('[data-testid="open-registration-form-button"]').click()
        cy.get('[name="firstname"]').type('1234')
        cy.get('[name="lastname"]').type('ghazal')
        cy.get('[name="reg_email__"]').type('mohameedd93525@gmail.com')
        cy.get('[name="reg_email_confirmation__"]').type('mohameedd93525@gmail.com')
        cy.get('[name="reg_passwd__"]').type('mohamed123456')
        cy.get('[name="birthday_day"]').select('25')
        cy.get('[name="birthday_month"]').select('May')
        cy.get('[name="birthday_year"]').select('1993')
        cy.get('[name="sex"]').check('2')
        cy.get('[name="websubmit"]').click()
      });
      it('surname with wrong format ', function () {
        cy.log('your request can not be processed')
        cy.visit('https://facebook.com/');   
        cy.get('[data-testid="open-registration-form-button"]').click()
        cy.get('[name="firstname"]').type('moooohamed')
        cy.get('[name="lastname"]').type('1234')
        cy.get('[name="reg_email__"]').type('mohameedd93525@gmail.com')
        cy.get('[name="reg_email_confirmation__"]').type('mohameedd93525@gmail.com')
        cy.get('[name="reg_passwd__"]').type('mohamed123456')
        cy.get('[name="birthday_day"]').select('25')
        cy.get('[name="birthday_month"]').select('May')
        cy.get('[name="birthday_year"]').select('1993')
        cy.get('[name="sex"]').check('2')
        cy.get('[name="websubmit"]').click()
      });
      it('invalid email(wrong format)', function () {
        cy.log('your request can not be processed')
          cy.visit('https://facebook.com/');   
          cy.get('[data-testid="open-registration-form-button"]').click()
          cy.get('[name="firstname"]').type('moooohamed')
          cy.get('[name="lastname"]').type('ghazal')
          cy.get('[name="reg_email__"]').type('mohameedd93525@.com')
          cy.get('[name="reg_passwd__"]').type('mohamed123456')
          cy.get('[name="birthday_day"]').select('25')
          cy.get('[name="birthday_month"]').select('May')
          cy.get('[name="birthday_year"]').select('1993')
          cy.get('[name="sex"]').check('2')
          cy.get('[name="websubmit"]').click()
      });
      it('didnot select birthday-day', function () {
        cy.log('your request can not be processed')
          cy.visit('https://facebook.com/');   
          cy.get('[data-testid="open-registration-form-button"]').click()
          cy.get('[name="firstname"]').type('moooohamed')
          cy.get('[name="lastname"]').type('ghazal')
          cy.get('[name="reg_email__"]').type('mohameedd93525@gmail.com')
          cy.get('[name="reg_email_confirmation__"]').type('mohameedd93525@gmail.com')
          cy.get('[name="reg_passwd__"]').type('mohamed123456')
          cy.get('[name="birthday_month"]').select('May')
          cy.get('[name="birthday_year"]').select('1993')
          cy.get('[name="sex"]').check('2')
          cy.get('[name="websubmit"]').click()
      });
      it('did not select birthday-month', function () {
        cy.log('your request cannot be processed')
          cy.visit('https://facebook.com/');   
          cy.get('[data-testid="open-registration-form-button"]').click()
          cy.get('[name="firstname"]').type('moooohamed')
          cy.get('[name="lastname"]').type('ghazal')
          cy.get('[name="reg_email__"]').type('mohameedd93525@gmail.com')
          cy.get('[name="reg_email_confirmation__"]').type('mohameedd93525@gmail.com')
          cy.get('[name="reg_passwd__"]').type('mohamed123456')
          cy.get('[name="birthday_day"]').select('25')
          cy.get('[name="birthday_year"]').select('1993')
          cy.get('[name="sex"]').check('2')
          cy.get('[name="websubmit"]').click()
      });
      it('didnot select birthday-year', function () {
        cy.log('your request cannot be processed')
          cy.visit('https://facebook.com/');   
          cy.get('[data-testid="open-registration-form-button"]').click()
          cy.get('[name="firstname"]').type('moooohamed')
          cy.get('[name="lastname"]').type('ghazal')
          cy.get('[name="reg_email__"]').type('mohameedd93525@gmail.com')
          cy.get('[name="reg_email_confirmation__"]').type('mohameedd93525@gmail.com')
          cy.get('[name="reg_passwd__"]').type('mohamed123456')
          cy.get('[name="birthday_day"]').select('25')
          cy.get('[name="birthday_month"]').select('May')
          cy.get('[name="sex"]').check('2')
          cy.get('[name="websubmit"]').click()
      });
      it('didnot choose gender', function () {
        cy.log('your request cannot be processed')
          cy.visit('https://facebook.com/');   
          cy.get('[data-testid="open-registration-form-button"]').click()
          cy.get('[name="firstname"]').type('moooohamed')
          cy.get('[name="lastname"]').type('ghazal')
          cy.get('[name="reg_email__"]').type('mohameedd93525@gmail.com')
          cy.get('[name="reg_email_confirmation__"]').type('mohameedd93525@gmail.com')
          cy.get('[name="reg_passwd__"]').type('mohamed123456')
          cy.get('[name="birthday_day"]').select('25')
          cy.get('[name="birthday_month"]').select('May')
          cy.get('[name="birthday_year"]').select('1993')
          cy.get('[name="websubmit"]').click()
    });
  });