Feature: AddNote
	Test  AddNote functionality of my application
	verifying the Title and Description are working as expected

@Browser:Chrome
Scenario: Verify AddNote functionlity is working(+Ve Case)
	Given I should navigated to my application
	And I type the credentials
		| Email                 | Password      |
		| bandivenu89@gmail.com | sanVedha2212$ |
	When I click Login Button in the login page
	Given I should see the Dashborad page
	Given I have write <Title> and <Description>
	When I click on the close button

	Examples:
		| Title                    | Description |
		| Selenium Automation Test | Verify Test |