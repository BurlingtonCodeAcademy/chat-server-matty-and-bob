describe('Cypress', function () {
  it('successfully loads and asserts', function () {
    expect(true).to.equal(true);
  });
  it('successfully visits the home page', function () {
    cy.visit('public');
  });

});

describe('The chat page', function(){
  beforeEach(function(){
    cy.visit('public/')
  })
  it('allows typing in the message input', function(){
    cy.get('#message').type('A message')
    cy.get('#message').should('have.value', 'A message')
  })
  it('posts the message to the chat display', function() {
    cy.get('#message').type('I posted this!')
    cy.get('#send').click()
    cy.get('#display').should(' have.text', 'I posted this!')
  })
})