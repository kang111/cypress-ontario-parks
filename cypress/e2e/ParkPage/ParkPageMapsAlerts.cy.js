describe("Verify the Maps Section", () => {
  beforeEach("Open the Park Page", () => {
    cy.visit("https://www.ontarioparks.com/park/killarney");
    cy.url().should("include", "https://www.ontarioparks.com/park/killarney");
    cy.get(
      "body > div.container > div > div.col-12 > nav > ul > li:nth-child(5) > a"
    ).click({ force: true });
  });

  it("Displays map area correctly", () => {
    cy.get("#map_canvas").should("exist").and("be.visible");
  });

  it("Displays Map Address and links Correctly", () => {
    cy.get(
      "#maps > div > div.col-sm-4 > div.gps_list > ul > li > p:nth-child(2)"
    ).should("have.text", "Gatehouse - George Lake Campground");
    cy.get(
      "#maps > div > div.col-sm-4 > div.map_list > div > div > p:nth-child(2) > a"
    )
      .should(
        "have.attr",
        "href",
        "/pdf/maps/killarney/george_lake_campground.pdf"
      )
      .and("have.text", "George Lake Campground Map");
    cy.get(
      "#maps > div > div.col-sm-4 > div.map_list > div > div > p:nth-child(3) > a"
    )
      .should("have.attr", "href", "/pdf/maps/killarney/ski_trails.pdf")
      .and("have.text", "Ski Trails");
  });

  it("displays the legends pop up correctly", () => {
    cy.get("#maps > div > div.col-sm-8 > button").click({ force: true });
    cy.get("#legendModal > div > div > div.modal-header > h2")
      .should("be.visible")
      .and("have.text", "Map Legend");
    cy.get(
      "#legendModal > div > div > div.modal-body > div.card-body > div:nth-child(2) > div:nth-child(4) > div > p"
    ).should("have.text", " Museum");
    cy.get(
      "#legendModal > div > div > div.modal-body > div.modal-footer > button"
    ).click();
  });
});

describe("Verify the Alerts Section", () => {
  beforeEach("Open the Park Page", () => {
    cy.visit("https://www.ontarioparks.com/park/killarney");
    cy.url().should("include", "https://www.ontarioparks.com/park/killarney");
    cy.get(
      "body > div.container > div > div > nav > ul > li:nth-child(6) > a"
    ).click({ force: true });
  });

  it("Should display the correct headings and sub headings", () => {
    const currentDate = new Date();

    cy.get("#maincontent > div:nth-child(1) > div > h2")
      .should("contain", currentDate.getDate())
      .and("contain", currentDate.toLocaleString("default", { month: "long" }))
      .and("contain", currentDate.getFullYear());

    cy.get(
      "#maincontent > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div > h2"
    ).should("have.text", "Fire Bans");
    cy.get(
      "#maincontent > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div > img"
    ).should("have.attr", "src", "/images/icons/alerts/fireban-full.png");
  });
});
