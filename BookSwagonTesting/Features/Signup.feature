Feature: Signup
	Verify the functionilities working in the application

@Browser:Chrome
Scenario: 1 Verify signup function of  the account(+ve cases)
	Given I have navigate to signup page of the application
	And  I have fill the details  <Email>,<Password> and <ConfirmPassword>
	When I click on the creataccount button
	Then I navigate to the login page

	Examples:
		| Email                 | Password | ConfirmPassword |
		| bandivenu89@gmail.com | venub818 | venub818        |

Scenario: 2 Login testing
	When I should enter the <Email> and <Password>
		| Email                 | Password |
		| bandivenu89@gmail.com | venub818 |
	Then I have to click on LoginButton
	Then I should see the Home page

Scenario: 3 Verifying the search option
	When I should press on Search area
	And I should enter a text to search list
	When I click on the search button in homepage
	Then It result should be Books list on Homepage

Scenario: 4 Testing to display search list Books
	When I should press buynow option in the list of books
	Then it should display place order page

Scenario: 5 Test to place an order of book
	When I click placeorder button for Place an order
	Then It should show continue to order

Scenario: 6 Test Logout option
	When I click on the Logout button
	Then It should navigate to Login page