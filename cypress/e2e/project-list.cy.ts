import capitalize from "lodash/capitalize";
import mockProjects from "../fixtures/projects.json";
import { statusConversion } from "../../api/projects.types";

describe("Project List", () => {
  beforeEach(() => {
    let sendResponse: () => void;

    const trigger = new Promise<void>((resolve) => {
      sendResponse = resolve;
    });

    // setup request mock
    cy.intercept("GET", "https://prolog-api.profy.dev/project", (req) => {
      return trigger.then(() => {
        req.reply({ fixture: "projects.json" });
      });
    }).as("getProjects");

    // open projects page
    cy.visit("http://localhost:3000/dashboard");

    cy.get("div");

    cy.get('[data-testid="loading_indicator"]').then(() => {
      sendResponse();
    });

    // wait for request to resolve and test loading indicator
    cy.wait("@getProjects");
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("renders the projects", () => {
      const languageNames = ["React", "Node.js", "Python"];

      // get all project cards
      cy.get("main")
        .find("li")
        .each(($el, index) => {
          // check that project data is rendered
          cy.wrap($el).contains(mockProjects[index].name);
          cy.wrap($el).contains(languageNames[index]);
          cy.wrap($el).contains(mockProjects[index].numIssues);
          cy.wrap($el).contains(mockProjects[index].numEvents24h);
          cy.wrap($el).contains(
            capitalize(statusConversion(mockProjects[index].status)),
          );
          cy.wrap($el)
            .find("a")
            .should("have.attr", "href", "/dashboard/issues");
        });
    });
  });
});
