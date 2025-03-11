context('Basic Acceptance Tests', () => {
  describe('Banner Block Tests', () => {
    beforeEach(() => {
      // given a logged in editor and a page in edit mode
      cy.viewport('macbook-16');
      cy.createContent({
        contentType: 'Image',
        contentId: 'my-image',
        contentTitle: 'My Image',
      });
      cy.createContent({
        contentType: 'Document',
        contentId: 'my-page',
        contentTitle: 'My Page',
      });
      cy.autologin();
      cy.intercept('GET', '/**/my-page*').as('content');
    });

    it('As editor I can add a page with a banner block', () => {
      cy.visit('/my-page');
      cy.navigate('/my-page/edit');
      cy.wait('@content');

      cy.getSlate().click();
      cy.get('.button .block-add-button').click({ force: true });
      cy.get('.blocks-chooser [aria-label="Unfold Common blocks"]').click();
      cy.findByText('Banner').click();
      cy.get('.toolbar-inner [aria-label="Pick an existing image"]').click();
      cy.get('[aria-label="Home"] .icon').click();
      cy.get('[aria-label="Select My Image"] img').click();
      cy.get('#field-alt').type('Plone Logo');
      cy.get('#field-text').type('Lorem Ipsum');
      cy.get('#field-additionalText').type('dolor sit amet');
      cy.get('#toolbar-save').click();
      cy.wait('@content');
    });
  });
});
