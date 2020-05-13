Feature: Color
	Test  Color functionality of my application
	Verify if the  Colors are working as expected

@Browser:Chrome
Scenario: Verify if the Color functionality is working (+ve case) 
	Given I have navigated to displaysashboard application page
	 And I have click the ColorPalette icon
	 Then I click on the color from colorPalette
