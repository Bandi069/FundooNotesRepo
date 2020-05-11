Feature: Signup
	Verify the functionility of Signup form in the application

@Browser:Chrome
Scenario Outline: Verify signup function of  the account(+ve cases)
	Given I have navigate to signup page of the application
	And  I have fill the details  <Email>,<Password> and <ConfirmPassword>
	When I click on the creataccount button
	Then I navigate to the login page

	Examples:
		| Email                 | Password      | ConfirmPassword |
		| bandivenu89@gmail.com | sanVedha2212$ | sanVdeha2212$   |