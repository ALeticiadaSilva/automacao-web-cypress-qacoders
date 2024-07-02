
Cypress.Commands.add('login', (email, password) => {
    cy.get('#email').type(email)
    cy.get('#password').type(password)
    cy.get('#login').click()

    cy.location().should((loc) => {
        expect(loc.pathname).to.eq('/login');
    });
    
    cy.get('body > nav > button').should('be.visible');
  });

Cypress.Commands.add('MsgFalhaLogin', () => {
    cy.get('[class="MuiAlert-message css-1xsto0d"]').should('have.text', 'E-mail e/ou senha inválidos');
})

Cypress.Commands.add('MsgEmailEmBranco', () => {
    cy.get('[class="css-18xtib3"]').should('have.text', 'O email é obrigatório');
})
Cypress.Commands.add('MsgSenhaEmBranco', () => {
    cy.get('[class="css-18xtib3"]').should('have.text', 'A senha é obrigatória');
})