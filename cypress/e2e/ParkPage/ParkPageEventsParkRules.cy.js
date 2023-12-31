describe("verify the Events Section", () => {
  beforeEach("Open the Park Page", () => {
    cy.visit("https://www.ontarioparks.com/park/killarney");
    cy.url().should("include", "https://www.ontarioparks.com/park/killarney");
    cy.get(
      "body > div.container > div > div > nav > ul > li:nth-child(7) > a"
    ).click({ force: true });
  });

  it("displays the correct event in calendar", () => {
    cy.get(
      "#calendar > div.fc-header-toolbar.fc-toolbar.fc-toolbar-ltr > div:nth-child(1) > div > button.fc-next-button.fc-button.fc-button-primary > span"
    ).click({ force: true });
    cy.get(
      "#calendar > div.fc-view-harness.fc-view-harness-active > div > table > thead > tr > td > div > div > table > tbody > tr > th.fc-col-header-cell.fc-day.fc-day-sat.fc-day-future > div > a"
    )
      .should("exist")
      .and("be.visible")
      .and("have.text", "Sat 6/10");
    cy.get(
      "#calendar > div.fc-view-harness.fc-view-harness-active > div > table > tbody > tr > td > div > div > div > table > tbody > tr > td.fc-daygrid-day.fc-day.fc-day-sat.fc-day-future > div > div.fc-daygrid-day-events > div > a > div.fc-event-title"
    ).should("have.text", "Spring Loon Count");
  });

  it("displays correct event in list view", () => {
    cy.get(
      "#calendar > div.fc-header-toolbar.fc-toolbar.fc-toolbar-ltr > div:nth-child(3) > button"
    ).click({ force: true });

    cy.get(
      "#calendar > div.fc-view-harness.fc-view-harness-active > div > div > table > tbody > tr:nth-child(7) > th > div > a.fc-list-day-text"
    ).should("have.text", "June 10, 2023");

    cy.get(
      "#calendar > div.fc-view-harness.fc-view-harness-active > div > div > table > tbody > tr:nth-child(8)"
    ).click({ force: true });

    cy.get("#modalTitle").should("have.text", "Spring Loon Count");

    cy.wait(500);

    cy.get("#calendarModal > div > div > div.modal-footer > button").click({
      force: true,
    });
  });
});

describe("Verify the Park Rules Section", () => {
  beforeEach("Open the Park Page", () => {
    cy.visit("https://www.ontarioparks.com/park/killarney");
    cy.url().should("include", "https://www.ontarioparks.com/park/killarney");
    cy.get(
      "body > div.container > div > div > nav > ul > li:nth-child(8) > a"
    ).click({ force: true });
  });

  it("verifies heading and text on page", () => {
    cy.get(
      "#rules > div > div > h2"
    ).should("have.text", "Summary of Provincial Park Offences");
    cy.get(
      "#rules > div > div > table > tbody > tr:nth-child(4) > td:nth-child(1) > table > tbody > tr:nth-child(1) > th:nth-child(1)"
    ).should("have.text", "Refuse");
    cy.get(
      "#rules > div > div > table > tbody > tr:nth-child(4) > td:nth-child(1) > table > tbody > tr:nth-child(2) > td:nth-child(1)"
    ).should("have.text", "- Litter or cause litter");
    cy.get(
      "#rules > div > div > table > tbody > tr:nth-child(4) > td:nth-child(1) > table > tbody > tr:nth-child(2) > td.pt-1.pb-1.align-middle"
    ).should("have.text", "$125.00");
  });
});
