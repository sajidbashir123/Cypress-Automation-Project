export class Home {
  name(nameofbuyer) {
    cy.get(`div[class='form-group'] input[name='name']`).type(
      " 'Sajid'->Don't move to entire code just change here"
    );
  }
  email(emailofbuyer) {
    cy.get(`input[name='email']`).type(emailofbuyer);
  }
  password(password) {
    cy.get(`#exampleInputPassword1`).type(password);
  }
}
