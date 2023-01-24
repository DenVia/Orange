

//e:\work\cypress\projects\orange

/// <reference types= 'cypress'/> 

describe('Solid logic e2e test run', () => {
  it('Full test', () => {

    cy.viewport(1920, 1080)

    cy.visit('https://orange-wave-dev.solidlogic.dev/');

    

   cy.percySnapshot('Login page start');

   //cy.get('[href="/auth/forgot-password"] > .MuiTypography-root').click()

   //cy.get('[class="MuiFormControl-root MuiFormControl-marginNormal MuiFormControl-fullWidth MuiTextField-root css-1u0h3mu"]').type('viacheslav.denysov@solidlogic.com')

   cy.percySnapshot('Forgot password');

   //cy.get('.MuiButtonBase-root').click();

   cy.percySnapshot('Forgot password "link sent" modal');

   //cy.get('.MuiButtonBase-root').click();

   cy.get('[class="MuiFormControl-root MuiFormControl-marginNormal MuiFormControl-fullWidth MuiTextField-root css-1u0h3mu"]').type('viacheslav.denysov@solidlogic.com')

   cy.get('[name="password"]').type('ZXCasd098!');

   cy.percySnapshot('Login page masked');

   cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').click();
  
   cy.percySnapshot('Login page unmasked');


    cy.contains('Log In').click();

   cy.percySnapshot('Dashboard')

    cy.get('[href="/trade-entry"]').then((link) => {
      cy.request(link.prop('href'))
      .its('status')
      .should('eq', 200);
    })

    cy.get('[data-testid="SwitchHorizontalIcon"]').click()

   cy.percySnapshot('Dashboard Empty')

    cy.contains('S5').click()
      .tab()
      .type('100');

// Product Buttons Check----------------------------------

    cy.contains('GE').click()

    cy.contains('Add Leg').click()

    cy.contains('Add Hedge Leg').click()
  
    cy.contains('GE0').click()

    cy.contains('Add Leg').click()

    cy.contains('Add Hedge Leg').click()

    cy.contains('GE2').click()

    cy.contains('Add Leg').click()

    cy.contains('Add Hedge Leg').click()

    cy.contains('GE3').click()

    cy.contains('Add Leg').click()

    cy.contains('Add Hedge Leg').click()

    cy.contains('GE4').click()

    cy.contains('Add Leg').click()

    cy.contains('Add Hedge Leg').click()

    cy.contains('GE5').click()

    cy.contains('Add Leg').click()

    cy.contains('Add Hedge Leg').click()
  
    cy.contains('SR3').click()

    cy.contains('Add Leg').click()

    cy.contains('Add Hedge Leg').click()

    cy.contains('S0').click()

    cy.contains('Add Leg').click()

    cy.contains('Add Hedge Leg').click()

    cy.contains('S2').click()

    cy.contains('Add Leg').click()

    cy.contains('Add Hedge Leg').click()

    cy.contains('S3').click()

    cy.contains('Add Leg').click()

    cy.contains('Add Hedge Leg').click()

    cy.contains('S4').click()

    cy.contains('Add Leg').click()

    cy.contains('Add Hedge Leg').click()

    cy.contains('S5').click()

    cy.contains('Add Leg').click()

    cy.contains('Add Hedge Leg').click()

// Product Buttons Check over----------------------------------
 
//Filling ticket info

cy.get('#ticket').type('AutoTestTicket')
  .tab()
  .type('081240')
  .tab()
  .type('081255')
  .tab()
  .type('{downArrow}').percySnapshot('Firms List')
  

//cy.percySnapshot('Firms List')

//cy.contains('Select firm').click().type('{downArrow}').type('{Enter}').tab().type('{downArrow}');

//cy.percySnapshot('Groups List')

//cy.contains('Select group').click().type('{downArrow}').type('{Enter}').tab().type('{downArrow}').percySnapshot('Accounts List').type('{Enter}');

//cy.percySnapshot('Accounts List')






  


    
  })
})