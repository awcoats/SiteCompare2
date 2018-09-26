/// <reference types="Cypress" />
context('Actions', () => {

	it('test2.js0', () => {
		cy.visit('http://www.honeywellgenerators.com/portable-power/products');
		cy.matchImageSnapshot('test2.js0');
	})

	it('test2.js0_b', () => {
		cy.visit('http://generac-honeywell-upgrade-2018.bluemod.us/portable-power/products');
		cy.matchImageSnapshot('test2.js0');
	})

	it('test2.js1', () => {
		cy.visit('http://www.honeywellgenerators.com/terms-conditions');
		cy.matchImageSnapshot('test2.js1');
	})

	it('test2.js1_b', () => {
		cy.visit('http://generac-honeywell-upgrade-2018.bluemod.us/terms-conditions');
		cy.matchImageSnapshot('test2.js1');
	})

	it('test2.js2', () => {
		cy.visit('http://www.honeywellgenerators.com/privacy');
		cy.matchImageSnapshot('test2.js2');
	})

	it('test2.js2_b', () => {
		cy.visit('http://generac-honeywell-upgrade-2018.bluemod.us/privacy');
		cy.matchImageSnapshot('test2.js2');
	})

	it('test2.js3', () => {
		cy.visit('http://www.honeywellgenerators.com/home-backup-power/products');
		cy.matchImageSnapshot('test2.js3');
	})

	it('test2.js3_b', () => {
		cy.visit('http://generac-honeywell-upgrade-2018.bluemod.us/home-backup-power/products');
		cy.matchImageSnapshot('test2.js3');
	})

	it('test2.js4', () => {
		cy.visit('http://www.honeywellgenerators.com/home-backup-power/in-home-assessment');
		cy.matchImageSnapshot('test2.js4');
	})

	it('test2.js4_b', () => {
		cy.visit('http://generac-honeywell-upgrade-2018.bluemod.us/home-backup-power/in-home-assessment');
		cy.matchImageSnapshot('test2.js4');
	})

})
