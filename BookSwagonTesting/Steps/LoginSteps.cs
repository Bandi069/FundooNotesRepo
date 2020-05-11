using BookSwagonTesting.Pages;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using System;
using TechTalk.SpecFlow;

namespace BookSwagonTesting
{
    [Binding]
    public class LoginSteps
    {
        IWebDriver driver = new ChromeDriver(0);
        [Given(@"I have navigate to my login application")]
        public void GivenIHaveNavigateToMyLoginApplication()
        {
            driver.Manage().Window.Maximize();
            driver.Navigate().GoToUrl("https://www.bookswagon.com/login");
        }
        
        [Given(@"I enter details (.*) and (.*)")]
        public void GivenIEnterDetailsAnd(string p0, string p1)
        {
            LoginPage loginPage = new LoginPage();

        }
        
        [When(@"I click on login button")]
        public void WhenIClickOnLoginButton()
        {
            ScenarioContext.Current.Pending();
        }
        
        [Then(@"I should see the dashboard page")]
        public void ThenIShouldSeeTheDashboardPage()
        {
            ScenarioContext.Current.Pending();
        }
    }
}
