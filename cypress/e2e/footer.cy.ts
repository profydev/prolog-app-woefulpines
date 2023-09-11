const address = "http://localhost:3000/";
const pages = [
  "dashboard",
  "dashboard/issues",
  "dashboard/alerts",
  "dashboard/users",
  "dashboard/settings",
];

function footerContentAssert() {
  cy.get("footer").contains("Docs").should("have.attr", "href", "#");

  cy.get("footer").contains("API").should("have.attr", "href", "#");

  cy.get("footer").contains("Help").should("have.attr", "href", "#");

  cy.get("footer").contains("Community").should("have.attr", "href", "#");
}

describe("Footer", () => {
  pages.forEach((page) =>
    it("Should visit", () =>
      cy.visit(address + page).then(footerContentAssert)),
  );
});
