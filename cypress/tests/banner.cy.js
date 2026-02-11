context('Banner Block Acceptance Tests', () => {
  beforeEach(() => {
    cy.intercept('GET', `/**/*?expand*`).as('content');
    cy.intercept('GET', '/**/Document').as('schema');
    cy.viewport('macbook-16');
    cy.createContent({
      contentType: 'Document',
      contentId: 'document',
      contentTitle: 'Document',
    });
    cy.autologin();
    cy.visit('/');
    cy.wait('@content');
  });

  it('As editor I can add a Banner block', () => {
    cy.createContent({
      contentType: 'Document',
      contentId: 'blue-orchids',
      contentTitle: 'Blue Orchids',
      contentDescription: 'are growing on the mountain tops',
      path: '/document',
    });
    cy.visit('/document/edit');
    cy.wait('@schema');

    // WHEN I create a Banner block
    cy.addNewBlock('banner');
    cy.get('input[type="file"]').attachFile('halfdome2022.jpg', {
      subjectType: 'input',
      encoding: 'utf8',
    });

    cy.wait(500);
    cy.get('.field-wrapper-text #field-text').type('Blue Orchids');
    cy.get('.field-wrapper-additionalText #field-additionalText').type(
      'are growing on the mountain tops',
    );
    cy.get('.buttons-widget-option input[aria-label="Layout"]').click({
      force: true,
    });
    cy.get('#toolbar-save').click();

    // THEN I can see the Banner block
    cy.visit('/document');

    cy.get('.block.banner .banner-inner-container .text p')
      .eq(0)
      .contains('Blue Orchids');
    cy.get('.block.banner .banner-inner-container .text p')
      .eq(1)
      .contains('are growing on the mountain tops');
  });
});
