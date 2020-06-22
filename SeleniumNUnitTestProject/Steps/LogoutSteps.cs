using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using SeleniumNUnitTestProject.Pages;
using System;
using TechTalk.SpecFlow;

namespace SeleniumNUnitTestProject.Steps
{
    [Binding]
    class LogoutSteps
    {
        IWebDriver driver = new ChromeDriver();

        [Given(@"I sholud navigate to dashbaord page of the application")]
        public void GivenISholudNavigateToDashbaordPageOfTheApplication()
        {
            driver.Manage().Window.Maximize();
            driver.Navigate().GoToUrl("http://localhost:4200/dashboard/note");
        }
        
        [When(@"I press on the singout button in the dashboard")]
        public void WhenIPressOnTheSingoutButtonInTheDashboard()
        {
            LogoutPage logout = new LogoutPage(driver);
            logout.ClickSignout();
        }

        [Then(@"I should see loginpage")]
        public void ThenIShouldSeeLoginpage()
        {
            ScenarioContext.Current.Pending();
        }
    }
}
