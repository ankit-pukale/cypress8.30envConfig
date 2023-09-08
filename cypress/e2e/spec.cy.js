describe('Env COnfig', () => {
    it('env',()=>{
        let url=Cypress.config().baseUrl
        cy.visit(url)
        cy.log('*********************'+Cypress.env("password"))
    })
});