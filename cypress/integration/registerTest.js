/// <reference types="cypress" />

import Register from '../support/pages/Register'

describe('Test',  () => {
    it('Send the registration', () => {
        Register.accessPage();
        Register.registerFields();
        Register.validateRegister();
    })
    
})

