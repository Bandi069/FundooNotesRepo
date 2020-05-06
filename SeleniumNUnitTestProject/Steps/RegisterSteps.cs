using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using SeleniumNUnitTestProject.Pages;
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

        [Given(@"I typed the (.*),(.*),(.*) and (.*)")]
        public void GivenITypedTheAnd(string FirstName,string LastName, string Email, string Password)
        {
          //  RegisterPage registerPage = new RegisterPage();
            
        }
        [When(@"I click on the submit button")]
        public void WhenIClickOnTheSubmitButton()
        {

        }
        
        [Then(@"Isee the login page")]
        public void ThenIseeTheLoginPage()
        {
            ///ScenarioContext.Current.Pending();
        }
    }
}
