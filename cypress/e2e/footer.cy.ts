const address = "http://localhost:3000/";
const pages = ["dashboard","dashboard/issues", "dashboard/alerts", "dashboard/users", "dashboard/settings"];

function footerContentAssert(){
  cy.get("footer")
    .contains("Docs")
  cy.get("footer")
    .contains("API")
  cy.get("footer")
    .contains("Help")
  cy.get("footer")
    .contains("Community");
}

describe('Footer', () => {
  pages.forEach(
    (page) => 
      it("Should visit", () => 
        cy.visit(address + page)
        .then(footerContentAssert)
      )
  )});