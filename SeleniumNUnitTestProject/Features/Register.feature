Feature: Register
	In order to avoid silly mistakes
	As a math idiot
	I want to be told the sum of two numbers

@mytag
Scenario: Verify register the account(+ve cases) 
	Given I have navigate to register application form
	And I typed the <FirstName>,<LastName>,<Email> and <Password>
	When I click on the submit button
	Then Isee the login page
	Examples: 
	| FirstName | LastName | Email                 | Password     |
	| Venu      | Bandi    | bandivenu89@gmail.com | sanVedha2212 |
