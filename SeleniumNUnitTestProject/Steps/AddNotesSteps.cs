using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using SeleniumNUnitTestProject.Pages;
using System;
using TechTalk.SpecFlow;

namespace SeleniumNUnitTestProject
{
    [Binding]
    public class AddNotesSteps
    {
        IWebDriver currentDriver = new ChromeDriver();

        [Given(@"I type the datas")]
        public void GivenITypeTheDatas(Table table)
        {
           // ScenarioContext.Current.Pending();
        }

        [Given(@"I should see  Dashborad page")]
        public void GivenIShouldSeeDashboradPage()
        {
            currentDriver.Manage().Window.Maximize();
            currentDriver.Navigate().GoToUrl("http://localhost:4200/dashboard/note");
        }

        [Given(@"I have put (.*) and (.*)")]
        public void GivenIHavePutAnd(string p0, string p1)
        {
            AddNotePage note = new AddNotePage(currentDriver);
            note.Addnote(p0,p1);
        }

        [When(@"I click close button")]
        public void WhenIClickCloseButton()
        {
            AddNotePage note = new AddNotePage(currentDriver);
            note.ClickClose();

        }

    }
}
