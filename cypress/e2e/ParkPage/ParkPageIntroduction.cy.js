describe('Verify Introduction Section', () => {
    it('Verify Operating Dates', () => {
      cy.visit('https://www.ontarioparks.com/park/killarney')
      cy.url().should('include', 'https://www.ontarioparks.com/park/killarney')
      cy.get("#introduction > div > div:nth-child(1) > table > caption > h2").should('be.visible').and('contain', '2023 Operating Dates');
      
    })
  })