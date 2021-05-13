describe('When: I use the reading list feature', () => {
  beforeEach(() => {
    cy.startAt('/');
    
  });

  it('Then: I should see my reading list', () => {
    cy.get('[data-testing="toggle-reading-list"]').click();

    cy.get('[data-testing="reading-list-container"]').should(
      'contain.text',
      'My Reading List'
    );
  });

  
  it('Then: I should see undo action on removing reading list',() => {
    cy.get('input[type="search"]').type('javascript');

    cy.get('form').submit();

    cy.get('[data-testing="book-item"]').should('have.length.greaterThan', 1);

    cy.get('[data-testing="add-book"]').first().click({force: true});
    cy.get('[data-testing="toggle-reading-list"]').click();
    cy.get('[data-testing="remove-book"]').click({ multiple: true });
    cy.wait(5000).then(()=> {
      cy.get('simple-snack-bar').should('contain.text', 'Undo').within(() => {
          cy.get('button').click();
          
        
      });
      cy.get('.reading-list-item')
    })
    
  });

  it('Then: I should see undo action on adding reading list',() => {
    cy.get('input[type="search"]').type('javascript');

    cy.get('form').submit();

    cy.get('[data-testing="book-item"]').should('have.length.greaterThan', 1);
    cy.get('[data-testing="add-book"]').first().click({force: true});
    cy.get('simple-snack-bar').should('contain.text', 'Undo').within(() => {
            cy.get('button').click();
          
        });
        cy.get('[data-testing="toggle-reading-list"]').click();
      cy.get('.reading-list-item').should('not.exist');

    
  });

  it('Then: I should see book as marked in the reading list',() => {
    cy.get('input[type="search"]').type('javascript');

    cy.get('form').submit();

    cy.get('[data-testing="book-item"]').should('have.length.greaterThan', 1);
    cy.get('[data-testing="add-book"]').first().click({force: true});
    cy.get('[data-testing="toggle-reading-list"]').click();
    cy.get('input[type="checkbox"]').check();

    
  });
  
});
