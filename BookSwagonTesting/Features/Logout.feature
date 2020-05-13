Feature: Logout
	Verify the logout functionality of  application

@Browser:Chrome
Scenario Outline: Testing for logout functionality of application
	Given I have navigated to Login page of my Application
	And I should enter <Email> and <Password>
	When I click on the login button to navigate dashboard
	When I have click on profile name
	Then I see the few options
	When I click signout button
	Then I should see the login page