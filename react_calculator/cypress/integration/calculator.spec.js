describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should have working number buttons", () => {
    cy.get("#number2").click();
    cy.get(".display").should("contain", "2");
  });

  it("should update the display with the result of the operation", () => {
    cy.get("#number2").click();
    cy.get("#operator_add").click();
    cy.get("#number2").click();
    cy.get(".display").should("contain", "2");
  });

  it("should be able to run multiple operators", () => {
    cy.get("#number1").click();
    cy.get("#operator_add").click();
    cy.get("#number4").click();
    cy.get("#operator-subtract").click();
    cy.get("#number3").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "2");
  });

  it("should display positive/negative/decimals/infinite numbers", () => {
    cy.get("#number1").click();
    cy.get("#operator_add").click();
    cy.get("#number2").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "3");
    cy.get("#operator-subtract").click();
    cy.get("#number4").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "-1");
    cy.get("#operator_add").click();
    cy.get("#number2").click();
    cy.get("#decimal").click();
    cy.get("#number5").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "1.5");
    cy.get("#operator_add").click();
    Array.from(Array(100)).forEach((x, i) => {
      cy.get("#number9").click();
    });
    cy.get("#operator-multiply").click();
    cy.get(".display").should("contain", "Infinity");
  });

  it("should show an error when divided by zero", () => {
    cy.get("#number4").click();
    cy.get("#operator-divide").click();
    cy.get("#number0").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "CANT DIVIDE BY ZERO");
  });
});
