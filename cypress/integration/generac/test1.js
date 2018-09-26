/// <reference types="Cypress" />
context('Actions', () => {

	it('test1.js0', () => {
		cy.visit('http://www.honeywellgenerators.com/');
		cy.matchImageSnapshot('test1.js0');
	})

	it('test1.js0_b', () => {
		cy.visit('http://generac-honeywell-upgrade-2018.bluemod.us/');
		cy.matchImageSnapshot('test1.js0');
	})

	it('test1.js1', () => {
		cy.visit('http://www.honeywellgenerators.com/portable-power');
		cy.matchImageSnapshot('test1.js1');
	})

	it('test1.js1_b', () => {
		cy.visit('http://generac-honeywell-upgrade-2018.bluemod.us/portable-power');
		cy.matchImageSnapshot('test1.js1');
	})

	it('test1.js2', () => {
		cy.visit('http://www.honeywellgenerators.com/service-support/product-information');
		cy.matchImageSnapshot('test1.js2');
	})

	it('test1.js2_b', () => {
		cy.visit('http://generac-honeywell-upgrade-2018.bluemod.us/service-support/product-information');
		cy.matchImageSnapshot('test1.js2');
	})

	it('test1.js3', () => {
		cy.visit('http://www.honeywellgenerators.com/contact-us');
		cy.matchImageSnapshot('test1.js3');
	})

	it('test1.js3_b', () => {
		cy.visit('http://generac-honeywell-upgrade-2018.bluemod.us/contact-us');
		cy.matchImageSnapshot('test1.js3');
	})

	it('test1.js4', () => {
		cy.visit('http://www.honeywellgenerators.com/commercial-power/mobile-link');
		cy.matchImageSnapshot('test1.js4');
	})

	it('test1.js4_b', () => {
		cy.visit('http://generac-honeywell-upgrade-2018.bluemod.us/commercial-power/mobile-link');
		cy.matchImageSnapshot('test1.js4');
	})

})
