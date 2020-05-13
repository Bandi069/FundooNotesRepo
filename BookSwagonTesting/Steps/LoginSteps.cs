using BookSwagonTesting.Pages;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using System;
using TechTalk.SpecFlow;

namespace BookSwagonTesting
{
    [Binding]
    class LoginSteps
    {
        IWebDriver driver = new ChromeDriver();
        [Given(@"I have navigate to my login application")]
        public void GivenIHaveNavigateToMyLoginApplication()
        {
            driver.Manage().Window.Maximize();
            driver.Navigate().GoToUrl("https://www.bookswagon.com/login");
        }
        
        [Given(@"I enter details (.*) and (.*)")]
        public void GivenIEnterDetailsAnd(string Email, string Password)
        {
            LoginPage loginPage = new LoginPage(driver);
            loginPage.Login(Email, Password);

        }
        
        [When(@"I click on login button")]
        public void WhenIClickOnLoginButton()
        {
            LoginPage loginPage = new LoginPage(driver);
            loginPage.LoginClick();
        }
        
        [Then(@"I should see the dashboard page")]
        public void ThenIShouldSeeTheDashboardPage()
        {
          //  ScenarioContext.Current.Pending(); lift my call whtsapp
        }
    }
}
