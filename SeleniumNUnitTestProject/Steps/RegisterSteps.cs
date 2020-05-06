using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using System;
using TechTalk.SpecFlow;

namespace SeleniumNUnitTestProject
{
    [Binding]
    public class RegisterSteps
    {
        IWebDriver driver = new ChromeDriver();
        [Given(@"I have navigate to register application form")]
        public void GivenIHaveNavigateToRegisterApplicationForm()
        {
            driver.Navigate().GoToUrl("http://localhost:4200/register");
        }
        
        [When(@"I click on the submit button")]
        public void WhenIClickOnTheSubmitButton()
        {
           // ScenarioContext.Current.Pending();
        }
        
        [Then(@"Isee the login page")]
        public void ThenIseeTheLoginPage()
        {
            ///ScenarioContext.Current.Pending();
        }
    }
}
