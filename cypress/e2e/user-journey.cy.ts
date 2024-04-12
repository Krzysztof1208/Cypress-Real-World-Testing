describe("User Journey", () => {
  it("The user can find and complete the course Testing Foundations", () => {
    cy.visit("http://localhost:3000")
    cy.getByData("course-1").find("a").contains("Get started").click()
    cy.location("pathname").should("equal", "/testing-foundations")
    cy.getByData("next-lesson-button").click()
    cy.location("pathname").should(
      "eq",
      "/testing-foundations/testing-is-a-mindset"
    )
    cy.getByData("challenge-answer-0").click()
    cy.getByData("next-lesson-button").should("exist").click()
    cy.location("pathname").should(
      "eq",
      "/testing-foundations/knowing-what-to-test"
    )
    cy.getByData("challenge-answer-0").click()
    cy.getByData("next-lesson-button").should("exist").click()
    cy.location("pathname").should(
      "eq",
      "/testing-foundations/manual-vs-automated-testing"
    )
    cy.getByData("challenge-answer-0").click()
    cy.getByData("next-lesson-button").should("exist").click()

    cy.location("pathname").should("eq", "/")
  })

  it("the user can find and complete course testing your first application", () => {
    cy.visit("http://localhost:3000")
    cy.getByData("course-0").find("a").eq(3).click()
    cy.url().should("contain", "/testing-your-first-application")
    cy.getByData("next-lesson-button").click()
    cy.url().should(
      "contain",
      "/testing-your-first-application/app-install-and-overview"
    )
    cy.getByData("challenge-answer-0").click()
    cy.getByData("next-lesson-button").should("exist").click()
    cy.url().should(
      "contain",
      "/testing-your-first-application/installing-cypress-and-writing-our-first-test"
    )
    cy.getByData("challenge-answer-0").click()
    cy.getByData("next-lesson-button").should("exist").click()
    cy.url().should(
      "contain",
      "/testing-your-first-application/setting-up-data-before-each-test"
    )
    cy.getByData("challenge-answer-0").click()
    cy.getByData("next-lesson-button").should("exist").click()
    cy.location("pathname").should("equal", "/")
  })
})
