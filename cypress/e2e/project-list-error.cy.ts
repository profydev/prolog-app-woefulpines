describe("Project Failure to Load", () => {
  beforeEach(() => {
    // setup request mock
    cy.intercept("GET", "https://prolog-api.profy.dev/project", {
      statusCode: 404,
      body: "404 Not Found!",
      headers: {
        "x-not-found": "true",
      },
    }).as("getProjects");
  });

  it("Error page check", () => {
    cy.visit("http://localhost:3000/dashboard");

    //catch all requests
    cy.wait("@getProjects");
    cy.wait("@getProjects");
    cy.wait("@getProjects");
    cy.wait("@getProjects");

    cy.get('[data-testid="error_screen"]').contains(
      "There was a problem while loading the project data.",
    );

    cy.get('[data-testid="error_screen"]').get("button").contains("Try again");
  });
});
