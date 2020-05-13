using BookSwagonTesting.Pages;
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

        [Then(@"I should see the main page")]
        public void ThenIShouldSeeTheMainPage()
        {
            driver.Manage().Window.Maximize();
            driver.Navigate().GoToUrl("https://www.bookswagon.com/");
        }

        [Given(@"I have entered details (.*) and (.*)")]
        public void GivenIHaveEnteredDetailsAnd(string p0, string p1)
        {
            // ScenarioContext.Current.Pending();
            SearchBookPage searchBookPage = new SearchBookPage(driver);
            searchBookPage.Login(p0, p1);

        }
        
        [When(@"I press on Login button")]
        public void WhenIPressOnLoginButton()
        {
            SearchBookPage searchBookPage = new SearchBookPage(driver);
            searchBookPage.LoginClick();
        }
        
        [When(@"I have press on Search box")]
        public void WhenIHavePressOnSearchBox()
        {
            SearchBookPage searchBookPage = new SearchBookPage(driver);
            searchBookPage.Searchbox();
        }
        
        [When(@"I should enter a text for search")]
        public void WhenIShouldEnterATextForSearch()
        {
           // IWebElement book;
            SearchBookPage searchBookPage = new SearchBookPage(driver);
            searchBookPage.Searchtext("bandi book");
        }
        
        [When(@"I click on the search button")]
        public void WhenIClickOnTheSearchButton()
        {
            SearchBookPage searchBook = new SearchBookPage(driver);
            searchBook.ClickSearch();
        }
        
        [Then(@"It should show Dashboard page")]
        public void ThenItShouldShowDashboardPage()
        {
            SearchBookPage searchBookPage = new SearchBookPage(driver);

        }
        
        [Then(@"Result should be Books list on Homepage")]
        public void ThenResultShouldBeBooksListOnHomepage()
        {

        }
        [When(@"I shoud press buynow option")]
        public void WhenIShoudPressBuynowOption()
        {
            SearchBookPage searchBookPage = new SearchBookPage(driver);
            searchBookPage.buyclick();
        }
    }
}
