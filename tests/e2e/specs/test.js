// https://docs.cypress.io/api/introduction/api.html

describe('First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Agile Principles')
  })
})

describe('Test if first principle displayed', () => {
  it('check first principle', () => {
    cy.visit('/')

    cy.get(".message-title").contains("Satisfy the Customer")
    cy.get(".message-description").contains("Our highest priority is to satisfy the customer through early and continuous delivery of valuable software.")
  })
})

describe('Test if chevron click', () => {
  it('load root', () => {
    cy.visit('/')

    cy.contains('h1', 'Agile Principles')
  })

  it('click move right', () => {
    cy.get('.chevron--right').click()

    cy.get(".message-title").contains("Welcome Change")
    cy.url().should('include', '/?page=1')
  })

  it('click move left', () => {

    cy.get('.chevron--left').click()

    cy.get(".message-title").contains("Satisfy the Customer")
    cy.url().should('include', '/?page=0')
  })
})

describe('Test if page selector click', () => {
  it('load root', () => {
    cy.visit('/')

    cy.contains('h1', 'Agile Principles')
  })

  it('click move page 4', () => {

    cy.get(".page-picker").within(() => {
      const pages = cy.get(".page-item")

      pages.should("have.length", 12)

      pages.next().next().next().first().click()
    })

    cy.get(".message-title").contains("Work Together")
    cy.url().should('include', '/?page=3')
  })

  it('click move page 8', () => {

    cy.get(".page-picker").within(() => {
      const pages = cy.get(".page-item")

      pages.should("have.length", 12)

      pages.next().next().next().next().next().next().next().first().click()
    })

    cy.get(".message-title").contains("Sustainable Development")
    cy.url().should('include', '/?page=7')
  })

  it('click current page (8)', () => {

    cy.get(".page-picker").within(() => {
      const pages = cy.get(".page-item")

      pages.should("have.length", 12)

      pages.next().next().next().next().next().next().next().first().click()
    })

    cy.get(".message-title").contains("Sustainable Development")

    cy.url().should('include', '/?page=7')
  })
})
