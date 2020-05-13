using BookSwagonTesting.Pages;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using System;
using TechTalk.SpecFlow;

namespace BookSwagonTesting
{
    [Binding]
    public class LogoutSteps
    {
        IWebDriver driver = new ChromeDriver();
        [Given(@"I have navigated to Login page of my Application")]
        public void GivenIHaveNavigatedToLoginPageOfMyApplication()
        {
            driver.Manage().Window.Maximize();
            driver.Navigate().GoToUrl("https://www.bookswagon.com/login");
        }
        [Given(@"I should enter (.*) and (.*)")]
        public void GivenIShouldEnterAnd(string p0, string p1)
        {
            LogoutPage logoutPage = new LogoutPage(driver);
            logoutPage.Login(p0, p1);
        }
        [When(@"I click on the login button to navigate dashboard")]
        public void WhenIClickOnTheLoginButtonToNavigateDashboard()
        {
            LogoutPage logoutPage = new LogoutPage(driver);
           // logoutPage.LoginClick();
        }

        [Then(@"I Should See the  dash Baord Page")]
        public void ThenIShouldSeeTheDashBaordPage()
        {
            LogoutPage logoutPage = new LogoutPage(driver);
        }

        [When(@"I have click on profile name")]
        public void WhenIHaveClickOnProfileName()
        {
            LogoutPage logoutPage = new LogoutPage(driver);
            logoutPage.ProfileClick();

        }

        [Then(@"I see the few options")]
        public void ThenISeeTheFewOptions()
        {
            LogoutPage logoutPage = new LogoutPage(driver);

        }

        [When(@"I click signout button")]
        public void WhenIClickSignoutButton()
        {
            LogoutPage logoutPage = new LogoutPage(driver);
          //  logoutPage.LogoutClick();
        }

        [Then(@"I should see the login page")]
        public void ThenIShouldSeeTheLoginPage()
        {
           
        }
    }
}
