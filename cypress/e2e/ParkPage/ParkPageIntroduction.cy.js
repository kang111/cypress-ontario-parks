describe("Verify Operating Dates Section, Facilities Section and Activities Section", () => {
  it("displays the correct park name - Killarny", () => {
    cy.visit("https://www.ontarioparks.com/park/killarney");
    cy.url().should("include", "https://www.ontarioparks.com/park/killarney");
    cy.get("body > div:nth-child(3) > div > div > div.col-sm-12.col-md-10 > h1")
      .should("be.visible")
      .and("contain", "Killarney Provincial Park");
  });

  it("displays correct sub heading - Operating Dates", () => {
    cy.visit("https://www.ontarioparks.com/park/killarney");
    cy.url().should("include", "https://www.ontarioparks.com/park/killarney");
    cy.get("#introduction > div > div:nth-child(1) > table > caption > h2")
      .should("be.visible")
      .and("contain", "2023 Operating Dates");
  });

  it("displays correct park name, opening and closing dates", () => {
    cy.visit("https://www.ontarioparks.com/park/killarney");
    cy.url().should("include", "https://www.ontarioparks.com/park/killarney");
    cy.get(
      "#introduction > div > div:nth-child(1) > table > tbody > tr > td:nth-child(1)"
    )
      .should("be.visible")
      .and("contain", "Killarney");
    cy.get(
      "#introduction > div > div:nth-child(1) > table > tbody > tr > td:nth-child(4) > span:nth-child(1)"
    )
      .should("be.visible")
      .and("have.text", "January 1, 2023 to December 31, 2023");
  });

  it("displays correct sub heading - Facilities", () => {
    cy.visit("https://www.ontarioparks.com/park/killarney");
    cy.url().should("include", "https://www.ontarioparks.com/park/killarney");
    cy.get("#introduction > div > div:nth-child(1) > div.row.mt-3 > div > h2")
      .should("be.visible")
      .and("have.text", "Facilities");
  });

  it("should display correct availability of facilities", () => {
    cy.visit("https://www.ontarioparks.com/park/killarney");
    cy.url().should("include", "https://www.ontarioparks.com/park/killarney");
    cy.get(
      "#introduction > div > div:nth-child(1) > div.row.mt-3 > div > img:nth-child(29)"
    )
      .should("be.visible")
      .and("have.attr", "src", "/images/svg/icons/playgrounds_inactive.svg");
    cy.get(
      "#introduction > div > div:nth-child(1) > div.row.mt-3 > div > img:nth-child(41)"
    )
      .should("be.visible")
      .and("have.attr", "src", "/images/svg/icons/roofedaccommodation.svg");
  });

  it("displays correct sub heading - Activites", () => {
    cy.visit("https://www.ontarioparks.com/park/killarney");
    cy.url().should("include", "https://www.ontarioparks.com/park/killarney");
    cy.get(
      "#introduction > div > div:nth-child(1) > div:nth-child(3) > div > h2"
    )
      .should("be.visible")
      .and("have.text", "Activities");
  });

  it("should display correct availability of activities", () => {
    cy.visit("https://www.ontarioparks.com/park/killarney");
    cy.url().should("include", "https://www.ontarioparks.com/park/killarney");
    cy.get(
      "#introduction > div > div:nth-child(1) > div:nth-child(3) > div > img:nth-child(15)"
    )
      .should("be.visible")
      .and(
        "have.attr",
        "src",
        "/images/svg/icons/dark_sky_viewing_inactive.svg"
      );
    cy.get(
      "#introduction > div > div:nth-child(1) > div:nth-child(3) > div > img:nth-child(23)"
    )
      .should("be.visible")
      .and("have.attr", "src", "/images/svg/icons/hunting.svg");
  });
  it("Should display Friends and ParkBus Links", () => {
    cy.visit("https://www.ontarioparks.com/park/killarney");
    cy.url().should("include", "https://www.ontarioparks.com/park/killarney");
    cy.get(
      "#introduction > div > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div > a"
    ).should("have.attr", "href", "/friends");
    cy.get(
      "#introduction > div > div:nth-child(1) > div:nth-child(5) > div:nth-child(2) > div > a"
    ).should("have.attr", "href", "http://www.parkbus.ca");
    cy.get(
      "#introduction > div > div:nth-child(1) > div:nth-child(5) > div:nth-child(2) > div > p > a"
    ).should("have.attr", "href", "http://www.parkbus.ca");
  });
});

describe("Verify General Information Section and Social Links", () => {
  it("Displays the Address and Phone", () => {
    cy.visit("https://www.ontarioparks.com/park/killarney");
    cy.url().should("include", "https://www.ontarioparks.com/park/killarney");
    cy.get(
      "#introduction > div > div:nth-child(2) > div.row > div:nth-child(1) > p:nth-child(2)"
    ).should("have.text", "705-287-2900");
    cy.get(
      "#introduction > div > div:nth-child(2) > div.row > div:nth-child(2) > p:nth-child(2)"
    ).should("have.text", "960 Highway #637Killarney, ON, ONP0M 2A0");
  });

  it("Verifies fb, twitter, insta links", () => {
    cy.visit("https://www.ontarioparks.com/park/killarney");
    cy.url().should("include", "https://www.ontarioparks.com/park/killarney");
    cy.get(
      "#introduction > div > div:nth-child(2) > div.row > div.col-sm-12 > a:nth-child(2)"
    ).should("have.attr", "href", "https://www.facebook.com/KillarneyPP/");
    cy.get(
      "#introduction > div > div:nth-child(2) > div.row > div.col-sm-12 > a:nth-child(3)"
    ).should("have.attr", "href", "http://www.twitter.com/KillarneyPP");
    cy.get(
      "#introduction > div > div:nth-child(2) > div.row > div.col-sm-12 > a:nth-child(4)"
    ).should("have.attr", "href", "https://www.instagram.com/killarneypp/");
  });
});

describe("Verify What You'll like section and flickr album ", () => {
  it("should have expected list entry", () => {
    cy.visit("https://www.ontarioparks.com/park/killarney");
    cy.url().should("include", "https://www.ontarioparks.com/park/killarney");
    cy.get(
      "#introduction > div > div:nth-child(2) > div.intro_list > ul>li"
    ).should("have.length", 7);
    cy.get(
      "#introduction > div > div:nth-child(2) > div.intro_list > ul > li:nth-child(6)"
    ).should("have.text", "Yurt accommodation available year-round.");
  });

  it("Should Display Flickr Image and Full Album Link ", () => {
    cy.visit("https://www.ontarioparks.com/park/killarney");
    cy.url().should("include", "https://www.ontarioparks.com/park/killarney");

    cy.get("#introduction > div > div:nth-child(2) > iframe")
      .scrollIntoView()
      .then(($iframe) => {
        console.log($iframe);
        const $body = $iframe.contents().find("body");
        cy.wrap($body)
          .find("div > div > a:nth-child(1)")
          .should("be.visible")
          .and(
            "have.attr",
            "href",
            "https://www.flickr.com/photos/ontarioparks/20677735822/in/album-72157657374339916"
          );
      });
    cy.get("#introduction > div > div:nth-child(2) > a").should(
      "have.attr",
      "href",
      "https://www.flickr.com/photos/ontarioparks/albums/72157657374339916"
    );
  });
});
