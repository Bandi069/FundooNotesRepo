Feature: UpdateNote
	Test the Updatenote functionality of application

#@mytag
@Browser:Chrome
Scenario: Verify  Updatenote functionality is working
	Given I  navigated to my application
	And I type the data
		| Email                 | Password      |
		| bandivenu89@gmail.com | sanVedha2212$ |
	When I click Login Button
	Given I should able to see the Dashborad
	Then I want to update the <Title> and <Description>
	Then I click Close button

	Examples:
		| Title          | Description |
		| Selenium  Test | Automation  |