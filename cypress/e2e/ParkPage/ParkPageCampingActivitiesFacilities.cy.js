describe("Verify Camping Section on the Park Page", () => {
  beforeEach("Visit the Park Page", () => {
    cy.visit("https://www.ontarioparks.com/park/killarney");
    cy.url().should("include", "https://www.ontarioparks.com/park/killarney");
    cy.get("body > div.container > div > div > nav > ul > li:nth-child(2) > a")
      .click({ force: true });
  });

  it("Should display the headings and subheadings correctly", () => {
    cy.get("#camping>h2:nth-child(1)").should(
      "have.text",
      "Backcountry Camping"
    );
    cy.get("#camping>h3").should("have.length", 4);
  });
  it("should display table entry correctly", () => {
    cy.get(
      "#camping > table > tbody > tr:nth-child(6) > td:nth-child(1)"
    ).should("have.text", "Killarney\n\t\t\t");
    cy.get(
      "#camping > table > tbody > tr:nth-child(8) > td:nth-child(2)"
    ).should("have.text", 21);
    cy.get(
      "#camping > table > tbody > tr:nth-child(8) > td:nth-child(3)"
    ).should("have.text", 13);
  });
});

describe("Verify Activities Section on the Park Page", () => {
  beforeEach("Visit the Park Page", () => {
    cy.visit("https://www.ontarioparks.com/park/killarney");
    cy.url().should("include", "https://www.ontarioparks.com/park/killarney");
    cy.get("body > div.container > div > div > nav > ul > li:nth-child(3) > a")
      .scrollIntoView()
      .click({ force: true });
  });

  it("Should display the headings and subheadings correctly", () => {
    cy.get("#activities > h2").should("have.length", 10);
    cy.get("#activities > h2:nth-child(19)").should("have.text", "Hiking");
    cy.get("#activities > p:nth-child(22) > strong").should(
      "have.text",
      "Cranberry Bog Trail 4 km (2.5 hours) moderate"
    );
  });
});

describe("Verify Facilities Section", () => {
    beforeEach("Visit the Park Page", () => {
      cy.visit("https://www.ontarioparks.com/park/killarney");
      cy.url().should("include", "https://www.ontarioparks.com/park/killarney");
      cy.get("body > div.container > div > div > nav > ul > li:nth-child(4) > a")
        .click({ force: true });
    });
  
    it("Should display the headings and subheadings correctly", () => {
      cy.get("#facilities > h2").should("have.length", 9);
      cy.get("#facilities > h2:nth-child(7)").should("have.text", "Day Use");
      cy.get("#facilities > p:nth-child(18) > a").should(
        "have.attr", 'href',
        "/reservations"
      );
    });
  });
