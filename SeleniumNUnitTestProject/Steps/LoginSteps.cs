
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using SeleniumNUnitTestProject.Pages;
using System;
using System.Configuration;
using TechTalk.SpecFlow;
using UnitTestProject.Pages;

namespace UnitTestProject.Steps
{
    [Binding]
    public class LoginSteps
    {
        IWebDriver currentDriver = new ChromeDriver();

        [Given(@"I have navigate to my login application")]
        public void GivenIHaveNavigateToMyLoginApplication()
        {
            currentDriver.Navigate().GoToUrl("http://localhost:4200/login");
        }

        [Given(@"I typed the (.*) and (.*)")]
        public void GivenITypedTheAnd(string Emailid, string Password)
        {
            LoginPage loginPage = new LoginPage(currentDriver);
            loginPage.Login(Emailid, Password);

        }

        [When(@"I click on login button")]
        public void WhenIClickOnLoginButton()
        {
            LoginPage loginPage = new LoginPage(currentDriver);
           PropertyCollection.Currentpage=loginPage.ClickLogin();
        }

        [Then(@"I see the dashboard page")]
        public void ThenISeeTheDashboardPage()
        {
            ////ScenarioContext.Current.Pending();
        }
    }
}
