class Home2 {
  name(sajid) {
    return cy.get(`div[class='form-group'] input[name='name']`);
  }
  email(emailofbuyer) {
    cy.get(`input[name='email']`).type(emailofbuyer);
  }
  password(password) {
    cy.get(`#exampleInputPassword1`).type(password);
  }
}

export default Home2;
