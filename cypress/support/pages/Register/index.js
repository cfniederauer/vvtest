const el = require('./elements').ELEMENTS;

class Register {
    accessPage(){
        cy.visit('http://www.lourencodemonaco.com.br/vvtest/pesquisa/')
    }
    registerFields(){
        cy.get(el.name).type('Firstname');
        cy.get(el.lastname).type('Lastname')
        cy.get(el.email).type('teste@email.com')
        cy.get(el.emailconfirm).type('teste@email.com')
        cy.get(el.age).click()
        cy.get(el.timeexperience).select('mais de 5 anos');
        cy.get(el.attractive).select('Sou mega chato')
        cy.get(el.improve).click()
        cy.get(el.language).type('JavaScript')
        cy.get(el.send).click()
        }
    validateRegister(){
        cy.wait(1000);
        cy.get(el.successmessage).contains('Your form has been successfully submitted.')
    }
}

export default new Register();