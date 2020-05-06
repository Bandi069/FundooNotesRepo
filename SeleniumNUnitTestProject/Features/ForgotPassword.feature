Feature: ForgotPassword
	Test for the ForgotPassword Funtionlity of my project

@mytag
@Browser:Chrome
Scenario: Verify of forgot password functionlity (+ve Case)
	Given I have navigate to Forgotpassword application
	And I have entetered the <Email>
	When I Click on Submit Button
	Then I display the login page of my application

	Examples:
		| Email                 |
		| bandivenu89@gmail.com |