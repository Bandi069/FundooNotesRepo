Feature: SearchBook
	Test the search a book functionality in my application

@Browser:Chrome
Scenario: Verify search a book in application
	Given I Sould navigate to login application page
	And I have entered details <Email> and <Password>
	Examples: 
	| Email                 | Password  |
	| bandivenu89@gmail.com | bandiv818 |
	When I press on Login button
	Then It should show Dashboard page 
	When I have press on Search box
	And I should enter a text for search
	When I click on the search button
	Then Result should be Books list on Homepage 
