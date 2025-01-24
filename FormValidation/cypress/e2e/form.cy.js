describe('Check all inputs from Form', () => {
   //Open homepage and validation the page
  beforeEach(() => {
    cy.visit('/')
    cy.contains('h3 a','GUI Elements')
      .click()
    cy.contains('h1', 'Automation Testing Practice')
      .should('be.visible')
  });
  
  it("Typing data on the text's inputs", () => {
    //Name
    cy.get('input[placeholder="Enter Name"]')
      .type('John Test') 
    //E-mail
    cy.get('input[placeholder="Enter EMail"]')
      .type('testjohn@test.com') 
    //Phone number
    cy.get('input[placeholder="Enter Phone"]')
      .type('5518999999999')  
    //Adress
    cy.get('#textarea')
      .type('404 Text Parkway, Mountain Text, CY, Postal Code 404404') 
  })

  it("Check the radio, checkbox and select inputs", () => {
    //Gender(Radio)
    cy.get('input[value="male"]') 
      .click()
    //Days(Checkbox)
    cy.get('input#friday')
      .click()
    //Country(Select)
    cy.get('#country') 
      .select('Brazil')
    //Colors(Select)
    cy.get('#colors')  
      .select('White')
    //Sorted List(Select)    
    cy.get('#animals')  
      .select('Zebra')
  })

  it("Testing date fields", () => {
    //Date Picker 1
    cy.get('input#datepicker')
      .click()
    cy.get('a[title="Prev"]')
      .click()
    cy.get('a[data-date="25"] ')  
      .click() 
    
    //Date Picker 2
    cy.get('input#txtDate')
      .click()
    cy.get('select[aria-label="Select month"]')
      .select('Dec')
    cy.get('select[aria-label="Select year"]')
      .select('2020')  
    cy.get('a[data-date="25"] ')  
      .click()  
      
    //Date Picker 3
    cy.get('input#start-date') 
      .click()
      .type('2024-12-25')
    cy.get('input#end-date') 
      .click()
      .type('2025-12-25')

    cy.get('button.submit-btn')
      .click()

    cy.get('div#result')
      .should('be.visible')
      .and('have.text', 'You selected a range of 365 days.')

  })
})