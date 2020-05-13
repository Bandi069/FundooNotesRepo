using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using SeleniumNUnitTestProject.Pages;
using System;
using System.Threading;
using TechTalk.SpecFlow;

namespace SeleniumNUnitTestProject.Steps
{
    [Binding]
    public class UpdateNoteSteps
    {
        IWebDriver driver = new ChromeDriver();

        [Given(@"I  navigated to my application")]
        public void GivenINavigatedToMyApplication()
        {
            driver.Manage().Window.Maximize();
            string url = "";
            driver.Navigate().GoToUrl(url);
        }
        
        [Given(@"I type the data")]
        public void GivenITypeTheData(Table table)
        {
            ScenarioContext.Current.Pending();
        }
        
        [Given(@"I should able to see the Dashborad")]
        public void GivenIShouldAbleToSeeTheDashborad()
        {
            ScenarioContext.Current.Pending();
        }
        
        [When(@"I click Login Button")]
        public void WhenIClickLoginButton()
        {
            ScenarioContext.Current.Pending();
        }
        
        [Then(@"I want to update the (.*) and (.*)")]
        public void ThenIWantToUpdateTheAnd(string p0, string p1)
        {
          System.Threading.Thread.Sleep(5000);
          //  UpdateNotePage updateNote = new UpdateNotePage(driver);
          //  updateNote.Click(p0, p1);
        }
        
        [Then(@"I click Close button")]
        public void ThenIClickCloseButton()
        {

            //UpdateNotePage updateNote = new UpdateNotePage(driver);
           // updateNote.ClickClose();
        }
    }
}
