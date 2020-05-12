using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using System;
using TechTalk.SpecFlow;

namespace BookSwagonTesting.Steps
{
    [Binding]
    public class SearchBookSteps
    {
        IWebDriver driver = new ChromeDriver();
        [Given(@"I Sould navigate to login application page")]
        public void GivenISouldNavigateToLoginApplicationPage()
        {
            driver.Manage().Window.Maximize();

        }
        
        [Given(@"I have entered details (.*) and (.*)")]
        public void GivenIHaveEnteredDetailsAnd(string p0, string p1)
        {
            ScenarioContext.Current.Pending();
        }
        
        [When(@"I press on Login button")]
        public void WhenIPressOnLoginButton()
        {
            ScenarioContext.Current.Pending();
        }
        
        [When(@"I have press on Search box")]
        public void WhenIHavePressOnSearchBox()
        {
            ScenarioContext.Current.Pending();
        }
        
        [When(@"I should enter a text for search")]
        public void WhenIShouldEnterATextForSearch()
        {
            ScenarioContext.Current.Pending();
        }
        
        [When(@"I click on the search button")]
        public void WhenIClickOnTheSearchButton()
        {
            ScenarioContext.Current.Pending();
        }
        
        [Then(@"It should show Dashboard page")]
        public void ThenItShouldShowDashboardPage()
        {
            ScenarioContext.Current.Pending();
        }
        
        [Then(@"Result should be Books list on Homepage")]
        public void ThenResultShouldBeBooksListOnHomepage()
        {
            ScenarioContext.Current.Pending();
        }
    }
}
