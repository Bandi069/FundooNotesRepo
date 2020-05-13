Feature: SearchBook
	Test the search a book functionality in my application

@Browser:Chrome
Scenario: Verify search a book in application
	Given I have navigate to my login application
	And I enter details <Email> and <Password>
	When I click on login button
	Then I should see the main page
	#Scenario: Search Book list
	When I have press on Search box
	And I should enter a text for search
	When I click on the search button
	Then Result should be Books list on Homepage
	When I shoud press buynow option 

	