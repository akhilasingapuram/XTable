describe("DateViewTable Component Tests", () => {
  beforeEach(() => {
    // Assuming you have set up the component to be served on a specific route
    cy.visit("https://xtable.vercel.app/");
  });

  it("Renders the table with initial data", () => {
    cy.get("h1").should("contain", "Date and Views Table");
    cy.get("table").should("exist");
    cy.get("table tbody tr").should("have.length", 5); // Assuming 5 rows of data
  });

  it("Sorts the table by date when sort by date button is clicked", () => {
    cy.get("button").contains("Sort by Date").click();
    // Verify if the first row contains the earliest date
    // Assuming date format is YYYY-MM-DD
    cy.get("table tbody tr")
      .first()
      .find("td")
      .first()
      .should("have.text", "2023-09-02");
  });

  it("Sorts the table by views when sort by views button is clicked", () => {
    cy.get("button").contains("Sort by Views").click();
    // Verify if the first row contains the highest views
    cy.get("table tbody tr").first().find("td").eq(1).should("contain", "200");
  });
});
