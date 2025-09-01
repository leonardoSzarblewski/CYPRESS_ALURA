describe('Página de login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/')
        cy.get('[data-test="login-button"]').click()
    });
    
    it('Deve fazer login do usuário com sucesso', () => {
        cy.login()
        cy.contains('Veja os amigos disponíveis para adoção!').should('be.visible')
        
    });

    it('Deve fazer login do usuário com sucesso através do ícone de mensagem', () => {
        cy.get('.header__message').click()
        cy.login()
        cy.contains('Veja os amigos disponíveis para adoção!').should('be.visible')
    });

    it('Deve falhar ao fazer login com e-mail e senha inválido', () => {
        cy.get('[data-test="input-loginEmail"]').type('Inválido')
        cy.get('[data-test="input-loginPassword"]').type('Inválido')
        cy.get('[data-test="submit-button"]').click()

        cy.contains('Por favor, verifique o email digitado').should('be.visible')
        cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres')
        .should('be.visible')
    });
});