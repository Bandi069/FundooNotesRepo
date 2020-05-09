Feature: Logout
	Verify the logout functionality of my application

@mytag
Scenario Outline: Testing for logout functionality(+ve case) 
	Given I sholud navigate to dashbaord page of the application
	#And I have click on profile picture
	When I press on the singout button in the dashboard
	Then it displays loginpage
