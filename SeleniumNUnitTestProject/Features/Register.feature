Feature: Register
	Verify the functionility of Register form in my application

@mytag
@Browser:Chrome
Scenario Outline: Verify register the account(+ve cases) 
	Given I have navigate to Register application 
	And I typed the <FirstName>,<LastName>,<Email> and <Password>
	When I click on the submit button
	Then I navigate to the login page
	Examples: 
	| FirstName | LastName | Email                 | Password     |
	| Venu      | Bandi    | bandivenu89@gmail.com | sanVedha2212 |
