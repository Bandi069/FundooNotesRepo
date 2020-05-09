using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using System;
using TechTalk.SpecFlow;

namespace SeleniumNUnitTestProject
{
    [Binding]
    public class AddNoteSteps
    {
        IWebDriver driver = new ChromeDriver();
        [Given(@"I should navigated to my application")]
        public void GivenIShouldNavigatedToMyApplication()
        {
           
        }
        
        [Given(@"I type the credentials")]
        public void GivenITypeTheCredentials(Table table)
        {
            ScenarioContext.Current.Pending();
        }
        
        [Given(@"I should see the Dashborad page")]
        public void GivenIShouldSeeTheDashboradPage()
        {
            ScenarioContext.Current.Pending();
        }
        
        [Given(@"I have write (.*) and (.*)")]
        public void GivenIHaveWriteAnd(string p0, string p1)
        {
            ScenarioContext.Current.Pending();
        }
        
        [When(@"I click Login Button in the login page")]
        public void WhenIClickLoginButtonInTheLoginPage()
        {
            ScenarioContext.Current.Pending();
        }
        
        [When(@"I click on the close button")]
        public void WhenIClickOnTheCloseButton()
        {
            ScenarioContext.Current.Pending();
        }
    }
}
