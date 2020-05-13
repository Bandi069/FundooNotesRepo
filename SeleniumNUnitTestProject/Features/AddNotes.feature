Feature: AddNotes
	Test the AddNotes functionality of application

@Browser:Chrome
Scenario: Verify if the AddNote functionality is working (+ve case) 
	#Given  I have navigate to my login application
	#And I type the datas
	#| Email                 | Password |
	#| bandivenu89@gmail.com | sanvedha   |
	#When  I click on login button
    Given I should see  Dashborad page
	Given I have put <Title> and <Description> 
	When I click close button
	
	Examples: 
	| Title    | Description |
	| Selenium | Testing     |
	
