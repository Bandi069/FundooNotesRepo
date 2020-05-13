using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using SeleniumNUnitTestProject.Pages;
using System;
using TechTalk.SpecFlow;

namespace SeleniumNUnitTestProject.Steps
{
    [Binding]
    class ReminderSteps
    {
        IWebDriver driver = new ChromeDriver();

        [Given(@"I should navigate to displaynote Application")]
        public void GivenIShouldNavigateToDisplaynoteApplication()
        {
            ReminderPage reminderPage = new ReminderPage(driver);
            reminderPage.reminder();
        }

        [Given(@"I have click the Reminder icon")]
        public void GivenIHaveClickTheReminderIcon()
        {
            ReminderPage reminderPage = new ReminderPage(driver);
            reminderPage.select();
        }

        [When(@"I have the Select date and time")]
        public void WhenIHaveTheSelectDateAndTime()
        {
            ReminderPage reminderPage = new ReminderPage(driver);
            reminderPage.select();
        }

        [Then(@"I have fill the values (.*) and (.*)")]
        public void ThenIHaveFillTheValuesAnd(string p0, string p1)
        {
            ReminderPage reminderPage = new ReminderPage(driver);
            reminderPage.date(p0, p1);
        }

        [Then(@"I click on the save button")]
        public void ThenIClickOnTheSaveButton()
        {
            ReminderPage reminderPage = new ReminderPage(driver);
            reminderPage.clicksave();
        }
    }
}
