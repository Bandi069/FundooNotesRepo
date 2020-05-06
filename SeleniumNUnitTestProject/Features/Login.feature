Feature: Login
 Test the login functionality of application

@Browser:Chrome

Scenario Outline: Testing the login funtionality is working 
	Given I have navigate to my login application
	And I typed the <Email> and <Password>
	When I click on login button
	Then I see the dashboard page

	Examples:
		| Email                 | Password      |
		| venubandi89@gmail.com | sanVedha2212$ |