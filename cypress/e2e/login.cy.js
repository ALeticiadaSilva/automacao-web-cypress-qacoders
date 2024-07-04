const element = require("../fixtures/login.json")

beforeEach(() => {
    cy.visit('/#/login')
});

describe('Login', () => {
    it('CT001 - Login com sucesso', () => {
        const email = Cypress.env('EMAIL');
        const password = Cypress.env('PASSWORD');
        cy.login(email, password);
    });

    it('CT002 - Login com e-mail válido e a senha inválida', () => {
        cy.get(element.input_email).type(Cypress.env('EMAIL'));
        cy.get(element.input_password).type(Cypress.env('PASSWORD_INVALID'));
        cy.get(element.btn_login).click();    
        cy.MsgFalhaLogin();      
    });

    it('CT003 - Login com e-mail inválido e senha válida', () => {
        cy.get(element.input_email).type(Cypress.env('EMAIL_INVALID'));
        cy.get(element.input_password).type(Cypress.env('PASSWORD'));
        cy.get(element.email_invalid).should('have.text', 'Digite um email válido');

    });

    it('CT004 - Login com e-mail em branco e senha válida', () => {
        cy.get(element.input_password).type(Cypress.env('PASSWORD'));
        cy.contains('Entrar').click();
        cy.get(element.msg_valid_email).should('have.text', 'O email é obrigatório');
    });

    it('CT005 - Login com e-mail válido e senha em branco', () => {
        cy.get(element.input_email).type(Cypress.env('EMAIL'));
        cy.contains('Entrar').click();
        cy.contains('p', 'A senha é obrigatória').should('be.visible');

    });

    it('CT006 - Login: Verificar a existência do texto "Esqueci minha senha"', () => {
        cy.contains(element.esqueci_password, 'Esqueci minha senha').should('be.visible');
    });

    it('CT007 - Login: Verificar a existência do texto "Primeiro Acesso?"', () => {
        cy.get(element.first_access).should('contain','Primeiro Acesso?');
        cy.get(element.access_here).should('contain', 'Acesse aqui');
     
    });

});
