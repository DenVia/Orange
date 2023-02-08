

//percy exec -- cypress run

/// <reference types= 'cypress'/> 

describe('Solid logic e2e test run', () => {

  it('Full test', () => {

    cy.viewport(1920, 1080)

    cy.visit('https://orange-wave-dev.solidlogic.dev/');

    cy. pause()

   cy.percySnapshot('Login page start');

   //cy.get('[href="/auth/forgot-password"] > .MuiTypography-root').click()

   //cy.get('[class="MuiFormControl-root MuiFormControl-marginNormal MuiFormControl-fullWidth MuiTextField-root css-1u0h3mu"]').type('viacheslav.denysov@solidlogic.com')

   cy.percySnapshot('Forgot password');

   //cy.get('.MuiButtonBase-root').click();

   cy.percySnapshot('Forgot password "link sent" modal');

   //cy.get('.MuiButtonBase-root').click();

   cy.get('[id=":r0:"]').type('viacheslav.denysov@solidlogic.com')

   cy.get('[name="password"]').type('ZXCasd098!');

   cy.percySnapshot('Login page masked');

   cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').click();
  
   cy.percySnapshot('Login page unmasked');


    cy.contains('Log In').click();

   cy.percySnapshot('Dashboard');

    cy.get('[href="/trade-entry"]').then((link) => {
      cy.request(link.prop('href'))
      .its('status')
      .should('eq', 200);
    })

    cy.get('[data-testid="SwitchHorizontalIcon"]').click();

   cy.percySnapshot('Dashboard Empty')

    cy.xpath('/html/body/div/div[2]/div[1]/main/div[1]/div/div/div[1]/div[2]/div/div/div/div[3]/div/div/div/input')
      .click()
      .type('100');

// Product Buttons Check----------------------------------

    cy.contains('GE').click()

    cy.wait(1000)

    cy.contains('Add Leg').click()

    cy.wait(1000)

    cy.contains('Add Hedge Leg').click()

    cy.wait(1000)
  
    cy.contains('GE0').click()

    cy.wait(1000)

    cy.contains('Add Leg').click()

    cy.wait(1000)

    cy.contains('Add Hedge Leg').click()

    cy.wait(1000)

    cy.contains('GE2').click()

    cy.wait(1000)

    cy.contains('Add Leg').click()

    cy.wait(1000)

    cy.contains('Add Hedge Leg').click()

    cy.wait(1000)

    cy.contains('GE3').click()

    cy.wait(1000)

    cy.contains('Add Leg').click()

    cy.wait(1000)

    cy.contains('Add Hedge Leg').click()

    cy.wait(1000)

    cy.contains('GE4').click()

    cy.wait(1000)

    cy.contains('Add Leg').click()

    cy.wait(1000)

    cy.contains('Add Hedge Leg').click()

    cy.wait(1000)

    cy.contains('GE5').click()

    cy.wait(1000)

    cy.contains('Add Leg').click()

    cy.wait(1000)

    cy.contains('Add Hedge Leg').click()

    cy.wait(1000)
  
    cy.contains('SR3').click()

    cy.wait(1000)

    cy.contains('Add Leg').click()

    cy.wait(1000)

    cy.contains('Add Hedge Leg').click()

    cy.wait(1000)

    cy.contains('S0').click()

    cy.wait(1000)

    cy.contains('Add Leg').click()

    cy.wait(1000)

    cy.contains('Add Hedge Leg').click()

    cy.wait(1000)

    cy.contains('S2').click()

    cy.wait(1000)

    cy.contains('Add Leg').click()

    cy.wait(1000)

    cy.contains('Add Hedge Leg').click()

    cy.wait(1000)

    cy.contains('S3').click()

    cy.wait(1000)

    cy.contains('Add Leg').click()

    cy.wait(1000)

    cy.contains('Add Hedge Leg').click()

    cy.wait(1000)

    cy.contains('S4').click()

    cy.wait(1000)

    cy.contains('Add Leg').click()

    cy.wait(1000)

    cy.contains('Add Hedge Leg').click()

    cy.wait(1000)

    cy.contains('S5').click()

    cy.wait(1000)

    cy.contains('Add Leg').click()

    cy.wait(1000)

    cy.contains('Add Hedge Leg').click()

// Product Buttons Check over----------------------------------
 
//Filling ticket info

// cy.get('#ticket').type('AutoTestTicket')
//   .tab()
//   .type('081240')
//   .tab()
//   .type('081255')
//   .tab()
//   .type('{downArrow}')
//   .percySnapshot('Firms List');

//   cy.get('[placeholder="Select firm"]')
//   .click()
//   .percySnapshot('Group List');
  
//   cy.get('[placeholder="Select group"]')
//   .click()
//   .percySnapshot('Group List');

//   cy.get('[placeholder="Select account"]')
//   .click()
//   .percySnapshot('Group List');


//   cy.get('[placeholder="Select firm"]')
//   .click()
//   .type('{downArrow}').type('{downArrow}')
//   .type('{Enter}')
//   .tab()
//   .type('{downArrow}').type('{downArrow}')
//   .type('{Enter}')
//   .tab()
//   .type('{downArrow}').type('{downArrow}')
//   .type('{Enter}')

//setting leg's fields values manually

//buy/sell dropdown menus

//  cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[3]/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[2]/div/div')
//  .click()
 
//  cy.xpath('/html/body/div[2]/div[3]/ul/li[2]')
//  .click()
  
//  cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[3]/div[1]/div[2]/div/div/div/table/tbody/tr[2]/td[2]/div/div')
//  .click()
 
//  cy.xpath('/html/body/div[2]/div[3]/ul/li[2]')
//  .click()

//  cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[3]/div[1]/div[2]/div/div/div/table/tbody/tr[5]/td[2]/div/div')
//  .click()
 
//  cy.xpath('/html/body/div[2]/div[3]/ul/li[2]')
//  .click()

//  cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[3]/div[1]/div[2]/div/div/div/table/tbody/tr[6]/td[2]/div/div')
//  .click()
 
//  cy.xpath('/html/body/div[2]/div[3]/ul/li[2]')
//  .click()

//  cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[3]/div[1]/div[2]/div/div/div/table/tbody/tr[9]/td[2]/div/div')
//  .click()
 
//  cy.xpath('/html/body/div[2]/div[3]/ul/li[2]')
//  .click()

//  cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[3]/div[1]/div[2]/div/div/div/table/tbody/tr[10]/td[2]/div/div')
//  .click()
 
//  cy.xpath('/html/body/div[2]/div[3]/ul/li[2]')
//  .click()

//  cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[5]/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[2]/div/div')
//  .click()
 
//  cy.xpath('/html/body/div[2]/div[3]/ul/li[1]')
//  .click()

//  cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[5]/div[1]/div[2]/div/div/div/table/tbody/tr[2]/td[2]/div/div')
//  .click()
 
//  cy.xpath('/html/body/div[2]/div[3]/ul/li[1]')
//  .click()

//  cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[5]/div[1]/div[2]/div/div/div/table/tbody/tr[5]/td[2]/div/div')
//  .click()
 
//  cy.xpath('/html/body/div[2]/div[3]/ul/li[1]')
//  .click()

//  cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[5]/div[1]/div[2]/div/div/div/table/tbody/tr[6]/td[2]/div/div')
//  .click()
 
//  cy.xpath('/html/body/div[2]/div[3]/ul/li[1]')
//  .click()

//  cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[5]/div[1]/div[2]/div/div/div/table/tbody/tr[9]/td[2]/div/div')
//  .click()
 
//  cy.xpath('/html/body/div[2]/div[3]/ul/li[1]')
//  .click()

//  cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[5]/div[1]/div[2]/div/div/div/table/tbody/tr[10]/td[2]/div/div')
//  .click()
 
//  cy.xpath('/html/body/div[2]/div[3]/ul/li[1]')
//  .click()

//  // put/call dropdown menus

//  cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[3]/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[3]/div/div')
//  .click()
 
//  cy.xpath('/html/body/div[2]/div[3]/ul/li[2]')
//  .click()
  
//  cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[3]/div[1]/div[2]/div/div/div/table/tbody/tr[3]/td[3]/div/div')
//  .click()
 
//  cy.xpath('/html/body/div[2]/div[3]/ul/li[2]')
//  .click()

//  cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[3]/div[1]/div[2]/div/div/div/table/tbody/tr[5]/td[3]/div/div')
//  .click()
 
//  cy.xpath('/html/body/div[2]/div[3]/ul/li[2]')
//  .click()

//  cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[3]/div[1]/div[2]/div/div/div/table/tbody/tr[7]/td[3]/div/div')
//  .click()
 
//  cy.xpath('/html/body/div[2]/div[3]/ul/li[2]')
//  .click()

//  cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[3]/div[1]/div[2]/div/div/div/table/tbody/tr[9]/td[3]/div/div')
//  .click()
 
//  cy.xpath('/html/body/div[2]/div[3]/ul/li[2]')
//  .click()

//  cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[3]/div[1]/div[2]/div/div/div/table/tbody/tr[11]/td[3]/div/div')
//  .click()
 
//  cy.xpath('/html/body/div[2]/div[3]/ul/li[2]')
//  .click()

//  cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[5]/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[2]/div/div')
//  .click()
 
//  cy.xpath('/html/body/div[2]/div[3]/ul/li[1]')
//  .click()

//  cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[5]/div[1]/div[2]/div/div/div/table/tbody/tr[2]/td[2]/div/div')
//  .click()
 
//  cy.xpath('/html/body/div[2]/div[3]/ul/li[1]')
//  .click()

//  cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[5]/div[1]/div[2]/div/div/div/table/tbody/tr[5]/td[2]/div/div')
//  .click()
 
//  cy.xpath('/html/body/div[2]/div[3]/ul/li[1]')
//  .click()

//  cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[5]/div[1]/div[2]/div/div/div/table/tbody/tr[6]/td[2]/div/div')
//  .click()
 
//  cy.xpath('/html/body/div[2]/div[3]/ul/li[1]')
//  .click()

//  cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[5]/div[1]/div[2]/div/div/div/table/tbody/tr[9]/td[2]/div/div')
//  .click()
 
//  cy.xpath('/html/body/div[2]/div[3]/ul/li[1]')
//  .click()

//  cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[5]/div[1]/div[2]/div/div/div/table/tbody/tr[10]/td[2]/div/div')
//  .click()
 
//  cy.xpath('/html/body/div[2]/div[3]/ul/li[1]')
//  .click()

 // customizing ratios 

 cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[3]/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[4]/div/div/div/input')
 .click()
 .tab()
 .tab()
 .tab()
 .type('2')
 
 cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[3]/div[1]/div[2]/div/div/div/table/tbody/tr[2]/td[4]/div/div/div/input')
 .click()
 .tab()
 .tab()
 .tab()
 .type('3')

 cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[3]/div[1]/div[2]/div/div/div/table/tbody/tr[3]/td[4]/div/div/div/input')
 .click()
 .tab()
 .tab()
 .tab()
 .type('4')

 cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[3]/div[1]/div[2]/div/div/div/table/tbody/tr[4]/td[4]/div/div/div/input')
 .click()
 .tab()
 .tab()
 .tab()
 .type('5')

 cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[3]/div[1]/div[2]/div/div/div/table/tbody/tr[5]/td[4]/div/div/div/input')
 .click()
 .tab()
 .tab()
 .tab()
 .type('6')

 cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[3]/div[1]/div[2]/div/div/div/table/tbody/tr[6]/td[4]/div/div/div/input')
 .click()
 .tab()
 .tab()
 .tab()
 .type('7')

 // customizing deltas

 cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[5]/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[7]/div/div/input')
 .click()
 .type('{selectall}')
 .type('{backspace}')
 .type('2')

 cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[5]/div[1]/div[2]/div/div/div/table/tbody/tr[2]/td[7]/div/div/input')
 .click()
 .type('{selectall}')
 .type('{backspace}')
 .type('3')

 cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[5]/div[1]/div[2]/div/div/div/table/tbody/tr[3]/td[7]/div/div/input')
 .click()
 .type('{selectall}')
 .type('{backspace}')
 .type('4')

 cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[5]/div[1]/div[2]/div/div/div/table/tbody/tr[4]/td[7]/div/div/input')
 .click()
 .type('{selectall}')
 .type('{backspace}')
 .type('5')

 cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[5]/div[1]/div[2]/div/div/div/table/tbody/tr[5]/td[7]/div/div/input')
 .click()
 .type('{selectall}')
 .type('{backspace}')
 .type('6')

 cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[5]/div[1]/div[2]/div/div/div/table/tbody/tr[6]/td[7]/div/div/input')
 .click()
 .type('{selectall}')
 .type('{backspace}')
 .type('7')
// customizing unit prices

cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[3]/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[9]/div/span/div/div/input')
.click()
.type('{selectall}')
.type('{backspace}')
.type('1')

cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[3]/div[1]/div[2]/div/div/div/table/tbody/tr[2]/td[9]/div/span/div/div/input')
.click()
.type('{selectall}')
.type('{backspace}')
.type('2')

cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[3]/div[1]/div[2]/div/div/div/table/tbody/tr[3]/td[9]/div/span/div/div/input')
.click()
.type('{selectall}')
.type('{backspace}')
.type('3')

cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[3]/div[1]/div[2]/div/div/div/table/tbody/tr[4]/td[9]/div/span/div/div/input')
.click()
.type('{selectall}')
.type('{backspace}')
.type('4')

cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[3]/div[1]/div[2]/div/div/div/table/tbody/tr[5]/td[9]/div/span/div/div/input')
.click()
.type('{selectall}')
.type('{backspace}')
.type('5')

cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[3]/div[1]/div[2]/div/div/div/table/tbody/tr[6]/td[9]/div/span/div/div/input')
.click()
.type('{selectall}')
.type('{backspace}')
.type('6')

cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[3]/div[1]/div[2]/div/div/div/table/tbody/tr[7]/td[9]/div/span/div/div/input')
.click()
.type('{selectall}')
.type('{backspace}')
.type('7')

cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[3]/div[1]/div[2]/div/div/div/table/tbody/tr[8]/td[9]/div/span/div/div/input')
.click()
.type('{selectall}')
.type('{backspace}')
.type('8')

cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[3]/div[1]/div[2]/div/div/div/table/tbody/tr[9]/td[9]/div/span/div/div/input')
.click()
.type('{selectall}')
.type('{backspace}')
.type('9')

cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[3]/div[1]/div[2]/div/div/div/table/tbody/tr[10]/td[9]/div/span/div/div/input')
.click()
.type('{selectall}')
.type('{backspace}')
.type('10')

cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[3]/div[1]/div[2]/div/div/div/table/tbody/tr[11]/td[9]/div/span/div/div/input')
.click()
.type('{selectall}')
.type('{backspace}')
.type('11')

cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[3]/div[1]/div[2]/div/div/div/table/tbody/tr[12]/td[9]/div/span/div/div/input')
.click()
.type('{selectall}')
.type('{backspace}')
.type('12')

cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[5]/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[6]/div/span/div/div/input')
.click()
.type('{selectall}')
.type('{backspace}')
.type('13')

cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[5]/div[1]/div[2]/div/div/div/table/tbody/tr[2]/td[6]/div/span/div/div/input')
.click()
.type('{selectall}')
.type('{backspace}')
.type('14')

cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[5]/div[1]/div[2]/div/div/div/table/tbody/tr[3]/td[6]/div/span/div/div/input')
.click()
.type('{selectall}')
.type('{backspace}')
.type('15')

cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[5]/div[1]/div[2]/div/div/div/table/tbody/tr[4]/td[6]/div/span/div/div/input')
.click()
.type('{selectall}')
.type('{backspace}')
.type('16')

cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[5]/div[1]/div[2]/div/div/div/table/tbody/tr[5]/td[6]/div/span/div/div/input')
.click()
.type('{selectall}')
.type('{backspace}')
.type('17')

cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[5]/div[1]/div[2]/div/div/div/table/tbody/tr[6]/td[6]/div/span/div/div/input')
.click()
.type('{selectall}')
.type('{backspace}')
.type('18')

cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[5]/div[1]/div[2]/div/div/div/table/tbody/tr[7]/td[6]/div/span/div/div/input')
.click()
.type('{selectall}')
.type('{backspace}')
.type('19')

cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[5]/div[1]/div[2]/div/div/div/table/tbody/tr[8]/td[6]/div/span/div/div/input')
.click()
.type('{selectall}')
.type('{backspace}')
.type('20')

cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[5]/div[1]/div[2]/div/div/div/table/tbody/tr[9]/td[6]/div/span/div/div/input')
.click()
.type('{selectall}')
.type('{backspace}')
.type('21')

cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[5]/div[1]/div[2]/div/div/div/table/tbody/tr[10]/td[6]/div/span/div/div/input')
.click()
.type('{selectall}')
.type('{backspace}')
.type('22')

cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[5]/div[1]/div[2]/div/div/div/table/tbody/tr[11]/td[6]/div/span/div/div/input')
.click()
.type('{selectall}')
.type('{backspace}')
.type('23')

cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[5]/div[1]/div[2]/div/div/div/table/tbody/tr[12]/td[6]/div/span/div/div/input')
.click()
.type('{selectall}')
.type('{backspace}')
.type('24')

  })
})