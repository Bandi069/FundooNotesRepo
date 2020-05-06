Feature: Login
 Test the login functionality of application
#	In order to avoid silly mistakes
#	As a math idiot
#	I want to be told the sum of two numbers
#
@mytag
@Browser:Chrome
#@Smoketest
Scenario Outline: Testing the login funtionality is working or not (+ve or -ve)
	Given I have navigate to my login application
	And I typed the <Emailid> and <Password>
	When I click on login button
	Then I see the dashboard page

Examples: 
| Emailid               | Password      |
| venubandi89@gmail.com | sanVedha2212$ |
