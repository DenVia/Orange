

//percy exec -- cypress run
//set PERCY_TOKEN=465b6e7201ee00043982b57ebe12e53bd04d3fb47df5fc2339c00e1b7ce65a8e

/// <reference types= 'cypress'/> 

describe('Solid logic e2e test run', () => {

  it('Full test', () => {

    cy.viewport(1920, 1080)

    cy.visit('https://orange-wave-dev.solidlogic.dev/auth/login');

    cy. pause()

    cy.wait(2000)

   cy.percySnapshot('Login page start', { widths: [1920] });

   cy.get('[href="/auth/forgot-password"] > .MuiTypography-root').click()

   cy.get('[class="MuiFormControl-root MuiFormControl-marginNormal MuiFormControl-fullWidth MuiTextField-root css-1u0h3mu"]').type('viacheslav.denysov@solidlogic.com')

   cy.percySnapshot('Forgot password', { widths: [1920] });

   cy.get('.MuiButtonBase-root').click();

   cy.get('.MuiButtonBase-root').click();

   cy.xpath('/html/body/div/main/div/div/div[2]/form/div[1]/div/input').click().type('viacheslav.denysov@solidlogic.com')

   cy.get('[name="password"]').type('ZXCasd098!');

   cy.percySnapshot('Login page masked', { widths: [1920] });

   cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').click();
  
   cy.percySnapshot('Login page unmasked', { widths: [1920] });


   cy.contains('Log In').click();

   cy.wait(5000)

   cy.percySnapshot('Dashboard', { widths: [1920] });

    cy.get('[href="/trade-entry"]').then((link) => {
      cy.request(link.prop('href'))
      .its('status')
      .should('eq', 200);
    })

    cy.get('[data-testid="SwitchHorizontalIcon"]').click();

    cy.wait(2000)

   cy.percySnapshot('Trade Entry Empty', { widths: [1920] })

    cy.xpath('/html/body/div/div[2]/div[1]/main/div[1]/div/div/div[1]/div[2]/div/div/div/div[3]/div/div/div/input')
      .click()
      .type('100');

// Product Buttons Check----------------------------------

    cy.contains('GE').click()

    cy.wait(1000)

    cy.contains('Add Leg').click()

    cy.wait(2000)

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

cy.get('#ticket').type('AutoTestTicket')
  .tab()
  .type('081245')
  .tab()
  .type('081250')
  .tab()
  .type('{downArrow}')
  .percySnapshot('Firm List', { widths: [1920] });

  cy.get('[placeholder="Select firm"]')
  .click()

  cy.wait(1000)
  
  cy.get('[placeholder="Select group"]')
  .click()

  cy.wait(1000)

  cy.percySnapshot('Group List', { widths: [1920] });

  cy.get('[placeholder="Select account"]', { widths: [1920] })
  .click()

  cy.wait(1000)

  cy.percySnapshot('Account List', { widths: [1920] });


  cy.get('[placeholder="Select firm"]')
  .click()
  .type('{downArrow}').type('{downArrow}')
  .type('{Enter}')
  .tab()
  .type('{downArrow}').type('{downArrow}')
  .type('{Enter}')
  .tab()
  .type('{downArrow}').type('{downArrow}')
  .type('{Enter}')

//setting leg's fields values manually-------------------------------------------

//buy/sell dropdown menus

 cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[3]/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[2]/div/div')
 .click()
 
 cy.xpath('/html/body/div[2]/div[3]/ul/li[2]')
 .click()
  
 cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[3]/div[1]/div[2]/div/div/div/table/tbody/tr[2]/td[2]/div/div')
 .click()
 
 cy.xpath('/html/body/div[2]/div[3]/ul/li[2]')
 .click()

 cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[3]/div[1]/div[2]/div/div/div/table/tbody/tr[5]/td[2]/div/div')
 .click()
 
 cy.xpath('/html/body/div[2]/div[3]/ul/li[2]')
 .click()

 cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[3]/div[1]/div[2]/div/div/div/table/tbody/tr[6]/td[2]/div/div')
 .click()
 
 cy.xpath('/html/body/div[2]/div[3]/ul/li[2]')
 .click()

 cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[3]/div[1]/div[2]/div/div/div/table/tbody/tr[9]/td[2]/div/div')
 .click()
 
 cy.xpath('/html/body/div[2]/div[3]/ul/li[2]')
 .click()

 cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[3]/div[1]/div[2]/div/div/div/table/tbody/tr[10]/td[2]/div/div')
 .click()
 
 cy.xpath('/html/body/div[2]/div[3]/ul/li[2]')
 .click()

 cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[5]/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[2]/div/div')
 .click()
 
 cy.xpath('/html/body/div[2]/div[3]/ul/li[1]')
 .click()

 cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[5]/div[1]/div[2]/div/div/div/table/tbody/tr[2]/td[2]/div/div')
 .click()
 
 cy.xpath('/html/body/div[2]/div[3]/ul/li[1]')
 .click()

 cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[5]/div[1]/div[2]/div/div/div/table/tbody/tr[5]/td[2]/div/div')
 .click()
 
 cy.xpath('/html/body/div[2]/div[3]/ul/li[1]')
 .click()

 cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[5]/div[1]/div[2]/div/div/div/table/tbody/tr[6]/td[2]/div/div')
 .click()
 
 cy.xpath('/html/body/div[2]/div[3]/ul/li[1]')
 .click()

 cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[5]/div[1]/div[2]/div/div/div/table/tbody/tr[9]/td[2]/div/div')
 .click()
 
 cy.xpath('/html/body/div[2]/div[3]/ul/li[1]')
 .click()

 cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[5]/div[1]/div[2]/div/div/div/table/tbody/tr[10]/td[2]/div/div')
 .click()
 
 cy.xpath('/html/body/div[2]/div[3]/ul/li[1]')
 .click()

 // put/call dropdown menus

 cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[3]/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[3]/div/div')
 .click()
 
 cy.xpath('/html/body/div[2]/div[3]/ul/li[2]')
 .click()
  
 cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[3]/div[1]/div[2]/div/div/div/table/tbody/tr[3]/td[3]/div/div')
 .click()
 
 cy.xpath('/html/body/div[2]/div[3]/ul/li[2]')
 .click()

 cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[3]/div[1]/div[2]/div/div/div/table/tbody/tr[5]/td[3]/div/div')
 .click()
 
 cy.xpath('/html/body/div[2]/div[3]/ul/li[2]')
 .click()

 cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[3]/div[1]/div[2]/div/div/div/table/tbody/tr[7]/td[3]/div/div')
 .click()
 
 cy.xpath('/html/body/div[2]/div[3]/ul/li[2]')
 .click()

 cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[3]/div[1]/div[2]/div/div/div/table/tbody/tr[9]/td[3]/div/div')
 .click()
 
 cy.xpath('/html/body/div[2]/div[3]/ul/li[2]')
 .click()

 cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[3]/div[1]/div[2]/div/div/div/table/tbody/tr[11]/td[3]/div/div')
 .click()
 
 cy.xpath('/html/body/div[2]/div[3]/ul/li[2]')
 .click()

 cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[5]/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[2]/div/div')
 .click()
 
 cy.xpath('/html/body/div[2]/div[3]/ul/li[1]')
 .click()

 cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[5]/div[1]/div[2]/div/div/div/table/tbody/tr[2]/td[2]/div/div')
 .click()
 
 cy.xpath('/html/body/div[2]/div[3]/ul/li[1]')
 .click()

 cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[5]/div[1]/div[2]/div/div/div/table/tbody/tr[5]/td[2]/div/div')
 .click()
 
 cy.xpath('/html/body/div[2]/div[3]/ul/li[1]')
 .click()

 cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[5]/div[1]/div[2]/div/div/div/table/tbody/tr[6]/td[2]/div/div')
 .click()
 
 cy.xpath('/html/body/div[2]/div[3]/ul/li[1]')
 .click()

 cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[5]/div[1]/div[2]/div/div/div/table/tbody/tr[9]/td[2]/div/div')
 .click()
 
 cy.xpath('/html/body/div[2]/div[3]/ul/li[1]')
 .click()

 cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[5]/div[1]/div[2]/div/div/div/table/tbody/tr[10]/td[2]/div/div')
 .click()
 
 cy.xpath('/html/body/div[2]/div[3]/ul/li[1]')
 .click()

 //customizing ratios 

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

// customizing legs trade by 

cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[3]/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[10]/div/div')
.click()

cy.xpath('/html/body/div[2]/div[3]/ul/li[2]')
.click()

cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[3]/div[1]/div[2]/div/div/div/table/tbody/tr[2]/td[10]/div/div')
.click()

cy.xpath('/html/body/div[2]/div[3]/ul/li[2]')
.click()

cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[3]/div[1]/div[2]/div/div/div/table/tbody/tr[3]/td[10]/div/div')
.click()

cy.xpath('/html/body/div[2]/div[3]/ul/li[2]')
.click()

cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[3]/div[1]/div[2]/div/div/div/table/tbody/tr[4]/td[10]/div/div')
.click()

cy.xpath('/html/body/div[2]/div[3]/ul/li[2]')
.click()

cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[3]/div[1]/div[2]/div/div/div/table/tbody/tr[5]/td[10]/div/div')
.click()

cy.xpath('/html/body/div[2]/div[3]/ul/li[2]')
.click()

cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[3]/div[1]/div[2]/div/div/div/table/tbody/tr[6]/td[10]/div/div')
.click()

cy.xpath('/html/body/div[2]/div[3]/ul/li[2]')
.click()

//hedge legs trade by customization

cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[5]/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[8]/div/div')
.click()

cy.xpath('/html/body/div[2]/div[3]/ul/li[2]')
.click()

cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[5]/div[1]/div[2]/div/div/div/table/tbody/tr[2]/td[8]/div/div')
.click()

cy.xpath('/html/body/div[2]/div[3]/ul/li[2]')
.click()

cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[5]/div[1]/div[2]/div/div/div/table/tbody/tr[3]/td[8]/div/div')
.click()

cy.xpath('/html/body/div[2]/div[3]/ul/li[2]')
.click()

cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[5]/div[1]/div[2]/div/div/div/table/tbody/tr[4]/td[8]/div/div')
.click()

cy.xpath('/html/body/div[2]/div[3]/ul/li[2]')
.click()

cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[5]/div[1]/div[2]/div/div/div/table/tbody/tr[5]/td[8]/div/div')
.click()

cy.xpath('/html/body/div[2]/div[3]/ul/li[2]')
.click()

cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[4]/div[5]/div[1]/div[2]/div/div/div/table/tbody/tr[6]/td[8]/div/div')
.click()

cy.xpath('/html/body/div[2]/div[3]/ul/li[2]')
.click()

// creating opposing parties

cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[5]/div/div[1]/div[2]/div/div/div/div/div[2]/div/div/input')
.click()
.type('2')
.type('{Enter}')

cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[5]/div/div[1]/div[2]/div/div/div/div[1]/div[2]/button[1]')
.click()

//choosing brokers

cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[5]/div/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[2]/div/div/div/input')
.click()
.type('{downArrow}')
.type('{downArrow}')
.type('{downArrow}')
.type('{Enter}')

cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[5]/div/div[1]/div[2]/div/div/div/table/tbody/tr[2]/td[2]/div/div/div/input')
.click()
.type('{downArrow}')
.type('{downArrow}')
.type('{downArrow}')
.type('{Enter}')

//chosing legs for 1st broker (unchecking futures legs)

cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[5]/div/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[3]/div/div')
.click()

cy.xpath('/html/body/div[2]/div[3]/ul/li[14]/span/input')
.click()

cy.xpath('/html/body/div[2]/div[3]/ul/li[15]/span/input')
.click()

cy.xpath('/html/body/div[2]/div[3]/ul/li[16]/span/input')
.click()

cy.xpath('/html/body/div[2]/div[3]/ul/li[17]/span/input')
.click()

cy.xpath('/html/body/div[2]/div[3]/ul/li[18]/span/input')
.click()

cy.xpath('/html/body/div[2]/div[3]/ul/li[19]/span/input')
.click()

cy.xpath('/html/body/div[2]/div[3]/ul/li[20]/span/input')
.click()

cy.xpath('/html/body/div[2]/div[3]/ul/li[21]/span/input')
.click()

cy.xpath('/html/body/div[2]/div[3]/ul/li[22]/span/input')
.click()

cy.xpath('/html/body/div[2]/div[3]/ul/li[23]/span/input')
.click()

cy.xpath('/html/body/div[2]/div[3]/ul/li[24]/span/input')
.click({force: true})

cy.xpath('/html/body/div[2]/div[3]/ul/li[25]/span/input')
.click({force: true})
.tab()

//chosing legs for 2st broker (unchecking legs)

cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[5]/div/div[1]/div[2]/div/div/div/table/tbody/tr[2]/td[3]/div/div')
.click()

cy.xpath('/html/body/div[2]/div[3]/ul/li[2]/span/input')
.click()

cy.xpath('/html/body/div[2]/div[3]/ul/li[3]/span/input')
.click()

cy.xpath('/html/body/div[2]/div[3]/ul/li[4]/span/input')
.click()

cy.xpath('/html/body/div[2]/div[3]/ul/li[5]/span/input')
.click()

cy.xpath('/html/body/div[2]/div[3]/ul/li[6]/span/input')
.click()

cy.xpath('/html/body/div[2]/div[3]/ul/li[7]/span/input')
.click()

cy.xpath('/html/body/div[2]/div[3]/ul/li[8]/span/input')
.click()

cy.xpath('/html/body/div[2]/div[3]/ul/li[9]/span/input')
.click()

cy.xpath('/html/body/div[2]/div[3]/ul/li[10]/span/input')
.click()

cy.xpath('/html/body/div[2]/div[3]/ul/li[11]/span/input')
.click()

cy.xpath('/html/body/div[2]/div[3]/ul/li[12]/span/input')
.click()

cy.xpath('/html/body/div[2]/div[3]/ul/li[13]/span/input')
.click()
.tab()
// setting quantity

cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[5]/div/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[5]/div/div/input')
.click()
.type('100')

cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[5]/div/div[1]/div[2]/div/div/div/table/tbody/tr[2]/td[5]/div/div/input')
.click()
.type('100')

// setting futures broker

cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[5]/div/div[1]/div[2]/div/div/div/table/tbody/tr[2]/td[4]/div/div/div/input')
.click()
.type('{downArrow}')
.type('{Enter}')

// setting opposing broker

cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[5]/div/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[7]/div/div/div/input')
.click()
.type('{downArrow}')
.type('{Enter}')

cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[5]/div/div[1]/div[2]/div/div/div/table/tbody/tr[2]/td[7]/div/div/div/input')
.click()
.type('{downArrow}')
.type('{downArrow}')
.type('{Enter}')

//setting opposing firm

cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[5]/div/div[1]/div[2]/div/div/div/table/tbody/tr[1]/td[8]/div/div')
.click()

cy.xpath('/html/body/div[2]/div[3]/ul/li[2]')
.click()

cy.xpath('/html/body/div/div[2]/div[1]/main/div[2]/div[5]/div/div[1]/div[2]/div/div/div/table/tbody/tr[2]/td[8]/div/div')
.click()

cy.xpath('/html/body/div[2]/div[3]/ul/li[3]')
.click()

cy.percySnapshot('Trade Entry full', { widths: [1920] })

cy.contains('Check Trade').click()

cy.wait(5000)

cy.percySnapshot('Trade submission screen with generic CSV', { widths: [1920] })

cy.xpath('/html/body/div/div[2]/div[1]/main/div/div[4]/div[1]/div[2]/div/div').click()

cy.get('[data-value="Drax"]').click()

cy.wait(5000)

cy.percySnapshot('Trade submission screen with Drax CSV', { widths: [1920] })

cy.xpath('/html/body/div/div[2]/div[1]/main/div/div[4]/div[1]/div[2]/div/div').click()

cy.get('[data-value="StoneX"]').click()

cy.wait(5000)

cy.percySnapshot('Trade submission screen with StoneX CSV', { widths: [1920] })

cy.get('[data-test-id="trade-submission-preview-ticket-button"]').click()

cy.wait(4000)

cy.percySnapshot('PDF ticket preview', { widths: [1920] })

cy.get('[data-test-id="ticket-modal-cancel-button"]').click()

cy.get('[data-test-id="trade-submission-send-email-button"]').click()

cy.wait(2000)

cy.percySnapshot('Email modal', { widths: [1920] })

cy.get('[name="to"]')
  .click()
  .type('viacheslav.denysov@solidlogic.com')
  .type('{Enter}')

cy.get('[data-test-id="email-modal-send-button"]').click()

cy.wait(2000)



//----------------add cancel----------------

cy.get('[data-test-id="trade-submission-submit-firm-button"]').click()

cy.wait(2000)

cy.percySnapshot('Clearing firm modal', { widths: [1920] })

cy.get('[data-test-id="submit-modal-cancel-button"]').click()

cy.get('[data-test-id="trade-submission-save-trade-button"]').click()


  })
})