Feature: Reminder
	Test  Reminder functionality of my application
	want to verify if the reminder are working as expected

@Browser:Chrome

Scenario: Verify if the Reminder functionality is working (+ve case) 
    Given I should navigate to displaynote Application
	And I have click the Reminder icon
	When I have the Select date and time 
	Then I have fill the values <date> and <time>
	Then I click on the save button

	Examples: 
	| date     | time    |
	| 5/9/2020 | 08:00PM |
